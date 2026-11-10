/**
 * ────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit this file to finish setting up the site.
 * ────────────────────────────────────────────────────────────
 *  Business contact details used throughout the site (header, footer, contact page, CTAs).
 *  Anything left empty ("") is automatically hidden everywhere on
 *  the site (header, footer, contact page, CTAs). Fill them in and
 *  they appear instantly.
 */
export const site = {
  name: "Baig Web Service LLC",
  tagline: "Web Design & Development",

  // ── FILL THESE IN ──────────────────────────────────────────
  email: "sadiabaig551@gmail.com",
  phone: "+1 (240) 378-1772",
  whatsapp: "", //         international format, digits only: e.g. "923000000000"
  address: "5 Concourse W, Brightwater, NY 11718-2003",
  hours: "", //            e.g. "Mon–Sat, 9:00 AM – 6:00 PM PKT"
  jurisdiction: "", //     e.g. "Pakistan" — used in the Terms "Governing law" clause
  // ────────────────────────────────────────────────────────────

  lastUpdated: "November 9, 2026",
};

const digits = (s) => (s || "").replace(/\D/g, "");

export const hasEmail = Boolean(site.email);
export const hasPhone = Boolean(digits(site.phone));
export const hasWhatsApp = Boolean(digits(site.whatsapp));

export const mailtoUrl = (subject = "", body = "") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
export const telUrl = () => `tel:+${digits(site.phone)}`;
export const whatsappUrl = (text = "Hi Baig Web Service LLC, I'd like to discuss a website project.") =>
  `https://wa.me/${digits(site.whatsapp)}?text=${encodeURIComponent(text)}`;
