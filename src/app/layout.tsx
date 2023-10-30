import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import useUser from "@/hooks/useUser";
import { Providers } from "./providers";
import { constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors />
        <Navbar></Navbar>
        <Providers user={user}>{children}</Providers>
      </body>
    </html>
  );
}

export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 5;
