import React, { useState, useEffect } from 'react';
import SafeImage from './SafeImage';

export default function TrevorBanner() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling down 50px
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const donationLink = "https://give.thetrevorproject.org/campaign/786401/donate?c_src=UMCOF260410250&c_src2=Nebo-Paid-Search&utm_medium=fundraising&utm_source=sem-googleadwords1&utm_campaign=generaleffort&gclsrc=aw.ds&gad_source=1&gad_campaignid=1674429279&gbraid=0AAAAAC4XVSlmW-XGCCW8AcM1dgvNGtN3U&gclid=CjwKCAjw-dfOBhAjEiwAq0RwI7Q_jfKJrzIojMKHFjMXh8QLWvfLuq1GkMLDpzk4AifETxZYvUk4phoCMUsQAvD_BwE";

  return (
    <a 
      href={donationLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-[9999] flex items-center gap-4 bg-black/80 hover:bg-zinc-900 border border-orange-500/30 p-2 pl-4 rounded-full backdrop-blur-sm transition-all duration-500 group hover:scale-105
        /* Mobile: Bottom Right | Desktop: Top Right */
        bottom-6 right-6 md:top-6 md:bottom-auto
        /* Scroll Visibility */
        ${hasScrolled 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-[150%] md:translate-y-[-150%] opacity-0 pointer-events-none'
        }
      `}
    >
      <div className="hidden md:block text-right">
        <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 leading-tight">
          Support a project we believe in <span className="text-orange-500 font-bold">wholeheartedly</span>
        </p>
        <p className="text-[8px] uppercase tracking-widest text-zinc-500 mt-0.5">Click to donate</p>
      </div>
      
      {/* Orange Badge with Logo */}
      <div className="h-10 flex items-center justify-center bg-[#FF6B00] rounded-full px-4 shadow-[0_0_15px_rgba(255,107,0,0.4)]">
        {imageError ? (
          <span className="text-white font-black text-xs tracking-tighter whitespace-nowrap">THE TREVOR PROJECT</span>
        ) : (
          <SafeImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/The_Trevor_Project_logo.svg/512px-The_Trevor_Project_logo.svg.png" 
            alt="The Trevor Project" 
            className="h-4 w-auto filter brightness-0 invert !grayscale-0"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        )}
      </div>
    </a>
  );
}
