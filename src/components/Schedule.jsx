import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DotGrid from "./DotGrid";

const schedule = [
    {
        date: "17th January 2025 – 26th January 2025 · 6:00 PM",
        title: "Registration Opens [Online]",
        desc: "Begin your journey by registering your team through our online portal.",
    },
    {
        date: "24th January 2025",
        title: "Ideation Phase Begins [Online]",
        desc: "This phase marks the official start of brainstorming.",
    },
    {
        date: "26th January 2025 · 12:00 PM",
        title: "Ideation Phase End [Online]",
        desc: "Finalize and submit your project concept.",
    },
    {
        date: "27th January 2025 · 12:00 PM",
        title: "Development Phase Begins [Online]",
        desc: "Teams start implementing their ideas.",
    },
    {
        date: "31st January 2025 · 11:59 PM",
        title: "Development Phase Ends [Online]",
        desc: "Top teams announced on Discord.",
    },
    {
        date: "1st February 2025",
        title: "Presentations & Screening [Online]",
        desc: "Teams present their prototype and PPT.",
    },
    {
        date: "2nd February 2025",
        title: "Shortlisted Teams Announced",
        desc: "Finalists move to the last round.",
    },
    {
        date: "3rd February 2025",
        title: "Final Presentations [Offline]",
        desc: "Venue: IGDTUW Auditorium, Delhi",
    },
];

const Schedule = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={sectionRef}
            className="relative px-6 py-32"
            style={{ minHeight: "320vh" }}
        >
            {/* SAFE BACKGROUND (ABSOLUTE, NOT FIXED) */}
            {/* BACKGROUND LAYER */}
            <div className="absolute inset-0 -z-10 pointer-events-none">

                {/* DARK BASE (important) */}
                <div className="absolute inset-0 bg-[#0a0514]" />

                {/* DOT GRID */}
                <DotGrid
                    dotSize={7}
                    gap={9}
                    baseColor="#271E37"
                    activeColor="#9429ff"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                    className="absolute inset-0 w-full h-full"
                />

                {/* FADE TOP & BOTTOM (kills white edge) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0514] via-transparent to-[#0a0514]" />
            </div>


            {/* Heading */}
            <div className="max-w-6xl mx-auto mb-40 text-center relative z-10">
                <h2
                    className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em]"
                    style={{ textShadow: "2px 0 #bc39f3, -1px 0 #00fff9" }}
                >
                    Hackathon Schedule
                </h2>
            </div>

            {/* STACK */}
            <div className="relative max-w-4xl mx-auto z-10">
                {schedule.map((item, i) => {
                    const start = i / schedule.length;
                    const end = (i + 1) / schedule.length;

                    const scale = useTransform(
                        scrollYProgress,
                        [start, end],
                        [1, 0.94]
                    );

                    const y = useTransform(
                        scrollYProgress,
                        [start, end],
                        [0, -i * 20]
                    );

                    return (
                        <motion.div
                            key={i}
                            className="sticky top-40 mb-40"
                            style={{
                                scale,
                                y,
                                zIndex: i + 1,
                            }}
                        >
                            <div className="bg-fuchsia-950 border border-fuchsia-800 rounded-3xl p-10 shadow-[0_30px_120px_rgba(148,41,255,0.35)]">
                                <p className="text-sm uppercase tracking-widest text-fuchsia-400 mb-3">
                                    {item.date}
                                </p>

                                <h3 className="text-2xl font-semibold text-pink-200 mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-pink-100 leading-relaxed whitespace-pre-line">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Schedule;
