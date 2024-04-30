"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Button from "../../[components]/button/Button";
import { link } from "../../src/app/constants/constants";
import toast from "react-hot-toast";

interface ApiResponse {
  message: string;
}

const useAddEdit = () => {
  const [longUrl, setLongUrl] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleLongUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLongUrl(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/urlshortner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });
      const data: ApiResponse = await response.json();
      if (response.ok) {
        setMessage(data.message);
        toast.success("URL Short Successfully Added");
        setLongUrl("");
      } else {
        setMessage("Failed to create URL");
      }
    } catch (error) {
      console.error("Error creating URL:", error);
      setMessage("Something went wrong");
    }
  };

  return {
    longUrl,
    message,
    handleLongUrlChange,
    handleSubmit,
  }
};

export default useAddEdit;