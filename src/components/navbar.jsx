import React, { useState, useEffect } from 'react';
import ieee from "../assets/IEEE.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-2 md:top-3 left-1/2 -translate-x-1/2 z-50 px-8 md:px-14 py-2 md:py-2.5 flex items-center justify-between w-[95vw] md:w-[700px] lg:w-[950px] xl:w-[1200px] transition-all duration-500 backdrop-blur-xl rounded-[48px] ${
            scrolled
                ? 'bg-white/10 backdrop-brightness-110 shadow-2xl border border-white/20'
                : 'bg-white/5 backdrop-brightness-105 shadow-xl border border-white/10'
        }`}>

            {/* LOGO - LEFT */}
            <img src={ieee} alt="IEEE IGDTUW" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain ml-2 md:ml-4 drop-shadow-xl" />

            {/* CENTER LINKS */}
            <div className="flex-1 flex items-center justify-center space-x-4 md:space-x-8 mx-4">
                <a href="#about" className="text-white text-xs md:text-sm font-semibold opacity-80 hover:opacity-100 hover:bg-white/10 px-3 py-2 rounded-xl transition-all glow">ABOUT</a>
                <a href="#schedule" className="text-white text-xs md:text-sm font-semibold opacity-90 hover:bg-white/10 px-3 py-2 rounded-xl transition-all glow">SCHEDULE</a>
                <a href="#tracks" className="text-white text-xs md:text-sm font-semibold opacity-80 hover:opacity-100 hover:bg-white/10 px-3 py-2 rounded-xl transition-all glow">TRACKS</a>
                <a href="#faq" className="text-white text-xs md:text-sm font-semibold opacity-80 hover:opacity-100 hover:bg-white/10 px-3 py-2 rounded-xl transition-all glow">FAQ</a>
            </div>

            {/* HAMBURGER - RIGHT */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-2 md:mr-4 hover:bg-white/30 transition-all">
                <span className="text-white text-sm md:text-base">☰</span>
            </div>

        </nav>
    );
};

export default Navbar;
