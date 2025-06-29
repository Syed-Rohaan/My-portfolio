import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that provides current weather data, forecasts, and interactive maps using external APIs.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      title: 'Portfolio CMS',
      description: 'A content management system for portfolio websites with drag-and-drop editor, media management, and SEO optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media managers with data visualization, scheduling features, and performance metrics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Express.js', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, video streaming, progress tracking, and interactive quizzes.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MySQL', 'Video.js', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 text-white perspective-1000" style={{ background: '#071630' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp3d">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 hover-tilt glow-text animate-textGlow">
              Featured Projects
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed glow-text">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          {/* Featured Projects with Enhanced Glowing Effects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className={`bg-white/10 rounded-xl overflow-hidden hover-lift transition-all duration-300 animate-slideInUp3d delay-${200 + index * 200} glow-white hover-glow`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 animate-bounceIn3d delay-500">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold hover-tilt glow-white">
                      Featured
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-blue-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 hover-tilt glow-text">
                    {project.title}
                  </h3>
                  <p className="text-blue-100 mb-4 leading-relaxed hover-lift transition-all duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium hover-tilt transition-all duration-300 animate-flipIn delay-${600 + techIndex * 100} glow-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects with Enhanced Glowing Effects */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center animate-slideInUp3d delay-400 hover-tilt glow-text">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 rounded-lg overflow-hidden hover-lift transition-all duration-300 animate-bounceIn3d delay-${600 + index * 100} glow-white hover-glow`}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-2 hover-tilt glow-text">
                      {project.title}
                    </h4>
                    <p className="text-blue-100 text-sm mb-3 leading-relaxed hover-lift transition-all duration-300">
                      {project.description.substring(0, 100)}...
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-white/20 text-white px-2 py-1 rounded text-xs hover-tilt transition-all duration-300 glow-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-200 text-sm font-semibold transition-all duration-300 hover-lift glow-text"
                      >
                        View Project
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-white transition-all duration-300 hover-rotate3d"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action with Enhanced Glowing Effect */}
          <div className="text-center mt-16 animate-slideInUp3d delay-1000">
            <div className="bg-white/10 text-white p-8 rounded-xl hover-tilt transition-all duration-300 glow-white">
              <h3 className="text-2xl font-bold mb-4 hover-tilt glow-text">
                Interested in Working Together?
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover-lift transition-all duration-300 glow-white hover-glow"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 hover-rotate3d" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;