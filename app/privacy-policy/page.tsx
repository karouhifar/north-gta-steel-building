"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Cookie,
  FileText,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sectionIndex = [
  { id: "introduction", number: "[001]", label: "Introduction" },
  {
    id: "information-we-collect",
    number: "[002]",
    label: "Information We Collect",
  },
  { id: "how-we-use", number: "[003]", label: "How We Use Your Information" },
  { id: "cookies", number: "[004]", label: "Cookies & Tracking" },
  {
    id: "security-retention",
    number: "[005]",
    label: "Data Security & Retention",
  },
  { id: "your-rights", number: "[006]", label: "Your Rights & Choices" },
  { id: "changes", number: "[007]", label: "Changes To This Policy" },
  { id: "contact", number: "[008]", label: "Contact Us" },
];

const informationCategories = [
  {
    title: "Contact Information",
    description:
      "Your name, email address, phone number, and any other details you provide when requesting a quote, contacting us, or filling out a form on our website.",
  },
  {
    title: "Project Details",
    description:
      "Information about your steel building project, including building type, size, intended use, site location, timeline, budget, and any preferences you share with us.",
  },
  {
    title: "Technical & Usage Data",
    description:
      "Standard web data such as IP address, browser type, device information, referring pages, and interactions with the site collected through cookies and similar technologies.",
  },
];

const usagePoints = [
  "Respond to your inquiries and provide accurate steel building quotes.",
  "Coordinate planning, design, supply, and project communication.",
  "Schedule and confirm appointments, site visits, and follow-up calls.",
  "Improve our website performance, content, and overall user experience.",
  "Send occasional service updates, project follow-ups, or relevant information you have asked to receive.",
  "Meet legal, accounting, and regulatory obligations where applicable.",
];

const cookieCategories = ["Essential", "Analytics", "Functional", "Security"];

