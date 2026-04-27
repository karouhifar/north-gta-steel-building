# North GTA Steel Building Website

A modern, SEO-focused steel building website built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**. This project is designed for a North GTA steel building company serving areas such as Vaughan, Richmond Hill, Markham, Aurora, Newmarket, King City, Caledon, Brampton, Mississauga, Toronto, and surrounding Ontario communities.

The website focuses on speed, local SEO, clean design, strong conversion sections, and professional presentation for steel building services.

---

## Project Overview

**North GTA Steel Building** is a marketing and lead-generation website for a steel building contractor, supplier, or construction company.

The website includes pages for:

* Commercial steel buildings
* Industrial steel buildings
* Agricultural steel buildings
* Metal garages
* Warehouses
* Aircraft hangars
* Riding arenas
* Storage buildings
* Custom steel structures
* Local city landing pages
* Quote request form
* Project gallery
* Blog / resource center

---

## Tech Stack

```txt
Next.js
React
TypeScript
Tailwind CSS
Framer Motion
shadcn/ui
Lucide React
Next Metadata API
Next Image Optimization
```

Recommended runtime:

```txt
Node.js for production
Bun, pnpm, or npm for development/package management
```

---

## Why Next.js?

Next.js is a strong choice for this website because it supports:

* Server-side rendering
* Static site generation
* Fast page loading
* SEO-friendly metadata
* Optimized images
* Dynamic local landing pages
* Blog and content marketing
* Scalable project structure
* Easy deployment on Vercel, Cloudflare, or VPS hosting

For a steel building company, SEO is important because customers often search for terms like:

```txt
steel buildings Ontario
steel buildings near me
metal buildings Vaughan
commercial steel buildings GTA
pre-engineered steel buildings Ontario
industrial steel buildings Toronto
agricultural steel buildings Ontario
metal garages GTA
```

---

## Main Features

### SEO-Focused Pages

The website is built around searchable service and location pages.

Example pages:

```txt
/
/about
/services
/services/commercial-steel-buildings
/services/industrial-steel-buildings
/services/agricultural-steel-buildings
/services/metal-garages
/services/warehouses
/services/aircraft-hangars
/gallery
/blog
/quote
/contact
/locations/vaughan
/locations/richmond-hill
/locations/markham
/locations/aurora
/locations/newmarket
/locations/brampton
/locations/mississauga
/locations/toronto
```

### Conversion Sections

Recommended homepage sections:

* Hero section with CTA
* Trusted steel building solutions
* Service cards
* Why choose us
* Process section
* Featured projects
* Service areas
* Testimonials
* FAQ
* Quote request CTA

### Design Style

The design should feel:

* Strong
* Industrial
* Clean
* Premium
* Trustworthy
* Local to Ontario
* Professional for B2B and property owners

Suggested visual direction:

```txt
Dark steel tones
White backgrounds
Orange or red accent color
Large industrial photography
Rounded cards
Subtle shadows
Smooth parallax effects
Framer Motion animations
Bold typography
```

---

## Getting Started

### 1. Create the Project

```bash
npx create-next-app@latest north-gta-steel-building
```

Recommended options:

```txt
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src directory: Yes
App Router: Yes
Turbopack: Yes
Import alias: Yes
```

---

### 2. Move Into the Project

```bash
cd north-gta-steel-building
```

---

### 3. Install Dependencies

Using npm:

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

Using Bun:

```bash
bun add framer-motion lucide-react clsx tailwind-merge
```

Using pnpm:

```bash
pnpm add framer-motion lucide-react clsx tailwind-merge
```

---

### 4. Install shadcn/ui

```bash
npx shadcn@latest init
```

Then install common components:

```bash
npx shadcn@latest add button card input textarea badge accordion separator
```

---

## Development

Start the development server:

```bash
npm run dev
```

Or with Bun:

```bash
bun run dev
```

Open the website at:

```txt
http://localhost:3000
```

---

## Suggested Folder Structure

