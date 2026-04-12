import React from 'react';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_60%)]"></div>

      {/* Navigation Landmark */}
      <nav className="z-20 w-full p-6 flex justify-between items-center" aria-label="Main Navigation">
         <a href="/" className="flex items-center gap-3 text-magenta-500 font-black tracking-tighter text-xl hover:text-white transition-all">
           <img src="/DD SFW Logo No Main.jpg" alt="Dollhouse Deviants Logo" className="h-10 w-auto rounded-md" />
           DOLLHOUSE DEVIANTS
         </a>
         {/* Add any top-right nav links here later */}
      </nav>
      
      {/* Main Content Landmark */}
      <main className="flex-grow flex flex-col items-center relative z-10 px-6 pt-10 pb-20 w-full">
        {children}
      </main>

      {/* Footer is outside main */}
      <footer className="z-10 w-full">
        <Footer />
      </footer>
    </div>
  );
}
