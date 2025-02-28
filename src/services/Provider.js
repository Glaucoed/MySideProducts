"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function Providers({ children }) {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
