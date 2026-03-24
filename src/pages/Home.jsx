import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaThumbsUp,
  FaTrophy,
  FaHome,
  FaHandshake,
  FaLeaf,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaAward,
  FaTools,
} from "react-icons/fa";
import { getImageUrl } from "../config";

const Home = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-4xl text-primary" />,
      title: "Quality Guaranteed",
      description: "Top-tier materials and professional installation",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Lifetime Warranty",
      description: "Peace of mind with our comprehensive warranty",
    },
    {
      icon: <FaClock className="text-4xl text-primary" />,
      title: "Fast Installation",
      description: "Quick and efficient service with minimal disruption",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-primary" />,
      title: "Satisfaction Guaranteed",
      description: "We ensure 100% customer satisfaction",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "We assess your home and provide a detailed estimate",
      icon: <FaHandshake className="text-3xl" />,
    },
    {
      step: "02",
      title: "Custom Selection",
      description: "Choose the best gutter guard system for your needs",
      icon: <FaHome className="text-3xl" />,
    },
    {
      step: "03",
      title: "Professional Installation",
      description: "Our experts install with precision and care",
      icon: <FaTools className="text-3xl" />,
    },
    {
      step: "04",
      title: "Final Inspection",
      description: "We ensure everything meets our high standards",
      icon: <FaCheckCircle className="text-3xl" />,
    },
  ];

  const testimonials = [
    {
      name: "John D. - Raleigh, NC",
      text: "Absolutely outstanding service! The team was professional, punctual, and the installation looks fantastic. My gutters have never worked better.",
      rating: 5,
      image: "https://via.placeholder.com/80x80",
    },
    {
      name: "Sarah M. - Cary, NC",
      text: "Best investment I've made for my home. No more climbing ladders to clean gutters. The lifetime warranty gives me peace of mind.",
      rating: 5,
      image: "https://via.placeholder.com/80x80",
    },
    {
      name: "Michael R. - Durham, NC",
      text: "From quote to installation, everything was seamless. The crew was courteous and cleaned up perfectly. Highly recommend!",
      rating: 5,
      image: "https://via.placeholder.com/80x80",
    },
  ];

  const benefits = [
    {
      icon: <FaLeaf className="text-3xl text-primary" />,
      title: "Eco-Friendly Solutions",
      description: "Sustainable materials that protect both your home and the environment",
    },
    {
      icon: <FaTrophy className="text-3xl text-primary" />,
      title: "Industry Leaders",
      description: "Over 10 years of experience with thousands of satisfied customers",
    },
    {
      icon: <FaAward className="text-3xl text-primary" />,
      title: "Premium Materials",
      description: "Only the highest quality aluminum and stainless steel guards",
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getImageUrl('images/hero.jpg')})`,
          }}
        >
          {/* Blue Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/70"></div>
        </div>

        {/* Content */}
        <div className="relative container-custom text-center z-10">
          <h1 className="mb-6 animate-fadeInDown text-white">
            Top Tier Gutter Guards
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fadeInUp">
            Protect your home with the best gutter guard installation services
            in town
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section - Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple, transparent process ensures a hassle-free experience from start to finish
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 text-4xl font-bold text-primary/10">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-full">
                    <FaArrowRight className="text-primary/30 text-2xl absolute right-0 transform translate-x-1/2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Enhanced Image */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary mb-4">Why Homeowners Trust Us</h2>
              <p className="text-gray-600 mb-8 text-lg">
                We combine premium products with exceptional service to deliver results that exceed expectations.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 group-hover:bg-primary/20 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center mt-8 text-primary font-semibold hover:text-primary/80 transition-colors duration-200 group"
              >
                Learn more about us 
                <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img
                src={getImageUrl('images/homeServices.jpg')}
                alt="Professional gutter guard installation services"
                className="rounded-lg shadow-2xl w-full relative z-10 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Home+Services+Image';
                }}
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-white" />
                  <span className="font-semibold">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">What Our Customers Say</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <FaQuoteLeft className="text-primary/20 text-3xl mb-4" />
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <FaCheckCircle className="text-primary text-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom text-center text-white">
          <h2 className="mb-4">Ready to Protect Your Home?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;