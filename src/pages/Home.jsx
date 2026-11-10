import { Link } from "react-router-dom";
import { Btn, Card, Eyebrow, Faq, Grid, HighlightBox, Section, SectionHead, Steps, Wrap } from "../components/ui.jsx";
import Cta from "../components/Cta.jsx";
import CallBand from "../components/CallBand.jsx";
import Illustration from "../components/Illustration.jsx";
import { services } from "../data/services.js";

const hcRows = [
  ["1", "We learn your goals", "Your business, audience, content and the results you want."],
  ["2", "We plan & design", "Sitemap, wireframes and a custom design you approve first."],
  ["3", "We build & launch", "Responsive development, testing, launch and ongoing support."],
];

const whatWeDo = [
  { icon: "🎨", title: "Design that fits your brand", text: "Custom layouts and UI/UX design — never a recycled template — so your website looks like you and guides visitors to act." },
  { icon: "⚙️", title: "Development that performs", text: "Clean React.js, Next.js, WordPress and e-commerce builds that load fast, work on every device and are easy to maintain." },
  { icon: "🤝", title: "Support that stays", text: "Maintenance, updates and performance tuning after launch, so your website keeps working as your business grows." },
];

const why = [
  { icon: "📈", title: "Results-Focused", text: "Every page is planned around a business goal — enquiries, bookings or sales — not just good looks." },
  { icon: "✨", title: "Creative Approach", text: "Original design ideas that make your brand memorable and your message easy to understand." },
  { icon: "🧑‍💻", title: "Skilled Developers", text: "Hands-on experience across React.js, Next.js, WordPress and modern front-end tooling." },
  { icon: "💬", title: "Client Focused", text: "Clear communication, honest timelines and quick replies from start to finish." },
];

const system = [
  { icon: "🧭", title: "Plan before we build", text: "We map pages, content and user journeys first, so development is faster and revisions are fewer." },
  { icon: "🔧", title: "Reliable, maintainable code", text: "Reusable components, tidy structure and sensible tooling — so your site is easy to extend later." },
];

const how = [
  { t: "Discover", p: "We talk through your business, goals, audience and requirements." },
  { t: "Design", p: "Sitemap, wireframes and custom visual design for your approval." },
  { t: "Develop", p: "Responsive, tested development with clean, fast-loading code." },
  { t: "Launch & support", p: "We launch carefully and stay on hand for updates and improvements." },
];

