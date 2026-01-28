import React from "react";

const judgesData = [
  {
    name: "Mudra Surana",
    role:
      "Mudra Surana is a Product Manager at Nykaa with expertise in Recommendations and Personalization. Former Senior Product Analyst at Sprinklr, she shares insights on Product Management and helps early-career professionals break into the field.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFDHjVuY0G-Uw/profile-displayphoto-shrink_400_400/B56ZT0PkciGQAg-/0/1739264512381?e=1770854400&v=beta&t=8732t_PLIQTLNENtzzdDuy2F4HWIP0mNuz6FD4jHo3I",
    linkedin: "https://www.linkedin.com/in/mudra-surana-0a7083148/",
  },
  {
    name: "Akshay Saini",
    role:
      "Akshay Saini, founder of NamasteDev and YouTuber with 1.7M+ subscribers, shares coding knowledge and inspires developers. Former software engineer at Uber, Paytm, and Lendingkart, he has built impactful tech products.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEdHAzKVRCM8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697706616770?e=1770854400&v=beta&t=uDFS6xIAy6zLM_kpJzA_jTQReo2KjlW7eQVdUn_nBwA    ",
    linkedin: "https://www.linkedin.com/in/akshaymarch7/",
  },
  {
    name: "Sarthak Jain",
    role:
      "Sarthak Jain is the Head of Communities at ID8NXT. Previously at Reskill and has contributed as a SysAdmin at Red Hat, leveraging expertise in community engagement and system administration.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHbbdGlXO1mLg/profile-displayphoto-shrink_400_400/B56ZWoTGmTHEAo-/0/1742285339079?e=1770854400&v=beta&t=sVmuS7BnV6wpqLGlfX4kU7MJEBTR65BI1r4J--UZV9M",
    linkedin: "https://www.linkedin.com/in/dotsarthak/",
  },
];

export default function Judges() {
  return (
    <section className="relative min-h-screen py-20 px-6 bg-[#0b0014] overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/14553707/pexels-photo-14553707.jpeg?cs=srgb&dl=pexels-bibekghosh-14553707.jpg&fm=jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,60,200,0.35),transparent_70%)]"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-[#cfc3ff] tracking-wider mb-20">
          Our Judges
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {judgesData.map((judge, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-xl rounded-[28px] px-8 pt-14 pb-10 text-center shadow-[0_0_40px_rgba(120,60,200,0.35)] hover:scale-105 transition-transform duration-300"
            >
              {/* LinkedIn Icon */}
              <a
                href={judge.linkedin}
                target="_blank"
                rel="noreferrer"
                className="absolute top-5 right-5 text-[#2ea7ff] hover:scale-110 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.63-1.2 2.18-2.47 4.48-2.47 4.79 0 5.68 3.15 5.68 7.24V24h-5v-6.93c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.66V24h-5V8z" />
                </svg>
              </a>

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-28 h-28 rounded-full object-cover border-[3px] border-white/40"
                />
              </div>

              {/* Name */}
              <h2 className="text-xl font-medium text-white mb-4 tracking-wide">
                {judge.name}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {judge.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
