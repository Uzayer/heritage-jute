import type { Metadata } from "next";
import { Contact11 } from "@/components/contact11";

import { submitContactInquiry } from "./actions";
import { defaultOgImage } from "@/lib/site";

const ogTitle = "Contact Heritage Jute Fibers — Send an Inquiry";
const ogDescription =
  "Get in touch with Heritage Jute Fibers. Send an inquiry, WhatsApp us, or call. House 36, Road 10, Nikunja-02, Dhaka-1229, Bangladesh.";

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: "/contact",
    images: [defaultOgImage],
  },
  twitter: {
    title: ogTitle,
    description: ogDescription,
    images: [defaultOgImage.url],
  },
};

export default function ContactPage() {
  return (
    <Contact11
      title="Contact Heritage Jute Fibers"
      description="Ready to source jute? Send us your product requirements and we'll respond within one business day. For urgent inquiries, WhatsApp is fastest."
      corporateHeading="Office"
      addressLine1="House 36, 1st Floor, Road 10"
      addressLine2="Nikunja-02, Dhaka-1229, Bangladesh"
      contactHeading="Get in touch"
      phone="+880 1841-111625"
      email="info@heritagejute.com"
      web={{ label: "heritagejute.com", url: "https://www.heritagejute.com" }}
      socialHeading="Follow us"
      socialLinks={[{ network: "linkedin", url: "https://www.linkedin.com" }]}
      formHeading="Send an Inquiry"
      successMessage="Thank you — we'll respond within one business day."
      submitLabel="Send Inquiry"
      submittingLabel="Sending…"
      onSubmit={submitContactInquiry}
    />
  );
}
