import transparant from '../images/logo/transparant.png'


const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/cinzmedia",
    icon: "ri-facebook-fill",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/cinzmedia",
    icon: "ri-twitter-x-line",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/cinzmedia",
    icon: "ri-instagram-line",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/cinzmedia",
    icon: "ri-linkedin-fill",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@cinzmedia",
    icon: "ri-youtube-fill",
  },
];

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  console.log("Quick Links:", quickLinks);

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <img className='h-18 mb-4' src={transparant} alt="" />
            <p className="text-gray-300 mb-6 max-w-md">
              Your creative powerhouse for digital transformation. We build
              brands that turn heads and campaigns that convert.
            </p>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
              
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                    onClick={() => console.log(`Link clicked: ${link.name}`)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Website Development",
                "Graphic Design",
                "Video Editing",
                "Brand Building",
                "Social Media",
                "Digital Marketing",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Cinzmedia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
