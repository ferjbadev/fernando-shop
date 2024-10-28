import type { Metadata } from "next";
import React, { StrictMode } from "react";
import "./globals.css";
import { inter } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Digital Shop",
  description: "A virtual store for the best products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StrictMode>
          {children}
        </StrictMode>
      </body>
    </html>
  );
}
