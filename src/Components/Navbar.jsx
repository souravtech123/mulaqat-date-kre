import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="
      sticky top-0 z-50
      bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
      shadow-lg
      backdrop-blur-md
    ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Title */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-pink-300 hover:text-pink-400 transition"
        >
          💜 Mulaqat
        </NavLink>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-8 text-purple-200 font-medium">
          <li>
            <NavLink
              to="/"
              className="hover:text-pink-300 transition"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/proposal"
              className="hover:text-pink-300 transition"
            >
              LoveShayari
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="hover:text-pink-300 transition"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="hover:text-pink-300 transition"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Login Button */}
        <NavLink
          to="/login"
          className="
            hidden md:block
            bg-gradient-to-r from-pink-500 to-purple-600
            text-white px-5 py-2 rounded-full
            hover:scale-105 hover:shadow-lg
            transition duration-300
          "
        >
          Login
        </NavLink>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer text-pink-300">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
