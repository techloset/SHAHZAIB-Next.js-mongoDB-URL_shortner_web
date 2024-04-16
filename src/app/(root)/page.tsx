import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../../libs/AuthOptions";
import LogoutBtn from "../../../components/LogoutBtn";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className="text-lime-500 text-center text-2xl">User Profile</div>

      <div>Protected Dashboard, hello: {session?.user?.name} </div>
      <div>Protected Dashboard, hello: {session?.user?.email} </div>
      <LogoutBtn />
    </main>
  );
}
