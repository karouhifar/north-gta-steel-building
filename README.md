This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```bash
north-gta-steel-buildings/
├── app/
│   ├── layout.tsx                 # Root layout: html, body, fonts, metadata
│   ├── page.tsx                   # Home page: /
│   ├── globals.css                # Tailwind + theme variables
│   ├── sitemap.ts                 # Dynamic sitemap for SEO
│   ├── robots.ts                  # Robots.txt config
│   │
│   ├── about/
│   │   └── page.tsx               # /about
│   │
│   ├── services/
│   │   └── page.tsx               # /services
│   │
│   ├── projects/
│   │   └── page.tsx               # /projects
│   │
│   ├── contact/
│   │   └── page.tsx               # /contact
│   │
│   └── api/
│       └── contact/
│           └── route.ts           # API route for contact form
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Container.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   │
│   ├── cards/
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── FeatureCard.tsx
│   │
│   ├── forms/
│   │   └── ContactForm.tsx
│   │
│   └── animations/
│       ├── FadeIn.tsx
│       ├── ParallaxLayer.tsx
│       └── MotionWrapper.tsx
│
├── components/ui/
│   ├── button.tsx                 # shadcn/ui button
│   ├── card.tsx                   # shadcn/ui card
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── badge.tsx
│   ├── accordion.tsx
│   └── dialog.tsx
│
├── lib/
│   ├── utils.ts                   # cn() helper for Tailwind/shadcn
│   ├── site.ts                    # Site name, nav links, metadata
│   └── constants.ts
│
├── data/
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   └── faq.ts
│
├── public/
│   ├── images/
│   │   ├── hero-steel-building.webp
│   │   ├── warehouse.webp
│   │   ├── commercial-building.webp
│   │   └── project-1.webp
│   │
│   ├── icons/
│   │   └── logo.svg
│   │
│   ├── favicon.ico
│   └── og-image.jpg
│
├── styles/
│   └── animations.css             # Optional custom animation CSS
│
├── components.json                # shadcn/ui config
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
