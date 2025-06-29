import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen text-white relative overflow-hidden perspective-1000" style={{ background: '#071630' }}>
      {/* Enhanced Animated Background Elements with Stronger Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-screen filter blur-xl animate-float glow-blue"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-screen filter blur-xl animate-float delay-200 glow-blue"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-white rounded-full mix-blend-screen filter blur-xl animate-float delay-400 glow-white"></div>
      </div>

      {/* Enhanced Floating Geometric Shapes with Stronger Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-400 rotate-45 animate-rotate3d glow-border"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-blue-400/40 rounded-full animate-pulse3d delay-300 glow-blue"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-white/60 animate-float delay-500 glow-border"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-blue-300/50 transform rotate-45 animate-rotate3d delay-700 glow-blue"></div>
        
        {/* Additional glowing particles */}
        <div className="glow-particle" style={{ top: '20%', left: '30%' }}></div>
        <div className="glow-particle" style={{ top: '60%', right: '25%' }}></div>
        <div className="glow-particle" style={{ bottom: '30%', left: '15%' }}></div>
        <div className="glow-particle" style={{ top: '40%', right: '40%' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center transform-3d">
          {/* Hero Content with Enhanced Glowing Text */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slideInLeft3d glow-text">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent hover-tilt inline-block animate-textGlow">
                John Doe
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-6 text-blue-100 leading-relaxed animate-slideInRight3d delay-200 glow-text">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg sm:text-xl mb-8 text-blue-200 max-w-3xl mx-auto leading-relaxed animate-slideInUp3d delay-400 glow-text">
              I craft digital experiences that combine beautiful design with powerful functionality. 
              Specializing in React, Node.js, and modern web technologies.
            </p>
          </div>

          {/* Enhanced Social Links with Stronger Glowing Effects */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 hover-lift transition-all duration-300 animate-flipIn delay-700 glow-white hover-glow"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 hover-lift transition-all duration-300 animate-flipIn delay-800 glow-white hover-glow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:john@example.com"
              className="p-3 rounded-full bg-white/20 hover-lift transition-all duration-300 animate-flipIn delay-900 glow-white hover-glow"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="p-3 rounded-full bg-white/20 hover-lift transition-all duration-300 animate-flipIn delay-1000 glow-white hover-glow"
              aria-label="Download Resume"
            >
              <Download className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;