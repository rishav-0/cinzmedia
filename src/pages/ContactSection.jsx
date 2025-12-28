import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../components/button";

const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const action = form.action;
    const formData = new FormData(form);

    try {
      const res = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        alert(
          "Thanks — we received your message. We will contact you shortly."
        );
        form.reset();
      } else {
        // try to parse JSON error response from Formspree
        try {
          const data = await res.json();
          if (data && data.errors) {
            alert(
              data.errors.map((err) => err.message).join("\n") ||
                "Submission failed."
            );
          } else {
            alert("Submission failed. Please try again later.");
          }
        } catch (err) {
          alert("Submission failed. Please try again later.");
        }
      }
    } catch (err) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent";

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-linear-to-br from-blue-600 to-purple-700"
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
              action="https://formspree.io/f/mkgpapvn"
              method="POST"
            >
              <div className="">
                <input
                  type="text"
                  placeholder="Name"
                  className={inputCls}
                  name="name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={inputCls}
                  name="phone"
                />
                <input
                  type="text"
                  placeholder="Project Budget"
                  className={inputCls}
                  name="budget"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className={inputCls}
                name="email"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="4"
                maxLength="500"
                className={`${inputCls} resize-none`}
              ></textarea>
              <div className="flex justify-center">
                <Button
                  text="Send Project Brief"
                  type="submit"
                  className="bg-[#e72615] rounded-lg!"
                />
              </div>
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
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-blue-100">
                    <a
                      href="mailto:cinzmedia@outlook.com"
                      className="hover:text-white transition-colors"
                    >
                      cinzmedia@outlook.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-blue-100 flex gap-4 flex-wrap">
                    <a
                      href="tel:+919365046638"
                      className="hover:text-white transition-colors"
                    >
                      +91 93650 46638
                    </a>
                    <a
                      href="tel:+918474044296"
                      className="hover:text-white transition-colors"
                    >
                      +91 84740 44296
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Office</div>
                  <div className="text-blue-100">
                    <a
                      href="https://maps.app.goo.gl/Xfzz6DwLMKKrB5Uh9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Arunodaya Path, Hegrabari, Kamrup Metro, Assam
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div className="bg-white/10 rounded-2xl p-1 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d434.9354083505507!2d91.79728053482229!3d26.14979984111857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757787861492!5m2!1sen!2sin"
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
