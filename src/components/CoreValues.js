import { LightBulbIcon, UsersIcon, TrophyIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const values = [
  {
    icon: <LightBulbIcon className="w-10 h-10 text-[#7c3aed]" />,
    title: "Innovation",
    desc: "Nurturing creativity and forward-thinking through hands-on projects, hackathons, and cutting-edge workshops."
  },
  {
    icon: <UsersIcon className="w-10 h-10 text-[#7c3aed]" />,
    title: "Community",
    desc: "A place where passionate students network, collaborate, and grow together beyond the classroom."
  },
  {
    icon: <TrophyIcon className="w-10 h-10 text-[#7c3aed]" />,
    title: "Leadership",
    desc: "Empowering members to take initiative, organize events, and inspire tech-driven success."
  },
  {
    icon: <ComputerDesktopIcon className="w-10 h-10 text-[#7c3aed]" />,
    title: "Tech Driven",
    desc: "Harnessing the power of technology in everything we do."
  }
];

export default function CoreValues() {
  return (
    <section className="max-w-5xl w-11/12 mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {values.map(v => (
        <div
          key={v.title}
          className="flex flex-col items-center text-center bg-white/90 rounded-2xl p-7 shadow-md hover:shadow-xl transition group"
        >
          <div className="mb-3 p-4 bg-[#ede9fe] rounded-full group-hover:bg-[#a78bfa]/20 transition">{v.icon}</div>
          <h3 className="text-xl font-bold text-[#7c3aed] mb-2 group-hover:text-[#a78bfa] transition">{v.title}</h3>
          <p className="text-gray-700 text-base font-medium">{v.desc}</p>
        </div>
      ))}
    </section>
  );
}
