import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer7 = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs space-y-4">
            <p className="font-semibold tracking-tight">Heritage Jute Fibers</p>
            <p className="text-sm text-muted-foreground">
              Government-certified jute exporter based in Dhaka, Bangladesh.
              Established 2014. Supplying 31 countries across 6 continents.
            </p>
            <address className="not-italic space-y-1 text-sm text-muted-foreground">
              <p>House 36, 1st Floor, Road 10</p>
              <p>Nikunja-02, Dhaka-1229, Bangladesh</p>
              <p>+880 1841-111625</p>
              <p>info@heritagejute.com</p>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold">Products</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  ["Raw Jute", "/products/raw-jute"],
                  ["Jute Sliver", "/products/jute-sliver"],
                  ["Jute Yarn", "/products/jute-yarn"],
                  ["Hessian Cloth", "/products/hessian-cloth"],
                  ["Sacking Cloth", "/products/sacking-cloth"],
                  ["Jute Bags", "/products/jute-bag"],
                  ["Jute Rope", "/products/jute-rope"],
                ].map(([name, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-foreground transition-colors">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  ["About", "/about"],
                  ["Certifications", "/about#certifications"],
                  ["Products", "/products"],
                  ["Contact", "/contact"],
                ].map(([name, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-foreground transition-colors">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Inquiries</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://wa.me/8801841111625"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@heritagejute.com"
                    className="hover:text-foreground transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Inquiry Form
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Heritage Jute Fibers. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <p>BJGEA Member · ERC Registered · Jute Ministry Approved</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer7 };
