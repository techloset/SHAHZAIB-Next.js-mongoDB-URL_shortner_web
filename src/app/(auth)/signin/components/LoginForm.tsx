"use client";

import React, { useEffect, useState } from "react";
import Input from "../../../../../[components]/Input";
import toast from "react-hot-toast";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "../../../../../[components]/Button";
import Loader from "../../../../../[components]/Loader";

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
    <>
      {!loading ? (
        <div className="flex flex-col">
          <Loader />
          <Input
            type="email"
            placeholder="   Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href={"/forget"}>
            <div className="text-blue-700 pt-5 flex justify-end text-3xl ">
              Forget Password ?
            </div>
          </Link>
          <Button name="Login" onClick={handleLogin} />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
    </>
  );
}
