import React, { useEffect, useRef } from "react";
import loveShayari from "./propsal";

const CARD_W = 280;
const CARD_H = 170;

const MidnightLove = () => {
  const cardsRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  // Track mouse
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    });
  }, []);

  // Floating logic
  useEffect(() => {
    const positions = cardsRef.current.map(() => ({
      x: Math.random() * (window.innerWidth - CARD_W),
      y: Math.random() * (window.innerHeight - CARD_H),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4
    }));

    const animate = () => {
      positions.forEach((p, i) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;

        // slight attraction
        p.vx += dx * 0.000001;
        p.vy += dy * 0.000001;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > window.innerWidth - CARD_W) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight - CARD_H) p.vy *= -1;

        const el = cardsRef.current[i];
        if (el) el.style.transform = `translate(${p.x}px, ${p.y}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Heart burst
  const burstHeart = (e) => {
    const heart = document.createElement("div");
    heart.innerText = "💜";
    heart.className =
      "absolute text-2xl animate-ping pointer-events-none";
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 600);
  };

  return (
    <div
      onClick={burstHeart}
      className="relative min-h-screen overflow-hidden
      bg-gradient-to-br from-[#0b0014] via-[#2b0a3d] to-[#0b0014]">

      {/* 🌌 Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-20 animate-pulse"></div>

      {/* 🎵 Music */}
      <audio autoPlay loop muted>
        <source src="/lofi.mp3" type="audio/mp3" />
      </audio>

      <h1 className="absolute top-6 left-1/2 -translate-x-1/2 z-30
        text-4xl font-extrabold text-purple-300 tracking-widest">
        🌙 MIDNIGHT LOVE 🌙
      </h1>

      {loveShayari.map((text, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="
            absolute w-[280px] p-5 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-purple-400/30
            shadow-[0_0_30px_rgba(168,85,247,0.35)]
            text-center cursor-pointer
            transition-transform duration-300
            hover:scale-110 hover:z-40
          "
        >
          <p className="text-purple-100 text-lg leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MidnightLove;