```txt
north-gta-steel-building/
├── public/
│   ├── images/
│   │   ├── hero-steel-building.jpg
│   │   ├── commercial-building.jpg
│   │   ├── industrial-warehouse.jpg
│   │   ├── agricultural-building.jpg
│   │   └── projects/
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── commercial-steel-buildings/
│   │   │   │   └── page.tsx
│   │   │   ├── industrial-steel-buildings/
│   │   │   │   └── page.tsx
│   │   │   └── agricultural-steel-buildings/
│   │   │       └── page.tsx
│   │   ├── locations/
│   │   │   ├── vaughan/
│   │   │   │   └── page.tsx
│   │   │   ├── markham/
│   │   │   │   └── page.tsx
│   │   │   └── richmond-hill/
│   │   │       └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── quote/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── service-card.tsx
│   │   ├── project-card.tsx
│   │   ├── quote-form.tsx
│   │   ├── location-grid.tsx
│   │   └── ui/
│   ├── data/
│   │   ├── services.ts
│   │   ├── locations.ts
│   │   ├── projects.ts
│   │   └── faqs.ts
│   └── lib/
│       ├── utils.ts
│       └── seo.ts
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## SEO Strategy

### Page Titles

Use clear, local, keyword-focused titles.

Examples:

```txt
North GTA Steel Building | Steel Buildings in Ontario
Commercial Steel Buildings in Vaughan, Ontario
Industrial Steel Buildings in the Greater Toronto Area
Agricultural Steel Buildings in Ontario
Metal Garages and Storage Buildings in North GTA
```

### Meta Descriptions

Example:

```txt
North GTA Steel Building designs and supplies durable steel buildings for commercial, industrial, agricultural, and storage use across Vaughan, Markham, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area.
```

### Local SEO Pages

Create unique location pages for each service area.

Suggested locations:

```txt
Vaughan
Richmond Hill
Markham
Aurora
Newmarket
King City
Caledon
Brampton
Mississauga
Toronto
Barrie
Innisfil
Bradford
Bolton
Etobicoke
North York
```

Each location page should include:

* City-specific headline
* Local service description
* Types of buildings offered
* Nearby service areas
* Quote CTA
* FAQ section
* Internal links to services

---

## Example Metadata

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "North GTA Steel Building | Steel Buildings in Ontario",
  description:
    "Durable commercial, industrial, agricultural, and custom steel buildings across Vaughan, Markham, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area.",
  keywords: [
    "steel buildings Ontario",
    "steel buildings GTA",
    "metal buildings Vaughan",
    "commercial steel buildings Ontario",
    "industrial steel buildings Toronto",
    "pre-engineered steel buildings",
  ],
  openGraph: {
    title: "North GTA Steel Building",
    description:
      "Custom steel building solutions for commercial, industrial, agricultural, and storage projects in Ontario.",
    url: "https://northgtasteelbuilding.com",
    siteName: "North GTA Steel Building",
    images: [
      {
        url: "/images/og-steel-building.jpg",
        width: 1200,
        height: 630,
        alt: "North GTA Steel Building project",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};
```

---

## Sitemap

Create a sitemap file at:

```txt
src/app/sitemap.ts
```

Example:

```tsx
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://northgtasteelbuilding.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/commercial-steel-buildings",
    "/services/industrial-steel-buildings",
    "/services/agricultural-steel-buildings",
    "/services/metal-garages",
    "/gallery",
    "/quote",
    "/contact",
    "/locations/vaughan",
    "/locations/richmond-hill",
    "/locations/markham",
    "/locations/aurora",
    "/locations/newmarket",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
```

---

## Robots File

Create a robots file at:

```txt
src/app/robots.ts
```

Example:

```tsx
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://northgtasteelbuilding.com/sitemap.xml",
  };
}
```

---

## Recommended Homepage Copy

### Hero Section

```txt
Custom Steel Buildings Built for Ontario Conditions
```

```txt
North GTA Steel Building provides durable, cost-effective steel building solutions for commercial, industrial, agricultural, and storage projects across Vaughan, Markham, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area.
```

CTA buttons:

```txt
Request a Quote
View Our Services
```

---

### Services Section

```txt
Steel Building Solutions for Every Project
```

Service cards:

```txt
Commercial Steel Buildings
Industrial Warehouses
Agricultural Buildings
Metal Garages
Storage Buildings
Aircraft Hangars
Riding Arenas
Custom Steel Structures
```

---

### Why Choose Us

