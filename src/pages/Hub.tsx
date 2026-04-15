import React from 'react';
import Layout from '../components/Layout';
import { useAccess } from '../context/AccessibilityContext';
import { Terminal, ShoppingBag, Radio, Sparkles, BookOpen, Lock } from 'lucide-react';

const branches = [
  { name: 'The Studio', icon: Terminal, color: 'text-cyan-400', glow: 'shadow-cyan-500/20', path: '/studio', desc: 'Dev tools & site logs' },
  { name: 'The Boutique', icon: ShoppingBag, color: 'text-green-400', glow: 'shadow-green-500/20', path: '/boutique', desc: 'Digital goods & presets' },
  { name: 'The Circuit', icon: Radio, color: 'text-[#FF5F1F]', glow: 'shadow-orange-500/20', path: '/circuit', desc: 'Community & social wire' },
  { name: 'The Creations', icon: Sparkles, color: 'text-purple-400', glow: 'shadow-purple-500/20', path: '/creations', desc: 'Content & portfolio' },
  { name: 'The Echoes', icon: BookOpen, color: 'text-[#FF3131]', glow: 'shadow-red-500/20', path: '/echoes', desc: 'Personal safe journal' },
  { name: 'The Vault', icon: Lock, color: 'text-magenta-500', glow: 'shadow-magenta-500/20', path: '/vault', desc: 'Secure 18+ content' },
];

export default function Hub() {
  const { isLiteMode } = useAccess();

  return (
    <Layout>
      <div className="max-w-5xl w-full">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-black tracking-tighter uppercase text-white mb-4">The Hub</h1>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.4em]">SELECT YOUR BRANCH</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <a 
              key={branch.name}
              href={branch.path}
              className={`group relative p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl transition-all duration-500 hover:scale-105 active:scale-95 ${
                !isLiteMode && `hover:border-white/20 hover:bg-zinc-900/50 hover:shadow-2xl ${branch.glow}`
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <branch.icon size={48} className={`${branch.color} mb-6 transition-transform duration-500 group-hover:rotate-6`} />
                <h3 className="text-2xl font-black uppercase text-white tracking-tighter mb-2">
                  {branch.name}
                </h3>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                  {branch.desc}
                </p>
              </div>

              {/* Decorative corner accent - Hidden in Lite Mode */}
              {!isLiteMode && (
                <div className={`absolute top-4 right-4 w-1 h-1 rounded-full ${branch.color.replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity`} />
              )}
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
