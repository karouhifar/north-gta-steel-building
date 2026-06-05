import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How North GTA STEEL collects, uses, and protects the information of property owners, contractors, and businesses across Ontario.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | North GTA STEEL",
    description:
      "How North GTA STEEL collects, uses, and protects your information.",
    url: "/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
