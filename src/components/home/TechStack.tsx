"use client";

import { skills } from "@/lib/data";
import { Title } from "../common/Title";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function TechStack() {
  return (
    <section className="py-20" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <Title title="Technical Skills" />

        <motion.div
          className="grid md:grid-cols-2 gap-x-12 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {skills.map(({ title, icon: Icon, items }) => (
            <motion.div key={title} variants={itemVariants}>
              <motion.div
                className="flex items-center gap-2 mb-2"
                variants={itemVariants}
              >
                <Icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </motion.div>

              <motion.p
                className="text-muted-foreground text-sm ml-7"
                variants={itemVariants}
              >
                {items.join(" · ")}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
