"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { fetchUserData } from "@/app/redux/slices/authSlice";
import toast from "react-hot-toast";

export default function useResetPage() {
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
          hashedPassword: userData?.hashedPassword,
        }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      toast.success("Password reset successful:");
      console.log("Password reset successful:", data);
      SetCurrentPassword('')
      SetNewPassword('')
      SetConfirmPassword('')
    } catch (error) {
      console.error("Password reset failed:", error);
    }
  }

  return {
    currentPassword,
    SetCurrentPassword,
    newPassword,
    SetNewPassword,
    confirmPassword,
    SetConfirmPassword,
    handlePasswordReset,
  }
}
