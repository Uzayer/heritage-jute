import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ProductSpecs2 } from "@/components/product-specs2";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Heritage Jute Fibers`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div>
      <div className="container max-w-5xl py-12">
        <div className="mb-2 text-sm text-muted-foreground">
          <a href="/products" className="hover:underline">
            Products
          </a>{" "}
          / {product.category}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">{product.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {product.shortDescription}
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild>
            <a href="https://wa.me/8801841111625" target="_blank" rel="noreferrer">
              Request a Quote
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <ProductSpecs2 title="Specifications" specGroups={product.specGroups} />
    </div>
  );
}
