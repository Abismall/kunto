import BlogSection from "./_components/blog-section";
import FAQSection from "./_components/faq-section";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <main >
        <HeroSection />
        <FAQSection/>
        <BlogSection/>
    </main>
  );
}
