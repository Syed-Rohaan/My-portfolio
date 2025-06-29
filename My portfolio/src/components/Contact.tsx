import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john@example.com',
      href: 'mailto:john@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-200'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-blue-300'
    }
  ];

  return (
    <section id="contact" className="py-20 text-white perspective-1000" style={{ background: '#071630' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp3d">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 hover-tilt glow-text animate-textGlow">
              Get In Touch
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed glow-text">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form with Enhanced Glowing Effects */}
            <div className="bg-white/10 p-8 rounded-xl hover-lift transition-all duration-300 animate-slideInLeft3d delay-200 glow-white hover-glow">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-6 w-6 text-white mr-3 hover-rotate3d animate-pulse3d" />
                <h3 className="text-2xl font-bold text-white hover-tilt glow-text">
                  Send a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="animate-slideInUp3d delay-300">
                    <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 hover-lift text-white placeholder-blue-200 glow-border"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="animate-slideInUp3d delay-400">
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 hover-lift text-white placeholder-blue-200 glow-border"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="animate-slideInUp3d delay-500">
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 hover-lift text-white placeholder-blue-200 glow-border"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="animate-slideInUp3d delay-600">
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none hover-lift text-white placeholder-blue-200 glow-border"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold hover-lift transition-all duration-300 flex items-center justify-center animate-bounceIn3d delay-700 glow-white hover-glow"
                >
                  <Send className="h-5 w-5 mr-2 hover-rotate3d" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info with Enhanced Glowing Effects */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white/10 p-8 rounded-xl hover-lift transition-all duration-300 animate-slideInRight3d delay-300 glow-white hover-glow">
                <h3 className="text-2xl font-bold text-white mb-6 hover-tilt glow-text">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group hover-lift animate-flipIn delay-${500 + index * 200} glow-white hover-glow`}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors duration-300 hover-rotate3d glow-white">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-100 font-medium">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-white hover-tilt glow-text">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/20 text-white p-8 rounded-xl hover-tilt transition-all duration-300 animate-slideInRight3d delay-600 glow-white">
                <h3 className="text-2xl font-bold mb-6 hover-tilt glow-text">
                  Connect With Me
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Follow me on social media for updates on my latest projects and tech insights.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover-lift animate-bounceIn3d delay-${800 + index * 200} ${social.color} glow-white hover-glow`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 hover-rotate3d" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-green-400/20 border-l-4 border-green-300 p-6 rounded-lg hover-lift transition-all duration-300 animate-slideInRight3d delay-800 glow-white">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-300 rounded-full mr-3 animate-pulse glow-white"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white hover-tilt glow-text">
                      Available for New Projects
                    </h4>
                    <p className="text-blue-100 mt-1">
                      Currently accepting new freelance and full-time opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-12 text-center animate-slideInUp3d delay-1000">
            <div className="bg-white/10 p-6 rounded-xl max-w-md mx-auto hover-lift transition-all duration-300 glow-white">
              <h4 className="text-lg font-semibold text-white mb-2 hover-tilt glow-text">
                Quick Response Time
              </h4>
              <p className="text-blue-100">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to call or text directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;