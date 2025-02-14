import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import { BentoCards } from "@/components/BentoCards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <section className="w-9/12 sm:w-full flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative">
          {/* Cards */}
          <Faqs />
          <BentoCards />
        </section>
      </main>
      <Footer />
    </div>
  );
}
