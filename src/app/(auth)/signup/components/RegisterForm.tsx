"use client";

import React, { useEffect, useState } from "react";
import Input from "../../../../../[components]/Input";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "../../../../../[components]/Button";

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
      <Input
        type="email"
        placeholder="   Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="   Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="password"
        placeholder="   Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="   Confirm Passward"
        value={password}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button name="Register" onClick={handleRegister} />
    </div>
  );
}
