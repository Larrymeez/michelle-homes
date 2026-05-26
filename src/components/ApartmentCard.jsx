import { Link } from "react-router-dom";
import { useState } from "react";

function ApartmentCard({
  images = [],
  title,
  description,
  price,
  id,
}) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    if (!images.length) return;

    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!images.length) return;

    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="relative">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-72 object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full"
            >
              ←
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full"
            >
              →
            </button>
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-stone-600 mb-4">
          {description}
        </p>

        <p className="text-amber-700 font-semibold mb-6">
          {price}
        </p>

        <Link
          to={`/apartment/${id}`}
          className="inline-block bg-amber-700 text-white px-6 py-3 rounded-xl hover:bg-amber-800 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default ApartmentCard;