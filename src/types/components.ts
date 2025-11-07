import { ReactNode } from "react";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
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

export type CustomLabelProps = {
  error?: string;
  label: string;
  htmlFor?: string;
  idValue?: string;
  icon?: string;
  className?: string;
  shouldBold?: boolean;
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
