// // // src/pages/Home.js
// import CoreValues from '../components/CoreValues';
// import Testimonials from '../components/Testimonials';
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// const faqs = [
//   {
//     q: "What is ITSA?",
//     a: "ITSA is the Information Technology Student Association at SGGS Nanded—an energetic, student-driven community bridging the gap between academics and the tech industry through events, workshops, competitions, and peer support.",
//   },
//   {
//     q: "Who can join?",
//     a: "All IT students at SGGS Nanded are welcome to join and participate in ITSA activities!",
//   },
//   {
//     q: "How do I stay updated?",
//     a: "Follow our Instagram and LinkedIn, and watch the website for updates and announcements.",
//   },
// ];


// // Mission, Vision, and Opportunities
// const mission =
//   "Foster innovation, technical skills, and teamwork among students through events, workshops, and collaborations that propel career growth and personal development.";
// const vision =
//   "Build an inclusive, thriving community of IT leaders ready for industry and societal challenges.";
// const opportunities = [
//   "Access to hands-on workshops and technical events led by industry experts",
//   "Mentorship and collaboration with seniors and faculty",
//   "Networking through alumni and professional guest speakers",
//   "Exclusive access to coding contests, e-sports, hackathons, and tech carnivals",
//   "Leadership roles (committee, event organization, outreach)",
//   "Community, peer recognition, and industry-prepped portfolio",
// ];

// export default function Home() {
//   useEffect(() => window.scrollTo(0, 0), []);

//   return (
//     <div className="flex flex-col min-h-screen bg-[#ede9fe] font-poppins relative">
//       {/* <div className="min-h-screen bg-gradient-to-tr from-[#181143] to-[#23214b] text-[#f5f3ff]"> */}
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.85, ease: "easeOut" }}
//         className="flex flex-col items-center justify-center py-20 text-center"
//       >
//         <img src="/assets/ITSA_logo.jpeg" alt="ITSA Logo" className="w-28 mb-8 drop-shadow-2xl" loading="lazy" />
//         <motion.h1
//           initial={{ x: -60, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.70, delay: 0.15 }}
//           className="text-6xl font-extrabold text-[#7c3aed] mb-4 tracking-tight leading-tight"
//         >
//           Information Technology<br />Student Association
//         </motion.h1>
//         <motion.p
//           initial={{ x: 60, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.2 }}
//           className="text-2xl text-[#6d28d9] mb-6 font-medium max-w-2xl mx-auto"
//         >
//           Empowering IT students through community, knowledge, and innovation.
//         </motion.p>
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.3, delay: 0.5 }}
//         >
//           <span className="bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] text-white rounded-2xl px-8 py-3 font-semibold shadow-lg text-lg tracking-wide">
//             “Code. Collaborate. Conquer.”
//           </span>
//         </motion.div>
//         <ChevronDownIcon className="h-9 w-9 mx-auto mt-10 text-[#a78bfa] animate-bounce" />
//       </motion.section>

//       {/* === ABOUT ITSA SECTION (Place before Vision/Mission) === */}
// <section className="max-w-4xl w-11/12 mx-auto py-12">
//   <h1 className="text-5xl font-extrabold text-center mb-6 text-[#7c3aed]">About ITSA</h1>
//   <p className="text-lg text-gray-700 font-medium text-center mb-8">
//     The Information Technology Student Association is a creative, driven community at SGGS—
//     empowering tomorrow’s leaders at the intersection of technology, teamwork, and imagination.
//   </p>
//   {/* You can add more highlight cards here if you like, or keep this concise */}
//   <div className="text-center text-base italic text-[#322365] mb-4">
//     Founded in 2024, ITSA bridges the gap between academics and the fast-moving world of tech, building lifelong friendships and powerful skills.
//   </div>
//   <div className="text-center mt-8">
//     <a
//       href="/team"
//       className="bg-[#7c3aed] text-white rounded-xl px-6 py-2 font-bold shadow hover:bg-[#a78bfa] transition"
//     >
//       Meet the Team
//     </a>
//   </div>
// </section>


