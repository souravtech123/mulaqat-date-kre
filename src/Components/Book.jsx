import React from "react";

const Book = () => {
  return (
    <div className="
      min-h-[60vh] 
      bg-gradient-to-b from-[#0f0c29] via-[#1f1b4d] to-[#24243e]
      flex items-center justify-center px-6
    ">
      <div className="
        bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700
        shadow-2xl 
        p-10 
        rounded-3xl 
        max-w-2xl 
        text-center 
        border border-purple-400/30
        backdrop-blur-md
      ">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-pink-200 mb-4">
          Plan Your Date With Us 💕
        </h2>

        {/* Description */}
        <p className="text-purple-100 mb-6 text-lg leading-relaxed">
          Your perfect date is just a click away.  
          Soon you’ll browse dreamy places, choose the perfect vibe,  
          and book the moment effortlessly — smooth, romantic, unforgettable.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="
            px-8 py-3 
            bg-gradient-to-r from-pink-500 to-purple-600
            text-white 
            rounded-full 
            text-lg font-semibold 
            shadow-lg
            hover:scale-105 hover:shadow-pink-500/30
            transition duration-300
          ">
            Book Now 💜
          </button>
        </div>

        {/* Loading Text */}
        <div className="mt-6">
          <span className="animate-pulse text-pink-200 text-2xl font-semibold">
            Love is loading ❤️‍🔥
          </span>
        </div>

      </div>
    </div>
  );
};

export default Book;
