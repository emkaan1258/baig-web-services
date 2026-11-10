import { Link } from "react-router-dom";
import { Btn, Callout, CheckList, PageHead, Section, Wrap } from "../components/ui.jsx";
import CallBand from "../components/CallBand.jsx";

/**
 * No prices were provided, and none are invented. To show a price on a plan,
 * set `price` (e.g. "$350" or "PKR 45,000") — the card switches automatically.
 */
export const plans = [
  { name: "Landing Page", price: "", note: "One focused page for a campaign or launch", featured: false,
    features: ["1 custom landing page design", "Fully mobile-responsive layout", "Lead form with validation", "Fast, lightweight build", "Basic SEO setup"] },
  { name: "Starter Website", price: "", note: "A simple presence for a small business", featured: false,
    features: ["Up to 3 pages", "Fully mobile-responsive layout", "Contact form", "Social media links", "Basic SEO setup"] },
  { name: "Business Website", price: "", note: "The most popular choice for service businesses", featured: true,
    features: ["Up to 5 pages", "Custom design for your brand", "Contact form with email delivery", "Analytics setup", "On-page SEO foundations"] },
  { name: "Growth Website", price: "", note: "For businesses with more to say", featured: false,
    features: ["Up to 7 pages", "Custom design and reusable components", "Enquiry and booking forms", "Analytics & Search Console setup", "Performance optimisation"] },
  { name: "Advanced Website", price: "", note: "More pages, more features", featured: false,
    features: ["Up to 9 pages", "Advanced forms and integrations", "Blog or CMS setup", "Speed and performance tuning", "Extended launch support"] },
  { name: "Premium / E-commerce", price: "", note: "Large sites and online stores", featured: false,
    features: ["Up to 12 pages, or a full online store", "Payment and shipping integration", "Product and order management", "Full performance optimisation", "Priority support after launch"] },
];

export default function Pricing() {
  return (
    <>
      <PageHead eyebrow="Pricing" title="Choose your plan" lead="Every project is different, so we quote based on pages, features and integrations. Pick the plan closest to your needs and we'll confirm an exact price." />
      <Section>
        <Wrap>
          <Callout>
            <strong>Quote-based pricing.</strong> Prices are confirmed in writing after we review your requirements, so you
            only pay for what you need. Send your details through the <Link to="/contact">contact form</Link> to get yours.
          </Callout>
          <div className="mt-8 grid gap-[22px] sm:grid-cols-2 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-xl border bg-white p-[26px] transition duration-200 hover:-translate-y-1 hover:shadow-card ${p.featured ? "border-sky border-2" : "border-line"}`}>
                {p.featured && <span className="absolute -top-3 left-6 rounded-full bg-sky px-3 py-0.5 text-[.72rem] font-bold uppercase tracking-wider text-white">Most popular</span>}
                <h3>{p.name}</h3>
                <p className="mb-0 mt-1 text-[.9rem] text-muted">{p.note}</p>
                <div className="my-4 text-[2rem] font-extrabold leading-none text-navy">
                  {p.price || "Custom quote"}
                  <small className="mt-1 block text-[.8rem] font-medium text-muted">{p.price ? "one-time project price" : "confirmed after scope review"}</small>
                </div>
                <div className="flex-1 border-t border-line pt-1"><CheckList items={p.features} /></div>
                <Btn to="/contact" className="mt-5 w-full">Get a Quote</Btn>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[.85rem] text-muted">Need something outside these plans — a web app, custom integrations or ongoing maintenance? <Link to="/contact">Tell us about it.</Link></p>
        </Wrap>
      </Section>
      <CallBand eyebrow="Not sure which plan?" title="Let's find the right fit" text="Describe your project and we'll recommend the simplest option that covers what you need." />
    </>
  );
}