const rightsList = [
  "Access the personal information we hold about you.",
  "Request correction of information that is inaccurate or out of date.",
  "Request deletion of your personal information where appropriate.",
  "Withdraw consent or opt out of non-essential communications at any time.",
  "Ask questions about how your information is handled.",
];

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background py-24 lg:py-32">
        <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.5]" />

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 select-none whitespace-nowrap font-clash font-bold uppercase leading-none text-foreground/[0.04] lg:block"
          style={{ fontSize: "18vw" }}
        >
          Privacy
        </motion.div>

        <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 items-start gap-10">
            <div className="col-span-12 lg:col-span-9">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-primary"
              >
                Legal · Privacy Policy
              </motion.p>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-clash text-[clamp(52px,8vw,132px)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-foreground"
                >
                  Your Privacy.
                  <br />
                  <span className="text-primary">Built On Trust.</span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="my-8 h-1 bg-primary"
              />

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-2xl font-general text-base leading-relaxed text-muted-foreground lg:text-lg"
              >
                North GTA Steel Buildings respects your privacy. This Privacy
                Policy explains what information we collect when you visit our
                website, request a quote, or contact us about a steel building
                project, and how we use, protect, and share that information.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 inline-flex items-center gap-3 border border-border bg-muted px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                <FileText className="size-4 text-primary" />
                Effective Date · May 23, 2026
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section index */}
      <section className="border-b border-border bg-muted py-12">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <motion.p
            {...reveal}
            className="mb-6 font-mono text-xs uppercase tracking-widest text-primary"
          >
            On This Page
          </motion.p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
            {sectionIndex.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex items-center gap-3 border-t border-border pt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary">{item.number}</span>
                <span className="flex-1">{item.label}</span>
                <ArrowRight className="size-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        id="introduction"
        className="border-b border-border bg-background py-24 lg:py-32"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8">
            <motion.div {...reveal} className="col-span-12 lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                [001]
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Introduction
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="col-span-12 lg:col-span-10"
            >
              <h2 className="mb-6 font-clash text-3xl font-semibold uppercase leading-tight tracking-tight text-foreground lg:text-5xl">
                We Take Your Information Seriously.
              </h2>

              <p className="max-w-3xl font-general text-base leading-relaxed text-muted-foreground">
                This policy applies to information collected through our
                website, online quote forms, email correspondence, and phone
                conversations with our team. By using our website or contacting
                us, you agree to the practices described below. If you do not
                agree with this policy, please do not use the site or submit
                personal information through it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Information we collect */}
      <section
        id="information-we-collect"
        className="relative overflow-hidden border-b border-border bg-background py-24 lg:py-32"
      >
        <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.35]" />

        <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="mb-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                [002]
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Information We Collect
              </p>
            </div>

            <div className="col-span-12 lg:col-span-10">
              <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-6xl">
                What We Gather_
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {informationCategories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="group h-full rounded-none border border-border bg-card shadow-none transition-colors hover:border-primary">
                  <CardContent className="p-8">
                    <p className="mb-8 font-mono text-xs uppercase tracking-widest text-primary">
                      0{index + 1}
                    </p>

                    <h3 className="mb-3 font-clash text-xl font-semibold uppercase tracking-tight text-foreground">
                      {item.title}
                    </h3>

                    <p className="font-general text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we use your information */}
      <section
        id="how-we-use"
        className="border-b border-border bg-muted py-24 lg:py-32"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8">
            <motion.div {...reveal} className="col-span-12 lg:col-span-4">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                [003] How We Use Your Information
              </p>

              <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-6xl">
                Purposeful
                <br />
                Use Only.
              </h2>

              <p className="mt-6 max-w-md font-general text-sm leading-relaxed text-muted-foreground">
                We use the information you provide to do our job — help you
                plan, price, and complete an Ontario steel building project —
                and nothing more.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="col-span-12 lg:col-span-8"
            >
              <ul className="space-y-4">
                {usagePoints.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-start gap-4 border-t border-border pt-4"
                  >
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                    <p className="font-general text-base leading-relaxed text-muted-foreground">
                      {point}
                    </p>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-10"
              >
                <Card className="rounded-none border border-border border-l-4 border-l-primary bg-background shadow-none">
                  <CardContent className="p-6">
                    <p className="font-general text-sm leading-relaxed text-foreground">
                      <span className="font-clash font-semibold uppercase tracking-wide text-primary">
                        Our promise:
                      </span>{" "}
                      We do not sell, rent, or trade your personal information
                      to third parties for their marketing purposes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section
        id="cookies"
        className="border-b border-border bg-background py-24 lg:py-32"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8">
            <motion.div {...reveal} className="col-span-12 lg:col-span-4">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                [004] Cookies & Tracking
              </p>

              <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-5xl">
                Cookies &
                <br />
                Similar Tech.
              </h2>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="col-span-12 lg:col-span-8"
            >
              <p className="mb-8 max-w-3xl font-general text-base leading-relaxed text-muted-foreground">
                We use cookies and similar technologies to keep the site
                working, understand how visitors use it, and improve content and
                performance. You can control cookies through your browser
                settings, although disabling them may affect parts of the
                experience.
              </p>

              <div className="flex flex-wrap gap-3">
                {cookieCategories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center gap-2 border border-border bg-muted px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Cookie className="size-3" />
                    {category}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data security & retention */}
      <section
        id="security-retention"
        className="border-b border-border bg-muted py-24 lg:py-32"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                [005] Data Security & Retention
              </p>

              <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-6xl">
                Safeguards.
                <br />
                Sensible Limits.
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="h-full rounded-none border border-border bg-background shadow-none">
                    <CardContent className="p-8">
                      <ShieldCheck className="mb-8 size-7 text-primary" />

                      <h3 className="mb-3 font-clash text-xl font-semibold uppercase tracking-tight text-foreground">
                        Security
                      </h3>

                      <p className="font-general text-sm leading-relaxed text-muted-foreground">
                        We use reasonable technical and organizational
                        safeguards to protect your information against
                        unauthorized access, loss, or misuse. No method of
                        transmission over the internet is fully secure, but we
                        work to keep your data protected at every step.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="h-full rounded-none border border-border bg-background shadow-none">
                    <CardContent className="p-8">
                      <Clock className="mb-8 size-7 text-primary" />

                      <h3 className="mb-3 font-clash text-xl font-semibold uppercase tracking-tight text-foreground">
                        Retention
                      </h3>

                      <p className="font-general text-sm leading-relaxed text-muted-foreground">
                        We keep personal information only for as long as it is
                        needed to respond to your inquiry, complete your steel
                        building project, and meet any legal, accounting, or
                        regulatory requirements. You can request access to or
                        deletion of your information at any time.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your rights */}
      <section
        id="your-rights"
        className="border-b border-border bg-background py-24 lg:py-32"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8">
            <motion.div {...reveal} className="col-span-12 lg:col-span-4">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                [006] Your Rights & Choices
              </p>

              <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-6xl">
                You Stay
                <br />
                In Control.
              </h2>

              <p className="mt-6 max-w-md font-general text-sm leading-relaxed text-muted-foreground">
                Reach out using the contact details at the bottom of this page
                and we will respond to verified requests within a reasonable
                timeframe.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="col-span-12 lg:col-span-8"
            >
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {rightsList.map((right, index) => (
                  <motion.li
                    key={right}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-start gap-3 border border-border bg-muted p-5 transition-colors hover:border-primary"
                  >
                    <UserCheck className="mt-1 size-5 shrink-0 text-primary" />
                    <p className="font-general text-sm leading-relaxed text-muted-foreground">
                      {right}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Changes */}
      <section
        id="changes"
        className="border-b border-border bg-muted py-24 lg:py-32"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8">
            <motion.div {...reveal} className="col-span-12 lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                [007]
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Changes To This Policy
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="col-span-12 lg:col-span-10"
            >
              <div className="flex items-start gap-4">
                <RefreshCcw className="mt-1 size-6 shrink-0 text-primary" />
                <p className="max-w-3xl font-general text-base leading-relaxed text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect
                  changes to our services, legal obligations, or how we handle
                  information. When we do, we will post the revised version on
                  this page with an updated effective date at the top. We
                  encourage you to review this page periodically.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-b border-border bg-background py-24 lg:py-32"
      >
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-10">
            <motion.div {...reveal} className="col-span-12 lg:col-span-5">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                [008] Contact Us
              </p>

              <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-6xl">
                Questions?
                <br />
                Get In Touch.
              </h2>

              <p className="mt-6 max-w-md font-general text-sm leading-relaxed text-muted-foreground">
                If you have questions about this Privacy Policy, want to request
                access to your information, or would like to update or delete
                what we hold, reach out using any of the channels below.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="space-y-4">
                <a
                  href="mailto:estimates@northgtasteel.ca"
                  className="group flex items-start gap-5 border border-border bg-muted p-6 transition-colors hover:border-primary"
                >
                  <Mail className="mt-1 size-6 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Email
                    </p>
                    <p className="font-clash text-lg font-semibold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                      estimates@northgtasteel.ca
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+14165051371"
                  className="group flex items-start gap-5 border border-border bg-muted p-6 transition-colors hover:border-primary"
                >
                  <Phone className="mt-1 size-6 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Phone
                    </p>
                    <p className="font-clash text-lg font-semibold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                      (416) 505-1371
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-5 border border-border bg-muted p-6">
                  <MapPin className="mt-1 size-6 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Service Area
                    </p>
                    <p className="font-clash text-lg font-semibold uppercase tracking-tight text-foreground">
                      Greater Toronto Area · All Of Ontario
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 41px)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-screen-2xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary-foreground/70">
              Start Your Build
            </p>

            <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-primary-foreground lg:text-6xl">
              Ready To Plan Your
              <br />
              Steel Building Project?
            </h2>

            <p className="mt-5 max-w-xl font-general text-sm leading-relaxed text-primary-foreground/80">
              We treat every conversation with the same care we treat your
              information. Tell us what you want to build and we will help you
              map out the right next step.
            </p>
          </div>

          <Button
            asChild
            className="h-auto rounded-none bg-primary-foreground px-8 py-4 font-general text-xs font-semibold uppercase tracking-widest text-primary hover:bg-foreground hover:text-background"
          >
            <Link href="/#quote">
              Get A Free Building Quote
              <ArrowRight className="ml-3 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
