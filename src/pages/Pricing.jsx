import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaTrophy,
  FaGem,
  FaMedal,
} from "react-icons/fa";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Silver",
      icon: <FaMedal className="text-5xl" />,
      color: "from-gray-400 to-gray-500",
      borderColor: "border-gray-300",
      bgColor: "bg-gray-50",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      description: "Essential gutter protection for budget-conscious homeowners",
      features: [
        "Standard gutter guard system",
        "10-year warranty",
        "Basic leaf and debris protection",
        "Professional installation",
        "Free initial inspection",
        "Standard aluminum material",
      ],
      popular: false,
      bestFor: "Small to medium homes with moderate debris",
    },
    {
      name: "Gold",
      icon: <FaStar className="text-5xl" />,
      color: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500",
      bgColor: "bg-white",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      description: "Our most popular package with premium features",
      features: [
        "Premium micro-mesh gutter guards",
        "25-year warranty",
        "Advanced debris protection",
        "Professional installation by certified technicians",
        "Free inspection and cleaning",
        "Premium stainless steel material",
        "Ice dam prevention",
        "Priority scheduling",
      ],
      popular: true,
      bestFor: "Most homes - best value and protection",
    },
    {
      name: "Platinum",
      icon: <FaTrophy className="text-5xl" />,
      color: "from-blue-600 to-purple-600",
      borderColor: "border-purple-500",
      bgColor: "bg-white",
      buttonColor: "bg-purple-700 hover:bg-purple-800",
      description: "Maximum protection with lifetime coverage",
      features: [
        "Commercial-grade gutter guard system",
        "Lifetime warranty (transferable)",
        "Complete debris and pest protection",
        "Premium installation by master technicians",
        "Free annual inspection and maintenance",
        "Heavy-duty stainless steel construction",
        "Ice dam prevention system",
        "24/7 priority support",
        "10-year transferable warranty",
        "Free spring sale discount applied",
      ],
      popular: false,
      bestFor: "Large homes and premium properties",
    },
  ];

  const compareFeatures = [
    { feature: "Gutter Guard Material", silver: "Standard Aluminum", gold: "Premium Stainless Steel", platinum: "Heavy-Duty Stainless Steel" },
    { feature: "Debris Protection", silver: "Basic Leaf Protection", gold: "Advanced Micro-Mesh", platinum: "Complete Protection" },
    { feature: "Warranty", silver: "10 Years", gold: "25 Years", platinum: "Lifetime (Transferable)" },
    { feature: "Free Inspection", silver: "✓", gold: "✓", platinum: "✓" },
    { feature: "Professional Installation", silver: "✓", gold: "Certified Technicians", platinum: "Master Technicians" },
    { feature: "Ice Dam Prevention", silver: "Optional", gold: "✓", platinum: "✓" },
    { feature: "Annual Maintenance", silver: "❌", gold: "❌", platinum: "✓ Free" },
    { feature: "Priority Support", silver: "❌", gold: "❌", platinum: "24/7 Priority" },
    { feature: "Transferable Warranty", silver: "❌", gold: "❌", platinum: "✓" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        <div className="relative container-custom text-center z-10">
          <h1 className="mb-4 animate-fadeInDown">Simple, Transparent Pricing</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto animate-fadeInUp">
            Choose the Perfect Plan for Your Home
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              All plans include professional installation, free inspection, 
              and our commitment to quality service. Contact us for exact pricing.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/inspection"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? "ring-2 ring-yellow-500 scale-105 md:scale-105 z-10" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 px-4 py-1 rounded-bl-lg text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white text-center`}>
                  <div className="flex justify-center mb-4">{plan.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 text-sm">{plan.description}</p>
                </div>
                <div className={`${plan.bgColor} p-6`}>
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm mb-2">Best For:</p>
                    <p className="font-semibold text-gray-800">{plan.bestFor}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <FaCheckCircle className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/inspection"
                    className={`block text-center text-white ${plan.buttonColor} px-6 py-3 rounded-lg font-semibold transition-all duration-200`}
                  >
                    Get Free Quote
                  </Link>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Call for exact pricing
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Compare Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what each package includes and find the perfect fit for your home
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left text-gray-800 font-semibold">Feature</th>
                  <th className="p-4 text-center text-gray-800 font-semibold">Silver</th>
                  <th className="p-4 text-center text-gray-800 font-semibold bg-yellow-50">Gold</th>
                  <th className="p-4 text-center text-gray-800 font-semibold">Platinum</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-700 font-medium">{item.feature}</td>
                    <td className="p-4 text-center text-gray-600">{item.silver}</td>
                    <td className="p-4 text-center text-gray-600 bg-yellow-50/30">{item.gold}</td>
                    <td className="p-4 text-center text-gray-600">{item.platinum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Why Choose Top Tier Services?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Experience the difference with professional service and quality workmanship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">40-Year Warranty</h3>
              <p className="text-white/80 text-sm">Comprehensive warranty coverage on all gutter guard installations</p>
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
              Have questions about our pricing and packages?
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
              <h3 className="font-semibold text-lg text-primary mb-2">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">Absolutely! You can upgrade from Silver to Gold or Platinum at any time. Contact us for upgrade pricing.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg text-primary mb-2">What's included in the free inspection?</h3>
              <p className="text-gray-600">Our comprehensive inspection includes evaluating your current gutters, measuring your home, and providing a detailed recommendation for your specific needs.</p>
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