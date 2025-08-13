import { motion } from "framer-motion";

const ContactSection = () => {


  const handleSubmit = (e) => {
    e.preventDefault(); }

  const inputCls =
    "w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent";

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your brand's next chapter starts here. Let's create something
            amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form (slides in from left) */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, x: -60, scale: 0.99 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form
              id="contact-form"
              className="space-y-6"
              onSubmit={handleSubmit}
         
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className={inputCls}
                  name="firstName"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={inputCls}
                  name="lastName"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={inputCls}
                  name="email"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={inputCls}
                  name="phone"
                />
              </div>

              {/* Styled select with custom arrow (keeps native dropdown) */}
              <div className="relative">
                <select
                  name="service"
                  className={`${inputCls} pr-10 appearance-none`}
                >
                  <option value="">Select Service</option>
                  <option value="web">Website Development</option>
                  <option value="design">Graphic Design</option>
                  <option value="video">Video Editing</option>
                  <option value="brand">Brand Building</option>
                  <option value="social">Social Media Management</option>
                  <option value="marketing">Digital Marketing</option>
                </select>

                {/* custom arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white opacity-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                placeholder="Project Budget"
                className={inputCls}
                name="budget"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="4"
                maxLength="500"
                className={`${inputCls} resize-none`}
              ></textarea>

              <button type="submit" className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Send Project Brief
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info (slides in from right) */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60, scale: 0.99 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-blue-100 mb-8">
                Ready to transform your brand? We're here to help you every step
                of the way. Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-xl text-white"></i>
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-blue-100">hello@cinzmedia.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-phone-line text-xl text-white"></i>
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-blue-100">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-map-pin-line text-xl text-white"></i>
                </div>
                <div>
                  <div className="text-white font-semibold">Office</div>
                  <div className="text-blue-100">
                    123 Creative Street, Design District, NY 10001
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  "facebook-fill",
                  "twitter-fill",
                  "instagram-line",
                  "linkedin-fill",
                  "youtube-fill",
                ].map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer group"
                  >
                    <i
                      className={`ri-${icon} text-lg text-white group-hover:scale-110 transition-transform`}
                    ></i>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div className="bg-white/10 rounded-2xl p-1 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sDesign%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629789493076!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