```txt
Built Strong. Designed Smart. Delivered Locally.
```

Key points:

```txt
Engineered steel building systems
Ontario-focused service area
Flexible building sizes and layouts
Durable materials for Canadian weather
Commercial, industrial, and agricultural expertise
Clear quote process
Professional project guidance
```

---

## Suggested Components

### Header

* Logo
* Services dropdown
* Locations dropdown
* Gallery link
* Blog link
* Contact link
* Quote button

### Hero Section

* Large image background
* Gradient overlay
* Strong headline
* CTA buttons
* Trust badges

### Service Cards

Each service card should include:

* Image
* Title
* Short description
* Learn more link

### Quote Form

Fields:

```txt
Name
Email
Phone
Project Location
Building Type
Approximate Size
Timeline
Message
```

### FAQ Accordion

Suggested FAQs:

```txt
How much does a steel building cost in Ontario?
How long does it take to complete a steel building project?
Do you serve Vaughan and the North GTA?
Can steel buildings be customized?
Are steel buildings good for Canadian winters?
What types of steel buildings do you offer?
```

---

## Image Optimization

Use the Next.js `Image` component for all major website images.

Recommended image folders:

```txt
public/images/hero/
public/images/services/
public/images/projects/
public/images/locations/
public/images/blog/
```

Image tips:

* Use descriptive filenames
* Add alt text
* Compress images before upload
* Use WebP where possible
* Avoid huge unoptimized background images

Example filenames:

```txt
commercial-steel-building-vaughan.webp
industrial-warehouse-ontario.webp
agricultural-steel-building-gta.webp
metal-garage-north-gta.webp
```

---

## Blog Ideas for SEO

Recommended blog posts:

```txt
How Much Does a Steel Building Cost in Ontario?
Steel Buildings vs Traditional Construction
Best Uses for Commercial Steel Buildings
Why Steel Buildings Are Popular in the GTA
How to Choose the Right Size Steel Building
Are Steel Buildings Good for Canadian Winters?
Pre-Engineered Steel Buildings Explained
Metal Garages vs Wood Garages
Industrial Steel Warehouses in Ontario
Agricultural Steel Buildings for Ontario Farms
```

---

## Local SEO Keywords

Target keywords:

```txt
steel buildings Ontario
steel buildings GTA
steel buildings Vaughan
steel buildings Markham
steel buildings Richmond Hill
steel buildings Aurora
steel buildings Newmarket
metal buildings Ontario
commercial steel buildings Ontario
industrial steel buildings GTA
agricultural steel buildings Ontario
pre-engineered steel buildings Ontario
metal garages Ontario
steel warehouses Ontario
```

---

## Performance Checklist

Before launch:

```txt
Use optimized images
Add metadata to every page
Create sitemap.xml
Create robots.txt
Add schema markup
Compress assets
Check mobile design
Check Lighthouse score
Test contact form
Test quote form
Add Google Search Console
Add Google Analytics or Plausible
Submit sitemap to Google
```

---

## Deployment

### Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set the production domain.
4. Add environment variables if needed.
5. Deploy.

Build command:

```bash
npm run build
```

Start command:

```bash
npm start
```

---

## Production Build

```bash
npm run build
```

Run production locally:

```bash
npm start
```

---

## Environment Variables

Create a `.env.local` file if using forms, CMS, analytics, or email services.

Example:

```env
NEXT_PUBLIC_SITE_URL=https://northgtasteelbuilding.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=info@northgtasteelbuilding.com
```

---

## Contact Form Options

Recommended services:

```txt
Resend
Nodemailer
Formspree
HubSpot Forms
Zoho CRM
Airtable
Google Sheets integration
```

For a business lead-generation website, connecting the quote form to email and CRM is recommended.

---

## Future Improvements

Possible future features:

```txt
CMS-powered blog
Project gallery filter
Quote calculator
Building size estimator
Interactive service area map
Customer testimonials CMS
Case study pages
Google Reviews integration
Multi-language support
French version for Ontario customers
```

---

## License

This project is intended for commercial use by North GTA Steel Building.

---

## Author

Created for a modern steel building business website using Next.js, Tailwind CSS, Framer Motion, and SEO-focused architecture.
