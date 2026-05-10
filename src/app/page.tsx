import { Hero249 } from "@/components/hero249";
import { Feature85 } from "@/components/feature85";
import { Stats1 } from "@/components/stats1";
import ContentSection from "@/components/content-4";
import { Compliance7 } from "@/components/compliance7";
import FAQsTwo from "@/components/faqs-2";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <Hero249 />
      <Feature85 />
      <Stats1 />
      <ContentSection />
      <Compliance7
        heading="Government Certified & Compliant"
        description="Heritage Jute Fibers is fully registered with Bangladesh's jute trade authorities and holds all required export certifications."
        features={[
          {
            title: "BJGEA Membership",
            description:
              "Registered member of the Bangladesh Jute Goods Exporters Association — the industry's primary trade body.",
          },
          {
            title: "Export Registration Certificate (ERC)",
            description:
              "ERC issued by the Export Promotion Bureau of Bangladesh, required for all legitimate export operations.",
          },
          {
            title: "Jute Ministry Approval",
            description:
              "Approved by the Bangladesh Ministry of Textiles and Jute, verifying compliance with national jute export regulations.",
          },
          {
            title: "Trade License",
            description:
              "Active trade license from Dhaka City Corporation — verifiable by any buyer or compliance team.",
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
        complianceDescription="All certifications are active and available for verification on request."
      />
      <FAQsTwo />
      <CallToAction
        heading="Ready to Source Jute?"
        description="Send us your product requirements and we'll respond within one business day. For urgent inquiries, WhatsApp is fastest."
        primaryLabel="WhatsApp Us"
        primaryHref="https://wa.me/8801841111625"
        secondaryLabel="Send an Inquiry"
        secondaryHref="/contact"
      />
    </>
  );
}
