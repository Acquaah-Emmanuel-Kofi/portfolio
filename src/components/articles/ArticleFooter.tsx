"use client";

import { useState, useEffect } from "react";
import { Linkedin, Facebook, Check, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

const getShareUrl = () => {
  return typeof window !== "undefined"
    ? encodeURIComponent(window.location.href)
    : "";
};

const getShareTitle = () => {
  return typeof document !== "undefined"
    ? encodeURIComponent(document.title)
    : "Check out this article!";
};

// Define the share links
const shareTargets = (url: string, title: string) => [
  {
    name: "X (Twitter)",
    icon: TwitterLogoIcon,
    href: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
];

export default function ArticleFooter() {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");

  useEffect(() => {
    setShareUrl(getShareUrl());
    setShareTitle(getShareTitle());
  }, []);

  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("Failed to copy link. Please try again or copy manually.");
    }
  };

  if (!shareUrl) {
    return null;
  }

  const socialLinks = shareTargets(shareUrl, shareTitle);

  return (
    <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Share This Article
      </h3>
      <div className="flex flex-wrap items-center gap-4">
        {socialLinks.map((target) => (
          <Link
            key={target.name}
            href={target.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${target.name}`}
            title={`Share on ${target.name}`}
            className="!border-none"
          >
            <target.icon className="w-6 h-6" />
          </Link>
        ))}

        {/* Copy Link Button */}
        <Button onClick={handleCopyLink} variant="outline" size="sm">
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <LinkIcon className="w-4 h-4" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </footer>
  );
}
