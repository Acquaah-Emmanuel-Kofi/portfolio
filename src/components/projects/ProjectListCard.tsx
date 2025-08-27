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
import { Button } from "@/components/ui/button";
import { GlobeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/data";

export default function ProjectListCard({ project }: { project: Project }) {
  return (
    <Card className="bg-transparent flex flex-col lg:flex-row overflow-hidden !p-0">
      {/* Image */}
      {project.thumbnail && (
        <div className="relative w-full lg:w-2/5 h-48 lg:h-auto flex-shrink-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="w-full flex flex-col p-4">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-0 mb-2">
          <CardDescription className="text-sm md:text-base">
            {project.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="p-0 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.live_url && (
              <Link target="_blank" href={project.live_url} prefetch={false}>
                <Button
                  size="sm"
                  className="bg-blue-500 hover:bg-red-500 w-full sm:w-auto"
                >
                  <GlobeIcon className="h-3 w-3 mr-2" />
                  Live Demo
                </Button>
              </Link>
            )}
            {project.code_repo_url && (
              <Link
                target="_blank"
                href={project.code_repo_url}
                prefetch={false}
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <GitHubLogoIcon className="h-3 w-3 mr-2" />
                  Open Repository
                </Button>
              </Link>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
