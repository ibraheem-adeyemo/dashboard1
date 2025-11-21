import React from "react";
import { Form, Formik } from "formik";
import { useAuthForm } from "@/hooks/useAuthForm";
import TextField from "@/components/forms/text-field";
import { LoginSchema } from "@/utils/schema";
import Button from "@/components/forms/custom-button";

export const LoginForm = () => {
  const { initialLoginValue, handleLoginSubmit, updateLoginFormData } =
    useAuthForm();
  return (
    <div className="w-full md:w-[70%]">
      <div className="w-full">
        <Formik
          enableReinitialize
          initialValues={initialLoginValue}
          validateOnBlur={true}
          validateOnChange={false}
          validationSchema={LoginSchema}
          onSubmit={handleLoginSubmit}
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
                  updateLoginFormData("email", e.target.value);
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
                placeholder="Kindly enter you password"
                type="password"
                value={values.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  updateLoginFormData("password", e.target.value);
                }}
                fieldHasBorder
                className="bg-transparent border border-[var(--neutral-border)]"
                onBlur={handleBlur}
                error={touched.passwprd && Boolean(errors.password)}
                messageType={{
                  type: errors,
                  message: touched.password && errors.password,
                }}
              />

              {/* Remember Me */}
              <div className="flex items-center mb-4">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={values.rememberMe}
                  onChange={(e) => {
                    handleChange(e);
                    updateLoginFormData("rememberMe", e.target.checked);
                  }}
                  className="mr-2"
                />
                <label>Remember Me</label>
              </div>

              <Button text="Log In" className="mt-10" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
