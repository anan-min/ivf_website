import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridDecoration from "@/components/GridDecoration";
import QA from "@/components/info/QA";
import Link from "next/link";
const page = () => {
  const questions = [
    {
      title: "Can I transfer two or more embryos to increase my success rate?",
      content:
        "The maximum number of blastocysts for blastocyst transfer should be two. Multiple pregnancies can cause serious problems during pregnancy and serious complications for neonates. The success rate of two blastocyst transfers is not double the chance compared to one. A single blastocyst transfer is the recommended best practice in IVF treatment.",
    },
    {
      title: "Do I need to lie in bed constantly after embryo transfer?",
      content:
        "It is not necessary to lie in bed constantly. The environment inside the uterine cavity can keep the embryo stable during everyday life activities. The chance of pregnancy does not depend on the patient's activities. If unsure, the patient may reduce normal life activities by 50%.",
    },
    {
      title: "Does bleeding after embryo transfer indicate failure?",
      content:
        "Vaginal bleeding after embryo transfer, but before the pregnancy test, can occur occasionally. This bleeding may be caused by implantation or hormonal changes. The likelihood of pregnancy is not affected by the presence of bleeding compared to patients who do not experience it.",
    },
    {
      title:
        "Why do many patients gain weight during stimulation? Is it hard to return to my normal weight?",
      content:
        "The extra high level of female hormones during ovarian stimulation can cause water retention, fluid in the pelvic cavity, and increased appetite, which contribute to weight gain. When the hormonal levels gradually decline to normal around one to two weeks after the oocyte retrieval procedure, the body weight will reduce accordingly. However, patients should control their diet during periods of increased appetite.",
    },
    {
      title:
        "Can any diet or supplements help to increase my IVF success rate?",
      content:
        "This question may require further consultation with your fertility specialist or dietitian to get tailored advice based on your condition.",
    },
    {
      title:
        "Can I have an ectopic pregnancy from IVF treatment? What is the chance of ectopic pregnancy?",
      content:
        "An ectopic pregnancy after embryo transfer is uncommon, with a much higher chance of occurring in fresh embryo transfers. However, as embryo transfer protocol has been gradually shifted to thawed embryo transfer, the possibility of ectopic pregnancy is about 0.3%.",
    },
    {
      title:
        "The embryo that I transferred has passed the PGT-A test already; does it mean I won't have a miscarriage if I get pregnant?",
      content:
        "The PGT-A test checks the chromosomes of the embryo. Abnormal chromosomes in embryos are the most common cause of miscarriage. However, there are other reasons for miscarriage, such as abnormal growth of the embryo, viral infections during pregnancy, and chronic infections of the endometrium. The miscarriage rate after a thawed embryo transfer from a PGT-A-tested embryo is about 5-10%.",
    },
    {
      title: "How do I choose between an artificial and natural cycle ET?",
      content:
        "Natural cycle ET requires knowing the ovulation date precisely, which involves multiple ultrasounds and blood tests for hormonal levels. It is not suitable for patients with irregular menstruation patterns. Artificial cycle ET makes it easier to control the treatment schedule, and the window time for embryo transfer is more flexible. However, it is not suitable for patients with limitations in using hormonal medications, such as those with a history of breast cancer. For experienced infertility specialists, the chance of pregnancy is comparable with both protocols.",
    },
    {
      title:
        "I live in another country and can't stay in Bangkok long. Can I start an injection of ovum stimulation medication in my own country and come to Bangkok later?",
      content:
        "This situation can be discussed with our fertility specialist to ensure proper coordination for the treatment and the possibility of an unexpected outcome. The blood test and ultrasound evaluation of the follicle situation at the beginning of the menstruation before the ovarian stimulation are very important. For patients with a complicated situation, they should come to start an ovarian stimulation at the beginning.",
    },
    {
      title: "What is a mosaic embryo? Can I transfer mosaic embryos?",
      content:
        "A mosaic embryo is an embryo where some cells have an abnormal chromosome number while others are normal. A key factor in determining whether a mosaic embryo is suitable for embryo transfer is the percentage of mosaicism and the number of chromosomes affected.\n\nResearch has shown that mosaic embryo transfer can result in successful pregnancies and healthy births, particularly when only one or two chromosomes exhibit mosaicism and the percentage of mosaicism is below 50%. However, the pregnancy rate is lower compared to embryos without mosaicism. Additionally, it is advisable to avoid embryos with chromosomal abnormalities associated with congenital anomalies.\n\nTransferring mosaic embryos depends on several factors in each patient and should be discussed with the fertility specialist to determine the best course of action.",
    },
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            {questions.map((question, index) => (
              <QA
                key={index}
                title={question.title}
                content={question.content}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;
