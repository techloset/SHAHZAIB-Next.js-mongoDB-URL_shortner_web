import React from 'react'
import { ButtonProps } from '../../types/type';

export default function Button({name,onClick } : ButtonProps) {
  return (
    <div className='flex justify-center'>
      <button
        className="w-[268px] h-[60px] rounded-[48px] border-[1px] bg-blue-700 text-white flex justify-center items-center mt-10 cursor-pointer"
        type="button"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}
