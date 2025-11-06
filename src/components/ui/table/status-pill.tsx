import React from "react";
import clsx from "clsx";
import { Skeleton } from "@mui/material";

type StatusPillProps = {
  text: string;
  isLoading?: boolean;
};

type Variant =
  | "success"
  | "error"
  | "pending"
  | "inactive"
  | "enable"
  | "disable"
  | "disabled";

const TEXT_MAP: Record<string, string> = {
  create_card_limit: "Create Card Limit",
  update_card_limit: "Update Card Limit",
  create_account_limit: "Create Account Limit",
  update_account_limit: "Update Account Limit",
};

const STATUS_MAP: Record<string, Variant> = {
  successful: "success",
  success: "success",
  subscribed: "success",
  active: "success",
  enabled: "success",
  resolved: "success",
  approved: "success",

  unsuccessful: "error",
  rejected: "error",
  unsubscribed: "error",
  failed: "error",
  error: "error",
  disabled: "error",
  declined: "error",
  "disable user": "disable",

  pending: "pending",
  "in progress": "pending",
  processing: "pending",
  "create card limit": "disable",
  "update card limit": "disable",
  "create account limit": "enable",
  "update account limit": "enable",

  inactive: "inactive",
  "enable user": "enable",
};

const getVariant = (text: string): Variant => {
  const key = text.trim().toLowerCase();
  return STATUS_MAP[key] || "inactive";
};

const variantStyles: Record<
  Variant,
  { bg: string; text: string; dot: string; border: string }
> = {
  success: {
    bg: "bg-active-green-100",
    text: "text-active-green-500",
    border: "border-active-green-200",
    dot: "bg-active-green-500",
  },
  error: {
    bg: "bg-primary-red-100",
    text: "text-primary-red-500",
    border: "border-primary-red-200",
    dot: "bg-primary-red-500",
  },
  inactive: {
    bg: "bg-neutral-200",
    text: "text-neutral-700",
    border: "border-neutral-300",
    dot: "bg-neutral-700",
  },
  pending: {
    bg: "bg-active-yellow-100",
    text: "text-active-yellow-500",
    border: "border-active-yellow-200",
    dot: "bg-active-yellow-500",
  },
  enable: {
    bg: "bg-active-blue-100",
    text: "text-active-blue-500",
    border: "border-active-blue-200",
    dot: "bg-active-blue-500",
  },
  disabled: {
    bg: "bg-primary-red-100",
    text: "text-primary-red-500",
    border: "border-primary-red-200",
    dot: "bg-primary-red-500",
  },
  disable: {
    bg: "bg-neutral-100",
    text: "text-neutral-900",
    border: "border-neutral-300",
    dot: "bg-neutral-700",
  },
};

const StatusPill: React.FC<StatusPillProps> = ({ text, isLoading }) => {
  if (isLoading) {
    return <StatusPillSkeleton />;
  }
  const displayText = TEXT_MAP[text.trim().toLowerCase()] || text;
  const variant = getVariant(displayText);
  const styles = variantStyles[variant];

  return (
    <div
      data-testid="status-pill"
      className={clsx(
        styles.bg,
        styles.text,
        styles.border,
        "flex w-fit max-w-[200px] items-center justify-center rounded-lg border px-3 py-1 text-sm font-medium",
      )}
    >
      <span className={clsx(styles.dot, "mr-4 h-2 w-2 rounded-full")}></span>
      <span className="flex-1 capitalize">{displayText}</span>
    </div>
  );
};

export default StatusPill;

export const StatusPillSkeleton = () => {
  return (
    <div
      data-testid="status-pill-skeleton"
      className="bg-active-green-100 flex max-w-[140px] items-center justify-center rounded-lg px-1 py-1"
    >
      <Skeleton
        data-testid="circular-skeleton"
        variant="circular"
        sx={{ bgcolor: "var(--input-fill-enabled)" }}
        width={8}
        height={8}
        className="mr-2"
      />
      <Skeleton
        data-testid="text-skeleton"
        variant="text"
        sx={{ bgcolor: "var(--input-fill-enabled)" }}
        width={60}
        height={12}
      />
    </div>
  );
};
