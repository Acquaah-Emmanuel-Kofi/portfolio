"use client";

import { easeOut, motion } from "framer-motion";
import { workExperience } from "@/lib/data";
import Link from "next/link";
import { Title } from "../common/Title";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

export default function WorkExperience() {
  return (
    <motion.section
      id="experience"
      className="py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Title title="Work Experience" />

      <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
        {workExperience.map((exp) => (
          <motion.div
            key={exp.id}
            className="grid gap-1 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Dot on the timeline */}
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

            {/* Role and Company */}
            <motion.h4 variants={itemVariants} className="text-xl font-medium">
              {exp.role} @
              <Link
                href={exp.companyWebsite}
                target="_blank"
                className="ml-2 text-blue-500 hover:border-b border-blue-500 hover:border-red-500 hover:text-red-500"
              >
                {exp.company}
              </Link>
            </motion.h4>

            {/* Date */}
            <motion.div
              variants={itemVariants}
              className="text-gray-500 dark:text-gray-400"
            >
              {exp.startDate} - {exp.endDate}
            </motion.div>

            {/* Responsibilities */}
            <motion.div variants={itemVariants} className="mt-2">
              <h6 className="font-medium">Key Responsibilities:</h6>
              <ul className="text-gray-500 text-sm list-disc pl-4">
                {exp.keyResponsibilities.map((resp) => (
                  <motion.li key={resp} variants={itemVariants}>
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
