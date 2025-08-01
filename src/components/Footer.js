import { FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer
      className="
      relative 
      bg-gradient-to-tr from-[#17132a] via-[#23214b] to-[#2e225a]
      text-[#f5f3ff]
      pt-14 pb-6 px-6 mt-0
      border-t-2 border-[#7c3aed44]
      backdrop-blur-xl
      shadow-[0_-8px_32px_0_rgba(39,19,67,0.44)]
      rounded-t-3xl
      overflow-hidden z-20
      "
    >
      {/* Glowing Top Divider - no gap */}
      <div className="absolute left-0 top-0 w-full h-5 bg-gradient-to-r from-[#7c3aed55] via-[#67e8f955] to-[#a78bfa34] blur-md opacity-70 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 items-start relative z-10">
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-2 gap-3">
            <img
              src="/assets/ITSA_logo-1.png"
              alt="ITSA logo"
              className="h-14 w-14 rounded-xl bg-white/80 object-contain border border-[#f3e8ff22] drop-shadow-[0_2px_16px_rgba(124,58,237,0.16)]"
            />
            <span className="font-extrabold text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#f3e8ff] drop-shadow">
              ITSA
            </span>
          </div>
          <div className="text-[#c4b5fd] text-base font-medium text-center md:text-left max-w-[220px]">
            Empowering students through technology & innovation
          </div>
          <div className="flex gap-2 mt-3">
            <a
              href="https://www.instagram.com/itsasggs?igsh=MTUzOXN2YWc4N3NxNg=="
              aria-label="Instagram"
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#a78bfa44] to-[#67e8f922] rounded-full p-2 ring-1 ring-[#7c3aed22] shadow hover:ring-2 hover:ring-[#67e8f9] transition"
            >
              <FaInstagram className="w-5 h-5 text-[#a78bfa]" />
            </a>
            <a
              href="https://linkedin.com/in/itsasg"
              aria-label="LinkedIn"
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#a78bfa44] to-[#67e8f922] rounded-full p-2 ring-1 ring-[#7c3aed22] shadow hover:ring-2 hover:ring-[#67e8f9] transition"
            >
              <FaLinkedin className="w-5 h-5 text-[#67e8f9]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-extrabold mb-2 text-lg text-[#67e8f9] whitespace-nowrap tracking-widest">
            Quick Links
          </span>
          <a href="/activities" className="text-[#c4b5fd] hover:text-[#a78bfa] transition font-medium mb-1">
            Events
          </a>
          <a href="/resources" className="text-[#c4b5fd] hover:text-[#67e8f9] transition font-medium mb-1">
            Resources
          </a>
          <a href="/team" className="text-[#c4b5fd] hover:text-[#a78bfa] transition font-medium mb-1">
            Team
          </a>
          <a href="/contact" className="text-[#c4b5fd] hover:text-[#7c3aed] transition font-medium mb-1">
            Join ITSA
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-extrabold mb-2 text-lg text-[#67e8f9]">Contact</span>
          <div className="flex items-center gap-2 mb-1 w-full">
            <MapPinIcon className="w-4 h-4 text-[#a78bfa]" />
            <span className="text-sm text-[#c4b5fd] leading-snug">
              Information Technology Dept,<br className="hidden md:block" />
              2nd Floor, SGGSIE&T
            </span>
          </div>
          <div className="flex items-center gap-2 mb-1 w-full">
            <EnvelopeIcon className="w-4 h-4 text-[#a78bfa]" />
            <span className="text-sm text-[#c4b5fd]">itsa@sggs.ac.in</span>
          </div>
          <div className="flex items-center gap-2 w-full">
            <PhoneIcon className="w-4 h-4 text-[#7c3aed]" />
            <span className="text-sm text-[#c4b5fd]">7057676048</span>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="flex flex-col items-start md:items-end h-full mt-6 md:mt-0">
          <span className="font-extrabold mb-2 text-lg text-[#67e8f9]">Join Our Team</span>
          <div className="mb-3 w-full max-w-[250px] text-[#c4b5fd] text-base text-left leading-normal">
            Join our collaborative, ambitious ITSA committee—take the first step in student leadership!
          </div>
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#67e8f9] via-[#7c3aed] to-[#a78bfa] text-white text-lg font-bold px-7 py-2 rounded-xl shadow hover:scale-105 hover:ring-2 hover:ring-[#67e8f9]/70 transition block"
          >
            Apply Now
          </a>
        </div>
      </div>

      <div className="my-5 h-[1.5px] bg-gradient-to-r from-[#a78bfa22] via-[#67e8f955] to-[#7c3aed22] rounded-full mx-auto max-w-2xl opacity-70" />
      <div className="text-center text-[#a78bfa] text-sm flex flex-col sm:flex-row items-center justify-center gap-2 z-10">
        <span>© 2025 ITSA. All rights reserved.</span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          Made with <FaHeart className="text-pink-400" /> by ITSA Club.
        </span>
      </div>
    </footer>
  );
}
