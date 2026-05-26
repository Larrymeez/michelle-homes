import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-stone-900 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-serif mb-3">
              Michelle Homes
            </h3>

            <p className="text-stone-400 leading-relaxed">
              Premium Airbnb stays in Thika offering comfort,
              elegance and convenience for both night stays
              and day staycations.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact Us
            </h4>

            <div className="space-y-3 text-stone-400">
              <p>📍 Thika, Kenya</p>
              <p>📞 +254 700 000 000</p>
              <p>✉️ michellehomes@gmail.com</p>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition transform hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-green-500 transition transform hover:scale-110"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-stone-700 transition transform hover:scale-110"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-stone-700 mt-10 pt-6 text-center text-stone-500 text-sm">
          © {new Date().getFullYear()} Michelle Homes.
          All rights reserved.
        </div>
      </footer>
    </>
  );
}