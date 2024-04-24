"use client";


import QR from "../public/accets/images/QR.svg";
import Copy from "../public/accets/images/copy.svg";
import lnk from "../public/accets/images/link.svg";
import del from "../public/accets/images/arrow-1.svg";
import edit from "../public/accets/images/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { fetchUser } from "@/app/redux/slices/userSlice";
import axios from 'axios';
import toast from 'react-hot-toast';

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

const handleDelete = async (id : any) => {
  try {
    const response = await axios.delete("/api/urlshortner", {
      data: { id }, 
    });

    if (response.status === 200) {
      console.log(response.data.message);
      toast.success(response.data.message);
    } else {
      console.error("Failed to delete URL:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting URL:", error);
    toast.error("Error deleting URL");
  }
};


const handleUpdate = async (shortId : any)  => {
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
    toast.success("Error updating URL");
    return { error: "Error updating URL" };
  }
};



  console.log("Data", data);
  return (
    <div className="  bg-black w-[1421px] h-[800px] ">
      <table className="text-white w-[1421px]">
        <tr>
          <th className="text-center">Short Link</th>
          <th className="text-center">Original Link</th>
          <th className="text-center">QR Code</th>
          <th className="text-center">Clicks</th>
          <th className="text-center">Status</th>
          <th className="text-center">Date</th>
          <th className="text-center">Action</th>
        </tr>
        {data?.map((item, i) => {
          return (
            <tr key={i}>
              <td className="text-center py-5">
                <div className="flex justify-center items-center">
                  <div className="flex">
                    <div
                      onClick={() => {
                        handleUpdate(item?.shortId);
                      }}
                    >
                      {item.shortId}
                    </div>
                    <Image src={Copy} alt="copy" className="ml-3" />
                  </div>
                </div>
              </td>
              <td className="text-center py-5 hover:text-blue-700">
                {item.longUrl?.slice(0, 30)}
              </td>
              <td className="text-center py-5 flex justify-center items-center">
                <Image src={QR} alt="QR" className="h-[36px] w-[36px] " />
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
                    <div className="h-[42px] w-[42px] bg-slate-500 rounded-3xl flex justify-center ">
                      <Image src={edit} alt="edit" className="" />
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
