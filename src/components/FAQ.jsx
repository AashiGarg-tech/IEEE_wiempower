import { useState } from "react";
import faqBg from "./Faq-background.png";

export default function FAQ() {
  const faqs = [
    {
      question: "Is it free to participate in this Hackathon?",
      answer: "Yes, you can register and participate for free.",
    },
    {
      question: "What is the eligibility criteria for participation?",
      answer:
        "Teams should consist of 2-4 members from the same batch, with at least one female member being mandatory.",
    },
    {
      question: "Can students from other colleges participate?",
      answer: "Yes, students from any college are welcome to participate.",
    },
    {
      question: "Are non-IGDTUW students allowed to attend on-campus events?",
      answer:
        "Yes, students from other colleges can attend on-campus events, but prior registration is required.",
    },
    {
      question: "Can we form intercollege teams?",
      answer:
        "Yes, you can form intercollege teams and participate in the Hackathon.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 space-y-6"
      style={{
        backgroundImage: `url(${faqBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <h1
        className="text-4xl text-white md:text-5xl font-black uppercase tracking-[0.2em]"
        style={{
          textShadow: "2px 0 #bc39f3, -1px 0 #00fff9",
        }}
      >
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden text-white shadow-lg shadow-white/15"
          style={{
            background:
              "linear-gradient(to right, rgb(41, 25, 55), rgb(115, 43, 177))", // dark to light purple
          }}
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-6 text-white text-left"
          >
            <h2 className="text-lg md:text-xl font-semibold">{faq.question}</h2>

            {/* Round Toggle Button: white filled with black arrow */}
            <span
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-black bg-white transition-transform duration-300`}
            >
              {/* Arrow: black, rotates when open */}
              <span
                className={`text-black font-bold transform transition-transform duration-15 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </span>
          </button>

          {/* White line divider (only visible when open) */}
          <div
            className={`h-px bg-white/70 transition-opacity duration-500 ${
              openIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Answer with smooth transition */}
          <div
            className={`px-6 overflow-hidden transition-all duration-500 ease-in-out`}
            style={{
              maxHeight: openIndex === index ? "500px" : "0px",
            }}
          >
            <p className="py-2 text-sm md:text-base text-purple-100">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
