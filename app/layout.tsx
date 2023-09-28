import { Suspense } from "react";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Task",
  description: "Apple test task",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
