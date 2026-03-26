import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const partners = [
    {
      name: "Angie's List",
      logo: "/images/footer/angies.png",
      url: "#",
      alt: "Angie's List - Trusted Service Provider",
    },
    {
      name: "Alamance Builder Association",
      logo: "/images/footer/caswell.webp",
      url: "#",
      alt: "Alamance Builder Association - Caswell County",
    },
    {
      name: "GAF",
      logo: "/images/footer/gaf.svg",
      url: "#",
      alt: "GAF - Master Elite Contractor",
    },
    {
      name: "Flow Master",
      logo: "/images/logos/flow-master.png",
      url: "#",
      alt: "Flow Master Gutter Protection",
    },
    {
      name: "Leap Laster",
      logo: "/images/footer/leap.WEBP",
      url: "#",
      alt: "Leap Laster Products",
    },
    {
      name: "Gutter Guard",
      logo: "/images/logos/gutter-guard.png",
      url: "#",
      alt: "Premium Gutter Guard Systems",
    },
  ];

  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container-custom">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Top Tier Services</h3>
            <p className="text-gray-300 mb-4">
              Professional gutter guard installation services with quality and
              excellence.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary text-sm flex-shrink-0" />
                <a
                  href="tel:336-350-9825"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  (336) 350-9825
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary text-sm flex-shrink-0" />
                <a
                  href="mailto:Contact@TTHservices.com"
                  className="text-gray-300 hover:text-primary transition-colors text-sm break-all"
                >
                  Contact@TTHservices.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary text-sm flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  340 Trolling Wood Rd, Haw River, NC
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <FaClock className="text-primary text-sm mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm space-y-1">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>
                    Saturday: 8:00 AM - 5:00 PM{" "}
                    <span className="text-primary text-xs">
                      (By Appointment)
                    </span>
                  </p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/share/1746For1yC/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="bg-primary/10 rounded-lg p-3 text-center">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-primary">
                  Licensed & Insured
                </span>
                <br />
                Fully bonded for your peace of mind
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-700 pt-8 mb-6">
          <h3 className="text-lg font-semibold text-center mb-6 text-primary">
            Our Partners & Associations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-center"
              >
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 w-full flex items-center justify-center min-h-[100px]">
                  <img
                    src={partner.logo}
                    alt={partner.alt || partner.name}
                    className="max-h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.log(`Logo not found: ${partner.logo}`);
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML += `
                        <div class="text-center">
                          <div class="text-primary text-2xl mb-1">★</div>
                          <p class="text-xs text-gray-400">${partner.name}</p>
                        </div>
                      `;
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p className="text-sm">
            &copy; {currentYear} Top Tier Services. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Professional Gutter Guard Installation | Serving Haw River and
            surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;