import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import { BentoCards } from "@/components/BentoCards";
import { TimelineCard } from "@/components/Timeline/TimelineCard";
import Phase1Timeline from "@/components/Timeline/Phase1Timeline";

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
          <TimelineCard
            title="Timeline 1"
            description="Description 1"
            TimelineComponent={Phase1Timeline}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
