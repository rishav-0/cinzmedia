const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Sales grew 250% after Cinzmedia redesigned our website and marketing strategy. Their team truly understands what drives conversions!",
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      image:
        "https://readdy.ai/api/search-image?query=professional%20businesswoman%20CEO%20smiling%20confidently%2C%20corporate%20headshot%2C%20modern%20office%20background%2C%20professional%20attire%2C%20warm%20lighting%2C%20approachable%20executive%20portrait&width=200&height=200&seq=client-1&orientation=squarish",
      stars: 5,
    },
    {
      quote:
        "The brand identity they created perfectly captured our vision. We've seen a 180% increase in brand recognition since the launch.",
      name: "Michael Chen",
      role: "Founder, Green Energy Co",
      image:
        "https://readdy.ai/api/search-image?query=professional%20businessman%20founder%2C%20confident%20smile%2C%20modern%20business%20attire%2C%20clean%20office%20environment%2C%20professional%20headshot%20photography%2C%20approachable%20entrepreneur&width=200&height=200&seq=client-2&orientation=squarish",
      stars: 5,
    },
    {
      quote:
        "Their video marketing campaign generated over 2 million views and brought us 500+ new customers in just 3 months. Incredible ROI!",
      name: "Emily Rodriguez",
      role: "Marketing Director, FitLife",
      image:
        "https://readdy.ai/api/search-image?query=professional%20marketing%20director%20woman%2C%20confident%20expression%2C%20modern%20business%20environment%2C%20professional%20corporate%20headshot%2C%20stylish%20business%20attire%2C%20warm%20professional%20lighting&width=200&height=200&seq=client-3&orientation=squarish",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real clients who trusted us with their vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
        ))}
      </div>

      {/* Testimonial Quote */}
      <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

      {/* Client Info */}
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover object-top mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
