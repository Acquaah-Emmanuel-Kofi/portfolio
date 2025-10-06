import { getArticleBySlug } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import ArticleHeader from "@/components/articles/ArticleHeader";
import PageSpinner from "@/components/common/PageSpinner";
import Section from "@/components/layout/Section";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter } = await getArticleBySlug(slug);

  return {
    title: `${frontmatter.title} | Articles`,
    description: frontmatter.description,
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content } = await getArticleBySlug(slug, {
    components: { Button, ArticleHeader },
  });

  return (
    <Section>
      <ScrollProgressBar />
      <article className="prose lg:prose-xl dark:prose-invert mx-auto mb-10">
        <Suspense fallback={<PageSpinner />}>{content}</Suspense>
      </article>
    </Section>
  );
}
