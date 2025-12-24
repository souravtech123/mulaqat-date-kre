import React from "react";

const Card = ({ place }) => {
  return (
    <div className="
      max-w-sm 
      rounded-2xl 
      p-4 
      bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600
      shadow-lg 
      hover:shadow-2xl 
      hover:scale-105
      transition-all duration-300
      text-white
    ">
      {/* Image */}
      <img
        src={place.image}
        alt={place.placeName}
        className="w-full h-44 object-cover rounded-xl border-2 border-purple-300"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold mt-3 text-center text-pink-200">
        {place.placeName}
      </h2>

      {/* Vibe */}
      <p className="text-lg font-semibold text-center mt-1 text-purple-100">
        💜 Vibe : {place.vibe}
      </p>

      {/* Budget */}
      <p className="text-lg font-bold mt-2 text-pink-100">
        💰 Budget: ₹{place.budget}
      </p>

      {/* Description */}
      <p className="text-sm mt-4 text-purple-100 leading-relaxed">
        {place.description}
      </p>

      {/* Timing */}
      <p className="text-xs text-center mt-3 text-purple-200">
        ⏰ Best Time: {place.timing}
      </p>
    </div>
  );
};

export default Card;
