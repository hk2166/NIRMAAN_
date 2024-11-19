import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Event Details', to: 'event-details' },
    { name: 'Winter Gifts', to: 'winter-gifts' },
    { name: 'Register', to: 'register' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 mobile-safe-top ${
      isScrolled ? 'bg-black/50 backdrop-blur-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center cursor-pointer touch-active"
          >
            <Code2 className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
            <span className="ml-2 text-xl md:text-2xl font-bold text-white">NIRMAAN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-purple-400 cursor-pointer transition-colors text-lg touch-active"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-purple-400 transition-colors touch-active"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-3 space-y-2 mobile-safe-bottom">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block w-full px-4 py-3 text-white hover:text-purple-400 text-lg rounded-lg touch-active"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}