import { useParams } from "react-router-dom";
import { useState } from "react";

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
      amenities: [
        "Fast Wi-Fi",
        "Smart TV",
        "Hot shower",
        "Kitchen",
        "Secure parking",
        "Private balcony",
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
      amenities: [
        "Fast Wi-Fi",
        "Kitchen",
        "Smart TV",
        "Hot shower",
        "Quiet environment",
      ],
      images: [apartment2],
    },
  };

  const apartment = apartments[id];

  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-stone-100 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif mb-10">
          {apartment.title}
        </h1>

        {/* PHOTO SCROLL */}
        <div className="relative">
          <img
            src={apartment.images[current]}
            className="w-full h-[500px] object-cover rounded-3xl"
          />

          {apartment.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0
                      ? apartment.images.length - 1
                      : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 bg-black/40 text-white w-12 h-12 rounded-full"
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
                className="absolute right-4 top-1/2 bg-black/40 text-white w-12 h-12 rounded-full"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* DETAILS */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <h2 className="text-3xl mb-5">
              Amenities
            </h2>

            <ul className="space-y-3 text-lg">
              {apartment.amenities.map((item) => (
                <li key={item}>✔ {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl mb-5">
              Pricing
            </h3>

            <p className="mb-3">
              {apartment.priceNight}
            </p>

            <p className="mb-6">
              {apartment.priceDay}
            </p>

            <a
              href="#"
              className="block text-center bg-amber-700 text-white py-4 rounded-xl hover:bg-amber-800 transition"
            >
              Reserve Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentDetails;