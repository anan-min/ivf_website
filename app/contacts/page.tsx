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
        <section className="w-2/3 flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 py-20 gap-4 lg:p-20 z-10 relative">
          <h1 className="text-5xl font-bold z-10 my-6">Contact Us</h1>

          <Card className="max-w-lg mx-auto px-6">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Contact Information
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Please reach out to us via the following channels:
              </CardDescription>
            </CardHeader>

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

            <CardFooter className="flex justify-between">
              {/* Add additional footer content here if needed */}
            </CardFooter>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
