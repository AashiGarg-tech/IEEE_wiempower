import React from "react";
import aboutGroup from "./about-group.jpg";
import DotGrid from './DotGrid';
import bgImage from "../assets/bg2.png";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full text-white font-sans overflow-hidden flex flex-col items-center justify-center p-6">

        {/* ================= BACKGROUND LAYERS ================= */}
        <div className="absolute inset-0 pointer-events-none -z-10">

            {/* 🔹 BASE BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* 🔹 TOP BLUR (sirf upar) */}
            <div
                className="
                               absolute top-0 left-0 w-full h-[35%]
                               backdrop-blur-md
                               bg-gradient-to-b from-[#0a0514]/90 to-transparent"
            />

            {/* 🔹 DOT GRID */}
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
                className="absolute inset-0 w-full h-full"
            />
        </div>


        {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-10 md:pl-6 lg:pl-12">

          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em]"
            style={{
              textShadow: "2px 0 #bc39f3, -1px 0 #00fff9",
            }}
          >
            About <br /> WIEMPOWER
          </h2>

          {/* Retro Image Frame */}
          <div className="border border-white/30 p-2 bg-black/70 shadow-xl w-fit">
            <img
  src={aboutGroup}
  alt="WIEMPOWER Team"
  className="w-[320px] md:w-[380px]"
/>
          </div>
        </div>

        {/* RIGHT SIDE */}
       <div className="border border-fuchsia-900/30 bg-fuchsia-950/20 backdrop-blur-sm p-10 md:p-12 rounded-sm shadow-2xl space-y-6 max-w-xl md:ml-[-40px] lg:ml-[-80px]">


          <p className="text-base md:text-lg leading-relaxed text-pink-100">
            WIEmpower 6.0 is the flagship event organized by IEEE IGDTUW.
            It serves as a premier platform for innovation, leadership,
            and growth through a curated series of workshops, competitions,
            and expert talks.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-pink-100">
            Bringing together individuals from diverse backgrounds,
            WIEmpower encourages collaboration, skill enhancement,
            and the exchange of groundbreaking ideas. As IEEE IGDTUW’s
            flagship event, it creates opportunities in STEM and builds
            lasting connections that drive future success.
          </p>
        </div>
      </div>

      {/* Ambient Glows (same logic as hero) */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[160px]" />
    </section>
  );
};

export default AboutSection;
