import ArticleList from "@/components/articles/ArticleList";
import Section from "@/components/layout/Section";
import { getAllArticles } from "@/lib/mdx";

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  if (!articles || articles.length === 0) {
    return (
      <Section>
        <div className="flex justify-center items-center h-screen">
          <p>No articles found.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <ArticleList articles={articles} />
    </Section>
  );
}
