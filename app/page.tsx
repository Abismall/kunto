"use client"
import BlogSection from "./_components/blog-section";
import FAQSection from "./_components/faq-section";
import HeroSection from "./_components/hero-section";
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status == "unauthenticated") {
      router.push("/api/auth/signin")

    }
  }, [session, router])
  if (session.status == "loading" || session.status == "unauthenticated") return <div><p>Ladataan...</p></div>
  return (
    <main >
      <HeroSection />
      <FAQSection />
      <BlogSection />
    </main>
  );
}
