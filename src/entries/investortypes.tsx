import React from "react";
import ReactDOM from "react-dom/client";
import InvestorTypesPage from "../pages/investortypes";
import "../index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <InvestorTypesPage />
    </QueryClientProvider>
  </React.StrictMode>
);