// Server component on purpose — local landing pages ship near-zero JS.
// FAQ uses native <details> instead of Radix Collapsible for the same reason.

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildingCategories } from "@/data/categories";
import {
  getNearbyCities,
  type FullServiceCity,
} from "@/data/service-city-content";

export default function CityTemplate({ city }: { city: FullServiceCity }) {
  const nearbyCities = getNearbyCities(city);

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-20 lg:py-28">
        <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.08]" />

        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-steel-red sm:mb-5 sm:text-xs sm:tracking-[0.35em]">
            <MapPin className="mr-2 inline size-3.5" />
            {city.region} · Ontario
          </p>

          <h1 className="max-w-4xl font-clash text-[clamp(40px,11vw,96px)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-foreground">
            Steel Buildings
            <br />
            <span className="text-steel-red">{city.name}.</span>
          </h1>

          <div className="my-6 h-1 w-28 bg-steel-red sm:my-8" />

          <div className="max-w-3xl space-y-4">
            {city.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-general text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              className="h-auto w-full justify-center rounded-none bg-steel-red px-5 py-4 text-center font-general text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground hover:bg-foreground hover:text-background sm:w-auto sm:px-8 sm:tracking-widest"
            >
              <Link href="/contact">
                Get A Free Quote In {city.name}
                <ArrowRight className="ml-3 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-auto w-full justify-center rounded-none border-border bg-transparent px-5 py-4 text-center font-general text-xs font-medium uppercase tracking-[0.16em] text-foreground hover:border-steel-red hover:bg-transparent hover:text-steel-red sm:w-auto sm:px-8 sm:tracking-widest"
            >
              <Link href="/service-areas">All Service Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local uses */}
      <section className="border-b border-border bg-muted py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="mb-10 grid grid-cols-12 gap-6 sm:mb-14 lg:gap-8">
            <div className="col-span-12 min-w-0 lg:col-span-3">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-steel-red">
                [001] Local Applications
              </p>
              <h2 className="font-clash text-3xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                What We Build
                <br />
                In {city.name}_
              </h2>
            </div>

            <div className="col-span-12 min-w-0 lg:col-span-9">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {city.localUses.map((use, index) => (
                  <Card
                    key={use}
                    className="group rounded-none border border-border bg-background shadow-none transition-colors hover:border-steel-red"
                  >
                    <CardContent className="flex items-start gap-4 p-5 sm:p-6">
                      <span className="font-mono text-xs text-muted-foreground">
                        0{index + 1}
                      </span>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-steel-red" />
                        <p className="font-general text-sm font-medium text-foreground sm:text-base">
                          {use}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Permit note */}
          <Card className="rounded-none border border-border bg-background shadow-none">
            <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-8">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-steel-red/15 text-steel-red">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-steel-red">
                  Permits In {city.name}
                </p>
                <p className="font-general text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {city.permitNote}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Building types */}
      <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="mb-10 sm:mb-14">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-steel-red">
              [002] Building Types
            </p>
            <h2 className="font-clash text-3xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Steel Building Types
              <br />
              Available In {city.name}_
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {buildingCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group block h-full"
              >
                <Card className="h-full rounded-none border border-border bg-transparent shadow-none transition-colors group-hover:border-steel-red">
                  <CardContent className="flex h-full flex-col p-5 sm:p-7">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">
                        {category.number}
                      </span>
                      <Building2 className="size-5 text-muted-foreground transition-colors group-hover:text-steel-red" />
                    </div>

                    <h3 className="font-clash text-lg font-semibold uppercase tracking-tight text-foreground">
                      {category.title}
                    </h3>

                    <p className="mt-3 flex-1 font-general text-sm leading-relaxed text-muted-foreground">
                      {category.summary}
                    </p>

                    <span className="mt-5 inline-flex items-center font-mono text-[10px] uppercase tracking-widest text-steel-red">
                      View Details
                      <ArrowRight className="ml-2 size-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-muted py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 min-w-0 lg:col-span-4">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-steel-red">
                [003] Common Questions
              </p>
              <h2 className="font-clash text-3xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {city.name} Steel
                <br />
                Building FAQ_
              </h2>

              <p className="mt-6 font-general text-sm leading-relaxed text-muted-foreground sm:text-base">
                Planning budgets? Read our full guide:{" "}
                <Link
                  href="/blogs/steel-building-cost-ontario"
                  className="font-medium text-steel-red underline underline-offset-4 hover:text-foreground"
                >
                  Steel Building Cost in Ontario
                </Link>
                .
              </p>
            </div>

            <div className="col-span-12 min-w-0 space-y-3 lg:col-span-8">
              {city.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-background transition-colors open:border-steel-red/60"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-5 sm:px-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-clash text-base font-semibold uppercase tracking-tight text-foreground sm:text-lg">
                      {faq.question}
                    </h3>
                    <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-open:text-steel-red" />
                  </summary>
                  <div className="border-t border-border px-4 py-5 sm:px-6">
                    <p className="font-general text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {nearbyCities.length > 0 && (
        <section className="border-b border-border bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-steel-red">
              [004] Nearby Service Areas
            </p>
            <h2 className="mb-8 font-clash text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
              Also Serving Near {city.name}_
            </h2>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/steel-buildings/${nearby.slug}`}
                  className="border border-border px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:border-steel-red hover:text-steel-red"
                >
                  Steel Buildings {nearby.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="border border-steel-red px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-steel-red transition-all duration-300 hover:bg-steel-red hover:text-primary-foreground"
              >
                View All Areas
                <ArrowRight className="ml-2 inline size-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-steel-red py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 41px)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-screen-2xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary-foreground/70">
              Start Your {city.name} Build
            </p>

            <h2 className="font-clash text-3xl font-bold uppercase leading-none tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Planning A Steel Building
              <br />
              In {city.name}?
            </h2>

            <p className="mt-5 max-w-xl font-general text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Tell us what you want to build and where your property is. We’ll
              confirm feasibility and prepare a budgetary estimate within 48
              hours — no obligation.
            </p>
          </div>

          <Button
            asChild
            className="h-auto w-full justify-center rounded-none bg-primary-foreground px-5 py-4 text-center font-general text-xs font-semibold uppercase tracking-[0.16em] text-steel-black hover:bg-steel-black hover:text-primary-foreground sm:w-auto sm:px-8 sm:tracking-widest"
          >
            <Link href="/contact">
              Get A Free Estimate
              <ArrowRight className="ml-3 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
