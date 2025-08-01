import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  HomeIcon, CalendarDaysIcon, UserGroupIcon, MicrophoneIcon,
  PhotoIcon, EnvelopeIcon, Bars3Icon, XMarkIcon
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/", icon: <HomeIcon className="w-6 h-6 mr-2" /> },
  { label: "Activities", path: "/activities", icon: <CalendarDaysIcon className="w-6 h-6 mr-2" /> },
  { label: "Team", path: "/team", icon: <UserGroupIcon className="w-6 h-6 mr-2" /> },
  { label: "Gallery", path: "/gallery", icon: <PhotoIcon className="w-6 h-6 mr-2" /> },  
  { label: "Podcast", path: "/podcast", icon: <MicrophoneIcon className="w-6 h-6 mr-2" /> },
  { label: "Contact", path: "/contact", icon: <EnvelopeIcon className="w-6 h-6 mr-2" /> },
];

const glow = "shadow-[0_0_32px_0_rgba(103,232,249,0.28),0_2px_8px_0_rgba(124,58,237,0.13)]";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className={`
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-tr from-[#221c36bb] via-[#262053bb] to-[#17364eb3]
        border-b border-[#67e8f955] 
        backdrop-blur-md
        shadow-[0_0_32px_0_rgba(103,232,249,0.20),0_2px_8px_0_rgba(124,58,237,0.09)]
      `}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16 relative">
        <Link
          to="/"
          className="flex items-center text-2xl font-extrabold
            text-transparent bg-clip-text
            bg-gradient-to-r from-[#67e8f9] via-[#a78bfa] to-[#7c3aed]
            tracking-wide transition hover:scale-105"
        >
          {/* If you want logo: uncomment below */}
          {/* <img src="/assets/ITSA_logo-1.png" alt="ITSA Logo" className="w-10 h-10 mr-2" /> */}
          ITSA
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-4 py-2 rounded-lg font-medium text-lg transition-all
                ${
                  pathname === link.path
                    ? "bg-gradient-to-br from-[#67e8f932] via-[#7c3aed21] to-[#a78bfa18] text-cyan-200 ring-1 ring-[#67e8f9b2] shadow-md"
                    : "text-[#c7b9fa] hover:bg-[#232541cc] hover:text-[#67e8f9] hover:ring-1 hover:ring-[#a78bfa7a]"
                }
                duration-150`}
            >
              <span className="inline">{link.icon}</span>
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open
            ? <XMarkIcon className="h-8 w-8 text-[#67e8f9] drop-shadow" />
            : <Bars3Icon className="h-8 w-8 text-[#a78bfa]" />
          }
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className={`
              md:hidden px-5 pt-2 pb-4
              bg-gradient-to-tr from-[#232541ee] via-[#221c36dd] to-[#17364ea0]
              border-t border-[#67e8f966]/70
              rounded-b-2xl shadow-2xl backdrop-blur-md
            `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`flex items-center py-3 px-2 font-medium rounded-lg transition-all
                  ${
                    pathname === link.path
                      ? "text-[#67e8f9] bg-gradient-to-r from-[#30245a33] to-[#67e8f929] ring-1 ring-[#67e8f999]"
                      : "text-[#b7a6e8] hover:bg-[#2e3753a6] hover:text-[#a78bfa] hover:ring-1 hover:ring-[#a78bfa77]"
                  }
                  duration-150`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
