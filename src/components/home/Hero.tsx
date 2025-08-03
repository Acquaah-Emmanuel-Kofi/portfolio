import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { contactInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="w-1/2 mx-auto lg:w-1/4 border-2 border-white rounded-full overflow-hidden">
          <Image
            src="/assets/display-profile.jpeg"
            width={280}
            height={280}
            alt="Developer"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-4xl font-bold tracking-tighter ">
              Hello, I&apos;m Kofi Emmanuel
            </h1>
          </div>
          <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
            I&apos;m a software engineer from Ghana (🇬🇭) who enjoys building
            clean, performant software that solves real problems and
            doesn&apos;t suck. I care deeply about user experience, maintainable
            code, and shipping things that actually work.
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
