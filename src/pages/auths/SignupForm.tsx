import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useAuthForm } from "@/hooks/useAuthForm";
import TextField from "@/components/forms/text-field";
import { LoginSchema } from "@/utils/schema";
import Button from "@/components/forms/custom-button";
import { BsEyeSlash } from "react-icons/bs";
import { SlEye } from "react-icons/sl";

export const SignupForm = () => {
  const [textType, setTextType] = useState<"password" | "text">("password");

  const { initialSignupValue, handleSignupSubmit, updateSignupFormData } =
    useAuthForm();
  return (
    <div className="w-full md:w-[70%]">
      <div className="w-full">
        <Formik
          enableReinitialize
          initialValues={initialSignupValue}
          validateOnBlur={true}
          validateOnChange={false}
          validationSchema={LoginSchema}
          onSubmit={handleSignupSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            dirty,
            isValid,
          }) => (
            <Form>
              <div className="flex justify-between gap-10">
                <TextField
                  id="fName"
                  name="firstName"
                  label="First Name"
                  placeholder="Enter a valid name"
                  value={values.firstName}
                  fieldHasBorder
                  className="bg-transparent border"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    updateSignupFormData("firstName", e.target.value);
                  }}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  messageType={{
                    type: errors,
                    message: touched.firstName && errors.firstName,
                  }}
                />

                <TextField
                  id="lName"
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter a valid name"
                  value={values.lastName}
                  fieldHasBorder
                  className="bg-transparent border w-[100%]"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    updateSignupFormData("lastName", e.target.value);
                  }}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  messageType={{
                    type: errors,
                    message: touched.lastName && errors.lastName,
                  }}
                />
              </div>
              <TextField
                id="email"
                name="email"
                label="Email"
                placeholder="Enter a valid email"
                value={values.email}
                fieldHasBorder
                className="bg-transparent border"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  updateSignupFormData("email", e.target.value);
                }}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                messageType={{
                  type: errors,
                  message: touched.email && errors.email,
                }}
              />
              <TextField
                id="Password"
                name="password"
                label="Password"
                placeholder="Kindly enter your password"
                type={textType}
                value={values.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  updateSignupFormData("password", e.target.value);
                }}
                fieldHasBorder
                className="bg-transparent border border-[var(--neutral-border)]"
                postAppend={
                  textType === "text" ? (
                    <SlEye onClick={() => setTextType("password")} />
                  ) : (
                    <BsEyeSlash onClick={() => setTextType("text")} />
                  )
                }
                onBlur={handleBlur}
                error={touched.passwprd && Boolean(errors.password)}
                messageType={{
                  type: errors,
                  message: touched.password && errors.password,
                }}
              />

              <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Kindly re-enter your password"
                type={textType}
                value={values.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  updateSignupFormData("confirmPassword", e.target.value);
                }}
                fieldHasBorder
                className="bg-transparent border border-[var(--neutral-border)]"
                onBlur={handleBlur}
                postAppend={
                  textType === "text" ? (
                    <SlEye onClick={() => setTextType("password")} />
                  ) : (
                    <BsEyeSlash onClick={() => setTextType("text")} />
                  )
                }
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                messageType={{
                  type: errors,
                  message: touched.confirmPassword && errors.confirmPassword,
                }}
              />

              <Button text="Register" className="mt-10" disabled={!isValid} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
