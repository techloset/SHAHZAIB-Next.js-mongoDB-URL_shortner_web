"use client";

import React, { useEffect, useState } from "react";
import Input from "../../../../../[components]/input/Input";
import toast from "react-hot-toast";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "../../../../../[components]/button/Button";
import Loader from "../../../../../[components]/Loader";

export default function useLoginForm() {
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

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  }
}
