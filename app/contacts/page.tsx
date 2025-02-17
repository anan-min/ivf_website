import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridDecoration from "@/components/GridDecoration";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <GridDecoration />
      </div>
      <Navbar />

      <main className="flex flex-col justify-items-center items-center">
        <section className="w-full flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 py-20 gap-4 lg:p-20 z-10 relative">
          <h1 className="text-5xl font-bold z-10 my-6">Contact Us</h1>
          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription className="lg:w-1/2"></CardDescription>
            </CardHeader>
            <CardContent>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    <strong>Phone:</strong> +66 2 310 3000 or 1719 (Local calls
                    only)
                  </p>
                  <p>
                    <strong>Email:</strong> info@bangkokhospital.com
                  </p>
                  <p>
                    <strong>Facebook:</strong>{" "}
                    <a
                      href="https://www.facebook.com/bangkokhospitalheadquarters/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Bangkok Hospital Headquarters
                    </a>
                  </p>
                </div>
              </CardContent>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
