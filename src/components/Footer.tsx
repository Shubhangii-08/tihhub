'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
  // Scroll-to-top button visibility state
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-100 pt-6 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-6">
            {/* Address & TIH Logo */}
            <div className="flex-1 space-y-4 text-gray-700 min-w-[200px]">
              <div className="flex justify-center md:justify-start mb-3">
                <Image
                  src="/image/Footer_Logo.webp"
                  alt="iHub Drishti Logo"
                  width={130}
                  height={44}
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <address className="not-italic space-y-2 text-center md:text-left text-sm">
                <div className="flex items-start justify-center md:justify-start gap-2">
                  <i className="fa fa-map-marker fa-lg mt-1"></i>
                  <span>
                    iHub Drishti Foundation,<br />
                    Indian Institute of Technology Jodhpur<br />
                    NH 62 Nagaur Road, Karwar 342037<br />
                    Jodhpur District, Rajasthan, India
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:admin@ihub-drishti.ai" className="hover:text-blue-500">
                    admin@ihub-drishti.ai
                  </a>
                </div>
              </address>
            </div>

            {/* Center Content Area: Quick Links */}
            <div className="flex-1 flex flex-col items-center md:items-center min-w-[200px]">
              <h3 className="text-base font-semibold mb-3 text-gray-800">Quick Links</h3>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-2 text-center text-sm">
                  <li>
                    <Link href="/about-tih" className="hover:text-blue-500">About TIH</Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-blue-500">Projects</Link>
                  </li>
                  <li>
                    <Link href="/jobs" className="hover:text-blue-500">Jobs</Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="hover:text-blue-500">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* NM-ICPS Logo and Social Media Icons */}
            <div className="flex-1 flex flex-col items-center md:items-end min-w-[200px]">
              <a href="https://nmicps.in/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/image/nmicp2.png"
                  alt="NM-ICPS"
                  width={160}
                  height={160}
                  className="w-40 h-auto"
                  priority
                />
              </a>
              {/* Social Media Icons below NMICPS logo */}
              <div className="flex justify-center md:justify-end mt-8">
                <ul className="flex space-x-8">
                  <li>
                    <a href="https://www.facebook.com/IHub-Drishti-107489811622386" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/TIHihubDrishti" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/ihub-drishti/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright at the very bottom */}
        <div className="bg-gray-200 border-t border-gray-300 py-3">
          <div className="container mx-auto text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} iHub Drishti Foundation. All rights reserved.
          </div>
        </div>
      </footer>
      {/* Up Arrow Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 bg-[#021954] hover:bg-[#16397a] text-[#e0f2fe] rounded-full shadow-lg p-3 transition-colors duration-200 flex items-center justify-center"
        >
          {/* Minimal upward arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#e0f2fe" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
