"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={cn("text-3xl font-bold mb-12", className)}>{title}</h2>
    </motion.div>
  );
}

export function SubTitle({ title }: { title: string }) {
  return <h3 className="text-xl font-semibold mb-3">{title}</h3>;
}
