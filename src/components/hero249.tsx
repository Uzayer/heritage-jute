import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { Globe } from "@/components/ui/globe";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero249Props {
  className?: string;
}

const LOGOS = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-8.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-9.svg",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-10.svg",
  },
];

const Hero249 = ({ className }: Hero249Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="border-y">
        <div className="container grid xl:grid-cols-2 xl:gap-16">
          <div className="flex flex-col justify-between gap-6 py-12">
            <h1 className="text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Reach, collaborate, and grow worldwide{" "}
              <span className="text-muted-foreground">
                with tools that span the globe.
              </span>
            </h1>
            <div className="flex max-w-xl flex-col gap-6">
              <p className="text-muted-foreground md:text-lg">
                Imagine a single place where teams and ideas from every timezone
                meet, work together in real time, and turn distance into no
                object.
              </p>
              <p className="md:text-lg">
                The right tools give every team the power to work across borders
                and time zones, effortlessly.
              </p>
              <Button size="lg" className="w-fit">
                Book a demo
              </Button>
            </div>
          </div>
          <div className="relative flex min-h-[320px] items-center justify-center">
            <Globe className="static max-w-full" />
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="container grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16">
          <p className="text-center text-sm lg:text-left lg:text-base">
            Teams that connect and grow across borders
          </p>
          <Marquee className="relative">
            <MarqueeContent>
              {LOGOS.map((logo, index) => (
                <MarqueeItem key={index}>
                  <img
                    src={logo.src}
                    alt={`logo ${index + 1}`}
                    className="mx-6 h-6 max-w-24 object-contain opacity-80 grayscale md:h-7 dark:invert"
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export { Hero249 };
