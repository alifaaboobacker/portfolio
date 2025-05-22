import React from 'react';
import { ExternalLink, Code, Award, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'Curebotz',
        description: 'AI-driven healthcare chatbot with dynamic questionnaire system using NLP for intelligent responses. Integrated with WhatsApp via Twilio and OpenAI API for advanced natural language processing.',
        technologies: ['Node.js', 'React.js', 'Python (Flask api)', 'Rasa Framework', 'Docker', 'MongoDB', 'Twilio', 'OpenAI API'],
        achievements: 'In the Curebotz project, I was responsible for both frontend development and backend optimization with AI integration. I developed the frontend using React, ensuring a responsive and user-friendly interface that enhanced the overall user experience. On the backend, I designed and implemented a customized AI-driven questionnaire system powered by Natural Language Processing (NLP) to generate dynamic, context-aware responses. I integrated the OpenAI API to further enhance the intelligence and interactivity of the platform. Additionally, I dockerized the application to streamline deployment and ensure scalability across environments. My contributions also included optimizing backend performance and API integrations, resulting in seamless data processing and high system availability.',
        link: 'https://curebotz.com/',
        category: 'Healthcare AI',
        status: 'Live'
    },
    {
        title: 'Inpatient360',
        description: 'Hospital maintenance system with robust backend functionality and dynamic, responsive frontend interfaces.',
        technologies: ['Django REST API', 'React', 'MySQL', 'pytest','Docker', 'Celery', 'Redis'],
        achievements: 'In the Inpatient360 project, I was primarily responsible for backend and frontend development. I built a robust backend using Django REST Framework to create scalable and secure APIs that handled patient and hospital data management. On the frontend, I developed the interface using React, ensuring a responsive and intuitive user experience for healthcare professionals. I integrated the backend APIs seamlessly with the frontend, enabling real-time data access and updates. Additionally, I used MySQL as the database for structured data storage and wrote unit and integration tests using Pytest to ensure reliability and maintainability of the application.',
        link: 'https://inpatient360.com/signin',
        category: 'Healthcare Management',
        status: 'Live'
    },
    {
        title: 'Scigenome',
        description: 'Genomic data processing platform with advanced data storage, machine learning capabilities, and visualization tools.',
        technologies: ['AWS (S3, Security)', 'Deltalake', 'LLAMA 2', 'LangChain', 'Vector DB', 'Graph DB', 'Lightlake (PySpark)', 'QuickSights', 'Python'],
        achievements: 'In the Scigenome project, my primary responsibility was creating and integrating backend APIs to support genomic and biomedical data workflows. I developed RESTful APIs to enable efficient communication between the data processing backend and the user-facing components. While the core data engineering and AI model implementation were handled by other team members, I actively collaborated with them to understand data flow requirements and ensure smooth API integration. I also assisted in testing, debugging, and maintaining the API endpoints to ensure reliable performance within the overall system architecture.',
        category: 'Data Science',
        status: 'Development'
    },
    {
        title: 'Umembership',
        description: 'Organization management application with user management, transactional operations, and secure payment gateway integration.',
        technologies: ['Flask API', 'Node.js', 'HTML/CSS/JavaScript', 'jQuery/AJAX', 'MySQL','Bootstrap'],
        achievements: 'In the Umembership project, I was responsible for both frontend and backend development. I built RESTful APIs using Flask to handle user authentication, membership management, and payment processing. On the frontend, I used HTML, CSS, JavaScript, and jQuery with AJAX to create an interactive and responsive user interface. I ensured smooth integration between the frontend and backend, enabling real-time interactions and a seamless user experience. Additionally, I implemented payment gateway integration and worked on optimizing the application for responsiveness across different devices.',
        category: 'Management System',
        status: 'Completed'
    },
    {
        title: 'Sensei System',
        description: 'Sales support platform with four AI digital humans providing analysis and feedback to help salespeople improve pitches based on client rejections.',
        technologies: ['Flask API', 'React with Vite', 'PostgreSQL','Tailwind CSS','Numpy','Pandas'],
        achievements: 'In the Sensei System project, I worked as a Full Stack Developer, responsible for developing both the frontend and backend of the application, excluding the AI module. I built the backend using Flask, implementing secure and scalable RESTful APIs to manage user authentication, role-based access, course content, and performance tracking. For the frontend, I used React with Vite and styled the interface using Tailwind CSS to create a fast, responsive, and modern user experience. I ensured seamless integration between the frontend and backend, optimized performance, and actively contributed to testing, debugging, and deploying the application in a scalable environment.',
        category: 'AI Sales Tool',
        status: 'Development'
    }
];

const ProjectsPage: React.FC = () => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Live': return 'bg-green-100 text-green-800';
            case 'Development': return 'bg-gray-200 text-gray-800';
            case 'Completed': return 'bg-gray-100 text-gray-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            My Projects
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Exploring innovation through code, AI, and elegant solutions
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="grid gap-8">
                    {projects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            {/* Project Header */}
                            <div className="bg-gray-800 text-white p-8">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h2 className="text-2xl font-bold">
                                                {project.title}
                                            </h2>
                                            {project.link && (
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                                                    title="Visit Project"
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                            <span className="px-3 py-1 rounded bg-gray-200 text-gray-800 text-sm font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300 mt-4">
                                    {project.description}
                                </p>
                            </div>

                            <div className="p-8">
                                {/* Technologies */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Code size={18} className="text-gray-600" />
                                        <h3 className="text-lg font-semibold text-gray-800">Technologies</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIdx) => (
                                            <span 
                                                key={techIdx} 
                                                className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Achievement */}
                                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-gray-800">
                                    <div className="flex items-start gap-3">
                                        <Award size={20} className="text-gray-800 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Contribution</h3>
                                            <p className="text-gray-700 leading-relaxed">{project.achievements}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Link */}
                                {project.link && (
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg group"
                                        >
                                            Visit Project
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-white border-t border-gray-100 py-16">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Ready to collaborate on your next project?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Let&apos;s build something amazing together
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Get In Touch
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;