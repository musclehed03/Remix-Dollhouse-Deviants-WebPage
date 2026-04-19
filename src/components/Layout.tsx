import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { useAccess } from '../context/AccessibilityContext';
import { Zap } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isSimplifiedMode, toggleSimplifiedMode } = useAccess();
  const [showSlowLoadTrigger, setShowSlowLoadTrigger] = useState(false);

  useEffect(() => {
    // If Simplified Mode is already on, don't show the trigger
    if (isSimplifiedMode) return;

    // Show the slow load trigger after 4 seconds to catch users on slow connections
    const timer = setTimeout(() => {
      setShowSlowLoadTrigger(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isSimplifiedMode]);

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col relative overflow-x-hidden font-sans selection:bg-magenta-500/30 selection:text-white">
      {/* Slow Load Trigger Banner */}
      {showSlowLoadTrigger && !isSimplifiedMode && (
        <div className="fixed top-0 left-0 w-full z-[10000] bg-zinc-900 border-b border-magenta-500/30 p-3 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in shadow-lg">
          <span className="text-zinc-300 text-xs tracking-widest uppercase text-center">
            Not loading fast? We got your back.
          </span>
          <button 
            onClick={() => {
              toggleSimplifiedMode();
              setShowSlowLoadTrigger(false);
            }}
            className="flex items-center gap-2 bg-magenta-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-magenta-600 transition-colors"
          >
            <Zap size={12} />
            Enable Simplified View
          </button>
          <button 
            onClick={() => setShowSlowLoadTrigger(false)}
            className="absolute right-4 text-zinc-500 hover:text-white text-xs"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      {/* Background radial glow - subtle and luxurious */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,105,180,0.03)_0%,_rgba(18,18,18,0)_70%)] pointer-events-none"></div>

      {/* Navigation Landmark - Pushed to top left */}
      <nav className="z-20 w-full px-4 sm:px-6 py-6 flex justify-between items-center" aria-label="Main Navigation">
         <a href="/" className="flex items-center gap-3 text-white font-serif tracking-widest text-xl hover:text-magenta-500 transition-colors duration-500">
           <img src="/DD SFW Logo No Main.jpg" alt="Dollhouse Deviants Logo" className="h-10 w-auto rounded-sm object-contain" />
           <span className="uppercase font-light">Dollhouse Deviants</span>
         </a>
         {/* Add any top-right nav links here later */}
      </nav>
      
      {/* Main Content Landmark */}
      <main className="flex-grow flex flex-col items-center relative z-10 px-4 sm:px-8 pt-12 pb-32 w-full">
        {children}
      </main>

      {/* Footer is outside main */}
      <footer className="z-10 w-full">
        <Footer />
      </footer>
    </div>
  );
}
