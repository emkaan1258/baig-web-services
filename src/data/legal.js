import { site } from "./site.js";

const law = site.jurisdiction
  ? `the laws of ${site.jurisdiction}`
  : "the laws of the jurisdiction in which Baig Web Service LLC is registered";

/**
 * General-purpose policy text written for a web design & development agency.
 * It is a sensible starting point, NOT legal advice — have it reviewed for your jurisdiction.
 * Sections: { h: heading, p: [paragraphs], ul: [bullets] }
 */
export const legal = {
  privacy: {
    title: "Privacy Policy",
    lead: "How Baig Web Service LLC collects, uses and protects your information.",
    sections: [
      { p: [`This Privacy Policy explains how ${site.name} ("we", "us", "our") collects, uses and protects information when you visit our website or contact us about a project.`] },
      { h: "1. Information we collect", p: ["We collect only what we need to respond to you and deliver our services:"],
        ul: ["Contact details you provide, such as your name, email address and phone number.", "Project details you share, such as the service you need, your message, goals, budget or deadlines.", "Basic technical data, such as pages visited and device or browser type, which may be collected through standard analytics tools."] },
      { h: "2. How we use your information", ul: ["To respond to your enquiry and prepare quotes;", "To plan, design, build and support your project;", "To communicate with you about your request or project;", "To improve our website and services."] },
      { h: "3. We do not sell your information", p: ["We do not sell, rent or trade your personal information to third parties."] },
      { h: "4. Service providers", p: ["We may use trusted third-party tools to operate our business — for example an email-delivery service for our contact form, analytics, or hosting providers. They only receive the information needed to perform their function."] },
      { h: "5. Cookies & analytics", p: ["Our website may use cookies or similar technologies for basic functionality and anonymous analytics. You can disable cookies in your browser settings; some features may not work as well if you do."] },
      { h: "6. Data retention", p: ["We keep your information only as long as needed to provide our services, meet legal obligations and resolve disputes. You can ask us to delete your information at any time."] },
      { h: "7. Your choices", p: ["You may request access to, correction of, or deletion of the personal information we hold about you, or ask us to stop contacting you, by getting in touch through our contact page."] },
      { h: "8. Children's privacy", p: ["Our services are intended for businesses and adults. We do not knowingly collect information from anyone under 18."] },
      { h: "9. Changes to this policy", p: ['We may update this policy from time to time. The "last updated" date above shows the latest version.'] },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    lead: "The terms that apply to using our website and our services.",
    sections: [
      { p: [`These Terms & Conditions ("Terms") govern your use of our website and the web design and development services provided by ${site.name} ("we", "us", "our"). By using our website or engaging our services, you agree to these Terms.`] },
      { h: "1. Our services", p: ["We provide web design, web development, UI/UX design, e-commerce, WordPress, React.js and Next.js development, website redesign, maintenance and performance optimisation services, as described in the quote or project agreement for each engagement."] },
      { h: "2. Quotes and project scope", p: ["Each project is scoped and quoted in writing before work begins. Work outside the agreed scope may require a revised quote, which we will discuss with you before proceeding."] },
      { h: "3. Payments", p: ["Fees, deposits and payment schedules are set out in your quote or project agreement. We may pause work on a project if an agreed payment is overdue."] },
      { h: "4. Client responsibilities", p: ["You agree to provide accurate information, and timely feedback, content, images and access that we reasonably need. Delays in providing these may affect the project timeline."] },
      { h: "5. Content and third-party materials", p: ["You confirm that you own, or have permission to use, all content, images, logos and other materials you provide to us. Third-party services, plugins and fonts may be subject to their own licences and fees."] },
      { h: "6. Intellectual property", p: ["Unless agreed otherwise in writing, ownership of the final deliverables transfers to you once full payment has been received. We retain ownership of our pre-existing tools, code libraries and general know-how, and may show completed work in our portfolio unless you ask us not to."] },
      { h: "7. No guarantees of results", p: ["We build websites to a high standard, but we cannot guarantee specific business results such as search rankings, traffic, enquiries or sales, as these depend on many factors outside our control."] },
      { h: "8. Limitation of liability", p: ["To the fullest extent permitted by law, we are not liable for indirect, incidental or consequential damages arising from the use of our website or services. Our total liability is limited to the fees paid for the relevant project."] },
      { h: "9. Governing law", p: [`These Terms are governed by ${law}.`] },
      { h: "10. Changes", p: ["We may update these Terms from time to time. Continued use of our website or services after changes means you accept the updated Terms."] },
    ],
  },
  refund: {
    title: "Refund Policy",
    lead: "How refunds work for our web design and development services.",
    sections: [
      { p: [`We want you to be happy with your project. This policy explains how refunds are handled at ${site.name}. The specific terms for your project are confirmed in your written quote or project agreement.`] },
      { h: "1. Work in progress", p: ["Because web design and development involves time and effort from the start, refunds depend on how much work has been completed when the request is made."] },
      { h: "2. Before work begins", p: ["If you cancel before any work has started, any deposit you've paid will be refunded in line with your project agreement."] },
      { h: "3. After work has started", p: ["If you cancel after work has started, we will invoice for the work completed up to that point and refund any remaining balance of payments already made."] },
      { h: "4. Delivered work", p: ["Once a project has been completed, delivered and approved, fees are generally non-refundable. If something doesn't meet the agreed scope, we will fix it as a priority."] },
      { h: "5. Third-party costs", p: ["Costs paid to third parties on your behalf — such as domains, hosting, premium plugins, themes or licences — are non-refundable by us and are subject to the provider's own policies."] },
      { h: "6. Maintenance and support plans", p: ["Ongoing maintenance or support plans can be cancelled according to the terms of your plan. Fees for periods already started are not refundable unless stated otherwise."] },
      { h: "7. How to request a refund", p: ["Contact us through our contact page with your project details and the reason for your request. We review every request fairly and will reply as soon as we can."] },
    ],
  },
};
