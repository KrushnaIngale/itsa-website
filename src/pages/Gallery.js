// import { useState } from "react";
// import { motion } from "framer-motion";

// // --- Animated fade/slide variants ---
// const fadeUpSection = {
//   hidden: { opacity: 0, y: 48 },
//   visible: (i = 1) => ({
//     opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.52, type: "spring", bounce: 0.20 }
//   }),
// };
// const fadeUpImg = (i = 0) => ({
//   initial: { opacity: 0, y: 32 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { delay: i * 0.06, duration: 0.42, type: "spring", bounce: 0.22 },
//   viewport: { once: true, amount: 0.12 }
// });

// const galleryEvents = [
//   {
//     name: "Inauguration of ITSA Club",
//     date: "5 Sept 2024",
//     images: [
//       "/assets/gallery/2024-25/inauguration/1.png",
//       "/assets/gallery/2024-25/inauguration/2.png",
//       "/assets/gallery/2024-25/inauguration/3.png",
//       "/assets/gallery/2024-25/inauguration/4.png",
//       "/assets/gallery/2024-25/inauguration/5.png",
//       "/assets/gallery/2024-25/inauguration/6.png",
//       // ... (all inauguration/teachers' day photos)
//     ]
//   },
//   {
//     name: "Teachers' Day Celebration",
//     date: "5 Sept 2024",
//     images: [
//       "/assets/gallery/2024-25/teachersday/1.png",
//       "/assets/gallery/2024-25/teachersday/2.png",
//       "/assets/gallery/2024-25/teachersday/3.png",
//       "/assets/gallery/2024-25/teachersday/4.png",
//       "/assets/gallery/2024-25/teachersday/5.png",
//       "/assets/gallery/2024-25/teachersday/6.png",
//        "/assets/gallery/2024-25/teachersday/7.png",
//       // ... (all inauguration/teachers' day photos)
//     ]
//   },
//   {
//     name: "Research to Reality: Ethical Guidelines Workshop",
//     date: "13 Sept 2024",
//     images: [
//       "/assets/gallery/2024-25/workshop/1.png",
//       "/assets/gallery/2024-25/workshop/2.png",
//       // ... (all workshop photos)
//     ]
//   },
//   {
//     name: "ITSA Sports Carnival",
//     date: "17–19 Jan 2025",
//     images: [
//       "/assets/gallery/2024-25/sports/1.png",
//       "/assets/gallery/2024-25/sports/2.png",
//       "/assets/gallery/2024-25/sports/3.png",
//       "/assets/gallery/2024-25/sports/4.png",
//       "/assets/gallery/2024-25/sports/5.png",
//       "/assets/gallery/2024-25/sports/6.png",
//       "/assets/gallery/2024-25/sports/7.png",
//       "/assets/gallery/2024-25/sports/8.png",
//       "/assets/gallery/2024-25/sports/9.png",
//       "/assets/gallery/2024-25/sports/10.png",
//       "/assets/gallery/2024-25/sports/11.png",
//       "/assets/gallery/2024-25/sports/12.png",
//       "/assets/gallery/2024-25/sports/13.png",

