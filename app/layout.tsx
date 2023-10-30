import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/dom/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "leKONG",
  description: "breathe deep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
