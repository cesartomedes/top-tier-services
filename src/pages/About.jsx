import { FaUsers, FaTrophy, FaCalendarAlt, FaTools } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: '1000+', label: 'Happy Customers' },
    { icon: <FaTrophy />, number: '500+', label: 'Projects Completed' },
    { icon: <FaCalendarAlt />, number: '10+', label: 'Years Experience' },
    { icon: <FaTools />, number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1>About Us</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            Learn more about Top Tier Services and our commitment to excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2>Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2014, Top Tier Services has been providing premium gutter guard installation services to homeowners across the region. Our mission is simple: to protect homes from water damage with the highest quality products and expert installation.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that every home deserves the best protection, which is why we only use top-tier materials and employ the most skilled technicians in the industry.
              </p>
              <p className="text-gray-700">
                Our commitment to excellence has earned us a reputation as the most trusted gutter guard company in the area, with hundreds of satisfied customers and countless 5-star reviews.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">✓</span>
                  <span>Quality craftsmanship in every project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">✓</span>
                  <span>Honest and transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">✓</span>
                  <span>Exceptional customer service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">✓</span>
                  <span>Environmentally responsible practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-primary mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-secondary">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;