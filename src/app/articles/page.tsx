import ArticleList from "@/components/articles/ArticleList";
import { getAllArticles } from "@/lib/mdx";

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  if (!articles || articles.length === 0) {
    return (
      <section className="container max-w-4xl mx-auto px-6">
        <p>No articles found.</p>
      </section>
    );
  }

  return (
    <section className="container max-w-4xl mx-auto px-6">
      <ArticleList articles={articles} />
    </section>
  );
}
