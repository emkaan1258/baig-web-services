import { Btn } from "./ui.jsx";
import { hasPhone, hasWhatsApp, site, telUrl, whatsappUrl } from "../data/site.js";

/** Primary call-to-action group. Quote button always works; phone/WhatsApp appear once configured. */
export default function Cta({ label = "Get a Free Quote", ghost = true, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Btn to="/contact">{label}</Btn>
      {hasWhatsApp && <Btn href={whatsappUrl()} variant="whatsapp">💬 WhatsApp us</Btn>}
      {ghost && hasPhone && <Btn href={telUrl()} variant="ghost">📞 {site.phone}</Btn>}
    </div>
  );
}
