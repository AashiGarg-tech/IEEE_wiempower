import React from 'react';
import DotGrid from "./DotGrid.jsx";

const Events = () => {
    const events = [
        {
            id: 1,
            title: "NULL",
            speaker: "NULL",
            date: "NULL",
            time: "NULL",
            location: "NULL",
            description: "NA",
            image: "NULL",
            badge: "ABC"
        },
        {
            id: 2,
            title: "NULL",
            speaker: "NULL",
            date: "NULL",
            time: "NULL",
            location: "NULL",
            description: "NA",
            image: "NULL",
            badge: "ABC"
        },
        {
            id: 3,
            title: "NULL",
            speaker: "NULL",
            date: "NULL",
            time: "NULL",
            location: "NULL",
            description: "NA",
            image: "NULL",
            badge: "ABC"
        },
        {
            id: 4,
            title: "NULL",
            speaker: "NULL",
            date: "NULL",
            time: "NULL",
            location: "NULL",
            description: "NA",
            image: "NULL",
            badge: "ABC"
        },
        {
            id: 5,
            title: "NULL",
            speaker: "NULL",
            date: "NULL",
            time: "NULL",
            location: "NULL",
            description: "NA",
            image: "NULL",
            badge: "ABC"
        },
    ];

    return (
        <section className="relative w-full bg-[#050313] text-white overflow-hidden py-24 px-6">
            {/* DotGrid Background */}
            <div className="absolute inset-0 w-full h-full opacity-100 pointer-events-none">
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

                {/* Optional: image overlay */}
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/14553707/pexels-photo-14553707.jpeg')",
                    }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>

            {/* Header Section */}
            <div className="relative mb-16 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent blur-3xl"></div>
                <div className="relative flex justify-center items-center py-12">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                Upcoming Events
              </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                and Workshops
              </span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Events Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="group relative bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                            <div className="relative p-6 h-full flex flex-col">
                                {/* Badge */}
                                <div className="mb-4">
                  <span className="inline-block bg-purple-500/30 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-400/50">
                    {event.badge}
                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-white mb-4 line-clamp-3 group-hover:text-purple-300 transition-colors">
                                    {event.title}
                                </h3>

                                {/* Speaker */}
                                <p className="text-purple-300 font-semibold mb-4">
                                    {event.speaker}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-gray-300 mb-6 flex-grow line-clamp-3">
                                    {event.description}
                                </p>

                                {/* Event Details */}
                                <div className="space-y-3 mb-6 text-sm">
                                    {event.date && (
                                        <div className="flex items-center text-gray-300">
                                            <span className="text-purple-400 mr-3">📅</span>
                                            {event.date}
                                        </div>
                                    )}
                                    {event.time && (
                                        <div className="flex items-center text-gray-300">
                                            <span className="text-purple-400 mr-3">🕐</span>
                                            {event.time}
                                        </div>
                                    )}
                                    {event.location && (
                                        <div className="flex items-center text-gray-300">
                                            <span className="text-purple-400 mr-3">📍</span>
                                            {event.location}
                                        </div>
                                    )}
                                </div>

                                {/* Register Button */}
                                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
