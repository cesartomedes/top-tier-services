import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaGoogle,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaCheckCircle,
  FaQuoteLeft,
  FaEnvelope,
  FaUser,
  FaPhone,
} from "react-icons/fa";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Google Reviews Data
  const googleReviews = [
    {
      name: "Jennifer Martinez",
      location: "Raleigh, NC",
      rating: 5,
      text: "Absolutely outstanding service! The team was professional, punctual, and the installation looks fantastic. My gutters have never worked better. Highly recommend Top Tier Services!",
      date: "2 weeks ago",
    },
    {
      name: "David Thompson",
      location: "Durham, NC",
      rating: 5,
      text: "Best investment I've made for my home. No more climbing ladders to clean gutters. The 40-year warranty gives me peace of mind. The spring sale coupon saved us money too!",
      date: "1 month ago",
    },
    {
      name: "Lisa Richardson",
      location: "Chapel Hill, NC",
      rating: 5,
      text: "From the free inspection to the final installation, everything was seamless. The crew was courteous and cleaned up perfectly. They even explained how the gutter guards work!",
      date: "3 weeks ago",
    },
    {
      name: "Michael Brooks",
      location: "Greensboro, NC",
      rating: 5,
      text: "Excellent workmanship and customer service. The team arrived on time, worked efficiently, and the quality of the gutter guards is top-notch. Thank you!",
      date: "1 week ago",
    },
    {
      name: "Sarah Williams",
      location: "Cary, NC",
      rating: 5,
      text: "I'm so glad I found Top Tier Services. They made the whole process easy and stress-free. The spring sale coupon was a great bonus. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "Robert Johnson",
      location: "Apex, NC",
      rating: 5,
      text: "Professional from start to finish. The free inspection was thorough, and the installation was quick and clean. My gutters look great and work perfectly.",
      date: "3 days ago",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
          <div className="flex justify-center mb-4">
            <FaGoogle className="text-6xl" />
          </div>
          <h1 className="mb-4 animate-fadeInDown">Customer Reviews</h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto animate-fadeInUp">
            Rated 4.9 out of 5 Stars
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-3xl" />
            ))}
          </div>
          <p className="text-white/90">Based on 150+ Google Reviews</p>
        </div>
      </section>

      {/* Spring Sale Coupon Section */}
      <section className="py-12 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container-custom text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <FaMoneyBillWave className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">🌷 Spring Sale! 🌷</h2>
            <p className="text-xl text-gray-600 mb-2">Save 20% on All Gutter Guard Installations</p>
            <p className="text-gray-500 mb-4">Limited time offer - Call today!</p>
            <div className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg">
              Use Code: SPRING20
            </div>
            <p className="text-xs text-gray-400 mt-4">*Valid for new customers only. Cannot combine with other offers.</p>
          </div>
        </div>
      </section>

      {/* Google Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaGoogle className="text-primary text-5xl mx-auto mb-3" />
            <h2 className="text-primary mb-4">Google Reviews</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What our customers are saying about Top Tier Services
            </p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.9</span>
              <span className="text-gray-600">(150+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                  <FaGoogle className="text-primary text-2xl" />
                </div>
                <FaQuoteLeft className="text-primary/20 text-2xl mb-2" />
                <p className="text-gray-700 mb-3 italic leading-relaxed">"{review.text}"</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://g.page/r/your-google-business/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              <FaGoogle />
              Write a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* Schedule Free Inspection Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <FaCalendarCheck className="text-primary text-5xl mx-auto mb-3" />
              <h2 className="text-primary mb-4">Schedule Your Free Inspection</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you within 24 hours to schedule your free, no-obligation inspection
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
                <FaCheckCircle className="text-3xl mx-auto mb-2" />
                <p className="font-semibold">Thank you for your request!</p>
                <p>We'll contact you shortly to schedule your free inspection.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
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
                      placeholder="(919) 555-0123"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message (Optional)
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
                    Schedule Free Inspection
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to be contacted by Top Tier Services.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <p className="text-gray-600 mb-4">
            Ready to experience the Top Tier difference?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reviews;