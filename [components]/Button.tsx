import React from 'react'
interface ButtonProps {
  name?: string;
  onClick?: () => void;
}
export default function Button({name,onClick } : ButtonProps) {
  return (
    <div>
      <button
        className="w-[268px] h-[48px] rounded-[48px]  border-[1px] bg-blue-700 text-white ml-[200px] mt-10 cursor-pointer"
        type="button"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}
