import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col p-8 font-[family-name:var(--font-geist-sans)]">
      <Title />

      <div className="max-w-[500px] mx-auto">
        <Link href={"/signup"}>
          <Button className="w-full" size={"lg"}>
          Join HealGenix Waitlist {"→"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
