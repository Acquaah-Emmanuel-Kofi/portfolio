import { workExperience } from "@/lib/data";
import Link from "next/link";
import { Title } from "../common/Title";

export default function WorkExperience() {
  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20">
      <Title title="Work Experience" />
      <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
        {workExperience.map((exp) => (
          <div key={exp.id} className="grid gap-1 relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

            <h4 className="text-xl font-medium">
              {exp.role} @
              <Link
                href={exp.companyWebsite}
                target="_blank"
                className="ml-2 text-blue-500 hover:border-b border-blue-500 hover:border-red-500 hover:text-red-500"
              >
                {exp.company}
              </Link>
            </h4>
            <div className="text-gray-500 dark:text-gray-400">
              {exp.startDate} - {exp.endDate}
            </div>
            <div className="mt-2">
              <h6 className="font-medium">Key Responsibilities:</h6>
              <ul className="text-gray-500 text-sm list-disc pl-4">
                {exp.keyResponsibilities.map((resp) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
