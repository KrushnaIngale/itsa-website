// import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";

// // == 2025–26 (current): as you had ==
// const TEAM_BY_YEAR = {
//   "2025–26": [
//     {
//       committee: "Leads",
//       members: [
//         { name: "Om Rakhade", role: "President", img: "/assets/team/2025-26/leads/Om Rakhade.png"  },
//         { name: "Aditya Gadiwan", role: "Vice-President", img: "/assets/team/2025-26/leads/Aditya Gadiwan.jpg" }
//       ]
//     },
//     {
//       committee: "Technical Committee",
//       members: [
//         { name: "Krushna Ingale", role: "Technical Head" , img: "/assets/team/2025-26/techincal/Krushna Ingale.jpg" },
//         { name: "Mrunmai Wadgaonkar", role: "Technical Head", img: "/assets/team/2025-26/techincal/Mrunmai Wadgaonkar.jpg" },
//         { name: "Ramprasad Londhe", role: "Technical Main Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Pratik Shinde", role: "Technical Main Co-ordinator", img: "/assets/team/2025-26/techincal/Pratik shinde.jpg" },
//         { name: "Dharmraj Deshmukh", role: "Technical Co-head" ,img: "/assets/team/2025-26/techincal/Dharamveer Deshmukh.jpg" },
//         { name: "Bhushan Chaudhari", role: "Technical Joint Co-ordinator", img: "/assets/team/2025-26/techincal/BHUSHAN CHARANDAS CHAUDHARI.jpg" }
//       ]
//     },
//     {
//       committee: "Sports Committee",
//       members: [
//         { name: "Anurag Bhavtankar", role: "Sports Head", img: "/assets/team/2025-26/sports/Anurag Bhavthankar.jpg" },
//         { name: "Shailesh Kasbekar", role: "Sports Main Co-ordinator", img: "/assets/team/2025-26/sports/Shailesh kasbekar.jpg" },
//         { name: "Sonam Chandel", role: "Sports Main Co-ordinator", img: "/assets/team/2025-26/sports/Sonam Chandel.jpg" },
//         { name: "Vardhan Wanjari", role: "Sports Co-head", img: "/assets/team/2025-26/sports/VARDHAN UMESH WANJARI.jpg"  },
//         { name: "Yash Bangalkar", role: "Sports Joint Co-ordinator", img: "/assets/team/2025-26/sports/exe.png"  }
//       ]
//     },
//     {
//       committee: "Cultural Committee",
//       members: [
//         { name: "Shreyash Talankar", role: "Cultural Head", img: "/assets/team/2025-26/techincal/exe.png"  },
//         { name: "Mansi Jagtap", role: "Cultural Main Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Rahul Ambore", role: "Cultural Main Co-ordinator", img: "/assets/team/2025-26/cultural/Rahul Ambhore.jpg" },
//         { name: "Nandini Chintewad", role: "Cultural Co-head", img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Mayuri Avalwar", role: "Cultural Co-head", img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Shravani kharwadkar", role: "Cultural Joint Co-ordinator" ,img: "/assets/team/2025-26/cultural/SHRAVANI SUSHIL KHARWADKAR.jpg"  }
//       ]
//     },
//     {
//       committee: "Media Committee",
//       members: [
//         { name: "Keshav Rathod", role: "Media Head", img: "/assets/team/2025-26/media/Keshav Rathod.jpg" },
//         { name: "Amit Gavane", role: "Media Main Co-ordinator", img: "/assets/team/2025-26/media/image.png" },
//         { name: "Rahul Gulade", role: "Media Co-head", img: "/assets/team/2025-26/media/exe.png" },
//         { name: "Aditya Mirajgave", role: "Media Joint Co-ordinator", img: "/assets/team/2025-26/media/Adetya.jpg" }
//       ]
//     },
//     {
//       committee: "Finance Committee",
//       members: [
//         { name: "Sukhbir Singh", role: "Finance Head", img: "/assets/team/2025-26/finance/SUKHBIR SINGH POTHIWAL.jpg" },
//         { name: "Chinmay Kulkarni", role: "Finance Main Co-ordinator", img: "/assets/team/2025-26/finance/Chinmay Kulkarni.png" },
//         { name: "Rohan Mane", role: "Finance Main Co-ordinator", img: "/assets/team/2025-26/finance/exe.png" },
//         { name: "Alok Singh", role: "Finance Co-head", img: "/assets/team/2025-26/finance/ALOK KANCHANESH SINGH.jpg" },
//         { name: "Virendrasingh Pujari", role: "Finance Joint Co-ordinator", img: "/assets/team/2025-26/finance/exe.png" }
//       ]
//     },
//     {
//       committee: "Anchoring Committee",
//       members: [
//         { name: "Jaskiran Kaur", role: "Anchoring Head" ,img: "/assets/team/2025-26/anchor/JASKIRANDEEP KAUR RAJVINDER SINGH CHAHAL.jpeg" },
//         { name: "Priti Sanghai", role: "Anchoring Main Co-ordinator", img: "/assets/team/2025-26/anchor/PRITI VISHAL SANGHAI.jpg" },
//         { name: "Rohan Mane", role: "Anchoring Main Co-ordinator", img: "/assets/team/2025-26/anchor/exe.png" },
//         { name: "Divya Kalantre", role: "Anchoring Joint Co-ordinator" ,img: "/assets/team/2025-26/anchor/Divyaaa.jpg" }
//       ]
//     },
//     {
//       committee: "Alumni & Relations Committee",
//       members: [
//         { name: "Manas Aware", role: "Alumni and Relation Head" ,img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Ritesh Yevatkar", role: "Alumni and Relation Head", img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Shubhangi Pawar", role: "Alumni Main Co-ordinator" ,img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Vishal Bharde", role: "Alumni Main Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Shrish Wadgaonkar", role: "Alumni Joint Co-ordinator" ,img: "/assets/team/2025-26/alumini/Shrish J.S.Wadgaonkar.jpg" }
//       ]
//     },
//     {
//       committee: "SY Committee",
//       members: [
//         { name: "Shreyash Sable", role: "SY Co-ordinator" ,img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Palak Baldawa", role: "SY Joint Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" },
//         { name: "Tanishq Raut", role: "SY Joint Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" }
//       ]
//     },
//     {
//       committee: "Faculty Coordinators",
//       members: [
//         { name: "Dr. A. D. Sawarkar", role: "Faculty Coordinator", img: "/assets/team/2025-26/faculty/ads.png" },
//         { name: "Dr. G. K. Pakle", role: "Head of Department", img: "/assets/team/2025-26/faculty/hod.png" },
//         { name: "Prof. S. B. Dethe", role: "Dean Student Affairs", img: "/assets/team/2025-26/techincal/exe.png" }
//       ]
//     }
//   ],

