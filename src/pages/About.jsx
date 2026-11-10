import { Card, CheckList, Eyebrow, Grid, PageHead, Section, SectionHead, Wrap } from "../components/ui.jsx";
import CallBand from "../components/CallBand.jsx";
import Illustration from "../components/Illustration.jsx";

const principles = [
  { icon: "🎯", title: "Goal-first design", text: "We start with what your website needs to achieve, then design every section to support it." },
  { icon: "🧱", title: "Clean, lasting code", text: "Reusable components and tidy structure make your site faster to build now and easier to change later." },
  { icon: "📱", title: "Mobile-first always", text: "Most visitors arrive on a phone, so we design and test for small screens first." },
  { icon: "🔍", title: "Honest communication", text: "Clear scope, realistic timelines and straight answers — including when something isn't a good idea." },
];

const stack = ["React.js", "Next.js", "Vite", "Tailwind CSS", "JavaScript", "WordPress", "WooCommerce", "Figma", "REST APIs", "Git"];

export default function About() {
  return (
    <>
      <PageHead eyebrow="About us" title="Design-led. Engineering-first." lead="Baig Web Service LLC is a web design and development agency that builds fast, responsive websites and web apps for businesses that want to grow online." />

      <Section>
        <Wrap className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2>Human strategy. Careful craft.</h2>
            <p className="mt-3 text-muted">
              We're a team that cares about both how a website looks and how it's built. Good design earns attention;
              good engineering keeps it — with pages that load quickly, work on every device and are simple to update.
            </p>
            <p className="text-muted">
              Whether you need a first business website, a rebuilt online store or a custom React.js web application,
              you'll work directly with the people designing and developing it — no hand-offs, no jargon.
            </p>
            <CheckList items={["Custom design — no recycled templates", "Responsive on phones, tablets and desktops", "Clean code and sensible SEO foundations", "Support and maintenance after launch"]} />
          </div>
          <Illustration name="website" label="A responsive business website design" />
        </Wrap>
      </Section>

      <Section soft>
        <Wrap className="text-center">
          <SectionHead eyebrow="How we work" title="Our principles" lead="The ideas behind every project we take on." />
          <Grid cols={4}>{principles.map((c) => <Card key={c.title} icon={c.icon} title={c.title}><p>{c.text}</p></Card>)}</Grid>
        </Wrap>
      </Section>

      <Section>
        <Wrap className="text-center">
          <SectionHead eyebrow="Our toolkit" title="Technology we work with" lead="Modern, well-supported tools — chosen for the job, not for fashion." />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {stack.map((t) => (
              <span key={t} className="rounded-full border-[1.5px] border-line bg-white px-[18px] py-2 text-[.92rem] font-bold text-navy transition hover:-translate-y-0.5 hover:border-sky hover:shadow-card">{t}</span>
            ))}
          </div>
        </Wrap>
      </Section>

      <CallBand eyebrow="Let's collaborate" title="Let's work together" text="Have a project in mind? Tell us about it and we'll suggest the best way to bring it to life." />
    </>
  );
}
