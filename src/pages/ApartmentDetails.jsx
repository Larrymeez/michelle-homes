import { useParams } from "react-router-dom";
import { useState } from "react";

import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import apartment1 from "../assets/apartment1.jpg";
import apartment2 from "../assets/apartment2.jpg";
import apartment3 from "../assets/apartment3.jpg";
import apartment4 from "../assets/apartment4.jpg";
import apartment5 from "../assets/apartment5.jpg";

function ApartmentDetails() {
  const { id } = useParams();

  const apartments = {
    executive: {
      title: "Executive Suite",
      priceNight: "KES 2,500 / night",
      priceDay: "KES 2,000 / day staycation",
      description:
        "A premium, fully furnished apartment designed for comfort, privacy, and a luxury feel in Thika.",
      amenities: [
        "Fast Wi-Fi",
        "Smart TV",
        "Hot shower",
        "Fully equipped kitchen",
        "Secure parking",
        "Private balcony",
        "24/7 security",
      ],
      images: [
        apartment1,
        apartment2,
        apartment3,
        apartment4,
        apartment5,
      ],
    },

    deluxe: {
      title: "Deluxe Apartment",
      priceNight: "KES 2,500 / night",
      priceDay: "KES 2,000 / day staycation",
      description:
        "Elegant and quiet space perfect for relaxation, work stays, and short getaways.",
      amenities: [
        "Fast Wi-Fi",
        "Kitchen",
        "Smart TV",
        "Hot shower",
        "Peaceful environment",
      ],
      images: [apartment2],
    },
  };

  const apartment = apartments[id];
  const [current, setCurrent] = useState(0);

  // 🔥 Booking state (Airbnb style)
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [guests, setGuests] = useState(1);

  const pricePerNight = 2500;

  const nights = Math.max(
    1,
    Math.round(
      (range[0].endDate - range[0].startDate) /
        (1000 * 60 * 60 * 24)
    )
  );

  const totalPrice = nights * pricePerNight;

  return (
    <div className="bg-stone-100 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* IMAGE CAROUSEL */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src={apartment.images[current]}
              className="w-full h-[500px] object-cover"
            />

            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0
                    ? apartment.images.length - 1
                    : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-12 h-12 rounded-full"
            >
              ←
            </button>

            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === apartment.images.length - 1
                    ? 0
                    : prev + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-12 h-12 rounded-full"
            >
              →
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 overflow-x-auto">
            {apartment.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setCurrent(i)}
                className={`w-24 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                  current === i
                    ? "border-amber-700"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* INFO */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h1 className="text-4xl font-serif mb-3">
              {apartment.title}
            </h1>

            <p className="text-stone-600 leading-7">
              {apartment.description}
            </p>
          </div>

          {/* AMENITIES */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-5">
              What this space offers
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {apartment.amenities.map((item) => (
                <div
                  key={item}
                  className="bg-stone-50 p-4 rounded-xl"
                >
                  ✔ {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - AIRBNB BOOKING CARD */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white p-6 rounded-3xl shadow-xl space-y-6">

            {/* PRICE */}
            <div>
              <p className="text-2xl font-semibold text-amber-700">
                KES {pricePerNight.toLocaleString()} / night
              </p>

              <p className="text-stone-600 text-sm mt-1">
                {nights} night(s) • Total:{" "}
                <span className="font-semibold text-stone-800">
                  KES {totalPrice.toLocaleString()}
                </span>
              </p>
            </div>

            {/* CALENDAR */}
            <div className="border rounded-2xl overflow-hidden">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
                minDate={new Date()}
              />
            </div>

            {/* GUESTS */}
            <div>
              <label className="text-sm text-stone-500">
                Guests
              </label>

              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                className="w-full border rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full bg-amber-700 text-white py-4 rounded-xl hover:bg-amber-800 transition font-medium">
              Reserve Now
            </button>

            <p className="text-xs text-stone-500 text-center">
              You won’t be charged yet
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ApartmentDetails;