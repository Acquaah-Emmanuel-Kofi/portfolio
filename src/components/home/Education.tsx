"use client";

import { easeOut, motion, Variants } from "framer-motion";
import { education } from "@/lib/data";
import { Title } from "../common/Title";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
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

export default function Education() {
  return (
    <motion.section
      id="experience"
      className="py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Title title="Education" />

      <motion.div
        className="relative pl-6 grid gap-10"
        variants={containerVariants}
      >
        {/* The vertical line */}
        <motion.div
          className="absolute inset-y-0 left-0 w-px bg-gray-500/20 dark:bg-gray-400/20 origin-top"
          variants={lineVariants}
        />

        {education.map((ed) => (
          <motion.div
            key={ed.id}
            className="grid gap-1 relative"
            variants={itemVariants}
          >
            {/* Dot on the timeline */}
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

            <h4 className="text-xl font-medium">{ed.degree}</h4>
            <h5 className="font-medium">{ed.institution}</h5>
            <div className="text-gray-500 dark:text-gray-400">
              {ed.startDate} - {ed.endDate}
            </div>
            <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
