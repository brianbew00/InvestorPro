import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "../pages/index";
import "../index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <IndexPage />
    </QueryClientProvider>
  </React.StrictMode>
);