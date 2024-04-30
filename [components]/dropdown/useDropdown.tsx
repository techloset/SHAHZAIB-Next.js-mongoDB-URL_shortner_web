"use client";
import { useState } from 'react'
import { signOut } from "next-auth/react";
import toast from 'react-hot-toast';

export default function useDropdown() {
const [isOpen, setIsOpen] = useState(false);

const logout = () =>{
  signOut({
  });
  toast.success("User logged out successfully ")
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
