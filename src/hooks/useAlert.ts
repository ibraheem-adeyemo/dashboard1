import { AlertConsumer } from "@/contexts/alert-context";

export const useAlert = () => {
  const { showAlert } = AlertConsumer();

  return {
    showSuccess: (message: string, title = "Success") =>
      showAlert({ title, message, type: "success" }),

    showError: (message: string, title = "Error") =>
      showAlert({ title, message, type: "error" }),
  };
};
