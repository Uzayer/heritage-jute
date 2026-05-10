import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/products", "/about", "/contact"];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path === "" ? "/" : path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.85,
  }));

  for (const p of products) {
    entries.push({
      url: `${siteUrl}/products/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
