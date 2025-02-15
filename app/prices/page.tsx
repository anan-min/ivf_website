import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageA from "@/components/prices/PackageA";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col">
        <section className="w-full sm:w-10/12 flex flex-col lg:flex-row mx-auto mt-20 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative">
          <PackageA />
          <PackageA />
          <PackageA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;
