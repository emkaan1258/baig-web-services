import { useState } from "react";
import { Link } from "react-router-dom";
import { Btn, cx } from "./ui.jsx";
import { services } from "../data/services.js";
import { hasEmail, hasWhatsApp, mailtoUrl, whatsappUrl } from "../data/site.js";

const EMAILJS = {
  key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};
const emailjsReady = Boolean(EMAILJS.key && EMAILJS.service && EMAILJS.template);

const initial = { name: "", email: "", phone: "", service: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^[+\d][\d\s().-]{6,19}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number, or leave it blank.";
  if (!v.service) e.service = "Please choose a service.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little about your project (at least 10 characters).";
  return e;
}

const inputCls = (err) =>
  cx(
    "w-full rounded-[9px] border-[1.5px] bg-white px-3.5 py-3 text-[.96rem] text-ink focus:border-sky focus:outline-none",
    err ? "border-err" : "border-line"
  );

function Field({ id, label, error, children }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-[.84rem] font-bold text-navy">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mb-0 mt-1 text-[.8rem] text-err">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [v, setV] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);

  const set = (k) => (e) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };
  const svc = services.find((s) => s.slug === v.service)?.title || "";
  const summary = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone || "-"}\nService: ${svc}\n\n${v.message}`;

  async function onSubmit(ev) {
    ev.preventDefault();
    setStatus({ type: "", text: "" });
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(Object.keys(errs)[0])?.focus();
      return;
    }

    // 1) EmailJS (direct delivery) — configured through .env
    if (emailjsReady) {
      setBusy(true);
      try {
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: EMAILJS.service,
            template_id: EMAILJS.template,
            user_id: EMAILJS.key,
            template_params: { name: v.name, email: v.email, phone: v.phone, service: svc, message: v.message },
          }),
        });
        if (!res.ok) throw new Error(await res.text());
        setStatus({ type: "ok", text: "Thank you — your message has been sent. We'll get back to you shortly." });
        setV(initial);
      } catch {
        setStatus({ type: "err", text: "Sorry, something went wrong sending your message. Please try again in a moment." });
      } finally {
        setBusy(false);
      }
      return;
    }

    // 2) Fallbacks that work without any backend
    if (hasEmail) {
      window.location.href = mailtoUrl(`Website enquiry: ${svc}`, summary);
      setStatus({ type: "ok", text: "Opening your email app with your enquiry ready to send." });
      return;
    }
    if (hasWhatsApp) {
      window.open(whatsappUrl(`Hi Baig Web Service LLC,\n\n${summary}`), "_blank", "noopener");
      setStatus({ type: "ok", text: "Opening WhatsApp with your enquiry ready to send." });
      return;
    }
    setStatus({
      type: "err",
      text: "This form isn't connected to an inbox yet. (Site owner: add EmailJS keys in .env, or set an email/WhatsApp number in src/data/site.js.)",
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl border border-line bg-white p-7">
      <div className="grid gap-x-3.5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" value={v.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={inputCls(errors.name)} />
        </Field>
        <Field id="phone" label="Phone (optional)" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={v.phone} onChange={set("phone")} aria-invalid={!!errors.phone} className={inputCls(errors.phone)} />
        </Field>
      </div>
      <Field id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" value={v.email} onChange={set("email")} aria-invalid={!!errors.email} className={inputCls(errors.email)} />
      </Field>
      <Field id="service" label="What do you need?" error={errors.service}>
        <select id="service" name="service" value={v.service} onChange={set("service")} aria-invalid={!!errors.service} className={inputCls(errors.service)}>
          <option value="">Select a service…</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
        </select>
      </Field>
      <Field id="message" label="Tell us about your project" error={errors.message}>
        <textarea id="message" name="message" rows={5} value={v.message} onChange={set("message")} aria-invalid={!!errors.message}
          placeholder="What does your business do, what would you like built, and do you have a deadline or budget in mind?"
          className={cx(inputCls(errors.message), "min-h-[110px] resize-y")} />
      </Field>
      <Btn variant="primary" type="submit" disabled={busy} className="mt-1 w-full disabled:opacity-60">
        {busy ? "Sending…" : "Send message"}
      </Btn>
      <p className="mb-0 mt-3 text-center text-[.78rem] text-muted">
        By sending, you agree to our <Link to="/privacy">Privacy Policy</Link>. We only use your details to respond to your enquiry.
      </p>
      {status.text && (
        <div role="status" className={cx("mt-3.5 rounded-[9px] p-3 text-center text-[.9rem]", status.type === "ok" ? "bg-[#e3f3ea] text-ok" : "bg-[#fbe6e2] text-err")}>
          {status.text}
        </div>
      )}
    </form>
  );
}
