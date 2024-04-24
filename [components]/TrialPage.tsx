"use client";

import QR from "../public/accets/images/QR.svg";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { fetchUser } from "@/app/redux/slices/userSlice";



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

  console.log("Data", data);




  return (
    <div className="w-[1421px] h-[500px] ">
      <table className="text-white w-[1421px]">
        <tr className=" bg-black w-[1421px] h-[63px] ">
          <th className="text-center">ShortLink</th>
          <th className="text-center">OriginalLink</th>
          <th className="text-center">QR Code</th>
          <th className="text-center">Clicks</th>
          <th className="text-center">Status</th>
          <th className="text-center">Date</th>
        </tr>
        {data?.map((item, i) => {
          if (i < 5) {
            return (
              <tr key={i}>
                <td className="text-center py-5">{item.shortId}</td>
                <td className="text-center">{item.longUrl?.slice(0, 30)}</td>
                <td className="flex justify-center items-center py-5">
                  <Image src={QR} alt="qr" />
                </td>
                <td className="text-center">{item.clickCount}</td>
                <td className="text-center text-green-500" >Inactive</td>
                <td className="text-center">{item.createdAt?.slice(0, 12)}</td>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
}
