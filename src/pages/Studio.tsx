import React from 'react';
import Layout from '../components/Layout';
import { useAccess } from '../context/AccessibilityContext';
import { Activity, Database, Terminal, ShieldCheck, Cpu } from 'lucide-react';

export default function Studio() {
  const { isLiteMode } = useAccess();

  const logs = [
    { date: '2026-04-14', event: 'Hub & Boutique wired to production.' },
    { date: '2026-04-14', event: 'SSL Certificate officially INSTALLED.' },
    { date: '2026-04-12', event: 'Lite Mode logic integrated into footer.' },
  ];

  return (
    <Layout>
      <div className="max-w-5xl w-full">
        <header className="mb-12">
          <h1 className="text-6xl font-black uppercase text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] tracking-tighter">
            The Studio
          </h1>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.4em] mt-2 text-left">SYSTEM DIAGNOSTICS • DEV CONTROL</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Health Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-cyan-400" size={20} />
              <h3 className="text-white font-black uppercase text-sm tracking-widest">Sanctuary Health</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">Firebase Hosting:</span>
                <span className="text-green-500 font-mono">ONLINE</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">SSL Encryption:</span>
                <span className="text-green-500 font-mono">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Traffic Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-cyan-400" size={20} />
              <h3 className="text-white font-black uppercase text-sm tracking-widest">Traffic Pulse</h3>
            </div>
            <p className="text-2xl font-black text-white">124 <span className="text-[10px] text-zinc-500 uppercase tracking-normal">Unique Deviants (24h)</span></p>
          </div>

          {/* System Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-cyan-400" size={20} />
              <h3 className="text-white font-black uppercase text-sm tracking-widest">Core Status</h3>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Environment Variables: <span className="text-cyan-400">LOADED</span><br />
              Node Version: <span className="text-zinc-300">v20.11.1</span>
            </p>
          </div>
        </div>

        {/* System Log */}
        <div className="bg-black border border-zinc-800 rounded-3xl overflow-hidden">
          <div className="bg-zinc-900/50 p-4 border-b border-zinc-800 flex items-center gap-2">
            <Terminal size={14} className="text-cyan-400" />
            <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Build History Log</span>
          </div>
          <div className="p-6 font-mono text-xs space-y-4">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-cyan-900">[{log.date}]</span>
                <span className="text-zinc-400">{log.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
