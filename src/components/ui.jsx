import { Link } from "react-router-dom";

export const cx = (...a) => a.filter(Boolean).join(" ");

export const Wrap = ({ className, style, children }) => (
  <div className={cx("mx-auto w-full max-w-[1140px] px-[22px]", className)} style={style}>
    {children}
  </div>
);

export const Eyebrow = ({ className, children }) => (
  <p className={cx("mb-2 text-[.78rem] font-bold uppercase tracking-[.12em] text-sky", className)}>{children}</p>
);

/** Button / link. `to` = internal route, `href` = external/tel/mailto, otherwise <button>. */
export function Btn({ to, href, variant = "call", className, children, ...rest }) {
  const base =
    "inline-flex items-center justify-center gap-[9px] rounded-full px-6 py-3.5 text-base font-bold no-underline transition duration-150 hover:-translate-y-0.5 hover:no-underline cursor-pointer border-0";
  const v = {
    call: "bg-amber text-[#3a2a00] text-[1.08rem] shadow-[0_8px_22px_-10px_rgba(240,165,0,.8)] hover:bg-amber-hover",
    ghost: "bg-white text-navy border-[1.5px] border-line",
    primary: "bg-sky text-white hover:bg-navy",
    whatsapp: "bg-[#1f9d55] text-white hover:bg-[#188046]",
  }[variant];
  const cls = cx(base, v, className);
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) {
    const ext = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return <button className={cls} {...rest}>{children}</button>;
}

export const Section = ({ soft, className, children }) => (
  <section className={cx("py-16", soft && "bg-soft", className)}>{children}</section>
);

export const SectionHead = ({ eyebrow, title, lead }) => (
  <div className="text-center">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {lead && <p className="mx-auto mt-3.5 max-w-[640px] text-muted">{lead}</p>}
  </div>
);

export const PageHead = ({ eyebrow, title, lead, crumbs }) => (
  <div className="border-b border-line bg-sky-soft py-[46px]">
    <Wrap>
      {crumbs}
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {lead && <p className="mt-2.5 max-w-[640px] text-muted">{lead}</p>}
    </Wrap>
  </div>
);

export const Card = ({ icon, title, children, className, as: As = "div", ...rest }) => (
  <As
    className={cx(
      "rounded-xl border border-line bg-white p-[26px] text-left transition duration-200 hover:-translate-y-1 hover:shadow-card",
      className
    )}
    {...rest}
  >
    {icon && (
      <div className="mb-3.5 grid h-[46px] w-[46px] place-items-center rounded-[11px] bg-sky-soft text-[1.4rem] text-sky">
        {icon}
      </div>
    )}
    <h3 className="mb-2">{title}</h3>
    <div className="text-[.96rem] text-muted [&>p]:mb-0">{children}</div>
  </As>
);

export const Grid = ({ cols = 3, className, children }) => {
  const map = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 md:grid-cols-3",
    4: "sm:grid-cols-2 md:grid-cols-4",
  };
  return <div className={cx("mt-[38px] grid grid-cols-1 gap-[22px]", map[cols], className)}>{children}</div>;
};

export const Steps = ({ items, cols = 4 }) => (
  <div
    className={cx(
      "steps-grid mt-[38px] grid grid-cols-1 gap-5 text-left sm:grid-cols-2",
      cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
    )}
  >
    {items.map((s) => (
      <div key={s.t} className="stepc relative rounded-xl border border-line bg-white p-6">
        <h3 className="mb-1.5 text-[1.05rem]!">{s.t}</h3>
        <p className="mb-0! text-[.9rem] text-muted">{s.p}</p>
      </div>
    ))}
  </div>
);

export const Faq = ({ items }) => (
  <div className="faq mt-[30px] overflow-hidden rounded-xl border border-line bg-white text-left">
    {items.map((f, i) => (
      <details key={f.q} open={i === 0} className="border-b border-line last:border-b-0">
        <summary className="flex cursor-pointer items-center justify-between gap-4 px-[22px] py-[18px] font-bold text-navy">
          {f.q}
        </summary>
        <div className="px-[22px] pb-[18px] text-[.95rem] text-muted">{f.a}</div>
      </details>
    ))}
  </div>
);

export const Callout = ({ warn, children }) => (
  <div
    className={cx(
      "my-5 rounded-lg border-l-4 px-[18px] py-4 text-[.95rem]",
      warn ? "border-amber bg-[#fff6e6]" : "border-sky bg-sky-soft"
    )}
  >
    {children}
  </div>
);

export const CheckList = ({ items, tone = "ok" }) => (
  <ul className="mt-3.5 space-y-2 text-[.96rem] text-[#33404f]">
    {items.map((i) => (
      <li key={i} className="flex gap-2.5">
        <span className={cx("font-bold", tone === "ok" ? "text-ok" : "text-err")}>{tone === "ok" ? "✓" : "✕"}</span>
        <span>{i}</span>
      </li>
    ))}
  </ul>
);

/** Original `.fee-box` navy highlight panel. */
export const HighlightBox = ({ eyebrow, title, children, big, small }) => (
  <div className="flex flex-col items-center justify-between gap-7 rounded-2xl bg-navy p-[38px] text-center text-white sm:flex-row sm:text-left">
    <div>
      <Eyebrow className="text-amber!">{eyebrow}</Eyebrow>
      <h2 className="text-white!">{title}</h2>
      <p className="mt-2 max-w-[560px] text-[.96rem] text-[#cfe0f0]! mb-0!">{children}</p>
    </div>
    <div className="whitespace-nowrap text-5xl font-extrabold leading-none text-amber">
      {big}
      <small className="mt-1 block text-[.85rem] font-medium text-[#cfe0f0]">{small}</small>
    </div>
  </div>
);
