import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import {ClerkProvider} from '@clerk/nextjs';
 
export const metadata: Metadata = {
  title: "Shopcart Online Store",
  description: "Shopcart online store website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className="font-poppins">
        <body className="font-poppins antialiased">
         <div className="flex flex-col min-h-screen">
           <Header /> 
          <main className="flex-1" >{children}</main>
          <Footer />
         </div>
        </body>
    </html>
    </ClerkProvider>
  );
}




