import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";


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
    <html lang="en">
      <body className="" >
        {/* <Navbar/> */}
    
        {children}
      </body>
    </html>
  );
}
