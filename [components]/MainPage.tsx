import QR from "../public/accets/images/QR.svg";
import Copy from "../public/accets/images/copy.svg";
import lnk from "../public/accets/images/link.svg";
import del from "../public/accets/images/arrow-1.svg";
import edit from "../public/accets/images/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainPage() {
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
          <tr>
            <td className="text-center py-5">
              <div className="flex justify-center items-center">
                <div className="flex">
                    <div>qwertysdfgh</div>
                  <Image src={Copy} alt="copy" className="ml-3" />
                </div>
              </div>
            </td>
            <td className="text-center py-5">qwertyuisdfghjxcvbwertydfgh</td>
            <td className="text-center py-5 flex justify-center items-center">
              <Image src={QR} alt="QR" className="h-[36px] w-[36px] " />
            </td>
            <td className="text-center">720</td>
            <td className="text-center">
              <div className="flex justify-center items-center">
                <div className=" text-green-600">Active</div>
                <div>
                  <Image src={lnk} alt="" className="ml-3" />
                </div>
              </div>
            </td>
            <td className="text-center">Apr-16-2024</td>
            <td className="text-center">
              <div className="flex items-center justify-center">
                <Link href={"/add"}>
                  <div className="h-[42px] w-[42px] bg-slate-500 rounded-3xl flex justify-center ">
                    <Image src={edit} alt="edit" className="" />
                  </div>
                </Link>
                <div className="h-[42px] w-[42px] bg-slate-500 rounded-3xl flex justify-center ml-2">
                  <Image src={del} alt="delete" className="" />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
  );
}
