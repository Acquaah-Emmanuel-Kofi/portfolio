import About from "@/components/home/About";
import CertificationsAndCourses from "@/components/home/CertificationsAndCourses";
import Education from "@/components/home/Education";
import WorkExperience from "@/components/home/WorkExperience";
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