const faqs = [
  { q: "What kinds of websites do you build?", a: "Business websites, landing pages, e-commerce stores, WordPress sites and custom React.js / Next.js web applications. If you're not sure what you need, we'll help you choose." },
  { q: "How much does a website cost?", a: "It depends on the number of pages, features and integrations. Tell us what you need and we'll send a clear, written quote after reviewing your requirements." },
  { q: "Will my website work well on mobile?", a: "Yes. Every website is built mobile-first and tested on phones, tablets and desktops before it goes live." },
  { q: "Can you redesign or fix my existing website?", a: "Absolutely. We offer website redesigns, speed optimisation and ongoing maintenance for sites we didn't build." },
  { q: "Do you offer support after launch?", a: "Yes. We offer maintenance and support for updates, fixes, backups and performance, so you're never left on your own." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-sky-soft to-white pb-[50px] pt-[60px]">
        <Wrap className="grid items-center gap-8 md:grid-cols-[1.1fr_.9fr] md:gap-12">
          <div>
            <Eyebrow>Web design &amp; development agency</Eyebrow>
            <h1>
              Need a website that <span className="text-sky">actually grows your business?</span>
            </h1>
            <p className="my-[18px] mb-[22px] max-w-[520px] text-[1.15rem] text-muted">
              We design and build fast, responsive, custom websites — from business sites and online stores to React.js
              and Next.js apps — and look after them long after launch.
            </p>
            <Cta label="Get a Free Quote" />
            <div className="mt-4 flex flex-wrap gap-2">
              {["Custom design", "React & Next.js", "WordPress", "E-commerce"].map((t) => (
                <span key={t} className="inline-flex items-center rounded-full border-[1.5px] border-line bg-white px-3.5 py-[7px] text-[.86rem] font-semibold text-ink">{t}</span>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-line bg-white p-[26px] shadow-card">
            <h3 className="mb-1">How your project works</h3>
            <p className="mb-[18px] text-[.9rem] text-muted">Here's what happens after you get in touch.</p>
            {hcRows.map(([n, b, s]) => (
              <div key={n} className="flex items-start gap-3 border-t border-line py-3">
                <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-lg bg-sky-soft font-extrabold text-sky">{n}</span>
                <div>
                  <b className="block text-[.95rem] text-navy">{b}</b>
                  <span className="text-[.86rem] text-muted">{s}</span>
                </div>
              </div>
            ))}
            <Btn to="/contact" className="mt-[18px] w-full">Start your project</Btn>
            <p className="mb-0 mt-3 text-[.82rem] text-muted">Free consultation. You get a clear, written scope and quote before any work begins.</p>
          </aside>
        </Wrap>
      </section>

      {/* WHAT WE DO */}
      <Section>
        <Wrap className="text-center">
          <SectionHead eyebrow="What we do" title="Websites built to work for you" lead="From the first sketch to launch day and beyond, one team handles design, development and support." />
          <Grid>{whatWeDo.map((c) => <Card key={c.title} icon={c.icon} title={c.title}><p>{c.text}</p></Card>)}</Grid>
        </Wrap>
      </Section>

      {/* SERVICES */}
      <Section soft>
        <Wrap className="text-center">
          <SectionHead eyebrow="Our services" title="Everything your website needs" lead="Eight focused services that cover design, development, growth and support." />
          <Grid>
            {services.map((s) => (
              <Card key={s.slug} as={Link} to={`/services/${s.slug}`} icon={s.icon} title={s.nav} className="no-underline hover:no-underline">
                <p>{s.short}</p>
                <span className="mt-3 block text-[.9rem] font-bold text-sky">Learn more →</span>
              </Card>
            ))}
          </Grid>
        </Wrap>
      </Section>

      {/* WHY CHOOSE */}
      <Section>
        <Wrap className="text-center">
          <SectionHead eyebrow="Built for measurable growth" title="Why choose Baig Web Service LLC" lead="A web design and development team focused on websites that are fast, clear and built to convert." />
          <Grid cols={4}>{why.map((c) => <Card key={c.title} icon={c.icon} title={c.title}><p>{c.text}</p></Card>)}</Grid>
        </Wrap>
      </Section>

      {/* OUR SYSTEM */}
      <Section soft>
        <Wrap>
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <Illustration name="devices" label="A website shown on laptop, tablet and phone" />
            <div>
              <Eyebrow>Smarter execution</Eyebrow>
              <h2>Our system for consistent results</h2>
              <p className="mt-3 text-muted">
                We combine planning, design, development and testing into one clear process, so your project moves
                forward predictably — and you always know what happens next.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {system.map((c) => <Card key={c.title} icon={c.icon} title={c.title}><p>{c.text}</p></Card>)}
              </div>
            </div>
          </div>
        </Wrap>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Wrap className="text-center">
          <SectionHead eyebrow="How it works" title="Four simple steps" />
          <Steps items={how} />
        </Wrap>
      </Section>

      {/* HIGHLIGHT */}
      <Section className="pt-0">
        <Wrap>
          <HighlightBox eyebrow="Transparent process" title="Clear scope. Honest quotes." big="Free" small="quote & consultation">
            You'll know what's included, how long it should take and what it costs before we start. No hidden extras —
            if the scope changes, we talk about it first.
          </HighlightBox>
        </Wrap>
      </Section>

      {/* FAQ */}
      <Section soft>
        <Wrap>
          <SectionHead eyebrow="Common questions" title="Good to know before you get in touch" />
          <Faq items={faqs} />
        </Wrap>
      </Section>

      <CallBand eyebrow="Talk to our team" title="Ready to build something great?" text="Tell us about your project and we'll reply with the best way forward." />
    </>
  );
}
