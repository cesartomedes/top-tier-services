import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaHome,
  FaHardHat,
  FaPaintRoller,
  FaToolbox,
  FaHouseDamage,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaArrowRight,
  FaWater,
  FaTint,
  FaWrench,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaTimes,
  FaSearchPlus,
  FaImages,
} from "react-icons/fa";

// Definir el componente ServiceModal FUERA del componente principal
const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-primary text-3xl">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">
              About This Service
            </h4>
            <p className="text-gray-700">
              {service.modalContent.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">
              Key Benefits
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.modalContent.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-green-500 text-sm" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">
              Our Process
            </h4>
            <div className="space-y-2">
              {service.modalContent.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">{idx + 1}.</span>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {service.modalContent.materials && (
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                Materials Available
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.modalContent.materials.map((material, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <FaCheckCircle className="text-primary text-sm" />
                    <span>{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Link
              to="/inspection"
              className="flex-1 bg-primary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
              onClick={onClose}
            >
              Schedule Free Inspection
            </Link>
            <Link
              to="/contact"
              className="flex-1 bg-gray-100 text-primary text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200"
              onClick={onClose}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal para la galería
const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-5xl max-h-full w-full">
        <div className="relative bg-black rounded-lg overflow-hidden">
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-auto max-h-[85vh] object-contain"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/800x600?text=Image+Not+Found";
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
          >
            ×
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold mb-2">
              {image.title}
            </h3>
            <p className="text-gray-200">Service Project Gallery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Generar array de 21 imágenes (1.jpg al 21.jpg)
  const galleryImages = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    src: `/images/services/${i + 1}.jpg`,
    title: `Project ${i + 1} - Professional Service`,
    description: "Quality workmanship in action",
  }));

  // Gutter Services
  const gutterServices = [
    {
      icon: <FaWater className="text-4xl" />,
      title: "Gutter Guard Installation",
      description:
        "Premium gutter protection systems that prevent clogs, reduce maintenance, and extend gutter life.",
      features: [
        "Lifetime warranty",
        "Micro-mesh technology",
        "Stainless steel construction",
        "Prevents all debris types",
      ],
      popular: true,
      modalContent: {
        fullDescription:
          "Our premium gutter guard systems are engineered to provide maximum protection for your home. Using advanced micro-mesh technology, we ensure that only water enters your gutters while keeping out leaves, pine needles, and even small debris.",
        benefits: [
          "Eliminates the need for frequent gutter cleaning",
          "Prevents water damage to foundation and landscaping",
          "Reduces risk of ice dams in winter",
          "Extends the life of your gutters by preventing rust and corrosion",
          "Increases home value with permanent protection",
        ],
        process: [
          "Free on-site consultation and measurement",
          "Custom gutter guard selection based on your home's needs",
          "Professional installation by certified technicians",
          "Final inspection and demonstration",
          "Lifetime warranty registration",
        ],
      },
    },
    {
      icon: <FaTint className="text-4xl" />,
      title: "Gutter Installation & Replacement",
      description:
        "Professional gutter installation with seamless aluminum gutters in various colors and sizes.",
      features: [
        "Seamless aluminum gutters",
        "Custom color matching",
        "Professional fitting",
        "Proper slope and drainage",
      ],
      popular: false,
      modalContent: {
        fullDescription:
          "We specialize in seamless aluminum gutter installation that provides superior performance and aesthetics. Unlike sectional gutters, our seamless design eliminates leaks at joints and provides a clean, custom look for your home.",
        benefits: [
          "No joints means fewer leaks and maintenance issues",
          "Custom-fabricated on-site for perfect fit",
          "Wide selection of colors to match your home",
          "Proper pitch ensures complete water drainage",
          "Prevents foundation damage and basement flooding",
        ],
        process: [
          "Free consultation and measurement",
          "Color selection from our extensive palette",
          "On-site gutter fabrication for perfect fit",
          "Professional installation with hidden hangers",
          "Downspout placement optimization",
        ],
      },
    },
    {
      icon: <FaWrench className="text-4xl" />,
      title: "Gutter Repair & Maintenance",
      description:
        "Complete gutter repair services including leak fixes, realignment, and seasonal maintenance.",
      features: [
        "Leak detection & repair",
        "Gutter realignment",
        "Downspout repairs",
        "Preventive maintenance",
      ],
      popular: false,
      modalContent: {
        fullDescription:
          "Don't let damaged gutters compromise your home's protection. Our expert technicians diagnose and repair all gutter issues, from minor leaks to complete system realignment.",
        benefits: [
          "Prevents water damage to your home's foundation",
          "Extends the life of your existing gutter system",
          "Improves water flow and drainage efficiency",
          "Identifies potential problems before they become major issues",
          "Cost-effective solution vs. full replacement",
        ],
        process: [
          "Comprehensive gutter system inspection",
          "Leak detection using advanced techniques",
          "Realignment and leveling as needed",
          "Sealant application for leak repair",
          "Downspout clearing and testing",
        ],
      },
    },
  ];

  // Construction Services with modal content
  const constructionServices = [
    {
      icon: <FaHardHat className="text-4xl" />,
      title: "Roofing",
      description:
        "Professional roofing installation, repair, and replacement services using top-quality materials.",
      features: [
        "Asphalt shingles",
        "Metal roofing",
        "Flat roofing",
        "Emergency repairs",
        "Roof inspections",
      ],
      badge: "Most Requested",
      modalContent: {
        fullDescription:
          "Your roof is your home's first line of defense. We provide comprehensive roofing services using only the highest quality materials and proven installation techniques. Whether you need a simple repair or complete replacement, our experienced team delivers lasting protection.",
        benefits: [
          "Increases energy efficiency with proper insulation",
          "Enhances curb appeal and home value",
          "Protects against water damage and leaks",
          "Weather-resistant installation for North Carolina conditions",
          "Lifetime warranty on materials",
        ],
        process: [
          "Free roof inspection and assessment",
          "Detailed estimate with material options",
          "Material selection (colors, styles, materials)",
          "Professional installation with safety protocols",
          "Final inspection and cleanup",
        ],
        materials: [
          "Architectural Asphalt Shingles - Lifetime warranty",
          "Metal Roofing - Lifetime warranty",
          "Flat Roof Systems - EPDM, TPO",
          "Premium Impact-Resistant Shingles",
        ],
      },
    },
    {
      icon: <FaPaintRoller className="text-4xl" />,
      title: "Painting",
      description:
        "Interior and exterior painting services to refresh and protect your home.",
      features: [
        "Exterior painting",
        "Interior painting",
        "Color consultation",
        "Pressure washing",
        "Staining & sealing",
      ],
      badge: null,
      modalContent: {
        fullDescription:
          "Transform your home with professional painting services that combine expert preparation with premium materials. Our team ensures flawless results that stand up to North Carolina's climate while enhancing your home's beauty.",
        benefits: [
          "Protects exterior surfaces from weather damage",
          "Increases property value and curb appeal",
          "Professional color consultation available",
          "Proper surface preparation ensures longevity",
          "Low-VOC, eco-friendly paint options",
        ],
        process: [
          "Free color consultation",
          "Surface preparation (cleaning, sanding, patching)",
          "Priming for optimal adhesion",
          "Professional application with attention to detail",
          "Final walkthrough and touch-ups",
        ],
      },
    },
    {
      icon: <FaToolbox className="text-4xl" />,
      title: "Siding",
      description:
        "Expert siding installation and repair to enhance curb appeal and energy efficiency.",
      features: [
        "Vinyl siding",
        "Fiber cement siding",
        "Wood siding",
        "Siding repair",
        "Insulation upgrades",
      ],
      badge: null,
      modalContent: {
        fullDescription:
          "Upgrade your home's exterior with durable, beautiful siding that provides protection and energy efficiency. We offer a variety of materials and styles to match your home's architecture and your personal taste.",
        benefits: [
          "Improves energy efficiency with insulated options",
          "Enhances curb appeal and property value",
          "Low-maintenance materials available",
          "Protects against moisture and pests",
          "Increases weather resistance",
        ],
        process: [
          "Free consultation and material samples",
          "Removal of old siding (if applicable)",
          "Installation of moisture barrier",
          "Professional siding installation",
          "Trim work and final inspection",
        ],
        materials: [
          "Vinyl Siding - 20+ color options",
          "Fiber Cement - Wood-like appearance, fire resistant",
          "Insulated Siding - Added energy efficiency",
          "Wood Siding - Natural beauty",
        ],
      },
    },
    {
      icon: <FaHouseDamage className="text-4xl" />,
      title: "Remodels",
      description:
        "Complete home remodeling services to transform your living spaces.",
      features: [
        "Kitchen remodeling",
        "Bathroom remodeling",
        "Basement finishing",
        "Room additions",
        "Custom renovations",
      ],
      badge: "Coming Soon",
      modalContent: {
        fullDescription:
          "Create the home of your dreams with our comprehensive remodeling services. From kitchen transformations to bathroom upgrades, we manage every aspect of your renovation with attention to detail and quality craftsmanship.",
        benefits: [
          "Increases home value and resale potential",
          "Improves functionality and flow",
          "Modern updates for energy efficiency",
          "Custom designs tailored to your lifestyle",
          "Professional project management",
        ],
        process: [
          "Initial consultation and design discussion",
          "Detailed project planning and timeline",
          "Material selection and sourcing",
          "Professional construction and installation",
          "Final walkthrough and satisfaction guarantee",
        ],
      },
    },
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: <FaShieldAlt />,
      title: "Lifetime Warranty",
      description:
        "Comprehensive lifetime warranty coverage on all gutter guard installations",
    },
    {
      icon: <FaStar />,
      title: "5-Star Service",
      description: "Hundreds of satisfied customers across North Carolina",
    },
    {
      icon: <FaClock />,
      title: "Timely Completion",
      description: "We respect your time and complete projects as scheduled",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Free Estimates",
      description: "No-obligation quotes for all our services",
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/services.jpg')",
          }}
        >
          {/* Blue Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/70"></div>
        </div>

        {/* Content */}
        <div className="relative container-custom text-center z-10">
          <h1 className="mb-4 animate-fadeInDown text-white text-4xl md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto animate-fadeInUp text-white">
            Comprehensive Gutter & Construction Solutions
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              From premium gutter protection to complete home renovations, 
              we provide expert services backed by years of combined experience.
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Gutter Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaHome className="text-primary text-5xl mx-auto mb-3" />
            <h2 className="text-primary mb-4">Gutter Protection Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Protect your home with our premium gutter solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gutterServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  service.popular ? "ring-2 ring-primary relative" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="border-t border-gray-200 my-4"></div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-600 text-sm"
                      >
                        <FaCheckCircle className="text-primary text-green-500 text-xs" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/inspection"
                    className="inline-block w-full text-center bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaHardHat className="text-primary text-5xl mx-auto mb-3" />
            <h2 className="text-primary mb-4">Construction Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete home improvement solutions from trusted professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {constructionServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {service.badge && (
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          service.badge === "Most Requested"
                            ? "bg-primary text-white"
                            : "bg-yellow-500 text-secondary"
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs text-gray-600"
                      >
                        <FaCheckCircle className="text-primary text-green-500 text-xs" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(service)}
                    className="inline-flex items-center text-primary font-semibold hover:underline group cursor-pointer"
                  >
                    Learn More{" "}
                    <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Why Choose Top Tier Home Services?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Experience the difference with professional service and quality
              workmanship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <FaImages className="text-primary text-5xl mx-auto mb-3" />
            <h2 className="text-primary mb-4">Our Work Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at our recent projects and see the quality of our work
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => openImageModal(image)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Image+Not+Found";
                    }}
                  />
                  {/* Overlay with Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <FaSearchPlus className="text-3xl mx-auto mb-2" />
                      <p className="font-semibold text-sm">Click to enlarge</p>
                    </div>
                  </div>
                </div>
                {/* Image Caption */}
                <div className="p-4 bg-white">
                  <p className="text-sm font-semibold text-primary mb-1">
                    Project #{image.id}
                  </p>
                  <p className="text-xs text-gray-500">
                    Professional Installation
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <FaCalendarCheck className="text-primary text-5xl mx-auto mb-4" />
          <h2 className="text-primary mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your free inspection today and see why we're the trusted
            choice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inspection"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Schedule Free Inspection
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      {isModalOpen && selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
      {isImageModalOpen && selectedImage && (
        <ImageModal image={selectedImage} onClose={closeImageModal} />
      )}
    </div>
  );
};

export default Services;