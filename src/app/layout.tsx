import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
