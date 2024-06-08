import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import CookieConsent from "./components/ui/cookie-consent";
import AuthProvider from "./components/providers/auth";
import Navbar from "./components/ui/navbar";


const Roboto = Roboto_Mono({subsets: ["latin"], weight: "400"});


export const metadata: Metadata = {
  title: "Kunto",
  description: "Kunto",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className={Roboto.className}>
    
      <body >
        <AuthProvider>
          <header >
            <Navbar />
          </header>
          <main >
            {children}
            <CookieConsent />
          </main>
           

        </AuthProvider>
   
      </body>

    </html>
  );
}
