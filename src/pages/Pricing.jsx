import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaEnvelope,
  FaUser,
  FaPhone,
} from "react-icons/fa";
import { useState } from "react";

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    console.log("Quote request submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        <div className="relative container-custom text-center z-10">
          <h1 className="mb-4 animate-fadeInDown">Request a Quote</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto animate-fadeInUp">
            Get a Personalized Quote for Your Home
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              Every home is unique. Contact us today for a custom quote 
              tailored to your specific needs and budget.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/inspection"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <FaMoneyBillWave className="text-primary text-5xl mx-auto mb-3" />
              <h2 className="text-primary mb-4">Request Your Free Quote</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you within 24 hours with a personalized quote
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
                <FaCheckCircle className="text-3xl mx-auto mb-2" />
                <p className="font-semibold">Thank you for your request!</p>
                <p>We'll contact you shortly with your personalized quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                </div>

                <div className="mb-6">
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

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Tell us about your gutter needs..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Request Free Quote
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to be contacted by Top Tier Home Services.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Why Choose Top Tier Home Services?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Experience the difference with professional service and quality workmanship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-white/80 text-sm">Comprehensive lifetime warranty coverage on all gutter guard installations</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl">
                <FaStar />
              </div>
              <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
              <p className="text-white/80 text-sm">Hundreds of satisfied customers across North Carolina</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl">
                <FaClock />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Completion</h3>
              <p className="text-white/80 text-sm">We respect your time and complete projects as scheduled</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl">
                <FaMoneyBillWave />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Estimates</h3>
              <p className="text-white/80 text-sm">No-obligation quotes for all our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our pricing and services?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-2">How do I get an exact price?</h3>
              <p className="text-gray-600">Contact us for a free, no-obligation quote. We'll assess your home and provide a detailed estimate based on your specific needs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-2">Is financing available?</h3>
              <p className="text-gray-600">Yes! We offer flexible financing options to make your gutter protection affordable. Ask about our payment plans.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-2">What's included in the free inspection?</h3>
              <p className="text-gray-600">Our comprehensive inspection includes evaluating your current gutters, measuring your home, and providing a detailed recommendation for your specific needs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-2">How long does installation take?</h3>
              <p className="text-gray-600">Most residential installations are completed in 1 day. We'll provide a timeline during your free inspection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container-custom text-center">
          <FaCalendarCheck className="text-white text-5xl mx-auto mb-4" />
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8">
            Schedule your free inspection today and see why we're the trusted choice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inspection"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Schedule Free Inspection
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;