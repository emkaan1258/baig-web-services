/**
 * The reference site has 8 service pages. They are mapped here to Baig Web Service LLC's offering.
 * Every item in the requested service list is covered by at least one page:
 *  Custom Website Design, Website Development, Responsive Website Development → website-development
 *  React.js + Next.js Development                                              → react-nextjs-development
 *  WordPress Development                                                       → wordpress-development
 *  E-commerce Website Development                                              → ecommerce-development
 *  UI/UX Design                                                                → ui-ux-design
 *  Landing Page Design                                                         → landing-page-design
 *  Website Redesign                                                            → website-redesign
 *  Website Maintenance & Support + Performance Optimization                    → maintenance-performance
 */
export const services = [
  {
    slug: "website-development",
    title: "Custom Website Design & Development",
    nav: "Website Development",
    icon: "🖥️",
    illustration: "website",
    short:
      "Custom-designed, fully responsive business websites built from scratch — clear structure, fast loading and easy to grow.",
    headline: "Custom websites built around your business",
    lead:
      "No recycled templates. We design and develop responsive business websites that explain what you do, build trust quickly and turn visitors into enquiries.",
    intro: [
      "Your website is usually the first thing a potential customer sees. We start from your goals — more enquiries, more bookings, a stronger brand — and design every page, layout and call to action to support them.",
      "Every site is built mobile-first, so it works properly on phones, tablets, laptops and large desktop screens, with clean code and sensible on-page SEO foundations from day one.",
    ],
    steps: [
      { t: "Plan & wireframe", p: "We map your pages, content and user journey before a line of code is written." },
      { t: "Design & build", p: "A custom visual design is turned into clean, responsive, accessible code." },
      { t: "Test & launch", p: "Cross-browser and device testing, then a careful launch and handover." },
    ],
    included: [
      "Custom page designs for desktop, tablet and mobile",
      "Responsive layout tested across common screen sizes",
      "Contact and enquiry forms with validation",
      "On-page SEO basics: titles, descriptions, headings, sitemap",
      "Performance-minded build: optimised images and lean code",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    faqs: [
      { q: "Do I need to provide the content?", a: "You can supply text and images, or we can help shape the copy with you. We'll agree who is responsible for what during scoping so there are no surprises." },
      { q: "Will my website work on mobile?", a: "Yes. Every website we build is responsive and tested on mobile, tablet and desktop screen sizes before launch." },
    ],
  },
  {
    slug: "react-nextjs-development",
    title: "React.js & Next.js Development",
    nav: "React & Next.js",
    icon: "⚛️",
    illustration: "react",
    short:
      "Fast, modern single-page apps and server-rendered websites built with React.js and Next.js for speed, SEO and scale.",
    headline: "Modern React.js & Next.js websites and web apps",
    lead:
      "When you need more than a brochure site — interactive interfaces, dashboards, or SEO-friendly pages that load fast — we build with React.js and Next.js.",
    intro: [
      "React gives us reusable components and a smooth, app-like experience. Next.js adds server-side rendering, static generation and routing, which helps pages load quickly and be understood by search engines.",
      "We structure projects cleanly with reusable components and clear folder organisation, so your codebase stays maintainable as your product grows.",
    ],
    steps: [
      { t: "Architecture", p: "We plan routes, components, data flow and rendering strategy (SSR, SSG or client-side)." },
      { t: "Component build", p: "Reusable, tested components that keep design consistent and development fast." },
      { t: "Optimise & deploy", p: "Code-splitting, image optimisation and deployment to a modern hosting platform." },
    ],
    included: [
      "React.js single-page applications and Next.js websites",
      "Reusable component libraries with Tailwind CSS",
      "API and CMS integration (REST / headless)",
      "SEO-friendly routing, metadata and rendering",
      "Deployment setup on platforms such as Vercel or Netlify",
    ],
    stack: ["React.js", "Next.js", "Vite", "Tailwind CSS", "REST APIs", "Headless CMS"],
    faqs: [
      { q: "When should I choose Next.js over a plain React app?", a: "Choose Next.js when search visibility and first-load speed matter — marketing sites, blogs, stores. A plain React app suits logged-in tools and dashboards." },
      { q: "Can you add features to an existing React project?", a: "Yes. We can review your current codebase and extend, refactor or fix it rather than starting over, where that makes sense." },
    ],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    nav: "WordPress Development",
    icon: "📝",
    illustration: "wordpress",
    short:
      "Custom WordPress websites with flexible design, solid performance and an editing experience your team can actually use.",
    headline: "Custom WordPress websites you can manage yourself",
    lead:
      "We build lightweight, custom WordPress sites that look like your brand, load quickly and let you update content without calling a developer.",
    intro: [
      "WordPress remains one of the most practical choices for content-driven websites. The difference between a good and a bad WordPress site is how it's built — we avoid bloated themes and plugin pile-ups.",
      "You get a clean, structured editing experience, sensible security practices and a site designed to stay fast as you add content.",
    ],
    steps: [
      { t: "Wireframing", p: "Planning the page structure and editing experience before development starts." },
      { t: "Development", p: "Custom theme and templates built with clean, semantic code." },
      { t: "QA testing", p: "Cross-browser, mobile and editor-experience testing before launch." },
    ],
    included: [
      "Custom theme development (no bloated pre-built themes)",
      "Easy-to-edit page layouts and reusable content blocks",
      "Essential plugin setup, chosen carefully",
      "Security hardening and backup recommendations",
      "Speed optimisation: caching, image handling, lean assets",
    ],
    stack: ["WordPress", "PHP", "Custom Themes", "Gutenberg Blocks", "WooCommerce"],
    faqs: [
      { q: "Will I be able to edit the website myself?", a: "Yes. We set up pages so that text, images and key sections can be edited from the WordPress dashboard, and we can walk you through it at handover." },
      { q: "Can you work with my existing WordPress site?", a: "Yes — we can fix, speed up, redesign or extend an existing WordPress website." },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Website Development",
    nav: "E-commerce Solutions",
    icon: "🛒",
    illustration: "ecommerce",
    short:
      "Online stores with smooth browsing, clear product pages and a checkout built to reduce drop-off and support growth.",
    headline: "Online stores designed to convert",
    lead:
      "We build e-commerce websites with clear navigation, strong product pages and a checkout flow that makes buying easy — on any device.",
    intro: [
      "A good store makes it effortless to find a product, trust the page and complete the purchase. We focus on those moments: search, filtering, product detail pages, cart and checkout.",
      "Depending on your needs we build on WooCommerce or Shopify-style platforms, or create a custom React/Next.js storefront with a headless commerce backend.",
    ],
    steps: [
      { t: "Store planning", p: "Catalogue structure, categories, shipping and payment requirements." },
      { t: "Design & build", p: "Product, cart and checkout pages designed for clarity and speed." },
      { t: "Test & launch", p: "Order-flow testing, payment-gateway setup and a guided launch." },
    ],
    included: [
      "Product catalogue, categories, search and filtering",
      "Mobile-first product, cart and checkout pages",
      "Payment gateway and shipping integration",
      "Order and inventory management setup",
      "Performance and SEO foundations for product pages",
    ],
    stack: ["WooCommerce", "Shopify", "Next.js", "Stripe", "Headless Commerce"],
    faqs: [
      { q: "Which payment methods can my store accept?", a: "That depends on your country and chosen gateway. We'll confirm available options during scoping and integrate the ones that suit your business." },
      { q: "Can I manage products and orders myself?", a: "Yes. Every store we build includes an admin area for products, stock and orders, and we show you how to use it." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    nav: "UI/UX Design",
    icon: "🎨",
    illustration: "uiux",
    short:
      "Intuitive interfaces and user journeys — thoughtful layouts, clear navigation and user-focused design for sites and apps.",
    headline: "Interfaces people understand at a glance",
    lead:
      "Good design isn't decoration — it's how easily a visitor finds what they need. We design websites and web apps around real user journeys.",
    intro: [
      "We begin with who your users are and what they're trying to do, then work through wireframes, visual design and interactive prototypes so you can see and approve the experience before development starts.",
      "The result is a design system — colours, typography, components — that keeps your brand consistent and makes future pages quicker and cheaper to build.",
    ],
    steps: [
      { t: "Research & flows", p: "Understanding users, goals and the pages and paths that matter most." },
      { t: "Wireframes & UI", p: "Low-fidelity layouts first, then polished visual design for every key screen." },
      { t: "Prototype & handoff", p: "Clickable prototypes and developer-ready design assets." },
    ],
    included: [
      "User flows and sitemap",
      "Wireframes for desktop, tablet and mobile",
      "High-fidelity UI design and visual style direction",
      "Reusable component and design-system guidelines",
      "Clickable prototype for review before build",
    ],
    stack: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    faqs: [
      { q: "Can you design only, without building the website?", a: "Yes. We can deliver the design on its own and hand it to your developers, or carry it through to a finished build ourselves." },
      { q: "What do I receive at the end?", a: "Design files for every agreed screen, a style guide, and a prototype for stakeholders to review." },
    ],
  },
  {
    slug: "landing-page-design",
    title: "Landing Page Design",
    nav: "Landing Page Design",
    icon: "🎯",
    illustration: "landing",
    short:
      "Focused, fast landing pages for campaigns, launches and lead generation — one clear message and one clear action.",
    headline: "Landing pages with one clear job: get the enquiry",
    lead:
      "A landing page works best when it says one thing and asks for one action. We design and build pages for ads, launches and lead generation that stay focused on that goal.",
    intro: [
      "We structure each page around a single offer: a clear headline, proof and benefits, answers to common objections and a simple form or button. Nothing distracts from the action you want.",
      "Pages are lightweight so they load quickly on mobile connections — which matters when visitors arrive from ads and social posts.",
    ],
    steps: [
      { t: "Message & offer", p: "Defining the single promise, audience and action for the page." },
      { t: "Design & build", p: "A focused layout with persuasive structure and a clear call to action." },
      { t: "Track & refine", p: "Form and analytics setup so you can see what's working." },
    ],
    included: [
      "One custom landing page, fully responsive",
      "Conversion-focused layout and copy structure",
      "Lead form with validation and email delivery",
      "Analytics and event-tracking setup",
      "Fast-loading, lightweight build",
    ],
    stack: ["React.js", "Tailwind CSS", "Forms", "Analytics", "A/B-ready"],
    faqs: [
      { q: "How is a landing page different from a normal website?", a: "A landing page is a single focused page built around one goal, usually for a campaign. A website has several pages that cover your whole business." },
      { q: "Can you connect the form to my email or CRM?", a: "We can send enquiries to your email and, where your tools support it, connect to popular CRM and automation services." },
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    nav: "Website Redesign",
    icon: "🔄",
    illustration: "redesign",
    short:
      "Modernise an outdated site — better design, faster performance and a structure that finally supports your goals.",
    headline: "Give your existing website a fresh start",
    lead:
      "If your website looks dated, loads slowly or doesn't work well on phones, a redesign can fix it — without losing the search visibility you've already built.",
    intro: [
      "We audit your current site first: what's working, what isn't, and what must be preserved. Then we redesign the layout, content structure and visuals to better support your goals.",
      "We plan the move carefully — redirects, content migration and testing — to protect your existing search rankings and avoid downtime.",
    ],
    steps: [
      { t: "Audit", p: "Reviewing design, structure, speed and SEO of your current website." },
      { t: "Redesign & rebuild", p: "A modern, responsive design and clean rebuild of key pages." },
      { t: "Migrate safely", p: "Content migration, redirects and testing for a smooth switch-over." },
    ],
    included: [
      "Website audit: design, usability, speed and SEO",
      "New responsive design aligned with your brand",
      "Content and page-structure improvements",
      "301 redirect planning to protect search visibility",
      "Careful migration and post-launch checks",
    ],
    stack: ["Site Audit", "Responsive Design", "Migration", "301 Redirects", "SEO"],
    faqs: [
      { q: "Will I lose my Google rankings if I redesign?", a: "A redesign carries some risk if it's done carelessly. We plan redirects and preserve important content and URLs to minimise any impact." },
      { q: "Can you keep my current platform?", a: "Often yes. We can redesign on your existing platform or recommend a move if the platform is the thing holding you back." },
    ],
  },
  {
    slug: "maintenance-performance",
    title: "Website Maintenance, Support & Performance Optimization",
    nav: "Maintenance & Performance",
    icon: "🛠️",
    illustration: "performance",
    short:
      "Keep your website secure, updated and fast — ongoing support plus performance tuning so it keeps working for you.",
    headline: "Keep your website fast, secure and up to date",
    lead:
      "Websites need ongoing care. We handle updates, fixes, backups and speed improvements so you can focus on running your business.",
    intro: [
      "Outdated software, slow pages and unnoticed bugs quietly cost you visitors and trust. Regular maintenance prevents most problems before they happen.",
      "Where speed is the issue, we audit and optimise: image handling, code, caching and third-party scripts — aiming for a site that feels quick on real mobile connections.",
    ],
    steps: [
      { t: "Review", p: "We check your site's health, speed, security and any known issues." },
      { t: "Fix & optimise", p: "Updates, bug fixes and performance improvements, prioritised by impact." },
      { t: "Monitor & support", p: "Ongoing support so changes and problems are handled quickly." },
    ],
    included: [
      "Software, plugin and dependency updates",
      "Backups and security checks",
      "Bug fixes and small content or design changes",
      "Speed audit and performance optimisation",
      "Support for questions and change requests",
    ],
    stack: ["Core Web Vitals", "Caching", "Image Optimisation", "Backups", "Security"],
    faqs: [
      { q: "Do you maintain websites that you didn't build?", a: "Usually yes. We'll review the site first to confirm we can support it properly, then agree the scope." },
      { q: "Can you make my slow website faster?", a: "In most cases, yes. A speed audit shows what's slowing the site down, and we fix the items that make the biggest difference first." },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
