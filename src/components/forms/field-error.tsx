import { ReactNode } from "react";

interface FieldErrorProps {
  error?: string | ReactNode;
  message?: string | ReactNode;
  extra?: string | ReactNode;
}
const FieldError = ({ error, message, extra }: FieldErrorProps) => {
  if (!error || (typeof error === "string" && !error.trim())) {
    return null;
  }
  return (
    <p
      data-testid="field-error"
      role="alert"
      aria-live="polite"
      className="flex items-center gap-1 text-xs break-words text-red-500"
    >
      {typeof error === "string" ? error : message || extra}
    </p>
  );
};

export default FieldError;
