"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import { useAlert } from "@/hooks/useAlert";
import { SignupForm } from "@/pages/auths/SignupForm";
import {
  InitialStateProps,
  selectDummyData,
} from "@/redux/slices/dummy/dummySlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignupPage() {
  const state: InitialStateProps = useAppSelector(selectDummyData);
  const userLogginStatus = state.isUserLoggedIn;
  const router = useRouter();

  const { showError } = useAlert();
  useEffect(() => {
    if (state?.info?.status === "success") {
      router.push("/login");
    } else {
      showError(state?.info?.message);
    }
  }, [state.isUserLoggedIn, state.info]);

  return (
    <div className="flex items-center  flex-col gap-10">
      <div className="flex flex-col items-center">
        <h2 className="font-bold">Welcome To Smart Cart Dashboard</h2>
        <span className="text-sm">
          Kindly provide your information to setup your store
        </span>
      </div>
      <SignupForm />
      <div>
        <span className="text-sm">Alredy have an account? Kindly </span>
        <Link href="/login">Login </Link> <span>here</span>
      </div>
    </div>
  );
}
