import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/services/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MySideProducts",
  description: "MySideProducts lists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Providers>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
