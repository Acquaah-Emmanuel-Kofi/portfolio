import React from "react";
import Link from "next/dist/client/link";
import { socialLinks } from "@/lib/data";
import { TextLoop } from "../ui/text-loop";

export default function Footer() {
  return (
    <footer className="container max-w-4xl mx-auto px-6 py-6 border-t text-sm flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <TextLoop className="font-mono text-sm">
        <span>
          <time>&copy; {new Date().getFullYear()} </time>
          <Link
            href="https://www.linkedin.com/in/acquaah-emmanuel-kofi/"
            className="text-blue-500 hover:text-red-500 border-b border-transparent hover:border-red-500 transition-colors"
          >
            Acquaah Emmanuel Kofi
          </Link>
        </span>
        <span>Some rights reserved.</span>
      </TextLoop>

      <span className="flex items-center gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={label}
          >
            <Icon className="w-4 h-4" />
          </Link>
        ))}
      </span>
    </footer>
  );
}
