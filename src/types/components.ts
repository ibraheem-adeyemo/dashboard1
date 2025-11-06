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
