import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Weather App",
  description: "App that shows the weather of some cities around the world",
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
