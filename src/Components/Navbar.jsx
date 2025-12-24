import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      sticky top-0 z-50
      bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
      shadow-lg backdrop-blur-md
    ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-pink-300"
        >
          💜 Mulaqat
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-purple-200 font-medium">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/proposal">LoveShayari</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* Desktop Login */}
        <NavLink
          to="/login"
          className="hidden md:block bg-pink-500 text-white px-5 py-2 rounded-full"
        >
          Login
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-pink-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1a1635] px-6 py-4 space-y-4 text-purple-200">
          <NavLink onClick={() => setOpen(false)} to="/" className="block">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/proposal" className="block">LoveShayari</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className="block">About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className="block">Contact</NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/login"
            className="block text-center bg-pink-500 text-white py-2 rounded-full"
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