//   // === 2024–25: Section-wise, role-ordered, all cards have name/role/photo ===
//   "2024–25": [
//     {
//       committee: "Leads",
//       members: [
//         { name: "Pushkar Chauhan", role: "President", img: "/assets/team/2024-25/leads/president1.jpg" },
//         { name: "Kushal Singh Kathuriya", role: "President", img: "/assets/team/2024-25/leads/president2.jpg" },
//         { name: "Om Gore", role: "Vice President", img: "/assets/team/2024-25/leads/vicePresident1.png" },
//         { name: "Vaibhavi Zamde", role: "Vice President", img: "/assets/team/2024-25/leads/vicePresident2.jpg" }
//       ]
//     },
//     {
//       committee: "Technical Committee",
//       members: [
//         { name: "Tanmay Raut", role: "Technical Head", img: "/assets/team/2024-25/techincal/exe.png" },
//         { name: "Ganesh Mane", role: "Technical Head", img: "/assets/team/2024-25/techincal/TechnicalHead2.jpg" },
//         { name: "Pruthvi Gaikwad", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal/TechnicalCoordinator.png" },
//         { name: "Mukesh Bagal", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal/TechnicalCoordinator1.jpg" },
//         { name: "Shubham Pawar", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal//TechnicalCoordinator2.jpg" },
//         { name: "Vedant Kalandre", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal/TechnicalCoordinator3.jpg" },
//         { name: "Govindraj Wattamwar", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal/TechnicalCoordinator4.jpg" }
//       ]
//     },
//     {
//       committee: "Cultural Committee",
//       members: [
//         { name: "Shruti Parsodkar", role: "Cultural Head", img: "/assets/team/2024-25/cultural/culturalHead1.jpg" }
//       ]
//     },
//     {
//       committee: "Media Committee",
//       members: [
//         { name: "Devansh Sharma", role: "Media Head", img: "/assets/team/2024-25/media/mediaHead1.png" },
//         { name: "Keshav Rathod", role: "Media Head", img: "/assets/team/2024-25/media/mediaHead2.png" },
//         { name: "Palash Kawade", role: "Media Coordinator", img: "/assets/team/2024-25/media/Palash_Kawade.jpg" }
//       ]
//     },
//     {
//       committee: "Sports Committee",
//       members: [
//         { name: "Vaibhav Ingole", role: "Sports Head", img: "/assets/team/2024-25/sports/sportsHead1.jpg" },
//         { name: "Ashutosh Hamand", role: "Sports Head", img: "/assets/team/2024-25/sports/Ashutosh_Hamand.jpg" },
//         { name: "Lawkesh Dhurve", role: "Sports Coordinator", img: "/assets/team/2024-25/sports/SportsCoordinator2.png" },
//         { name: "Om Rakhade", role: "Sports Coordinator", img: "/assets/team/2024-25/sports/SportsCoordinator1.png" }
//       ]
//     },
//     {
//       committee: "Finance Committee",
//       members: [
//         { name: "Dnyaneshwar Bajad", role: "Finance Head", img: "/assets/team/2024-25/finance/itsa-website/public/assets/team/2024-25/finance/exe.png" },
//         { name: "Ashray Wankhede", role: "Finance Head", img: "/assets/team/2024-25/finance/financeHead1.jpg" },
//         { name: "Utkarsh Kshirsagar", role: "Finance Coordinator", img: "/assets/team/2024-25/finance/FinanceCoordinator1.jpg" },
//         { name: "Pavan Godage", role: "Finance Coordinator", img: "/assets/team/2024-25/finance/FinanceCoordinator2.jpg" }
//       ]
//     },
//     {
//       committee: "Faculty Coordinators",
//       members: [
//         { name: "Dr. Ganesh Pakle", role: "Head of Department", img: "/assets/team/2024-25/faculty/Ganesh_Pakle.jpg" },
//         { name: "Dr. Ankush Sawarkar", role: "Faculty-Coordinator", img: "/assets/team/2024-25/faculty/Ankush_Sawarkar.jpg" }
//       ]
//     }
//   ]
// };

