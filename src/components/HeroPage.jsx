import React, { useState, useEffect } from 'react';
import FuzzyText from './FuzzyText.jsx';
import DotGrid from "./DotGrid.jsx";
import bgImage from "../assets/bg.png";

const words = ["discover", "develop", "deliver"];
const HomePage = () => {
    const [displayedWord, setDisplayedWord] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentIndex];
        if (isDeleting) {
            if (displayedWord.length > 0) {
                const timeout = setTimeout(() => setDisplayedWord(prev => prev.slice(0, -1)), 40);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % words.length);
                return;
            }
        } else {
            if (displayedWord.length < currentWord.length) {
                const timeout = setTimeout(() => setDisplayedWord(prev => currentWord.slice(0, prev.length + 1)), 80);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setIsDeleting(true), 1500);
                return () => clearTimeout(timeout);
            }
        }
    }, [displayedWord, currentIndex, isDeleting, words]);

    return (
        <div className="relative min-h-screen w-full text-white font-sans overflow-hidden pt-20 md:pt-24 lg:pt-28">
            {/* Enhanced Background */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }} />
                <div className="absolute top-0 left-0 w-full h-[45%] backdrop-blur-xl bg-gradient-to-b from-[#0a0514]/98 via-[#0a0514]/80 to-transparent/80" />
                <DotGrid dotSize={6} gap={10} baseColor="#2a1a3f" activeColor="#e8c4ff" proximity={140} shockRadius={280} shockStrength={6} resistance={800} returnDuration={2} className="absolute inset-0" />
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 md:px-8 max-w-5xl mx-auto space-y-8 md:space-y-10">
                {/* 🎯 HERO TITLE */}
                <div className="relative">
                    <FuzzyText
                        baseIntensity={0.3}
                        hoverIntensity={0.7}
                        enableHover={true}
                        fontSize="clamp(5rem, 10vw, 9rem)"
                        fontWeight={900}
                        fontFamily="'Inter', sans-serif"
                        color="#ffffff"
                        fuzzRange={50}
                        className="mx-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.7)]"
                    >
                        WIEMPOWER
                    </FuzzyText>
                </div>

                {/* ⌨️ PERFECTLY SIZED CURSOR 👇 */}
                <div className="mb-10 md:mb-12">
                    <div className="flex justify-center items-baseline gap-4">
    <span className="text-1xl md:text-6xl lg:text-3xl font-extralight tracking-[0.2em] text-white/90 drop-shadow-[0_10px_30px_rgba(255,255,255,0.3)] uppercase bg-gradient-to-r from-white/90 via-white to-fuchsia-200/80 bg-clip-text text-transparent leading-none">
      {displayedWord}
    </span>
                        {/* CURSOR - Matches text height exactly */}
                        <div className="flex-shrink-0 w-[0.12em] md:w-[0.1em] h-[1.3em] md:h-[0.95em] lg:h-[1.1em]
        bg-gradient-to-b from-white via-fuchsia-400/80 to-transparent
        animate-pulse drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] rounded-sm
        relative top-[0.05em] md:top-[0.02em]" />
                    </div>
                </div>


                {/* 💎 MISSION STATEMENT */}
                <div className="relative w-full max-w-3xl mx-auto">
                    <div className="relative rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-white/4 via-fuchsia-500/3 to-purple-600/3 border border-gradient-to-r border-white/15 shadow-[0_35px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_45px_100px_rgba(0,0,0,0.75)] hover:border-white/25 px-10 md:px-14 py-8 md:py-10 flex items-center justify-center group transition-all duration-700">

                        {/* Multi-layer shine */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-fuchsia-400/8 via-white/3 to-purple-400/8 opacity-0 group-hover:opacity-100 blur-xl -z-10 animate-pulse-slow" />

                        <p className="text-xl md:text-xl lg:text-2xl font-light leading-tight text-white/95 drop-shadow-[0_5px_15px_rgba(255,255,255,0.3)] relative z-10 tracking-[0.02em] text-center max-w-2xl">
                            Empowering women engineers to solve real-world challenges through innovation
                        </p>
                    </div>
                </div>

                {/* 🎪 CTA ROW */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-2xl">
                    {/* REGISTER BUTTON */}
                    <a href="#register" className="group relative w-full lg:w-auto px-10 py-5 md:px-14 md:py-6
                        bg-gradient-to-r from-fuchsia-500/20 via-white/8 to-purple-500/20 backdrop-blur-2xl border-2 border-gradient-to-r border-fuchsia-400/40 shadow-[0_20px_50px_rgba(236,72,153,0.4)]
                        rounded-3xl text-xl md:text-2xl font-bold text-white/95 hover:text-white
                        hover:from-fuchsia-400/40 hover:to-purple-400/40 hover:border-fuchsia-300/60 hover:shadow-[0_30px_70px_rgba(236,72,153,0.6)]
                        hover:scale-[1.05] hover:-translate-y-2 active:scale-[0.98] transition-all duration-500">

                        <span className="relative z-10 flex items-center gap-3">
                            REGISTER NOW
                            <svg className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>

                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/30 via-transparent to-fuchsia-300/30 opacity-0 group-hover:opacity-100 blur-sm -skew-x-12 animate-shimmer" />
                    </a>

                    {/* IEEE TAG */}
                    <div className="relative w-full lg:w-72 h-14 md:h-16 lg:h-18 rounded-2xl
                        bg-gradient-to-r from-white/10 to-fuchsia-500/10 backdrop-blur-2xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                        hover:border-fuchsia-400/40 hover:shadow-[0_20px_45px_rgba(236,72,153,0.3)] transition-all duration-400 flex items-center justify-center group">

                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-fuchsia-400/20 opacity-0 group-hover:opacity-60 blur-sm transition-all duration-400" />

                        <p className="text-sm md:text-base lg:text-lg font-bold tracking-[0.25em] uppercase text-white/95 relative z-10 drop-shadow-lg leading-none">
                            IEEE IGDTUW
                        </p>
                    </div>
                </div>
            </div>

            {/* Enhanced Glow Orbs */}
            <div className="absolute top-[15%] left-[5%] w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/8 to-pink-500/6 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-[15%] right-[5%] w-72 h-72 md:w-80 md:h-80 bg-gradient-to-tl from-purple-600/12 via-fuchsia-600/10 to-pink-500/8 rounded-full blur-[120px] animate-pulse delay-1500" />
            <div className="absolute top-[60%] right-[15%] w-48 h-48 bg-gradient-to-b from-white/5 to-fuchsia-400/10 rounded-full blur-[80px] animate-ping [animation-delay:2s]" />
        </div>
    );
};

export default HomePage;
