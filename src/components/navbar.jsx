import React, { useState, useEffect } from 'react';
import ieee from "../assets/IEEE.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`group fixed top-2 left-1/2 -translate-x-1/2 z-50
        px-6 md:px-14 py-2
        flex items-center justify-between
        w-[95vw] md:w-[700px] lg:w-[950px] xl:w-[1200px]
        rounded-[48px] backdrop-blur-xl
        transition-all duration-500
        ${scrolled
          ? 'bg-white/10 shadow-2xl border border-white/20'
          : 'bg-white/5 shadow-xl border border-white/10'
        }`}
      >
        {/* ieee logo */}
        <img
          src={ieee}
          alt="IEEE IGDTUW"
          className="w-14 h-14 object-contain ml-2 drop-shadow-xl"
        />

        {/* pc nav */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {["ABOUT", "SCHEDULE", "TRACKS", "FAQ"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-xl text-sm font-semibold
              text-white/70 hover:text-white
              hover:bg-white/15 hover:backdrop-blur-md
              transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden w-10 h-10
          bg-white/20 backdrop-blur-sm
          rounded-2xl items-center justify-center
          mr-2 hover:bg-white/30 transition-all"
        >
          <span className="text-white text-xl">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* menu on mobile */}
      {menuOpen && (
        <div className="fixed top-[5.5rem] left-1/2 -translate-x-1/2 z-40
          w-[92vw] rounded-3xl
          bg-white/15 backdrop-blur-2xl
          border border-white/25 shadow-2xl
          md:hidden
          flex flex-col items-center gap-4 py-6
          transition-all"
        >
          {["ABOUT", "SCHEDULE", "TRACKS", "FAQ"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-semibold
              px-6 py-3 rounded-xl
              hover:bg-white/20 transition-all"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
