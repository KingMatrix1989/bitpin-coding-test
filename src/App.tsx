import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useDefaultQueryClient } from "./hooks";

export default function App() {
  const queryClient = useDefaultQueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
