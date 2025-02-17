import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import { BentoCards } from "@/components/BentoCards";
import ContactButton from "@/components/contact";

export default function Home() {
  return (
    <div className="relative">
      <ContactButton />
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <section className="w-full flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 py-20 gap-4 lg:p-20 z-10 relative">
          <Faqs />
          <BentoCards />
        </section>
      </main>
      <Footer />
    </div>
  );
}
