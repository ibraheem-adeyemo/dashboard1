import { createContext, useContext, useState, ReactNode, useMemo } from "react";

type Alert = {
  id: number;
  title: string;
  message: string;
  type?: "error" | "success";
};

type AlertContextType = {
  alerts: Alert[];
  showAlert: (Alert: Omit<Alert, "id">) => void;
  removeAlert: (id: number) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const showAlert = (alert: Omit<Alert, "id">) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { ...alert, id }]);
    setTimeout(() => removeAlert(id), 3000); // Auto-dismiss after 3 seconds
  };

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((n) => n.id !== id));
  };

  const contextValue = useMemo(
    () => ({
      alerts,
      showAlert,
      removeAlert,
    }),
    [alerts], // Only recreate when Alerts changes
  );

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

export const AlertConsumer = () => {
  const context = useContext(AlertContext);
  if (!context)
    throw new Error("AlertConsumer must be used within a AlertProvider");
  return context;
};
