import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {AppClerkProvider} from "@/providers";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700']});

export const metadata: Metadata = {
  title: "Columbia",
  description: "Columbia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <AppClerkProvider>
    <html lang="en">
      <body className={roboto.className}>
        {children}
        </body>
    </html>
        </AppClerkProvider>
  );
}
