import { About3 } from "@/components/about3";
import Features4 from "@/components/features-4";
import { Compliance7 } from "@/components/compliance7";
import CallToAction from "@/components/call-to-action";

export const metadata = {
  title: "About Heritage Jute Fibers — Certified Jute Exporter, Bangladesh",
  description:
    "Established 2014 in Dhaka, Bangladesh. BJGEA member, ERC registered, Jute Ministry approved. Exporting to 31 countries for over 10 years.",
};

export default function AboutPage() {
  return (
    <>
      <About3
        title="About Heritage Jute Fibers"
        description="A registered private export company established in 2014, based in Dhaka, Bangladesh. Over 10 years of experience supplying government-certified, high-quality jute products to importers in 31 countries."
        mainImage={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg",
          alt: "Jute production facility",
        }}
        secondaryImage={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg",
          alt: "Jute products",
        }}
        breakout={{
          title: "Trusted by importers across 6 continents",
          description:
            "From raw jute to finished bags — reliable supply, consistent quality, and flexible customisation for bulk orders.",
          buttonText: "Browse Products",
          buttonUrl: "/products",
        }}
        companies={null}
        achievementsTitle="Heritage Jute by the Numbers"
        achievementsDescription="A decade of experience, a global reach, and a commitment to quality at every step of the supply chain."
        achievements={[
          { label: "Year Established", value: "2014" },
          { label: "Export Countries", value: "31" },
          { label: "Product Lines", value: "11" },
          { label: "Years Experience", value: "10+" },
        ]}
        contentSections={[
          {
            title: "Our Company",
            content:
              "Heritage Jute Fibers is a Bangladesh-based trading company specialising in sustainable, high-quality jute solutions for global markets. We maintain strong sourcing capability and product knowledge across the full jute supply chain.\n\nOur product portfolio spans raw materials, yarns, fabrics, bags, and ropes — serving industrial, agricultural, and packaging needs for buyers in Europe, Australia, the Middle East, and Asia.",
          },
          {
            title: "Our Approach",
            content:
              "We work directly with mills across Bangladesh to ensure consistent grade quality and reliable supply at factory pricing. Every order is handled with transparency on specifications, packing, and shipping terms.\n\nWe accept LC at Sight, T/T in Advance, and CAD payment terms. Container loading is standardised: 20' FCL = 13 MT, 40' FCL = 24–26 MT.",
          },
        ]}
      />
      <Features4 />
      <Compliance7
        heading="Certifications & Registrations"
        description="All certifications are active, government-issued, and available for buyer verification on request."
        features={[
          {
            title: "BJGEA Membership",
            description:
              "Bangladesh Jute Goods Exporters Association — the national trade body for jute goods exporters. Membership verifies legitimate, regulated export activity.",
          },
          {
            title: "Export Registration Certificate (ERC)",
            description:
              "Issued by the Export Promotion Bureau of Bangladesh. Required for all legal export operations and verifiable through official government channels.",
          },
          {
            title: "Jute Ministry Approval",
            description:
              "Approved by the Bangladesh Ministry of Textiles and Jute, confirming compliance with national standards for jute export quality and practices.",
          },
          {
            title: "Trade License",
            description:
              "Active Dhaka City Corporation trade license, confirming legal business registration in Bangladesh.",
          },
        ]}
        certifications={[
          {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg",
            alt: "BJGEA",
            status: "CERTIFIED",
          },
          {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg",
            alt: "ERC",
            status: "REGISTERED",
          },
        ]}
        complianceHeading="BJGEA · ERC · Jute Ministry"
        complianceDescription="Documents available on request for buyer compliance and due diligence."
      />
      <CallToAction
        heading="Let's Work Together"
        description="Browse our product catalog or reach out directly. We respond to all inquiries within one business day."
        primaryLabel="Browse Products"
        primaryHref="/products"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
