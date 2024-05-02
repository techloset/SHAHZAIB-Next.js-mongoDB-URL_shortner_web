"use client";
import Image from "next/image";
import Link from "next/link";
import { Copy, lnk, del, edit } from "@/app/constants/constants";
import QRCode from "qrcode.react";
import Loader from "../Loader";
import useMainPage from "./useMainPage";

export default function MainPage() {
  const { data, handleDelete, getUrlFromShortId, loading } = useMainPage();
  return (
    <div className="  bg-black w-[1421px] h-screen">
      <>
        {loading ? (
          <Loader />
        ) : (
          <table className="text-white w-[1421px]">
            <thead>
              <tr>
                <th className="text-center text-xl">Short Link</th>
                <th className="text-center text-xl">Original Link</th>
                <th className="text-center text-xl">QR Code</th>
                <th className="text-center text-xl">Clicks</th>
                <th className="text-center text-xl">Status</th>
                <th className="text-center text-xl">Date</th>
                <th className="text-center text-xl">Action</th>
              </tr>
            </thead>
            {data?.map((item, i) => {
              return (
                <tbody>
                  <tr key={i}>
                    <td className="text-center py-5">
                      <div className="flex justify-center items-center">
                        <div className="flex">
                          <div
                            className=""
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
                      {item.longUrl?.slice(0, 30)}...
                    </td>
                    <td className="text-center py-5 flex justify-center items-center">
                      <QRCode value={item.longUrl || ""} size={38} />
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
                    <td className="text-center">
                      {item.createdAt?.slice(0, 12)}
                    </td>
                    <td className="">
                      <div className="flex items-center justify-center h-20">
                        <div className="h-[100px] w-[100px] bg-red-600">
                          <Link href={"/add"}>
                            <div className=" ">
                              <Image
                                src={edit}
                                alt="edit"
                                className="h-[36px] w-[36px] bg-red-700 flex justify-center "
                              />
                            </div>
                          </Link>
                        </div>
                        <div
                          className="h-[42px] w-[42px] bg-slate-500 rounded-3xl flex justify-center ml-2"
                          onClick={() => {
                            handleDelete(item?.id);
                          }}
                        >
                          <Image
                            src={del}
                            alt="delete"
                            className="h-[16px] w-[16px]"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </>
    </div>
  );
}
