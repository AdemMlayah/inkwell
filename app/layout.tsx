import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { GeistSans } from 'geist/font/sans'
import TopicCarousel from "./components/TopicCarousel/TopicCarousel";
import BlogPreview from "./components/BlogPreview/BlogPreview";


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
      <body>
        <Navbar/>
        <TopicCarousel/>
        <BlogPreview/>
        {children}
      </body>
    </html>
  );
}
