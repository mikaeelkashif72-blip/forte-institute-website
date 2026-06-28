import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forte Institute",
  description: "O Level and A Level tuition at Forte Institute",
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
