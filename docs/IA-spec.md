# Heritage Jute Fibers — IA Spec v1

---

## Site Job

This is a **legitimacy vibe-check site**. Buyers arrive already interested in purchasing jute — they're here to verify that Heritage Jute Fibers is a real, credible, professional exporter before reaching out. The site must communicate trust immediately and make contact frictionless.

Secondary goal: SEO (nice-to-have, not driving decisions).

---

## Audience

- B2B buyers: importers, wholesalers, manufacturers (sacks, rope, gardening products, etc.), agricultural packagers
- 31 confirmed export countries — key markets: EU, Australia, MENA, South/Southeast Asia
- Decision-makers who need to justify vendor choice internally

---

## Navigation

```
[Logo]    Products    About    Contact    [WhatsApp CTA button]
```

- Flat, 3-item nav. No dropdowns.
- WhatsApp CTA button styled as a pill/badge — persistent in header.
- Mobile: hamburger menu + floating WhatsApp FAB.
- Logo: exists (to be provided at build).

---

## Pages

### 1. Home `/`

The full legitimacy pitch on a single scroll.

| # | Section | Purpose | Assets needed |
|---|---------|---------|---------------|
| 1 | **Hero** | Headline + value prop. Dual CTA: "Browse Products" and "WhatsApp Us" | Hero image (factory or product) — see Open Questions |
| 2 | **Products Overview** | 5 grouped product categories, each linking to `/products#[category]`. Not an exhaustive list — enough to signal breadth. | Representative images per category |
| 3 | **Certifications Bar** | Trust signal. Logos/badges for BJGEA, ERC, Export License, Trade License. | Digital badge assets — see Open Questions |
| 4 | **Numbers / Stats** | Est. 2014 · 31 countries · **[4th stat TBD]** · 11 product lines | See Open Questions — need one more concrete number |
| 5 | **Export Markets** | Flag grid showing 31 export countries | Countries confirmed (list below), flag SVGs already scraped |
| 6 | **Social Proof** | Factory photos, shipment photos, process shots. If unavailable: stats-only fallback. | See Open Questions — photos TBD |
| 7 | **About Snippet** | 2–3 sentence company summary. No founding story — professional summary only. CTA → `/about` | — |
| 8 | **Contact CTA** | Final-scroll conversion. WhatsApp button + email + short form | — |

**Confirmed export countries (31):**
Italy, Spain, Slovenia, Romania, Poland, Russia, Morocco, Malaysia, Australia, New Zealand, India, Pakistan, Sri Lanka, Myanmar, Vietnam, China, South Korea, Thailand, Japan, Fiji, Timor-Leste, South Africa, Tanzania, Egypt, Tunisia, Turkey, Jordan, Iran, Mexico, Peru, Brazil

> Note: The About page on the current site says "20+ countries" — this is outdated. The home page shows 31 flags. Use 31 (or higher if more have been added since the scrape).

---

### 2. Products `/products`

Single page, grouped catalog. Not a product list dump — scannable for buyers who know what they want.

**Category groups:**

| Group | Products |
|-------|---------|
| Raw Materials | Raw Jute, Jute Sliver (Tossa), Cut Jute Fiber |
| Yarn | Jute Yarn |
| Fabrics & Cloth | Jute Cloth / Burlap, Hessian Cloth, Jute Silver (Carpet Backing) |
| Bags & Packaging | Jute Bags, Hessian Bags / Burlap Sacks, Light Cees Bag |
| Rope & Twine | Jute Rope / Twine |

Each product card shows: name, key spec summary (e.g. width range, GSM, MOQ), primary applications, CTA → product detail page.

---

### 3. Product Detail Pages `/products/[slug]` — 11 pages

One page per product. Consistent structure:

1. Product name + short description
2. Specifications (dimensions, weight/GSM, count range, grades, MOQ)
3. Available grades / qualities / finishes
4. Applications / industries
5. Custom options (private labeling, bespoke dimensions, etc.)
6. Packing & shipping info (container size, bale weights, palletizing)
7. Sticky sidebar or bottom bar CTA: **"Request a Quote"** → opens WhatsApp or jumps to contact form

