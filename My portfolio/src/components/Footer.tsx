import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Frontend Development',
    'Backend Development',
    'Full Stack Solutions',
    'Technical Consulting'
  ];

  return (
    <footer className="text-white relative perspective-1000" style={{ background: '#071630' }}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section with Enhanced Glowing Animation */}
          <div className="lg:col-span-2 animate-slideInLeft3d">
            <div className="flex items-center space-x-2 mb-4 hover-lift transition-all duration-300">
              <Code2 className="h-8 w-8 text-blue-200 hover-rotate3d animate-pulse3d glow-white" />
              <span className="text-2xl font-bold hover-tilt glow-text">John Doe</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed max-w-md hover-lift transition-all duration-300">
              Full Stack Developer passionate about creating digital experiences 
              that combine beautiful design with powerful functionality. Always 
              ready to tackle new challenges and bring innovative ideas to life.
            </p>
            <div className="flex items-center text-blue-200 hover-lift transition-all duration-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-400 animate-pulse3d glow-white" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Quick Links with Enhanced Glowing Effects */}
          <div className="animate-slideInUp3d delay-200">
            <h3 className="text-lg font-semibold mb-4 text-blue-200 hover-tilt glow-text">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className={`animate-slideInRight3d delay-${300 + index * 100}`}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-all duration-300 hover:underline hover-lift glow-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services with Enhanced Glowing Effects */}
          <div className="animate-slideInUp3d delay-400">
            <h3 className="text-lg font-semibold mb-4 text-blue-200 hover-tilt glow-text">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className={`text-blue-100 hover-lift transition-all duration-300 animate-slideInRight3d delay-${500 + index * 100} glow-text`}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Enhanced Glowing Effects */}
      <div className="border-t border-blue-600/30 glow-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0 animate-slideInLeft3d delay-600 hover-lift transition-all duration-300 glow-text">
              © {currentYear} John Doe. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 animate-slideInRight3d delay-700">
              <a 
                href="/privacy" 
                className="text-blue-100 hover:text-white text-sm transition-all duration-300 hover-lift glow-text"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-blue-100 hover:text-white text-sm transition-all duration-300 hover-lift glow-text"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-600/30 hover:bg-blue-500/50 p-2 rounded-full transition-all duration-300 hover-lift animate-bounceIn3d delay-800 glow-white hover-glow"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4 hover-rotate3d" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements with Stronger Glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 animate-pulse glow-blue"></div>
    </footer>
  );
};

export default Footer;