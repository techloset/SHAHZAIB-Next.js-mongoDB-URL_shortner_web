"use client";

import Image from "next/image";
import Button from "../../[components]/button/Button";
import { link } from "../../src/app/constants/constants";
import useAddEdit from "./useAddEdit";



const AddEdit: React.FC = () => {
  const { longUrl, handleLongUrlChange, handleSubmit } = useAddEdit();
  

  return (
    <div className="flex flex-col items-center ">
      <div className="relative  ">
        <Image
          className="absolute top-1/3 left-4 transform -translate-y-1/2 mt-6 ml-8"
          src={link}
          alt="Link Icon"
        />
        <input
          className="text-3xl outline-none p-[24px] pl-[48px] border-[4px] border-[#353C4A] w-[1100px] h-[76px] rounded-[48px] mb-[32px] peer focus:border-[#144EE31A] bg-slate-600 drop-shadow-[#0000001A] text-white text-[25px] px-5"
          placeholder="           Enter the link to shorten here"
          type="text"
          value={longUrl}
          onChange={handleLongUrlChange}
        />
      </div>
      <div className="relative mt-10 ">
        <Image
          className="absolute top-1/3 left-4 transform -translate-y-1/2  mt-6 ml-8"
          src={link}
          alt="Link Icon"
        />
        <input
          className="text-3xl outline-none p-[24px] pl-[48px] border-[4px] border-[#363f52] w-[1100px] h-[76px] rounded-[48px] mb-[32px] peer focus:border-[#144EE31A] bg-slate-600 drop-shadow-[#0000001A] text-white text-[25px] px-5"
          placeholder="            Enter custom slug"
        />
      </div>

      <Button name="Shorten Now!" onClick={handleSubmit} />
    </div>
  );
};

export default AddEdit;