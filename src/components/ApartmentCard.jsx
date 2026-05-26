import { motion } from "framer-motion";

function ApartmentCard({
  image,
  title,
  description,
  price,
  status,
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
    >
      {/* Apartment image */}
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-72 object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-serif text-stone-800">
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

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-amber-700">
            {price}
          </p>

          <button className="bg-stone-800 text-white px-5 py-2 rounded-xl hover:bg-amber-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ApartmentCard;