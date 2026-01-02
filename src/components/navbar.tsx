
      'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Treat "isMobile" as "menu is in mobile mode (drawer open)"
  const isMobile = isMobileMenuOpen;

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleMobileDropdownToggle = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close menu on any navigation click
  const handleNavigate = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Also close on route change (safety net)
  const pathname = usePathname();
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[99%] xl1500:w-[98%] z-[100] bg-white/80 rounded-lg px-4 xl1500:px-6 py-3 xl1500:py-4 transition-all duration-300">
      <div className="flex justify-between items-center">
        {/* Logo + Partner */}
        <div className="flex items-center gap-[32px]">
          <Link href="/" onClick={handleNavigate}>
            <Image
              src="/image/ihub-Photoroom (1).png"
              alt="Logo"
              width={160}
              height={160}
              className="w-20 sm:w-24 xl1500:w-28 h-auto"
              priority
            />
          </Link>
          <Link href="https://dst.gov.in/" target="_blank">
            <Image
              src="/image/Frame 144 (2).png"
              alt="Partner Logo"
              width={560}
              height={560}
              className="hidden lg:block w-72 lg:w-96 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl1500:hidden text-xl p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Items */}
        <ul
          className={`${isMobileMenuOpen ? 'flex' : 'hidden'} xl1500:flex flex-col xl1500:flex-row absolute xl1500:relative top-full left-0 w-full xl1500:w-auto mt-2 xl1500:mt-0 bg-white xl1500:bg-transparent rounded-lg xl1500:rounded-none p-4 xl1500:p-0 gap-4 xl1500:gap-8 items-center font-semibold text-base`}
        >
          {/* About Us Dropdown */}
          <li
            className="relative w-full xl1500:w-auto text-center"
            onMouseEnter={!isMobile ? () => handleMouseEnter("about") : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          >
            <span
              className="flex items-center gap-1 cursor-pointer hover:text-primary justify-center"
              onClick={() => isMobile && handleMobileDropdownToggle("about")}
            >
              About Us <FaChevronDown className="text-xs mt-[1px]" />
            </span>
            {openDropdown === "about" && (
              <div
                className={`${isMobile ? "static w-full mt-2" : "absolute top-full left-0 xl1500:left-1/2 xl1500:-translate-x-1/2 mt-2"} bg-white rounded-lg p-2 text-base min-w-[180px]`}
                onMouseEnter={!isMobile ? () => handleMouseEnter("about") : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              >
                <Link href="/about-tih" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  About TIH
                </Link>
                <Link href="/Advisory-board" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Advisory Board
                </Link>
                <Link href="/teams" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Team
                </Link>
              </div>
            )}
          </li>

          {/* Projects */}
          <li className="w-full xl1500:w-auto text-center">
            <Link href="/projects" onClick={handleNavigate} className="hover:text-primary block w-full">
              Projects
            </Link>
          </li>

          {/* Product & Services */}
          <li className="w-full xl1500:w-auto text-center">
            <Link href="/products-and-services" onClick={handleNavigate} className="hover:text-primary block w-full">
              Product & Services
            </Link>
          </li>

          {/* Career Dropdown */}
          <li
            className="relative w-full xl1500:w-auto text-center"
            onMouseEnter={!isMobile ? () => handleMouseEnter("career") : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          >
            <span
              className="flex items-center gap-1 cursor-pointer hover:text-primary justify-center"
              onClick={() => isMobile && handleMobileDropdownToggle("career")}
            >
              Career <FaChevronDown className="text-xs mt-[1px]" />
            </span>
            {openDropdown === "career" && (
              <div
                className={`${isMobile ? "static w-full mt-2" : "absolute top-full left-0 xl1500:left-1/2 xl1500:-translate-x-1/2 mt-2"} bg-white rounded-lg p-2 text-base min-w-[180px]`}
                onMouseEnter={!isMobile ? () => handleMouseEnter("career") : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              >
                <Link href="/jobs/career-at-ihub-drishti" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Career at iHub-Drishti
                </Link>
                <Link href="/jobs/project-jobs" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Project jobs
                </Link>
                <Link href="/jobs/Call-for-interns" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Call for Interns
                </Link>
              </div>
            )}
          </li>

          {/* Media Dropdown */}
          <li
            className="relative w-full xl1500:w-auto text-center"
            onMouseEnter={!isMobile ? () => handleMouseEnter("media") : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          >
            <span
              className="flex items-center gap-1 cursor-pointer hover:text-primary justify-center"
              onClick={() => isMobile && handleMobileDropdownToggle("media")}
            >
              Media <FaChevronDown className="text-xs mt-[1px]" />
            </span>
            {openDropdown === "media" && (
              <div
                className={`${isMobile ? "static w-full mt-2" : "absolute top-full left-0 xl1500:left-1/2 xl1500:-translate-x-1/2 mt-2"} bg-white rounded-lg p-2 text-base min-w-[180px]`}
                onMouseEnter={!isMobile ? () => handleMouseEnter("media") : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              >
                <Link href="/gallery" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Gallery
                </Link>
              </div>
            )}
          </li>

          {/* R&D Labs Dropdown */}
          <li
            className="relative w-full xl1500:w-auto text-center"
            onMouseEnter={!isMobile ? () => handleMouseEnter("rdlabs") : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          >
            <span
              className="flex items-center gap-1 cursor-pointer hover:text-primary justify-center"
              onClick={() => isMobile && handleMobileDropdownToggle("rdlabs")}
            >
              R&D Labs <FaChevronDown className="text-xs mt-[1px]" />
            </span>
            {openDropdown === "rdlabs" && (
              <div
                className={`${isMobile ? "static w-full mt-2" : "absolute top-full left-0 xl1500:left-1/2 xl1500:-translate-x-1/2 mt-2"} bg-white rounded-lg p-2 text-base min-w-[180px]`}
                onMouseEnter={!isMobile ? () => handleMouseEnter("rdlabs") : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              >
                <Link
                  href="/research-and-development-labs/data-collection-and-annotation-lab"
                  onClick={handleNavigate}
                  className="block px-4 py-2 hover:bg-slate-100 rounded"
                >
                  Data Collection and Annotation
                </Link>
                <Link
                  href="/research-and-development-labs/vision-based-autonomous-systems-lab"
                  onClick={handleNavigate}
                  className="block px-4 py-2 hover:bg-slate-100 rounded"
                >
                  Vision-based Autonomous Systems
                </Link>
                <a
                  href="https://ar-vr.ihub-drishti.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavigate}
                  className="block px-4 py-2 hover:bg-slate-100 rounded"
                >
                  Mixed Reality
                </a>
                <Link
                  href="/research-and-development-labs/trustable-visual-intelligence-lab"
                  onClick={handleNavigate}
                  className="block px-4 py-2 hover:bg-slate-100 rounded"
                >
                  Industry 4.0
                </Link>
              </div>
            )}
          </li>

          {/* Explore Dropdown */}
          <li
            className="relative w-full xl1500:w-auto text-center"
            onMouseEnter={!isMobile ? () => handleMouseEnter("explore") : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          >
            <span
              className="flex items-center gap-1 cursor-pointer hover:text-primary justify-center"
              onClick={() => isMobile && handleMobileDropdownToggle("explore")}
            >
              Explore <FaChevronDown className="text-xs mt-[1px]" />
            </span>
            {openDropdown === "explore" && (
              <div
                className={`${isMobile ? "static w-full mt-2" : "absolute top-full left-0 xl1500:left-1/2 xl1500:-translate-x-1/2 mt-2"} bg-white rounded-lg p-2 text-base min-w-[180px]`}
                onMouseEnter={!isMobile ? () => handleMouseEnter("explore") : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              >
                <Link href="/call-for-proposal" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Call for Proposal
                </Link>
                <Link href="/training" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Training
                </Link>
                <Link href="/entrepreneurship" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Entrepreneurship
                </Link>
                <Link href="/newsletter" onClick={handleNavigate} className="block px-4 py-2 hover:bg-slate-100 rounded">
                  Newsletter
                </Link>
              </div>
            )}
          </li>

          {/* Contact */}
          <li className="w-full xl1500:w-auto text-center">
            <Link href="/contact" onClick={handleNavigate} className="hover:text-primary block w-full">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
