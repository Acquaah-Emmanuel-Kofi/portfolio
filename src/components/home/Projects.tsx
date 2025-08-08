"use client";

import { easeOut, motion } from "framer-motion";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Title } from "../common/Title";

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
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="bg-transparent">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex space-x-3">
                  {project.live_url && (
                    <Link
                      target="_blank"
                      href={project.live_url}
                      prefetch={false}
                    >
                      <Button
                        size="sm"
                        className="bg-blue-500 hover:bg-red-500"
                      >
                        <GlobeIcon className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {project.code_repo_url && (
                    <Link
                      target="_blank"
                      href={project.code_repo_url}
                      prefetch={false}
                    >
                      <Button size="sm" variant="outline">
                        <GitHubLogoIcon className="h-3 w-3 mr-2" />
                        Open Repository
                      </Button>
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
