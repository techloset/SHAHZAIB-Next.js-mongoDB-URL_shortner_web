"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "../public/accets/images/link.svg";
import kink from "../public/accets/images/link.svg";
import Input from "./Input";


interface ApiResponse {
  message: string;
}

const AddEdit: React.FC = () => {
  const [longUrl, setLongUrl] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleLongUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLongUrl(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/urlshortner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      const data: ApiResponse = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setLongUrl("");
      } else {  
        setMessage("Failed to create URL");
      }
    } catch (error) {
      console.error("Error creating URL:", error);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="w-100% h-[686px] flex  flex-col items-center mt-32">
      <div className="flex flex-col">
        <div className="flex flex-row relative">
          <span className="">
            <Image
              src={Link}
              alt="Link"
              className="h-[25px] w-[25px] absolute ml-10 mt-20"
            />
          </span>
          <input
            type="text"
            value={longUrl}
            onChange={handleLongUrlChange}
            placeholder="         Enter the link to shorten here"
            className="w-[1100px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
          />
        </div>
        <div className="flex flex-row relative">
          <span className="h-[25px] w-[25] absolute ml-10 ">
            <Image src={kink} alt="Link" className="" />
          </span>
          <input
            type="text"
            placeholder="                Enter custom slug"
            onChange={handleLongUrlChange}
            className="w-[1100px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
          />
          <button className="w-[268px] h-[68px] rounded-[100px]  border-[1px] bg-blue-700 text-white ml-[827px] absolute cursor-pointer">
            Auto Generate
          </button>
        </div>

        <Button name="Shorten Now!" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddEdit;

// import Image from 'next/image';
// import Button from './Button';
// import kink from "../public/accets/images/link.svg";
// import React, { useState, ChangeEvent, FormEvent } from "react";

// interface ApiResponse {
//   message: string;
// }

// export default function () {

// const [longUrl, setLongUrl] = useState<string>("");
// const [message, setMessage] = useState<string>("");

// const handleLongUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
//   setLongUrl(e.target.value);
// };

// const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   try {
//     const response = await fetch("/api/post", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ longUrl }),
//     });

//     const data: ApiResponse = await response.json();
//     if (response.ok) {
//       setMessage(data.message);
//       setLongUrl("");
//     } else {
//       setMessage("Failed to create URL");
//     }
//   } catch (error) {
//     console.error("Error creating URL:", error);
//     setMessage("Something went wrong");
//   }
// };

//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-row relative">
//         <span className="h-[25px] w-[25] absolute ml-10 mt-16">
//           <Image src={kink} alt="Link" className="" />
//         </span>
//         <input
//           type="text"
//           placeholder="                  Enter the link to shorten here"
//           className="w-[1100px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
//         />
//       </div>
    //   <div className="flex flex-row relative">
    //     <span className="h-[25px] w-[25] absolute ml-10 mt-16 ">
    //       <Image src={kink} alt="Link" />
    //     </span>
    //     <input
    //       type="text"
    //       placeholder="                Enter custom slug"
    //       onChange={handleLongUrlChange}
    //       className="w-[1100px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
    //     />
    //     <button className="w-[268px] h-[68px] rounded-[100px]  border-[1px] bg-blue-700 text-white ml-[827px] mt-11 absolute cursor-pointer">
    //       Auto Generate
    //     </button>
    //   </div>

//       <Button name="Shorten Now!" onClick={handleSubmit}  />
//     </div>
//   );
// }
