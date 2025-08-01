// At the top, import any necessary icons you want for values
// import { LightBulbIcon, UsersIcon, ... } from "@heroicons/react/24/outline";
// import your logo if needed

export default function About() {
  return (
    <section className="max-w-4xl w-11/12 mx-auto py-16">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-[#7c3aed]">About ITSA</h1>
      <p className="text-lg text-gray-700 font-medium text-center mb-8">
        The Information Technology Student Association is a creative, driven community at SGGS—empowering tomorrow’s leaders at the intersection of technology, teamwork, and imagination.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* ...Mission and Vision cards... */}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {/* ...Core Values cards with icons... */}
      </div>
      <div className="text-center text-base italic text-[#322365] mb-4">
        Founded in 2024, ITSA bridges the gap between academics and the fast-moving world of tech, building lifelong friendships and powerful skills.
      </div>
      <div className="text-center mt-8">
        <a href="/team" className="bg-[#7c3aed] text-white rounded-xl px-6 py-2 font-bold shadow hover:bg-[#a78bfa] transition">
          Meet the Team
        </a>
      </div>
    </section>
  );
}
