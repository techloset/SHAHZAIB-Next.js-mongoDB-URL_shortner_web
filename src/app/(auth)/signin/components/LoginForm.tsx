"use client";

import React, { useEffect, useState } from "react";
import Input from "../../../../../components/Input";
import toast from "react-hot-toast";
import { signIn, signOut } from "next-auth/react";

export default function LoginForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Correct login");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      <input
        type="email"
        placeholder="   Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white"
      />

      <input
        type="password"
        placeholder="   Passward"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        className="w-[660px] h-[76px] rounded-[48px] border-[4px] border-gray-400 bg-slate-800 mt-10 text-white"
      />

      <button
        onClick={handleLogin}
        className="w-[268px] h-[48px] rounded-[48px]  border-[1px] bg-blue-700 text-white ml-[200px] mt-10 cursor-pointer"
      >
        Login
      </button>
    </div>
  );
}
