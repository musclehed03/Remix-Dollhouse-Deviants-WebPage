import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // 1. Replace 'YOUR_ID_HERE' with the ID you copied from PayPal
  const paypalId = "AZVCASBGAJ8AL"; 
  
  // 2. This is your new, correctly-sized Media Kit direct download link
  const mediaKitUrl = "https://drive.google.com/uc?export=download&id=1a0cLF-MOWv43YIt_XFtTuaiNoZmaEceD";

  return (
    <footer className="bg-black text-zinc-500 py-16 px-8 border-t border-zinc-900 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Philanthropy */}
        <div className="space-y-6">
          <h3 className="text-magenta-500 font-bold tracking-tighter text-xl italic underline decoration-zinc-800">DOLLHOUSE DEVIANTS</h3>
          <p className="text-[9px] leading-relaxed uppercase tracking-[0.2em]">
            A Sanctuary for the Unconventional. <br />
            Built by Sonja Kelley.
          </p>
          <div className="pt-4 border-t border-zinc-900">
            <p className="text-[8px] uppercase tracking-widest text-zinc-600 mb-2">Proudly Supporting</p>
            <a href="https://give.thetrevorproject.org/campaign/786401/donate" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-[10px] font-bold hover:text-white transition-colors">THE TREVOR PROJECT →</a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-6">Explore</h4>
          <ul className="text-[10px] space-y-4 uppercase tracking-widest">
            <li><Link to="/about" className="hover:text-magenta-500 transition-colors">Our Story</Link></li>
            <li><Link to="/studio" className="hover:text-magenta-500 transition-colors">The Studio</Link></li>
            <li><Link to="/boutique" className="hover:text-magenta-500 transition-colors">The Boutique</Link></li>
            <li><Link to="/circuit" className="hover:text-magenta-500 transition-colors">The Circuit</Link></li>
            <li><Link to="/creations" className="hover:text-magenta-500 transition-colors">The Gallery</Link></li>
            <li><Link to="/echoes" className="hover:text-magenta-500 transition-colors">The Echoes</Link></li>
            <li><Link to="/vault" className="hover:text-blue-500 transition-colors italic">The Vault (18+)</Link></li>
          </ul>
        </div>

        {/* Monetary Support Section */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-6">Contribute</h4>
          <div className="space-y-6">
            <p className="text-[10px] leading-relaxed">
              Help us keep the Dollhouse open for the collective. 
              Your support funds trans creators and mental health advocacy.
            </p>
            {/* The Tactful Button linking to the new Support page */}
            <Link 
              to="/support"
              className="inline-block border border-magenta-500 text-magenta-500 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-magenta-500 hover:text-white transition-all"
            >
              Support the Vision
            </Link>
          </div>
        </div>

        {/* Resources & Compliance */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-6">Resources</h4>
          <ul className="text-[10px] space-y-4 uppercase tracking-widest">
            <li>
              <a href={mediaKitUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2">
                Download Media Kit
              </a>
            </li>
            <li><Link to="/compliance" className="hover:text-white transition-colors">2257 Compliance</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy & Consent</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-center">
        <p className="text-[8px] tracking-[0.5em] text-zinc-700">
          ALL CONTENT © 2026 DOLLHOUSE DEVIANTS PRODUCTIONS • WAVERLY, IA
        </p>
      </div>
    </footer>
  );
}
