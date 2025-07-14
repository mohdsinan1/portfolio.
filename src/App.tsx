import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';

import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Smartphone,
  Globe,
  Award,
  Calendar,
  ArrowRight,
  ChevronDown,
  User,
  Briefcase,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 2000);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Section detection
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadingTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer Internship',
      company: 'Upcode',
      duration: '2024 - 2025',
      description:
        'Built full stack web and mobile applications through self-guided learning and practice. Gained hands-on experience in modern frameworks, databases, and best development practices.',
      technologies: ['Next', 'PostgreSQL', 'java', 'Mongodb'],
    },
    {
      title: 'Frontend Developer Internship',
      company: 'Bridgeon',
      duration: '2024',
      description:
        'Built modern, interactive user interfaces for web applications. Focused on performance optimization and user experience enhancement.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
  ];

  const skills = [
    { category: 'Frontend Development', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'], icon: <Code className="w-5 h-5" /> },
    { category: 'Backend Development', items: ['Node.js', 'java', 'Express', 'REST APIs'], icon: <Database className="w-5 h-5" /> },
    { category: 'DataBase', items: ['Mongodb', 'SQL'], icon: <Smartphone className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'Crafting Showcase Web App',
      description:
        'A modern web application to display and manage handmade crafts, featuring a beautiful gallery, categorized items, and a responsive design for a smooth user experience.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      image: 'https://img.freepik.com/premium-photo/black-background-with-minimalist-crafting-supplies_1170794-256301.jpg',
      github: 'https://github.com/mohdsinan1/crafty-bites-gallery-showcase',
      live: 'https://crafty-bites-gallery-showcase.vercel.app/',
    },
    {
      title: 'Food Ordering Platform',
      description:
        'A responsive food ordering web app designed to make browsing menus, adding to cart, and ordering your favorite meals seamless and enjoyable.',
      technologies: ['React', 'Tailwind CSS'],
      image: 'https://slidebazaar.com/wp-content/uploads/2024/08/Food-PPT-Theme-Introduction-Slide.jpg',
      github: 'https://github.com/mohdsinan1/Food_project',
      live: 'https://food-project-indol.vercel.app/',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A modern and responsive frontend for a fashion e-commerce platform,Features include dynamic product listings, category filtering, interactive UI components, and a sleek fashion-focused design.',
      technologies: ['Next', 'Tailwind CSS'],
      image:
        'https://png.pngtree.com/background/20230519/original/pngtree-store-with-hanging-clothing-in-a-high-end-environment-picture-image_2654941.jpg',
      github: 'https://github.com/mohdsinan1/fashion-store',
    },
    {
      title: 'Netflix clone',
      description:
        'A responsive web application inspired by Netflix, featuring a sleek UI, movie browsing, and dynamic content fetching for an immersive streaming experience.',
      technologies: ['React'],
      image: 'https://i.pinimg.com/originals/c8/bc/49/c8bc4907863e6f8fdc12e13e24d3587d.png',
      github: 'https://https://github.com/mohdsinan1/netflix',
      live: 'https://netflix-gilt-three.vercel.app/',
    },
    {
      title: 'Pharmacy Billing System (Backend)',
      description:
        'A backend system built with Node.js and Express to manage pharmacy operations including billing, customer data, stock tracking, and user authentication. Supports RESTful APIs with secure JWT-based login and role-based access control for Admin and Users.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      image: 'https://img.freepik.com/premium-photo/pharmacy-background-dark-table_847423-4050.jpg',
      github: 'https://github.com/mohdsinan1/pharmacy-',
    },
    {
      title: 'Amazon clone',
      description:
       'An e-commerce web application inspired by Amazon. Features include user authentication, product browsing, shopping cart functionality, order placement, and responsive design for seamless shopping across devices.',
      technologies: ['HTML','Bootstrap'],
      image: 'https://wallpaperaccess.com/full/1383587.jpg',
      github: 'https://github.com/mohdsinan1/Amazon-',
      live: 'https://mohdsinan1.github.io/Amazon-/'
    }
  ];

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-light tracking-widest text-white mb-4">MOHD SINAN</h1>
            <div className="w-48 h-px bg-white mx-auto mb-4"></div>
            <p className="text-gray-400 font-sans tracking-wider uppercase text-sm">Full Stack Developer</p>
          </div>

          {/* Loading Animation */}
          <div className="w-64 h-px bg-gray-800 mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-white animate-loading-line"></div>
          </div>

          <p className="text-gray-500 font-sans text-xs tracking-widest uppercase mt-6">Loading Portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-serif">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div className="h-full bg-white transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Vertical Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="w-px h-32 bg-gray-800 relative">
          <div
            className="absolute top-0 left-0 w-full bg-white transition-all duration-150 ease-out"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 font-sans tracking-widest uppercase mt-4 transform -rotate-90 origin-left">
          {Math.round(scrollProgress)}%
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-white">MOHD</span>
              <span className="text-gray-400 ml-2">SINAN</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative ${
                    activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && <div className="absolute -bottom-2 left-0 w-full h-px bg-white"></div>}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-400 hover:text-white transition-colors">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-sm font-medium tracking-wide uppercase transition-colors ${
                    activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wider">MOHD SINAN</h1>
              <div className="w-32 h-px bg-white mx-auto mb-8"></div>
              <h2 className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase">Full Stack Developer</h2>
            </div>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
              Crafting elegant digital solutions with precision and passion. Specializing in modern web technologies and innovative user
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase flex items-center justify-center gap-3"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/public/Mohd sinan.pdf" 
                download
              >
                <button className="px-8 py-4 text-white hover:text-gray-300 transition-all duration-300 font-medium tracking-wide uppercase flex items-center justify-center gap-3">
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">About Me</h2>
                <div className="w-16 h-px bg-white mb-8"></div>
              </div>

              <div className="space-y-6 font-sans">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I’m a Full Stack Developer with a strong focus on building modern, user-friendly, and efficient web applications. I enjoy
                  transforming ideas into real-world digital solutions that are both visually appealing and highly functional. I’m
                  passionate about continuous learning and delivering high-quality work that adds value.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Feel free to explore my portfolio to see some of my projects and get in touch if you’d like to work together.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="flex justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-light mb-2">1</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="flex justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-light mb-2">4+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Completed</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border-l-2 border-gray-800">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 font-sans">Available Worldwide</span>
                </div>
                <div className="flex items-center gap-4 p-4 border-l-2 border-gray-800">
                  <Code className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 font-sans">Full Stack Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">Experience</h2>
            <div className="w-16 h-px bg-white mb-8"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-800 pl-8 hover:border-gray-600 transition-colors group">
                <div className="relative">
                  <div className="absolute -left-10 top-2 w-3 h-3 bg-white rounded-full group-hover:bg-gray-300 transition-colors"></div>
                  <div className="mb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-2xl font-light text-white mb-1">{exp.title}</h3>
                      <div className="text-gray-400 font-sans text-sm tracking-wide">{exp.duration}</div>
                    </div>
                    <h4 className="text-lg text-gray-300 font-sans">{exp.company}</h4>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed font-sans">{exp.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 border border-gray-700 text-gray-300 text-sm font-sans tracking-wide hover:border-gray-600 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">Skills & Expertise</h2>
            <div className="w-16 h-px bg-white mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skillGroup, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-white group-hover:text-gray-300 transition-colors">{skillGroup.icon}</div>
                  <h3 className="text-xl font-light text-white tracking-wide">{skillGroup.category}</h3>
                </div>
                <div className="space-y-3 pl-9">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-gray-400 hover:text-white transition-colors cursor-default font-sans border-l-2 border-transparent hover:border-gray-700 pl-4 py-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">Selected Works</h2>
            <div className="w-16 h-px bg-white mb-8"></div>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="group border-b border-gray-800 pb-16 last:border-b-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden bg-gray-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-3xl font-light text-white mb-4 tracking-wide">{project.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed font-sans text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 border border-gray-700 text-gray-300 text-sm font-sans tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-8">
                      <a
                        href={project.github}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-sans tracking-wide uppercase text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-sans tracking-wide uppercase text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">Get In Touch</h2>
            <div className="w-16 h-px bg-white mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl font-sans leading-relaxed">
              I'm always interested in discussing new opportunities and innovative projects. Let's connect and explore how we can
              collaborate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-4 p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="p-3 border border-gray-700 group-hover:border-gray-600 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white mb-1">Email</h3>
                    <p className="text-gray-400 font-sans">sinanshazz3107@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="p-3 border border-gray-700 group-hover:border-gray-600 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white mb-1">Phone</h3>
                    <p className="text-gray-400 font-sans">+91 9961376625</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="p-3 border border-gray-700 group-hover:border-gray-600 transition-colors">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white mb-1">India</h3>
                    <p className="text-gray-400 font-sans">Available Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 pt-8">
                <a
                  href="https://www.linkedin.com/in/mohd-sinan-279340326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-gray-800 hover:border-gray-600 hover:bg-gray-900 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://github.com/mohdsinan1"
                  className="p-4 border border-gray-800 hover:border-gray-600 hover:bg-gray-900 transition-all group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-500 font-sans tracking-wide">© 2024 Mohd Sinan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
