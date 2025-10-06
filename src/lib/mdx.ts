"use server";

import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArticleMeta } from "@/types/content";
import { notFound } from "next/navigation";

const articlesDir = path.join(process.cwd(), "src/content/articles");

export const getAllFiles = async () => {
  try {
    return await fs.readdir(articlesDir);
  } catch (error) {
    console.error("Error reading articles directory:", error);
    return [];
  }
};

export const getFileContent = async (filename: string) => {
  try {
    return await fs.readFile(path.join(articlesDir, filename), "utf-8");
  } catch (error: any) {
    if ("code" in error && error.code === "ENOENT") {
      console.warn(`File not found: ${articlesDir}`);
      notFound();
    }

    console.error(`Error reading article file ${filename}:`, error);
    throw error;
  }
};

export const getArticleBySlug = async (
  slug: string,
  options?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    components?: Record<string, React.ComponentType<any>>;
  }
) => {
  const source = await getFileContent(`${slug}.mdx`);

  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
    components: {
      ...(options?.components || {}),
    },
  });
};

export const getAllArticles = async () => {
  try {
    const filenames = await getAllFiles();

    if (!filenames.length) return [];

    const posts = await Promise.all(
      filenames.map(async (filename) => {
        const source = await getFileContent(filename);

        const { frontmatter } = await compileMDX<ArticleMeta>({
          source,
          options: { parseFrontmatter: true },
        });

        return {
          ...frontmatter,
          slug: filename.replace(/\.mdx$/, ""),
        };
      })
    );

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("❌ Error in getAllArticles:", error);
    return [];
  }
};
