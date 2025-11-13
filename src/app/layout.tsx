import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers"; // Yeni ekledik
import { Toaster } from "sonner"; // Toast mesajları için (ileride lazım olacak)

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EA Labs Notes",
  description: "Sprint Takibi MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}