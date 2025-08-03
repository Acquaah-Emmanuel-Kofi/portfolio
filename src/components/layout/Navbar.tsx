import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import ThemeToggler from "./ThemeToggler";
import { navLinks } from "@/lib/data";
import { Code2Icon } from "lucide-react";

export default async function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div className="container max-w-5xl mx-auto flex h-18 items-center justify-between py-2 px-4 md:px-6">
        <Link href="/" className="flex items-center" prefetch={false}>
          <div className="flex items-center gap-2">
            <Code2Icon className="size-9 text-primary" />
            <h1 className="text-3xl font-extrabold tracking-tight text-primary">
              AEK
            </h1>
          </div>
        </Link>
        <nav className="hidden space-x-4 lg:flex">
          <ThemeToggler />
          {navLinks.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className="text-sm transition-colors text-gray-350 hover:text-primary dark:hover:text-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              <ThemeToggler />
              {navLinks.map((item) => (
                <Link
                  href={item.path}
                  key={item.path}
                  className="text-sm transition-colors text-gray-350 hover:text-primary dark:hover:text-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const MenuIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};
