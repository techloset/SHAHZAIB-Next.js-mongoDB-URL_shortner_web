"use client";

import React, { useEffect, useState } from "react";
import Input from "../../../../../[components]/Input";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleRegister = async () => {
    setLoading(true);
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
        confirmPassword,
      });

      toast.success("Registered Successfully");

      router.push("/signin");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <input
        type="email"
        placeholder="   Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white text-[30px] px-5"
      />
      <input
        type="text"
        placeholder="   Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
        className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white text-[30px] px-5"
      />
      <input
        type="password"
        placeholder="   Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white text-[30px] px-5"
      />
      <input
        type="password"
        placeholder="   Confirm Passward"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={loading}
        className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white text-[30px] px-5"
      />
      <button
        onClick={handleRegister}
        className="w-[268px] h-[48px] rounded-[48px]  border-[1px] bg-blue-700 text-white ml-[200px] mt-10 cursor-pointer"
      >
        Register
      </button>
    </div>
  );
}
