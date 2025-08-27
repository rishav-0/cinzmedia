import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import ScrollReveal from "scrollreveal";

const Projects = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
       // 👈 appear/disappear when scrolling
      viewFactor: 0.2,
      cleanup: true,
    });

    // Section header
    sr.reveal("#portfolio-title", {
      origin: "top",
      delay: 100,
    });

    sr.reveal("#portfolio-description", {
      origin: "top",
      delay: 200,
    });

    // Portfolio items
    const portfolioCards = document.querySelectorAll(".portfolio-card");
    portfolioCards.forEach((card, index) => {
      sr.reveal(card, {
        delay: 300 + index * 100,
        interval: 100,
      });
    });

    // Featured case study
    sr.reveal("#featured-case-study", {
      delay: 300 + portfolioCards.length * 100,
    });

    return () => {
      sr.destroy();
    };
  }, []);

  // Filter buttons data
  const filters = [
    { name: "All Projects", active: true },
    { name: "Websites", active: false },
    { name: "Branding", active: false },
    { name: "Video", active: false },
    { name: "Marketing", active: false },
  ];

  // Portfolio items data
  const portfolioItems = [
    {
      title: "TechFlow E-commerce Platform",
      category: "Website Development",
      description: "Complete e-commerce solution with 40% conversion increase",
      image:
        "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20on%20laptop%20and%20mobile%20devices%2C%20clean%20product%20catalog%2C%20shopping%20cart%20functionality%2C%20professional%20online%20store%20design%2C%20blue%20and%20white%20color%20scheme&width=400&height=300&seq=portfolio-techflow-1&orientation=landscape",
    },
    {
      title: "GreenLife Brand Identity",
      category: "Branding",
      description: "Sustainable brand identity increasing recognition by 180%",
      image:
        "https://readdy.ai/api/search-image?query=eco-friendly%20brand%20identity%20package%2C%20green%20logo%20designs%2C%20sustainable%20packaging%20mockups%2C%20natural%20color%20palette%2C%20environmental%20branding%20materials%2C%20organic%20business%20identity&width=400&height=300&seq=portfolio-greenlife-1&orientation=landscape",
    },
    {
      title: "FitZone Marketing Campaign",
      category: "Digital Marketing",
      description:
        "Social media campaign generating 2M+ views and 500+ customers",
      image:
        "https://readdy.ai/api/search-image?query=fitness%20marketing%20campaign%20mockups%2C%20social%20media%20posts%20for%20gym%2C%20workout%20videos%2C%20fitness%20app%20promotions%2C%20energetic%20marketing%20materials%2C%20health%20and%20wellness%20branding&width=400&height=300&seq=portfolio-fitzone-1&orientation=landscape",
    },
    {
      title: "Innovation Summit 2024",
      category: "Video Production",
      description: "Corporate event video series with 95% engagement rate",
      image:
        "https://readdy.ai/api/search-image?query=professional%20conference%20video%20production%2C%20event%20videography%20setup%2C%20corporate%20summit%20footage%2C%20professional%20speakers%20on%20stage%2C%20high-quality%20video%20production%20equipment&width=400&height=300&seq=portfolio-summit-1&orientation=landscape",
    },
    {
      title: "RestaurantHub App",
      category: "Mobile App",
      description: "Food delivery app design increasing orders by 220%",
      image:
        "https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%2C%20restaurant%20app%20design%20on%20smartphones%2C%20menu%20browsing%2C%20order%20tracking%2C%20modern%20app%20UI%20design%2C%20food%20photography%20integration&width=400&height=300&seq=portfolio-restaurant-1&orientation=landscape",
    },
    {
      title: "ArtSpace Gallery Rebrand",
      category: "Branding",
      description: "Gallery rebrand attracting 60% more visitors",
      image:
        "https://readdy.ai/api/search-image?query=art%20gallery%20branding%20materials%2C%20elegant%20logo%20design%2C%20exhibition%20posters%2C%20cultural%20institution%20identity%2C%20sophisticated%20art%20gallery%20branding%2C%20minimalist%20design%20aesthetic&width=400&height=300&seq=portfolio-artspace-1&orientation=landscape",
    },
  ];

  // Featured case study data
  const featuredCaseStudy = {
    title: "TechStart Solutions: 250% Sales Growth",
    description:
      "When TechStart approached us, they were struggling with low conversion rates and poor brand recognition. Our comprehensive approach transformed their entire digital presence.",
    stats: [
      { value: "250%", label: "Sales Increase", color: "blue-600" },
      { value: "180%", label: "Traffic Growth", color: "purple-600" },
      { value: "40%", label: "Conversion Rate", color: "pink-600" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=business%20growth%20success%20story%2C%20professional%20team%20celebrating%2C%20upward%20trending%20charts%20and%20graphs%2C%20successful%20business%20transformation%2C%20modern%20office%20celebration%2C%20achievement%20and%20success%20visualization&width=600&height=400&seq=case-study-success-1&orientation=landscape",
  };

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Bing_Fluent_Logo_Text.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Canva_Logo.svg/557px-Canva_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJYtPvckdMXR_0meTlA2hVx-L93tSyTT7t4W6Y1W3nSNv_WUb9KnKfdt5QYEkDzyY9cY&usqp=CAU",
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h1
            id="portfolio-title"
            className=" text-3xl md:text-5xl font-bold  text-gray-900 mb-4"
          >
            Our Portfolio: Proven Results & Success Stories
          </h1>
          <h2
            id="portfolio-description"
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover how we've helped businesses achieve measurable growth
            through innovative web development, strategic digital marketing, and
            award-winning design solutions. View real case studies with
            documented results and client testimonials.
          </h2>
        </header>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </div>

        <h1
          id="portfolio-title"
          className="text-center mb-10 text-3xl md:text-5xl font-bold  text-gray-900 "
        >
          Our Trusted Partners
        </h1>
        <Marquee pauseOnHover={true} autoFill={true}>
          {partners.map((logo, index) => (
            <img
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-12 mx-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              key={index}
            />
          ))}
        </Marquee>

        {/* Featured Case Study */}
        {/* <div id="featured-case-study" className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-lg">
                Featured Case Study
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                {featuredCaseStudy.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {featuredCaseStudy.description}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-6">
                {featuredCaseStudy.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold text-${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
                Read Full Case Study
              </button>
            </div>

            <div className="relative">
              <img
                src={featuredCaseStudy.image}
                alt="Success Story"
                className="rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

// Portfolio Item Component
const PortfolioItem = ({ item, index }) => {
  return (
    <div
      className="portfolio-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {item.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
          View Case Study →
        </button>
      </div>
    </div>
  );
};

export default Projects;
