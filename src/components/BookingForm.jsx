import { useState } from "react";
import { motion } from "framer-motion";

function BookingForm() {
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    apartment: "",
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const apartments = [
    "Executive Suite",
    "Deluxe Apartment",
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!form.apartment) return;

    if (form.checkOut <= form.checkIn) {
      alert("Check-out must be after check-in");
      return;
    }

    // success state
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    console.log("Booking Data:", form);

    // reset form
    setForm({
      apartment: "",
      name: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
    });
  };

  return (
    <motion.section
      id="booking"
      className="relative bg-gradient-to-b from-stone-100 to-white py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="uppercase tracking-[0.3em] text-amber-700 text-sm mb-3">
            Michelle Homes
          </p>

          <h2 className="text-5xl font-serif text-stone-800 mb-6 leading-tight">
            Reserve Your Stay in Thika
          </h2>

          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            Enjoy a peaceful, stylish and comfortable stay.
            Book your preferred apartment and we’ll confirm your reservation quickly.
          </p>

          <div className="space-y-4 text-stone-700">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              ✓ Fast Wi-Fi & Smart TV
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              ✓ Flexible Check-in
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              ✓ Secure & Comfortable Stay
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-stone-200 space-y-5"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="p-4 rounded-xl bg-green-100 text-green-700 font-medium text-center">
              Booking request sent successfully 🎉
            </div>
          )}

          {/* APARTMENT SELECT */}
          <select
            name="apartment"
            value={form.apartment}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
          >
            <option value="">Choose Apartment</option>
            {apartments.map((apt) => (
              <option key={apt} value={apt}>
                {apt}
              </option>
            ))}
          </select>

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          {/* DATES */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Check-in (Start of stay)
              </label>

              <input
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Check-out (End of stay)
              </label>

              <input
                type="date"
                name="checkOut"
                value={form.checkOut}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
          </div>

          {/* GUESTS */}
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={form.guests}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-stone-800 text-white py-4 rounded-xl text-lg font-medium hover:bg-amber-700 transition duration-300 shadow-lg"
          >
            Send Booking Request
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default BookingForm;