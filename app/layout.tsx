import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sox - Premium Sock Subscriptions | Netherlands",
  description: "Subscribe to premium quality socks delivered to your door. Choose from white or black socks, with flexible delivery options.",
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
