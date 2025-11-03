
export const BrandPortfolio = [
  {
    id: "brand-visual-identity",
    title: "Visual Identity & Brand Guidelines",
    description:
      "Complete brand identity including logo, color system, typography and brand guidelines to ensure consistent cross-channel presentation and faster onboarding for partners.",
    highlights: [
      "Logo suite (primary, secondary, icons)",
      "Color palette & accessible contrast checks",
      "Typography scale and usage rules",
      "Printable & digital-ready assets (SVG, PNG, EPS)",
    ],
    tags: ["branding", "logo", "brand-guidelines", "visual-identity"],
    image: "/src/images/services/brand.png",
    url: "/projects/brand-visual-identity",
  },
  {
    id: "brand-revamp",
    title: "Brand Revamp & Market Repositioning",
    description:
      "Strategic brand refresh to target new audiences and increase perceived value, including messaging, visual updates, and rollout plan to improve conversion and referrals.",
    highlights: [
      "Market research",
      "Audience personas",
      "Messaging framework",
      "Rollout & asset migration",
    ],
    tags: ["brand-refresh", "positioning", "messaging"],
    image: "/src/images/services/brand.png",
    url: "/projects/brand-revamp",
  },
];

export const DigitalMarketingPortfolio = [
  {
    id: "seo-growth-campaign",
    title: "SEO Growth & Organic Traffic",
    description:
      "On-page and technical SEO improvements plus content strategy to increase organic traffic, rankings and qualified leads over 3–6 months.",
    highlights: [
      "Technical audit & fixes",
      "Keyword-driven content plan",
      "On-page optimization",
      "Link acquisition guidance",
    ],
    tags: ["seo", "organic-traffic", "content-strategy"],
    image: "/src/images/services/digitalmarketing.png",
    url: "/projects/seo-growth-campaign",
  },
  {
    id: "ppc-conversion",
    title: "PPC & Conversion Optimization",
    description:
      "Targeted paid campaigns (Google, Meta) with conversion rate optimization to lower CAC and improve ROAS through landing page testing and tracking.",
    highlights: [
      "Audience targeting",
      "Ad creative & copy",
      "Landing page A/B tests",
      "ROAS tracking",
    ],
    tags: ["ppc", "paid-media", "conversion-rate-optimization"],
    image: "/src/images/services/digitalmarketing.png",
    url: "/projects/ppc-conversion",
  },
];

export const GraphicPortfolio = [
  {
    id: "brand-collateral",
    title: "Brand Collateral & Marketing Assets",
    description:
      "High-impact graphic assets for digital and print: brochures, social templates, banners and sales collateral designed to improve engagement and consistency.",
    highlights: [
      "Print-ready layouts",
      "Editable source files",
      "Social-ready templates",
      "Fast turnaround",
    ],
    tags: ["graphic-design", "collateral", "print", "social-assets"],
    image: "/src/images/Graphic/graphic.jpg",
    url: "/projects/brand-collateral",
  },
  {
    id: "packaging-design",
    title: "Packaging & Label Design",
    description:
      "Product packaging design that communicates brand value, complies with printing specs, and improves shelf presence to increase purchase intent.",
    highlights: [
      "Structural mockups",
      "Print spec & dielines",
      "Retail-ready visuals",
    ],
    tags: ["packaging", "labels", "product-design"],
    image: "/src/images/Graphic/graphic.jpg",
    url: "/projects/packaging-design",
  },
];

export const SocialMediaPortfolio = [
  {
    id: "social-content-strategy",
    title: "Social Media Strategy & Content Calendar",
    description:
      "Strategic content calendars and post templates to grow followers, increase engagement and drive traffic with measurable KPIs and platform-specific best practices.",
    highlights: [
      "Platform strategy",
      "Monthly content calendar",
      "Performance benchmarks",
      "Creative templates",
    ],
    tags: ["social-media", "content-calendar", "engagement"],
    image: "/src/images/services/socialmedia.png",
    url: "/projects/social-content-strategy",
  },
  {
    id: "social-ad-campaigns",
    title: "Paid Social Campaigns",
    description:
      "Paid social campaigns designed to reach precise audiences, drive conversions and complement organic activity with measurable ROAS reporting.",
    highlights: [
      "Creative & copy",
      "Audience segmentation",
      "Conversion tracking",
      "Weekly reporting",
    ],
    tags: ["paid-social", "meta-ads", "tiktok-ads"],
    image: "/src/images/services/socialmedia.png",
    url: "/projects/social-ad-campaigns",
  },
];

export const VideoPortfolio = [
  {
    id: "promo-videos",
    title: "Promotional & Brand Videos",
    description:
      "Short brand and product videos optimized for web and social to increase awareness and conversions — includes storyboarding, filming and editing.",
    highlights: [
      "Full production pipeline",
      "Social-cut versions",
      "Captioning & formats",
    ],
    tags: ["video-production", "promo-videos", "editing"],
    image: "/src/images/services/video.png",
    url: "/projects/promo-videos",
  },
  {
    id: "video-training-series",
    title: "Explainer & Training Videos",
    description:
      "Clear, on-brand explainer videos and training modules that reduce support load and improve product adoption.",
    highlights: [
      "Script & storyboard",
      "Animated graphics",
      "Accessible captions",
    ],
    tags: ["explainer", "training", "e-learning"],
    image: "/src/images/services/video.png",
    url: "/projects/video-training-series",
  },
];

export const WebDevPortfolio = [
  {
    id: "saas-landing",
    title: "SaaS Landing & Conversion Funnels",
    description:
      "High-converting SaaS landing pages with performance-first development, analytics and A/B testing to maximize signups and trial conversions.",
    highlights: [
      "Performance optimizations",
      "Analytics & tracking",
      "Conversion-focused UI/UX",
      "Deployment automation",
    ],
    tags: ["web-development", "saas", "landing-page"],
    image: "/src/images/services/webdev.png",
    url: "/projects/saas-landing",
  },
  {
    id: "ecommerce-build",
    title: "E‑commerce Stores & Checkout Optimization",
    description:
      "Full e‑commerce builds with secure checkout, optimized product pages and payment integrations to increase average order value and reduce cart abandonment.",
    highlights: [
      "Payment integrations",
      "Performance & SEO",
      "Product page CRO",
    ],
    tags: ["ecommerce", "shopify", "checkout-optimization"],
    image: "/src/images/services/webdev.png",
    url: "/projects/ecommerce-build",
  },
];

// Grouped export for convenient imports
const Portfolio = {
  Brand: BrandPortfolio,
  DigitalMarketing: DigitalMarketingPortfolio,
  Graphic: GraphicPortfolio,
  SocialMedia: SocialMediaPortfolio,
  Video: VideoPortfolio,
  WebDev: WebDevPortfolio,
};

export default Portfolio;
