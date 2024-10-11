import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lively Contributions",
  description: "Create custom Github contributions graph with new colors and animations!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.ico" />
      </head>
      <body id="app" className={`${nunito.className} relative`}>
        {children}
      </body>
    </html>
  );
}
