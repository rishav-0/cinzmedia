import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import ScrollReveal from "scrollreveal";
import { usePortfolio } from "../context/PortfolioContext";

const Projects = () => {
  const { getAllPortfolio } = usePortfolio();

  // Get portfolio data from context
  const allPortfolioData = getAllPortfolio();
  const portfolioItems = Object.values(allPortfolioData).flat().slice(0, 6);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      // appear/disappear when scrolling
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
    "https://imgs.search.brave.com/nHvGCSvjuqY0H71UZRpOQSnHNWbWgIxwmi6EDgZzp7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZHlubWVkaWEtMS5t/aWNyb3NvZnQuY29t/L2lzL2ltYWdlL21p/Y3Jvc29mdGNvcnAv/bWNhcHMtY2xhc3Nw/bHVzP3NjbD0x",
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
              className="h-12 mx-10"
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
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {item.category}
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm text-gray-500 mb-2 font-medium">{item.company}</p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4">{item.description}</p>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.results && (
          <p className="text-sm font-semibold text-green-600 ">
            {item.results}
          </p>
        )}

        
      </div>
    </div>
  );
};

export default Projects;
