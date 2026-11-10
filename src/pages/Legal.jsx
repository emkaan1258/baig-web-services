import { Link } from "react-router-dom";
import { PageHead, Wrap } from "../components/ui.jsx";
import { legal } from "../data/legal.js";
import { site } from "../data/site.js";

export default function Legal({ doc }) {
  const d = legal[doc];
  return (
    <>
      <PageHead
        eyebrow="Policies"
        title={d.title}
        lead={d.lead}
        crumbs={<p className="mb-2 text-[.85rem] text-muted"><Link to="/">Home</Link> ✦ Policy ✦ {d.title}</p>}
      />
      <article className="prose-legal">
        <p className="updated">Last updated: {site.lastUpdated}</p>
        {d.sections.map((s, i) => (
          <section key={i}>
            {s.h && <h2>{s.h}</h2>}
            {s.p?.map((t, j) => <p key={j}>{t}</p>)}
            {s.ul && <ul>{s.ul.map((li) => <li key={li}>{li}</li>)}</ul>}
          </section>
        ))}
        <h2>Contact us</h2>
        <p>Questions about this policy? Please <Link to="/contact">contact us</Link> and we'll be happy to help.</p>
      </article>
    </>
  );
}
