"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

import { VENDOR_NAME, VENDOR_URL } from "@/lib/site";
import { serviceCities } from "@/data/service-cities";
import LogoImg from "@/public/images/logo/markLogo.png";

const buildingLinks = [
  { label: "Commercial", href: "/categories/commercial" },
  { label: "Industrial", href: "/categories/industrial" },
  { label: "Agricultural", href: "/categories/agricultural" },
  { label: "Engineering Design", href: "/categories/engineering-design" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

const featuredAreaSlugs = [
  "toronto",
  "mississauga",
  "brampton",
  "vaughan",
  "richmond-hill",
  "oakville",
  "whitby",
  "caledon",
];

const areaLinks = serviceCities.filter((city) =>
  featuredAreaSlugs.includes(city.slug),
);

const contactItems = [
  {
    icon: Phone,
    label: "1-647-744-7212",
  },
  {
    icon: Mail,
    label: "ngsbuildings@gmail.com",
  },
  {
    icon: MapPin,
    label: "Serving All Ontario",
  },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src={LogoImg}
        alt="North GTA Steel Logo"
        width={50}
        height={50}
        priority
        sizes="100vw"
        className="object-cover object-center opacity-100"
      />

      <span className="font-clash text-lg font-semibold uppercase tracking-tight text-foreground">
        North GTA Steel Buildings
      </span>
    </Link>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-general text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-background py-16 text-foreground">
      <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 grid grid-cols-12 gap-8"
        >
          {/* Brand */}
          <div className="col-span-12 lg:col-span-4">
            <Logo />

            <p className="mt-6 max-w-sm font-general text-sm leading-relaxed text-muted-foreground">
              Ontario&apos;s trusted steel building partner for commercial,
              agricultural, industrial, and custom steel structures.
            </p>
          </div>

          {/* Buildings */}
          <div className="col-span-6 lg:col-span-2">
            <h4 className="mb-4 font-clash text-xs font-semibold uppercase tracking-widest text-foreground">
              Buildings
            </h4>

            <div className="flex flex-col gap-2">
              {buildingLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="col-span-6 lg:col-span-2">
            <h4 className="mb-4 font-clash text-xs font-semibold uppercase tracking-widest text-foreground">
              Company
            </h4>

            <div className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-12 lg:col-span-4">
            <h4 className="mb-4 font-clash text-xs font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h4>

            <div className="flex flex-col gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <Icon className="size-4 text-steel-red" />

                    <span className="font-mono text-sm text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Areas we serve */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 border-t border-border pt-8"
        >
          <h4 className="mb-4 font-clash text-xs font-semibold uppercase tracking-widest text-foreground">
            Areas We Serve
          </h4>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {areaLinks.map((city) => (
              <FooterLink key={city.slug} href={`/steel-buildings/${city.slug}`}>
                Steel Buildings {city.name}
              </FooterLink>
            ))}
            <FooterLink href="/service-areas">All Service Areas</FooterLink>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 lg:flex-row"
        >
          <div className="flex flex-col justify-center gap-2">
            <p className="text-center font-mono text-xs uppercase text-muted-foreground lg:text-left">
              © {new Date().getFullYear()} North GTA Steel Building Inc. All
              rights reserved.
            </p>
            <p className="font-mono text-xs uppercase text-muted-foreground">
              Built with Canadian Steel
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
              —
            </span>

            <Link
              href={VENDOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              Website by {VENDOR_NAME}
            </Link>
            <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
              —
            </span>
            <Link
              href="/sitemap.xml"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              Sitemap
            </Link>
            <div className="h-2 w-2 bg-steel-red" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
