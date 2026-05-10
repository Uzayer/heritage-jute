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

const EXPORT_COUNTRIES = [
  "Italy", "Spain", "Slovenia", "Romania", "Poland", "Russia", "Morocco",
  "Malaysia", "Australia", "New Zealand", "India", "Pakistan", "Sri Lanka",
  "Myanmar", "Vietnam", "China", "South Korea", "Thailand", "Japan", "Fiji",
  "Timor-Leste", "South Africa", "Tanzania", "Egypt", "Tunisia", "Turkey",
  "Jordan", "Iran", "Mexico", "Peru", "Brazil",
];

const Hero249 = ({ className }: Hero249Props) => {
  return (
    <section className={cn("", className)}>
      <div className="border-b">
        <div className="container grid xl:grid-cols-2 xl:gap-16">
          <div className="flex flex-col justify-between gap-6 py-12">
            <h1 className="text-4xl font-medium tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Bangladesh&apos;s Trusted Jute Exporter{" "}
              <span className="text-muted-foreground">
                shipping to 31 countries worldwide.
              </span>
            </h1>
            <div className="flex max-w-xl flex-col gap-6">
              <p className="text-muted-foreground md:text-lg">
                Heritage Jute Fibers supplies raw jute, yarn, cloth, bags, and
                rope to importers, wholesalers, and manufacturers across six
                continents. Government certified, factory pricing, reliable
                shipping.
              </p>
              <p className="md:text-lg">
                Established 2014 · BJGEA Member · ERC Certified · Jute Ministry
                Approved
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="w-fit" asChild>
                  <a href="/products">Browse Products</a>
                </Button>
                <Button size="lg" variant="outline" className="w-fit" asChild>
                  <a href="https://wa.me/8801841111625" target="_blank" rel="noreferrer">WhatsApp</a>
                </Button>
              </div>
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
            Exporting to 31 countries across 6 continents
          </p>
          <Marquee className="relative">
            <MarqueeContent>
              {EXPORT_COUNTRIES.map((country, index) => (
                <MarqueeItem key={index}>
                  <span className="mx-6 text-sm font-medium text-muted-foreground opacity-80">
                    {country}
                  </span>
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
