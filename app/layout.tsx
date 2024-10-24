import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { GeistSans } from 'geist/font/sans'


export const metadata: Metadata = {
  title: "CHFAMA",
  description: "Blog Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="overflow-hidden" >
        <Navbar/>
    
        {children}
      </body>
    </html>
  );
}
