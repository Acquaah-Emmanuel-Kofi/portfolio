import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ArticleMeta {
  title: string;
  date: string;
  updated: string;
  description: string;
  tags: string[];
  thumbnail?: string | StaticImport;
  slug?: string;

  author: string;
  authorSocialMediaLink?: string;
  readTime: string;
}
