import {
  messageType,
  SelectFieldProps,
  SpecialBorderProps,
} from "@/types/components";
import React from "react";
import { CustomSelect } from "../ui/select/custom-select";
import FieldError from "./field-error";
import { InputLabel } from "./input-label";

const CustomFormSelect = ({
  id,
  labelStyles,
  label,
  error,
  value = { label: "", value: "" },
  defaultValue,
  isRequired,
  isLoading,
  messageType,
  onChange,
  options,
  fieldHasBorder,
  borderStyling,
  ...inputProps
}: SelectFieldProps & SpecialBorderProps & { messageType: messageType }) => {
  return (
    <div className="text-sm" data-testid="">
      <div className="mb-2 flex w-full items-center justify-between">
        <InputLabel
          htmlFor={id}
          className={labelStyles}
          label={label as string}
          shouldBold={true}
          error={error as string}
          hasRequiredStar={isRequired}
        />

        {/* <div className="mt-1 text-right text-sm text-neutral-500">
                {charCount}/{maxLength}
            </div> */}
      </div>{" "}
      {/*${fieldHasBorder ? borderStyling :  'border-none outline-none'*/}
      <div
        data-testid="custom-textarea"
        className={`relative flex w-full items-center rounded border placeholder:text-neutral-600 disabled:bg-black ${error ? "border-primary-red-400 text-primary-red-400 outline-primary-red-400" : `text-text-primary ${fieldHasBorder ? borderStyling : "border-none outline-none"}`} ${inputProps.disabled && "cursor-not-allowed text-neutral-600"} ${inputProps.className}`}
      >
        <CustomSelect
          value={value}
          onChange={onChange}
          options={options}
          {...inputProps}
        />
      </div>
      {!isLoading && (messageType || error) && (
        <div className={`flex items-center mt-[0.5rem]`}>
          <span className="ml-1 text-xs">
            {messageType?.type === "error" || error ? (
              <FieldError
                error={error}
                message={messageType?.message}
                extra={"extra"}
              />
            ) : (
              messageType?.message
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default CustomFormSelect;
