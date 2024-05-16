"use client"
import BlogSection from "./_components/blog-section";
import FAQSection from "./_components/faq-section";
import HeroSection from "./_components/hero-section";
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import { useEffect } from "react";
import ContactForm from "./_components/contact-form";

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
  <main className="main-container">
      <div className="fullwidth">
        <HeroSection />
      </div>
      <div className="centered">
        <FAQSection />
      </div>
      <div className="centered">
        <BlogSection />
      </div>
         <div className="centered">
        <ContactForm />
      </div>
    </main>
  );
}
