import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import { BentoCards } from "@/components/BentoCards";
import { TimelineCard } from "@/components/Timeline/Phase1TimelineCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <section className="w-full sm:w-10/12 flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative">
          {/* Cards */}
          <Faqs />
          <BentoCards />
          <TimelineCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}
