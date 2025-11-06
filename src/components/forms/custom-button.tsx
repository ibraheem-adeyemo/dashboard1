import { CustomButtonProps } from "@/types/components";
import Spinner from "./custom-spinner";
const Button = ({
  text,
  isLoading,
  leftIcon,
  className,
  disabled,
  rightIcon,
  ...buttonProps
}: CustomButtonProps) => {
  return (
    <button
      data-testid="custom-button"
      className={`bg-button-primary-fill-enabled text-button-primary-label-all w-full cursor-pointer rounded px-8 py-4 ${className} ${disabled ? "opacity-50" : ""}`}
      disabled={disabled ?? isLoading}
      {...buttonProps}
    >
      {isLoading ? (
        <Spinner />
      ) : leftIcon ? (
        <span className="flex flex-row items-center justify-center space-x-2">
          {leftIcon}
          <span>{text}</span>
        </span>
      ) : (
        text
      )}
      {rightIcon}
    </button>
  );
};
export default Button;
