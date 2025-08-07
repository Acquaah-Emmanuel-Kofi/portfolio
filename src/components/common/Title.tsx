"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Title({
  title,
  animate = true,
  className,
}: {
    title: string;
    animate?: boolean;
  className?: string;
}) {
  return (
    <>
      {animate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={cn("text-3xl font-bold mb-12", className)}>{title}</h2>
        </motion.div>
      )}
      {!animate && (
        <h2 className={cn("text-3xl font-bold mb-12", className)}>{title}</h2>
      )}
    </>
  );
}

export function SubTitle({ title }: { title: string }) {
  return <h3 className="text-xl font-semibold mb-3">{title}</h3>;
}
