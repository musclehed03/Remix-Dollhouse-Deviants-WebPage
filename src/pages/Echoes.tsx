import React from 'react';
import Layout from '../components/Layout';
import { PenTool, Scroll } from 'lucide-react';

const Echoes = () => {
  return (
    <Layout>
      <div className="max-w-3xl w-full">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-black uppercase text-[#FF3131] drop-shadow-[0_0_15px_rgba(255,49,49,0.5)]">The Echoes</h1>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] mt-4">A SAFE SPACE JOURNAL</p>
        </header>

        <article className="bg-zinc-900/40 border-l-4 border-[#FF3131] p-10 rounded-r-3xl relative overflow-hidden mb-10">
          <div className="flex items-center gap-3 text-zinc-600 font-mono text-xs mb-6">
            <Scroll size={14} /> APRIL 10, 2026 • 8:45 PM
          </div>
          <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">"The Fire of Transition"</h2>
          <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed text-lg space-y-6">
            <p>
              Today was a day where the "noise" of the world felt a bit too loud. Being neurodivergent in a linear world often feels like trying to run software on a system that wasn't built for it... 
            </p>
            <p>
              But then I remember the sanctuary we're building here. This space isn't just a website; it's an echo of the life I'm finally living on my own terms.
            </p>
          </div>
        </article>

        <div className="flex justify-center">
          <button className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-zinc-400 px-8 py-4 rounded-full hover:border-[#FF3131] hover:text-[#FF3131] transition-all">
            <PenTool size={18} /> RECORD A NEW ECHO
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Echoes;
