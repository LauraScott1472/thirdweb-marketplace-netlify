import type { Metadata } from 'next';
import './globals.css';
import { ThirdwebProvider } from 'thirdweb/react';
import ConnectNav from '@/components/ConnectNav';


export const metadata: Metadata = {
title: 'CollectorLINK – Marketplace',
description: 'thirdweb marketplace starter',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-neutral-950 text-white">
<ThirdwebProvider>
<ConnectNav />
<main className="max-w-7xl mx-auto p-6">{children}</main>
</ThirdwebProvider>
</body>
</html>
);
}