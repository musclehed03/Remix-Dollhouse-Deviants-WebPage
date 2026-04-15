import React from 'react';
import Layout from '../components/Layout';
import { useAccess } from '../context/AccessibilityContext';
import { Heart, ShieldCheck, Sparkles, Anchor } from 'lucide-react';

export default function OurStory() {
  const { isLiteMode } = useAccess();

  return (
    <Layout>
      <div className="max-w-6xl w-full mx-auto pb-20">
        {/* Hero Section - Overlapping Layout to reduce dead space */}
        <section className="relative mb-32 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <h1 className="text-7xl md:text-8xl font-black uppercase text-white tracking-tighter leading-[0.9] mb-8">
                More Than A <span className="text-cyan-400">Sanctuary.</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed font-light max-w-xl">
                Dollhouse Deviants was born from a simple realization: the internet is often too loud, too harsh, and too restrictive for the unconventional. 
              </p>
            </div>
            
            {/* Mission Image Slot */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-[4rem] overflow-hidden relative group">
                {!isLiteMode ? (
                  <img 
                    src="/DD SFW Logo No Main.jpg" 
                    alt="Dollhouse Deviants Logo" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-800">
                    <Anchor size={64} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              {/* Decorative "Floaty" element to fill dead space */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* The Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl">
            <Heart className="text-magenta-500 mb-4" size={24} />
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4">Radical Empathy</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Built for the neurodivergent, the trans community, and anyone who has ever felt like an outlier.</p>
          </div>
          <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl">
            <ShieldCheck className="text-cyan-400 mb-4" size={24} />
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4">Absolute Privacy</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">No algorithms. No data mining. Your presence here is yours and yours alone.</p>
          </div>
          <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl">
            <Sparkles className="text-purple-400 mb-4" size={24} />
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4">Artistic Autonomy</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">A platform where creators own their narratives without corporate interference.</p>
          </div>
        </section>

        {/* The "Founder" Section - This is where your "Thank You" pic goes */}
        <section className="bg-zinc-900/50 rounded-[3rem] p-12 border border-zinc-800 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-48 h-48 rounded-full bg-zinc-800 border-4 border-zinc-700 overflow-hidden shrink-0">
               {/* Place your 'Thank You' image or a portrait of you here */}
               <img src="https://picsum.photos/seed/sonja/400/400" alt="Sonja" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 italic">"I built this for us."</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                This sanctuary is a living, breathing project. Every pixel was placed with the intent to create a space that feels like home for those of us who live between the lines. Thank you for being a part of the Dollhouse.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Signed,</span>
                <span className="text-white font-black uppercase tracking-tighter">Sonja Kelley</span>
              </div>
            </div>
          </div>
          
          {/* Subtle background text to pull the composition together */}
          <div className="absolute top-0 right-0 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none uppercase italic -mr-10">
            ARCHITECT
          </div>
        </section>
      </div>
    </Layout>
  );
}
