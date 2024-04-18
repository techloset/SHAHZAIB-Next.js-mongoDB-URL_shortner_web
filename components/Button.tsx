import React from 'react'

export default function Button() {
  return (
    <div>
      <div className="h-[60px] w-[178px] rounded-full bg-blue-700 hidden md:block">
        <p className="text-white flex justify-center items-center mt-1 cursor-pointer">
          Register Now
        </p>
      </div>
    </div>
  );
}
