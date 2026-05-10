import type { Metadata } from "next";
import { Feature73 } from "@/components/feature73";
import CallToAction from "@/components/call-to-action";
import { productCategories } from "@/lib/products";
import { defaultOgImage } from "@/lib/site";

const ogTitle = "Jute Products — Heritage Jute Fibers";
const ogDescription =
  "Browse Heritage Jute's product catalog: raw jute, jute yarn, hessian cloth, sacking cloth, jute bags, sacking sacks, jute rope, and twine.";

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  alternates: { canonical: "/products" },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: "/products",
    images: [defaultOgImage],
  },
  twitter: {
    title: ogTitle,
    description: ogDescription,
    images: [defaultOgImage.url],
  },
};

const CATEGORY_COPY: Record<
  string,
  { description: string; featuredSlug: string }
> = {
  "Raw Materials": {
    description:
      "Raw jute, jute sliver (Tossa), and cut jute fiber. Multiple grades: BTD, BTC, BTR, BWD, BWC. Supplied in pressed bales, by the container load.",
    featuredSlug: "raw-jute",
  },
  Yarn: {
    description:
      "Jute yarn in 8–96 lbs count range, single or multi-ply. Qualities: Sacking, Hessian, CB, CRM, CTR, CRX, White (Mesta). Natural, bleached, or dyed.",
    featuredSlug: "jute-yarn",
  },
  "Fabrics & Cloth": {
    description:
      "Hessian cloth (burlap) and sacking cloth in 24–52 inch widths, 200–305 GSM. Pressed bales of 500–2,000 yards. FOB Chittagong.",
    featuredSlug: "hessian-cloth",
  },
  "Bags & Packaging": {
    description:
      "Hessian bags, sacking sacks, and general jute bags for grain, coffee, cocoa, and agricultural storage. Custom dimensions and private labeling available.",
    featuredSlug: "hessian-bag",
  },
  "Rope & Twine": {
    description:
      "Jute rope in 6–42 mm diameter and jute twine for packaging, tying, and gardening. Packed 25 kg per roll, 4–6 rolls per unit.",
    featuredSlug: "jute-rope",
  },
};

export default function ProductsPage() {
  const features = productCategories.map((category) => {
    const copy = CATEGORY_COPY[category.name];
    const featured =
      category.products.find((p) => p.slug === copy?.featuredSlug) ??
      category.products[0];
    const count = category.products.length;
    return {
      title: category.name,
      description: copy?.description ?? "",
      image: featured.image,
      href: `/products/${featured.slug}`,
      label: `${count} ${count === 1 ? "product" : "products"}`,
    };
  });

  return (
    <>
      <Feature73
        heading="Our Jute Product Catalog"
        description="11 product lines across 5 categories — from raw fibre to finished bags. Container-load quantities, government-certified quality."
        features={features}
        buttons={{
          primary: {
            text: "Request a Quote",
            url: "https://wa.me/8801841111625",
          },
        }}
      />
      <CallToAction
        heading="Need a Quote?"
        description="Tell us the product, quantity, and destination — we'll get back to you within one business day."
        primaryLabel="WhatsApp"
        primaryHref="https://wa.me/8801841111625"
        secondaryLabel="Send an Inquiry"
        secondaryHref="/contact"
      />
    </>
  );
}
