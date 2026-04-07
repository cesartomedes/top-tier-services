import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaHome,
  FaCalendarCheck,
  FaHardHat,
  FaUsers,
  FaTools,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

const Inspection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inspection request submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    }, 3000);
  };

  // Team photos (placeholders - you can replace with actual images)
  const teamPhotos = [
    {
      id: 1,
      src: "/images/team/team-1.jpg",
      name: "Mike Johnson",
      role: "Lead Installer",
      description: "10+ years experience",
    },
    {
      id: 2,
      src: "/images/team/team-2.jpg",
      name: "Carlos Rodriguez",
      role: "Senior Technician",
      description: "Certified gutter specialist",
    },
    {
      id: 3,
      src: "/images/team/team-3.jpg",
      name: "David Wilson",
      role: "Project Manager",
      description: "Ensuring quality service",
    },
    {
      id: 4,
      src: "/images/team/team-4.jpg",
      name: "Your Team",
      role: "Dedicated Professionals",
      description: "Ready to serve you",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        <div className="relative container-custom text-center z-10">
          <FaCalendarCheck className="text-5xl mx-auto mb-4" />
          <h1 className="mb-4 animate-fadeInDown">Free Inspection</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto animate-fadeInUp">
            Let Our Experts Assess Your Gutter Needs
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              Schedule a free, no-obligation inspection today. Our certified 
              professionals will evaluate your home and provide recommendations 
              tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Team Photos */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Request Free Quote Form */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-primary text-white px-6 py-4">
                <h2 className="text-2xl font-bold">Request Free Quote</h2>
                <p className="text-white/80 text-sm">Fill out the form below and we'll contact you within 24 hours</p>
              </div>
              
              <div className="p-6">
                {formSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
                    <FaCheckCircle className="text-3xl mx-auto mb-2" />
                    <p className="font-semibold">Thank you for your request!</p>
                    <p>We'll contact you shortly to schedule your free inspection.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="(336) 350-9825"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                        Home Address *
                      </label>
                      <div className="relative">
                        <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                          placeholder="123 Main St, City, NC"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferredDate" className="block text-gray-700 font-semibold mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="preferredTime" className="block text-gray-700 font-semibold mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        >
                          <option value="">Select time</option>
                          <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                          <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                          <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                          <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                          <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="Tell us about your gutter concerns..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Schedule Free Inspection
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to be contacted by Top Tier Home Services.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Side - Team Photos */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
                <div className="bg-primary text-white px-6 py-4">
                  <h2 className="text-2xl font-bold">Meet Our Team</h2>
                  <p className="text-white/80 text-sm">Experienced professionals ready to help you</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {teamPhotos.map((member) => (
                      <div
                        key={member.id}
                        className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <div className="aspect-square bg-gray-200 flex items-center justify-center">
                          {member.src ? (
                            <img
                              src={member.src}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/300x300?text=Team+Member";
                              }}
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center text-gray-400">
                              <FaHardHat className="text-4xl mb-2" />
                              <span className="text-xs">{member.name}</span>
                            </div>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-3 text-white">
                            <p className="font-semibold text-sm">{member.name}</p>
                            <p className="text-xs text-white/80">{member.role}</p>
                            <p className="text-xs text-white/60">{member.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaShieldAlt className="text-primary text-xl" />
                    <span className="text-gray-700 text-sm">Lifetime Warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaStar className="text-yellow-500 text-xl" />
                    <span className="text-gray-700 text-sm">5-Star Rated Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-primary text-xl" />
                    <span className="text-gray-700 text-sm">Family-Owned & Operated</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaTools className="text-primary text-xl" />
                    <span className="text-gray-700 text-sm">Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">What to Expect During Your Free Inspection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our thorough inspection process ensures we understand your home's unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Assessment</h3>
              <p className="text-gray-600 text-sm">We evaluate your current gutter system and identify any issues</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Measurements</h3>
              <p className="text-gray-600 text-sm">We measure your home's dimensions for accurate recommendations</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Quote</h3>
              <p className="text-gray-600 text-sm">You receive a detailed estimate with no obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom text-center">
          <p className="text-white text-lg mb-4">
            Have questions? Call us today for immediate assistance
          </p>
          <a
            href="tel:336-350-9825"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Call (336) 350-9825
          </a>
        </div>
      </section>
    </div>
  );
};

export default Inspection;