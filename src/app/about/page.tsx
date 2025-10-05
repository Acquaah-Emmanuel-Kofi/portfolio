import About from "@/components/about/About";
import CertificationsAndCourses from "@/components/about/CertificationsAndCourses";
import Education from "@/components/about/Education";
import WorkExperience from "@/components/about/WorkExperience";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Section from "@/components/layout/Section";

export default function AboutPage() {
  return (
    <Section>
      <ScrollProgressBar />
      <About />
      <WorkExperience />
      <Education />
      <CertificationsAndCourses />
    </Section>
  );
}
