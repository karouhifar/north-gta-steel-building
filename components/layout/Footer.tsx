"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const buildingLinks = [
  { label: "Commercial", href: "#commercial" },
  { label: "Industrial", href: "#industrial" },
  { label: "Agricultural", href: "#agricultural" },
  { label: "Aviation", href: "#aviation" },
  { label: "Residential", href: "#residential" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contractors", href: "#contractors" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

const contactItems = [
  {
    icon: Phone,
    label: "1-416-505-1371",
  },
  {
    icon: Mail,
    label: "estimates@northgtasteel.ca",
  },
  {
    icon: MapPin,
    label: "Serving All Ontario",
  },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center bg-steel-red">
        <div className="h-0 w-0 rotate-180 border-x-[6px] border-b-[10px] border-x-transparent border-b-white" />
      </div>

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
      className="font-general text-sm text-steel-light transition-colors hover:text-foreground"
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

            <p className="mt-6 max-w-sm font-general text-sm leading-relaxed text-steel-light">
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

                    <span className="font-mono text-sm text-shadow-steel-dark">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
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
          className="flex flex-col items-center justify-between gap-4 border-t border-steel-gray pt-8 lg:flex-row"
        >
          <p className="text-center font-mono text-xs uppercase text-shadow-steel-dark lg:text-left">
            © {new Date().getFullYear()} North GTA Steel Ltd. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#privacy"
              className="font-mono text-xs uppercase tracking-wider text-shadow-steel-dark transition-colors hover:text-foreground"
            >
              Privacy
            </Link>

            <Link
              href="#terms"
              className="font-mono text-xs uppercase tracking-wider text-shadow-steel-dark transition-colors hover:text-foreground"
            >
              Terms
            </Link>

            <span className="hidden font-mono text-xs text-shadow-steel-dark sm:inline">
              —
            </span>

            <span className="font-mono text-xs uppercase text-shadow-steel-dark">
              Built with Canadian Steel
            </span>

            <div className="h-2 w-2 bg-steel-red" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
