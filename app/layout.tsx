import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./context/next-auth";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`inter.className`}>
        <NextAuthProvider>
          <div className="w-10/12 m-auto text-center bg-white flex flex-col min-h-screen">
            {/* <div>
              <Navbar />
            </div>
            <Footer /> */}
             <div className="grow">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
