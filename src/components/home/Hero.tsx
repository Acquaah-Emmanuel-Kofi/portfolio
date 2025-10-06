"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { contactInfo } from "@/lib/data";

const containerVariants = {
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

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const delayedChildVariants = {
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

export default function Hero() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  scrollToTop();
  return (
    <motion.section
      id="home"
      className="py-12 md:py-16 lg:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <motion.div
          variants={childVariants}
          className="w-1/2 mx-auto lg:w-1/4 border-2 border-white rounded-full overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/assets/display-profile.jpeg"
              width={280}
              height={280}
              alt="Developer"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="w-full lg:w-2/3 space-y-4"
        >
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={delayedChildVariants}
            className="text-4xl md:text-4xl font-bold tracking-tighter"
          >
            Hello, I&apos;m Kofi Emmanuel
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={delayedChildVariants}
            className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400"
          >
            I&apos;m a software engineer from Ghana (🇬🇭) who enjoys building
            clean, performant software that solves real problems and
            doesn&apos;t suck. I care deeply about user experience, maintainable
            code, and shipping things that actually work.
          </motion.p>

          <motion.div
            variants={childVariants}
            className="space-x-4 flex flex-wrap items-center"
          >
            {contactInfo.map(({ href, icon: Icon, label }) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={href} target="_blank" title={label}>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="mailto:emmanuelacquaah2468@gmail.com" title="Email">
                <Button
                  variant="secondary"
                  size="icon"
                  className="cursor-pointer"
                >
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
