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
import { Project } from "@/types/data";

export default function ProjectGridCard({ project }: { project: Project }) {
  return (
    <Card className="bg-transparent h-full flex flex-col">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <CardDescription>{project.description}</CardDescription>
      </CardContent>

      <CardFooter>
        <div className="flex space-x-3">
          {project.live_url && (
            <Link target="_blank" href={project.live_url} prefetch={false}>
              <Button size="sm" className="bg-blue-500 hover:bg-red-500">
                <GlobeIcon className="h-3 w-3 mr-2" />
                Live Demo
              </Button>
            </Link>
          )}
          {project.code_repo_url && (
            <Link target="_blank" href={project.code_repo_url} prefetch={false}>
              <Button size="sm" variant="outline">
                <GitHubLogoIcon className="h-3 w-3 mr-2" />
                Open Repository
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
