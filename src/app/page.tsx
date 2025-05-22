'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import type { JSX } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Server, MessageCircle } from "lucide-react";

// Type definitions
interface SkillItem {
  category: string;
  skill: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  achievement: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

interface SkillsData {
  [key: string]: string[];
}

// Props for components
interface LazyProps {
  children: React.ReactNode;
  threshold?: number;
}
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
  iconBg: string;
}

// Custom hook for intersection observer (lazy loading)
function useIntersectionObserver(options: IntersectionObserverInit = {}): [React.RefObject<HTMLDivElement | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
}

// Lazy loaded component
const LazySection: React.FC<LazyProps> = ({ children, threshold = 0.1 }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    rootMargin: '100px',
  });

  return (
    <div ref={ref} className="transition-opacity duration-1000 ease-in-out" style={{ opacity: isVisible ? 1 : 0 }}>
      {isVisible && children}
    </div>
  );
};

export default function Home(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  // All your skills categorized
  const skillsData: SkillsData = {
    Frontend: [
      'JavaScript (ES6+)',
      'React.js',
      'Next.js',
      'TypeScript',
      'HTML5, CSS3',
      'Responsive UI Design',
      'jQuery, AJAX',
      'Tailwind CSS'
    ],
    Backend: [
      'Python',
      'Django',
      'Flask',
      'FastAPI',
      'Node.js & Express.js',
      'REST API Development'
    ],
    Database: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Vector DB',
      'Graph DB'
    ],
    DevOps: [
      'Git & GitHub',
      'Docker',
      'AWS (S3, EC2)',
      'Linux & Shell scripting'
    ],
    'AI/ML': [
      'LangChain',
      'LLaMA2',
      'PySpark (Lightlake)'
    ],
    Tools: [
      'QuickSight',
      'Tableau',
      'Agile Development'
    ]
  };
  const projects: Project[] = [
    {
      id: 1,
      title: "Curebotz",
      description: "An intelligent healthcare chatbot integrated with WhatsApp using Rasa framework and OpenAI capabilities.",
      technologies: ["Rasa", "MongoDB", "Docker", "Twilio", "OpenAI API"],
      icon: <MessageCircle size={24} />,
      bgColor: "from-gray-100 to-gray-200",
      borderColor: "border-gray-200",
      iconBg: "bg-gray-100"
    },
    {
      id: 2,
      title: "Impatient360",
      description: "A comprehensive patient management system built with Django REST API and React for streamlined healthcare services.",
      technologies: ["Django REST", "React", "MySQL", "pytest"],
      icon: <Database size={24} />,
      bgColor: "from-gray-100 to-gray-200",
      borderColor: "border-gray-200",
      iconBg: "bg-gray-100"
    },
    {
      id: 3,
      title: "Scigenome",
      description: "A cloud-based genomic data analysis platform using AWS infrastructure with advanced ML capabilities.",
      technologies: ["AWS", "S3", "LLAMA 2", "Langchain", "PySpark"],
      icon: <Server size={24} />,
      bgColor: "from-gray-100 to-gray-200",
      borderColor: "border-gray-200",
      iconBg: "bg-gray-100"
    }
  ];
  // Education data from resume
  const educationData: EducationItem[] = [
    {
      degree: 'BTech Computer Science',
      institution: 'APJ Abdul Kalam Technological University, Kerala',
      period: 'Aug 2018 - Aug 2022',
      achievement: 'CGPA 8.84'
    },
    {
      degree: 'HSE',
      institution: 'Kerala State Board, Kerala',
      period: 'Aug 2016 - Aug 2018',
      achievement: 'Score 96%'
    }
  ];

  // Experience data from resume
  const experienceData: ExperienceItem[] = [
    {
      role: 'Software Engineer',
      company: 'UVJ Technologies',
      location: 'Trivandrum',
      period: 'Jun 2023 - Mar 2025',
      responsibilities: [
        'Designed, developed, and optimized scalable, high-performance web applications, ensuring efficient handling of dynamic content and high traffic.',
        'Developed and maintained RESTful APIs using Node.js, Django, and Flask, ensuring seamless integration with React, HTML5, CSS/Tailwind CSS, and JavaScript.',
        'Optimized web applications for speed, performance, and user experience, implementing best practices for code efficiency and load time reduction.',
        'Integrated APIs, databases (MySQL, PostgreSQL, MongoDB, Firebase), and third-party services, improving application functionality, scalability, and data consistency.'
      ]
    },
    {
      role: 'Dotnet Developer',
      company: 'Claysys',
      location: 'Kochi (Remote)',
      period: 'Jan 2023 - May 2023',
      responsibilities: [
        'Designed and developed APIs using the ASP.NET MVC framework, delivering backend functionality for seamless integration with the front-end interface.',
        'Built responsive, user-friendly front-end interfaces using HTML, CSS, JavaScript, and Bootstrap, ensuring a smooth experience across devices.',
        'Implemented efficient data exchange and communication between the backend APIs and frontend to ensure optimal performance and user interaction.',
        'Collaborated with team members to create a cohesive web application, enhancing user experience and usability.'
      ]
    }
  ];
  
  // Get all skills or filter by category
  const getFilteredSkills = (): SkillItem[] => {
    if (activeFilter === 'All') {
      return Object.entries(skillsData).flatMap(([category, skills]) => 
        skills.map(skill => ({ category, skill }))
      );
    }
    return skillsData[activeFilter]?.map(skill => ({
      category: activeFilter,
      skill,
    })) || [];
  }
  
  const filteredSkills = getFilteredSkills();
  
  return (
    <main className="min-h-screen">
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-800 font-medium">Loading portfolio...</p>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-b from-gray-50 to-white">
        {/* Left side content */}
        <motion.div 
          className="w-full md:w-3/5 mt-4 md:mt-0 mb-6 md:mb-0 text-left md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold mb-3 text-gray-800">
            <span className="block">Hello, I'm</span>
            <span className="text-gray-900 relative">
              Alifa Aboobacker
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 opacity-30"></span>
            </span>
          </h1>
          
          <h2 className="text-2xl text-gray-700 mb-4">Full Stack Developer</h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Welcome to my portfolio! I create modern, responsive web applications 
            with a focus on clean code and exceptional user experience.
            Feel free to ask my AI assistant any questions about my skills and experience.
          </p>
          
          <div className="flex gap-4">
            <Link 
              href="/projects" 
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-200 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors hover:shadow-md transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
        
        {/* Right side image - adjusted positioning */}
        <motion.div 
          className="w-full md:w-2/5 flex justify-center -mt-6 md:-mt-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            {/* Fixed image path - should start with / for Next.js */}
            <Image 
              src="/profile/alifa.png" 
              alt="Alifa Aboobacker" 
              width={320} 
              height={420} 
              priority
            />
            {/* Stylish background element - adjusted position */}
            <div className="absolute -z-10 top-6 right-6 w-64 h-64 rounded-full bg-gray-200 opacity-50 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Skills Section */}
      <LazySection>
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          
          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['All', ...Object.keys(skillsData)].map((filter, index) => (
              <motion.button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeFilter === filter 
                    ? 'bg-gray-800 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Skills Grid with animation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map(({ category, skill }, index) => (
              <motion.div 
                key={`${category}-${skill}`}
                className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.05 * index 
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" 
                }}
              >
                <div className="text-gray-500 text-xs uppercase mb-1">{category}</div>
                <div className="font-medium">{skill}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* Education Section */}
      <LazySection>
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Education
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                  <p className="text-gray-700 mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">{edu.period}</span>
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">{edu.achievement}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Experience Section */}
      <LazySection>
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional Experience
            </motion.h2>
            
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-gray-700">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-gray-600 text-sm mt-2 md:mt-0 md:ml-4 bg-gray-800 text-white px-3 py-1 rounded-full inline-block">{exp.period}</span>
                  </div>
                  
                  <motion.ul 
                    className="list-disc ml-5 space-y-2 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + 0.1 * index }}
                  >
                    {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + 0.1 * idx }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Featured Projects Preview */}
      <LazySection>
       <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={`bg-gradient-to-br ${project.bgColor} rounded-lg overflow-hidden shadow-md border ${project.borderColor} hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-6">
                <div className={`${project.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded-full text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/projects" 
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-md font-medium"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
      </LazySection>
    </main>
  );
}