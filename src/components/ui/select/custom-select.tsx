"use client";

import { CustomSelectProps, OptionProp } from "@/types/components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./base-select";

export const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = "Select...",
  side = "bottom",
  triggerClassName = "",
  contentClassName = "",
  testIdPrefix = "select",
}: CustomSelectProps) => {
  return (
    <Select
      data-testid={`${testIdPrefix}-select`}
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger
        data-testid={`${testIdPrefix}-trigger`}
        className={`!focus:border-none !focus:outline-none !focus:ring-0 !active:ring-0 h-8 cursor-pointer border-0 !ring-0 !outline-none ${triggerClassName}`}
      >
        <SelectValue
          placeholder={placeholder}
          data-testid={`${testIdPrefix}-value`}
        />
      </SelectTrigger>

      <SelectContent
        side={side}
        className={`!bg-surface-primary !text-text-secondary border-0 px-1 shadow-md ${contentClassName}`}
        data-testid={`${testIdPrefix}-content`}
      >
        {options.map(({ label, value }) => (
          <SelectItem
            key={value}
            value={value}
            className="!text-text-secondary hover:bg-button-outline-stroke-enabled"
            data-testid={`${testIdPrefix}-option-${value}`}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