//       {/* Main Content Block with Wide Layout */}
//       <motion.section
//         initial={{ opacity: 0, x: 80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.3, delay: 0.09 }}
//         className="max-w-5xl w-11/12 mx-auto grid md:grid-cols-2 gap-10 my-12"
//       >
//         {/* Mission */}
//         <motion.div
//           whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(124,58,237,0.20)" }}
//           className="rounded-3xl bg-gradient-to-br from-white/95 to-[#f3e8ff] border-l-8 border-[#7c3aed] px-7 py-7 transition-all shadow-lg min-h-[210px] flex flex-col justify-center"
//         >
//           <h2 className="text-4xl font-bold mb-2 text-[#7c3aed] drop-shadow-sm">Mission</h2>
//           <p className="text-gray-800 font-medium text-lg leading-relaxed">{mission}</p>
//         </motion.div>
//         {/* Vision */}
//         <motion.div
//           whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(168,139,250,0.13)" }}
//           className="rounded-3xl bg-gradient-to-br from-white/95 to-[#a78bfa]/10 border-l-8 border-[#a78bfa] px-7 py-7 transition-all shadow-lg min-h-[210px] flex flex-col justify-center"
//         >
//           <h2 className="text-4xl font-bold mb-2 text-[#a78bfa] drop-shadow-sm">Vision</h2>
//           <p className="text-gray-800 font-medium text-lg leading-relaxed">{vision}</p>
//         </motion.div>
//       </motion.section>
// <CoreValues />
// <Testimonials />
//       {/* Opportunities Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2, delay: 0.17 }}
//         className="max-w-5xl w-11/12 mx-auto my-12 py-7 px-7 bg-white/80 rounded-3xl shadow-lg border border-[#a78bfa]"
//       >
//         <h3 className="text-3xl md:text-4xl font-bold text-[#7c3aed] mb-4 tracking-wide">Opportunities with ITSA</h3>
//         <p className="text-lg text-[#5b21b6] mb-4 font-medium">
//           Why join ITSA? Being a member unlocks:
//         </p>
//         <ul className="space-y-3 ml-4 text-lg">
//           {opportunities.map(item => (
//             <li key={item} className="relative pl-5 hover:text-[#7c3aed] transition-all font-normal">
//               <span className="absolute left-0 top-1 text-[#a78bfa]">•</span> {item}
//             </li>
//           ))}
//         </ul>
//       </motion.section>

//       {/* FAQ Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2, delay: 0.15 }}
//         className="max-w-4xl w-11/12 mx-auto my-16 py-7 px-7 bg-white/90 rounded-3xl shadow-md"
//       >
//         <h3 className="text-3xl md:text-4xl font-bold text-[#7c3aed] mb-8 text-center tracking-wide">Frequently Asked Questions</h3>
//         <ul className="divide-y divide-[#ede9fe]">
//           {faqs.map((item, i) => (
//             <li key={i} className="py-6 group cursor-pointer transition">
//               <div className="flex items-center">
//                 <span className="text-[#7c3aed] font-semibold mr-2 group-hover:underline text-xl">{item.q}</span>
//               </div>
//               <div className="text-gray-600 ml-2 mt-1 text-lg group-hover:pl-2 group-hover:text-[#4c1d95] transition-all">
//                 {item.a}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </motion.section>
//     </div>
//   );
// }





// // src/pages/Home.js
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  LightBulbIcon,
  UsersIcon,
  TrophyIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "What is ITSA?",
    a: "ITSA is the Information Technology Student Association at SGGS Nanded—an energetic, student-driven community bridging the gap between academics and the tech industry through events, workshops, competitions, and peer support.",
  },
  {
    q: "Who can join?",
    a: "All IT students at SGGS Nanded are welcome to join and participate in ITSA activities!",
  },
  {
    q: "How do I stay updated?",
    a: "Follow our Instagram and LinkedIn, and watch the website for updates and announcements.",
  },
];

// Mission, Vision, and Opportunities
const mission =
  "Foster innovation, technical skills, and teamwork among students through events, workshops, and collaborations that propel career growth and personal development.";
const vision =
  "Build an inclusive, thriving community of IT leaders ready for industry and societal challenges.";

const opportunities = [
  "Access to hands-on workshops and technical events led by industry experts",
  "Mentorship and collaboration with seniors and faculty",
  "Networking through alumni and professional guest speakers",
  "Exclusive access to coding contests, e-sports, hackathons, and tech carnivals",
  "Leadership roles (committee, event organization, outreach)",
  "Community, peer recognition, and industry-prepped portfolio",
];

const testimonials = [
  {
    quote: "Every event feels alive—so much energy and learning!",
    name: "Om Rakhade",
    role: "President",
  },
  {
    quote: "ITSA opened doors to real-world projects and lifelong friendships.",
    name: "Vedant Wankhede",
    role: "Member",
  },
  {
    quote: "The best place to grow, network, and get inspired.",
    name: "Krushna Ingale",
    role: "Head, Technical",
  },
];

