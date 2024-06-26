"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { fetchUser } from "@/app/redux/slices/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { NextApiResponse } from "next";
import { useRouter } from "next/navigation";
import { fetchUserData } from "@/app/redux/slices/authSlice";
import { UserData } from "../../types/type";

export default function useMainPage() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const userData = useAppSelector((state) => state.fetchUser.userData);
  const userProfileData = useAppSelector(
    (state) => state.fetchUserData.userData
  );

  const router = useRouter();
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userData !== null) {
      // console.log("state", userData);
      const useremail = userData.filter(
        (item) => item.userEmail === userProfileData?.email
      );
      setData(useremail);
    }
  }, [userData]);

  const handleDelete = async (id: any) => {
    try {
      const response = await axios.delete("/api/urlshortner", {
        data: { id },
      });

      if (response.status === 200) {
        dispatch(fetchUser());

        toast.success(response.data.message);
      } else {
        console.error("Failed to delete URL:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting URL:", error);
      toast.error("Error deleting URL");
    }
  };

  const getUrlFromShortId = async (shortId: any) => {
    const filteredItem = data.find((item: any) => item.shortId === shortId);

    if (filteredItem) {
      const longUrl = filteredItem.longUrl;
      // console.log("Filtered Item:", filteredItem);
      // console.log("Long URL:", longUrl);

      if (longUrl) {
        try {
          handleUpdate(shortId);
          window.open(longUrl, "_blank");
          dispatch(fetchUser());
        } catch (error) {
          console.error("Error redirecting to long URL:", error);
        }
      } else {
        console.error("No longUrl found for the provided shortId");
      }
    } else {
      console.error("No item found with the provided shortId");
    }
  };

  const handleUpdate = async (shortId: any) => {
    try {
      const response = await axios.put("/api/urlshortner", { shortId });

      if (response.status === 200) {
        // console.log(response.data.message);
        toast.success(response.data.message);

        return {
          message: response.data.message,
          longUrl: response.data.longUrl,
          shortId: response.data.shortId,
          clickCount: response.data.clickCount,
          id: response.data.id,
        };
      } else {
        console.error("Failed to update URL:", response.statusText);
        toast.success("Failed to update URL");
        return { error: "Failed to update URL" };
      }
    } catch (error) {
      console.error("Error updating URL:", error);
      return { error: "Error updating URL" };
    }
  };

  // console.log("Data", data);
  return {
    data,
    handleDelete,
    getUrlFromShortId,
    handleUpdate,
    loading,
    setLoading,
    userData,
    userProfileData,
  };
}
