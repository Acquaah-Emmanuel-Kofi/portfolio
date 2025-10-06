import { ArticleMeta } from "@/types/content";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatArticleDates } from "@/lib/utils";
import ReadAloudButton from "./ReadAloudButton";

export default function ArticleHeader({ article }: { article: ArticleMeta }) {
  const { posted, updated } = formatArticleDates(article.date, article.updated);

  const readText = `${article.title}. ${article.description}`;

  return (
    <header className="mb-10 border-b border-gray-200 dark:border-gray-800 pb-6">
      <div className="mt-2">
        <h2>{article.title}</h2>
      </div>

      {article.thumbnail && (
        <div className="mb-6">
          <Image
            src={article.thumbnail}
            alt={article.title}
            width={1200}
            height={630}
            priority
            className="w-full h-auto object-cover rounded-xl shadow-sm"
          />
        </div>
      )}

      <div className="text-sm md:text-base flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground">
        <span>
          <span className="font-semibold text-primary">Posted:</span>{" "}
          <Tooltip>
            <TooltipTrigger>
              <time dateTime={article.date} className="text-muted-foreground">
                {posted.formatted}
              </time>
            </TooltipTrigger>
            <TooltipContent>{posted.tooltip}</TooltipContent>
          </Tooltip>
        </span>

        {article.updated && (
          <span>
            <span className="font-semibold text-primary">Updated:</span>{" "}
            <Tooltip>
              <TooltipTrigger>
                <time
                  dateTime={article.updated ?? article.date}
                  className="text-muted-foreground"
                >
                  {updated.formatted}
                </time>
              </TooltipTrigger>
              <TooltipContent>{updated.tooltip}</TooltipContent>
            </Tooltip>
          </span>
        )}

        {article.author && article.authorSocialMediaLink && (
          <span>
            <span className="font-semibold text-primary">By:</span>{" "}
            <Link
              href={article.authorSocialMediaLink ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="!text-muted-foreground !font-normal hover:!text-red-500"
            >
              {article.author ?? "Unknown"}
            </Link>
          </span>
        )}

        {article.readTime && (
          <span className="text-muted-foreground">
            • {article.readTime} <span className="text-primary">read</span>
          </span>
        )}

        <span className="flex items-center gap-x-4">
          {article.readTime && <span className="text-muted-foreground">•</span>}
          <ReadAloudButton textToRead={readText} />
        </span>
      </div>
    </header>
  );
}
