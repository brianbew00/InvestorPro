import React from "react";
import ReactDOM from "react-dom/client";
import ResourcesPage from "../pages/resources";
import "../index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ResourcesPage />
    </QueryClientProvider>
  </React.StrictMode>
);