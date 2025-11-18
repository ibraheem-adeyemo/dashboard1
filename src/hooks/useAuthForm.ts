import { login, registerAUser } from "@/redux/slices/dummy/dummySlice";
import { useState } from "react";
import { useAppDispatch } from "./reduxHooks";

interface ILoginFormProp {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface ISignupFormProp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useAuthForm = () => {
    
    const appDispatch = useAppDispatch();

  const initialLoginValue: ILoginFormProp = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const initialSignupValue: ISignupFormProp = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  
  const [loginFormData, setLoginFormData] =
    useState<ILoginFormProp>(initialLoginValue);

  const [signupFormData, setSignupFormData] =
    useState<ISignupFormProp>(initialSignupValue);

  const updateLoginFormData = (field: keyof ILoginFormProp, value: any) => {
    setLoginFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateSignupFormData = (
    field: keyof ISignupFormProp,
    value: any
  ) => {
    setSignupFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLoginSubmit = () => {
    console.log("LOGIN DATA:", loginFormData);
    // add API request here...
    appDispatch(login(loginFormData));
  };

  const handleSignupSubmit = () => {
    if (signupFormData.password !== signupFormData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    console.log("SIGNUP DATA:", signupFormData);
    // add signup API request here...
    appDispatch(registerAUser(signupFormData));
  };

  return {
    // login
    loginFormData,
    initialLoginValue,
    updateLoginFormData,
    handleLoginSubmit,

    // signup
    signupFormData,
    initialSignupValue,
    updateSignupFormData,
    handleSignupSubmit,
  };
};
