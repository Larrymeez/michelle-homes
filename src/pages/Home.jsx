import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.jpg";
import apartment1 from "../assets/apartment1.jpg";
import apartment2 from "../assets/apartment2.jpg";
import ApartmentCard from "../components/ApartmentCard";
import BookingForm from "../components/BookingForm";
import { motion } from "framer-motion";

function Home() {
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
              image={apartment1}
              title="Executive Suite"
              description="Beautifully furnished apartment with fast Wi-Fi, smart TV and a cozy relaxing space."
              price="KES 4,500 / night"
              status="Available"
            />

            <ApartmentCard
              image={apartment2}
              title="Deluxe Apartment"
              description="Elegant spacious apartment with a modern kitchen and peaceful atmosphere."
              price="KES 5,500 / night"
              status="Available"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= BOOKING ================= */}
      <BookingForm />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-serif text-stone-800 mb-4">
            Why Choose Michelle Homes
          </h2>

          <p className="text-stone-600 mb-12 max-w-2xl mx-auto">
            We focus on comfort, cleanliness, and a seamless stay experience in Thika.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-stone-100 hover:bg-stone-200 transition">
              <h3 className="text-xl font-semibold mb-3">🏡 Fully Furnished</h3>
              <p className="text-stone-600">
                Modern, clean, and comfortable apartments ready for your stay.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-stone-100 hover:bg-stone-200 transition">
              <h3 className="text-xl font-semibold mb-3">📍 Prime Location</h3>
              <p className="text-stone-600">
                Located in Thika with easy access to town and transport.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-stone-100 hover:bg-stone-200 transition">
              <h3 className="text-xl font-semibold mb-3">🔒 Safe & Secure</h3>
              <p className="text-stone-600">
                Secure building with privacy and peace of mind guaranteed.
              </p>
            </div>
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
      <footer className="bg-stone-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-2xl font-serif mb-3">
              Michelle Homes
            </h3>
            <p className="text-stone-400">
              Premium Airbnb stays in Thika designed for comfort and peace.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-stone-400">
              <li>Home</li>
              <li>Apartments</li>
              <li>Booking</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-stone-400">
              Thika, Kenya <br />
              +254 XXX XXX XXX
            </p>
          </div>

        </div>

        <div className="text-center text-stone-500 mt-10 text-sm">
          © {new Date().getFullYear()} Michelle Homes. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;