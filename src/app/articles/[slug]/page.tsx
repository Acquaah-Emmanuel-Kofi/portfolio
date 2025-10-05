import { getArticleBySlug } from "@/lib/mdx";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import ArticleHeader from "@/components/articles/ArticleHeader";
import PageSpinner from "@/components/common/PageSpinner";

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
    <section className="container max-w-4xl mx-auto px-6">
      <article className="prose lg:prose-xl mx-auto mb-10">
        <Suspense fallback={<PageSpinner />}>{content}</Suspense>
      </article>
    </section>
  );
}
