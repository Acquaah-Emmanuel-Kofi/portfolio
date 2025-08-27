"use client";

import { motion, Variants } from "framer-motion";
import { SubTitle, Title } from "../common/Title";
import { Button } from "../ui/button";
import { funFacts } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const delayedChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.3,
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      <Title title="About Me" animate={false} />

      <motion.div
        className="space-y-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Who I Am */}
        <motion.div variants={childVariants}>
          <SubTitle title="Hey there 👋" />
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={delayedChildVariants}
            className="text-muted-foreground leading-relaxed"
          >
            I&apos;m a software engineer based in Ghana who&apos;s passionate
            about turning ideas into scalable, user-friendly digital
            experiences. This little corner of the web is my personal lab —
            where I showcase projects, write tutorials, and share my random
            musings. Whether I&apos;m wrestling with stubborn bugs or sketching
            out wild app ideas, I&apos;m always building something cool.
          </motion.p>
        </motion.div>

        {/* Education */}
        <motion.div variants={childVariants}>
          <SubTitle title="My Background" />
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={delayedChildVariants}
            className="text-muted-foreground leading-relaxed"
          >
            I studied Information Technology at{" "}
            <a
              href="https://ttu.edu.gh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-red-500 border-b border-transparent hover:border-red-500 transition-colors"
            >
              TTU
            </a>{" "}
            - Takoradi Technical University (Takoradi, Ghana) — a solid
            foundation that exposed me to everything from programming in C++ and
            OOP with Java, to data structures, database design with MySQL,
            operating systems, networking, AI, mobile computing, web
            development, and even the legal and ethical sides of tech.
          </motion.p>
        </motion.div>

        {/* Fun Facts */}
        <motion.div variants={childVariants}>
          <SubTitle title="Fun Facts" />
          <motion.ul
            className="list-inside text-muted-foreground space-y-2"
            variants={childVariants}
          >
            {funFacts.map((fact, index) => (
              <motion.li
                key={fact}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={delayedChildVariants}
                className="text-muted-foreground leading-relaxed"
              >
                {fact}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Resume CTA */}
        <motion.div variants={childVariants} className="pt-4">
          <a
            href="https://drive.google.com/file/d/18ktZEqijBiOSxkkmzkGN6c6GoB-aOeFr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>View My Resume</Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
