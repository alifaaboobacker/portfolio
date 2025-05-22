import React from 'react';
import { User, GraduationCap, Code, MapPin, Calendar, Award, Briefcase } from 'lucide-react';

const AboutPage: React.FC = () => {
    const skills = [
        {
            category: 'Programming Languages',
            items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C#', 'C++'],
            icon: Code
        },
        {
            category: 'Frontend',
            items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
            icon: Code
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Express.js', 'NestJS', 'Django', 'Flask', 'FastAPI'],
            icon: Code
        },
        {
            category: 'Databases',
            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
            icon: Code
        },
        {
            category: 'DevOps & Cloud',
            items: ['AWS', 'Docker', 'CI/CD', 'Git', 'Vercel', 'Netlify'],
            icon: Code
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            About Me
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Full Stack Software Engineer passionate about building scalable solutions
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-16">
                {/* Introduction Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div className="bg-gray-800 text-white p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-gray-700 p-3 rounded-full">
                                <User size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">Hello, I&apos;m Alifa Aboobacker</h2>
                        </div>
                        <p className="text-gray-300">
                            Full Stack Software Engineer with over 2 years of experience
                        </p>
                    </div>
                    
                    <div className="p-8 space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                            I&apos;m a Full Stack Software Engineer based in Thrissur, Kerala, India with over 2 years of experience in developing scalable, high-performance web applications. I&apos;m passionate about creating elegant solutions to complex problems.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                            I specialize in both backend and frontend development, with extensive hands-on experience in Node.js, Express.js, Python (Django, Flask, FastAPI), and React. My focus is on building secure, efficient RESTful APIs and microservices for production-ready applications.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                            I&apos;m well-versed in SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases for optimized data handling and seamless integration. I have experience in deploying applications using Docker and AWS (EC2, S3, RDS, Lambda), alongside implementing CI/CD pipelines (GitHub Actions, GitLab CI/CD) for automated and scalable deployments.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                            My work approach involves Agile methodologies (Scrum, JIRA), cross-functional collaboration, and contributing to architectural design, performance tuning, and security best practices. I&apos;m passionate about writing clean, maintainable code with a focus on reliability.
                        </p>
                    </div>
                </div>

                {/* Education Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div className="bg-gray-800 text-white p-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-700 p-3 rounded-full">
                                <GraduationCap size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">Education</h2>
                        </div>
                    </div>
                    
                    <div className="p-8">
                        <div className="space-y-8">
                            <div className="border-l-4 border-gray-800 pl-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">B.Tech in Computer Science</h3>
                                <p className="text-gray-600 mb-1">APJ Abdul Kalam Technological University</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        <span>2018-2022</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Award size={16} />
                                        <span>CGPA: 8.84</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-l-4 border-gray-600 pl-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Higher Secondary Education</h3>
                                <p className="text-gray-600 mb-1">Kerala State Board</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        <span>2016-2018</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Award size={16} />
                                        <span>Score: 96%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div className="bg-gray-800 text-white p-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-700 p-3 rounded-full">
                                <Code size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">Technical Skills</h2>
                        </div>
                    </div>
                    
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Current Status */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gray-800 text-white p-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-700 p-3 rounded-full">
                                <Briefcase size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">Current Status</h2>
                        </div>
                    </div>
                    
                    <div className="p-8">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Available for Opportunities</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        I&apos;m currently open to both remote and Dubai-based opportunities and available to join immediately. I&apos;m looking for challenging roles where I can contribute my skills in full-stack development, particularly with Node.js and Python frameworks.
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <MapPin size={16} />
                                        <span>Thrissur, Kerala, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-white border-t border-gray-100 py-16">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Let&apos;s work together
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Ready to bring your ideas to life with clean, scalable code
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Get In Touch
                        <User size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;