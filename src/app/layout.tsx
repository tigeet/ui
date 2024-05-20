"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Nav from "@/components/nav/nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Document",
//   description: "",
// };

type Props = Readonly<{
  children: React.ReactNode;
}>;

const queryClient = new QueryClient();

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <body className={inter.className}>
            <Nav />
            {children}
          </body>
        </UserProvider>
      </QueryClientProvider>
    </html>
  );
}
