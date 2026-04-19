/**
 * site.config.ts — typed schema for customer-specific content.
 * The agent-runner writes this file during Phase 3 build.
 * Every section reads from `site` below.
 */

export interface SiteConfig {
  company: {
    name: string;           // "Eclean"
    wordmark_style: string; // see agent-runner/scripts/tools/wordmark.mjs STYLES
    tag?: string;           // "Oslo · est. 2021"
    phone: string;          // "+47 12 34 56 78"
    email: string;          // "hei@eclean.no"
    address?: string;
    org_no?: string;
    industry: string;       // key into references/<industry>.json
  };
  meta: {
    title: string;
    description: string;
    og_image?: string;
  };
  hero: {
    eyebrow?: string;       // "Ledige tider denne uken"
    headline: string;       // "Renhold gjort riktig."
    subhead: string;
    primary_cta: { label: string; href: string };
    secondary_cta?: { label: string; href: string };
    weird_thing_id: string; // e.g. "before-after-slider"
    weird_thing_props?: Record<string, any>;
  };
  services: Array<{
    n: string;              // "01"
    title: string;
    lead: string;
    included: string[];
    duration?: string;
    image?: string;
  }>;
  pricing?: {
    kind: "calculator" | "quote-cta" | "tiers" | "none";
    config?: Record<string, any>;
  };
  team?: Array<{
    name: string;
    role: string;
    years?: number;
    langs?: string;
    image: string;
  }>;
  reviews?: {
    source: "google" | "trustpilot" | "customer-supplied" | "omit";
    aggregate?: { rating: number; count: number };
    items: Array<{
      name: string;
      rating: number;
      text: string;
      when: string;
      source: string;
    }>;
  };
  clients?: Array<{
    name: string;
    style?: string;         // Tailwind classes for the typographic treatment
  }>;
  contact: {
    heading: string;
    subhead: string;
    opening_hours?: string;
    service_area?: string;
  };
  footer: {
    tagline: string;
    columns: Array<{ title: string; links: Array<[string, string]> }>;
    status_line?: string;
  };
}

// Default config — the agent OVERWRITES this in Phase 3.
export const site: SiteConfig = {
  company: {
    name: "Example AS",
    wordmark_style: "lowercase-italic-serif-with-dot",
    tag: "Oslo",
    phone: "+47 00 00 00 00",
    email: "hei@example.no",
    industry: "default",
  },
  meta: {
    title: "Example AS",
    description: "Placeholder — the agent-runner will overwrite this in Phase 3",
  },
  hero: {
    headline: "[Placeholder — agent writes this]",
    subhead: "",
    primary_cta: { label: "Kom i kontakt", href: "#kontakt" },
    weird_thing_id: "typography-reveal",
  },
  services: [],
  contact: {
    heading: "Ta kontakt",
    subhead: "",
  },
  footer: {
    tagline: "",
    columns: [],
  },
};