These pages are also the primary SEO landing pages — keep URLs clean (`/products/raw-jute`, `/products/jute-yarn`, etc.).

**Specs confirmed from current site (partial):**

| Product | Confirmed specs |
|---------|----------------|
| Raw Jute | Grades: BTD, BTC, BTR, BWD, BWC |
| Jute Yarn | Count range: 8–96 lbs (275–3310 Tex), single or multi-ply. Qualities: Sacking, Hessian, CB, CRM, CTR, CRX. Finishes: natural, bleached, dyed |
| All others | Specs not on current site — see Open Questions |

---

### 4. About `/about`

Builds depth for buyers who want to dig in. Sections:

1. **Company overview** — registered private export company, est. 2014, Dhaka, Bangladesh
2. **Founding story** — no story to tell; use a credible professional summary instead
3. **Why us** — differentiators: government certified, 10+ years experience, custom orders, factory pricing, reliable shipping
4. **Team** — see Open Questions
5. **Certifications** — full detail: BJGEA, ERC, Export License, Trade License with descriptions
6. **Export markets** — 31 countries, flag grid (reuse home section)
7. **Factory / process** — see Open Questions

---

### 5. Contact `/contact`

Single purpose: get the message sent.

- **Inquiry form**: Name, Company, Country, Product(s) of interest, Message, Submit
- **WhatsApp button** — prominent, above the fold
- **Email**: info@heritagejute.com
- **Phone**: +880 1841-111625 / +880 9611-101558
- **Address**: House 36, 1st Floor, Road 10, Nikunja-02, Dhaka-1229, Bangladesh
- **Hours**: Monday–Friday, 9:00 AM – 5:00 PM (GMT+6)
- **Google Maps link**: https://maps.app.goo.gl/2mcoDFC6umWjaQbQ8

---

### 6. Blog `/blog` — SEO, low priority

Keep the 8 existing posts. No new content investment until the core site is solid.

Over time, pivot away from consumer-facing content ("what is jute fabric") toward B2B buyer-intent topics:
- "Raw jute grades explained: BTD, BTC, BTR — what buyers need to know"
- "Jute bags MOQ and lead times from Bangladesh"
- "Incoterms for jute exports: FOB vs CIF"

Not in primary nav. Linked from footer only.

---

## Global Elements

| Element | Notes |
|---------|-------|
| **Header** | Logo · Products · About · Contact · WhatsApp CTA pill |
| **Footer** | Product links · About · Contact · Certifications row · Address · Privacy Policy · Terms |
| **Floating WhatsApp button** | Fixed bottom-right on all pages. Standard green. |
| **"Request a Quote" CTA** | Sticky on all product detail pages (sidebar on desktop, bottom bar on mobile) |

Privacy Policy and Terms of Service pages exist on the current site and can be migrated as-is.

---

## Social Proof Assets — TBD Checklist

Confirm with client which of the following are available and permissible to publish:

- [ ] Factory / production floor photos
- [ ] Shipment photos (containers being loaded, bales at port)
- [ ] Quality inspection / grading process photos
- [ ] Packing / baling process photos
- [ ] Team photos
- [ ] Annual export volume (metric tons) or total shipments completed
- [ ] Trade fair participation (Dhaka International Trade Fair, jute expos, etc.)
- [ ] Industry award certificates or recognitions
- [ ] Buyer testimonials — see note below
- [ ] Video of factory or production (even low quality phone video works)

**Note on testimonials:** The current site has three fake placeholder testimonials ("John Doe", "John Smith", "John Raw" — all from "EcoPackaging Co." with the same stock photo). These must be removed. Real testimonials, even in anonymous format (*"Importer, Romania"*), would be a significant trust signal. See Open Questions.

If most assets are unavailable at launch, lean on stats, certifications, and well-shot product photography as the primary trust layer.

---

## Open Questions — Needs Client Input

*These questions came up during spec review and need answers before the site can be fully built. Please answer what you can; skip or mark "N/A" for anything that doesn't apply.*

---

### Content & Copy

