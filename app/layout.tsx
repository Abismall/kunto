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
          <main>
            {children}
            <CookieConsent />
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
