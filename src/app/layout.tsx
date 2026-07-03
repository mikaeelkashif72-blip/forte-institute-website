import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forte Institute | O Level, IGCSE & A Level Tuition in Pakistan",
  description:
    "Forte Institute offers Cambridge O Level, IGCSE & A Level tuition in Pakistan — live classes, recorded lessons, notes and past papers. Book a free session.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to CDNs used by Spline so the TCP handshake is done before JS fires */}
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://unpkg.com" />
      </head>
      <body className={onest.variable}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
