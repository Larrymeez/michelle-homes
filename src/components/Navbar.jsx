import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* LOGO → HOME */}
        <Link
          to="/"
          className={`text-2xl font-serif transition-colors duration-300 ${
            scrolled ? "text-stone-900" : "text-white"
          }`}
        >
          Michelle Homes
        </Link>

        {/* LINKS */}
        <div className="flex gap-8">
          <Link
            to="/"
            className={`font-medium transition ${
              scrolled
                ? "text-stone-800 hover:text-amber-700"
                : "text-white hover:text-amber-300"
            }`}
          >
            Home
          </Link>

          <a
            href="#apartments"
            className={`font-medium transition ${
              scrolled
                ? "text-stone-800 hover:text-amber-700"
                : "text-white hover:text-amber-300"
            }`}
          >
            Apartments
          </a>

          <a
            href="#booking"
            className={`font-medium transition ${
              scrolled
                ? "text-stone-800 hover:text-amber-700"
                : "text-white hover:text-amber-300"
            }`}
          >
            Booking
          </a>
        </div>
      </div>
    </nav>
  );
}