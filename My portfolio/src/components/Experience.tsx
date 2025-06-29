import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using React, Node.js, and AWS. Mentor junior developers and architect scalable solutions for high-traffic applications.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led a team of 5 developers on a major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to content management systems. Collaborated with design teams to implement pixel-perfect UIs.',
      achievements: [
        'Delivered 15+ projects on time and within budget',
        'Increased client satisfaction rating to 98%',
        'Reduced bug reports by 45% through improved testing practices'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency Pro',
      location: 'Denver, CO',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive web applications and interactive user interfaces. Worked closely with UX designers to bring creative concepts to life.',
      achievements: [
        'Built responsive websites for 20+ clients',
        'Improved website loading speed by 35% on average',
        'Implemented modern JavaScript frameworks and best practices'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      location: 'Boulder, CO',
      period: '2018 - 2019',
      description: 'Started my professional journey building websites and web applications. Gained experience in various technologies and development methodologies.',
      achievements: [
        'Completed 10+ web development projects',
        'Learned modern development stack and tools',
        'Contributed to open-source projects'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'React Professional Certificate',
      issuer: 'Meta',
      year: '2022'
    },
    {
      name: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      year: '2021'
    }
  ];

  return (
    <section id="experience" className="py-20 text-white perspective-1000" style={{ background: '#071630' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp3d">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 hover-tilt glow-text animate-textGlow">
              Experience
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed glow-text">
              My professional journey and key achievements in web development
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience Timeline with Enhanced Glowing Effects */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Enhanced Animated Timeline Line with Stronger Glow */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/40 animate-pulse glow-border"></div>
                
                {experiences.map((exp, index) => (
                  <div key={index} className={`relative mb-12 last:mb-0 animate-slideInLeft3d delay-${200 + index * 200}`}>
                    {/* Enhanced Animated Timeline Marker with Stronger Glow */}
                    <div className="absolute left-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover-rotate3d transition-all duration-300 animate-pulse3d glow-white">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Experience Card with Enhanced Glowing Effects */}
                    <div className="ml-16 bg-white/10 p-6 rounded-xl hover-lift transition-all duration-300 glow-white hover-glow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 hover-tilt glow-text">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-blue-100 hover-tilt">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col sm:text-right text-sm text-blue-200 mt-2 sm:mt-0">
                          <div className="flex items-center sm:justify-end mb-1 hover-lift transition-all duration-300">
                            <Calendar className="h-4 w-4 mr-1 hover-rotate3d" />
                            {exp.period}
                          </div>
                          <div className="flex items-center sm:justify-end hover-lift transition-all duration-300">
                            <MapPin className="h-4 w-4 mr-1 hover-rotate3d" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-blue-100 mb-4 leading-relaxed hover-lift transition-all duration-300">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-2 hover-tilt glow-text">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className={`flex items-start text-blue-100 hover-lift transition-all duration-300 animate-slideInRight3d delay-${400 + achIndex * 100}`}>
                              <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse3d glow-white"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar with Enhanced Glowing Effects */}
            <div className="space-y-8">
              {/* Certifications */}
              <div className="bg-white/10 text-white p-6 rounded-xl hover-tilt transition-all duration-300 animate-slideInRight3d delay-400 glow-white">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 mr-2 hover-rotate3d animate-pulse3d" />
                  <h3 className="text-xl font-bold glow-text">Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className={`border-l-4 border-white/30 pl-4 hover-lift transition-all duration-300 animate-flipIn delay-${600 + index * 200} glow-border`}>
                      <h4 className="font-semibold text-white hover-tilt glow-text">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-blue-200">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Summary */}
              <div className="bg-white/10 p-6 rounded-xl hover-lift transition-all duration-300 animate-slideInRight3d delay-600 glow-white">
                <h3 className="text-xl font-bold text-white mb-4 hover-tilt glow-text">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React', 'TypeScript', 'Node.js', 'PostgreSQL', 
                    'AWS', 'Docker', 'Git', 'REST APIs'
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className={`bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium hover-tilt transition-all duration-300 animate-bounceIn3d delay-${800 + index * 100} glow-white`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-white/20 text-white p-6 rounded-xl hover-tilt transition-all duration-300 animate-slideInRight3d delay-800 glow-white">
                <h3 className="text-lg font-bold mb-2 hover-tilt glow-text">
                  Ready to Collaborate?
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Let's discuss how my experience can help bring your project to life.
                </p>
                <a 
                  href="#contact" 
                  className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover-lift transition-all duration-300 text-sm glow-white hover-glow"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;