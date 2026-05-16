import { QuoteForm } from "@/components/sections/contact-form/MultiStepForm";
import { ContactHero } from "@/components/sections/ContactHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | North GTA Steel Buildings",
  description:
    "Get in touch with North GTA Steel Buildings. Five quick steps to your custom quote — built with precision, backed by experience, trusted across Ontario.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 steel-grid-bg opacity-40 mask-[radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-screen-2xl  pb-20 sm:pb-24 lg:px-12 lg:pb-28 xl:pb-32 px-5 py-12 sm:px-5 sm:py-6 lg:py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — intro + contact info */}
          <div className="lg:col-span-5 xl:col-span-5">
            <ContactHero />
          </div>

          {/* RIGHT — quote form */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="border-2 border-border bg-card p-6 sm:p-8 lg:p-10">
              <QuoteForm />
            </div>
          </div>
        </div>

        {/* Footer tag */}
        <div className="mt-20 flex items-center gap-3 border-t-2 border-border pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-2 w-2 bg-steel-red" />
          Built for Ontario · Steel that lasts
        </div>
      </div>
    </main>
  );
}
