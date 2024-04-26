"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { fetchUser } from "@/app/redux/slices/userSlice";
import { QR, Copy, lnk, del, edit } from "@/app/constants/constants";

import axios from "axios";
import toast from "react-hot-toast";
import { NextApiResponse } from "next";
import { useRouter } from "next/navigation";

interface UserData {
  id: string | null;
  longUrl: string | null;
  shortId: string | null;
  clickCount: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  date: string | null;
}

export default function MainPage() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.fetchUser.userData);
  const router = useRouter();
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (userData !== null) {
      console.log("state", userData);
      setData(userData);
    }
  }, [userData]);

  const handleDelete = async (id: any) => {
    try {
      const response = await axios.delete("/api/urlshortner", {
        data: { id },
      });

      if (response.status === 200) {
        console.log(response.data.message);
        dispatch(fetchUser());

        toast.success(response.data.message);
      } else {
        console.error("Failed to delete URL:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting URL:", error);
      toast.error("Error deleting URL");
    }
  };

  const getUrlFromShortId = async (shortId : any , res: NextApiResponse) => {
    const filteredItem = data.find((item: any) => item.shortId === shortId);

    if (filteredItem) {
      const longUrl = filteredItem.longUrl;
      console.log("Filtered Item:", filteredItem);
      console.log("Long URL:", longUrl);

      if (longUrl) {
        try {
          handleUpdate(shortId);
          window.open(longUrl, "_blank");
          dispatch(fetchUser());
        } catch (error) {
          console.error("Error redirecting to long URL:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      } else {
        console.error("No longUrl found for the provided shortId");
        res.status(404).json({ error: "Short URL not found" });
      }
    } else {
      console.error("No item found with the provided shortId");
      res.status(404).json({ error: "Short URL not found" });
    }
  };

  const handleUpdate = async (shortId: any) => {
    try {
      const response = await axios.put("/api/urlshortner", { shortId });

      if (response.status === 200) {
        console.log(response.data.message);
        toast.success(response.data.message);

        return {
          message: response.data.message,
          longUrl: response.data.longUrl,
          shortId: response.data.shortId,
          clickCount: response.data.clickCount,
          id: response.data.id,
        };
      } else {
        console.error("Failed to update URL:", response.statusText);
        toast.success("Failed to update URL");
        return { error: "Failed to update URL" };
      }
    } catch (error) {
      console.error("Error updating URL:", error);
      return { error: "Error updating URL" };
    }
  };

  console.log("Data", data);
  return (
    <div className="  bg-black w-[1421px] h-[800px] ">
      <table className="text-white w-[1421px]">
        <tr>
          <th className="text-center text-xl">Short Link</th>
          <th className="text-center text-xl">Original Link</th>
          <th className="text-center text-xl">QR Code</th>
          <th className="text-center text-xl">Clicks</th>
          <th className="text-center text-xl">Status</th>
          <th className="text-center text-xl">Date</th>
          <th className="text-center text-xl">Action</th>
        </tr>
        {data?.map((item, i) => {
          return (
            <tr key={i}>
              <td className="text-center py-5">
                <div className="flex justify-center items-center">
                  <div className="flex">
                    <div
                      onClick={() => {
                        getUrlFromShortId(item?.shortId);
                      }}
                    >
                      {item.shortId}
                    </div>
                    <Image src={Copy} alt="copy" className="ml-3" />
                  </div>
                </div>
              </td>
              <td className="text-center py-5 hover:text-blue-700">
                {item.longUrl?.slice(0, 30)}......
              </td>
              <td className="text-center py-5 flex justify-center items-center">
                <Image src={QR} alt="QR" className="h-[36px] w-[36px] mt-4" />
              </td>
              <td className="text-center">{item.clickCount}</td>
              <td className="text-center">
                <div className="flex justify-center items-center">
                  <div className=" text-green-600">Active</div>
                  <div>
                    <Image src={lnk} alt="" className="ml-3" />
                  </div>
                </div>
              </td>
              <td className="text-center">{item.createdAt?.slice(0, 12)}</td>
              <td className="text-center">
                <div className="flex items-center justify-center">
                  <Link href={"/add"}>
                    <div className="h-[42px] w-[42px] bg-red-500 rounded-3xl flex justify-center ">
                      <Image src={edit} alt="edit" className="h-16 w-16" />
                    </div>
                  </Link>
                  <div
                    className="h-[42px] w-[42px] bg-slate-500 rounded-3xl flex justify-center ml-2"
                    onClick={() => {
                      handleDelete(item?.id);
                    }}
                  >
                    <Image src={del} alt="delete" className="" />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
