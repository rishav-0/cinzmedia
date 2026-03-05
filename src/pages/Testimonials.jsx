import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
     {
      quote:
        "The digital marketing campaigns crafted by Cinzmedia significantly boosted our online presence and lead generation. Highly recommend their expertise!",
      name: "Sanjay Singh",
      role: "Director of Operations, Global Exports",
      image:
        "https://imgs.search.brave.com/9joXt0bUGPvx7afFCa5ieUra9Z7O1MmxLDZZPMgzSuo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/NDQwODY2OC9waG90/by9zdHVkaW8taGVh/ZHNob3QtcGFraXN0/YW5pLW1hbi1zZXJp/b3VzLXNpZGUtcHJv/ZmlsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9QmF0b1lW/RVpyR2JCZG9neFFv/UVZUaTBFcnVSQ3ZG/bU90WUNMOWRSejlt/bz0",
      stars: 5,
    },
    {
      quote:
        "Sales grew 250% after Cinzmedia redesigned our website and marketing strategy. Their team truly understands what drives conversions!",
      name: "Shruti Kapoor",
      role: "CEO, TechStart Solutions",
      image:
        "https://readdy.ai/api/search-image?query=professional%20businesswoman%20CEO%20smiling%20confidently%2C%20corporate%20headshot%2C%20modern%20office%20background%2C%20professional%20attire%2C%20warm%20lighting%2C%20approachable%20executive%20portrait&width=200&height=200&seq=client-1&orientation=squarish",
      stars: 5,
    },
    {
      quote:
        "The brand identity they created perfectly captured our vision. We've seen a 180% increase in brand recognition since the launch.",
      name: "Vishal Mishra",
      role: "Founder, Green Energy Co",
      image:
        "https://readdy.ai/api/search-image?query=professional%20businessman%20founder%2C%20confident%20smile%2C%20modern%20business%20attire%2C%20clean%20office%20environment%2C%20professional%20headshot%20photography%2C%20approachable%20entrepreneur&width=200&height=200&seq=client-2&orientation=squarish",
      stars: 5,
    },
    {
      quote:
        "Their video marketing campaign generated over 2 million views and brought us 500+ new customers in just 3 months. Incredible ROI!",
      name: "Anjali Verma",
      role: "Marketing Director, FitLife",
      image:
        "https://readdy.ai/api/search-image?query=professional%20marketing%20director%20woman%2C%20confident%20expression%2C%20modern%20business%20environment%2C%20professional%20corporate%20headshot%2C%20stylish%20business%20attire%2C%20warm%20professional%20lighting&width=200&height=200&seq=client-3&orientation=squarish",
      stars: 5,
    },
    {
      quote:
        "Cinzmedia's graphic design work for our product launch was phenomenal. The visuals were stunning and perfectly conveyed our brand message.",
      name: "Priya Sharma",
      role: "Product Manager, Innovate Solutions",
      image:
        "https://imgs.search.brave.com/3N4x3K4CVLx837zzcTqef_u-brJ8Ue-tqWZlZTreS2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/Njg0MTk2MC9waG90/by9wb3J0cmFpdC1p/bmRpYW4td29tYW4t/YW5kLWhhcHB5LWlu/LWhvbWUtYXQtc3R1/ZHktcm9vbS13aXRo/LXByaWRlLWZvci1l/ZHVjYXRpb24ta25v/d2xlZGdlLWFuZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NHZRS3VMUGcyV0dL/SVdSRVN1RDdTaEUx/VlVaV183YUNzdlFS/cEUzM2NFND0",
      stars: 5,
    },
    {
      quote:
        "Our social media engagement skyrocketed after Cinzmedia took over. Their strategies are innovative and deliver real results.",
      name: "Rahul Kumar",
      role: "Social Media Head, Lifestyle Brands",
      image:
        "https://imgs.search.brave.com/fReevHKhw6y0r42M5sixI2E8VW75dk1crHJerO2JT0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbmRp/YW4tbWFuLTEyMDkw/MzQ4LmpwZw",
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

          <Marquee pauseOnHover={true} gradient={false}  speed={100} className="w-full py-4">
            

              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}

            
          </Marquee>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-50 w-[200px] sm:w-[500px] rounded-2xl p-2 sm:p-8 mx-2 sm:mx-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
      {/* Star Rating */}
      {/* <div className="flex items-center mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
        ))}
      </div> */}

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
