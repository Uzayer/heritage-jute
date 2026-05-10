import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar8 } from "@/components/navbar8";
import { Footer7 } from "@/components/footer7";
import { WhatsappFab } from "@/components/whatsapp-fab";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heritage Jute Fibers — Bangladesh Jute Exporter",
  description:
    "Heritage Jute Fibers is a government-certified jute exporter based in Dhaka, Bangladesh. Supplying raw jute, yarn, cloth, bags, and rope to importers in 31 countries.",
};

const footerProps = {
  logo: undefined,
  description:
    "Government-certified jute exporter based in Dhaka, Bangladesh. Established 2014. Supplying 31 countries across 6 continents.",
  sections: [
    {
      title: "Products",
      links: [
        { name: "Raw Jute", href: "/products/raw-jute" },
        { name: "Jute Yarn", href: "/products/jute-yarn" },
        { name: "Hessian Cloth", href: "/products/hessian-cloth" },
        { name: "Jute Bags", href: "/products/jute-bag" },
        { name: "Jute Rope", href: "/products/jute-rope" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Certifications", href: "/about#certifications" },
        { name: "Export Markets", href: "/about#markets" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Get in Touch", href: "/contact" },
        { name: "WhatsApp", href: "https://wa.me/8801841111625" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  socialLinks: [],
  copyright: `© ${new Date().getFullYear()} Heritage Jute Fibers. All rights reserved.`,
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar8 />
        <main className="flex-1 pt-20">{children}</main>
        <Footer7 {...footerProps} />
        <WhatsappFab />
      </body>
    </html>
  );
}
