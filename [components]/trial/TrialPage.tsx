"use client";
import QRCode from "qrcode.react";
import Loader from "../Loader";
import useTrialPage from "./useTrialPage";

export default function TrialPage() {
  const { data, loading, getUrlFromShortId, userDataLoading } = useTrialPage();

  const newLoading = true;
  return (
    <div className="w-[1421px] h-full ">
      <>
        {userDataLoading ? (
          <Loader />
        ) : (
          <table className="text-white w-[1421px]">
            <thead>
              <tr className=" bg-red-500 border-4 border-white h-[63px] ">
                <th className="text-center">ShortLink</th>
                <th className="text-center">OriginalLink</th>
                <th className="text-center">QR Code</th>
                <th className="text-center">Clicks</th>
                <th className="text-center">Status</th>
                <th className="text-center">Date</th>
              </tr>
            </thead>
            {data?.map((item, i) => {
              if (i < 15) {
                return (
                  <tbody>
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
                      <td className="text-center">
                        {item.longUrl?.slice(0, 30)}
                      </td>
                      <td className="flex justify-center items-center mt-4 ">
                        <QRCode value={item.longUrl || ""} size={38} />
                      </td>
                      <td className="text-center">{item.clickCount}</td>
                      <td className="text-center text-green-500">Inactive</td>
                      <td className="text-center">
                        {item.createdAt?.slice(0, 12)}
                      </td>
                    </tr>
                  </tbody>
                );
              }
            })}
          </table>
        )}
      </>
    </div>
  );
}
