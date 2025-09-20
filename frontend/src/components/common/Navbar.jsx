import React, { useState } from 'react';
import { Drawer, Sidebar } from "flowbite-react";
import { FaHome, FaUsers, FaCalendarAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link

const OscFullLogoWhite = () => (
  <svg height="35" viewBox="0 0 100 35">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10">
      OSC Full Logo White
    </text>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      aria-label="Site Header"
      className="w-full bg-zinc-800 backdrop-filter backdrop-blur-lg bg-opacity-30 fixed border-b-2 border-zinc-900 border-opacity-10 z-20"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO BRANDING */}
          <div>
            <Link className="block" to="/">
              <span className="sr-only">Home</span>
              <OscFullLogoWhite />
            </Link>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-200 transition hover:text-gray-300/75" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-200 transition hover:text-gray-300/75" to="/team">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-200 transition hover:text-gray-300/75" to="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-200 transition hover:text-gray-300/75" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* OSC Platforms Button */}
            <div className="flex items-center gap-4">
              <div className="flex">
                <Link
                  to="/coming-soon"
                  className="hidden xs:block mr-2 md:mr-0 rounded px-5 py-1 overflow-hidden group border-2 border-white border-opacity-20 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
                  <span className="flex items-center justify-center">
                    <FaGlobe className="w-6 h-6" />
                    <span className="ml-2 text-sm">OSC Platforms</span>
                  </span>
                </Link>

                {/* Hamburger Menu */}
                <div className="block md:hidden">
                  <button
                    className="rounded p-2 text-white transition hover:text-gray-300/75"
                    onClick={() => setIsOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Sidebar for Mobile */}
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        placement="right"
      >
        <Drawer.Header title="Navigation Menu" />
        <Drawer.Body>
          <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item as={Link} to="/" icon={FaHome} onClick={handleLinkClick}>
                  Home
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/team" icon={FaUsers} onClick={handleLinkClick}>
                  Team
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/events" icon={FaCalendarAlt} onClick={handleLinkClick}>
                  Events
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/contact" icon={FaEnvelope} onClick={handleLinkClick}>
                  Contact
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/coming-soon" icon={FaGlobe} onClick={handleLinkClick}>
                  OSC Platforms
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Body>
      </Drawer>
    </header>
  );
};

export default Navbar;
