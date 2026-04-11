import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ShoppingBag, Share2, Palette, ScrollText, Lock } from 'lucide-react';
import Layout from '../components/Layout';
import SafeImage from '../components/SafeImage';

const Home = () => {
  const branches = [
    { name: 'THE STUDIO', subtext: 'SFW PRODUCTION', icon: <Camera />, path: '/studio', glow: 'glow-cyan', hoverBorder: 'hover:border-[#00E5FF]', color: '#00E5FF' },
    { name: 'THE BOUTIQUE', subtext: 'JEWELRY & APPAREL', icon: <ShoppingBag />, path: '/boutique', glow: 'glow-green', hoverBorder: 'hover:border-[#39FF14]', color: '#39FF14' },
    { name: 'THE CIRCUIT', subtext: 'COMMUNITY FEED', icon: <Share2 />, path: '/circuit', glow: 'glow-orange', hoverBorder: 'hover:border-[#FF5F1F]', color: '#FF5F1F' },
    { name: 'CREATIONS', subtext: 'MEMBER GALLERY', icon: <Palette />, path: '/creations', glow: 'glow-purple', hoverBorder: 'hover:border-[#D946EF]', color: '#D946EF' },
    { name: 'THE ECHOES', subtext: 'SAFE SPACE JOURNAL', icon: <ScrollText />, path: '/echoes', glow: 'glow-scarlet', hoverBorder: 'hover:border-[#FF3131]', color: '#FF3131' },
    { name: 'THE VAULT', subtext: 'NSFW SANCTUARY', icon: <Lock />, path: '/vault', glow: 'glow-magenta', hoverBorder: 'hover:border-[#FF69B4]', color: '#FF69B4' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        
        {/* Restored Headline */}
        <div className="z-10 text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]">
            Dollhouse <span className="text-[#FF69B4]">Deviants</span>
          </h1>
          <p className="text-[#A3A3A3] font-mono text-sm mt-4 tracking-widest uppercase">
            Select Your Experience
          </p>
        </div>

        {/* The New Grid Layout with Restored Outlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {branches.map((branch) => (
            <Link 
              key={branch.name}
              to={branch.path}
              aria-label={`${branch.name}: ${branch.subtext}`}
              className={`group relative p-10 bg-zinc-900/40 border border-zinc-800 ${branch.hoverBorder} rounded-3xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-zinc-900/80 hover:-translate-y-2 overflow-hidden`}
            >
              {/* The Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl ${branch.glow.replace('glow-', 'bg-')}`} />
              
              <div className={`mb-6 transition-transform duration-500 group-hover:scale-125 ${branch.glow}`} aria-hidden="true">
                 {React.cloneElement(branch.icon, { size: 48, strokeWidth: 1.5 })}
              </div>
              
              <h2 className={`text-2xl font-black tracking-tighter uppercase mb-2 transition-colors duration-300 ${branch.glow}`} aria-hidden="true">
                {branch.name}
              </h2>
              
              <p className="text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase" aria-hidden="true">
                {branch.subtext}
              </p>

              {/* The Shooting Neon Glow Line */}
              <div 
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: branch.color, boxShadow: `0 0 15px ${branch.color}` }}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        {/* Restored Founder's Manifesto Component */}
        <section className="max-w-5xl mx-auto mb-16 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-y border-magenta-900/30 py-20">
            <div className="space-y-6">
              <h2 className="text-magenta-500 font-bold tracking-[0.3em] uppercase text-xs">A Letter from Sonja</h2>
              <h3 className="text-4xl md:text-5xl font-bold italic leading-tight tracking-tighter text-white">
                "A Dollhouse is only a prison if you didn't <span className="text-white underline decoration-magenta-600">build it yourself</span>."
              </h3>
              <div className="w-20 h-1 bg-magenta-500"></div>
            </div>
            <div className="space-y-6 text-zinc-300 leading-relaxed font-light">
              <p>
                Dollhouse Deviants was forged in the fire of survival. For too long, labels like 
                "deviant" and "dollhouse" were used to confine me. Today, I reclaim them.
              </p>
              <p>
                Whether navigating the complexities of mental health or the beautiful road of 
                transition, I found that my "deviance" was actually my liberation. This space 
                is a sanctuary for those who refuse to fit the mold.
              </p>
              <p className="font-bold italic text-white pt-4">
                — Sonja Kelley, Founder & Lead Deviant
              </p>
            </div>
          </div>
        </section>

        {/* Restored Community Appreciation Section */}
        <section className="max-w-5xl mx-auto mb-16 z-10 relative text-center">
          <Link to="/support" className="block relative group overflow-hidden border border-zinc-800 rounded-xl p-2 bg-zinc-900/50 hover:border-magenta-500/50 transition-colors">
            <div className="absolute inset-0 bg-magenta-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            
            <SafeImage 
              src="/thank-you.png" 
              alt="Thank You to Our Community" 
              className="w-full h-auto rounded-lg grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 border border-zinc-800"
              onError={(e) => {
                // Fallback if the image isn't uploaded yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            
            <div className="mt-10 mb-6">
              <h3 className="text-2xl font-black italic tracking-widest uppercase text-white mb-4 drop-shadow-[0_0_10px_rgba(255,105,180,0.5)]">
                To Our <span className="text-magenta-500">Community</span>
              </h3>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed font-light">
                Whether you're here to support the vision, contribute your art, or just peruse the space—thank you. 
                Your presence here means the world. You make all this possible. No pressure, just appreciation.
              </p>
              <span className="inline-block mt-8 px-8 py-3 border-2 border-magenta-500 rounded-full text-xs font-bold uppercase tracking-widest text-magenta-500 group-hover:bg-magenta-500 group-hover:border-magenta-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,105,180,0.1)]">
                View Support Options →
              </span>
            </div>
          </Link>
        </section>

      </div>
    </Layout>
  );
};

export default Home;
