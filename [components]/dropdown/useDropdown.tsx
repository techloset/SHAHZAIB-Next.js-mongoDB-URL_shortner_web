"use client";
import { useState } from 'react'
import { signOut } from "next-auth/react";

export default function useDropdown() {
const [isOpen, setIsOpen] = useState(false);

const logout = () =>{
  signOut({
  });
}
 const toggleDropdown = () => {
   setIsOpen(!isOpen);
 };

 const closeDropdown = () => {
   setIsOpen(false);
 };
  return {
    toggleDropdown,
    closeDropdown,
    isOpen,
    setIsOpen,
    logout,
  };
}
