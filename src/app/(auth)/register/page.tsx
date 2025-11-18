"use client";

import { SignupForm } from "@/pages/auths/SignupForm";
import Link from "next/link";

export default function SignupPage() {

  return (
    <div className="flex items-center  flex-col gap-10">
        <div className="flex flex-col items-center">
            <h2 className="font-bold">Welcome To Smart Cart Dashboard</h2>
            <span className="text-sm">Kindly provide your information to setup your store</span>
        </div>
        <SignupForm />
        <div>
            <span className="text-sm">Alredy have an account? Kindly </span><Link href="/login">Login </Link> <span>here</span>
        </div>
    </div>
  );
}
