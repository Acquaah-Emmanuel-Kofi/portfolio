"use client";

import { easeOut, motion, Variants } from "framer-motion";
import { workExperience } from "@/lib/data";
import Link from "next/link";
import { Title } from "../common/Title";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6, // spacing between timeline points
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

      <motion.div
        className="relative pl-6 grid gap-10"
        variants={containerVariants}
      >
        {/* The vertical line */}
        <motion.div
          className="absolute inset-y-0 left-0 w-px bg-gray-500/20 dark:bg-gray-400/20 origin-top"
          variants={lineVariants}
        />

        {workExperience.map((exp) => (
          <motion.div
            key={exp.id}
            className="grid gap-1 relative"
            variants={itemVariants}
          >
            {/* Dot on the timeline */}
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

            {/* Role and Company */}
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

            {/* Date */}
            <div className="text-gray-500 dark:text-gray-400">
              {exp.startDate} - {exp.endDate}
            </div>

            {/* Responsibilities */}
            <div className="mt-2">
              <h6 className="font-medium">Key Responsibilities:</h6>
              <ul className="text-gray-500 text-sm list-disc pl-4">
                {exp.keyResponsibilities.map((resp) => (
                  <motion.li
                    key={resp}
                    variants={itemVariants}
                    transition={{ duration: 0.4 }}
                  >
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
