// Central SEO / site configuration — single source of truth for metadata,
// sitemap, robots, structured data, and Open Graph images.

import { MapPin } from "lucide-react";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.northgtasteel.ca";

export const SITE_NAME = "North GTA STEEL";
export const LEGAL_NAME = "North GTA Steel Ltd.";
export const FOUNDER = "Bob Rouhi";

export const SITE_TITLE_DEFAULT = "Steel Buildings Ontario | North GTA Steel";

export const SITE_DESCRIPTION =
  "Durable commercial, industrial, agricultural, and custom steel buildings across Vaughan, Markham, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area.";

export const LOCALE = "en_CA";
export const LANG = "en-CA";

// NAP — sourced from the live site (Footer / ContactHero), not invented.
export const PHONE = "+16477447212";
export const PHONE_DISPLAY = "(647) 744-7212";
export const EMAIL = "info@ngsbuildings.ca";
export const REGION = "ON";
export const COUNTRY = "CA";

export const VENDOR_NAME = "Dreams Digital";
export const VENDOR_URL = "https://www.dreamsdigital.ca/";

/** Social / profile URLs for Organization `sameAs` (Google Business Profile,
 * directories, socials). Populate as profiles are created. */
export const SOCIAL_LINKS = [
  {
    name: "Google Maps",
    href: "https://maps.app.goo.gl/kRoQ5YcgAyrLFRKF7",
    icon: MapPin,
  },
];

export const LOGO_PATH = "favicon.ico";

export const AREA_SERVED = [
  "Greater Toronto Area",
  "Toronto",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Aurora",
  "Newmarket",
  "Mississauga",
  "Brampton",
  "Oakville",
  "Burlington",
  "Milton",
  "Pickering",
  "Ajax",
  "Whitby",
  "Caledon",
  "Ontario",
];

export const KEYWORDS = [
  "steel buildings Ontario",
  "steel buildings GTA",
  "commercial steel buildings",
  "industrial steel buildings",
  "agricultural steel buildings",
  "prefab steel buildings",
  "metal buildings Ontario",
  "steel building kits Ontario",
  "North GTA Steel",
];

/** Resolve a path to an absolute URL for canonical / structured-data use. */
export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
