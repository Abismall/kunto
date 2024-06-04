import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import AuthProvider from "@components/providers/auth";
import Navbar from "@components/ui/navbar";
import Footer from "@components/ui/footer";
import CookieConsent from "@components/ui/cookie-consent";

const oswald = Oswald({ weight: "700", subsets: ["latin"], });


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

    <html lang="en" className={oswald.className}>

      <body >
        <AuthProvider>
          <header>
            <Navbar />
          </header>
          <main className={`maint-container`}>
            {children}
            <CookieConsent/>
          </main>
        </AuthProvider>
        <Footer />
      </body>

    </html>
  );
}
