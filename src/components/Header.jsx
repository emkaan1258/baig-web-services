import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Wrap, cx } from "./ui.jsx";
import { services } from "../data/services.js";
import { hasPhone, site, telUrl } from "../data/site.js";

export const policies = [
  { to: "/refund", label: "Refund Policy" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

export const Brand = ({ light }) => (
  <Link to="/" className={cx("flex items-center gap-2.5 text-[1.18rem] font-extrabold no-underline hover:no-underline", light ? "text-white" : "text-navy")}>
    <span className="grid h-[34px] w-[34px] place-items-center rounded-lg bg-gradient-to-br from-sky to-navy text-base font-extrabold text-white">B</span>
    {site.name}
  </Link>
);

const linkCls = ({ isActive }) =>
  cx(
    "block rounded-lg px-[13px] py-3 text-[.94rem] font-semibold no-underline hover:bg-soft hover:no-underline lg:py-2.5",
    isActive ? "text-sky" : "text-ink"
  );

function Dropdown({ label, items, open, onToggle, active }) {
  return (
    <li className="group relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={onToggle}
        className={cx(
          "flex w-full cursor-pointer items-center rounded-lg px-[13px] py-3 text-left text-[.94rem] font-semibold hover:bg-soft lg:w-auto lg:py-2.5",
          active ? "text-sky" : "text-ink"
        )}
      >
        {label}
        <span className={cx("ml-[5px] text-[.7rem] text-muted transition", open && "rotate-180")}>▾</span>
      </button>
      <ul
        className={cx(
          "list-none rounded-[10px] bg-white p-1.5 pl-3.5 lg:min-w-[210px] lg:border lg:border-line lg:pl-1.5 lg:shadow-card",
          "lg:absolute lg:left-0 lg:top-full lg:transition lg:duration-200",
          open
            ? "block lg:visible lg:translate-y-0 lg:opacity-100"
            : "hidden lg:block lg:invisible lg:translate-y-1.5 lg:opacity-0 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100"
        )}
      >
        {items.map((i) => (
          <li key={i.to}>
            <NavLink to={i.to} end className="block rounded-[7px] px-3 py-[9px] text-[.92rem] text-ink no-underline hover:bg-sky-soft hover:no-underline">
              {i.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [sub, setSub] = useState(null);
  const ref = useRef(null);
  const { pathname } = useLocation();

  // close everything on navigation
  useEffect(() => { setMenu(false); setSub(null); }, [pathname]);

  // close dropdowns on outside click / Escape
  useEffect(() => {
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) { setSub(null); } };
    const onKey = (e) => { if (e.key === "Escape") { setSub(null); setMenu(false); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);

  const serviceItems = [{ to: "/services", label: "All Services" }, ...services.map((s) => ({ to: `/services/${s.slug}`, label: s.nav }))];
  const toggle = (k) => setSub((c) => (c === k ? null : k));

  return (
    <header ref={ref} className="sticky top-0 z-[100] border-b border-line bg-white/95 backdrop-blur-md">
      <Wrap>
        <nav className="flex h-[66px] items-center justify-between" aria-label="Main">
          <Brand />
          <ul
            id="menu"
            className={cx(
              "list-none flex-col gap-0.5 bg-white p-2.5",
              "absolute left-0 right-0 top-[66px] max-h-[calc(100dvh-66px-64px)] overflow-y-auto border-b border-line",
              "lg:static lg:max-h-none lg:flex-row lg:items-center lg:gap-1.5 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0",
              menu ? "flex" : "hidden lg:flex"
            )}
          >
            <li><NavLink to="/" end className={linkCls}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkCls}>About Us</NavLink></li>
            <li><NavLink to="/why-switch" className={linkCls}>Why Switch</NavLink></li>
            <Dropdown label="Services" items={serviceItems} open={sub === "services"} onToggle={() => toggle("services")} active={pathname.startsWith("/services")} />
            <li><NavLink to="/pricing" className={linkCls}>Pricing</NavLink></li>
            <Dropdown label="Policy" items={policies} open={sub === "policy"} onToggle={() => toggle("policy")} active={policies.some((p) => p.to === pathname)} />
            <li><NavLink to="/contact" className={linkCls}>Contact Us</NavLink></li>
          </ul>
          <div className="flex items-center gap-1.5">
            {hasPhone ? (
              <a href={telUrl()} className="ml-1.5 hidden items-center gap-2 rounded-full bg-amber px-4 py-2.5 text-[.95rem] font-extrabold text-[#3a2a00] no-underline hover:bg-amber-hover hover:no-underline sm:inline-flex">📞 {site.phone}</a>
            ) : (
              <Link to="/contact" className="ml-1.5 hidden items-center gap-2 rounded-full bg-amber px-4 py-2.5 text-[.95rem] font-extrabold text-[#3a2a00] no-underline hover:bg-amber-hover hover:no-underline sm:inline-flex">Get a Quote</Link>
            )}
            <button
              type="button"
              className="cursor-pointer border-0 bg-transparent px-2 text-2xl text-navy lg:hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              aria-controls="menu"
              onClick={() => setMenu((m) => !m)}
            >
              {menu ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </Wrap>
    </header>
  );
}
