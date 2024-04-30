"use client";

import { useState, ChangeEvent} from "react";
import toast from "react-hot-toast";
import { ApiResponse } from "../../types/type";

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