**Q1. Buyer testimonials**
The current site has fake testimonials that need to be removed. Can you reach out to 1–3 real buyers and ask for a short sentence or two? Anonymous format is completely fine — e.g. *"Reliable supplier with consistent quality." — Importer, Romania*. Even one real quote is better than none.

**Q2. Sample requests**
Do you offer product samples to potential buyers? If yes, should the site have a separate "Request a Sample" button/form, distinct from the general quote inquiry?

**Q3. Payment terms / Incoterms**
Is there anything you're comfortable publishing publicly — e.g. "FOB Chittagong available", "CIF accepted"? Publishing standard trade terms signals professionalism and saves buyers from having to ask.

**Q3b. Tax & VAT**
Are there any tax or VAT details relevant to your export transactions that buyers commonly ask about (e.g. VAT exemption on exports, duty drawback, applicable HS codes)? Publishing these saves back-and-forth for buyers who need to estimate landed cost.

---

### Product Specs

**Q4. Product specifications**
The product detail pages need real specs for buyers to evaluate your products. For each of the 11 products, please provide what you can:

| Product | What we need |
|---------|-------------|
| Raw Jute | Bale weight, moisture content spec, grades beyond BTD/BTC/BTR/BWD/BWC |
| Jute Sliver (Tossa) | Width, weight per meter, grades |
| Cut Jute Fiber | Cut lengths available, grades |
| Jute Yarn | Already have count range & grades — MOQ? |
| Jute Cloth / Burlap | Width (cm), GSM range, weave types |
| Hessian Cloth | Width (cm), GSM range |
| Jute Silver (Carpet Backing) | Width (cm), GSM |
| Jute Bags | Size range (cm), GSM, load capacity |
| Hessian Bags / Burlap Sacks | Standard sizes, capacity (kg), weight |
| Light Cees Bag | Dimensions, capacity, standard spec |
| Jute Rope / Twine | Diameter range (mm), twist types, tensile strength |

If you don't publish specific MOQs publicly, "contact us for MOQ" is fine — but any concrete minimum (e.g. "from 1 full container" or "minimum 500 kg") helps buyers self-qualify before reaching out.

---

### Assets

**Q5. Certification documents**
Do you have digital files (scanned image or PDF) for any of the following?
- BJGEA membership certificate
- ERC (Export Registration Certificate)
- Export License (Jute Ministry)
- Trade License

These will be displayed as trust badges on the site. Even a phone photo of a physical certificate works.

**Q6. Photos**
What photos do you currently have, or can get? Any of the following would be useful:
- Factory / production floor (even a phone photo)
- Finished product shots (bags, cloth, bales)
- Shipment / port photos (containers, loading)
- Team photo

If none are available at launch, the site will use a stats-only trust section as a fallback.

---

### Stats

**Q7. Fourth hero stat**
The stats bar currently reads: *Est. 2014 · 31 countries · 11 product lines*. A fourth number would make it stronger. Is there any figure you're comfortable publishing? Examples:
- Total containers shipped (lifetime or annual)
- Annual export volume in metric tons
- Number of active buyers / clients
- Years of experience (currently 11 years, est. 2014)

If there's no specific number you want to share, we'll keep the bar as three stats.

**Q8. Country count**
The current site's About page says "20+ countries" but the home page shows 31 flags. Should the new site say 31, or is the actual number higher now?

---

### Strategic

**Q9. Sustainability credentials**
EU, Australian, and NZ buyers increasingly require supplier sustainability documentation for their own ESG compliance reports. Do you have any of the following?
- Environmental certifications or audits
- Any published sustainability/sourcing policy
- Plans to pursue certifications (e.g. OEKO-TEX, FSC for packaging)

This could be a `/sustainability` page or a section on the About page — worth adding if content exists.

> Note: Eco-packaging as a use case belongs to the **garments export industry**, not jute. Do not position jute bags/cloth as eco-packaging for garment exporters on this site — the audience for that messaging is different and not our buyer.

---

## Out of Scope (for now)

- i18n / multi-language
- D2C / e-commerce
- Client portal or order tracking
- Live chat beyond WhatsApp
