import React from "react";
import ReactDOM from "react-dom/client";
import DataroomPage from "../pages/dataroom";
import "../index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataroomPage />
    </QueryClientProvider>
  </React.StrictMode>
);