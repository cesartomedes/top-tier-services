import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Top Tier Services</h3>
            <p className="text-gray-300">
              Professional gutter guard installation services with quality and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors text-2xl">
                <FaYelp />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Top Tier Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;