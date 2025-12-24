import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Book from "../Components/Book";
import { placesData } from "../Components/file.jsx";

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(placesData);
  }, []);

  return (
    <div
      className="
        min-h-screen px-6 py-10
        bg-gradient-to-br from-[#1e0c27] via-[#390754] to-[#290127]
        text-purple-100
      "
    >
      {/* subtle animated glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_60%)] animate-pulse pointer-events-none"></div>

      <Book />

      <h1
        className="
          text-3xl md:text-4xl font-extrabold text-center
          text-purple-300 mb-12 tracking-wide
          animate-fade-in
        "
      >
        🌙 Ranchi’s Most Romantic Places 🌙
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
        {places.map((place, index) => (
          <div
            key={place._id}
            className="
              transition-all duration-500 ease-out
              hover:-translate-y-2 hover:scale-[1.03]
              animate-fade-up
            "
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <Card place={place} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
