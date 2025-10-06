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
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { ArticleMeta } from "@/types/content";
import { formatDate } from "@/lib/utils";

export default function ArticleListCard({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <Card className="group flex flex-col lg:flex-row overflow-hidden bg-muted/10 hover:bg-card transition-colors">
        {/* Image */}
        {article.thumbnail && (
          <div className="relative w-full lg:w-2/6 h-48 lg:h-auto flex-shrink-0">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="w-full flex flex-col p-2">
          <CardHeader className="pb-4">
            <CardTitle className="leading-0 truncate flex items-center gap-1">
              <span>{article.title}</span>
              <ArrowUpRight
                size={16}
                className="opacity-0 transform translate-x-[-4px] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1">
            <CardDescription>{article.description}</CardDescription>
            <div className="flex flex-wrap gap-2 my-5">
              {article?.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="">
            <div className="flex space-x-3">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-2" />
                <span className="text-muted-foreground text-xs">
                  {formatDate(article.date)}
                </span>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
