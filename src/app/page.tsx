'use client'
import "./style.css";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import React, { useEffect, useRef, useState} from 'react';
import {
  motion,
} from "framer-motion";
import Header from "./components/Header/Header";
import FloatingWhatsappButton from "./components/FloatingWhatsappButton/FloatingWhatsappButton";
import TypewriterEffect from 'typewriter-effect';
import gsap from 'gsap';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaBootstrap, FaPhp, FaAngular, FaVuejs, FaLaravel } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiDjango, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { SiAntdesign } from 'react-icons/si';
import Image from "next/image";

export default function Home() {

  let isOpen = false;
  const containerRef = useRef(null);
  let verticalLines : any = '';
  let horizontalLines : any = '';
  let verticalDivs : any = '';
  let horizontalDivs : any = '';


  const [projectSectionOpened, setProjectSectionOpened] = useState('All');

  const handleScroll = (event: any) => {
    const container : any = containerRef.current;
    if (container) {
      const delta = event.deltaY; // Detect vertical scroll movement
      container.scrollLeft += delta; // Translate vertical scroll to horizontal scroll
    }
  };

  useEffect(() => {
    verticalLines = document.querySelectorAll('.vertical-line');
    horizontalLines = document.querySelectorAll('.horizontal-line');
    verticalDivs = document.querySelectorAll('.vertical-line div');
    horizontalDivs = document.querySelectorAll('.horizontal-line div');
  });

  const interactSkills = () => {
    gsap.to(".skills-interact-white", { left: '50%', duration: 0.2 });
    gsap.to(".text-skills", { color: '#000000', duration: 0.2 });
  }

  const unInteractSkills = () => {
    gsap.to(".skills-interact-white", { left: '-60%', duration: 0.2 });
    gsap.to(".text-skills", { color: '#FFFFFF', duration: 0.2 });
  }

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const openSkillTree = debounce(() => {
    isOpen = !isOpen;
    
    verticalDivs.forEach((div: any, index: any) => {
      if (isOpen) {
        gsap.to(div, { height: '100vh', duration: 0.5, delay: index * 0.1 });
      } else {
        gsap.to(div, { height: '0vh', duration: 0.5, delay: index * 0.1 });
      }
    });

    horizontalDivs.forEach((div: any, index: any) => {
      if (isOpen) {
        gsap.to(div, { width: '100vw', duration: 0.5, delay: index * 0.1 });
      } else {
        gsap.to(div, { width: '0vw', duration: 0.5, delay: index * 0.1 });
      }
    });

    if(isOpen) {
      // gsap.fromTo(".overlay", { opacity: 0 }, { opacity: 1, duration: 0.5 });
      // gsap.to(".header-sect", { color: '#FFFFFF', duration: 0.5 });
      gsap.to(".discover-text", { opacity: 0, duration: 0.5 });
      gsap.to(".round-0", { width: '700px', height: '700px', border: '1px solid #000000', duration: 0.5 });
      gsap.to(".round-1", { width: '600px', height: '600px', border: '1px solid #000000', duration: 0.5 });
      gsap.to(".round-2", { width: '500px', height: '500px', border: '1px solid #000000', duration: 0.5 });
      gsap.to(".round-3", { width: '400px', height: '400px', border: '1px solid #000000', duration: 0.5 });
      gsap.to(".round-4", { width: '300px', height: '300px', border: '1px solid #000000', duration: 0.5 });
      gsap.to(".round-1-1", { width: '50px', height: '50px', duration: 0.5, delay: 0.1 }).then(() => {
        gsap.fromTo(".round-1-1", 
          { y: 0 }, 
          { y: -10, duration: 2, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-2", { width: '50px', height: '50px', duration: 0.6, delay: 0.2 }).then(() => {
        gsap.fromTo(".round-1-2", 
          { y: 0 }, 
          { y: -10, duration: 2.1, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-3", { width: '50px', height: '50px', duration: 0.7, delay: 0.3 }).then(() => {
        gsap.fromTo(".round-1-3", 
          { y: 0 }, 
          { y: -10, duration: 2.2, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-4", { width: '50px', height: '50px', duration: 0.8, delay: 0.4 }).then(() => {
        gsap.fromTo(".round-1-4", 
          { y: 0 }, 
          { y: -10, duration: 2.3, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-5", { width: '50px', height: '50px', duration: 0.9, delay: 0.5 }).then(() => {
        gsap.fromTo(".round-1-5", 
          { y: 0 }, 
          { y: -10, duration: 2.4, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-6", { width: '50px', height: '50px', duration: 1.0, delay: 0.6 }).then(() => {
        gsap.fromTo(".round-1-6", 
          { y: 0 }, 
          { y: -10, duration: 2.5, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-7", { width: '50px', height: '50px', duration: 0.9, delay: 0.5 }).then(() => {
        gsap.fromTo(".round-1-7", 
          { y: 0 }, 
          { y: -10, duration: 2.6, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-8", { width: '50px', height: '50px', duration: 0.9, delay: 0.5 }).then(() => {
        gsap.fromTo(".round-1-8", 
          { y: 0 }, 
          { y: -10, duration: 2.7, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-9", { width: '50px', height: '50px', duration: 0.9, delay: 0.5 }).then(() => {
        gsap.fromTo(".round-1-9", 
          { y: 0 }, 
          { y: -10, duration: 2.8, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-10", { width: '50px', height: '50px', duration: 0.9 , delay: 0.5 }).then(() => {
        gsap.fromTo(".round-1-10", 
          { y: 0 }, 
          { y: -10, duration: 2.9, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-11", { width: '50px', height: '50px', duration: 0.8, delay: 0.4 }).then(() => {
        gsap.fromTo(".round-1-11", 
          { y: 0 }, 
          { y: -10, duration: 3.0, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-12", { width: '50px', height: '50px', duration: 0.8, delay: 0.4 }).then(() => {
        gsap.fromTo(".round-1-12", 
          { y: 0 }, 
          { y: -10, duration: 3.1, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-13", { width: '50px', height: '50px', duration: 0.8, delay: 0.4 }).then(() => {
        gsap.fromTo(".round-1-13", 
          { y: 0 }, 
          { y: -10, duration: 3.2, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-14", { width: '50px', height: '50px', duration: 0.7, delay: 0.3 }).then(() => {
        gsap.fromTo(".round-1-14", 
          { y: 0 }, 
          { y: -10, duration: 3.3, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-15", { width: '50px', height: '50px', duration: 0.7, delay: 0.3 }).then(() => {
        gsap.fromTo(".round-1-15", 
          { y: 0 }, 
          { y: -10, duration: 3.4, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-16", { width: '50px', height: '50px', duration: 0.7, delay: 0.3 }).then(() => {
        gsap.fromTo(".round-1-16", 
          { y: 0 }, 
          { y: -10, duration: 3.5, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-17", { width: '50px', height: '50px', duration: 0.6, delay: 0.2 }).then(() => {
        gsap.fromTo(".round-1-17", 
          { y: 0 }, 
          { y: -10, duration: 3.6, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-18", { width: '50px', height: '50px', duration: 0.6, delay: 0.2 }).then(() => {
        gsap.fromTo(".round-1-18", 
          { y: 0 }, 
          { y: -10, duration: 3.7, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.to(".round-1-19", { width: '50px', height: '50px', duration: 0.5, delay: 0.1 }).then(() => {
        gsap.fromTo(".round-1-19", 
          { y: 0 }, 
          { y: -10, duration: 3.8, ease: 'power1.inOut', repeat: -1, yoyo: true }
        );
      });
      gsap.fromTo(".bullet-1", 
        { top: '0px', opacity: 1, display: 'block' }, 
        { top: '100%', opacity: 1, duration: 10, repeat: -1, yoyo: true }
      );
      gsap.fromTo(".bullet-2", 
        { top: '0px', opacity: 1, display: 'block' }, 
        { top: '100%', opacity: 1, duration: 5, repeat: -1, yoyo: true }
      );
      gsap.fromTo(".bullet-3", 
        { top: '0px', opacity: 1, display: 'block' }, 
        { top: '100%', opacity: 1, duration: 8, repeat: -1, yoyo: true }
      );
      gsap.fromTo(".bullet-4", 
        { top: '0px', opacity: 1, display: 'block' }, 
        { top: '100%', opacity: 1, duration: 6, repeat: -1, yoyo: true }
      );
    } else {
      // gsap.to(".overlay", { opacity: 0, duration: 0.5 });
      gsap.to(".header-sect", { color: '#000000', duration: 0.5 });
      gsap.to(".discover-text", { opacity: 1, duration: 0.5 });
      gsap.to(".round-0", { width: '0px', height: '0px', border: '0px', duration: 0.5 });
      gsap.to(".round-1", { width: '0px', height: '0px', border: '0px', duration: 0.5 });
      gsap.to(".round-2", { width: '0px', height: '0px', border: '0px', duration: 0.5 });
      gsap.to(".round-3", { width: '0px', height: '0px', border: '0px', duration: 0.5 });
      gsap.to(".round-4", { width: '0px', height: '0px', border: '0px', duration: 0.5 });
      gsap.to(".round-5", { width: '0px', height: '0px', border: '0px', duration: 0.5 });
      gsap.to(".round-1-1", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-2", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-3", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-4", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-5", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-6", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-7", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-8", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-9", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-10", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-11", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-12", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-13", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-14", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-15", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-16", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-17", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-18", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".round-1-19", { width: '0px', height: '0px', duration: 0.5 });
      gsap.to(".bullet-1", { display: 'none', duration: 0.5 });
      gsap.to(".bullet-2", { display: 'none', duration: 0.5 });
      gsap.to(".bullet-3", { display: 'none', duration: 0.5 });
      gsap.to(".bullet-4", { display: 'none', duration: 0.5 });
    }
  }, 300); // Adjust the debounce delay as needed

  return (
    <>
      <Header />
      <FloatingWhatsappButton />
      <div 
          className="flex item-main" 
          style={{ flexWrap: 'nowrap', overflowX: 'auto', width: '100vw', height: '100vh' }} 
          ref={containerRef}
          onWheel={handleScroll}>

          {/* First Hero Section */}
          <div id="home" className="hero relative" style={{ flexShrink: 0, width: '100vw', height: '100vh' }}>
            <div className="content w-full h-full relative">
              <motion.div
                className="flex flex-col gap-2 p-10"
                initial={{ opacity: 0, x: -50, y: -50 }}
                animate={{ opacity: 1, y: 0, top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute' }}
              >
                <h4 className="text-[#000000] text-[25px]">Hi, I'm</h4>
                <h1 className="text-[50px] text-[#000000] font-bold">Febry Lasena</h1>
                <div className="flex gap-4 mt-4">
                  <a 
                    href="https://github.com/Senrism"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <FaGithub size={30} color="black" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <img src="github.png" alt="Github Preview" className="w-full h-auto" />
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/febry-lasena-730b0b25a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <FaLinkedin size={30} color="black" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <img src="linked.png" alt="LinkedIn Preview" className="w-full h-auto" />
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/febry-lasena-730b0b25a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <FaInstagram size={30} color="black" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <img src="ig.png" alt="Instagram Preview" className="w-full h-auto" />
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="typewriter absolute right-[200px] top-[350px] text-black font-barlow font-bold text-[50px]">
              <TypewriterEffect
                options={{
                  strings: ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div>
              <div 
                className="arrow-sign absolute top-[370px] right-[100px] cursor-pointer"
                onClick={() => {
                  const nextHero = document.querySelectorAll('.hero')[1];
                  if (nextHero) {
                    nextHero.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-black animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Second Hero Section */}
          <div id="skills" className="hero hero-color-two relative" style={{ flexShrink: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
                
            <div className="overlay w-full h-full absolute top-[0px] left-[0px] bg-[#000000] opacity-0">
            </div>

            <div className="flex justify-around w-full h-full vertical-line absolute top-[0px] z-[2]">
              <div className="w-[1px] h-[0vh] bg-[#000000] relative">
                <span className="bullet-1 top-[20px] left-[-5px] absolute w-[10px] h-[10px] bg-[#000000] rounded-full opacity-0"></span>
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000]">
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000]">
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000]">
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000] relative">
                <span className="bullet-2 top-[20px] left-[-5px] absolute w-[10px] h-[10px] bg-[#000000] rounded-full opacity-0"></span>
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000]">
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000] relative">
                <span className="bullet-3 top-[20px] left-[-5px] absolute w-[10px] h-[10px] bg-[#000000] rounded-full opacity-0"></span>
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000]">
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000]">
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000]">
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000]">
              </div>
              <div className="w-[1px] h-[0vh] bg-[#000000] relative">
                <span className="bullet-4 top-[20px] left-[-5px] absolute w-[10px] h-[10px] bg-[#000000] rounded-full opacity-0"></span>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 w-full h-full horizontal-line absolute top-[0px] z-[2]">
              <div className="w-[0vw] h-[1px] bg-[#000000] absolute top-[100px]">
              </div>
              <div className="w-[0vw] h-[1px] bg-[#000000] absolute top-[200px]">
              </div>
              <div className="w-[0vw] h-[1px] bg-[#000000] absolute top-[300px]">
              </div>
              <div className="w-[0vw] h-[1px] bg-[#000000] absolute top-[400px]">
              </div>
              <div className="w-[0vw] h-[1px] bg-[#000000] absolute top-[500px]">
              </div>
              <div className="w-[0vw] h-[1px] bg-[#000000] absolute top-[600px]">
              </div>
              <div className="w-[0vw] h-[1px] bg-[#000000] absolute top-[700px]">
              </div>
              <div className="w-[0vw] h-[1px] bg-[#000000] absolute top-[800px]">
              </div>
            </div>
            <div className="flex justify-center items-center h-full w-full z-[2]">
              <div className="round-0 border-[0px] border-[#FFFFFF] w-[0px] h-[0px] relative rounded-full z-[5]">
                <div className="round-1 border-[0px] border-[#FFFFFF] w-[0px] h-[0px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full z-[2]">
                  <div className="flex justify-center items-center round-1-1 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[30px] top-[20px]">
                    <FaReact size={30} color="#61DAFB" />
                  </div>
                  <div className="flex justify-center items-center round-1-2 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[130px] top-[20px]">
                    <FaHtml5 size={30} color="#E34F26" />
                  </div>
                  <div className="flex justify-center items-center round-1-3 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[230px] top-[40px]">
                    <FaCss3Alt size={30} color="#1572B6" />
                  </div>
                  <div className="flex justify-center items-center round-1-4 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[30px] top-[60px]">
                    <FaJs size={30} color="#F7DF1E" />
                  </div>
                  <div className="flex justify-center items-center round-1-5 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[130px] top-[80px]">
                    <FaNodeJs size={30} color="#68A063" />
                  </div>
                  <div className="flex justify-center items-center round-1-6 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[400px] top-[100px]">
                    <SiNextdotjs size={30} color="#000000" />
                  </div>
                  <div className="flex justify-center items-center round-1-7 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[450px] top-[-100px]">
                    <SiTailwindcss size={30} color="#000000" />
                  </div>
                  <div className="flex justify-center items-center round-1-8 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[500px] top-[120px]">
                    <SiTypescript size={30} color="#007ACC" />
                  </div>
                  <div className="flex justify-center items-center round-1-9 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[520px] top-[-300px]">
                    <FaPhp size={30} color="#4F5BD5" />
                  </div>
                  <div className="flex justify-center items-center round-1-10 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[620px] top-[-200px]">
                    <FaLaravel size={30} color="#FF2D20" />
                  </div>
                  <div className="flex justify-center items-center round-1-11 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[60px] top-[-100px]">
                    <FaPython size={30} color="#FFD43B" />
                  </div>
                  <div className="flex justify-center items-center round-1-12 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[30px] top-[-20px]">
                    <FaBootstrap size={30} color="#563D7C" />
                  </div>
                  <div className="flex justify-center items-center round-1-13 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[230px] top-[-30px]">
                    <FaAngular size={30} color="#DD0031" />
                  </div>
                  <div className="flex justify-center items-center round-1-14 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[300px] top-[-25px]">
                    <FaVuejs size={30} color="#4FC08D" />
                  </div>
                  <div className="flex justify-center items-center round-1-15 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[-70px] top-[-420px]">
                    <SiAntdesign size={30} color="#000000" />
                  </div>
                  <div className="flex justify-center items-center round-1-16 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[-15px] top-[-400px]">
                    <SiDjango size={30} color="#092E20" />
                  </div>
                  <div className="flex justify-center items-center round-1-17 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[400px] top-[-800px]">
                    <SiMysql size={30} color="#000000" />
                  </div>
                  <div className="flex justify-center items-center round-1-18 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[300px] top-[-920px]">
                    <SiPostgresql size={30} color="#000000" />
                  </div>
                  <div className="flex justify-center items-center round-1-19 bg-[#FFFFFF] rounded-full w-[0px] h-[0px] relative left-[250px] top-[-830px]">
                    <SiMongodb size={30} color="#000000" />
                  </div>
                </div>
                <div className="round-2 border-[0px] border-[#FFFFFF] w-[0px] h-[0px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full">
                </div>
                <div className="round-3 border-[0px] border-[#FFFFFF] w-[0px] h-[0px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full">
                </div>
                <div className="round-4 border-[0px] border-[#FFFFFF] w-[0px] h-[0px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full">
                </div>
                <div className="round-5 border-[0px] border-[#FFFFFF] w-[0px] h-[0px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full">
                </div>
                <div onClick={openSkillTree}  className="skills-interact flex justify-center items-center border-[1px] bg-[#000000] w-[100px] h-[100px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-full overflow-hidden">
                  <div onClick={openSkillTree} className="skills-interact-white flex justify-center items-center border-[1px] bg-[#FFFFFF] w-[100px] h-[100px] absolute top-[50%] left-[-60%] transform -translate-x-[50%] -translate-y-[50%] rounded-full z-[2]">
                  </div>
                </div>
                <span onMouseEnter={interactSkills} onMouseLeave={unInteractSkills} onClick={openSkillTree} className="text-skills text-[#FFFFFF] text-[20px] font-barlow tracking-wider absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-10 cursor-pointer">SKILLS</span>
              </div>
              <small style={{letterSpacing:'2px'}} className="discover-text text-[#000000] text-[10px] font-barlow tracking-wider absolute top-[60%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-10 cursor-pointer">
                CLICK TO DISCOVER
              </small>
            </div>

          </div>
          
          <div id="projects" className="hero hero-color-two relative p-20" style={{ flexShrink: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <p className="text-[#000000] text-[35px] font-extrabold font-barlow tracking-wider absolute top-[10%] z-10 cursor-pointer">
              PROJECTS
            </p>
            <div className="mt-[80px] flex items-center gap-[10px]">
              <div onClick={() => setProjectSectionOpened('All')}>
                <p className={`menu-item ${projectSectionOpened === 'All' ? 'active' : ''} font-bold text-[15px] font-barlow tracking-wider cursor-pointer`}>
                  All
                </p>
              </div>
              <div onClick={() => setProjectSectionOpened('Complete')}>
                <p className={`menu-item ${projectSectionOpened === 'Complete' ? 'active' : ''} font-bold text-[15px] font-barlow tracking-wider cursor-pointer`}>
                  Client Project
                </p>
              </div>
              <div onClick={() => setProjectSectionOpened('On Going')}>
                <p className={`menu-item ${projectSectionOpened === 'On Going' ? 'active' : ''} font-bold text-[15px] font-barlow tracking-wider cursor-pointer`}>
                  Self Project
                </p>
              </div>
            </div>

            <div className="project-list mt-[50px] flex items-center gap-[20px] flex-wrap">

              {(projectSectionOpened === 'Complete' || projectSectionOpened === 'All') && 
                <div>
                  <div
                    className="squared cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    style={{
                      background: `url("lppd.png") center/contain no-repeat`,
                    }}
                    onClick={() => window.open("https://lppd.kemendagri.go.id/", "_blank")}
                  ></div>
                  <p className="text-[#000000] text-[12px] font-medium font-barlow tracking-wider">LPPD (Laporan Pencatatan Pegawai Dalam Negeri)</p>
                </div>
              }
              
              {(projectSectionOpened === 'Complete' || projectSectionOpened === 'All') && 
                <div>
                  <div
                    className="squared cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    style={{
                      background: `url("erajaya.png") center/contain no-repeat`,
                    }}
                    onClick={() => window.open("https://erajaya.com/", "_blank")}
                  ></div>
                  <p className="text-[#000000] text-[12px] font-medium font-barlow tracking-wider">Erajaya Website</p>
                </div>
              }
              
              {(projectSectionOpened === 'Complete' || projectSectionOpened === 'All') && 
                <div>
                  <div
                    className="squared cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    style={{
                      background: `url("alqodiri.png") center/contain no-repeat`,
                    }}
                    onClick={() => window.open("https://airalqodiri.com/", "_blank")}
                  ></div>
                  <p className="text-[#000000] text-[12px] font-medium font-barlow tracking-wider">Alqodiri Website</p>
                </div>
              }
              
              {(projectSectionOpened === 'On Going' || projectSectionOpened === 'All') && 
                <div>
                  <div
                    className="squared cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    style={{
                      background: `url("simple-hris.png") center/contain no-repeat`,
                    }}
                    onClick={() => window.open("https://github.com/Senrism/sample-hris", "_blank")}
                  ></div>
                  <p className="text-[#000000] text-[12px] font-medium font-barlow tracking-wider">Simple HRIS</p>
                </div>
              }
            </div>
          </div>
      </div>
    </>
  );
}
