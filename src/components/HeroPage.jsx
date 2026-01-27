import React from 'react';
import FuzzyText from './FuzzyText.jsx';
import DotGrid from "./DotGrid.jsx";

const HomePage = () => {
    return (
        <div className="relative min-h-screen w-full bg-[#0a0514] text-white font-sans overflow-hidden flex flex-col items-center justify-center p-6">
            {/* Background Layer: Image Overlay */}
            <div className="absolute inset-0 w-full h-full opacity-100 pointer-events-none">
                {/* DotGrid Background */}
                <DotGrid
                    dotSize={7}
                    gap={9}
                    baseColor="#271E37"
                    activeColor="#F4E4FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                    className="w-full h-full"
                />

            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-4xl w-full text-center space-y-12">

                {/* Fuzzy WIEMPOWER Title */}
                <div className="relative inline-block">
                    <FuzzyText
                        baseIntensity={0.2}
                        hoverIntensity={0.5}
                        enableHover = {true}
                        fontSize="clamp(4rem, 10vw, 6rem)"   // similar to text-6xl/md:text-8xl
                        fontWeight={900}
                        fontFamily="sans-serif"
                        color="#ffffff"
                        fuzzRange={35}
                        className="mx-auto"        // ensures canvas has height
                    >
                        WIEMPOWER
                    </FuzzyText>
                </div>

                {/* Action Words */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-20">
                    {['discover', 'develop', 'deliver'].map((word) => (
                        <span key={word} className="text-2xl md:text-3xl font-medium text-fuchsia-500 lowercase tracking-wide">
              {word}
            </span>
                    ))}
                </div>

                {/* Mission Box */}
                <div className="border border-fuchsia-900/30 bg-fuchsia-950/20 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-2xl">
                    <p className="text-lg md:text-2xl font-light leading-relaxed text-pink-100">
                        Where Ideas Ignite and Innovation Thrives. A platform that empowers
                        women to address real-life challenges head-on and showcase their
                        creativity and ingenuity.
                    </p>
                </div>

                {/* Footer Banner */}
                <div className="bg-gradient-to-r from-[#1a0b2e] via-[#2d124d] to-[#1a0b2e] py-4 px-6 rounded-md shadow-lg border-t border-white/10">
                    <p className="text-sm md:text-lg font-bold tracking-widest uppercase text-center">
                        Institute of Electrical and Electronics Engineers, <br className="md:hidden" />
                        Indira Gandhi Delhi Technical University for Women
                    </p>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px]" />
        </div>
    );
};

export default HomePage;
