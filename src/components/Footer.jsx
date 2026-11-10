import { Link } from "react-router-dom";
import { Wrap } from "./ui.jsx";
import { Brand, policies } from "./Header.jsx";
import { services } from "../data/services.js";
import { hasEmail, hasPhone, hasWhatsApp, site, telUrl, whatsappUrl } from "../data/site.js";

const H = ({ children }) => <h4 className="mb-3.5 text-[.95rem] tracking-[.03em] text-white">{children}</h4>;
const L = ({ to, children }) => (
  <li className="mb-2"><Link to={to} className="text-[#bcd0e2] no-underline hover:text-white hover:no-underline">{children}</Link></li>
);

export default function Footer() {
  return (
    <footer className="bg-navy pb-6 pt-[50px] text-[.9rem] text-[#bcd0e2]">
      <Wrap>
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <div className="mb-3"><Brand light /></div>
            <p className="text-[.82rem] leading-[1.6] text-[#90a8c0]">
              {site.name} is a web design and development agency. We build fast, responsive websites and web apps —
              custom design, React.js, Next.js, WordPress and e-commerce — and keep them running smoothly after launch.
            </p>
          </div>
          <div>
            <H>Quick Links</H>
            <ul className="list-none">
              <L to="/">Home</L><L to="/about">About Us</L><L to="/why-switch">Why Switch</L>
              <L to="/services">Services</L><L to="/pricing">Pricing</L><L to="/contact">Contact Us</L>
            </ul>
          </div>
          <div>
            <H>Services</H>
            <ul className="list-none">
              {services.map((s) => <L key={s.slug} to={`/services/${s.slug}`}>{s.nav}</L>)}
            </ul>
          </div>
          <div>
            <H>Get in Touch</H>
            <ul className="list-none">
              <li className="mb-2">💬 <Link to="/contact" className="text-[#bcd0e2] hover:text-white">Request a free quote</Link></li>
              {hasEmail && <li className="mb-2">✉️ <a href={`mailto:${site.email}`} className="text-[#bcd0e2] hover:text-white">{site.email}</a></li>}
              {hasPhone && <li className="mb-2">📞 <a href={telUrl()} className="text-[#bcd0e2] hover:text-white">{site.phone}</a></li>}
              {hasWhatsApp && <li className="mb-2">🟢 <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-[#bcd0e2] hover:text-white">WhatsApp</a></li>}
              {site.address && <li className="mb-2">📍 {site.address}</li>}
              {site.hours && <li className="mb-2">🕒 {site.hours}</li>}
            </ul>
          </div>
        </div>
        <div className="mt-[34px] flex flex-wrap items-center justify-between gap-3 border-t border-[#1e3e60] pt-5 text-[.82rem] text-[#90a8c0]">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            {policies.map((p) => <Link key={p.to} to={p.to} className="text-[#90a8c0] hover:text-white">{p.label}</Link>)}
          </span>
        </div>
      </Wrap>
    </footer>
  );
}
