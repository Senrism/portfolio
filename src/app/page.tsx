'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCode, FaServer, FaCloud, FaDatabase, FaMicrochip, FaRocket } from 'react-icons/fa';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaBootstrap, FaPhp, FaAngular, FaVuejs, FaLaravel,
  FaAws, FaDocker
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiDjango, SiMysql, SiPostgresql, SiMongodb,
  SiRedis
} from 'react-icons/si';
// Add SiGo for Golang icon and SiN8n for n8n automation if available
import { SiGo, SiN8N } from 'react-icons/si';

import Header from "./components/Header/Header";
import ContactForm from "./components/ContactForm/ContactForm";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#007ACC' },
    { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
    { name: 'Python', icon: FaPython, color: '#FFD43B' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Golang', icon: SiGo, color: '#00ADD8' }, // replaces Kubernetes
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'n8n Automation', icon: SiN8N, color: '#EF6537' }, // replaces GraphQL
  ];

  const experiences = [
    {
      title: 'System Architect',
      company: 'The One Retail',
      period: '2025 - Present',
      description: 'Designed and implemented merchandising system , ERP system , and POS system .',
      achievements: [
        'Developed robust ERP and inventory management systems for enterprise-level operations',
        'Integrated leading platforms such as Grab and Shopee for seamless omnichannel capabilities',
        'Designed and maintained scalable architecture for ERP, loyalty, and voucher systems to ensure long-term adaptability and high performance'
      ]
    },
    {
      title: 'Lead Software Engineer',
      company: 'Alturian Indonesia',
      period: '2022 - 2025',
      description: 'Leading a team of 20+ engineers, architecting scalable systems, and driving technical decisions for high-traffic applications.',
      achievements: [
        'Architected microservices infrastructure handling 10M+ requests/day',
        'Reduced system latency by 40% through optimization',
        'Developed a customized internal social media application for the company',
        'Developed loyalty and POS (point of sale) systems tailored to business needs',
        'Mentored over 20 engineers, promoting 4 of them to tech lead roles and strengthening the company\'s technical infrastructure'
      ]
    },
    {
      title: 'Senior Full Stack Developer',
      company: 'Alturian Indonesia',
      period: '2021 - 2022',
      description: 'Built end-to-end features, optimized performance, and contributed to architectural decisions.',
      achievements: [
        'Developed real-time features using WebSockets',
        'Improved application performance by 50%',
      ]
    }
  ];

  const projects = [
    {
      title: 'LPPD System',
      description: 'A high-level government application for mapping annual reports from regional heads to the central government',
      tech: ['Golang', 'Next.js', 'React', 'PostgreSQL', 'Redis'],
      image: '/lppd.png',
      link: 'https://lppd.kemendagri.go.id/',
      category: 'Enterprise'
    },
    {
      title: 'Erajaya Website',
      description: 'High-performance e-commerce platform with advanced search and recommendation engine',
      tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'AWS'],
      image: '/erajaya.png',
      link: 'https://erajaya.com/',
      category: 'E-commerce'
    },
    {
      title: 'Alqodiri Platform',
      description: 'Professional website built using WordPress and Elementor for seamless content management and elegant layouts',
      tech: ['WordPress', 'Elementor'],
      image: '/alqodiri.png',
      link: 'https://airalqodiri.com/',
      category: 'Web Platform'
    },
    {
      title: 'Razo Ateliar Tooth Clinic',
      description: 'A web application for clinics to manage reservations, patients, and employee payroll',
      tech: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
      image: '/razo.png',
      link: 'https://razootoothatelier.clinicrazo.cloud/',
      category: 'Clinic Web Platform'
    },
    {
      title: 'Simple HRIS',
      description: 'Human Resources Information System with employee management and payroll features',
      tech: ['React', 'Laravel', 'PostgreSQL', 'Redis'],
      image: '/simple-hris.png',
      link: 'https://github.com/Senrism/sample-hris',
      category: 'HRIS'
    },
    {
      title: 'Absenkeun',
      description: 'A smart attendance system featuring geolocation and selfie verification, integrated leave management, and available as a website, Android, and iOS app—now live on the Play Store and App Store.',
      tech: ['Laravel', 'Vue.js','MySQL', 'Capacitor', 'NativePHP', 'Ionic'],
      image: '/absenkeun.png',
      link: 'https://absenkeun.id/',
      category: 'Attendance System'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header activeSection={activeSection} />
      
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <motion.div 
          style={{ opacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Lead Software Engineer & System Architect
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
            >
              Mochamad Febry
              <br />
              Lasena Darmawan
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Building scalable systems and leading engineering teams to deliver exceptional software solutions
            </motion.p>
            
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
                  <a 
                    href="https://github.com/Senrism"
                    target="_blank" 
                    rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
                  </a>
                  <a 
                href="https://www.linkedin.com/in/febry-lasena-darmawan/"
                    target="_blank" 
                    rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
                  </a>
                  <a 
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-all duration-300 hover:scale-105"
              >
                <FaEnvelope className="text-xl" />
                <span>Get in Touch</span>
              </a>
              </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Engineering Leadership & Architecture</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
              I have taken on multiple roles within a company and its teams. Most of my responsibilities are closely related to application architecture design, program planning, team management, and—most importantly—hands-on coding. I remain highly active in continuously learning, reading, and implementing modern techniques and programming languages into both the systems I maintain and the new applications I develop.
              </p>
          
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <FaCode className="text-3xl text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Clean Code</h4>
                  <p className="text-sm text-gray-600">Maintainable & scalable</p>
              </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <FaServer className="text-3xl text-purple-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">System Design</h4>
                  <p className="text-sm text-gray-600">Scalable architecture</p>
              </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <FaCloud className="text-3xl text-pink-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Cloud Native</h4>
                  <p className="text-sm text-gray-600">AWS, GCP, Azure</p>
              </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <FaRocket className="text-3xl text-green-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Performance</h4>
                  <p className="text-sm text-gray-600">Optimized & fast</p>
              </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">System Availability</span>
                    <span className="font-bold text-green-600">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Performance Score</span>
                    <span className="font-bold text-blue-600">98/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Code Quality</span>
                    <span className="font-bold text-purple-600">95/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  </div>
                  </div>
            </motion.div>
                  </div>
                  </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
                  </div>
                  </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className="flex flex-col items-center gap-3">
                    <Icon className="text-4xl" style={{ color: skill.color }} />
                    <span className="text-sm font-semibold text-gray-700 text-center">{skill.name}</span>
                  </div>
                </motion.div>
              );
            })}
                  </div>
                  </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Showcasing impactful solutions built with modern technologies
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={`${project.title}-${tech}-${techIndex}`}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl mb-8 text-blue-100">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>
          
          <ContactForm />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a
              href="mailto:lasenafebry@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <FaEnvelope />
              <span>lasenafebry@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/febry-lasena-730b0b25a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p>&copy; {new Date().getFullYear()} Mochamad Febry Lasena Darmawan. All rights reserved.</p>
                </div>
      </footer>
    </main>
  );
}
