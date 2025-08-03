import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { contactInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="w-1/2 mx-auto lg:w-1/3">
          <Image
            src="/assets/logo.jpg"
            width={280}
            height={280}
            alt="Developer"
            className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full"
          />
        </div>
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
              Hey 👋, I&apos;m Kofi Emmanuel
            </h1>
          </div>
          <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
            I am a passionate full-stack developer with a strong background in
            building modern, scalable web applications. Lets collaborate
            andbring your ideas to life.
          </p>
          <div className="space-x-4">
            {contactInfo.map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} target="_blank" title={label}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              </Link>
            ))}

            <Link href="mailto:emmanuelacquaah2468@gmail.com" title="Email">
              <Button
                variant="secondary"
                size="icon"
                className="cursor-pointer"
              >
                <EnvelopeClosedIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
