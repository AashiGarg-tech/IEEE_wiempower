import React from 'react';

import ieeeLogo from '../assets/ieee logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0514] text-white py-6 px-6 md:px-20 relative 
    before:absolute before:inset-x-0 before:top-0 before:h-px 
    before:bg-gradient-to-r before:from-pink-500/70 before:via-fuchsia-500 before:to-purple-500/70
    before:opacity-90 font-sans">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo and Address */}
        <div className="flex flex-col space-y-3">
          <img 
            src={ieeeLogo} 
            alt="IEEE IGDTUW Logo" 
            className="w-32 h-auto opacity-90"
          />
          <div className="flex flex-col space-y-1">
            <h3 className="font-bold text-base tracking-widest">
              Get In Touch
            </h3>
            <p className="text-pink-100 text-sm leading-snug max-w-xs">
              Indira Gandhi Delhi Technical University for Women,<br />
              New Church Rd, Opp. St James Church,<br />
              Kashmere Gate, Delhi 110006
            </p>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col text-center md:items-center">
          <div>
            <h3 className="font-bold text-base mb-4">
              Links
            </h3>
            <ul className="space-y-3 text-pink-100 text-xs">
              <li><a href="https://ieee-igdtuw.github.io/ieeeigdtuw/" target="_blank" rel="noreferrer" className="hover:text-fuchsia-400 transition-colors">IEEE Home</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Registration</a></li>
              <li><a href="#about" className="hover:text-fuchsia-400 transition-colors">About</a></li>
              <li><a href="#schedule" className="hover:text-fuchsia-400 transition-colors">Timeline</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Socials and Contact */}
        <div className="flex flex-col">
          <h3 className="font-bold text-base mb-3">
            Follow Us On:
          </h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.instagram.com/ieeeigdtuw/" target="_blank" rel="noreferrer" className="text-pink-100 hover:text-[#e4405f] transition-colors">
              <svg fill="currentColor" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 184.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href="https://x.com/ieeeigdtuw" target="_blank" rel="noreferrer" className="text-pink-100 hover:text-gray-400 transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/ieee-igdtuw/" target="_blank" rel="noreferrer" className="text-pink-100 hover:text-[#0077b5] transition-colors">
              <svg fill="currentColor" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
          </div>
          
          <div className="text-sm text-pink-100 space-y-1">
            <p className="font-bold text-white text-sm tracking-wide">For more information, contact:</p>
            <p className="flex items-center tracking-tight">• <a href="https://www.linkedin.com/company/ieee-igdtuw/" className="ml-1 hover:underline hover:text-fuchsia-400 transition">LinkedIn Profile</a></p>
            <p className="flex items-center tracking-tight">• <a href="https://www.instagram.com/ieeeigdtuw/" className="ml-1 hover:underline hover:text-fuchsia-400 transition">Instagram ID</a></p>
            <p className="pt-1">Email: <a href="mailto:igdtuieee@gmail.com" className="text-fuchsia-400 font-medium hover:underline">igdtuieee@gmail.com</a></p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-white text-[13px] md:text-sm font-medium">
          Developed by IEEE IGDTUW Web Admin Team
        </p>
        <p className="text-white text-[13px] md:text-sm font-medium">
          © IEEE IGDTUW 2024 | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;