'use client';

import { ThirdwebProvider } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import { client } from "@/lib/client";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider client={client} chain={sepolia}>
      {children}
    </ThirdwebProvider>
  );
}
