// src/app/projects/[id]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
  technologies?: string[];
  year?: number;
}

// Sample projects data (in a real app, you'd likely fetch this from an API or database)
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product catalog, shopping cart, and payment processing using Stripe.",
    longDescription: "This comprehensive e-commerce platform was built to provide a seamless shopping experience. The application features a responsive design, user authentication, product filtering and search, shopping cart functionality, and secure checkout with Stripe integration. The admin panel allows for easy management of products, orders, and user accounts.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    imageUrl: "/projects/ecommerce-placeholder.jpg",
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-project",
    features: [
      "User authentication and profiles",
      "Product search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management"
    ],
    technologies: [
      "React.js for the frontend UI",
      "Redux for state management",
      "Node.js and Express for the backend API",
      "MongoDB for database storage",
      "JWT for authentication",
      "Stripe API for payment processing"
    ],
    year: 2023
  },
  // Add more projects with same structure...
  // For brevity, I'm only including one full example
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather application providing forecasts based on user location or search. Integrates with OpenWeatherMap API.",
    tags: ["JavaScript", "APIs", "CSS3", "HTML5"],
    imageUrl: "/projects/weather-placeholder.jpg",
    demoUrl: "https://weather-app.example.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    year: 2022
  },
  // Add more projects with at least id, title, description, tags, and imageUrl
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projects.find(p => p.id === projectId);
  
  // If project doesn't exist, show 404 page
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back to Projects Button */}
        <Link href="/projects" className="inline-flex items-center text-blue-600 mb-6 hover:underline">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to All Projects
        </Link>

        {/* Project Title */}
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        
        {/* Project Year */}
        {project.year && (
          <p className="text-gray-500 mb-6">Completed in {project.year}</p>
        )}

        {/* Project Image */}
        <div className="bg-white p-2 border rounded-lg shadow-md mb-8">
          <div className="aspect-video bg-gray-200 rounded relative">
            {/* Replace with actual image when available */}
            {/* <Image 
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover rounded"
            /> */}
            
            {/* Placeholder while you don't have images */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Project Screenshot
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mb-8">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Source Code
            </a>
          )}
        </div>

        {/* Project Description */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-6">{project.longDescription || project.description}</p>
          
          {/* Project Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Project Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-700">{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className="flex justify-between pt-6 border-t">
          {projectId > 1 && (
            <Link href={`/projects/${projectId - 1}`} className="text-blue-600 hover:underline">
              ← Previous Project
            </Link>
          )}
          {projectId < projects.length && (
            <Link href={`/projects/${projectId + 1}`} className="text-blue-600 hover:underline ml-auto">
              Next Project →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}