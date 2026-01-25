import React from "react";

const schedule = [
  {
    date: "17th January 2025 – 26th January 2025 · 6:00 PM",
    title: "Registration Opens [Online]",
    desc: "Begin your journey by registering your team through our online portal. Ensure all team details and areas of interest are properly documented. Join Discord for all official announcements of our hackathon.",
  },
  {
    date: "24th January 2025",
    title: "Ideation Phase Begins [Online]",
    desc: "This phase marks the official start of your brainstorming process. Team members should work together to ideate and plan their project. Reach out to mentors for guidance.",
  },
  {
    date: "26th January 2025 · 12:00 PM",
    title: "Ideation Phase End [Online]",
    desc: "Complete your ideas and submit your finalized project concept. Mentors will review your submission and provide feedback.",
  },
  {
    date: "27th January 2025 · 12:00 PM",
    title: "Development Phase & Mentorship [Online]",
    desc: "The development phase begins. Teams will start implementing their ideas, with mentorship available throughout the process.",
  },
  {
    date: "31st January 2025 · 11:59 PM",
    title: "Development Phase Ends [Online]",
    desc: "The development phase ends. Top teams will be announced soon on Discord.",
  },
  {
    date: "1st February 2025",
    title: "Presentations & Screening [Online]",
    desc: "All selected teams must present their PPT along with a prototype via an online presentation to the mentors.",
  },
  {
    date: "2nd February 2025",
    title: "Shortlisted Teams Announced [Online]",
    desc: "The best teams will be shortlisted and receive further instructions for the final round.",
  },
  {
    date: "3rd February 2025",
    title: "Final Presentations & Results [Offline]",
    desc: "Shortlisted teams must appear at the IGDTUW campus to present before judges. Final results will be announced the same day.\n\nVenue: Auditorium, IGDTUW\nAddress: Madras Road, Opposite St. James Church, Kashmere Gate, Delhi-110006",
  },
];

const Schedule = () => {
  return (
    <section className="relative w-full bg-[#0a0514] text-white overflow-hidden py-28 px-6">
      
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/14553707/pexels-photo-14553707.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-black uppercase tracking-[0.2em] mb-20"
          style={{ textShadow: "2px 0 #bc39f3, -1px 0 #00fff9" }}
        >
          Hackathon <br className="md:hidden" /> Schedule
        </h2>

        {/* Schedule grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="border border-fuchsia-900/30 bg-fuchsia-950/20 backdrop-blur-sm p-8 md:p-10 rounded-sm shadow-2xl space-y-4"
            >
              <p className="text-sm uppercase tracking-widest text-fuchsia-400">
                {item.date}
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-pink-200">
                {item.title}
              </h3>

              <p className="text-pink-100 leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[160px]" />
    </section>
  );
};

export default Schedule;
