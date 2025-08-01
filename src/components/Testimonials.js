// src/components/Testimonials.js

const testimonials = [
  {
    quote: "ITSA opened doors to real-world projects and lifelong friendships.",
    name: "Vedant Wankhede",
    role: "Member",
  },
  {
    quote: "Every event feels alive—so much energy and learning!",
    name: "Om Rakhade",
    role: "President",
  },
  {
    quote: "The best place to grow, network, and get inspired.",
    name: "Ganesh Mane",
    role: "Ex. Head, Technical",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-5xl w-11/12 mx-auto my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#7c3aed] text-center mb-2">
        What Members Say
      </h2>
      <p className="text-center mb-8 text-black-700 text-lg">Real voices from our ITSA community.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition focus-within:ring-4 ring-[#a78bfa]/30"
            tabIndex={0}
          >
            <blockquote className="text-lg text-gray-800 italic leading-snug mb-4">
              “{t.quote}”
            </blockquote>
            <div>
              <div className="font-bold text-[#7c3aed]">{t.name}</div>
              <div className="text-sm text-[#a78bfa]">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
