import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <section className="container max-w-4xl mx-auto px-6">
      <Hero />
      <Projects />
      <TechStack />
    </section>
  );
}
