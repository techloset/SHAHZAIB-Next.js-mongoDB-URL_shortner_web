import QR from "../public/accets/images/QR.svg";
import React from 'react'
import Image from 'next/image';

export default function TrialPage() {
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
            <tr>
              <td className="text-center py-5">qwertyu</td>
              <td className="text-center">sdfghjwertyuwertywert</td>
              <td className="text-center">
                <Image src={QR} alt="qr" />
              </td>
              <td className="text-center">1234</td>
              <td className="text-center">Inactive</td>
              <td className="text-center">Apr-17-2024</td>
            </tr>
          </table>
        </div>
      
   
  )
}
