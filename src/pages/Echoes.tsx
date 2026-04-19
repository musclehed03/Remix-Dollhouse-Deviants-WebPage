import React from 'react';
import Layout from '../components/Layout';
import { Book, Lock, Terminal } from 'lucide-react';

const journalEntries = [
  {
    id: "echo-003",
    date: "2026.04.18",
    title: "Encryption as Empathy",
    preview: "In the Sanctuary, privacy isn't just a setting; it's the foundation of safety. To be 'deviant' is to exist outside the lines. To protect that existence, we must be invisible to those who would judge or harm.",
    content: "Full entry available for Architect Clearance.",
    status: "Encrypted"
  },
  {
    id: "echo-002",
    date: "2026.04.10",
    title: "The Architecture of Transition",
    preview: "Walls are easier to build than doors. Transitioning wasn't just about the physical; it was about the structural redesign of my entire reality. This site is the digital manifestation of that new structure.",
    content: "Full entry available for Architect Clearance.",
    status: "Encrypted"
  },
  {
    id: "echo-001",
    date: "2026.03.28",
    title: "Initial Site Survey: Waverly",
    preview: "Setting up the servers in the Iowa cold. There is a specific kind of silence here—a quiet that allows for the deep focus required to build something this heavy. The Sanctuary begins here.",
    content: "Entry Decrypted.",
    status: "Decrypted"
  }
];

export default function Echoes() {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-zinc-400 font-mono selection:bg-pink-500/30">
        <div className="max-w-3xl mx-auto px-6 py-32">
          
          <header className="mb-24 border-b border-zinc-900 pb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full border border-pink-500/50 flex items-center justify-center text-pink-500 shadow-[0_0_15px_rgba(219,39,119,0.2)]">
                <Book size={18} />
              </div>
              <h1 className="text-3xl font-black text-white uppercase tracking-[0.2em] italic">The Echoes</h1>
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
              Personal Logs // Architect Clearance Required
            </p>
          </header>

          <div className="space-y-24">
            {journalEntries.map((entry) => (
              <article key={entry.id} className="group relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-pink-600 text-[10px] font-bold tracking-widest">{entry.date}</span>
                  <div className="h-px flex-grow bg-zinc-900 group-hover:bg-pink-900 transition-colors"></div>
                  <span className={`text-[9px] uppercase tracking-widest ${entry.status === 'Decrypted' ? 'text-zinc-400' : 'text-zinc-700'}`}>
                    {entry.status}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-zinc-200 group-hover:text-white transition-colors mb-6 italic uppercase tracking-tight">
                  {entry.title}
                </h2>
                
                <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors mb-8">
                  {entry.preview}
                </p>

                <button className="flex items-center gap-2 text-pink-500 text-[10px] font-black uppercase tracking-[0.2em] transition-all group-hover:gap-4">
                  <Lock size={12} />
                  {entry.status === 'Encrypted' ? 'Bypass Encryption' : 'Read Full Log'}
                </button>
              </article>
            ))}
          </div>

          <footer className="mt-40 pt-12 border-t border-zinc-900 flex justify-between items-center text-[9px] uppercase tracking-[0.5em] text-zinc-800">
            <span>Transmission End</span>
            <span>Waverly Archive // ID: {journalEntries[0].id}</span>
          </footer>
        </div>
      </div>
    </Layout>
  );
}
