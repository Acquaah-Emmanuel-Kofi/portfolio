import { projects } from "@/lib/data";
import { Title } from "../common/Title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <div className="mb-12 flex justify-between">
        <h2 className="text-3xl font-bold">Projects</h2>
        <Button variant="link">
          <Link href="/projects">View All</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 my-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-3">
                {project.live_url && (
                  <Link
                    target="_blank"
                    href={project.live_url}
                    prefetch={false}
                  >
                    <Button size="sm" className="bg-blue-500 hover:bg-red-500">
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
                    <Button size="sm" variant="outline">
                      <GitHubLogoIcon className="h-3 w-3 mr-2" />
                      Open Repository
                    </Button>
                  </Link>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
