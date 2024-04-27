"use client";

import QR from "../../public/accets/images/QR.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { fetchUser } from "@/app/redux/slices/userSlice";
import { fetchUserData } from "@/app/redux/slices/authSlice";
import { NextApiResponse } from "next";
import toast from "react-hot-toast";
import axios from "axios";

interface UserData {
  id: string | null;
  longUrl: string | null;
  shortId: string | null;
  clickCount: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  date: string | null;
}

export default function TrialPage() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.fetchUser.userData);
  const userProfileData = useAppSelector(
    (state) => state.fetchUserData.userData
  );

  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userData !== null) {
      console.log("state", userData);
      const useremail = userData.filter(
        (item) => item.userEmail === userProfileData?.email
      );
      setData(useremail);
    }
  }, [userData]);

  console.log("Data", data);

  const getUrlFromShortId = async (shortId: any, res: NextApiResponse) => {
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

  return (
    <div className="w-[1421px] h-full ">
      <table className="text-white w-[1421px]">
        <tr className=" bg-red-500 border-4 border-white h-[63px] ">
          <th className="text-center">ShortLink</th>
          <th className="text-center">OriginalLink</th>
          <th className="text-center">QR Code</th>
          <th className="text-center">Clicks</th>
          <th className="text-center">Status</th>
          <th className="text-center">Date</th>
        </tr>
        {data?.map((item, i) => {
          if (i < 15) {
            return (
              <tr key={i}>
                <td className="text-center py-5">
                  <div
                    onClick={() => {
                      getUrlFromShortId(item?.shortId);
                    }}
                  >
                    {item.shortId}
                  </div>
                </td>
                <td className="text-center">{item.longUrl?.slice(0, 30)}</td>
                <td className="flex justify-center items-center mt-4 ">
                  <Image src={QR} alt="qr" />
                </td>
                <td className="text-center">{item.clickCount}</td>
                <td className="text-center text-green-500">Inactive</td>
                <td className="text-center">{item.createdAt?.slice(0, 12)}</td>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
}
