import { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    apartment: "",
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Booking request sent successfully!");

    console.log(form);

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
    <section
      id="booking"
      className="bg-white py-20 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-serif text-center text-stone-800 mb-4">
          Book Your Stay
        </h2>

        <p className="text-center text-stone-600 mb-12">
          Reserve your apartment in just a few steps.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-stone-100 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <select
            name="apartment"
            value={form.apartment}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-stone-300"
          >
            <option value="">Select Apartment</option>
            <option>Executive Suite</option>
            <option>Deluxe Apartment</option>
          </select>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-stone-300"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-stone-300"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-stone-300"
            />

            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-stone-300"
            />
          </div>

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={form.guests}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-stone-300"
          />

          <button
            type="submit"
            className="w-full bg-stone-800 text-white py-4 rounded-xl hover:bg-amber-700 transition duration-300"
          >
            Send Booking Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;