// const YEARS = ["2025–26", "2024–25"];

// const cardVariants = {
//   offscreen: { opacity: 0, y: 40 },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", bounce: 0.35, duration: 0.6 }
//   }
// };

// export default function Team() {
//   const [selectedYear, setSelectedYear] = useState(YEARS[0]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const committeeGroups = TEAM_BY_YEAR[selectedYear];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h2 className="text-4xl font-bold mb-4 text-[#7c3aed]">ITSA Team</h2>
//       <div className="flex items-center gap-4 mb-10">
//         <label className="font-semibold text-[#a78bfa]">Select Academic Year:</label>
//         <div className="relative">
//           <button
//             className="flex items-center bg-[#ede9fe] border border-[#a78bfa] px-6 py-2 font-semibold rounded-2xl shadow hover:bg-[#a78bfa]/20 transition focus:outline-none"
//             onClick={() => setDropdownOpen(open => !open)}
//           >
//             <span className="text-[#7c3aed] text-lg mr-2">{selectedYear}</span>
//             <ChevronDownIcon className={`w-5 h-5 text-[#7c3aed] transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
//           </button>
//           {dropdownOpen && (
//             <ul className="absolute left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border z-20">
//               {YEARS.map(year => (
//                 <li key={year}>
//                   <button
//                     className={`w-full text-left px-4 py-2 text-md hover:bg-[#ede9fe] ${
//                       year === selectedYear ? "text-[#7c3aed] font-bold" : "text-[#322365]"
//                     }`}
//                     onClick={() => {
//                       setSelectedYear(year);
//                       setDropdownOpen(false);
//                     }}
//                   >
//                     {year}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//       {committeeGroups && committeeGroups.length > 0 ? (
//         committeeGroups.map(({ committee, members }) => (
//           <section key={committee} className="mb-20"> {/* more space below */}
//             <h3 className="text-2xl md:text-3xl font-bold mb-10 text-[#a78bfa] tracking-wide">{committee}</h3>
//             <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"> {/* increased gap */}
//               {members.map((e, idx) => (
//                 <motion.div
//                   key={e.name + e.role}
//                   className="bg-white/95 rounded-3xl shadow-2xl border-t-4 border-[#7c3aed] flex flex-col items-center p-12 transition hover:shadow-3xl group hover:-translate-y-2"
//                   initial="offscreen"
//                   whileInView="onscreen"
//                   viewport={{ once: true, margin: "-80px" }}
//                   variants={cardVariants}
//                 >
//                   <img
//                     className="w-36 h-36 rounded-full mb-6 object-cover border-4 border-[#a78bfa] shadow group-hover:border-[#7c3aed] transition"
//                     src={e.img || "/assets/default.jpg"}
//                     alt={e.name}
//                   />
//                   <div className="font-bold text-[#7c3aed] text-2xl mb-3 text-center">{e.name}</div>
//                   <div className="text-lg text-gray-700 font-medium text-center">{e.role}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </section>
//         ))
//       ) : (
//         <div className="text-center text-gray-500 py-24 text-lg">
//           No team data for {selectedYear} yet.
//         </div>
//       )}
//     </div>
//   );
// }








