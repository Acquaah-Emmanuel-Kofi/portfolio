import About from "@/components/about/About";
import CertificationsAndCourses from "@/components/about/CertificationsAndCourses";
import Education from "@/components/about/Education";
import WorkExperience from "@/components/about/WorkExperience";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";

export default function AboutPage() {
  return (
    <section className="container max-w-4xl mx-auto px-6">
      <ScrollProgressBar />
      <About />
      <WorkExperience />
      <Education />
      <CertificationsAndCourses />
    </section>
  );
}
