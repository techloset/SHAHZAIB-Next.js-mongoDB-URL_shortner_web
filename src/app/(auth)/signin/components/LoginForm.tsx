"use client";

import Input from "../../../../../[components]/input/Input";
import Link from "next/link";
import Button from "../../../../../[components]/button/Button";
import Loader from "../../../../../[components]/Loader";
import useLoginForm from "./useLoginForm";

export default function LoginForm() {
 const { email, setEmail, password, setPassword, loading, handleLogin } = useLoginForm()

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="flex flex-col">
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
          <div className="h-screen flex justify-center items-center"></div>
        </>
      )}
    </>
  );
}
