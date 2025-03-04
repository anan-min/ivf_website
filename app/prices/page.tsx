"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Package from "@/components/prices/Package";
import GridDecoration from "@/components/GridDecoration";

const EngPackageDataArray = [
  {
    title: "Package A",
    price: "120K THB",
    description: "Ovarian Stimulation with Hormonal Medication",
    items: [
      "Hormonal injections for ovarian stimulation (2,700–3,000 units, customized by the doctor).",
      "6 injections to prevent premature ovulation.",
      "1 injection to trigger ovulation.",
      "3 ultrasound scans to monitor follicle growth (Ultrasound Follicle).",
      "Doctor's fees for 3 follow-up visits to monitor follicle development.",
    ],
  },
  {
    title: "Package B",
    price: "121K THB",
    description: ": Oocyte Pick up",
    items: [
      "Doctor's and anesthesiologist's fees on the day of the procedure",
      "Egg retrieval procedure and recovery room fees.",
      "ICSI (Intracytoplasmic Sperm Injection) and embryo culture from Day 1 to Day 6.",
      "Medications, medical supplies, and equipment required for the procedure in the operating room.",
    ],
  },
  {
    title: "Package C",
    price: "70K THB",
    description: "PGT-A and 1 year Embryo freezing (for 2 embryos)",
    items: [
      "Annual storage fee for frozen embryos or blastocysts (1 year).",
      "Biopsy equipment and reagents for embryo biopsies.",
      "Comprehensive Genetic Hybridization (CGH) analysis for each embryo",
      "Procedures and equipment for embryo freezing and biopsy cell extraction.",
      "Note: Each additional embryo beyond the first two costs 15,000 THB per embryo",
    ],
  },
  {
    title: "Package D",
    price: "72K THB",
    description: "Embryo transfer",
    items: [
      "Doctor's fees for the procedure.",
      "Fees for embryo thawing, medications, medical equipment, and necessary medical supplies for the embryo transfer",
      "Procedure fees for transferring the embryo into the uterus.",
      "12 days of take-home medications.",
    ],
  },
];

const Page = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <GridDecoration />
      </div>
      <Navbar />
      <main className="flex flex-col">
        <section className="w-full lg:w-10/12 flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 gap-4 relative pt-32 z-10">
          <h1 className="text-4xl xl:text-5xl font-bold text-center">
            IVF/ICSI and PGT-A 2025 Packages
          </h1>
          <p className="text-gray-600 text-sm w-8/12 xl:w-6/12 text-center pt-2">
            Due to the enforcement of the Protection of Children Born by
            Assisted Reproductive Technologies Act B.E. 2558, patients seeking
            infertility treatments such as IVF and IUI must be legally married
            couples. Please bring a copy of your marriage certificate to the
            fertility center starting August 1, 2015.
          </p>

          <div className="flex flex-col lg:flex-row gap-12 w-full z-10">
            {EngPackageDataArray.map((pkg, index) => (
              <Package
                key={index}
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                items={pkg.items}
              />
            ))}
          </div>
          <section className="w-full mx-2 mt-10 text-gray-600">
            <h2 className="text-md">Estimated Total: 383K THB s</h2>
            <h3 className="text-md mt-2 font-semibold ">
              {" "}
              All Packages Above are Excluded
            </h3>
            <ol className="space-y-2 text-sm mt-2">
              <li>
                {" "}
                1. Non-IVF related treatment costs (e.g., blood tests, X-rays,
                home medication, special medical equipment).
              </li>
              <li>2. Additional or advanced diagnostic tests not specified.</li>
              <li>
                3. Hospital fees, doctor fees, nurse fees, and any other
                unspecified costs not mentioned in the package.
              </li>
            </ol>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
