import React from "react";
import ReactDOM from "react-dom/client";
import NotFound from "../pages/not-found";
import "../index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NotFound />
    </QueryClientProvider>
  </React.StrictMode>
);