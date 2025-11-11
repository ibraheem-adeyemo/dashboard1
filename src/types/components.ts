import { ReactNode } from "react";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type CustomButtonProps = {
  text: string | React.ReactNode;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: React.ReactNode;
} & ButtonProps;

interface BaseSelectFieldProps {
  onChange: (value: OptionProp | OptionProp[]) => void;
}

type BasePasswordFieldProps = {
    hasStrengthMeter?: boolean;
};

export type CustomLabelProps = {
  error?: string;
  label: string;
  htmlFor?: string;
  idValue?: string;
  icon?: string;
  className?: string;
  shouldBold?: boolean;
  fieldHasBorder?: boolean;
  borderStyling?: string;
  hasRequiredStar?: boolean;
};

export type OptionProp = {
  label: string;
  value: string;
};

export interface SelectFieldProps extends BaseSelectFieldProps {
  id: string;
  name?: string;
  placeholder: string;
  options: OptionProp[];
  isMulti?: false;
  isSearchable?: boolean;
  searchPlaceholder?: string;
  defaultValue?: OptionProp;
  error?: string;
  label?: string;
  isLoading?: boolean;
  onOpen?: () => void;
  extra?: React.ReactNode;
  disabled?: boolean;
  labelStyles?: string;
  isRequired?: boolean;
  className?: string;
  value?: OptionProp;
}

export type CustomInputProps = {
    preAppend?: React.ReactNode;
    postAppend?: React.ReactNode;
    isLoading?: boolean;
    error?: string | ReactNode;
    inputType?: 'string' | 'number' | 'currency' | 'password';
    forgotPassword?: boolean;
    inputProps?:InputProps;
  } & Omit<InputProps, 'size'> &
    Omit<CustomLabelProps, 'label' | 'error'>;

export type CustomTextAreaProps = {
    messageType?: {
        type: 'error' | 'success' | 'info';
        message: string;
      };
    isLoading?: boolean;
    error?: string | ReactNode;
    labelStyles?: string;
    isRequired?: boolean;
    label?: string;
    borderStyling?: string;
    fieldHasBorder: boolean,
    maxLength?: number
    } & Omit<TextAreaProps, 'size'>;

export type CustomFieldProps = {
  messageType?: {
    type: 'error' | 'success' | 'info';
    message: string;
  };
  error?: string | ReactNode;
  extra?: React.ReactNode;
  extraBottom?: React.ReactNode;
  labelStyles?: string;
  isRequired?: boolean;
  isLoading?: boolean;
} & CustomLabelProps &
  CustomInputProps &
  BasePasswordFieldProps;    