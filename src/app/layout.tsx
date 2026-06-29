import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forte Institute | Cambridge O Level & A Level Tuition",
  description:
    "Cambridge O Level and A Level tuition with live classes, recorded lessons, notes, and past papers for every subject.",
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