//       // ... (add all sports carnival photos)
//     ]
//   },
//   {
//     name: "Coding Contest under Pragyaa2k25",
//     date: "22 Feb 2025",
//     images: [
//       "/assets/gallery/2024-25/pragyaa/coding.png",
//       // ... (all coding contest photos)
//     ]
//   },
//   {
//     name: "Workshop on Python for AI/ML",
//     date: "22–23 Feb 2025",
//     images: [
//       "/assets/gallery/2024-25/workshop/3.png",
//       // ... (all workshop photos)
//     ]
//   },
//   {
//     name: "DSA Coding Contest",
//     date: "8 Apr 2025",
//     images: [
//       "/assets/gallery/2024-25/techeve2/1.png",
//       "/assets/gallery/2024-25/techeve2/2.png",
//       "/assets/gallery/2024-25/techeve2/3.png",
//       // ... (all DSA contest photos)
//     ]
//   },
//   {
//     name: "Problem-Solving Test (DSA/Tech Event)",
//     date: "5 Oct 2024",
//     images: [
//       "/assets/gallery/2024-25/techeve1/1.png",
//       "/assets/gallery/2024-25/techeve1/2.png",
//       // ... (all event photos)
//     ]
//   },
//   {
//     name: "Poster Presentation & Republic Day Celebration",
//     date: "26 Jan 2025",
//     images: [
//       "/assets/gallery/2024-25/posterpresentation_republicday/1.png",
//       "/assets/gallery/2024-25/posterpresentation_republicday/2.png",
//       "/assets/gallery/2024-25/posterpresentation_republicday/3.png",
//       "/assets/gallery/2024-25/posterpresentation_republicday/4.png",
//       "/assets/gallery/2024-25/posterpresentation_republicday/5.png",
//       // ... (all poster/republic day photos)
//     ]
//   }
// ];


// export default function Gallery() {
//   const [lightbox, setLightbox] = useState({ open: false, img: "", desc: "" });

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <motion.h2
//         className="text-4xl font-bold text-[#7c3aed] mb-8 text-center"
//         initial={{ opacity: 0, y: -24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         Gallery
//       </motion.h2>
//       <div className="space-y-16">
//         {galleryEvents.map((event, idx) => (
//           <motion.section
//             key={event.name}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             variants={fadeUpSection}
//             custom={idx}
//           >
//             <div className="mb-5 flex flex-col items-start sm:flex-row sm:items-center gap-2">
//               <h3 className="text-2xl sm:text-3xl font-bold text-[#7c3aed] mb-1">
//                 {event.name}
//               </h3>
//               <span className="block text-sm text-[#a78bfa] font-medium bg-[#ede9fe] rounded-full px-3 py-1">
//                 {event.date}
//               </span>
//             </div>
//             {event.images.length > 0 ? (
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                 {event.images.map((src, i) => (
//                   <motion.img
//                     key={i}
//                     src={src}
//                     alt={`${event.name} Photo ${i + 1}`}
//                     onClick={() => setLightbox({ open: true, img: src, desc: `${event.name} Photo ${i + 1}` })}
//                     {...fadeUpImg(i)}
//                     className="
//                       rounded-2xl shadow-lg object-cover aspect-square cursor-pointer
//                       transition-transform
//                       duration-300
//                       hover:scale-110
//                       hover:shadow-2xl
//                       border-2 border-transparent
//                       hover:border-[#a78bfa]
//                       bg-white
//                     "
//                     style={{ minHeight: 120, background: "rgba(246,246,255,0.15)" }}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-gray-400 italic ml-2">No pictures yet</div>
//             )}
//           </motion.section>
//         ))}
//       </div>

//       {/* --- Animated Lightbox Modal --- */}
//       {lightbox.open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
//           onClick={() => setLightbox({ open: false, img: "", desc: "" })}
//         >
//           <motion.div
//             className="relative max-w-3xl w-full flex flex-col items-center"
//             initial={{ scale: 0.92, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ type: "spring", bounce: 0.18, duration: 0.38 }}
//             onClick={e => e.stopPropagation()}
//           >
//             <img
//               src={lightbox.img}
//               alt={lightbox.desc}
//               className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-[#7c3aed]/40"
//             />
//             <div className="text-white text-center mt-4 text-base drop-shadow">{lightbox.desc}</div>
//             <button
//               className="absolute top-2 right-2 text-3xl text-white font-bold bg-black/60 rounded-full px-3 py-1 hover:bg-[#7c3aed]"
//               onClick={() => setLightbox({ open: false, img: "", desc: "" })}
//               aria-label="Close"
//             >&times;</button>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }





import { useState } from "react";
import { motion } from "framer-motion";

// --- Animated fade/slide variants (classic scroll reveal style) ---
const fadeUpSection = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.52, type: "spring", bounce: 0.20 }
  })
};
const fadeUpImg = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: i * 0.06, duration: 0.42, type: "spring", bounce: 0.22 },
  viewport: { once: true, amount: 0.12 }
});

