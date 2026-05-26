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
import {FaFacebookF,FaInstagram,FaWhatsapp,FaTiktok,} from "react-icons/fa";

function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
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
        <div className="absolute inset-0 bg-black/55"></div>

        <Navbar />

        <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 grid md:grid-cols-2 items-center gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-amber-400 uppercase tracking-[4px] text-sm mb-4">
              Your perfect stay in Thika
            </p>

            <h1 className="text-5xl md:text-7xl font-serif font-semibold text-white leading-tight mb-6">
              Michelle Homes
            </h1>

            <p className="text-lg md:text-xl text-stone-100 leading-relaxed max-w-xl">
              Elegant Airbnb stays designed for comfort,
              privacy and convenience in the heart of Thika.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#apartments"
                className="bg-amber-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:bg-amber-800 transition"
              >
                View Apartments
              </a>

              <a
                href="#booking"
                className="border border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-stone-900 transition"
              >
                Book Your Stay
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 w-full max-w-sm shadow-2xl">
              <p className="text-white text-sm tracking-wide mb-4">
                📍 Thika, Kenya
              </p>

              <h3 className="text-2xl font-serif text-white mb-6">
                Executive & Deluxe Suites
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-stone-200">
                    Night Stay
                  </span>

                  <span className="text-amber-400 font-semibold">
                    KES 2,500
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/20 pb-3">
                  <span className="text-stone-200">
                    Day Staycation
                  </span>

                  <span className="text-amber-400 font-semibold">
                    KES 2,000
                  </span>
                </div>

                <a
                  href="#booking"
                  className="block text-center bg-amber-700 text-white py-3 rounded-xl hover:bg-amber-800 transition mt-6"
                >
                  Reserve Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
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
  id="executive"
  images={[
    apartment1,
    apartment2,
    apartment3,
    apartment4,
    apartment5,
  ]}
  title="Executive Suite"
  description="Beautifully furnished apartment with fast Wi-Fi and smart TV."
  price="KES 2,500 / night"
/>

<ApartmentCard
  id="deluxe"
  images={[apartment2]}
  title="Deluxe Apartment"
  description="Elegant spacious apartment with peaceful atmosphere."
  price="KES 2,500 / night"
/>
          </div>
        </div>
      </motion.section>

      {/* ================= BOOKING ================= */}
      <div id="booking">
        <BookingForm />
      </div>

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
            We don’t just offer a place to stay — we offer comfort,
            privacy, and a premium experience in Thika.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-stone-100 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-2">
                Home Comfort
              </h3>

              <p className="text-stone-600">
                Fully furnished spaces designed to feel like home.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-stone-100 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">
                Prime Location
              </h3>

              <p className="text-stone-600">
                Easy access to transport, shops and town.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-stone-100 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">
                Safe & Private
              </h3>

              <p className="text-stone-600">
                Secure building with peace and privacy.
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


      {/* WHATSAPP */}
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110"
      >
        💬
      </a>

      {/* SCROLL TOP */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
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