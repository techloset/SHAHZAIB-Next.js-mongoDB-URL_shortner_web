"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {signOut } from "next-auth/react";
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
      // console.log(err);
      toast.error(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    handleRegister,
  }
}
