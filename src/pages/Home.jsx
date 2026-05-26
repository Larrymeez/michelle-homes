import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.jpg";
import apartment1 from "../assets/apartment1.jpg";
import apartment2 from "../assets/apartment2.jpg";
import apartment3 from "../assets/apartment3.jpg";
import apartment4 from "../assets/apartment4.jpg";
import apartment5 from "../assets/apartment5.jpg";
import ApartmentCard from "../components/ApartmentCard";
import BookingForm from "../components/BookingForm";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pricing = {
  night: "KES 2,500 / night",
  day: "KES 2,000 / day staycation",
};

  return (
    <div>

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <Navbar />

        <motion.div
          className="relative z-10 flex min-h-screen items-center justify-center text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold text-white mb-6 tracking-wide">
              Michelle Homes
            </h1>

            <p className="text-lg md:text-xl text-stone-100 max-w-2xl mx-auto leading-relaxed">
              Elegant and comfortable Airbnb stays in Thika.
              Your perfect home away from home.
            </p>

            <a
              href="#apartments"
              className="inline-block mt-8 bg-white text-stone-900 px-8 py-3 rounded-xl font-medium shadow-lg transition duration-300 hover:bg-amber-700 hover:text-white active:bg-amber-800"
            >
              View Apartments
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= APARTMENTS ================= */}
      <motion.section
        id="apartments"
        className="bg-stone-100 py-20 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif text-center text-stone-800 mb-4">
            Our Apartments
          </h2>

          <p className="text-center text-stone-600 mb-12">
            Comfortable and stylish stays in Thika.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <ApartmentCard
  images={[
    apartment1,
    apartment2,
    apartment3,
    apartment4,
    apartment5
  ]}
  title="Executive Suite"
  description="Beautifully furnished apartment with fast Wi-Fi, smart TV and a cozy relaxing space."
  price={pricing.night}
  status="Available"
/>
            <ApartmentCard
              images={[apartment2]}
              title="Deluxe Apartment"
              description="Elegant spacious apartment with a modern kitchen and peaceful atmosphere."
              price={pricing.night}
              status="Available"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= BOOKING ================= */}
      <BookingForm />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <motion.h2
      className="text-5xl font-serif text-stone-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Why Choose Michelle Homes
    </motion.h2>

    <motion.p
      className="text-stone-600 mb-14 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      We don’t just offer a place to stay — we offer comfort, privacy, and a premium experience in Thika.
    </motion.p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <motion.div
        whileHover={{ y: -8 }}
        className="p-8 rounded-2xl bg-stone-100 shadow-sm hover:shadow-xl transition"
      >
        <div className="text-4xl mb-4">🏡</div>
        <h3 className="text-xl font-semibold mb-2">Home Comfort</h3>
        <p className="text-stone-600">
          Fully furnished spaces designed to feel like home from the moment you walk in.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ y: -8 }}
        className="p-8 rounded-2xl bg-stone-100 shadow-sm hover:shadow-xl transition"
      >
        <div className="text-4xl mb-4">📍</div>
        <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
        <p className="text-stone-600">
          Located in the heart of Thika with easy access to transport, shops, and town.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ y: -8 }}
        className="p-8 rounded-2xl bg-stone-100 shadow-sm hover:shadow-xl transition"
      >
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-xl font-semibold mb-2">Safe & Private</h3>
        <p className="text-stone-600">
          Secure building with privacy and peace of mind throughout your stay.
        </p>
      </motion.div>

    </div>
  </div>
</section>

      {/* ================= GALLERY ================= */}
      <section className="bg-stone-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-serif text-stone-800 mb-4">
            A Glimpse of Your Stay
          </h2>

          <p className="text-stone-600 mb-12">
            Comfort, style, and elegance in every corner.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src={apartment1}
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition duration-300"
            />

            <img
              src={apartment2}
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition duration-300"
            />

            <img
              src={heroImage}
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-stone-900 text-white py-14 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

    {/* Brand */}
    <div>
      <h3 className="text-2xl font-serif mb-3">
        Michelle Homes
      </h3>
      <p className="text-stone-400">
        Premium Airbnb stays in Thika designed for comfort, privacy, and style.
      </p>
    </div>

    {/* Links */}
    <div>
      <h4 className="font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-stone-400">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Apartments</li>
        <li className="hover:text-white cursor-pointer">Booking</li>
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h4 className="font-semibold mb-3">Follow Us</h4>

      <div className="flex gap-4 mt-3">

        {/* Instagram */}
        <a href="#" className="hover:scale-110 transition">
          <svg className="w-6 h-6 fill-white hover:fill-pink-400" viewBox="0 0 24 24">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.8 6.2a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" className="hover:scale-110 transition">
          <svg className="w-6 h-6 fill-white hover:fill-blue-400" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05H8.9V12h1.6V9.8c0-1.6.95-2.5 2.4-2.5.7 0 1.4.1 1.4.1v1.5h-.8c-.8 0-1 .5-1 1v2h1.7l-.3 2.9h-1.4V22A10 10 0 0 0 22 12z"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a href="#" className="hover:scale-110 transition">
          <svg className="w-6 h-6 fill-white hover:fill-green-400" viewBox="0 0 24 24">
            <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0 12 12 0 0 0 1.5 18.3L0 24l5.9-1.5A12 12 0 0 0 12 24a12 12 0 0 0 8.5-20.5zM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.5.9.9-3.4-.2-.4A10 10 0 1 1 12 22zm5.5-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 .9s-.3 0-.6-.2a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6 0-.2 0-.5-.1-.7 0-.2-.7-1.6-1-2.2-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z"/>
          </svg>
        </a>

      </div>
    </div>

  </div>

  <div className="text-center text-stone-500 mt-12 text-sm">
    © {new Date().getFullYear()} Michelle Homes. All rights reserved.
  </div>
</footer>
   <a
  href="https://wa.me/254700000000"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110"
>
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0 12 12 0 0 0 1.5 18.3L0 24l5.9-1.5A12 12 0 0 0 12 24a12 12 0 0 0 8.5-20.5zM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.5.9.9-3.4-.2-.4A10 10 0 1 1 12 22z"/>
  </svg>
</a>

 {/* ================= SCROLL TO TOP BUTTON ================= */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 left-6 bg-stone-900 text-white p-3 rounded-full shadow-xl hover:bg-stone-700 transition z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Home;