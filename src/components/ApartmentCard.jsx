function ApartmentCard({
  image,
  title,
  price,
  description,
  status,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-3xl font-serif text-stone-800">
            {title}
          </h3>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="text-stone-600 leading-relaxed mb-4">
          {description}
        </p>

        <p className="text-lg font-semibold text-amber-700 mb-5">
          {price}
        </p>

        <button className="bg-amber-700 text-white px-6 py-3 rounded-xl hover:bg-amber-800 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default ApartmentCard;