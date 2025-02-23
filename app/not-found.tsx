import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
// import { Button } from "@/components/ui/button"

export default function notFound() {
  return (
    <section className="pb-24 pt-40">
      <div className="min-h-full flex items-center justify-center px-4 sm:py-24 md:grid md:place-items-center">
        <div className="max-w-max flex justify-center items-center flex-col mx-auto">
          <main className="sm:flex sm:flex-col items-center">
            <p className="font-bold tracking-wide text-8xl lg:text-black dark:text-white mb-10">
              404
            </p>
            <div className="flex justify-center items-center flex-col mb-5">
              <h1 className="text-5xl font-bold text-black mb-2">
                Page not found
              </h1>
              
              <p className="mt-1 text-base ">
                Please check your URL in the address bar and try again.
              </p>
            </div>

            <Button size={'xl'}>
              <div className="flex items-center space-x-3 sm:border-1 sm:border-transparent">
                <Link
                  href={"/"}
                  className="inline-flex items-center gap-3 font-bold"
                >
                  <FaArrowLeft className="h-5 w-5 " />
                  <span>Back home</span>
                </Link>
              </div>
            </Button>
          </main>
        </div>
      </div>
    </section>
  );
}
