"use client";

import { AnimatePresence, easeOut, motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Title } from "../common/Title";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { LayoutGrid, ListIcon } from "lucide-react";
import { useState } from "react";
import ProjectGridCard from "./ProjectGridCard";
import ProjectListCard from "./ProjectListCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
};

export default function ProjectList() {
  const [view, setView] = useState("grid");

  return (
    <section
      id="projects"
      className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <motion.div className="mb-12 flex justify-between items-center">
        <Title title="Projects" animate={false} className="mb-0" />

        <Tabs value={view} onValueChange={setView}>
          <TabsList>
            <TabsTrigger value="grid" className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4" /> Grid
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-2">
              <ListIcon className="w-4 h-4" /> List
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>

      <AnimatePresence mode="wait">
        {view === "grid" ? (
          <motion.div
            key="grid-view"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={cardVariants}
                exit="exit"
              >
                <ProjectGridCard project={project} />
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list-view"
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
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
        )}
      </AnimatePresence>
    </section>
  );
}
