import type { Metadata } from "next";
import "./styles/globals.css";

import AuthProvider from "./components/providers/auth";
import CookieConsent from "./components/ui/cookie-consent";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

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
    <html lang="en">
      <body>
        <AuthProvider>
          <header>
            <Navbar />
          </header>
          <main className="bg-gradient-to-r from-light via-light-50 to-light">
            {children}
            <CookieConsent />
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
