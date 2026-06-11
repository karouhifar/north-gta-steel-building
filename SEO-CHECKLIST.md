# SEO Checklist — northgtasteel.ca

What the code now handles automatically, and the off-site actions only a human can do.

## Handled in code (no action needed)

- `sitemap.xml` and `robots.txt` generated at build (`app/sitemap.ts`, `app/robots.ts`), including all 18 `/steel-buildings/{city}` pages
- Per-page titles, meta descriptions, canonicals, and Open Graph images
- JSON-LD structured data: Organization, WebSite, Service, FAQPage, BreadcrumbList, ItemList, BlogPosting
- 18 local landing pages at `/steel-buildings/{city}` with unique content and FAQs
- Optimized images (WebP hero, CSS grid background) and minimal-JS city pages

## 1. Google Search Console (indexing + keyword impressions)

1. Go to https://search.google.com/search-console and add a property for `https://www.northgtasteel.ca`.
2. Choose **HTML tag** verification and copy the `content="..."` value.
3. Set the env var in production (Vercel → Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<that value>`
4. Redeploy, then click **Verify** in Search Console.
5. Submit the sitemap: **Sitemaps → Add** `https://www.northgtasteel.ca/sitemap.xml`.
6. Use **URL Inspection → Request Indexing** for `/`, `/service-areas`, and 2–3 city pages (e.g. `/steel-buildings/vaughan`, `/steel-buildings/toronto`).
7. After ~2 weeks, check **Performance** for keyword impressions ("steel buildings vaughan", "steel building cost ontario", etc.).

## 2. Google Analytics 4

1. Create a GA4 property at https://analytics.google.com and copy the Measurement ID (`G-XXXXXXXXXX`).
2. Set in production: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` and redeploy.
   The tag only renders when this env var is set — nothing else to configure.

## 3. Google Business Profile (biggest local-SEO lever)

1. Create a profile at https://business.google.com as a **service-area business** (hide street address).
2. Use the exact NAP from the site: **North GTA Steel** / **(647) 744-7212** / **ngsbuildings@gmail.com**.
3. Add service areas (Toronto, Vaughan, Mississauga, Brampton, Richmond Hill, Oakville, Whitby, Caledon…), category "Construction company" / "Building materials supplier", photos of completed builds, and the website URL.
4. Once live, add the profile URL to `SOCIAL_LINKS` in `lib/site.ts` (it feeds Organization `sameAs` schema automatically).

## 4. Backlinks (citations + industry links)

Consistent name/phone/email everywhere. Priority order:

- [ ] HomeStars — homestars.com
- [ ] Houzz Canada — houzz.com
- [ ] YellowPages.ca
- [ ] 411.ca
- [ ] Better Business Bureau — bbb.org
- [ ] Yelp Canada
- [ ] Ask suppliers/partners (steel suppliers, engineers) for a "dealers/partners" page link
- [ ] 1–2 industry associations (e.g., CSSBI-adjacent directories, local chambers of commerce)

Add each new profile URL to `SOCIAL_LINKS` in `lib/site.ts`.

## 5. Content cadence

- Keep publishing MDX posts in `content/blog/` targeting long-tail queries: "steel building cost {city}", "steel building permits ontario", "40x60 steel building price".
- Link each post to the relevant `/steel-buildings/{city}` pages and vice versa.

## 6. Monitor

- Search Console **Coverage/Pages** monthly — all 18 city pages should be "Indexed".
- Rich results: test a city page at https://search.google.com/test/rich-results (expect FAQ + Breadcrumb eligibility).
- PageSpeed: https://pagespeed.web.dev against `/` after each significant change.
