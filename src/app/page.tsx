import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import TechStack from "@/components/home/TechStack";
import Section from "@/components/layout/Section";

export default function Home() {
  return (
    <Section>
      <Hero />
      <Projects />
      <TechStack />
    </Section>
  );
}
