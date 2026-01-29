import React from "react";
import DotGrid from "./DotGrid.jsx";
import bgImage from "../assets/bg.png";
import FuzzyText from "./FuzzyText.jsx";

const schedule = [
    {
        date: "17th January 2025 – 26th January 2025 · 6:00 PM",
        title: "Registration Opens [Online]",
        desc: "Begin your journey by registering your team through our online portal. Ensure all team details and areas of interest are properly documented. Join Discord for all official announcements.",
    },
    {
        date: "24th January 2025",
        title: "Ideation Phase Begins [Online]",
        desc: "This phase marks the official start of your brainstorming process. Team members should work together to ideate and plan their project.",
    },
    {
        date: "26th January 2025 · 12:00 PM",
        title: "Ideation Phase End [Online]",
        desc: "Complete your ideas and submit your finalized project concept. Mentors will review your submission and provide feedback.",
    },
    {
        date: "27th January 2025 · 12:00 PM",
        title: "Development Phase & Mentorship [Online]",
        desc: "The development phase begins. Teams will start implementing their ideas, with mentorship available throughout.",
    },
    {
        date: "31st January 2025 · 11:59 PM",
        title: "Development Phase Ends [Online]",
        desc: "The development phase ends. Top teams will be announced soon on Discord.",
    },
    {
        date: "1st February 2025",
        title: "Presentations & Screening [Online]",
        desc: "All selected teams must present their PPT along with a prototype via online presentation to the mentors.",
    },
    {
        date: "2nd February 2025",
        title: "Shortlisted Teams Announced [Online]",
        desc: "The best teams will be shortlisted and receive further instructions for the final round.",
    },
    {
        date: "3rd February 2025",
        title: "Final Presentations & Results [Offline]",
        desc: "Shortlisted teams must appear at IGDTUW campus to present before judges. Final results announced same day.\nVenue: Auditorium, IGDTUW\nAddress: Madras Road, Kashmere Gate, Delhi-110006",
    },
];

const Schedule = () => {
    return (
        <section className="relative min-h-screen w-full text-white font-sans overflow-hidden py-20 px-6">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
                <div className="absolute top-0 left-0 w-full h-[40%] backdrop-blur-md bg-gradient-to-b from-[#0a0514]/95 to-transparent" />
                <DotGrid
                    dotSize={7} gap={9} baseColor="#271E37" activeColor="#F4E4FF"
                    proximity={120} shockRadius={250} shockStrength={5}
                    resistance={750} returnDuration={1.5}
                    className="absolute inset-0 w-full h-full"
                />
            </div>

            {/* Timeline Header */}
            <div className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em] mb-6">
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover={true}
                    fontSize="clamp(2rem, 7vw, 4rem)"
                    fontWeight={900}
                    fontFamily="sans-serif"
                    color="#ffffff"
                    fuzzRange={10}
                    className="mx-auto"
                >
                    Hackathon Schedule

                </FuzzyText>
            </div>

            {/* Vertical Timeline + Cards */}
            <div className="relative z-20 max-w-5xl mx-auto">
                {/* Center Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-fuchsia-500/50 via-purple-500/30 to-transparent"></div>

                <div className="space-y-8">
                    {schedule.map((item, i) => (
                        <div
                            key={i}
                            className={`
                relative group flex ${i % 2 === 0 ? 'flex-row-reverse md:flex-row' : 'flex-row-reverse'} gap-8 items-center
                ${i === schedule.length - 1 ? 'pb-20' : ''}
              `}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-fuchsia-500 rounded-full shadow-lg shadow-fuchsia-500/50 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-fuchsia-500/70 transition-all duration-500 z-30"></div>

                            {/* Glass Schedule Card */}
                            <div className={`
                flex-1 max-w-md p-6 md:p-8 rounded-3xl backdrop-blur-2xl border border-white/20
                bg-white/10 hover:bg-white/20 hover:shadow-2xl hover:shadow-fuchsia-500/40
                hover:-translate-y-4 hover:rotate-1 hover:ring-2 ring-fuchsia-400/40
                transition-all duration-700 ease-out group-hover:shadow-glow
              `}>
                                <div className="uppercase text-xs md:text-sm tracking-widest text-fuchsia-400 mb-3 font-bold bg-fuchsia-900/30 px-3 py-1 rounded-full inline-block backdrop-blur-sm">
                                    {item.date}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:text-fuchsia-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-pink-100/95 leading-relaxed text-sm md:text-base drop-shadow-sm whitespace-pre-line">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Ambient Glows */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-fuchsia-600/15 to-purple-600/15 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-purple-900/20 to-fuchsia-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </section>
    );
};

export default Schedule;
