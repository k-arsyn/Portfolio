


import React, { useState } from 'react';
import { Github, Mail, Linkedin, Menu, X, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('github');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Bone.ai",
      description: "Developed a full-stack web application for automated X-ray fracture detection using a custom-trained ML model.",
      tech: ["SpringBoot", "React.js", "java"],
      github: "https://github.com/aristocrat71/Bone.ai",
    },
    {
      title: "Parking Lot Management System",
      description: "This C++ program simulates a Parking Area Management System. The system allows users to park, unpark, and search for cars based on various criteria such as registration number, parking slot, or car color.",
      tech: ["C++", "OOPs"],
      github: "https://github.com/k-arsyn/Parking_Lot_Management_/tree/main",
    },
    {
      title: "Game of Life",
      description: "This project is a simple implementation of Conway's Game of Life in C++. It simulates a 2D grid of cells that evolve according to specific rules over time. The grid supports different initial patterns, such as the Lightweight Spaceship (LWSS), Glider, and Penta Decathalon.",
      tech: ["C++", "OOPs"],
      github: "https://github.com/k-arsyn/Game_Of_Life/tree/main",
    },
  ];

  const socialLinks = {
    github: {
      command: 'git checkout k-arsyn',
      url: 'https://github.com/k-arsyn'
    },
    linkedin: {
      command: 'connect --user "Kartikeya Singh"',
      url: 'https://www.linkedin.com/in/singhkartikeya28/'
    },
    leetcode: {
      command: "view --u k-arsyn28",
      url: "https://www.leetcode.com/u/k-arsyn28/"
    },
    codechef: {
      command: "view --u kartikey_sen",
      url: "https://www.codechef.com/users/kartikeya28_12"
    },
    codeforces: {
      command: "view --cp kartikey_sen",
      url: "https://codeforces.com/profile/kartikeya_sen"
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-purple-400">

            <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="text-xl font-bold text-purple-400">KS</a>
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="nav-link">Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link">About</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="nav-link">Projects</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="nav-link">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-b border-gray-800">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block px-3 py-2 nav-link">About</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block px-3 py-2 nav-link">Projects</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block px-3 py-2 nav-link">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id = "hero" className="min-h-screen flex items-center justify-center px-4 bg-gray-900">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-300">Hi there, This is </span>
              <span className="animated-name">Kartikeya Singh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12">
            A Computer Science student at IIIT Tiruchirappalli, exploring tech and innovation.
            </p>

            {/* Code-themed Social Links */}
            <div className="max-w-2xl mx-auto bg-gray-800/90 rounded-lg overflow-hidden shadow-xl border border-gray-700">
              {/* Tabs */}
              <div className="flex border-b border-gray-700">
                <button
                  onClick={() => setActiveTab('github')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'github'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Github
                </button>
                <button
                  onClick={() => setActiveTab('linkedin')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'linkedin'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  LinkedIn
                </button>

                <button
                  onClick={() => setActiveTab('leetcode')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'leetcode'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  LeetCode
                </button>

                <button
                  onClick={() => setActiveTab('codechef')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'codechef'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Codechef
                </button>

                <button
                  onClick={() => setActiveTab('codeforces')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'codeforces'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Codeforces
                </button>
              </div>

              {/* Command Interface */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-gray-300 font-mono">
                    {/* {activeTab === 'github' ? socialLinks.github.command : socialLinks.linkedin.command} */
                    socialLinks[activeTab].command
                    }
                  </span>
                </div>
                <a
                  href={socialLinks[activeTab].url}

                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Run</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://res.cloudinary.com/dtchcrwn9/image/upload/noice_posail.jpg


"
                alt="Coding workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student at IIIT Tiruchirappalli, with a keen interest in Competitive programming and development.
              I enjoy tackling complex problems and building innovative solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-10">
                When I'm not coding, you'll often find me exploring new technologies, exploring new places, engaging in sports, or diving into gaming.
                I believe in the power of technology to create positive change and am always 
                eager to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300"
                >
                  <Github size={20} className="mr-2" />
                  View Source
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:sengarkartikeya028@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} className="mr-2" />
                Send me an email
              </a>
              <a 
                href="https://linkedin.com/in/singhkartikeya28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} className="mr-2" />
                Connect on LinkedIn
              </a>
            </div>
            <br></br>
            <p className="text-lg text-gray-300 mb-8">
              Email: sengarkartikeya028@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Made with ❤️ by Kartikeya Singh © 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;