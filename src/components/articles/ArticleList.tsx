"use client";

import { AnimatePresence, easeOut, motion, Variants } from "framer-motion";
import { Title } from "../common/Title";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { LayoutGrid, ListIcon } from "lucide-react";
import { useState } from "react";
import ArticleGridCard from "./ArticleGridCard";
import ArticleListCard from "./ArticleListCard";
import { ArticleMeta } from "@/types/content";

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

export default function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  const [view, setView] = useState("list");

  return (
    <section
      id="articles"
      className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <motion.div className="flex justify-between items-center">
        <Title title="Articles" animate={false} className="mb-0" />

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

      <motion.div
        className="mb-12 mt-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={childVariants}>
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={delayedChildVariants}
            className="text-muted-foreground leading-relaxed"
          >
            I like to blog about what I'm learning in the software engineering
            world. Hopefully you'll find some of it interesting. ✒️
          </motion.p>
        </motion.div>
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
            {articles?.map((article) => (
              <motion.article
                key={article.title}
                variants={cardVariants}
                exit="exit"
              >
                <ArticleGridCard article={article} />
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
            {articles?.map((article) => (
              <motion.article
                key={article.title}
                variants={cardVariants}
                exit="exit"
              >
                <ArticleListCard article={article} />
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
