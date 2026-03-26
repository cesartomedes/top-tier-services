import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "(336) 350-9825",
      link: "tel:3363509825",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "Contact@TTHservices.com",
      link: "mailto:Contact@TTHservices.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      info: "340 Trolling Wood Rd, Haw River, NC",
      link: "#",
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      info: "Mon-Fri: 8AM - 5PM | Sat: By Appointment",
      link: "#",
    },
  ];

  const serviceAreas = [
    "Burlington",
    "Hillsborough",
    "Chapel Hill",
    "Greensboro",
    "Raleigh",
    "Durham",
    "Cary",
    "Apex",
    "High Point",
    "Siler City",
    "Mebane",
    "Haw River",
    "Pittsboro",
    "Winston Salem",
    "Kernersville",
    "Asheboro",
  ];

  // Logos de garantías (imágenes proporcionadas por la cliente)
  const guaranteeLogos = [
    {
      id: 1,
      src: "/images/logos/money.WEBP",
      name: "Money Back Guarantee",
      description: "100% satisfaction or your money back",
    },
    {
      id: 2,
      src: "/images/logos/sasti.WEBP",
      name: "Satisfaction Guarantee",
      description: "We ensure you're happy with our work",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        <div className="relative container-custom text-center z-10">
          <h1 className="mb-4 animate-fadeInDown">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto animate-fadeInUp">
            We look forward to hearing from you
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              Have questions about our services? Ready to schedule your free
              inspection? Reach out to us today and our team will get back to
              you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-primary text-white px-6 py-4">
                <h2 className="text-2xl font-bold">Send us a Message</h2>
                <p className="text-white/80 text-sm">
                  We'll respond within 24 hours
                </p>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
                    <FaCheckCircle className="text-3xl mx-auto mb-2" />
                    <p className="font-semibold">
                      Thank you for contacting us!
                    </p>
                    <p>We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="(336) 350-9825"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="Tell us about your gutter needs..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & Guarantees */}
            <div>
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-primary text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        {info.link && info.link !== "#" ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-primary transition-colors"
                          >
                            {info.info}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.info}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees & Badges - Updated with images */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Our Guarantees
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {guaranteeLogos.map((logo) => (
                    <div
                      key={logo.id}
                      className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-center mb-3">
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="h-16 w-auto object-contain"
                          onError={(e) => {
                            console.log(`Logo not found: ${logo.src}`);
                            e.target.style.display = "none";
                            // Show fallback text if image fails to load
                            const parent = e.target.parentElement;
                            if (parent) {
                              parent.innerHTML += `
                                <div class="text-center">
                                  <div class="text-primary text-3xl mb-2">✓</div>
                                  <p class="font-semibold text-gray-800 text-sm">${logo.name}</p>
                                  <p class="text-xs text-gray-500">${logo.description}</p>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {logo.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {logo.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <FaCheckCircle className="text-green-500 text-xs" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-primary rounded-2xl shadow-xl p-6 text-white text-center">
                <FaShieldAlt className="text-4xl mx-auto mb-2" />
                <p className="font-semibold">Licensed & Insured</p>
                <p className="text-xs text-white/80 mt-1">
                  40-Year Warranty on all installations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789012!2d-79.123456789012!3d36.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzI2LjAiTiA3OcKwMDcnMjYuMCJX!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom text-center">
          <p className="text-white text-lg mb-4">
            Ready to protect your home? Schedule your free inspection today!
          </p>
          <a
            href="/inspection"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Schedule Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
