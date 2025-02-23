import AuthForm from "@/components/form";
import Title from "@/components/title";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Title />

      <AuthForm />
    </div>
  );
}
 