const values = [
  {
    icon: <LightBulbIcon className="w-10 h-10 text-[#a78bfa] drop-shadow" />,
    title: "Innovation",
    desc: "Nurturing creativity and forward-thinking through hands-on projects, hackathons, and cutting-edge workshops.",
  },
  {
    icon: <UsersIcon className="w-10 h-10 text-[#4f46e5] drop-shadow" />,
    title: "Community",
    desc: "A place where passionate students network, collaborate, and grow together beyond the classroom.",
  },
  {
    icon: <TrophyIcon className="w-10 h-10 text-[#67e8f9] drop-shadow" />,
    title: "Leadership",
    desc: "Empowering members to take initiative, organize events, and inspire tech-driven success.",
  },
  {
    icon: <ComputerDesktopIcon className="w-10 h-10 text-[#7c3aed] drop-shadow" />,
    title: "Tech Driven",
    desc: "Harnessing the power of technology in everything we do.",
  },
];

export default function Home() {
  useEffect(() => window.scrollTo(0, 0), []);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#17132a] via-[#181143] to-[#23214b] font-poppins relative text-[#f5f3ff] overflow-x-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-32 w-96 h-96 bg-[#a78bfa22] blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#67e8f944] blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-20 text-center relative z-10"
      >
        <img
          src="/assets/ITSA_logo.jpeg"
          alt="ITSA Logo"
          className="w-28 mb-8 drop-shadow-[0_8px_24px_rgba(86,28,255,0.29)] rounded-2xl shadow-xl transition-transform hover:scale-105"
          loading="lazy"
        />
        <motion.h1
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.70, delay: 0.15 }}
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#a78bfa] via-[#67e8f9] to-[#7c3aed] drop-shadow-2xl mb-4 tracking-tight leading-tight"
        >
          Information Technology<br />Student Association
        </motion.h1>
        <motion.p
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-2xl text-[#c4b5fd] mb-6 font-medium max-w-2xl mx-auto"
        >
          Empowering IT students through community, knowledge, and innovation.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5 }}
        >
          <span className="bg-gradient-to-br from-[#7c3aed] via-[#67e8f9] to-[#a78bfa] text-white rounded-2xl px-8 py-3 font-semibold shadow-2xl text-xl relative after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:ring-2 after:ring-[#a78bfa]/40 after:animate-pulse">
            “Think IT. Build IT. Live IT.”
          </span>
        </motion.div>
        <ChevronDownIcon className="h-9 w-9 mx-auto mt-10 text-[#67e8f9] animate-bounce drop-shadow-2xl" />
      </motion.section>

      {/* ABOUT */}
      <section className="max-w-4xl w-11/12 mx-auto py-12">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#a78bfa] drop-shadow">
          About ITSA
        </h1>
        <p className="text-lg text-[#e5e2fa] font-medium text-center mb-8">
          The Information Technology Student Association is a creative, driven community at SGGS—
          empowering tomorrow’s leaders at the intersection of technology, teamwork, and imagination.
        </p>
        <div className="text-center text-base italic text-[#97d8f5] mb-4">
          Founded in 2024, ITSA bridges the gap between academics and the fast-moving world of tech, building lifelong friendships and powerful skills.
        </div>
        <div className="text-center mt-8">
          <a
            href="/team"
            className="bg-gradient-to-br from-[#7c3aed] via-[#67e8f9] to-[#a78bfa] text-white rounded-xl px-6 py-2 font-bold shadow-lg hover:scale-105 hover:ring-2 hover:ring-[#67e8f9]/70 transition transform"
          >
            Meet the Team
          </a>
        </div>
      </section>

      {/* MISSION & VISION */}
      <motion.section
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0.09 }}
        className="max-w-5xl w-11/12 mx-auto grid md:grid-cols-2 gap-10 my-12 z-10"
      >
        {/* Mission */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 48px 0 rgba(168,139,250,0.33),0 2px 10px 0 rgba(39,19,67,0.24)",
            transition: { duration: 0.4, type: "spring" },
          }}
          className="rounded-3xl bg-gradient-to-br from-[#241442cc] via-[#23224e90] to-[#334155cc] border-l-8 border-[#7c3aed] px-7 py-7 shadow-lg min-h-[230px] backdrop-blur-lg flex flex-col justify-center transition-all duration-150"
        >
          <h2 className="text-4xl font-bold mb-2 text-[#a78bfa] drop-shadow-md">Mission</h2>
          <p className="text-[#e5e2fa] font-medium text-lg leading-relaxed">{mission}</p>
        </motion.div>
        {/* Vision */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 48px 0 rgba(103,232,249,0.18),0 2px 10px 0 rgba(39,19,67,0.16)",
            transition: { duration: 0.4, type: "spring" },
          }}
          className="rounded-3xl bg-gradient-to-br from-[#2b2755cc] via-[#304e65ee] to-[#67e8f944] border-l-8 border-[#67e8f9] px-7 py-7 shadow-lg min-h-[230px] backdrop-blur-lg flex flex-col justify-center transition-all duration-150"
        >
          <h2 className="text-4xl font-bold mb-2 text-[#67e8f9] drop-shadow-md">Vision</h2>
          <p className="text-[#e5e2fa] font-medium text-lg leading-relaxed">{vision}</p>
        </motion.div>
      </motion.section>

      {/* CORE VALUES */}
      <section className="max-w-5xl w-11/12 mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {values.map((v) => (
          <motion.div
            key={v.title}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 4px 24px 0 rgba(124,58,237,0.20),0 10px 40px 0 rgba(103,232,249,0.18)",
              transition: { duration: 0.28 },
            }}
            className="flex flex-col items-center text-center bg-gradient-to-br from-[#23214b88] via-[#352475aa] to-[#233567bb] rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all group backdrop-blur-md"
          >
            <div className="mb-3 p-4 bg-[#181143cc] rounded-full group-hover:bg-[#67e8f930] transition">{v.icon}</div>
            <h3 className="text-xl font-bold text-[#a78bfa] mb-2 group-hover:text-[#67e8f9] transition">{v.title}</h3>
            <p className="text-[#c1bae8] text-base font-medium">{v.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl w-11/12 mx-auto my-16 relative z-10">
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-2/3 h-16 bg-gradient-to-r from-[#7c3aed44] via-[#67e8f933] to-[#7c3aed44] blur-2xl opacity-60 pointer-events-none rounded-full" />
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.11 }}
          className="text-3xl md:text-4xl font-bold text-[#a78bfa] drop-shadow-xl text-center mb-2"
        >
          What Members Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.20 }}
          className="text-center mb-8 text-[#97d8f5] text-lg"
        >
          Real voices from our ITSA community.
        </motion.p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.58, delay: idx * 0.07 }}
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0 4px 48px 0 rgba(168,139,250,0.22), 0 0px 20px 0 rgba(39,19,67,0.14)",
              }}
              className="bg-gradient-to-br from-[#252147ee] to-[#283d55ee] rounded-2xl shadow-xl p-6 flex flex-col justify-between 
             ring-1 ring-[#7c3aed28]
             hover:ring-2 hover:ring-[#67e8f9]/60 
             focus-within:ring-4 focus-within:ring-[#7c3aed]/80 
             transition-all duration-200
             backdrop-blur-md"
              tabIndex={0}
            >
              <blockquote className="text-lg text-[#d1c3f7] italic leading-snug mb-4">
                “{t.quote}”
              </blockquote>
              <div>
                <div className="font-bold text-[#a78bfa]">{t.name}</div>
                <div className="text-sm text-[#67e8f9]">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.17 }}
        className="max-w-5xl w-11/12 mx-auto mt-12 mb-14 py-7 px-7 bg-gradient-to-tr from-[#22213fdd] via-[#222345cc] to-[#23254bcc] rounded-3xl shadow-2xl border border-[#a78bfa]/30 backdrop-blur-md"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-[#67e8f9] mb-4 tracking-wide">Opportunities with ITSA</h3>
        <p className="text-lg text-[#a78bfa] mb-4 font-medium">
          Why join ITSA? Being a member unlocks:
        </p>
        <ul className="space-y-3 ml-4 text-lg">
          {opportunities.map((item) => (
            <li
              key={item}
              className="relative pl-5 hover:text-[#67e8f9] transition-all font-normal"
            >
              <span className="absolute left-0 top-1 text-[#7c3aed] text-lg animate-pulse">•</span> {item}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* FAQS (Accordion Style) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15 }}
        className="max-w-4xl w-11/12 mx-auto my-16 py-7 px-7 bg-gradient-to-tr from-[#23213b] to-[#2f2652e6] rounded-3xl shadow-xl border border-[#67e8f9]/20 backdrop-blur-md"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-[#a78bfa] mb-8 text-center tracking-wide">
          Frequently Asked Questions
        </h3>
        <ul className="divide-y divide-[#33297066]">
          {faqs.map((item, i) => (
            <li
              key={i}
              className="py-4 group cursor-pointer transition relative"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="flex items-center justify-between select-none">
                <span className={`text-[#67e8f9] font-semibold transition text-xl group-hover:underline`}>
                  {item.q}
                </span>
                <ChevronDownIcon
                  className={`w-6 h-6 ml-2 transition-transform duration-200 ${
                    openFaq === i ? "rotate-180 text-[#a78bfa]" : "text-[#7c3aed]"
                  }`}
                />
              </div>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="text-[#e0d6ff] ml-2 mt-2 text-lg px-2 pb-2 border-l-4 border-[#67e8f9] bg-[#27315855] rounded-r-md">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
