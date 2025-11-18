"use client";

import { LoginForm } from "@/pages/auths/LoginForm";
import Link from "next/link";

export default function LoginPage() {

  return (
    <div className="flex items-center  flex-col gap-10">
        <div className="flex flex-col items-center">
            <h2 className="font-bold">Welcome Back</h2>
            <span className="text-sm">To sign in please enter your email and password</span>
        </div>
      <LoginForm />
      <div>
            <span className="text-sm">Kindly click </span><Link href="/register">HERE </Link> <span>to create an account</span>
        </div>
    </div>
  );
}