import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// == 2025–26 (current): as you had ==
const TEAM_BY_YEAR = {
  "2025–26": [
    {
      committee: "Faculty Coordinators",
      members: [
        { name: "Dr. A. D. Sawarkar", role: "Faculty Coordinator", img: "/assets/team/2025-26/faculty/ads.png" },
        { name: "Dr. G. K. Pakle", role: "Head of Department", img: "/assets/team/2025-26/faculty/hod.png" },
        { name: "Prof. S. B. Dethe", role: "Dean Student Affairs", img: "/assets/team/2025-26/techincal/exe.png" }
      ]
    },
    {
      committee: "Leads",
      members: [
        { name: "Om Rakhade", role: "President", img: "/assets/team/2025-26/leads/Om Rakhade.png"  },
        { name: "Aditya Gadiwan", role: "Vice-President", img: "/assets/team/2025-26/leads/Aditya Gadiwan.jpg" }
      ]
    },
    {
      committee: "Technical Committee",
      members: [
        { name: "Krushna Ingale", role: "Technical Head" , img: "/assets/team/2025-26/techincal/Krushna Ingale.jpg" },
        { name: "Mrunmai Wadgaonkar", role: "Technical Head", img: "/assets/team/2025-26/techincal/Mrunmai Wadgaonkar.jpg" },
        { name: "Ramprasad Londhe", role: "Technical Main Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Pratik Shinde", role: "Technical Main Co-ordinator", img: "/assets/team/2025-26/techincal/Pratik shinde.jpg" },
        { name: "Dharmraj Deshmukh", role: "Technical Co-head" ,img: "/assets/team/2025-26/techincal/Dharamveer Deshmukh.jpg" },
        { name: "Bhushan Chaudhari", role: "Technical Joint Co-ordinator", img: "/assets/team/2025-26/techincal/BHUSHAN CHARANDAS CHAUDHARI.jpg" }
      ]
    },
    {
      committee: "Sports Committee",
      members: [
        { name: "Anurag Bhavtankar", role: "Sports Head", img: "/assets/team/2025-26/sports/Anurag Bhavthankar.jpg" },
        { name: "Shailesh Kasbekar", role: "Sports Main Co-ordinator", img: "/assets/team/2025-26/sports/Shailesh kasbekar.jpg" },
        { name: "Sonam Chandel", role: "Sports Main Co-ordinator", img: "/assets/team/2025-26/sports/Sonam Chandel.jpg" },
        { name: "Vardhan Wanjari", role: "Sports Co-head", img: "/assets/team/2025-26/sports/VARDHAN UMESH WANJARI.jpg"  },
        { name: "Yash Bangalkar", role: "Sports Joint Co-ordinator", img: "/assets/team/2025-26/sports/exe.png"  }
      ]
    },
    {
      committee: "Cultural Committee",
      members: [
        { name: "Shreyash Talankar", role: "Cultural Head", img: "/assets/team/2025-26/techincal/exe.png"  },
        { name: "Mansi Jagtap", role: "Cultural Main Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Rahul Ambore", role: "Cultural Main Co-ordinator", img: "/assets/team/2025-26/cultural/Rahul Ambhore.jpg" },
        { name: "Nandini Chintewad", role: "Cultural Co-head", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Mayuri Avalwar", role: "Cultural Co-head", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Shravani kharwadkar", role: "Cultural Joint Co-ordinator" ,img: "/assets/team/2025-26/cultural/SHRAVANI SUSHIL KHARWADKAR.jpg"  }
      ]
    },
    {
      committee: "Media Committee",
      members: [
        { name: "Keshav Rathod", role: "Media Head", img: "/assets/team/2025-26/media/Keshav Rathod.jpg" },
        { name: "Amit Gavane", role: "Media Main Co-ordinator", img: "/assets/team/2025-26/media/image.png" },
        { name: "Rahul Gulade", role: "Media Co-head", img: "/assets/team/2025-26/media/exe.png" },
        { name: "Aditya Mirajgave", role: "Media Joint Co-ordinator", img: "/assets/team/2025-26/media/Adetya.jpg" }
      ]
    },
    {
      committee: "Finance Committee",
      members: [
        { name: "Sukhbir Singh", role: "Finance Head", img: "/assets/team/2025-26/finance/SUKHBIR SINGH POTHIWAL.jpg" },
        { name: "Chinmay Kulkarni", role: "Finance Main Co-ordinator", img: "/assets/team/2025-26/finance/Chinmay Kulkarni.png" },
        { name: "Rohan Mane", role: "Finance Main Co-ordinator", img: "/assets/team/2025-26/finance/exe.png" },
        { name: "Alok Singh", role: "Finance Co-head", img: "/assets/team/2025-26/finance/ALOK KANCHANESH SINGH.jpg" },
        { name: "Virendrasingh Pujari", role: "Finance Joint Co-ordinator", img: "/assets/team/2025-26/finance/exe.png" }
      ]
    },
    {
      committee: "Anchoring Committee",
      members: [
        { name: "Jaskiran Kaur", role: "Anchoring Head" ,img: "/assets/team/2025-26/anchor/JASKIRANDEEP KAUR RAJVINDER SINGH CHAHAL.jpeg" },
        { name: "Priti Sanghai", role: "Anchoring Main Co-ordinator", img: "/assets/team/2025-26/anchor/PRITI VISHAL SANGHAI.jpg" },
        { name: "Rohan Mane", role: "Anchoring Main Co-ordinator", img: "/assets/team/2025-26/anchor/exe.png" },
        { name: "Divya Kalantre", role: "Anchoring Joint Co-ordinator" ,img: "/assets/team/2025-26/anchor/Divyaaa.jpg" }
      ]
    },
    {
      committee: "Alumni & Relations Committee",
      members: [
        { name: "Manas Aware", role: "Alumni and Relation Head" ,img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Ritesh Yevatkar", role: "Alumni and Relation Head", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Shubhangi Pawar", role: "Alumni Main Co-ordinator" ,img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Vishal Bharde", role: "Alumni Main Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Shrish Wadgaonkar", role: "Alumni Joint Co-ordinator" ,img: "/assets/team/2025-26/alumini/Shrish J.S.Wadgaonkar.jpg" }
      ]
    },
    {
      committee: "SY Committee",
      members: [
        { name: "Shreyash Sable", role: "SY Co-ordinator" ,img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Palak Baldawa", role: "SY Joint Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Tanishq Raut", role: "SY Joint Co-ordinator", img: "/assets/team/2025-26/techincal/exe.png" }
      ]
    }
  ],

  // === 2024–25: Section-wise, role-ordered, all cards have name/role/photo ===
  "2024–25": [
    {
      committee: "Faculty Coordinators",
      members: [
        { name: "Dr. Ganesh Pakle", role: "Head of Department", img: "/assets/team/2025-26/faculty/hod.png" },
        { name: "Dr. Ankush Sawarkar", role: "Faculty-Coordinator", img: "/assets/team/2025-26/faculty/ads.png" }
      ]
    },
    {
      committee: "Leads",
      members: [
        { name: "Pushkar Chauhan", role: "President", img: "/assets/team/2024-25/leads/president1.jpg" },
        { name: "Kushal Singh Kathuriya", role: "President", img: "/assets/team/2024-25/leads/president2.jpg" },
        { name: "Om Gore", role: "Vice President", img: "/assets/team/2024-25/leads/vicePresident1.png" },
        { name: "Vaibhavi Zamde", role: "Vice President", img: "/assets/team/2024-25/leads/vicePresident2.jpg" }
      ]
    },
    {
      committee: "Technical Committee",
      members: [
        { name: "Tanmay Raut", role: "Technical Head", img: "/assets/team/2024-25/techincal/exe.png" },
        { name: "Ganesh Mane", role: "Technical Head", img: "/assets/team/2024-25/techincal/TechnicalHead2.jpg" },
        { name: "Pruthvi Gaikwad", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal/TechnicalCoordinator.png" },
        { name: "Mukesh Bagal", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal/TechnicalCoordinator1.jpg" },
        { name: "Shubham Pawar", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal//TechnicalCoordinator2.jpg" },
        { name: "Vedant Kalandre", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal/TechnicalCoordinator3.jpg" },
        { name: "Govindraj Wattamwar", role: "Technical Coordinator", img: "/assets/team/2024-25/techincal/TechnicalCoordinator4.jpg" }
      ]
    },
    {
      committee: "Cultural Committee",
      members: [
        { name: "Shruti Parsodkar", role: "Cultural Head", img: "/assets/team/2024-25/cultural/culturalHead1.jpg" }
      ]
    },
    {
      committee: "Media Committee",
      members: [
        { name: "Devansh Sharma", role: "Media Head", img: "/assets/team/2024-25/media/mediaHead1.png" },
        { name: "Keshav Rathod", role: "Media Head", img: "/assets/team/2024-25/media/mediaHead2.png" },
        { name: "Palash Kawade", role: "Media Coordinator", img: "/assets/team/2025-26/techincal/exe.png" }
      ]
    },
    {
      committee: "Sports Committee",
      members: [
        { name: "Vaibhav Ingole", role: "Sports Head", img: "/assets/team/2024-25/sports/sportsHead1.jpg" },
        { name: "Ashutosh Hamand", role: "Sports Head", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Lawkesh Dhurve", role: "Sports Coordinator", img: "/assets/team/2024-25/sports/SportsCoordinator2.png" },
        { name: "Om Rakhade", role: "Sports Coordinator", img: "/assets/team/2024-25/sports/SportsCoordinator1.png" }
      ]
    },
    {
      committee: "Finance Committee",
      members: [
        { name: "Dnyaneshwar Bajad", role: "Finance Head", img: "/assets/team/2025-26/techincal/exe.png" },
        { name: "Ashray Wankhede", role: "Finance Head", img: "/assets/team/2024-25/finance/financeHead1.jpg" },
        { name: "Utkarsh Kshirsagar", role: "Finance Coordinator", img: "/assets/team/2024-25/finance/FinanceCoordinator1.jpg" },
        { name: "Pavan Godage", role: "Finance Coordinator", img: "/assets/team/2024-25/finance/FinanceCoordinator2.jpg" }
      ]
    }
  ]
};

const YEARS = ["2025–26", "2024–25"];
const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.35, duration: 0.6 }
  }
};

export default function Team() {
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const committeeGroups = TEAM_BY_YEAR[selectedYear];

  return (
    <div className="
      flex flex-col min-h-screen
      bg-gradient-to-tr from-[#17132a] via-[#23214b] to-[#2e225a]
      pt-16 px-4 pb-10
      ">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title and Dropdown */}
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#7c3aed] drop-shadow">
          ITSA Team
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <label className="font-semibold text-[#67e8f9]">Select Academic Year:</label>
          <div className="relative">
            <button
              className="
                flex items-center
                bg-gradient-to-br from-[#23214bee] to-[#2e225acc]
                border border-[#a78bfa88]
                px-6 py-2 font-semibold rounded-2xl shadow
                hover:bg-[#312866] hover:border-[#67e8f9]
                transition focus:outline-none"
              onClick={() => setDropdownOpen(open => !open)}
            >
              <span className="text-[#67e8f9] text-lg mr-2">{selectedYear}</span>
              <ChevronDownIcon className={`w-5 h-5 text-[#a78bfa] transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-44 bg-gradient-to-br from-[#23214bee] to-[#2e225acc] rounded-xl shadow-lg border z-20">
                {YEARS.map(year => (
                  <li key={year}>
                    <button
                      className={`w-full text-left px-4 py-2 text-md hover:bg-[#2d235a77] ${
                        year === selectedYear ? "text-[#67e8f9] font-bold" : "text-[#c4b5fd]"
                      }`}
                      onClick={() => {
                        setSelectedYear(year);
                        setDropdownOpen(false);
                      }}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Team display */}
        {committeeGroups && committeeGroups.length > 0 ? (
          committeeGroups.map(({ committee, members }) => (
            <section key={committee} className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-[#a78bfa] tracking-wider uppercase bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#7c3aed]">
                {committee}
              </h3>
              <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {members.map((e, idx) => (
                  <motion.div
  key={e.name + e.role}
  className="
    bg-gradient-to-br 
      from-[#312866cc] 
      via-[#544c7e77] 
      to-[#8366eccc]
    rounded-3xl shadow-2xl ring-2 ring-[#67e8f980]
    border-t-4 border-[#67e8f9]
    flex flex-col items-center p-10
    hover:shadow-[0_8px_48px_0_rgba(103,232,249,0.19)]
    hover:-translate-y-2 
    group transition-all backdrop-blur-[7.5px]"
  initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: false, margin: "-80px" }}
  variants={cardVariants}
>
  <img
    className="w-36 h-36 rounded-full mb-6 object-cover border-4 border-[#a78bfa] shadow group-hover:border-[#67e8f9] transition"
    src={e.img || "/assets/default.jpg"}
    alt={e.name}
    loading="lazy" 
  />
  <div className="font-bold text-[#a78bfa] text-2xl mb-3 text-center">{e.name}</div>
  <div className="text-lg text-[#c4b5fd] font-medium text-center">{e.role}</div>
</motion.div>

                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center text-[#c4b5fd] py-24 text-lg">
            No team data for {selectedYear} yet.
          </div>
        )}
      </div>
    </div>
  );
}