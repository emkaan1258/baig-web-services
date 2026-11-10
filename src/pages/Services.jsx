import { Link } from "react-router-dom";
import { Btn, Card, Grid, PageHead, Section, SectionHead, Wrap } from "../components/ui.jsx";
import CallBand from "../components/CallBand.jsx";
import Illustration from "../components/Illustration.jsx";
import { services } from "../data/services.js";

const reasons = [
  { icon: "📊", title: "Planned, not guessed", text: "We base design and structure decisions on your goals and your users, not on trends." },
  { icon: "💰", title: "Fair, clear pricing", text: "Straightforward written quotes that show what's included, so there are no surprises." },
  { icon: "🤝", title: "Honest practices", text: "Realistic timelines, plain-English advice and professionalism in every dealing." },
];

export default function Services() {
  return (
    <>
      <PageHead eyebrow="Our services" title="Web design & development services" lead="We don't do everything. We do these things properly — from the first design to ongoing support." />

      <Section>
        <Wrap className="grid items-center gap-8 md:grid-cols-[1.1fr_.9fr] md:gap-12">
          <div>
            <SectionHead eyebrow="Why choose us" title="Focused on doing a few things really well" />
            <div className="mt-6 space-y-4">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-3.5">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[11px] bg-sky-soft text-xl">{r.icon}</span>
                  <div><h3 className="mb-1 text-[1.05rem]">{r.title}</h3><p className="mb-0 text-[.95rem] text-muted">{r.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <Illustration name="devices" label="Websites on laptop, tablet and phone" />
        </Wrap>
      </Section>

      <Section soft>
        <Wrap className="text-center">
          <SectionHead eyebrow="What we offer" title="Our services" lead="Choose a service to see exactly what's included." />
          <Grid>
            {services.map((s) => (
              <Card key={s.slug} as={Link} to={`/services/${s.slug}`} icon={s.icon} title={s.title} className="no-underline hover:no-underline">
                <p>{s.short}</p>
                <span className="mt-3 block text-[.9rem] font-bold text-sky">Learn more →</span>
              </Card>
            ))}
          </Grid>
          <div className="mt-10"><Btn to="/contact">Get a Free Quote</Btn></div>
        </Wrap>
      </Section>

      <CallBand />
    </>
  );
}
