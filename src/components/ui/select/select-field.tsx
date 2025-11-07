import { useEffect, useRef, useState } from "react";

// import FieldError from "@/components/form/field-error";
import {
  //   MultiSelectFieldProps,
  OptionProp,
  SelectFieldProps,
} from "@/types/components";
// import { SearchIcon, ToggleDropdown } from "@/assets/icons/dashboard-icons";
// import CustomInput from "@/components/form/custom-input";
// import CheckBox from "@/components/form/custom-checkbox";
import { InputLabel } from "@/components/forms/input-label";
import CheckBox from "@/components/forms/custom-checkbox";
import { ToggleDropdown } from "@/assets/icons/dashboardIcons";

let globalSelectedOptions: Record<string, OptionProp> = {};

const SelectField = ({
  id,
  placeholder,
  options,
  isMulti = false,
  isLoading,
  defaultValue = undefined,
  label,
  labelStyles,
  isSearchable,
  searchPlaceholder,
  error,
  extra,
  disabled,
  isRequired,
  onChange,
  onOpen,
  className,
  value,
}: SelectFieldProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<
    OptionProp[] | OptionProp | undefined
  >(value !== undefined ? value : defaultValue);
  const [searchValue, setSearchValue] = useState<string>("");

  const searchRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleInputClick = () => {
    if (!disabled) {
      // Prevent toggling the menu when clicking on the input in multi-select mode
      if (!isMulti || !showMenu) {
        setShowMenu(!showMenu);
      }

      if (!showMenu && onOpen) {
        onOpen();
      }
    }
  };

  const getDisplay = (): React.ReactNode => {
    if (
      !selectedValue ||
      (isMulti && (selectedValue as OptionProp[]).length === 0)
    ) {
      return <span className="text-16 text-gray-30">{placeholder}</span>;
    }

    if (isMulti) {
      return (
        <div className="wrap flex items-start flex-wrap gap-1">
          {(selectedValue as OptionProp[]).map((option) => (
            <div
              key={option.value}
              className="bg-active-blue-100 text-active-blue-400 border-active-blue-400 flex items-center rounded-full border px-2 py-[2px] font-semibold"
            >
              {option.label}
              <button
                data-testid="remove-tag-button"
                onClick={(e) => {
                  e.stopPropagation();
                  onTagRemove(option);
                }}
                className="text-active-blue-400 ml-1 flex cursor-pointer items-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      );
    }

    return (selectedValue as OptionProp)?.label;
  };

  const removeOption = (option: OptionProp): OptionProp[] => {
    return (selectedValue as OptionProp[]).filter(
      (opt) => opt.value !== option.value,
    );
  };

  const onTagRemove = (option: OptionProp) => {
    const newValue = removeOption(option);
    if (value === undefined) {
      setSelectedValue(newValue);
    }
    onChange(newValue);
  };

  const onItemClick = (option: OptionProp) => {
    let newValue;

    if (isMulti) {
      const currentValues = Array.isArray(selectedValue) ? selectedValue : [];

      const alreadySelected = currentValues.some(
        (opt) => opt.value === option.value,
      );

      newValue = alreadySelected
        ? currentValues.filter((opt) => opt.value !== option.value)
        : [...currentValues, option];
    } else {
      if (isSelected(option)) return;
      newValue = option;
      setShowMenu(false);
    }

    if (value === undefined) {
      setSelectedValue(newValue);
    }
    globalSelectedOptions[id] = option;
    onChange(isMulti ? (newValue as OptionProp[]) : (newValue as OptionProp));
  };

  const isSelected = (option: OptionProp): boolean => {
    if (isMulti) {
      const values = (selectedValue as OptionProp[]) || [];
      return values.filter((o) => o.value === option.value).length > 0;
    }
    if (!selectedValue) {
      return false;
    }

    return (selectedValue as OptionProp).value === option.value;
  };

  const isPreviouslySelected = (option: OptionProp): boolean => {
    return Object.values(globalSelectedOptions).some(
      (selectedOption) => selectedOption.value === option.value,
    );
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getOptions = (): OptionProp[] => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
    );
  };

  const handleCheckboxChange = (option: OptionProp) => {
    onItemClick(option);
  };

  useEffect(() => {
    setSearchValue("");

    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  });

  useEffect(() => {
    globalSelectedOptions = {};
  }, []);

  return (
    <div className="w-full space-y-2 !text-sm">
      <div className="flex w-full items-center justify-between">
        <InputLabel
          className={labelStyles}
          label={label ?? ""}
          idValue={id}
          error={error}
          hasRequiredStar={isRequired}
        />
        <div>{extra}</div>
      </div>
      <div
        data-testid="select-field"
        role="button"
        aria-labelledby={id}
        id={id}
        ref={inputRef}
        tabIndex={0}
        className={`${className} bg-surface-primary text-16 relative flex cursor-pointer items-center justify-between rounded px-3 py-4.5 select-none ${error ? "border-brand-red text-brand-red outline-brand-red" : "text-text-secondary"} ${disabled ? "!cursor-not-allowed !text-white" : ""}`}
        onClick={handleInputClick}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            handleInputClick();
          }
        }}
      >
        {options?.length !== 0 && showMenu && (
          <div className="bg-surface-primary absolute top-14 left-0 z-[99] max-h-[300px] w-full translate-y-1 overflow-auto rounded-lg py-2 shadow-lg">
            {isSearchable && (
              <div className="p-3">
                implement input search
                {/* <CustomInput
                  className="text-text-secondary box-border w-full rounded !p-1.5 outline-none"
                  onChange={onSearch}
                  value={searchValue}
                  ref={searchRef}
                  preAppend={<SearchIcon />}
                  placeholder={searchPlaceholder ?? "Search..."}
                /> */}
              </div>
            )}
            <div className="max-h-[100px] overflow-y-auto">
              {getOptions().map((option) => (
                <div
                  role="button"
                  tabIndex={0}
                  key={option.value}
                  className={`text-gray-40 hover:bg-teal-0 flex cursor-pointer items-center justify-between px-5 py-4 ${
                    isPreviouslySelected(option) && !isSelected(option)
                      ? "cursor-not-allowed"
                      : ""
                  } ${options.length < 1 ? "hidden" : "block"}`}
                  onClick={() => {
                    if (!isPreviouslySelected(option) || isSelected(option)) {
                      if (!isMulti) {
                        onItemClick(option);
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (
                      (e.key === "Enter" || e.key === " ") &&
                      (!isPreviouslySelected(option) || isSelected(option))
                    ) {
                      e.preventDefault();
                      if (!isMulti) {
                        onItemClick(option);
                      }
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    {isMulti && (
                      <CheckBox
                        label=""
                        checked={isSelected(option)}
                        onChange={() => handleCheckboxChange(option)}
                      />
                    )}
                    <span>{option.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-full">{getDisplay()}</div>
        {isLoading ? null : <ToggleDropdown />}
      </div>
      {error && (
        <div className="flex items-center gap-1">
          {/* <FieldError error={error} /> */}
        </div>
      )}
    </div>
  );
};

export default SelectField;
