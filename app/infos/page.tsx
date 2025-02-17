import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridDecoration from "@/components/GridDecoration";
import QA from "@/components/info/QA";
import Link from "next/link";
const page = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <GridDecoration />
      </div>
      <Navbar />
      <main className="flex flex-col">
        <section className="w-full lg:w-11/12 flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 py-20 gap-4 lg:p-20 z-10 relative">
          <h1 className="text-5xl font-bold z-10 my-6">
            Frequently Asked Questions
          </h1>
          <p>
            Quick answer to questions you may have. Can&apos;t find what
            you&apos;re looking for? Contact us
            <Link href="/contacts">
              <span className="underline"> Here.</span>
            </Link>
          </p>

          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 mt-10">
            <QA />
            <QA />
            <QA />
            <QA />
            <QA />
            <QA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;
