import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Team from "./pages/Team";
import Podcast from "./pages/Podcast";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-tr from-[#17132a] via-[#23214b] to-[#2e225a] min-h-screen flex flex-col">

      <Router>
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 pt-10">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/team" element={<Team />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
