import React, { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
}

export default function Input({ value, onChange, type, placeholder }: InputProps) {
  return (
    <div className="">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white  text-[30px] px-5"
      />
    </div>
  );
}
