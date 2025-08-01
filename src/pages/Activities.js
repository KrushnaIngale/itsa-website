import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
// --- Eye-catching Timeline Component for 2025–26 ---
import { motion } from "framer-motion";

// --- DATA: FULL ACTIVITIES BY YEAR ---

const ACTIVITIES_BY_YEAR = {
  "2025–26": [
    // Each event includes: icon (category), month, title, date, category, description
    {
      icon: "🎉",
      month: "Aug",
      title: "Inauguration + Cultural Event",
      date: "1 Aug 2025",
      category: "Cultural & Club Activity",
      description: "Felicitated 2024–25 batch and hosted open stage performances. Club officially launched for the new year."
    },
    {
      icon: "🏓",
      month: "Aug",
      title: "Table Tennis",
      date: "2 Aug 2025",
      category: "Sports",
      description: "Sports event for table tennis—first week kick-off for the year."
    },
    {
      icon: "🎯",
      month: "Aug",
      title: "GATE 2026 Prep Talk",
      date: "7 Aug 2025",
      category: "Technical/Seminar",
      description: "Seminar on GATE exam strategies and benefits."
    },
    {
      icon: "🇮🇳",
      month: "Aug",
      title: "Independence Day + Poster Presentation",
      date: "15 Aug 2025",
      category: "Club Activity",
      description: "Wall magazine inauguration, poster presentation, Independence Day celebration."
    },
    {
      icon: "📝",
      month: "Aug",
      title: "Workshop: Ethical Guidelines for Research",
      date: "Last week Aug 2025",
      category: "Up-Skill Technical Workshop",
      description: "1-Day workshop on research paper writing/publishing for SGGS/other college students."
    },
    {
      icon: "🎓",
      month: "Sept",
      title: "Teacher’s Day & ITSA Anniversary",
      date: "8 Sep 2025",
      category: "Club Activity",
      description: "Teachers’ Day and club anniversary celebration."
    },
    {
      icon: "💻",
      month: "Sept",
      title: "Tech Bootcamps & Workshops",
      date: "Sept 2025",
      category: "Technical",
      description: "Web Dev, AI/ML, UI/UX, Cybersecurity bootcamps for all years."
    },
    {
      icon: "🧑‍💼",
      month: "Sept",
      title: "Alumni Virtual Meetup #1",
      date: "Sept 2025",
      category: "Placement/Alumni Network",
      description: "Alumni share industry tips. Mentorship chain building."
    },
    {
      icon: "🏢",
      month: "Sept",
      title: "Industry Visit",
      date: "Sept 2025",
      category: "Placement Activity",
      description: "Connect with industry for internships, placements."
    },
    // ...Continue with Blood Donation, Mock Drive, Workshop on Python, Doctor Talk, LinkedIn Sessions, Coding Contest, Conference, Hackathon, etc.
    {
      icon: "❤️",
      month: "Oct",
      title: "Blood/Cloth Donation",
      date: "1 Oct 2025",
      category: "Social",
      description: "Blood donation at IT dept / Cloth donation at GMC."
    },
    {
      icon: "📄",
      month: "Oct",
      title: "Mock Placement Drive + Resume Building",
      date: "Oct 2025",
      category: "Placement/Skill",
      description: "Aptitude, tech, HR rounds; resume/LinkedIn workshops."
    },
    {
      icon: "💡",
      month: "Oct",
      title: "Workshop on Python",
      date: "Oct 2025",
      category: "Up-Skill Technical Workshop",
      description: "Industry expert session on Python’s real-world usage."
    },
    // ...Continue for rest of the events up to Mar–Apr 2026 as detailed in your annual plan!
    // Each event can have its own icon (🎬, 🧠, ⚽, etc.), color tags, etc.
  ],
  "2024–25": [

        {
      title: "Inauguration of ITSA Club & Teachers' Day",
      date: "5 Sept 2024",
      category: "Club Launch & Social",
      participants: null, // Or a best-estimate/leave blank if not specified
      summary:
        "Formal launch of ITSA Club (by Dr. Ganesh K. Pakle); Teachers’ Day quiz for faculty, cultural music performances, and leadership appointments."
    },
    {
      title: "Research to Reality: Ethical Guidelines Workshop",
      date: "13 Sept 2024",
      category: "Academic Workshop",
      participants: null,
      summary:
        "Expert session by Dr. Omprakash Tembhurne on research ethics—plagiarism, data integrity, publication best practices, and Q&A for IT students."
    },
    {
      title: "Problem-Solving Test (First Technical Event)",
      date: "5 Oct 2024",
      category: "Technical Event",
      participants: null, // estimate if known
      summary:
        "Data structures & algorithms coding test: DSA, arrays/strings, trees, DP, sorting; individual competition, certificates to top performers."
    },
    {
      title: "Poster Presentation & Republic Day Celebration",
      date: "26 Jan 2025",
      category: "Academic + National Event",
      participants: null,
      summary:
        "Student poster presentation on technical and patriotic themes, followed by flag-hoisting, songs, and cultural program on campus."
    },


    {
      title: "ITSA Sports Carnival",
      date: "17–19 Jan 2025",
      category: "Sport Event",
      participants: 300,
      summary:
        "A vibrant celebration mixing Cricket, Football, Basketball, Volleyball, Kabaddi, Badminton, BGMI, Free Fire, Carrom, Chess, Powerlifting, Box Cricket, and more. Over 300 participants and 12+ events.",
    },
    {
      title: "Coding Contest under Pragyaa2k25",
      date: "22 Feb 2025",
      category: "Technical Event",
      participants: 20,
      summary:
        "Challenging contest with 5 DSA problems (Palindromes, Stacks, DP, Sorting, etc.). Faculty judges and competitive vibe.",
    },
    {
      title: "Workshop on Python for AI/ML",
      date: "22–23 Feb 2025",
      category: "Technical Event",
      participants: 20,
      summary:
        "Led by Dr. Thakre. Day 1: Python basics; Day 2: File handling, NLP with SpaCy, chatbot/sentiment analysis.",
    },
    {
      title: "DSA Coding Contest",
      date: "8 Apr 2025",
      category: "Technical Event",
      participants: 40,
      summary:
        "Focused DSA event for sophomore and junior students—arrays, stacks, hashmaps, matrices—real-world coding, teamwork, and time management.",
    }
  ]
};