const galleryEvents = [
  {
    name: "Inauguration of ITSA Club",
    date: "5 Sept 2024",
    images: [
      "/assets/gallery/2024-25/inauguration/1.png",
      "/assets/gallery/2024-25/inauguration/2.png",
      "/assets/gallery/2024-25/inauguration/3.png",
      "/assets/gallery/2024-25/inauguration/4.png",
      "/assets/gallery/2024-25/inauguration/5.png",
      "/assets/gallery/2024-25/inauguration/6.png",
      // ... (all inauguration/teachers' day photos)
    ]
  },
  {
    name: "Teachers' Day Celebration",
    date: "5 Sept 2024",
    images: [
      "/assets/gallery/2024-25/teachersday/1.png",
      "/assets/gallery/2024-25/teachersday/2.png",
      "/assets/gallery/2024-25/teachersday/3.png",
      "/assets/gallery/2024-25/teachersday/4.png",
      "/assets/gallery/2024-25/teachersday/5.png",
      "/assets/gallery/2024-25/teachersday/6.png",
       "/assets/gallery/2024-25/teachersday/7.png",
      // ... (all inauguration/teachers' day photos)
    ]
  },
  {
    name: "Research to Reality: Ethical Guidelines Workshop",
    date: "13 Sept 2024",
    images: [
      "/assets/gallery/2024-25/workshop/1.png",
      "/assets/gallery/2024-25/workshop/2.png",
      // ... (all workshop photos)
    ]
  },
  {
    name: "ITSA Sports Carnival",
    date: "17–19 Jan 2025",
    images: [
      "/assets/gallery/2024-25/sports/1.png",
      "/assets/gallery/2024-25/sports/2.png",
      "/assets/gallery/2024-25/sports/3.png",
      "/assets/gallery/2024-25/sports/4.png",
      "/assets/gallery/2024-25/sports/5.png",
      "/assets/gallery/2024-25/sports/6.png",
      "/assets/gallery/2024-25/sports/7.png",
      "/assets/gallery/2024-25/sports/8.png",
      "/assets/gallery/2024-25/sports/9.png",
      "/assets/gallery/2024-25/sports/10.png",
      "/assets/gallery/2024-25/sports/11.png",
      "/assets/gallery/2024-25/sports/12.png",
      "/assets/gallery/2024-25/sports/13.png",

      // ... (add all sports carnival photos)
    ]
  },
  {
    name: "Coding Contest under Pragyaa2k25",
    date: "22 Feb 2025",
    images: [
      "/assets/gallery/2024-25/pragyaa/coding.png",
      // ... (all coding contest photos)
    ]
  },
  {
    name: "Workshop on Python for AI/ML",
    date: "22–23 Feb 2025",
    images: [
      "/assets/gallery/2024-25/workshop/3.png",
      // ... (all workshop photos)
    ]
  },
  {
    name: "DSA Coding Contest",
    date: "8 Apr 2025",
    images: [
      "/assets/gallery/2024-25/techeve2/1.png",
      "/assets/gallery/2024-25/techeve2/2.png",
      "/assets/gallery/2024-25/techeve2/3.png",
      // ... (all DSA contest photos)
    ]
  },
  {
    name: "Problem-Solving Test (DSA/Tech Event)",
    date: "5 Oct 2024",
    images: [
      "/assets/gallery/2024-25/techeve1/1.png",
      "/assets/gallery/2024-25/techeve1/2.png",
      // ... (all event photos)
    ]
  },
  {
    name: "Poster Presentation & Republic Day Celebration",
    date: "26 Jan 2025",
    images: [
      "/assets/gallery/2024-25/posterpresentation_republicday/1.png",
      "/assets/gallery/2024-25/posterpresentation_republicday/2.png",
      "/assets/gallery/2024-25/posterpresentation_republicday/3.png",
      "/assets/gallery/2024-25/posterpresentation_republicday/4.png",
      "/assets/gallery/2024-25/posterpresentation_republicday/5.png",
      "/assets/gallery/2024-25/posterpresentation_republicday/republicday1.jpg",
      "/assets/gallery/2024-25/posterpresentation_republicday/republicday2.jpg",
      // "/assets/gallery/2024-25/posterpresentation_republicday/republicday3.mp4",
      // ... (all poster/republic day photos)
    ]
  }
];


