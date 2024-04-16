"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutBtn() {
  return (
    <div
      className="text-center py-3 rounded-full bg-black text-white cursor-pointer"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </div>
  );
}
