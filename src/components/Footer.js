import { FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer
      className="
        relative 
        bg-gradient-to-tr from-[#17132a] via-[#23214b] to-[#2e225a]
        text-[#f5f3ff]
        pt-8 md:pt-14 pb-4 md:pb-6 px-4 md:px-6
        border-t-2 border-[#7c3aed44]
        backdrop-blur-xl
        shadow-[0_-8px_32px_0_rgba(39,19,67,0.44)]
        rounded-t-3xl
        overflow-hidden z-20
      "
    >
      {/* Glowing Top Divider */}
      <div className="absolute left-0 top-0 w-full h-3 md:h-5 bg-gradient-to-r from-[#7c3aed55] via-[#67e8f955] to-[#a78bfa34] blur-md opacity-70 pointer-events-none" />
      
      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-start relative z-10">
        
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-2 gap-2 md:gap-3">
            <img
              src="/assets/ITSA_logo-1.png"
              alt="ITSA logo"
              className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-white/80 object-contain border border-[#f3e8ff22] drop-shadow-[0_2px_16px_rgba(124,58,237,0.16)]"
            />
            <span className="font-extrabold text-xl md:text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#f3e8ff] drop-shadow">
              ITSA
            </span>
          </div>
          <div className="text-[#c4b5fd] text-sm md:text-base font-medium max-w-[220px]">
            Empowering students through technology & innovation
          </div>
          <div className="flex gap-2 mt-3">
            <a
              href="https://www.instagram.com/itsasggs?igsh=MTUzOXN2YWc4N3NxNg=="
              aria-label="Instagram"
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#a78bfa44] to-[#67e8f922] rounded-full p-1.5 md:p-2 ring-1 ring-[#7c3aed22] hover:ring-2 hover:ring-[#67e8f9] transition"
            >
              <FaInstagram className="w-4 h-4 md:w-5 md:h-5 text-[#a78bfa]" />
            </a>
            <a
              href="https://linkedin.com/in/itsasg"
              aria-label="LinkedIn"
              target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#a78bfa44] to-[#67e8f922] rounded-full p-1.5 md:p-2 ring-1 ring-[#7c3aed22] hover:ring-2 hover:ring-[#67e8f9] transition"
            >
              <FaLinkedin className="w-4 h-4 md:w-5 md:h-5 text-[#67e8f9]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-extrabold mb-2 text-base md:text-lg text-[#67e8f9] tracking-widest">
            Quick Links
          </span>
          {["Events", "Resources", "Team", "Join ITSA"].map((link, i) => {
            const hrefs = ["/activities", "/resources", "/team", "/contact"];
            const colors = [
              "hover:text-[#a78bfa]",
              "hover:text-[#67e8f9]",
              "hover:text-[#a78bfa]",
              "hover:text-[#7c3aed]"
            ];
            return (
              <a
                key={i}
                href={hrefs[i]}
                className={`text-[#c4b5fd] transition font-medium mb-1 text-sm md:text-base ${colors[i]}`}
              >
                {link}
              </a>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-extrabold mb-2 text-base md:text-lg text-[#67e8f9]">Contact</span>
          <div className="flex items-center gap-2 mb-1 w-full text-xs md:text-sm">
            <MapPinIcon className="w-4 h-4 text-[#a78bfa]" />
            <span className="leading-snug">
              Information Technology Dept,<br className="hidden md:block" />
              2nd Floor, SGGSIE&T
            </span>
          </div>
          <div className="flex items-center gap-2 mb-1 w-full text-xs md:text-sm">
            <EnvelopeIcon className="w-4 h-4 text-[#a78bfa]" />
            <span>itsa@sggs.ac.in</span>
          </div>
          <div className="flex items-center gap-2 w-full text-xs md:text-sm">
            <PhoneIcon className="w-4 h-4 text-[#7c3aed]" />
            <span>7057676048</span>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <span className="font-extrabold mb-2 text-base md:text-lg text-[#67e8f9]">Join Our Team</span>
          <div className="mb-3 w-full max-w-[220px] text-[#c4b5fd] text-sm md:text-base leading-normal">
            Join our collaborative, ambitious ITSA committee—take the first step in student leadership!
          </div>
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#67e8f9] via-[#7c3aed] to-[#a78bfa] text-white text-sm md:text-lg font-bold px-5 md:px-7 py-1.5 md:py-2 rounded-xl shadow hover:scale-105 hover:ring-2 hover:ring-[#67e8f9]/70 transition"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-[1px] md:h-[1.5px] bg-gradient-to-r from-[#a78bfa22] via-[#67e8f955] to-[#7c3aed22] rounded-full mx-auto max-w-2xl opacity-70" />
      
      {/* Bottom Text */}
      <div className="text-center text-[#a78bfa] text-xs md:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 z-10">
        <span>© 2025 ITSA. All rights reserved.</span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          Made with <FaHeart className="text-pink-400" /> by Krushna Ingale - ITSA Club.
        </span>
      </div>
    </footer>
  );
}
