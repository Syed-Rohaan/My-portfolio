import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md glow-white' : 'bg-transparent'
    }`} style={{ backgroundColor: isScrolled ? 'rgba(7, 22, 48, 0.9)' : 'transparent' }}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Enhanced Glowing Animation */}
          <div className="flex items-center space-x-2 hover-lift transition-all duration-300">
            <Code2 className={`h-8 w-8 transition-all duration-300 hover-rotate3d animate-pulse3d text-white glow-white`} />
            <span className={`text-xl font-bold transition-all duration-300 hover-tilt text-white glow-text`}>
              John Doe
            </span>
          </div>

          {/* Desktop Navigation with Enhanced Glowing Effects */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover-lift animate-slideInUp3d delay-${100 + index * 100} text-white hover:text-blue-200 hover:bg-white/10 glow-text hover-glow`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button with Enhanced Glowing Animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 hover-rotate3d text-white glow-white`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Enhanced Glowing Effects */}
        {isMenuOpen && (
          <div className="md:hidden animate-slideInUp3d">
            <div className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 glow-white" style={{ backgroundColor: 'rgba(7, 22, 48, 0.9)' }}>
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-200 hover:bg-white/10 transition-all duration-300 hover-lift animate-slideInLeft3d delay-${100 + index * 100} glow-text`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;