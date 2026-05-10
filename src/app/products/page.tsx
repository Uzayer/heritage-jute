import { Feature73 } from "@/components/feature73";
import CallToAction from "@/components/call-to-action";

export const metadata = {
  title: "Jute Products — Heritage Jute Fibers",
  description:
    "Browse Heritage Jute's product catalog: raw jute, jute yarn, hessian cloth, sacking cloth, jute bags, sacking sacks, jute rope, and twine.",
};

export default function ProductsPage() {
  return (
    <>
    <Feature73
      heading="Our Jute Product Catalog"
      description="11 product lines across 5 categories — from raw fibre to finished bags. Container-load quantities, government-certified quality."
      features={[
        {
          icon: undefined,
          title: "Raw Materials",
          description:
            "Raw jute, jute sliver (Tossa), and cut jute fiber. Multiple grades: BTD, BTC, BTR, BWD, BWC. Supplied in pressed bales, by the container load.",
          image: {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-1-4x3.svg",
            alt: "Raw jute materials",
          },
          href: "/products/raw-jute",
          label: "3 products",
        },
        {
          icon: undefined,
          title: "Yarn",
          description:
            "Jute yarn in 8–96 lbs count range, single or multi-ply. Qualities: Sacking, Hessian, CB, CRM, CTR, CRX, White (Mesta). Natural, bleached, or dyed.",
          image: {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-2-4x3.svg",
            alt: "Jute yarn",
          },
          href: "/products/jute-yarn",
          label: "1 product",
        },
        {
          icon: undefined,
          title: "Fabrics & Cloth",
          description:
            "Hessian cloth (burlap) and sacking cloth in 24–52 inch widths, 200–305 GSM. Pressed bales of 500–2,000 yards. FOB Chittagong.",
          image: {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-3-4x3.svg",
            alt: "Jute cloth",
          },
          href: "/products/hessian-cloth",
          label: "2 products",
        },
        {
          icon: undefined,
          title: "Bags & Packaging",
          description:
            "Hessian bags, sacking sacks, and general jute bags for grain, coffee, cocoa, and agricultural storage. Custom dimensions and private labeling available.",
          image: {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-4-4x3.svg",
            alt: "Jute bags",
          },
          href: "/products/jute-bag",
          label: "3 products",
        },
        {
          icon: undefined,
          title: "Rope & Twine",
          description:
            "Jute rope in 6–42 mm diameter and jute twine for packaging, tying, and gardening. Packed 25 kg per roll, 4–6 rolls per unit.",
          image: {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-5-4x3.svg",
            alt: "Jute rope and twine",
          },
          href: "/products/jute-rope",
          label: "2 products",
        },
      ]}
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
      primaryLabel="WhatsApp Us"
      primaryHref="https://wa.me/8801841111625"
      secondaryLabel="Send an Inquiry"
      secondaryHref="/contact"
    />
    </>
  );
}