export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, img: "", desc: "" });

  return (
    <div className="
      flex flex-col min-h-screen pt-16
      bg-gradient-to-tr from-[#17132a] via-[#23214b] to-[#2e225a]
      px-4 pb-12
    ">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#7c3aed] mb-12 text-center drop-shadow"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Gallery
        </motion.h2>
        <div className="space-y-20">
          {galleryEvents.map((event, idx) => (
            <motion.section
              key={event.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUpSection}
              custom={idx}
              className="rounded-3xl bg-gradient-to-tr from-[#23214bbc] to-[#2e225a88] backdrop-blur-xl shadow-xl px-3 py-7 md:p-8"
            >
              <div className="mb-5 flex flex-col items-start sm:flex-row sm:items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#a78bfa] mb-1 drop-shadow">{event.name}</h3>
                <span className="block text-sm font-medium rounded-full px-3 py-1 shadow 
                  bg-gradient-to-r from-[#7c3aed55] via-[#67e8f955] to-[#a78bfa34] text-[#f5f3ff] backdrop-blur-[4px]">
                  {event.date}
                </span>
              </div>
              {event.images.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {event.images.map((src, i) => (
                    <motion.img
                      key={src}
                      src={src}
                      alt={`${event.name} Photo ${i + 1}`}
                      onClick={() => setLightbox({ open: true, img: src, desc: `${event.name} Photo ${i + 1}` })}
                      initial={fadeUpImg(i).initial}
                      whileInView={fadeUpImg(i).whileInView}
                      transition={fadeUpImg(i).transition}
                      viewport={fadeUpImg(i).viewport}
                      className="rounded-2xl bg-gradient-to-br from-[#23214bcc] to-[#2e225acc] shadow-lg object-cover aspect-square cursor-pointer
                        hover:shadow-2xl hover:scale-110
                        border-2 border-transparent hover:border-[#a78bfa] group overflow-hidden
                        transition-all"
                      style={{ minHeight: 120 }}
                      draggable={false}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-[#8a96c7] italic ml-2">No pictures yet</div>
              )}
            </motion.section>
          ))}
        </div>
      </div>
      {/* --- Animated Lightbox Modal --- */}
      {lightbox.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setLightbox({ open: false, img: "", desc: "" })}
        >
          <motion.div
            className="relative max-w-3xl w-full flex flex-col items-center
              rounded-3xl bg-gradient-to-br from-[#23214bcc] to-[#2e225acc] border border-[#7c3aed88]
              shadow-2xl backdrop-blur-xl p-5"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.18, duration: 0.34 }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.desc}
              className="w-full max-h-[70vh] object-contain rounded-2xl shadow-xl border-4 border-[#7c3aed]/30"
            />
            <div className="text-[#c4b5fd] text-center mt-4 text-base drop-shadow">
              {lightbox.desc}
            </div>
            <button
              className="absolute top-2 right-2 text-3xl text-white font-bold bg-black/70 rounded-full px-3 py-1 hover:bg-[#7c3aed] transition"
              onClick={() => setLightbox({ open: false, img: "", desc: "" })}
              aria-label="Close"
            >&times;</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}