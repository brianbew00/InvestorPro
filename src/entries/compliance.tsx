import React from "react";
import ReactDOM from "react-dom/client";
import CompliancePage from "../pages/compliance";
import "../index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CompliancePage />
    </QueryClientProvider>
  </React.StrictMode>
);