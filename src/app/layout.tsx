import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Vocábulo",
  description: "Playground para treinar para o Termo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} antialiased bg-blue-800 h-[100vh]`}
      >
        {children}
      </body>
    </html>
  );
}
