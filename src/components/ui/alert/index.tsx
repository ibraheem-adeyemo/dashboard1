import { CancelIcon } from "@/assets/icons/dashboardIcons";
import { AlertConsumer } from "@/contexts/alert-context";
import { useEffect } from "react";

const alertStyles = {
  success:
    "bg-active-green-100 border-l-active-green-400 text-active-green-600 border-active-green-200",
  error:
    "bg-active-yellow-100 border-l-active-yellow-400 text-active-yellow-600 border-active-yellow-200",
};

interface AlertProps {
  id: number;
  title: string;
  message: string;
  type?: keyof typeof alertStyles;
  onDismiss: (id: number) => void;
  autoDismiss?: number | false;
}

export const Alert = ({
  id,
  title,
  message,
  type = "success",
  onDismiss,
  autoDismiss = 3000,
}: AlertProps) => {
  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => onDismiss(id), autoDismiss);
      return () => clearTimeout(timer);
    }
  }, [id, onDismiss, autoDismiss]);

  return (
    <div
      className={`relative z-[1000] min-w-[320px] rounded-md border-l-6 p-4 shadow-md transition-all duration-300 ${alertStyles[type]}`}
      role="alert"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-[1rem] font-[700]">{title}</h3>
          <p className="mt-1 text-[0.9rem] font-[400]">{message}</p>
        </div>
        <button
          className="ml-2 cursor-pointer text-gray-600 hover:text-black focus:outline-none"
          onClick={() => onDismiss(id)}
          aria-label="Dismiss notification"
          title="Dismiss notification"
        >
          <CancelIcon className="h-6 w-6 text-neutral-700" />
        </button>
      </div>
    </div>
  );
};

export const AlertList = () => {
  const { alerts, removeAlert } = AlertConsumer();

  if (alerts.length === 0) return null;

  return (
    <div className="fixed top-4 left-1/2 z-[999999] w-full max-w-md -translate-x-1/2 transform space-y-2 px-4">
      {alerts.map((alert) => (
        <Alert key={alert.id} {...alert} onDismiss={removeAlert} />
      ))}
    </div>
  );
};
