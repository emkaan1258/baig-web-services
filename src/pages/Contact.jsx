import { Callout, PageHead, Section, Wrap } from "../components/ui.jsx";
import Cta from "../components/Cta.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { hasEmail, hasPhone, hasWhatsApp, site, telUrl, whatsappUrl } from "../data/site.js";

const Line = ({ icon, label, children }) => (
  <div className="flex items-start gap-3 border-t border-line py-2.5 first:border-t-0">
    <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-lg bg-sky-soft text-sky">{icon}</span>
    <div><b className="block text-[.92rem] text-navy">{label}</b><span className="text-[.9rem] text-muted">{children}</span></div>
  </div>
);

export default function Contact() {
  return (
    <>
      <PageHead eyebrow="Contact us" title="Get in touch with us" lead="We'd love to hear from you. Whether you have a question or want to discuss a project, send us a message and we'll reply as soon as we can." />
      <Section className="pt-12">
        <Wrap>
          <div className="mb-6 flex justify-center"><Cta label="Request a Free Quote" /></div>
          <div className="grid items-start gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-11">
            <div>
              <div className="mb-[18px] rounded-xl border border-line bg-white p-[26px]">
                <Line icon="📝" label="Project enquiries">Use the form and tell us about your project — we'll reply with next steps.</Line>
                {hasEmail && <Line icon="✉️" label="Email"><a href={`mailto:${site.email}`}>{site.email}</a></Line>}
                {hasPhone && <Line icon="📞" label="Phone"><a href={telUrl()}>{site.phone}</a></Line>}
                {hasWhatsApp && <Line icon="💬" label="WhatsApp"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></Line>}
                {site.address && <Line icon="📍" label="Address">{site.address}</Line>}
                {site.hours && <Line icon="🕒" label="Hours">{site.hours}</Line>}
              </div>
              <Callout>Tell us what you'd like built, any deadline you have in mind and (optionally) your budget — it helps us give you an accurate quote faster.</Callout>
            </div>
            <ContactForm />
          </div>
        </Wrap>
      </Section>
    </>
  );
}
