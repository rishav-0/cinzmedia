import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive websites built with cutting-edge technology",
      icon: "ri-code-s-slash-line",
      image:
        "https://readdy.ai/api/search-image?query=modern%20website%20development%20coding%20on%20multiple%20screens%2C%20clean%20responsive%20web%20design%20interface%2C%20professional%20developer%20workspace%20with%20code%20editor%20and%20browser%20previews%2C%20blue%20and%20purple%20accent%20colors&width=400&height=300&seq=service-web-1&orientation=landscape",
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand message",
      icon: "ri-palette-line",
      image:
        "https://readdy.ai/api/search-image?query=graphic%20design%20studio%20with%20creative%20artwork%2C%20digital%20illustrations%2C%20logo%20designs%2C%20brand%20identity%20materials%2C%20colorful%20design%20elements%2C%20professional%20creative%20workspace&width=400&height=300&seq=service-design-1&orientation=landscape",
    },
    {
      title: "Video Editing",
      description: "Compelling video content that engages and converts",
      icon: "ri-film-line",
      image:
        "https://readdy.ai/api/search-image?query=professional%20video%20editing%20setup%2C%20video%20editing%20timeline%20interface%2C%20cinematic%20shots%2C%20professional%20video%20equipment%2C%20modern%20video%20production%20workspace&width=400&height=300&seq=service-video-1&orientation=landscape",
    },
    {
      title: "Brand Building",
      description: "Complete brand identity from strategy to execution",
      icon: "ri-trophy-line",
      image:
        "https://readdy.ai/api/search-image?query=brand%20building%20strategy%20session%20with%20logo%20concepts%2C%20brand%20guidelines%2C%20color%20palettes%2C%20typography%20samples%2C%20brand%20identity%20materials%20spread%20on%20desk%2C%20professional%20branding%20workspace&width=400&height=300&seq=service-brand-1&orientation=landscape",
    },
    {
      title: "Social Media Management",
      description: "Strategic social presence that builds communities",
      icon: "ri-share-line",
      image:
        "https://readdy.ai/api/search-image?query=social%20media%20management%20dashboard%20with%20multiple%20platform%20analytics%2C%20content%20calendar%2C%20engagement%20metrics%2C%20smartphone%20with%20social%20apps%2C%20modern%20social%20media%20workspace&width=400&height=300&seq=service-social-1&orientation=landscape",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable ROI",
      icon: "ri-rocket-line",
      image:
        "https://readdy.ai/api/search-image?query=digital%20marketing%20analytics%20dashboard%20with%20charts%2C%20graphs%2C%20conversion%20metrics%2C%20PPC%20campaigns%2C%20SEO%20data%2C%20modern%20marketing%20workspace%20with%20multiple%20screens%20showing%20performance%20data&width=400&height=300&seq=service-marketing-1&orientation=landscape",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Comprehensive digital solutions to elevate your brand and drive
            results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * services.length }}
            viewport={{ once: true }}
          >
            Explore All Services
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl mb-6">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
          <i className={`${service.icon} text-2xl text-blue-600`}></i>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
        Explore →
      </button>
    </motion.div>
  );
};

export default Services;
