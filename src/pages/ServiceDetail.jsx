import { Link, useParams } from "react-router-dom";
import { Card, CheckList, Eyebrow, Faq, PageHead, Section, SectionHead, Steps, Wrap } from "../components/ui.jsx";
import CallBand from "../components/CallBand.jsx";
import Illustration from "../components/Illustration.jsx";
import NotFound from "./NotFound.jsx";
import { getService, services } from "../data/services.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = getService(slug);
  if (!s) return <NotFound />;

  const crumbs = (
    <p className="mb-2 text-[.85rem] text-muted">
      <Link to="/">Home</Link> ✦ <Link to="/services">Services</Link> ✦ {s.nav}
    </p>
  );
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHead crumbs={crumbs} eyebrow="Our services" title={s.title} lead={s.lead} />

      <Section>
        <Wrap className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2>{s.headline}</h2>
            <div className="mt-3 text-muted">{s.intro.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.stack.map((t) => <span key={t} className="rounded-full border-[1.5px] border-line bg-white px-3.5 py-1.5 text-[.84rem] font-bold text-navy">{t}</span>)}
            </div>
          </div>
          <Illustration name={s.illustration} label={`${s.title} illustration`} />
        </Wrap>
      </Section>

      <Section soft>
        <Wrap className="text-center">
          <SectionHead eyebrow="What's included" title="How we deliver it" />
          <Steps items={s.steps} cols={3} />
          <div className="mx-auto mt-10 max-w-[760px] rounded-xl border border-line border-t-4 border-t-ok bg-white p-[26px] text-left">
            <h3>Every project includes</h3>
            <CheckList items={s.included} />
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead eyebrow="Common questions" title={`About ${s.nav.toLowerCase()}`} />
          <Faq items={s.faqs} />
        </Wrap>
      </Section>

      <Section soft className="py-12">
        <Wrap className="text-center">
          <SectionHead eyebrow="Explore more" title="Other services" />
          <div className="mt-8 grid gap-[22px] sm:grid-cols-2 md:grid-cols-3">
            {others.map((o) => (
              <Card key={o.slug} as={Link} to={`/services/${o.slug}`} icon={o.icon} title={o.nav} className="no-underline hover:no-underline">
                <p>{o.short}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>

      <CallBand eyebrow="Get in touch" title={`Interested in ${s.nav.toLowerCase()}?`} text="Tell us about your project and we'll reply with a clear scope and quote." />
    </>
  );
}
