"use client"
import React, { useEffect, useState } from 'react'
import Input from '../input/Input';
import Button from '../button/Button';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { fetchUserData } from '@/app/redux/slices/authSlice';
import toast from 'react-hot-toast';

export default function ResetPage() {
      const dispatch = useAppDispatch();
      const userData = useAppSelector((state) => state.fetchUserData.userData);
    //   const [data , setData] = useState(userData);
      const [currentPassword, SetCurrentPassword] = useState("");
      const [newPassword, SetNewPassword] = useState("");
      const [confirmPassword, SetConfirmPassword] = useState("");

useEffect(() => {
  dispatch(fetchUserData());
}, [dispatch]);


 async function handlePasswordReset() {
   try {
     if (newPassword !== confirmPassword) {
       toast.success("New password and confirm password dose not  match.");
    }

     const response = await fetch("/api/reset", {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         currentPassword,
         newPassword,
         confirmPassword,
         hashedPassword: userData?.hashedPassword ,
       }),
     });
     if (!response.ok) {
       const errorMessage = await response.text();
       throw new Error(errorMessage);
     }

     const data = await response.json();
     toast.success("Password reset successful:");
     console.log("Password reset successful:", data);
   } catch (error) {
     console.error("Password reset failed:", error);
   }
 }

  return (
    <div className="flex flex-col">
      <Input
        type="password"
        placeholder="   Current Password"
        value={currentPassword}
        onChange={(e) => SetCurrentPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="   New Password"
        value={newPassword}
        onChange={(e) => SetNewPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="   Confirm New Passward"
        value={confirmPassword}
        onChange={(e) => SetConfirmPassword(e.target.value)}
      />
      <Button name="Reset" onClick={handlePasswordReset} />
    </div>
  );
}
