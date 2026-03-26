import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaThumbsUp,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaHome,
  FaHardHat,
  FaPaintRoller,
  FaTruck,
  FaLeaf,
  FaMoneyBillWave,
  FaCalendarCheck,
} from "react-icons/fa";

const Home = () => {
  // Service areas
  const serviceAreas = [
    "Burlington", "Hillsborough", "Chapel Hill", "Greensboro", "Raleigh",
    "Durham", "Cary", "Apex", "High Point", "Siler City", "Mebane",
    "Haw River", "Pittsboro", "Winston Salem", "Kernersville", "Asheboro"
  ];

  // Reviews
  const reviews = [
    {
      name: "Jennifer M.",
      location: "Raleigh, NC",
      text: "Absolutely amazing service! The team was professional, on time, and the gutter guards work perfectly. No more climbing ladders to clean gutters!",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      name: "David T.",
      location: "Durham, NC",
      text: "Best decision we made for our home. The installation was quick and the 40-year warranty gives us peace of mind. Highly recommend!",
      rating: 5,
      date: "1 month ago"
    },
    {
      name: "Lisa R.",
      location: "Chapel Hill, NC",
      text: "From the free inspection to the final installation, everything was seamless. The spring sale coupon saved us money too!",
      rating: 5,
      date: "3 weeks ago"
    }
  ];

  // Benefits of gutters
  const gutterBenefits = [
    "Prevents water damage to foundation",
    "Protects landscaping from erosion",
    "Prevents basement flooding",
    "Reduces risk of ice dams",
    "Prevents mold and mildew growth",
    "Protects siding and exterior paint",
    "Prevents gutter corrosion and rust",
    "Reduces pest infestations",
    "Increases home value",
    "Low maintenance solution",
    "Environmentally friendly",
    "Long-term cost savings"
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        >
          {/* Blue Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/70"></div>
        </div>

        {/* Content */}
        <div className="relative container-custom text-center z-10">
          {/* Rating Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <FaStar className="text-yellow-400 text-xl" />
            <span className="font-bold text-lg">4.9</span>
            <span className="text-white/90">★★★★★</span>
            <span className="text-sm">(150+ reviews)</span>
          </div> */}
          
          <h1 className="mb-4 animate-fadeInDown text-4xl md:text-5xl lg:text-6xl text-white">
            Top Tier Services
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto animate-fadeInUp text-white">
            Family-Owned & Operated Since 2017
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Expert Gutter Protection & Construction Services
          </p>
          
          {/* Spring Sale Coupon */}
          <div className="bg-yellow-500 text-secondary rounded-lg p-4 max-w-md mx-auto mb-6 animate-pulse">
            <p className="font-bold text-lg">🌷 SPRING SALE! 🌷</p>
            <p className="text-sm">Save 20% on all gutter guard installations</p>
            <p className="text-xs mt-1">Limited time offer - Call today!</p>
          </div>
          
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
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary mb-4">About Top Tier Services</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Founded in 2017, Top Tier Services is a family-owned business dedicated to providing exceptional gutter protection and construction services across North Carolina.
              </p>
              <p className="text-gray-700 mb-4">
                As industry experts with deep roots in the construction industry, we understand the unique challenges that North Carolina homes face. Our family values mean we treat every home as if it were our own.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <FaHome className="text-primary text-2xl mb-2" />
                  <p className="font-semibold">Gutter Experts</p>
                  <p className="text-sm text-gray-600">40-year warranty on all installations</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <FaHardHat className="text-primary text-2xl mb-2" />
                  <p className="font-semibold">Construction Services</p>
                  <p className="text-sm text-gray-600">Roofing, Painting, Siding & Remodels</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center mb-4">
                <FaShieldAlt className="text-primary text-5xl mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-primary">40-Year Warranty</h3>
                <p className="text-gray-600 mt-2">Peace of mind with our comprehensive warranty coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <FaTruck className="text-primary text-4xl mx-auto mb-3" />
            <h2 className="text-primary mb-2">Our Service Areas</h2>
            <p className="text-gray-600">Serving communities across North Carolina</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700 font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gutter Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <FaLeaf className="text-primary text-4xl mx-auto mb-3" />
            <h2 className="text-primary mb-2">12 Benefits of Gutter Guards</h2>
            <p className="text-gray-600">Why every home needs proper gutter protection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gutterBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaCheckCircle className="text-primary text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <img 
              src="/images/gutter-leaves-out.jpg" 
              alt="Gutter protection prevents leaves and debris"
              className="max-w-md mx-auto rounded-lg shadow-md"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-white mb-2">What Our Customers Say</h2>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>
            <p className="text-white/90">Rated 4.9 out of 5 based on 150+ reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
                <FaQuoteLeft className="text-primary/30 text-2xl mb-3" />
                <p className="italic mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">{review.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/reviews"
              className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Coupon */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container-custom text-center">
          <FaMoneyBillWave className="text-white text-5xl mx-auto mb-4" />
          <h2 className="text-white mb-4">Spring Sale! Save 20%</h2>
          <p className="text-xl text-white mb-6">
            Limited time offer on all gutter guard installations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inspection"
              className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Schedule Free Inspection
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              Get Free Quote
            </Link>
          </div>
          <p className="text-white/90 text-sm mt-4">*Valid for new customers only. Cannot combine with other offers.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;