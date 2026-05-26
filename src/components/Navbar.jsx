function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Michelle Homes
        </h1>

        <div className="flex gap-6 text-white font-medium">
          <a href="#" className="hover:text-stone-200 transition">
            Home
          </a>

          <a href="#apartments" className="hover:text-stone-200 transition">
            Apartments
          </a>

          <a href="#contact" className="hover:text-stone-200 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
