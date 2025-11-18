import { useState } from "react";

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
      console.log(field, value)
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
  };

  const handleSignupSubmit = () => {
    if (signupFormData.password !== signupFormData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    console.log("SIGNUP DATA:", signupFormData);
    // add signup API request here...
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
