// import { FaMicrophoneAlt } from "react-icons/fa";
// import { motion } from "framer-motion"
// export default function Podcast() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-20 flex flex-col items-center">
//       {/* Large, vivid hero banner */}
//       <div className="w-full bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#ede9fe] rounded-3xl shadow-2xl border border-[#ede9fe] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden mb-12">
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           {/* Subtle background microphone icon for extra impact */}
//           <FaMicrophoneAlt className="text-white/[0.08] w-[320px] h-[320px] sm:w-[260px] sm:h-[260px] animate-pulse-slow" style={{ filter: 'blur(1px)' }} />
//         </div>
//         <div className="relative flex flex-col items-center">
//           <motion.div
//             initial={{ y: 0 }}
//             animate={{ y: [0, -12, 0] }}
//             transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
//           >
//             <div className="bg-white shadow-xl rounded-full p-7 mb-4">
//               <FaMicrophoneAlt className="w-20 h-20 text-[#7c3aed] drop-shadow-lg" />
//             </div>
//           </motion.div>
//           <h2 className="text-5xl font-extrabold mb-3 text-center text-[#322365] drop-shadow-lg tracking-tight">
//             <span>ITSA </span>
//             <span className="text-[#7c3aed]">Podcasts</span>
//           </h2>
//           <div className="flex gap-3 items-center mb-3">
//             <span className="animate-pulse h-4 w-4 rounded-full bg-[#7c3aed]" />
//             <span className="text-2xl uppercase font-bold tracking-widest text-white bg-[#a78bfa]/80 px-6 py-3 rounded-2xl shadow-lg shadow-[#7c3aed]/30 border-2 border-[#ede9fe]">
//               Coming Soon
//             </span>
//             <span className="animate-pulse h-4 w-4 rounded-full bg-[#a78bfa]" />
//           </div>
//           <p className="text-lg sm:text-xl text-[#2a1742] font-medium max-w-2xl text-center mt-2">
//             Our podcast series launches soon—featuring <span className="font-bold">alumni stories, faculty interviews, and real-life IT journeys</span>. 
//             Exciting voices in tech & inspiration!
//           </p>
//         </div>
//       </div>

//       {/* Call to action */}
//       <div className="pt-5 text-center text-gray-600 text-lg">
//         Want to suggest a topic or guest?{" "}
//         <a
//           href="mailto:itsa@sggs.ac.in"
//           className="text-[#7c3aed] hover:underline font-semibold"
//         >
//           Contact Us
//         </a>
//       </div>
//     </div>
//   );
// }


// // import { motion } from "framer-motion"



import { FaMicrophoneAlt } from "react-icons/fa";
import { motion } from "framer-motion"

export default function Podcast() {
  return (
    <div className="
      flex flex-col min-h-screen pt-16
      bg-gradient-to-tr from-[#17132a] via-[#23214b] to-[#2e225a]
      px-4 pb-12
    ">
      <div className="max-w-4xl mx-auto w-full relative">
        {/* Ambient wall glow behind the card */}
        <div className="
          absolute left-1/2 -translate-x-1/2 -top-14 w-[96%] h-32 
          bg-gradient-to-r from-[#67e8f950] via-[#a78bfa46] to-[#7c3aed22]
          blur-2xl opacity-80 rounded-3xl z-0 pointer-events-none
        " />

        {/* Floating 3D glass card */}
        <motion.div
          className="
            w-full rounded-3xl
            shadow-[0_20px_60px_-8px_rgba(103,232,249,0.18),0_2px_32px_0_rgba(124,58,237,0.23)]
            border border-[#a78bfa]/50
            bg-gradient-to-tr from-[#302855ea] via-[#494285e0] to-[#b49be7c5]
            flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden mb-12
            backdrop-blur-xl z-10
          "
          initial={{ y: 18, scale: 0.97, boxShadow: "0px 52px 80px -16px #67e8f933" }}
          animate={{ 
            y: [18, 0, 10, 0], 
            scale: [0.97, 1, 0.985, 1], 
            boxShadow: "0_28px_80px_-12px_rgba(124,58,237,0.17),0_4px_24px_0_rgba(168,139,250,0.22)",
            rotateX: [8, 0, 4, 0]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
          style={{
            perspective: "1000px", // enables 3D
            willChange: "transform"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <FaMicrophoneAlt className="text-[#a78bfa1c] w-[320px] h-[320px] sm:w-[260px] sm:h-[260px] animate-pulse-slow" style={{ filter: 'blur(3px)' }} />
          </div>
          <div className="relative flex flex-col items-center z-10">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            >
              <div className="bg-gradient-to-br from-[#a78bfa] to-[#67e8f9] shadow-xl rounded-full p-7 mb-4 drop-shadow-lg">
                <FaMicrophoneAlt className="w-20 h-20 text-white drop-shadow-lg" />
              </div>
            </motion.div>
            <h2 className="
              text-5xl font-extrabold mb-3 text-center 
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#7c3aed]
              drop-shadow-2xl tracking-tight
            ">
              <span>ITSA </span>
              <span className="text-[#7c3aed] bg-none">Podcasts</span>
            </h2>
            <div className="flex gap-3 items-center mb-3">
              <span className="animate-pulse h-4 w-4 rounded-full bg-[#a78bfa]" />
              <span className="
                text-2xl uppercase font-bold tracking-widest
                text-[#f5f3ff]
                bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#67e8f9]
                px-6 py-3 rounded-2xl shadow-lg border-2 border-[#67e8f9]/40 shadow-[#7c3aed]/20
                "
              >
                Coming Soon
              </span>
              <span className="animate-pulse h-4 w-4 rounded-full bg-[#67e8f9]" />
            </div>
            <p className="text-lg sm:text-xl text-[#c4b5fd] font-medium max-w-2xl text-center mt-2 drop-shadow">
              Our podcast series launches soon—featuring <span className="font-bold text-[#a78bfa]">alumni stories, faculty interviews, and real-life IT journeys</span>. 
              Exciting voices in tech & inspiration!
            </p>
          </div>
        </motion.div>

        {/* Call to action */}
        <div className="pt-5 text-center text-[#a3a6ce] text-lg">
          Want to suggest a topic or guest?{" "}
          <a
            href="/Contact"
            className="text-[#67e8f9] hover:underline font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
