import React, { createContext, useContext } from "react";

// Create the context
const PortfolioContext = createContext();

// Portfolio data organized by category
const portfolioData = {
  "web-dev": [
    {
      id: 1,
      title: "TechFlow E-commerce Platform",
      company: "TechFlow Inc.",
      category: "Web Development",
      categoryId: "web-dev",
      tags: ["React", "Node.js", "E-commerce", "Responsive Design"],
      description: "Complete e-commerce solution with 40% conversion increase",
      image:
        "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20on%20laptop%20and%20mobile%20devices%2C%20clean%20product%20catalog%2C%20shopping%20cart%20functionality%2C%20professional%20online%20store%20design%2C%20blue%20and%20white%20color%20scheme&width=400&height=300&seq=portfolio-techflow-1&orientation=landscape",
      results: "40% conversion increase, 250% sales growth",
    },
    {
      id: 2,
      title: "RestaurantHub App",
      company: "RestaurantHub Solutions",
      category: "Web Development",
      categoryId: "web-dev",
      tags: ["React", "Mobile App", "UI/UX", "Database Integration"],
      description: "Food delivery app design increasing orders by 220%",
      image:
        "https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%2C%20restaurant%20app%20design%20on%20smartphones%2C%20menu%20browsing%2C%20order%20tracking%2C%20modern%20app%20UI%20design%2C%20food%20photography%20integration&width=400&height=300&seq=portfolio-restaurant-1&orientation=landscape",
      results: "220% increase in orders, 95% user satisfaction",
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      company: "Enterprise Corp",
      category: "Web Development",
      categoryId: "web-dev",
      tags: ["Next.js", "SEO", "CMS Integration", "Performance"],
      description: "Enterprise website redesign improving SEO rankings by 180%",
      image:
        "https://readdy.ai/api/search-image?query=modern%20corporate%20website%20design%2C%20professional%20business%20website%2C%20clean%20layout%2C%20responsive%20web%20design%2C%20company%20homepage&width=400&height=300&seq=portfolio-corporate-1&orientation=landscape",
      results: "180% traffic growth, top 3 rankings for key terms",
    },
  ],
  "social-media": [
    {
      id: 4,
      title: "FitZone Marketing Campaign",
      company: "FitZone Gym",
      category: "Social Media Marketing",
      categoryId: "social-media",
      tags: ["Instagram", "TikTok", "Content Creation", "Community Building"],
      description:
        "Social media campaign generating 2M+ views and 500+ customers",
      image:
        "https://readdy.ai/api/search-image?query=fitness%20marketing%20campaign%20mockups%2C%20social%20media%20posts%20for%20gym%2C%20workout%20videos%2C%20fitness%20app%20promotions%2C%20energetic%20marketing%20materials%2C%20health%20and%20wellness%20branding&width=400&height=300&seq=portfolio-fitzone-1&orientation=landscape",
      results: "2M+ views, 500+ new customers, 85% engagement rate",
    },
    {
      id: 5,
      title: "Fashion Brand Social Growth",
      company: "StyleLine Fashion",
      category: "Social Media Marketing",
      categoryId: "social-media",
      tags: ["Instagram", "Pinterest", "Influencer Marketing", "UGC"],
      description: "Organic social media strategy increasing followers by 350%",
      image:
        "https://readdy.ai/api/search-image?query=fashion%20brand%20instagram%20feed%20aesthetic%2C%20clothing%20photography%2C%20social%20media%20posts%2C%20beautiful%20fashion%20content%2C%20stylish%20brand%20identity&width=400&height=300&seq=portfolio-fashion-1&orientation=landscape",
      results: "350% follower growth, 150K monthly impressions",
    },
    {
      id: 6,
      title: "Startup Community Building",
      company: "InnovateCo Startup",
      category: "Social Media Marketing",
      categoryId: "social-media",
      tags: ["LinkedIn", "Twitter", "Community", "Thought Leadership"],
      description:
        "Community-driven content strategy building engaged audience",
      image:
        "https://readdy.ai/api/search-image?query=startup%20community%20building%2C%20social%20media%20engagement%2C%20business%20networking%2C%20professional%20content%2C%20innovative%20company%20culture&width=400&height=300&seq=portfolio-startup-1&orientation=landscape",
      results: "50K engaged followers, 12K+ monthly interactions",
    },
  ],
  "digital-marketing": [
    {
      id: 7,
      title: "E-commerce Performance Marketing",
      company: "ShopMax Retail",
      category: "Digital Marketing",
      categoryId: "digital-marketing",
      tags: ["Google Ads", "Facebook Ads", "Conversion Rate", "ROI"],
      description: "Paid advertising strategy delivering 5:1 ROAS consistently",
      image:
        "https://readdy.ai/api/search-image?query=digital%20marketing%20analytics%20dashboard%2C%20performance%20charts%2C%20conversion%20metrics%2C%20google%20ads%20interface%2C%20marketing%20statistics&width=400&height=300&seq=portfolio-shopmax-1&orientation=landscape",
      results: "5:1 ROAS, 300% revenue growth, 45% CPA reduction",
    },
    {
      id: 8,
      title: "SaaS Product Launch Campaign",
      company: "CloudScale Tech",
      category: "Digital Marketing",
      categoryId: "digital-marketing",
      tags: ["Email Marketing", "Content Marketing", "Lead Generation", "B2B"],
      description: "Full-funnel campaign generating 500+ qualified leads",
      image:
        "https://readdy.ai/api/search-image?query=saas%20product%20launch%20marketing%2C%20software%20interface%2C%20technology%20product%2C%20digital%20marketing%20campaign%2C%20modern%20tech%20interface&width=400&height=300&seq=portfolio-cloudscale-1&orientation=landscape",
      results: "500+ qualified leads, 28% conversion rate, 15K MRR",
    },
    {
      id: 9,
      title: "Local Business SEO & PPC",
      company: "Local Service Pro",
      category: "Digital Marketing",
      categoryId: "digital-marketing",
      tags: ["Local SEO", "Google My Business", "PPC", "Lead Generation"],
      description: "Local search optimization increasing foot traffic by 160%",
      image:
        "https://readdy.ai/api/search-image?query=local%20business%20marketing%2C%20map%20location%20pins%2C%20local%20seo%2C%20business%20directory%2C%20local%20search%20results&width=400&height=300&seq=portfolio-local-1&orientation=landscape",
      results:
        "160% foot traffic increase, 40 leads/month, Top 3 local rankings",
    },
  ],
  "video-editing": [
    {
      id: 10,
      title: "Innovation Summit 2024 Event Video",
      company: "Tech Events International",
      category: "Video Editing",
      categoryId: "video-editing",
      tags: ["Event Coverage", "4K Editing", "Motion Graphics", "Documentary"],
      description: "Corporate event video series with 95% engagement rate",
      image:
        "https://readdy.ai/api/search-image?query=professional%20conference%20video%20production%2C%20event%20videography%20setup%2C%20corporate%20summit%20footage%2C%20professional%20speakers%20on%20stage%2C%20high-quality%20video%20production%20equipment&width=400&height=300&seq=portfolio-summit-1&orientation=landscape",
      results: "95% engagement rate, 500K+ views, 2000+ shares",
    },
    {
      id: 11,
      title: "Product Demo & Explainer Videos",
      company: "SoftwareLabs Inc.",
      category: "Video Editing",
      categoryId: "video-editing",
      tags: ["Explainer Video", "Screen Recording", "Animation", "B2B"],
      description: "Series of explainer videos boosting product understanding",
      image:
        "https://readdy.ai/api/search-image?query=product%20demo%20video%20production%2C%20software%20tutorial%2C%20screen%20recording%20editing%2C%20explainer%20animation%2C%20technical%20video%20content&width=400&height=300&seq=portfolio-softwarelabs-1&orientation=landscape",
      results: "35% higher product adoption, 1.2M+ total views",
    },
    {
      id: 12,
      title: "Social Media Reels & Short Form",
      company: "BrandVibes Creative",
      category: "Video Editing",
      categoryId: "video-editing",
      tags: ["TikTok", "Instagram Reels", "Short Form", "Trending Content"],
      description: "Viral short-form content strategy across platforms",
      image:
        "https://readdy.ai/api/search-image?query=instagram%20tiktok%20reels%20short%20form%20video%2C%20trending%20social%20media%20content%2C%20creative%20video%20editing%2C%20viral%20short%20videos%2C%20youth%20marketing&width=400&height=300&seq=portfolio-brandvibes-1&orientation=landscape",
      results: "10M+ combined views, 500K+ followers growth, trending status",
    },
  ],
  "brand-building": [
    {
      id: 13,
      title: "GreenLife Brand Identity",
      company: "GreenLife Co.",
      category: "Brand Building",
      categoryId: "brand-building",
      tags: [
        "Logo Design",
        "Brand Guidelines",
        "Sustainability",
        "Eco-Friendly",
      ],
      description: "Sustainable brand identity increasing recognition by 180%",
      image:
        "https://readdy.ai/api/search-image?query=eco-friendly%20brand%20identity%20package%2C%20green%20logo%20designs%2C%20sustainable%20packaging%20mockups%2C%20natural%20color%20palette%2C%20environmental%20branding%20materials%2C%20organic%20business%20identity&width=400&height=300&seq=portfolio-greenlife-1&orientation=landscape",
      results: "180% brand recognition increase, Award-winning design",
    },
    {
      id: 14,
      title: "ArtSpace Gallery Rebrand",
      company: "ArtSpace Gallery",
      category: "Brand Building",
      categoryId: "brand-building",
      tags: ["Rebrand", "Logo Redesign", "Visual Identity", "Cultural"],
      description: "Gallery rebrand attracting 60% more visitors",
      image:
        "https://readdy.ai/api/search-image?query=art%20gallery%20branding%20materials%2C%20elegant%20logo%20design%2C%20exhibition%20posters%2C%20cultural%20institution%20identity%2C%20sophisticated%20art%20gallery%20branding%2C%20minimalist%20design%20aesthetic&width=400&height=300&seq=portfolio-artspace-1&orientation=landscape",
      results: "60% visitor increase, Premium brand positioning",
    },
    {
      id: 15,
      title: "Tech Startup Brand Launch",
      company: "QuantumLeap Technologies",
      category: "Brand Building",
      categoryId: "brand-building",
      tags: ["New Brand", "Logo Design", "Style Guide", "Tech Industry"],
      description: "Complete brand identity for innovative tech startup",
      image:
        "https://readdy.ai/api/search-image?query=tech%20startup%20branding%2C%20modern%20logo%20design%2C%20technology%20brand%20identity%2C%20innovative%20company%20branding%2C%20startup%20visual%20identity%2C%20futuristic%20design&width=400&height=300&seq=portfolio-quantum-1&orientation=landscape",
      results: "Strong market entry, Investment-ready brand",
    },
  ],
  graphic: [
    {
      id: 16,
      title: "Premium Packaging Design Suite",
      company: "LuxeProducts Ltd.",
      category: "Graphic Design",
      categoryId: "graphic",
      tags: ["Packaging", "3D Design", "Product Design", "Luxury"],
      description: "Complete packaging design system for product line",
      image:
        "https://readdy.ai/api/search-image?query=premium%20packaging%20design%2C%20luxury%20product%20packaging%2C%20box%20design%20mockup%2C%20branded%20packaging%2C%20unboxing%20experience%2C%20high-end%20packaging&width=400&height=300&seq=portfolio-luxe-1&orientation=landscape",
      results: "Premium shelf presence, 45% sales increase",
    },
    {
      id: 17,
      title: "Magazine & Editorial Design",
      company: "Contemporary Design Magazine",
      category: "Graphic Design",
      categoryId: "graphic",
      tags: ["Editorial", "Layout Design", "Typography", "Print"],
      description: "Full magazine design system and layout templates",
      image:
        "https://readdy.ai/api/search-image?query=magazine%20design%20layout%2C%20editorial%20design%2C%20print%20magazine%2C%20professional%20typography%2C%20beautiful%20page%20layout%2C%20publication%20design&width=400&height=300&seq=portfolio-magazine-1&orientation=landscape",
      results: "Award-winning layout, 200% readership increase",
    },
    {
      id: 18,
      title: "Marketing Collateral Design",
      company: "Corporate Solutions Inc.",
      category: "Graphic Design",
      categoryId: "graphic",
      tags: ["Brochures", "Flyers", "Banners", "Print Design"],
      description: "Complete marketing collateral system for campaigns",
      image:
        "https://readdy.ai/api/search-image?query=marketing%20collateral%20design%2C%20brochure%20mockup%2C%20flyer%20design%2C%20printed%20materials%2C%20corporate%20collateral%2C%20professional%20print%20design&width=400&height=300&seq=portfolio-collateral-1&orientation=landscape",
      results: "Cohesive brand presence, 120% lead generation increase",
    },
  ],
};

// Create provider component
export const PortfolioProvider = ({ children }) => {
  // Function to get all portfolio data
  const getAllPortfolio = () => portfolioData;

  // Function to get portfolio by category
  const getPortfolioByCategory = (categoryId) => {
    return portfolioData[categoryId] || [];
  };

  // Function to get single portfolio item by ID
  const getPortfolioById = (id) => {
    for (const category in portfolioData) {
      const item = portfolioData[category].find((p) => p.id === id);
      if (item) return item;
    }
    return null;
  };

  // Function to get all categories with their data
  const getCategoriesWithData = () => {
    return Object.keys(portfolioData).map((categoryId) => ({
      id: categoryId,
      projects: portfolioData[categoryId],
      count: portfolioData[categoryId].length,
    }));
  };

  const value = {
    portfolioData,
    getAllPortfolio,
    getPortfolioByCategory,
    getPortfolioById,
    getCategoriesWithData,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook to use portfolio context
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return context;
};
