import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAccess } from '../context/AccessibilityContext';
import { Eye, Lock, ShieldCheck } from 'lucide-react';

export default function Vault() {
  const navigate = useNavigate();
  const { isLiteMode } = useAccess();

  useEffect(() => {
    const isVerified = sessionStorage.getItem('vault_verified');
    if (!isVerified) {
      navigate('/vault-gate');
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="max-w-6xl w-full">
        <header className="mb-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-magenta-500 mb-4">
            <ShieldCheck size={20} />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Verified Access Active</span>
          </div>
          <h1 className="text-7xl font-black uppercase text-white drop-shadow-[0_0_20px_rgba(255,0,255,0.4)] tracking-tighter">
            The Vault
          </h1>
        </header>

        {/* This is the 18+ Content Grid (Empty for now until you upload files) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[3/4] bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col items-center justify-center p-10 text-center group cursor-pointer hover:border-magenta-500/30 transition-all">
              <Lock className="text-zinc-800 group-hover:text-magenta-900 transition-colors mb-4" size={48} />
              <p className="text-zinc-700 font-mono text-[10px] uppercase tracking-widest">Content Restricted</p>
              <button className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity bg-magenta-500/10 text-magenta-500 px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter border border-magenta-500/20">
                Unlock View
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
