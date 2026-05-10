import { Award, Factory, Settings2, Truck, Plus, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Feature97Props {
  className?: string;
}

const Feature97 = ({ className }: Feature97Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col gap-6 text-center">
          <h2 className="text-4xl font-semibold">Why Partner with Heritage Jute</h2>
          <p className="text-lg">
            A government-certified exporter with over 10 years of experience,
            serving buyers in 31 countries with consistent quality and reliable
            logistics.
          </p>
          <div className="flex flex-col justify-center gap-2 sm:flex-row">
            <Button variant="outline" asChild>
              <a href="/products">Browse Products</a>
            </Button>
            <Button asChild>
              <a href="https://wa.me/8801841111625" target="_blank" rel="noreferrer">
                <Plus className="mr-2 h-auto w-4" />
                Request a Quote
              </a>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-20 md:grid-cols-2">
          <div className="text-center">
            <Award className="mx-auto h-auto w-7" />
            <h3 className="mt-4 mb-2 text-xl font-semibold">Government Certified</h3>
            <p>
              BJGEA member, ERC registered, and approved by the Bangladesh Jute
              Ministry — credentials every serious buyer can verify.
            </p>
          </div>
          <div className="text-center">
            <Factory className="mx-auto h-auto w-7" />
            <h3 className="mt-4 mb-2 text-xl font-semibold">
              Factory Pricing
            </h3>
            <p>
              We source directly from mills across Bangladesh, cutting out
              middlemen and passing the savings to you.
            </p>
          </div>
          <div className="text-center">
            <Settings2 className="mx-auto h-auto w-7" />
            <h3 className="mt-4 mb-2 text-xl font-semibold">
              Custom Orders
            </h3>
            <p>
              Bespoke dimensions, custom grades, private labeling, and specific
              packing configurations — all available on request.
            </p>
          </div>
          <div className="text-center">
            <Truck className="mx-auto h-auto w-7" />
            <h3 className="mt-4 mb-2 text-xl font-semibold">
              Reliable Shipping
            </h3>
            <p>
              FOB Chittagong and CIF terms available. Consistent container
              loading: 20&apos; FCL = 13 MT, 40&apos; FCL = 24–26 MT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature97 };