const YEARS = ["2025–26", "2024–25"];



// |-- TimelineEvent: Animating each event card/connector --|
function TimelineEvent({ event, isLast }) {
  return (
    <div className="relative flex min-h-[8rem]">
      {/* Timeline Line + Dots */}
      <div className="flex flex-col items-center absolute left-5 top-0 h-full z-10">
        <div className="w-1 h-1/2 bg-gradient-to-b from-[#7c3aed] to-[#67e8f9]" />
        <motion.span
          className="
            w-7 h-7 rounded-full 
            bg-gradient-to-br from-[#7c3aed] to-[#a78bfa]
            flex items-center justify-center shadow-lg 
            border-2 border-[#23214b] text-xl mb-1
            transition-all hover:scale-125 hover:bg-[#291e44] hover:text-[#a78bfa]"
          whileHover={{ scale: 1.12 }}
        >
          {event.icon}
        </motion.span>
        {!isLast && (
          <div className="w-1 h-full bg-gradient-to-b from-[#a78bfa] to-[#67e8f9]" />
        )}
      </div>

      {/* Event Card */}
      <motion.div
        className="
          ml-20 w-full max-w-xl
          p-6 sm:p-8
          rounded-2xl shadow-2xl
          border border-[#67e8f939]
          bg-gradient-to-br from-[#23214bda] to-[#251d34cc]
          group-hover:bg-[#23214bcc] group-hover:shadow-[#67e8f955]
          transition-all flex flex-col
          backdrop-blur-xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5, delay: 0.08 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-3 py-1 rounded-full font-bold bg-gradient-to-r from-[#7c3aedcc] to-[#67e8f9cc] text-[#f5f3ff] uppercase shadow-sm tracking-wider">
            {event.month}
          </span>
          <span className="ml-2 text-xs font-semibold text-[#67e8f9]">{event.category}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-extrabold mb-0.5 text-[#a78bfa]">{event.title}</h3>
        <div className="text-xs text-[#8a96c7] mb-2">{event.date}</div>
        <p className="text-[#c4b5fd] leading-relaxed">{event.description}</p>
      </motion.div>
    </div>
  );
}

function Timeline202526({ events }) {
  return (
    <section className="w-full px-0 sm:px-4 pb-8">
      <div className="relative mx-auto max-w-3xl pl-2">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#a78bfa] to-[#67e8f9] rounded-full z-0" />
        <div className="flex flex-col gap-y-12 md:gap-y-16">
          {events.map((ev, idx) => (
            <TimelineEvent key={ev.title + ev.date} event={ev} isLast={idx === events.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Cards202425({ events }) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {events.map((ev, i) => (
        <div
          key={ev.title}
          className="
            bg-gradient-to-br from-[#23214bcc] to-[#251d34cc]
            rounded-2xl shadow-xl border-l-8 border-[#67e8f9]
            p-8 mb-8 flex flex-col justify-between
            hover:shadow-2xl hover:scale-105 transition-all
            backdrop-blur-xl"
        >
          <h3 className="text-xl font-bold text-[#a78bfa] mb-2">{ev.title}</h3>
          <div className="text-sm text-[#67e8f9] mb-2">
            {ev.date} • {ev.category}
          </div>
          {ev.participants && (
            <div className="mb-1 font-semibold text-[#a78bfa]">Participants: {ev.participants}</div>
          )}
          <p className="text-[#c4b5fd]">{ev.summary}</p>
        </div>
      ))}
    </div>
  );
}

// --- Main Activities Page Component ---
export default function Activities() {
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activities = ACTIVITIES_BY_YEAR[selectedYear];

  return (
    <div className="
      flex flex-col min-h-screen
      bg-gradient-to-tr from-[#17132a] via-[#23214b] to-[#2e225a]
      pt-16
      px-4
      ">
      {/* page wrapper uses pt-16 for navbar offset, NO mt- on first child */}

      <div className="max-w-5xl mx-auto w-full">
        {/* Year Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#67e8f9] to-[#7c3aed]">
            ITSA Activities & Events
          </h2>
          <div className="relative inline-block">
            <button
              className="
                flex items-center 
                bg-gradient-to-br from-[#23214bdd] to-[#251d34cc]
                border border-[#a78bfa88]
                px-6 py-2 font-semibold rounded-2xl shadow
                group hover:bg-[#312866] hover:border-[#67e8f9] 
                transition focus:outline-none"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <span className="text-[#67e8f9] text-lg mr-2">{selectedYear}</span>
              <ChevronDownIcon className={`w-5 h-5 text-[#a78bfa] transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-gradient-to-br from-[#23214bee] to-[#2e225add] rounded-xl shadow-lg border z-20">
                {YEARS.map((year) => (
                  <li key={year}>
                    <button
                      className={`w-full text-left px-4 py-2 text-md hover:bg-[#2d235a77] 
                        ${year === selectedYear ? "text-[#67e8f9] font-bold" : "text-[#c4b5fd]"}`}
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
        {/* Events timeline or grid */}
        {selectedYear === "2025–26" ? (
          <Timeline202526 events={activities} />
        ) : (
          <Cards202425 events={activities} />
        )}
      </div>
    </div>
  );
}