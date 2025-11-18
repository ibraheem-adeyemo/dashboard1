"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import { useAlert } from "@/hooks/useAlert";
import { LoginForm } from "@/pages/auths/LoginForm";
import { useLogoutMutation } from "@/redux/services/login-api";
import { InitialStateProps, selectDummyData } from "@/redux/slices/dummy/dummySlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {

    const state:InitialStateProps = useAppSelector(selectDummyData);
    const userLogginStatus = state.isUserLoggedIn;
    const router = useRouter();

    const { showError } = useAlert()
    useEffect(() => {
      if(state.isUserLoggedIn){
        router.push("/dashboard")
      }else {
          console.log(state)
          showError(state?.info?.message)
      }
    }, [state.isUserLoggedIn, state.info])
    
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
