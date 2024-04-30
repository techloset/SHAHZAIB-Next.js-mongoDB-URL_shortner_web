"use client";
import {arro,} from "../../src/app/constants/constants";
import React from 'react'
import useDropdown from './useDropdown';
import Image from 'next/image';
import Link from "next/link";

export default function Dropdown() {
    const { toggleDropdown, closeDropdown, isOpen, setIsOpen ,logout
} = useDropdown();
  return (
    <div className="relative">
      <Image
        src={arro}
        alt="Arrow"
        className="w-[25px] h-[25px] ml-5 mt-4 "
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-lg">
          <Link
            href={"/reset"}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={closeDropdown}
          >
            Reset Password
          </Link>
          <div onClick={logout}>
            <div
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Loug Out!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
