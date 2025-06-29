import React from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  Cloud,
  GitBranch,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 75 },
        { name: 'Responsive Design', level: 95 },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 80 },
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Git', icon: '📦' },
  ];

  return (
    <section id="skills" className="py-20 text-white perspective-1000" style={{ background: '#071630' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp3d">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 hover-tilt glow-text animate-textGlow">
              Skills & Expertise
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed glow-text">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid with Enhanced Glowing Effects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`bg-white/10 p-8 rounded-xl hover-lift transition-all duration-300 animate-slideInUp3d delay-${200 + index * 100} glow-white hover-glow`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 hover-rotate3d transition-all duration-300 animate-pulse3d glow-white">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white hover-tilt glow-text">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="hover-lift transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-blue-100 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-white font-semibold glow-text">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden glow-border">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-white h-2 rounded-full transition-all duration-1000 ease-out hover:animate-pulse glow-blue"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack with Enhanced Glowing Effects */}
          <div className="text-center animate-slideInUp3d delay-600">
            <h3 className="text-2xl font-bold text-white mb-8 hover-tilt glow-text">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 border-2 border-white/20 px-6 py-4 rounded-lg hover-lift transition-all duration-300 animate-bounceIn3d delay-${700 + index * 100} glow-white hover-glow`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl hover-rotate3d transition-all duration-300">{tech.icon}</span>
                    <span className="font-semibold text-white glow-text">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info with Enhanced Glowing Effects */}
          <div className="mt-16 bg-white/10 text-white p-8 rounded-xl hover-tilt transition-all duration-300 animate-slideInUp3d delay-1000 glow-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: Globe,
                  title: 'Full Stack',
                  description: 'End-to-end web application development'
                },
                {
                  icon: Smartphone,
                  title: 'Responsive',
                  description: 'Mobile-first design approach'
                },
                {
                  icon: Zap,
                  title: 'Performance',
                  description: 'Optimized for speed and efficiency'
                }
              ].map((item, index) => (
                <div key={index} className={`animate-flipIn delay-${1200 + index * 200}`}>
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-blue-200 hover-rotate3d transition-all duration-300 animate-float glow-white" />
                  <h4 className="text-lg font-semibold mb-2 hover-tilt glow-text">{item.title}</h4>
                  <p className="text-blue-100">
                    {item.description}
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

export default Skills;