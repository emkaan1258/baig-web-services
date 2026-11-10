import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { hasWhatsApp, site, whatsappUrl } from "../data/site.js";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

/** Original top announcement bar */
const Topbar = () => (
  <div className="bg-navy px-3 py-[7px] text-center text-[.8rem] text-[#cfe0f0]">
    Now booking new projects — <b className="text-white">free project consultation &amp; quote</b> for businesses of every size.
  </div>
);

/** Original sticky mobile call bar, adapted to a quote / WhatsApp action */
const MobileBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-[200] flex items-center gap-2.5 bg-navy px-3.5 py-2.5 shadow-[0_-6px_20px_-8px_rgba(0,0,0,.4)] sm:hidden">
    <div className="flex-1 text-white">
      <b className="block text-[.86rem]">{site.name}</b>
      <span className="text-[.74rem] text-[#bcd3e8]">Web design &amp; development</span>
    </div>
    {hasWhatsApp && (
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#1f9d55] px-4 py-[11px] text-[.95rem] font-extrabold text-white no-underline">💬</a>
    )}
    <Link to="/contact" className="rounded-full bg-amber px-[18px] py-[11px] text-[.95rem] font-extrabold text-[#3a2a00] no-underline hover:no-underline">Get a Quote</Link>
  </div>
);

export default function Layout() {
  return (
    <div className="pb-16 sm:pb-0">
      <ScrollToTop />
      <Topbar />
      <Header />
      <main><Outlet /></main>
      <Footer />
      <MobileBar />
    </div>
  );
}
