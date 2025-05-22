// src/components/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Add scroll event listener to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-50 to-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="flex justify-between h-16">
          {/* Logo and site name */}
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800 hover:text-gray-900 transition-colors">
                Alifa Aboobacker
              </span>
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/' 
                  ? 'text-gray-800 bg-gray-200' 
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-gray-800 bg-gray-200' 
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/projects') 
                  ? 'text-gray-800 bg-gray-200' 
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-gray-800 bg-gray-200' 
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-800 hover:bg-gray-200 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                pathname === '/' 
                  ? 'text-gray-800 bg-gray-200' 
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-gray-800 bg-gray-200' 
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                isActive('/projects') 
                  ? 'text-gray-800 bg-gray-200' 
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-gray-800 bg-gray-200' 
                  : 'text-gray-700 hover:text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}