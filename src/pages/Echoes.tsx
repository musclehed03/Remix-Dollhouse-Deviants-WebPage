import React, { useState } from 'react';
import Layout from '../components/Layout';
import { SafeImage } from '../components/SafeImage';
import { PenLine, History } from 'lucide-react';

const Echoes = () => {
  return (
    <Layout>
      <div className="max-w-4xl w-full">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-black tracking-tighter uppercase glow-scarlet mb-2 text-[#FF3131]">
            The Echoes
          </h1>
          <p className="text-zinc-500 font-mono tracking-widest uppercase text-xs">
            A Safe Space Journal for Neurodivergence & Identity
          </p>
        </header>

        {/* New Entry Form - Accessibility First */}
        <section className="mb-20 p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl" aria-labelledby="new-entry-title">
          <h2 id="new-entry-title" className="text-xl font-bold mb-6 flex items-center gap-2">
            <PenLine className="text-[#FF3131]" /> Start a New Echo
          </h2>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Entry Title..." 
              className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:border-[#FF3131] outline-none transition-all"
            />
            <textarea 
              placeholder="What's on your mind today?" 
              rows={4}
              className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:border-[#FF3131] outline-none transition-all"
            />
            
            {/* The Alt Text Requirement */}
            <div className="p-4 bg-zinc-800/30 rounded-xl border border-dashed border-zinc-700">
              <label className="text-xs font-mono text-zinc-500 uppercase mb-2 block">
                Image Upload & Accessibility
              </label>
              <input type="file" className="text-sm text-zinc-400 mb-3 block" />
              <input 
                type="text" 
                placeholder="Describe this image for those who cannot see it (Alt Text)..." 
                className="w-full bg-zinc-900 border border-zinc-700 p-2 rounded-lg text-sm text-zinc-300 italic"
                aria-label="Image alternative text"
              />
            </div>
            
            <button className="bg-[#FF3131] text-black font-black py-3 px-8 rounded-full hover:scale-105 active:scale-95 transition-all">
              POST ENTRY
            </button>
          </div>
        </section>

        {/* First Entry Example */}
        <article className="space-y-8">
          <div className="border-l-2 border-[#FF3131] pl-8 py-4">
            <time className="text-xs font-mono text-zinc-600">APRIL 10, 2026</time>
            <h3 className="text-3xl font-black uppercase text-white my-2">The Fire of Transition</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Today was a day where the "noise" of the world felt a bit too loud. Being neurodivergent in a linear world often feels like trying to run software on a system that wasn't built for it... but then I remember the sanctuary we're building here.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-zinc-800">
              <SafeImage 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
                alt="A soft, abstract glow of magenta and orange light representing inner peace."
                description="This image represents the calming energy I feel when I focus on my transition journey."
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Echoes;
