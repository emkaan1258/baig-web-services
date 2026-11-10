import { Card, Grid, PageHead, Section, SectionHead, Steps, Wrap } from "../components/ui.jsx";
import CallBand from "../components/CallBand.jsx";

const flags = [
  { icon: "🐌", title: "A slow website", text: "Pages take several seconds to load, especially on mobile, and visitors leave before they see your offer." },
  { icon: "📵", title: "Not mobile-friendly", text: "Text is tiny, buttons are hard to tap and layouts break on phones — where most of your visitors are." },
  { icon: "🕸️", title: "Outdated or hard to update", text: "Simple edits need a developer, plugins are out of date and nobody is sure what's safe to change." },
];

const rows = [
  ["Design", "Pre-made template with your logo added", "Custom design built around your brand and goals"],
  ["Performance", "Often heavy with unused code and plugins", "Lean, performance-minded build"],
  ["Mobile experience", "Frequently an afterthought", "Designed mobile-first and tested on devices"],
  ["Code quality", "Hard to extend or change", "Clean, reusable, maintainable components"],
  ["Support", "Limited or none after launch", "Maintenance and support available"],
];

const migration = [
  { t: "The Audit", p: "We review your current site's design, speed, structure and SEO to see exactly what's working and what's holding you back." },
  { t: "The Blueprint", p: "We present clear findings and a proposed plan, scope and quote, so you can decide with full information." },
  { t: "The Handover", p: "We rebuild and migrate your content, set up redirects to protect your search visibility and launch with careful testing." },
];

export default function WhySwitch() {
  return (
    <>
      <PageHead eyebrow="Why switch" title="Is your website holding your business back?" lead="If your current site is slow, dated or hard to manage, a better-built website can pay for itself in the enquiries and sales it stops losing." />

      <Section>
        <Wrap className="text-center">
          <SectionHead eyebrow="Warning signs" title="Are you seeing these red flags?" />
          <Grid>{flags.map((f) => <Card key={f.title} icon={f.icon} title={f.title}><p>{f.text}</p></Card>)}</Grid>
        </Wrap>
      </Section>

      <Section soft>
        <Wrap className="text-center">
          <SectionHead eyebrow="The difference" title="Template site vs. a custom build with Baig Web Service LLC" lead="A general comparison of what typically differs between the two approaches." />
          <div className="mt-[30px] overflow-x-auto rounded-xl border border-line bg-white text-left">
            <table className="w-full min-w-[640px] border-collapse text-[.93rem]">
              <thead>
                <tr>
                  {["The difference", "Typical template-based site", "Baig Web Service LLC"].map((h) => (
                    <th key={h} className="bg-navy px-4 py-[13px] text-left font-bold text-white">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]} className="border-b border-line even:bg-soft">
                    <td className="px-4 py-[13px] font-semibold text-navy">{r[0]}</td>
                    <td className="px-4 py-[13px]">{r[1]}</td>
                    <td className="px-4 py-[13px]">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap className="text-center">
          <SectionHead eyebrow="How we switch you" title="The migration protocol" lead="A structured transition designed to protect your content and search visibility, and keep disruption to a minimum." />
          <Steps items={migration} cols={3} />
        </Wrap>
      </Section>

      <CallBand eyebrow="Ready to switch?" title="Let's work together" text="Send us your current website address and we'll tell you honestly what we'd improve first." />
    </>
  );
}
