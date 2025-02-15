"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageA from "@/components/prices/PackageA";
import GridDecoration from "@/components/GridDecoration";
import SelectPackage from "@/components/prices/SelectPackage";

const Page = () => {
  const searchParams = useSearchParams();
  const searchedSelectedPackage = searchParams.get("package") || "a";

  const parseQueryPackage = Array.isArray(searchedSelectedPackage)
    ? searchedSelectedPackage[0]
    : searchedSelectedPackage;

  const [selectedPackage, setSelectedPackage] = useState<string | null>(
    parseQueryPackage || "package_a"
  );

  const renderSelectedPackage = () => {
    switch (selectedPackage) {
      case "a":
        return <PackageA />;
      case "b":
        return <PackageA />;
      case "c":
        return <PackageA />;
      case "d":
        return <PackageA />;
      default:
        return null;
    }
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <GridDecoration />
      </div>
      <Navbar />
      <main className="flex flex-col">
        <section className="w-full lg:w-10/12 flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 gap-4 relative pt-32 z-10">
          <h1 className="text-4xl xl:text-5xl font-bold text-center">
            <span className="bg-[#fcd8c9] rounded-xl py-1/2 px-2">
              IVF/ICSI and PGT-A
            </span>{" "}
            2025 Packages
          </h1>
          <p className="text-gray-600 text-sm w-8/12 xl:w-6/12 text-center pt-2">
            Due to the enforcement of the Protection of Children Born by
            Assisted Reproductive Technologies Act B.E. 2558, patients seeking
            infertility treatments such as IVF and IUI must be legally married
            couples. Please bring a copy of your marriage certificate to the
            fertility center starting August 1, 2015.
          </p>

          <div className="hidden lg:flex flex-col gap-12 w-full z-10">
            <PackageA />
            <PackageA />
            <PackageA />
            <PackageA />
          </div>

          <div className="w-full lg:hidden z-10">
            <SelectPackage onChange={setSelectedPackage} />
          </div>
          <div className="w-full lg:hidden z-10">{renderSelectedPackage()}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
