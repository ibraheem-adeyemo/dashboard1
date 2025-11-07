import { CustomLabelProps } from "../../types/components";

export const InputLabel = ({
  label,
  className,
  hasRequiredStar,
  htmlFor,
  idValue,
}: CustomLabelProps) => {
  return (
    <div className="flex items-start gap-1" data-testid="input-label">
      <label
        htmlFor={htmlFor}
        id={idValue}
        className={`text-text-primary text-sm font-semibold ${className}`}
      >
        {label}
      </label>
      {hasRequiredStar && <span className="text-primary-red-400">*</span>}
    </div>
  );
};
