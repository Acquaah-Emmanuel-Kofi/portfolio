"use client";

import { easeOut, motion } from "framer-motion";
import { projects } from "@/lib/data";
import Link from "next/link";
import { Button } from "../ui/button";
import { Title } from "../common/Title";
import ProjectListCard from "../projects/ProjectListCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <motion.div className="mb-12 flex justify-between items-center">
        <Title title="Projects" className="mb-0" />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="link">
            <Link href="/projects">View All</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-4 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            exit="exit"
          >
            <ProjectListCard project={project} />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
