"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArticleMeta } from "@/types/content";
import { ArrowUpRight, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function ArticleGridCard({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <Card className="group h-full flex flex-col bg-muted/10 hover:bg-card transition-colors">
        <CardHeader className="pb-0">
          <CardTitle className="leading-6 flex items-center gap-1">
            <span>{article.title}</span>
            <ArrowUpRight
              size={16}
              className="opacity-0 transform translate-x-[-4px] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1">
          <CardDescription className="-mt-5">
            {article.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-5">
            {article?.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex space-x-3">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-2" />
              <span className="text-muted-foreground text-xs">
                {formatDate(article.date)}
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
