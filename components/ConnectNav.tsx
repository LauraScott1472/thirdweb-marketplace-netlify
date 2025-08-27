'use client';

import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";

export default function ConnectNav() {
  return (
    <div className="p-4 border-b border-neutral-800 flex justify-end">
      <ConnectButton client={client} theme="dark" />
    </div>
  );
}
