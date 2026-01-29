import React, { useState } from "react";
import DotGrid from "./DotGrid.jsx";
import bgImage from "../assets/bg.png";

export default function FAQ() {
    const faqs = [
        {
            question: "Is it free to participate in this Hackathon?",
            answer: "Yes, you can register and participate for free.",
        },
        {
            question: "What is the eligibility criteria for participation?",
            answer: "Teams should consist of 2-4 members from the same batch, with at least one female member being mandatory.",
        },
        {
            question: "Can students from other colleges participate?",
            answer: "Yes, students from any college are welcome to participate.",
        },
        {
            question: "Are non-IGDTUW students allowed to attend on-campus events?",
            answer: "Yes, students from other colleges can attend on-campus events, but prior registration is required.",
        },
        {
            question: "Can we form intercollege teams?",
            answer: "Yes, you can form intercollege teams and participate in the Hackathon.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative min-h-screen w-full text-white font-sans overflow-hidden flex flex-col items-center justify-center p-4 md:p-6">
            {/* ================= BACKGROUND LAYERS ================= */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                <div className="absolute top-0 left-0 w-full h-[35%] backdrop-blur-md bg-gradient-to-b from-[#0a0514]/90 to-transparent" />
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

            {/* ================= COMPACT HEADING ================= */}
            <h1
                className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em] relative z-10 text-center mb-12"
                style={{
                    textShadow: "2px 0 #bc39f3, -1px 0 #00fff9",
                }}
            >
                Frequently Asked Questions
            </h1>

            {/* ================= LONGER GLASS FAQ CARDS ================= */}
            <div className="w-full max-w-3xl space-y-4 relative z-20">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`
                            w-full group rounded-2xl p-px backdrop-blur-xl
                            ${openIndex === index
                            ? 'bg-gradient-to-r from-fuchsia-900/20 via-purple-900/20 shadow-xl shadow-fuchsia-500/20 ring-1 ring-fuchsia-500/30'
                            : 'bg-white/5 hover:bg-white/10 shadow-lg shadow-purple-500/15 hover:shadow-xl hover:shadow-fuchsia-500/20 hover:ring-1 ring-white/20'
                        } transition-all duration-500 hover:-translate-y-0.5
                        `}
                    >
                        {/* Compact Glass Question Header */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-6 rounded-2xl backdrop-blur-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-fuchsia-400/40 transition-all duration-300 relative z-10"
                        >
                            <h2 className="text-lg md:text-xl font-bold text-white drop-shadow-md">
                                {faq.question}
                            </h2>
                            <div className={`w-10 h-10 rounded-xl backdrop-blur-xl flex items-center justify-center transition-all duration-500 ${
                                openIndex === index
                                    ? 'bg-fuchsia-500/30 shadow-lg shadow-fuchsia-500/40 rotate-180'
                                    : 'bg-white/20 shadow-md shadow-white/30 hover:bg-fuchsia-400/20'
                            }`}>
                                <span className="text-lg font-bold text-white drop-shadow-sm">⌄</span>
                            </div>
                        </button>

                        {/* Glass Divider */}
                        <div className={`h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-6 my-1 transition-opacity duration-500 ${
                            openIndex === index ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                        } origin-center`} />

                        {/* Compact Glass Answer Panel */}
                        <div className={`
                            px-6 pb-6 overflow-hidden transition-all duration-700 ease-out rounded-2xl backdrop-blur-xl
                            ${openIndex === index
                            ? 'bg-white/15 shadow-lg shadow-purple-500/15 max-h-64 opacity-100'
                            : 'max-h-0 opacity-0 shadow-none'
                        }
                        `}>
                            <p className="text-base md:text-lg text-pink-100/95 font-light leading-relaxed drop-shadow-xs">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
