interface Spec {
  label: string;
  value: string | boolean;
  highlight?: boolean;
}

interface SpecGroup {
  id: string;
  name: string;
  specs: Spec[];
}

interface ProductImage {
  src: string;
  alt: string;
}

interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  image: ProductImage;
  specGroups: SpecGroup[];
}

export const products: Product[] = [
  {
    slug: "raw-jute",
    name: "Raw Jute",
    category: "Raw Materials",
    shortDescription:
      "High-grade raw jute fibers sourced from Bangladeshi fields, available in multiple grades for yarn spinning and industrial processing.",
    image: {
      src: "/images/gallery/Raw-Jute.webp",
      alt: "Bundles of raw jute fiber",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Raw Jute Fiber", highlight: true },
          { label: "Origin", value: "Bangladesh" },
          {
            label: "Grades",
            value: "BTD, BTC, BTR, BWD, BWC",
            highlight: true,
          },
          {
            label: "Primary Use",
            value: "Yarn spinning, industrial processing",
          },
          { label: "HS Code", value: "53031000" },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          {
            label: "Container (20' FCL)",
            value: "13 Metric Tons",
            highlight: true,
          },
          {
            label: "Container (40' FCL)",
            value: "24–26 Metric Tons",
            highlight: true,
          },
          { label: "MOQ", value: "1 × 20' FCL" },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "jute-sliver",
    name: "Jute Sliver (Tossa)",
    category: "Raw Materials",
    shortDescription:
      "Loose, untwisted bundles of parallel jute fibres produced during early spinning, used as intermediate material before drawing and yarn making.",
    image: {
      src: "/images/gallery/pexels-sm-mostafijur-nasim-644778890-17778573.webp",
      alt: "Jute sliver bundles",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          {
            label: "Product",
            value: "Jute Sliver",
            highlight: true,
          },
          { label: "Qualities", value: "Tossa, Mesta", highlight: true },
          {
            label: "Primary Use",
            value: "Intermediate material for yarn spinning",
          },
          { label: "HS Code", value: "53039000" },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          { label: "Weight per Roll", value: "14+ kg" },
          { label: "Rolls per Pallet", value: "70+ rolls (~1,000 kg)", highlight: true },
          { label: "Pallet Wrapping", value: "PP covered" },
          { label: "MOQ", value: "1 × 40' FCL", highlight: true },
          { label: "Container (40' FCL)", value: "20–22 Metric Tons" },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "cut-jute-fiber",
    name: "Cut Jute Fiber",
    category: "Raw Materials",
    shortDescription:
      "Jute fibres cut to uniform short lengths, used in stuffing, insulation, non-woven products, and industrial applications.",
    image: {
      src: "/images/gallery/web-photo_2.webp",
      alt: "Cut jute fiber lengths",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Cut Jute Fiber", highlight: true },
          { label: "Qualities", value: "Tossa, Mesta (Natural White Jute)", highlight: true },
          { label: "Cut Lengths", value: "2 cm to 20 cm", highlight: true },
          {
            label: "Primary Use",
            value: "Stuffing, insulation, non-woven, industrial",
          },
          { label: "HS Code", value: "53039000" },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          { label: "Bale Weight", value: "130 kg", highlight: true },
          { label: "Pressing", value: "Hydraulic press, secured with iron belts" },
          { label: "Container (20' FCL)", value: "13 Metric Tons", highlight: true },
          { label: "Container (40' FCL)", value: "26 Metric Tons" },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "jute-yarn",
    name: "Jute Yarn",
    category: "Yarn",
    shortDescription:
      "Natural fibre thread made by twisting jute fibres, used in textiles, woven fabrics, and industrial products.",
    image: {
      src: "/images/gallery/Jute-Yarn.webp",
      alt: "Spools of jute yarn",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Jute Yarn / Twine", highlight: true },
          {
            label: "Count Range",
            value: "8–96 lbs (275–3310 Tex)",
            highlight: true,
          },
          { label: "Ply", value: "Single or Multi-ply" },
          {
            label: "Qualities",
            value: "Sacking, Hessian, CB, CRM, CTR, CRX, White (Mesta)",
            highlight: true,
          },
          { label: "Finishes", value: "Natural, bleached, dyed" },
          { label: "HS Code (Yarn)", value: "53071000" },
          { label: "HS Code (Twine)", value: "53072000" },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          {
            label: "Paper Cone Package",
            value: "10–18 kg including paper cone",
          },
          { label: "Coreless Spool", value: "2–5 kg" },
          {
            label: "Packing",
            value: "4–6 spools per truss or 1,000–1,300 kg per pallet",
          },
          { label: "MOQ (20' FCL)", value: "13 Metric Tons", highlight: true },
          { label: "MOQ (40' FCL)", value: "24–26 Metric Tons", highlight: true },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "hessian-cloth",
    name: "Hessian Cloth (Burlap)",
    category: "Fabrics & Cloth",
    shortDescription:
      "Coarse woven jute fabric commonly used for sacks, packaging, and industrial applications. Available in a wide range of widths and weights.",
    image: {
      src: "/images/gallery/Hessian-Cloth-scaled.webp",
      alt: "Roll of hessian (burlap) cloth",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Hessian Cloth / Burlap", highlight: true },
          { label: "Width", value: "24 to 52 inches", highlight: true },
          { label: "Weight", value: "200 to 305 GSM (5 oz to 10 oz)", highlight: true },
          {
            label: "Primary Use",
            value: "Sacking, packaging, industrial applications",
          },
          { label: "HS Code", value: "58019000" },
        ],
      },
      {
        id: "specs",
        name: "Available Specs",
        specs: [
          { label: "40/5 oz – 5×6 weave", value: "2,000 yards/sheet" },
          { label: "40/6 oz – 6×7 weave", value: "2,000 yards/sheet" },
          { label: "40/7 oz – 9×8 weave", value: "2,000 yards/sheet" },
          { label: "40/8 oz – 9×10 weave", value: "2,000 yards/sheet" },
          { label: "40/9 oz – 9×10 weave", value: "2,000 yards/sheet" },
          { label: "45/8 oz – 9×10 weave", value: "2,000 yards/sheet" },
          { label: "45/9 oz – 9×10 weave", value: "2,000 yards/sheet" },
          { label: "Custom widths/weights", value: true },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          {
            label: "Bale Contents",
            value: "1,000–2,000 yards",
            highlight: true,
          },
          {
            label: "Pressing",
            value: "Hydraulic press, secured with iron belts",
          },
          { label: "MOQ", value: "1 × 20' FCL or 1 × 40' FCL", highlight: true },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "sacking-cloth",
    name: "Sacking Cloth",
    category: "Fabrics & Cloth",
    shortDescription:
      "Heavy-duty coarse jute fabric primarily used for making sacks, bags, and packaging materials. Strong, breathable, and durable.",
    image: {
      src: "/images/gallery/Jute-Cloth.webp",
      alt: "Heavy sacking jute cloth",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Sacking / Gunny Cloth", highlight: true },
          { label: "Qualities", value: "Btwill, DW (Double Warp)", highlight: true },
          { label: "Weight", value: "650 grams per yard and above", highlight: true },
          {
            label: "Primary Use",
            value: "Sacks, bags, industrial packaging",
          },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          {
            label: "Bale Contents",
            value: "500–1,000 yards",
            highlight: true,
          },
          {
            label: "Pressing",
            value: "Hydraulic press, secured with iron belts",
          },
          { label: "MOQ", value: "1 × 20' FCL or 1 × 40' FCL", highlight: true },
          {
            label: "Total weight",
            value: "Depends on fabric weight per yard",
          },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "hessian-bag",
    name: "Hessian Bag (Burlap Sack)",
    category: "Bags & Packaging",
    shortDescription:
      "Strong, eco-friendly sacks made from woven hessian jute fabric used for carrying and storing bulk goods.",
    image: {
      src: "/images/gallery/high-view-coffee-beans-burlap-sack-1-scaled.webp",
      alt: "Hessian burlap sack filled with coffee beans",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Hessian / Burlap Bag", highlight: true },
          { label: "Cloth Weight", value: "200 GSM and above" },
          {
            label: "Width Range",
            value: "24″ to 52″ with salvage pattern",
            highlight: true,
          },
          { label: "Size Range", value: '40"/6 oz to 40"/12 oz', highlight: true },
          {
            label: "Primary Use",
            value: "Grain, coffee, cocoa, agricultural bulk storage",
          },
          { label: "HS Code", value: "63051000" },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          {
            label: "Bags per Bale",
            value: "500 or 1,000 bags",
            highlight: true,
          },
          { label: "Binding", value: "Iron belt" },
          { label: "Container (20' FCL)", value: "13 Metric Tons", highlight: true },
          { label: "Container (40' FCL)", value: "24–26 Metric Tons" },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "sacking-sack",
    name: "Sacking Sack",
    category: "Bags & Packaging",
    shortDescription:
      "Heavy-duty sacks made from coarse jute sacking fabric. Ideal for packing and transporting grains, sugar, and agricultural products.",
    image: {
      src: "/images/gallery/pexels-cottonbro-4829070-scaled.webp",
      alt: "Stacked jute sacking sacks",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Sacking Sack / Gunny Bag", highlight: true },
          {
            label: "Qualities",
            value: "Btwill, Gunny, DW (Double Warp)",
            highlight: true,
          },
          { label: "Weight", value: "600 grams and above", highlight: true },
          {
            label: "Primary Use",
            value: "Grains, sugar, agricultural products",
          },
          { label: "HS Code", value: "63051000" },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          { label: "Bags per Bale", value: "300 or 400 bags", highlight: true },
          {
            label: "Pressing",
            value: "Hydraulic press, secured with iron belts",
          },
          { label: "MOQ", value: "1 × 20' FCL or 1 × 40' FCL", highlight: true },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "jute-rope",
    name: "Jute Rope",
    category: "Rope & Twine",
    shortDescription:
      "Strong rope made by twisting natural jute fibres into strands. Used for packaging, tying, gardening, and general-purpose binding.",
    image: {
      src: "/images/gallery/Jute-Ropes.webp",
      alt: "Coiled jute ropes",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Jute Rope", highlight: true },
          { label: "Qualities", value: "Sacking, Hessian, CB", highlight: true },
          { label: "Thickness", value: "6 mm to 42 mm", highlight: true },
          {
            label: "Primary Use",
            value: "Packaging, tying, gardening, general binding",
          },
          { label: "HS Code", value: "56079090" },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          { label: "Package", value: "25 kg per roll (or as per demand)" },
          {
            label: "Packing",
            value: "4–6 rolls covered with jute fabric",
            highlight: true,
          },
          { label: "Container (20' FCL)", value: "13 Metric Tons", highlight: true },
          { label: "Container (40' FCL)", value: "24–26 Metric Tons" },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "jute-bag",
    name: "Jute Bag",
    category: "Bags & Packaging",
    shortDescription:
      "General-purpose jute bags available in a range of sizes and weights. Suitable for food grain, sand, agricultural, and industrial packaging.",
    image: {
      src: "/images/gallery/WhatsApp-Image-2025-06-12-at-11.20.41.webp",
      alt: "Jute bag for agricultural goods",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Jute Bag", highlight: true },
          {
            label: "Types",
            value: "Food grain bags, sandbags, coffee/cocoa sacks",
            highlight: true,
          },
          {
            label: "Primary Use",
            value: "Agricultural, industrial, flood-control packaging",
          },
          { label: "HS Code", value: "63051000" },
          { label: "Custom Dimensions", value: true },
          { label: "Private Labeling", value: true },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          { label: "Container (20' FCL)", value: "13 Metric Tons", highlight: true },
          { label: "Container (40' FCL)", value: "24–26 Metric Tons" },
          { label: "MOQ", value: "1 × 20' FCL", highlight: true },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
  {
    slug: "jute-twine",
    name: "Jute Twine",
    category: "Rope & Twine",
    shortDescription:
      "Natural jute twine made from twisted jute yarn. Used for agricultural baling, industrial packaging, horticulture supply, and general-purpose binding.",
    image: {
      src: "/images/gallery/rough-rope-texture-composition-scaled.webp",
      alt: "Coils of jute twine",
    },
    specGroups: [
      {
        id: "overview",
        name: "Overview",
        specs: [
          { label: "Product", value: "Jute Twine", highlight: true },
          { label: "Count Range", value: "8–96 lbs (275–3310 Tex)", highlight: true },
          { label: "Ply", value: "Single or Multi-ply" },
          { label: "Qualities", value: "Sacking, Hessian, CB, CRM" },
          {
            label: "Primary Use",
            value: "Agricultural baling, industrial packaging, horticulture supply",
          },
          { label: "HS Code", value: "53072000" },
        ],
      },
      {
        id: "packing",
        name: "Packing & Shipping",
        specs: [
          { label: "Coreless Spool", value: "2–5 kg" },
          { label: "Paper Cone Package", value: "10–18 kg" },
          {
            label: "Packing",
            value: "4–6 spools per truss or 1,000–1,300 kg/pallet",
          },
          { label: "Container (20' FCL)", value: "13 Metric Tons", highlight: true },
          { label: "Container (40' FCL)", value: "24–26 Metric Tons" },
          { label: "Payment Terms", value: "LC at Sight, T/T, CAD" },
        ],
      },
    ],
  },
];

export const productCategories = [
  {
    id: "raw-materials",
    name: "Raw Materials",
    products: products.filter((p) => p.category === "Raw Materials"),
  },
  {
    id: "yarn",
    name: "Yarn",
    products: products.filter((p) => p.category === "Yarn"),
  },
  {
    id: "fabrics-cloth",
    name: "Fabrics & Cloth",
    products: products.filter((p) => p.category === "Fabrics & Cloth"),
  },
  {
    id: "bags-packaging",
    name: "Bags & Packaging",
    products: products.filter((p) => p.category === "Bags & Packaging"),
  },
  {
    id: "rope-twine",
    name: "Rope & Twine",
    products: products.filter((p) => p.category === "Rope & Twine"),
  },
];
