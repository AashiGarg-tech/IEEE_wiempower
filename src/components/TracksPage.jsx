import React, { useState } from 'react';
import { Heart} from 'lucide-react';
import DotGrid from "./DotGrid.jsx";

const TracksPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const tracks = [
    {
      id: 1,
      icon: Heart,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis dapibus ultrices. Duis nisl nisl, molestie a ornare id, venenatis quis magna."
    },
    {
      id: 2,
      icon: Heart,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis dapibus ultrices. Duis nisl nisl, molestie a ornare id, venenatis quis magna."
    },
    {
      id: 3,
      icon: Heart,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis dapibus ultrices. Duis nisl nisl, molestie a ornare id, venenatis quis magna."
    },
    {
      id: 4,
      icon: Heart,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis dapibus ultrices. Duis nisl nisl, molestie a ornare id, venenatis quis magna."
    },
    {
      id: 5,
      icon: Heart,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis dapibus ultrices. Duis nisl nisl, molestie a ornare id, venenatis quis magna."
    }
    
  ];

  return (
    <section className="relative w-full bg-[#0a0514] text-white overflow-hidden py-28 px-6">
        <div className="absolute inset-0 w-full h-full opacity-100 pointer-events-none">
            {/* DotGrid Background */}
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
                className="w-full h-full"
            />

            {/* Optional: Original image as subtle overlay */}
            <div
                className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/14553707/pexels-photo-14553707.jpeg')",
                }}
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em] mb-6"
            style={{ textShadow: "2px 0 #bc39f3, -1px 0 #00fff9" }}
          >
            Hackathon <br className="md:hidden" /> Tracks
          </h2>
          <p className="text-pink-100 text-lg md:text-xl max-w-4xl mx-auto">
            Choose from five accessible and thoughtfully designed tracks, each aimed at sparking creativity, driving innovation, and tackling real-world challenges.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(track.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div
                  className={`border border-fuchsia-900/30 bg-fuchsia-950/20 backdrop-blur-sm p-6 rounded-sm shadow-2xl space-y-4 h-full transition-all duration-500 flex flex-col items-center text-center ${
                    hoveredCard === track.id
                      ? 'transform -translate-y-2 border-fuchsia-700/60 shadow-[0_0_30px_rgba(236,72,153,0.3)]'
                      : ''
                  }`}
                >
                  {/* hover icon */}
                  <div
                    className={`w-20 h-20 rounded-full bg-fuchsia-900/40 flex items-center justify-center transition-transform duration-500 ${
                      hoveredCard === track.id ? 'scale-110 rotate-12' : ''
                    }`}
                  >
                    <Icon className="w-10 h-10 text-fuchsia-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-pink-200">
                    {track.title}
                  </h3>
                  <div
                    className={`h-0.5 bg-fuchsia-500 transition-all duration-500 ${
                      hoveredCard === track.id ? 'w-full' : 'w-12'
                    }`}
                  />
                  <p className="text-pink-100 leading-relaxed text-sm flex-grow">
                    {track.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* glowy effect */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[160px]" />
    </section>
  );
};

export default TracksPage;