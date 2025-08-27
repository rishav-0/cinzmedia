import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "../components/3dCard";
import { image, video } from "framer-motion/client";
import { Link } from "react-router";
import graphic from '../images/services/graphic.png'
import webdev from '../images/services/webdev.png';
import brand from '../images/services/brand.png';
import socialmedia from '../images/services/socialmedia.png'; 
import digitalmarketing from '../images/services/digitalmarketing.png';
import videoe from '../images/services/video.png';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Blazing-fast, SEO-optimized websites that rank higher and convert visitors into customers.",
      icon: "ri-code-s-slash-line",
      image: webdev,
      // image:        "https://i.pinimg.com/1200x/bf/d8/9e/bfd89ebf40141163f30ffefcdde45aeb.jpg",
      link: "webdev",
    },
    {
      title: "Graphic Design",
      description:
        "Creative visuals and brand assets designed to captivate and communicate.",
      icon: "ri-palette-line",
      image: graphic,
      link: "graphic",
    },
    {
      title: "Video Editing",
      description:
        "High-impact videos crafted to engage audiences and drive action.",
      icon: "ri-film-line",
      link: "videoediting",
      image: videoe,
      // video:
      // "https://video-previews.elements.envatousercontent.com/8470c3f0-6ad1-4e05-a809-8ea8680612f4/watermarked_preview/watermarked_preview.mp4",
      // image:
      //   "https://readdy.ai/api/search-image?query=professional%20video%20editing%20setup&width=400&height=300",
    },
    {
      title: "Brand Building",
      description:
        "Develop a strong, memorable identity that resonates with your customers.",
      icon: "ri-trophy-line",
      link: "brandbuilding",
      image: brand,
      // image:       "https://images.unsplash.com/photo-1504384308090-c
      // image:       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Social Media Management",
      description:
        "Grow and nurture your audience with strategic, data-driven campaigns.",
      icon: "ri-share-line",
      link: "socialmediamarketing",
      image: socialmedia,
      // image:        "https://images.unsplash.com/photo-1726066012685-f5ccd26b6f55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Digital Marketing",
      description:
        "Performance-focused campaigns delivering measurable ROI every time.",
      icon: "ri-rocket-line",
      link: "digitalmarketing",
      image: digitalmarketing,
      // image:        "https://media.istockphoto.com/id/625727674/photo/marketing-strategy-business-concept.jpg?s=2048x2048&w=is&k=20&c=pSCaaFy2p8IWhd2dwmtPVH8LMyT_vcprIQmcOTAX_kc=",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
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
            Full-stack digital solutions crafted to grow your brand and boost
            revenue.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className=""
            >
              <Link to={`./${service.link}`} className="group/card">
                <CardContainer className="">
                  <CardBody className="bg-white shadow-xl relative rounded-2xl p-6 hover:shadow-2xl w-full h-full">
                    <CardItem translateZ="60" className="mb-4 h-48 overflow-hidden flex items-center justify-center rounded-2xl">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={`${service.title} service - professional example`}
                          className=" w-full object-contain rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
                        />
                      ) : (
                        <video
                          src={service.video}
                          width="236"
                          frameborder="0"
                          scrolling="no"
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
                        />
                      )}
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      as="h3"
                      className="text-xl font-semibold text-gray-900"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <i
                          className={`${service.icon} text-2xl text-blue-600`}
                        ></i>

                        {service.title}
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      as="p"
                      className="text-gray-600 mb-4 text-sm leading-relaxed"
                    >
                      {service.description}
                    </CardItem>
                    <CardItem
                      translateZ="30"
                      as="a"
                      href={service.link}
                      className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:scale-105 transition-transform"
                    >
                      Explore →
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
