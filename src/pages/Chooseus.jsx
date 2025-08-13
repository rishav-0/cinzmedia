import { useEffect, useRef, useState } from "react";

const Chooseus = () => {
  const stats = [
    {
      value: 15,
      suffix: "+",
      title: "Years Experience",
      description: "Industry expertise",
    },
    {
      value: 200,
      suffix: "+",
      title: "Projects Completed",
      description: "Successful deliveries",
    },
    {
      value: 50,
      suffix: "+",
      title: "Awards Won",
      description: "Recognition & excellence",
    },
    {
      value: 300,
      suffix: "%",
      title: "Average ROI",
      description: "Measurable results",
    },
  ];

  const backgroundImage =
    "https://readdy.ai/api/search-image?query=modern%20creative%20agency%20office%20workspace%20with%20team%20collaboration%2C%20award%20certificates%20on%20walls%2C%20successful%20project%20displays%2C%20professional%20workspace%20environment%2C%20subtle%20blue%20and%20purple%20lighting&width=1920&height=1080&seq=why-choose-bg-1&orientation=landscape";

  return (
    <section className="relative py-10  md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn delay-200">
            Proven expertise and results that speak for themselves
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Count-up hook
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = end / (duration / 16);

          const step = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          step();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

const StatCard = ({ stat, index }) => {
  const [count, ref] = useCountUp(stat.value);

  return (
    <div
      ref={ref}
      className={`text-center group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2
      animate-fadeUp opacity-0`}
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:text-purple-400 transition-colors">
          {count}
          {stat.suffix}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
        <p className="text-gray-300">{stat.description}</p>
      </div>
    </div>
  );
};

export default Chooseus;

