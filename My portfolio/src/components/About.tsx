import React from 'react';
import { User, Heart, Coffee, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '25+' },
    { icon: User, label: 'Years Experience', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 text-white perspective-1000" style={{ background: '#071630' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp3d">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 hover-tilt glow-text animate-textGlow">
              About Me
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed glow-text">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="animate-slideInLeft3d delay-200">
              <h3 className="text-2xl font-bold text-white mb-6 hover-tilt glow-text">
                Building Digital Experiences That Matter
              </h3>
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p className="hover-lift transition-all duration-300 p-4 rounded-lg bg-white/10 glow-white hover-glow">
                  I'm a passionate Full Stack Developer with over 5 years of experience in creating 
                  web applications that combine beautiful design with robust functionality. My journey 
                  in tech started with a curiosity about how things work, and it has evolved into a 
                  deep love for crafting digital solutions.
                </p>
                <p className="hover-lift transition-all duration-300 p-4 rounded-lg bg-white/10 glow-white hover-glow">
                  I specialize in modern JavaScript frameworks like React and Node.js, and I'm 
                  constantly learning new technologies to stay at the forefront of web development. 
                  My approach focuses on clean code, user experience, and scalable architecture.
                </p>
                <p className="hover-lift transition-all duration-300 p-4 rounded-lg bg-white/10 glow-white hover-glow">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in the power of collaboration and continuous learning.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover-lift transition-all duration-300 glow-white hover-glow"
                >
                  Let's Work Together
                </a>
              </div>
            </div>

            {/* Stats Grid with Enhanced Glowing Effects */}
            <div className="grid grid-cols-2 gap-6 animate-slideInRight3d delay-400">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 p-6 rounded-xl text-center hover-lift transition-all duration-300 animate-bounceIn3d delay-${600 + index * 100} glow-white hover-glow`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 hover-rotate3d glow-white">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 hover-tilt glow-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section with Enhanced Glowing Effects */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12 animate-slideInUp3d delay-800 hover-tilt glow-text">
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: 'Clean Code',
                  description: 'Writing maintainable, scalable code that stands the test of time and makes collaboration seamless.'
                },
                {
                  icon: User,
                  title: 'User-Centric',
                  description: 'Every line of code I write is with the end user in mind, creating experiences that are intuitive and delightful.'
                },
                {
                  icon: Heart,
                  title: 'Continuous Growth',
                  description: 'Technology evolves rapidly, and I\'m committed to continuous learning and adapting to new challenges.'
                }
              ].map((value, index) => (
                <div key={index} className={`text-center animate-flipIn delay-${1000 + index * 200}`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover-rotate3d transition-all duration-300 animate-pulse3d glow-white">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 hover-tilt glow-text">{value.title}</h4>
                  <p className="text-blue-100 leading-relaxed hover-lift transition-all duration-300 p-4 rounded-lg bg-white/5 glow-white hover-glow">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;