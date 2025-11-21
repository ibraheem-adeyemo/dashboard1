"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { AlertProvider } from "@/contexts/alert-context";
import { AlertList } from "@/components/ui/alert/index";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>
        <AlertProvider>
          {children}
          <AlertList />
        </AlertProvider>
      </Provider>
    </ThemeProvider>
  );
}
