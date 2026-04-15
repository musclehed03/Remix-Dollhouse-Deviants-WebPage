import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { useAccess } from '../context/AccessibilityContext';
import { PenTool, History, Save, Lock, Quote } from 'lucide-react';

export default function Echoes() {
  const { isAdmin } = useAuth();
  const { isLiteMode } = useAccess();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Initial mock data
  const [entries, setEntries] = useState([
    { id: 1, title: 'First Echo', date: '2026-04-10', content: 'Building the sanctuary today. It feels like breathing for the first time.' },
    { id: 2, title: 'The Static', date: '2026-04-12', content: 'Sometimes the brain is just static. Today, we turn the volume down.' }
  ]);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    const newEntry = {
      id: Date.now(),
      title,
      date: new Date().toISOString().split('T')[0],
      content
    };
    setEntries([newEntry, ...entries]);
    setTitle('');
    setContent('');
  };

  return (
    <Layout>
      <div className="max-w-4xl w-full mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-6xl font-black uppercase text-[#FF3131] drop-shadow-[0_0_15px_rgba(255,49,49,0.3)] tracking-tighter">
            The Echoes
          </h1>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.4em] mt-4 uppercase">
            A Safe Space for Reflection
          </p>
        </header>

        {/* POSTING INTERFACE - Only visible to Sonja */}
        {isAdmin ? (
          <div className={`mb-16 p-8 bg-zinc-900/40 border border-[#FF3131]/20 rounded-3xl transition-all ${!isLiteMode && 'hover:border-[#FF3131]/40 shadow-2xl shadow-red-900/10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <PenTool className="text-[#FF3131]" size={20} />
              <h2 className="text-white font-black uppercase tracking-widest text-sm">New Reflection</h2>
            </div>
            <form onSubmit={handlePost} className="space-y-4">
              <input 
                type="text" 
                placeholder="Entry Title..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-black/50 border border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-[#FF3131] transition-all"
              />
              <textarea 
                placeholder="What is echoing today?" 
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-black/50 border border-zinc-800 p-4 rounded-xl text-white outline-none focus:border-[#FF3131] transition-all resize-none"
              />
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-[#FF3131] text-white px-8 py-3 rounded-xl font-black uppercase tracking-tighter hover:bg-red-500 transition-all flex items-center gap-2"
                >
                  <Save size={18} />
                  Archive Reflection
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="mb-16 p-8 bg-zinc-900/20 border border-dashed border-zinc-800 rounded-3xl text-center">
            <Lock className="mx-auto mb-4 text-zinc-700" size={32} />
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              The Architect's private safe. Journaling mode restricted.
            </p>
          </div>
        )}

        {/* FEED */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-900 pb-4">
            <History className="text-zinc-500" size={18} />
            <h3 className="text-zinc-500 font-black uppercase tracking-[0.2em] text-xs">Past Echoes</h3>
          </div>
          
          {entries.map((entry) => (
            <article 
              key={entry.id} 
              className={`p-8 bg-zinc-900/20 border border-zinc-800 rounded-3xl transition-all ${!isLiteMode && 'hover:bg-zinc-900/40'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter">{entry.title}</h4>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{entry.date}</span>
              </div>
              <div className="relative">
                {!isLiteMode && <Quote className="absolute -top-2 -left-4 text-[#FF3131]/10 w-12 h-12" />}
                <p className="text-zinc-400 leading-relaxed italic relative z-10">
                  "{entry.content}"
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
