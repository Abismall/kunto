import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_components/auth-provider";
import Navbar from "./_components/navbar";

const oswald = Oswald({weight: "700", subsets: ["latin"],  });


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
  <main className="main-container">
      <body >
        <AuthProvider>
          <header>
            <Navbar />
          </header>
          
          {children}
        </AuthProvider>
      </body>
      </main>
    </html>
  );
}
