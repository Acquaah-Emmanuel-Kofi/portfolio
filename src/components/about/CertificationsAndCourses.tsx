"use client";

import { motion, Variants } from "framer-motion";
import { certificates, courses } from "@/lib/data";
import { SubTitle } from "../common/Title";
import Image from "next/image";

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
      duration: 0.9,
      delay: i * 0.6,
    },
  }),
};

export default function CertificationsAndCourses() {
  return (
    <section id="certifications" className="py-12 md:py-16 lg:py-20">
      <motion.div
        className="space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Certifications & Courses */}
        <SubTitle title="Certifications & Courses" />
        <motion.ul
          className="list-disc list-inside text-muted-foreground space-y-2"
          variants={containerVariants}
        >
          {certificates.map(({ link, title, issuer }) => (
            <motion.li key={link} variants={childVariants}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline hover:text-blue-500"
              >
                {title}
              </a>{" "}
              – {issuer}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4"
          variants={childVariants}
        >
          {courses.map(({ link, title, issuer, screenShot }, index) => (
            <motion.a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={delayedChildVariants}
            >
              <Image
                src={screenShot}
                alt={`${title} - ${issuer}`}
                className="w-full h-40 object-cover"
                width={280}
                height={160}
              />
              <div className="p-4">
                <p className="text-sm font-medium text-primary mb-1">{title}</p>
                <p className="text-muted-foreground text-xs">{issuer}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
