import React, { useState } from 'react';
import { Gamepad2, MonitorSmartphone, HeartPulse, DollarSign, Stethoscope, Leaf, Palette } from 'lucide-react';
import DotGrid from "./DotGrid.jsx";
import bgImage from "../assets/bg2.png";

const TracksPage = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const tracks = [
        {
            id: 1,
            icon: Gamepad2,
            title: "Gaming",
            description: "Games are powerful tools for entertainment, learning, and engagement. Build interactive 2D/3D games, serious games, or immersive experiences."
        },
        {
            id: 2,
            icon: MonitorSmartphone,
            title: "AR/VR Technologies",
            description: "Build AR/VR technologies for education and professional lifestyles. Create solutions that enhance physical activity, fitness tracking, and working experiences."
        },
        {
            id: 3,
            icon: HeartPulse,
            title: "Fintech",
            description: "Access reliable Fintech solutions that improve financial services, lending, insurance, and fraud detection."
        },
        {
            id: 4,
            icon: DollarSign,
            title: "AI/ML in Finance",
            description: "Build AI/ML solutions that automate inefficient processes, optimize resources, or improve decision-making using data."
        },
        {
            id: 5,
            icon: Stethoscope,
            title: "Healthcare",
            description: "Build healthcare tech solutions that improve patient care, diagnostics, monitoring, and public health."
        },
        {
            id: 6,
            icon: Leaf,
            title: "Green Technology",
            description: "Build waste management systems that promote energy efficiency requirements and environmental sustainability."
        },
        {
            id: 7,
            icon: Palette,
            title: "UI/UX Design",
            description: "Build UI/UX design products for poor usability and confusing design. Design simple, intuitive, and accessible VR experiences."
        }
    ];

    return (
        <section className="relative min-h-screen w-full text-white font-sans overflow-hidden flex flex-col items-center justify-center p-6">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
                <div className="absolute top-0 left-0 w-full h-[35%] backdrop-blur-md bg-gradient-to-b from-[#0a0514]/90 to-transparent" />
                <DotGrid dotSize={7} gap={9} baseColor="#271E37" activeColor="#F4E4FF" proximity={120} shockRadius={250} shockStrength={5} resistance={750} returnDuration={1.5} className="absolute inset-0" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.2em] mb-6 md:mb-8"
                        style={{ textShadow: "2px 0 #bc39f3, -1px 0 #00fff9" }}>
                        Hackathon <br className="md:hidden" /> Tracks
                    </h2>
                    <p className="text-pink-100 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
                        Choose from seven accessible and thoughtfully designed tracks, each aimed at sparking creativity, driving innovation, and tackling real-world challenges.
                    </p>
                </div>

                {/* 4 Cards Row 1 + 3 Cards Row 2 */}
                <div className="space-y-8 max-w-6xl mx-auto">
                    {/* ROW 1: 4 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tracks.slice(0, 4).map((track) => (
                            <TrackCard key={track.id} track={track} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                        ))}
                    </div>

                    {/* ROW 2: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {tracks.slice(4, 7).map((track) => (
                            <TrackCard key={track.id} track={track} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Glows */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[130px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[160px]" />
        </section>
    );
};

// TrackCard Component
const TrackCard = ({ track, hoveredCard, setHoveredCard }) => {
    const Icon = track.icon;
    return (
        <div
            className="relative group cursor-pointer h-full"
            onMouseEnter={() => setHoveredCard(track.id)}
            onMouseLeave={() => setHoveredCard(null)}
        >
            <div className={`border border-fuchsia-900/30 bg-fuchsia-950/20 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl 
        space-y-4 h-full flex flex-col items-center text-center transition-all duration-700
        hover:-translate-y-3 hover:scale-[1.02] hover:border-fuchsia-700/60 hover:shadow-[0_25px_60px_rgba(236,72,153,0.4)]
        hover:bg-fuchsia-900/30 active:scale-[0.98]
        ${hoveredCard === track.id ? '!border-fuchsia-600/70 !shadow-[0_0_40px_rgba(236,72,153,0.6)]' : ''}`}>

                {/* Icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-fuchsia-900/50 backdrop-blur-sm flex items-center justify-center transition-all duration-700
          hover:scale-125 hover:rotate-6 hover:bg-fuchsia-800/70 shadow-xl
          ${hoveredCard === track.id ? 'scale-125 rotate-12 shadow-2xl bg-fuchsia-700/80' : ''}`}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-fuchsia-300 drop-shadow-lg" />
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-fuchsia-900/50 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full transition-all duration-700 shadow-sm
            ${hoveredCard === track.id ? 'w-full scale-x-105' : 'w-1/3'}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white/95 group-hover:text-fuchsia-300 transition-colors">
                    {track.title}
                </h3>

                {/* Description */}
                <p className="text-pink-100/90 leading-relaxed text-sm md:text-base flex-grow opacity-90 group-hover:opacity-100">
                    {track.description}
                </p>
            </div>
        </div>
    );
};

export default TracksPage;
