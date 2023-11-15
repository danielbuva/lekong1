import { Layout } from "@/components/dom/Layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "lekong",
  description: "breathe deep",
  icons: ["/favicon-32x32.png", "/favicon-16x16.png"],
  manifest: "/site.webmanifest",
  title: "leKONG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="antialiased" lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
