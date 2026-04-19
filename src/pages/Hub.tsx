import React from 'react';
import Layout from '../components/Layout';
import { useAccess } from '../context/AccessibilityContext';
import { Terminal, ShoppingBag, Radio, Sparkles, BookOpen, Lock, Anchor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const branches = [
  { name: 'The Studio', icon: Terminal, color: 'text-cyan-400', glow: 'shadow-cyan-500/20', path: '/studio', desc: 'Dev tools & site logs' },
  { name: 'The Boutique', icon: ShoppingBag, color: 'text-green-400', glow: 'shadow-green-500/20', path: '/boutique', desc: 'Digital goods & presets' },
  { name: 'The Circuit', icon: Radio, color: 'text-[#FF5F1F]', glow: 'shadow-orange-500/20', path: '/circuit', desc: 'Community & social wire' },
  { name: 'The Creations', icon: Sparkles, color: 'text-purple-400', glow: 'shadow-purple-500/20', path: '/creations', desc: 'Content & portfolio' },
  { name: 'The Echoes', icon: BookOpen, color: 'text-[#FF3131]', glow: 'shadow-red-500/20', path: '/echoes', desc: 'Personal safe journal' },
  { name: 'The Vault', icon: Lock, color: 'text-magenta-500', glow: 'shadow-magenta-500/20', path: '/vault', desc: 'Secure 18+ content' },
];

export default function Hub() {
  const { isSimplifiedMode } = useAccess();

  return (
    <Layout>
      <div className="max-w-5xl w-full mx-auto pb-20 px-4">
        
        {/* Architect's Vision */}
        <section className="mb-24 pt-10 border-b border-zinc-900 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0 relative">
              <div className="w-48 h-48 rounded-full border border-zinc-800 p-1.5 bg-zinc-900/50">
                <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                  <img src="/Sonja At the Boutique.jpg" alt="Sonja" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              <h2 className="text-4xl font-black uppercase text-white tracking-tighter mb-4 italic">
                Tearing Down <span className="text-cyan-400">The Prison.</span>
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-2xl">
                Transitioning was the moment I stopped building walls and started building doors. This space exists so you never have to curate a version of yourself that the world can digest.
              </p>
              <div className="mt-8 pt-6 border-t border-zinc-800/50 inline-block text-left">
                <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-2">Signed,</p>
                <p className="signature-font text-4xl text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  -Sonja Kelley
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Header moved just above branches */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-black tracking-tighter uppercase text-white mb-2">The Hub</h1>
          <p className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase">Choose Your Branch</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {branches.map((branch) => (
            <Link 
              key={branch.name} 
              to={branch.path} 
              className={`group relative p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl transition-all duration-500 hover:scale-[1.02] ${!isSimplifiedMode && `hover:shadow-2xl ${branch.glow}`}`}
            >
              <div className="flex flex-col items-center text-center">
                <branch.icon size={42} className={`${branch.color} mb-6`} />
                <h3 className="text-xl font-black uppercase text-white tracking-tighter mb-1">{branch.name}</h3>
                <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">{branch.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Thank You Section */}
        <section className="bg-zinc-900/30 rounded-[3rem] p-12 border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden">
          <div className="max-w-md w-full mb-8 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img src="/thank-you.png" alt="Gratitude" className="w-full h-auto opacity-80" />
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Support the Sanctuary</h3>
          <p className="text-zinc-500 mb-8 max-w-sm text-sm italic">"Every brick in this house is built by the community."</p>
          
          <Link to="/support" className="bg-white text-black px-10 py-4 rounded-xl font-black uppercase tracking-tighter hover:bg-cyan-400 transition-all flex items-center gap-3 shadow-xl">
            View Support Tiers
            <ArrowRight size={18} />
          </Link>

          <div className="absolute -bottom-10 -right-10 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none italic">
            THANKS
          </div>
        </section>
      </div>
    </Layout>
  );
}
