import { Eyebrow } from "./ui.jsx";
import Cta from "./Cta.jsx";

/** Original `.callband` gradient CTA section */
export default function CallBand({
  eyebrow = "Let's collaborate",
  title = "Ready to start your website project?",
  text = "Tell us what you need and we'll come back with a clear scope and quote — no obligation.",
  micro = "Free consultation · Clear, written quotes · Friendly, human support",
}) {
  return (
    <section className="bg-gradient-to-br from-sky to-navy px-[22px] py-14 text-center text-white">
      <Eyebrow className="text-amber!">{eyebrow}</Eyebrow>
      <h2 className="text-white!">{title}</h2>
      <p className="mx-auto mb-[22px] mt-3 max-w-[560px] text-[#dbe9f7]">{text}</p>
      <Cta ghost={false} className="justify-center" />
      <p className="mb-0 mt-4 text-[.8rem] text-[#cfe0f0]">{micro}</p>
    </section>
  );
}
