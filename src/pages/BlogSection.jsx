import { motion } from "framer-motion";
import { CoolMode } from "../components/CoolMode";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

const BlogSection = () => {
  // Featured article data
  const featuredArticle = {
    title: "2024 Digital Marketing Trends That Will Transform Your Business",
    category: "Digital Marketing",
    excerpt:
      "Discover the emerging trends that are reshaping digital marketing landscape. From AI-powered personalization to interactive content strategies, learn how to stay ahead of the competition.",
    author: {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image:
        "https://readdy.ai/api/search-image?query=professional%20marketing%20expert%20author%2C%20confident%20business%20professional%20headshot%2C%20modern%20office%20background%2C%20approachable%20marketing%20specialist%2C%20professional%20portrait&width=150&height=150&seq=author-sarah-1&orientation=squarish",
    },
    date: "Dec 15, 2024",
    image:
      "https://readdy.ai/api/search-image?query=digital%20marketing%20trends%202024%2C%20modern%20marketing%20analytics%20dashboard%2C%20social%20media%20strategy%20planning%2C%20marketing%20professional%20analyzing%20data%20on%20multiple%20screens%2C%20future%20of%20digital%20marketing&width=600&height=400&seq=blog-featured-1&orientation=landscape",
  };

  const blogPosts = [
    {
      title: "The Psychology of Color in Web Design",
      category: "Web Design",
      excerpt: "How color choices impact user behavior and conversion rates",
      author: "Alex Rivera",
      date: "Dec 12, 2024",
      readTime: "5 min read",
      image:
        "https://readdy.ai/api/search-image?query=color%20psychology%20in%20web%20design%2C%20colorful%20design%20palettes%2C%20website%20color%20schemes%2C%20UI%20color%20theory%2C%20design%20psychology%20concepts%2C%20vibrant%20web%20interfaces&width=400&height=250&seq=blog-color-1&orientation=landscape",
    },
    {
      title: "Building Brand Identity in the Digital Age",
      category: "Branding",
      excerpt: "Essential strategies for creating memorable brand experiences",
      author: "Maya Chen",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      image:
        "https://readdy.ai/api/search-image?query=digital%20brand%20identity%20design%20process%2C%20logo%20creation%2C%20brand%20guidelines%2C%20digital%20branding%20materials%2C%20modern%20brand%20development%20workspace%2C%20creative%20branding%20process&width=400&height=250&seq=blog-branding-1&orientation=landscape",
    },
    {
      title: "Video Content That Converts: Best Practices",
      category: "Video Marketing",
      excerpt: "Creating engaging video content that drives real results",
      author: "Jordan Taylor",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      image:
        "https://readdy.ai/api/search-image?query=video%20marketing%20production%2C%20professional%20video%20equipment%2C%20content%20creation%20studio%2C%20video%20editing%20workspace%2C%20marketing%20video%20production%2C%20cinematic%20video%20creation&width=400&height=250&seq=blog-video-1&orientation=landscape",
    },
    {
      title: "SEO Strategies for 2024: What Really Works",
      category: "SEO",
      excerpt: "Latest SEO techniques that deliver measurable results",
      author: "Emma Wilson",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      image:
        "https://readdy.ai/api/search-image?query=SEO%20analytics%20dashboard%2C%20search%20engine%20optimization%20data%2C%20keyword%20research%20tools%2C%20SEO%20performance%20metrics%2C%20digital%20marketing%20analytics%2C%20search%20ranking%20improvements&width=400&height=250&seq=blog-seo-1&orientation=landscape",
    },
    {
      title: "Social Media ROI: Measuring What Matters",
      category: "Social Media",
      excerpt: "Track the metrics that actually impact your bottom line",
      author: "Michael Chen",
      date: "Dec 3, 2024",
      readTime: "5 min read",
      image:
        "https://readdy.ai/api/search-image?query=social%20media%20analytics%20dashboard%2C%20ROI%20metrics%2C%20social%20media%20performance%20data%2C%20engagement%20statistics%2C%20social%20media%20marketing%20measurement%2C%20digital%20analytics&width=400&height=250&seq=blog-social-1&orientation=landscape",
    },
    {
      title: "User Experience Trends Shaping 2024",
      category: "UX Design",
      excerpt:
        "Design principles that enhance user satisfaction and engagement",
      author: "Lisa Park",
      date: "Dec 1, 2024",
      readTime: "6 min read",
      image:
        "https://readdy.ai/api/search-image?query=UX%20design%20process%2C%20user%20experience%20wireframes%2C%20interface%20design%20mockups%2C%20user%20journey%20mapping%2C%20modern%20UX%20design%20workspace%2C%20design%20thinking%20process&width=400&height=250&seq=blog-ux-1&orientation=landscape",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay ahead with the latest trends, tips, and insights from our
            creative experts
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          className="bg-white rounded-3xl overflow-hidden shadow-xl mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUpVariant}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <img
                src={featuredArticle.image}
                alt="Featured Article"
                className="w-full h-64 lg:h-full object-cover object-top"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <span className="text-blue-600 font-semibold">
                {featuredArticle.category}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-4">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-1">{featuredArticle.excerpt}</p>
              <div className="flex items-center mb-6">
                <img
                  src={featuredArticle.author.image}
                  alt={featuredArticle.author.name}
                  className="w-10 h-10 rounded-full object-cover object-top mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {featuredArticle.author.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {featuredArticle.author.role}
                  </div>
                </div>
                <div className="ml-auto text-sm text-gray-500">
                  {featuredArticle.date}
                </div>
              </div>
              <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
                Read Full Article →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1 * index}
              variants={fadeUpVariant}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUpVariant}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto line-clamp-1">
            Get the latest insights, tips, and trends delivered straight to your
            inbox. Join our community of creative professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border outline-0 text-white border-white "
            />
            <CoolMode>

            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
            </CoolMode>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Blog Post Card Component
const BlogPostCard = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover object-top"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <span className="font-medium">{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogSection;
