import { useState } from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyb1G9EHZbicjFJfM2IE7CqInHoDFUTl0xa5JoTe6F7uHORVl0uceLEWJGqz4wzVKCJ/exec"; // your real script URL

export default function Contact() {
  const [form, setForm] = useState({ Name: "", Email: "", Message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    const body = Object.entries(form)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");
    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ Name: "", Email: "", Message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("Failed to send. Please check your connection.");
    }
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <section className="min-h-screen bg-gradient-to-tr from-[#181143] to-[#221638] flex items-center justify-center py-14">
      <form
        className="w-full max-w-lg mx-auto bg-[#23214b]/80 rounded-3xl shadow-2xl px-10 py-10 border border-[#7c3aed]/30 backdrop-blur-md"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-4xl font-extrabold text-center mb-6 text-[#a78bfa] tracking-tight drop-shadow">
          Contact ITSA
        </h2>
        <div className="flex flex-col gap-6">
          {/* Name */}
          <label className="relative">
            <input
              name="Name"
              value={form.Name}
              onChange={handleChange}
              required
              className="block w-full p-4 pt-7 bg-[#1e193b] text-[#f3e8ff] rounded-xl border border-[#4732c9] outline-none focus:border-[#a78bfa] transition placeholder-transparent"
              placeholder="Your Name"
            />
            <span className="absolute left-4 top-3 text-[#a78bfa] text-sm pointer-events-none transition-all duration-200">
              Your Name
            </span>
          </label>
          {/* Email */}
          <label className="relative">
            <input
              name="Email"
              type="email"
              value={form.Email}
              onChange={handleChange}
              required
              className="block w-full p-4 pt-7 bg-[#1e193b] text-[#f3e8ff] rounded-xl border border-[#4732c9] outline-none focus:border-[#a78bfa] transition placeholder-transparent"
              placeholder="Your Email"
            />
            <span className="absolute left-4 top-3 text-[#a78bfa] text-sm pointer-events-none transition-all duration-200">
              Your Email
            </span>
          </label>
          {/* Message */}
          <label className="relative">
            <textarea
              name="Message"
              value={form.Message}
              onChange={handleChange}
              required
              rows={5}
              className="block w-full p-4 pt-7 bg-[#1e193b] text-[#f3e8ff] rounded-xl border border-[#4732c9] outline-none focus:border-[#a78bfa] transition placeholder-transparent resize-none"
              placeholder="Your Message"
            />
            <span className="absolute left-4 top-3 text-[#a78bfa] text-sm pointer-events-none transition-all duration-200">
              Your Message
            </span>
          </label>
        </div>
        <button
          className="mt-6 w-full bg-gradient-to-r from-[#7c3aed] to-[#e879f9] text-white font-bold py-4 rounded-2xl text-xl shadow-lg hover:from-[#a78bfa] hover:to-[#8177d7] hover:scale-105 hover:shadow-[#a78bfa]/40 active:scale-100 transition-all tracking-wide"
          type="submit"
          disabled={status === "Sending..."}
        >
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <div className="mt-4 text-center text-[#a78bfa] text-lg min-h-6">{status}</div>
        )}
        <div className="border-t border-[#2b244c] mt-8 pt-5 text-center text-[#c4b5fd]">
          <div className="mb-1">or reach us on</div>
          <div className="flex gap-6 justify-center items-center flex-wrap mt-1">
            <a
              href="mailto:itsa@sggs.ac.in"
              className="flex items-center gap-2 text-[#a78bfa] hover:text-[#f3e8ff] font-medium transition text-lg"
            >
              <FaEnvelope className="w-5 h-5" />
              itsa@sggs.ac.in
            </a>
            <a
              href="https://www.instagram.com/itsasggs"
              className="hover:scale-110 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-7 h-7 text-[#e879f9]" />
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}
