import { cn } from "@/lib/utils";

interface Stats1Props {
  className?: string;
}

const Stats1 = ({ className }: Stats1Props) => {
  return (
    <section className={cn("", className)}>
      <div className="border-t border-muted-foreground/20">
        <div className="container border-x border-muted-foreground/20 py-32">
          <h1 className="text-center text-4xl font-semibold lg:text-6xl">
            Trusted by Importers Worldwide
          </h1>
          <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Established
              </p>
              <p className="pt-4 text-7xl font-semibold lg:pt-10">2014</p>
              <p className="text-2xl font-semibold text-muted-foreground">
                10+ years experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Export destinations
              </p>
              <p className="pt-4 text-7xl font-semibold lg:pt-10">31</p>
              <p className="text-2xl font-semibold text-muted-foreground">
                countries served
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Distinct product lines
              </p>
              <p className="pt-4 text-7xl font-semibold lg:pt-10">11</p>
              <p className="text-2xl font-semibold text-muted-foreground">
                jute products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats1 };
