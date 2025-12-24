import React from "react";

const Footer = () => {
  return (
    <footer className="
      bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
      text-purple-100 
      py-10 
      mt-16
    ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-pink-300">
            💜 Mulaqat
          </h2>
          <p className="text-sm text-purple-200 italic">
            Bas ek mulaqat sab kuch badal deti hai.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-pink-200">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-300 transition cursor-pointer">Home</li>
            <li className="hover:text-pink-300 transition cursor-pointer">Places</li>
            <li className="hover:text-pink-300 transition cursor-pointer">Booking</li>
            <li className="hover:text-pink-300 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-pink-200">
            Connect With Us
          </h3>
          <p className="text-purple-200">📧 support@datespot.com</p>
          <p className="text-purple-200">📞 +91 98765XXXX</p>

          <div className="flex gap-5 mt-4 text-2xl">
            <span className="cursor-pointer hover:text-pink-300 transition">📸</span>
            <span className="cursor-pointer hover:text-pink-300 transition">🐦</span>
            <span className="cursor-pointer hover:text-pink-300 transition">📘</span>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-purple-300 text-sm border-t border-purple-700 pt-4">
        © {new Date().getFullYear()} Mulaqat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
