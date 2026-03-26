import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiStar } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/reviews', name: 'Reviews' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/inspection', name: 'Inspection' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
            Top Tier Services
          </Link>

          {/* Rating Badge */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <FiStar className="text-yellow-400" />
            <span className="text-sm font-semibold">4.9</span>
            <span className="text-xs text-gray-300">(150+ reviews)</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors duration-200 text-sm font-medium ${
                    isActive ? 'border-b-2 border-white' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex items-center justify-center gap-2 bg-white/10 px-3 py-2 rounded-full mb-4">
              <FiStar className="text-yellow-400" />
              <span className="text-sm font-semibold">4.9 Stars</span>
              <span className="text-xs text-gray-300">(150+ reviews)</span>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-center hover:text-gray-300 transition-colors duration-200 ${
                    isActive ? 'text-gray-300' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;