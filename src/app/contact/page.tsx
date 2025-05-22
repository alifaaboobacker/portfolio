'use client';

import React from "react";
// Removed react-icons imports

const ContactPage: React.FC = () => {
    // Removed animation variants as we're not using framer-motion
    
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Feel free to reach out for collaborations, opportunities, or just to say hello!
                        I&apos;m currently available for both remote and Dubai-based roles.
                    </p>
                </div>
                
                {/* Main Contact Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto transition-all duration-300 hover:shadow-2xl">
                    <div className="bg-gray-800 text-white p-8">
                        <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
                        <p className="text-gray-300">
                            Looking for a full-stack developer? I&apos;m currently open to new opportunities.
                        </p>
                    </div>
                    
                    <div className="p-8">
                        <div className="flex items-start mb-8 animate-fade-slide-up">
                            <div className="bg-gray-100 bg-opacity-10 p-3 rounded-full mr-4 flex items-center justify-center w-10 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                                <a href="mailto:alifaafi23@gmail.com" className="text-gray-700 hover:underline transition-colors">
                                    alifaafi23@gmail.com
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex items-start mb-8 animate-fade-slide-up">
                            <div className="bg-gray-100 bg-opacity-10 p-3 rounded-full mr-4 flex items-center justify-center w-10 h-10">
                                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">LinkedIn</h3>
                                <a 
                                    href="https://www.linkedin.com/in/alifa-aboobacker-9349211b0/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:underline transition-colors"
                                >
                                    Alifa Aboobacker
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex items-start mb-8 animate-fade-slide-up">
                            <div className="bg-gray-100 bg-opacity-10 p-3 rounded-full mr-4 flex items-center justify-center w-10 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">GitHub</h3>
                                <a 
                                    href="https://github.com/alifaaboobacker" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:underline transition-colors"
                                >
                                    @alifaaboobacker
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex items-start mb-8 animate-fade-slide-up">
                            <div className="bg-gray-100 bg-opacity-10 p-3 rounded-full mr-4 flex items-center justify-center w-10 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                                <p className="text-gray-600">Thrissur, Kerala, India</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 border-t border-gray-100">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Current Status</h3>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <p className="text-gray-700">
                                Available immediately for both remote and Dubai-based opportunities.
                                <span className="block mt-1 text-gray-600">
                                    Open to full-stack roles with focus on Node.js and Python frameworks.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Quick Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <a
                        href="https://github.com/alifaaboobacker" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-xl text-white flex items-center shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="bg-gray-300 bg-opacity-10 p-3 rounded-lg mr-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1">View Projects</h3>
                            <p className="text-gray-300">Check out my latest work</p>
                        </div>
                    </a>
                    
                    <a
                        href="mailto:alifaafi23@gmail.com?subject=Let's%20Connect"
                        className="bg-gradient-to-r from-gray-500 to-gray-600 p-6 rounded-xl text-white flex items-center shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="bg-gray-300 bg-opacity-10 p-3 rounded-lg mr-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1">Request Resume</h3>
                            <p className="text-white">Get my full CV via email</p>
                        </div>
                    </a>
                </div>
                
                <div className="mt-16 text-center animate-fade-in">
                    <div className="p-4 bg-white rounded-2xl shadow-lg inline-block">
                        <p className="text-gray-700 font-medium">
                            Looking forward to connecting with you!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;