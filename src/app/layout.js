import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/services/Provider";

const InterSans = Inter({
  variable: "--font-sans",
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
        <body className={`${InterSans.variable}`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
