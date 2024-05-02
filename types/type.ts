import  { ChangeEvent } from "react";


export interface ApiResponse {
  message: string;
}

export interface ButtonProps {
  name?: string;
  onClick?: () => void;
}

export interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
}

export interface UserData {
  id: string | null;
  longUrl: string | null;
  shortId: string | null;
  userEmail: string | null;
  clickCount: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  date: string | null;
}

export interface UserProfileData {
    id: string | null;
    email: string | null;
    name: string | null;
    hashedPassword: number | null;
    confirmPassword: string | null;
    createdAt: string | null;
    updatedAt: string | null;
}

export interface UserProfileState {
    userData: UserProfileData | null;
    loading: boolean;
    error: string | null;
}


export interface UserState {
    userData: UserData[] | null;
    loading: boolean;
    error: string | null;
}

export interface SessionProps {
  user: {
    email: string;
  };
}