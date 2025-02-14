import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <section className="flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative">
          {/* Cards */}
          <Faqs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
