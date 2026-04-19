import React from 'react';
import Layout from '../components/Layout';
import { ShieldCheck, Zap, Crown, Check, Lock, Terminal } from 'lucide-react';

const tiers = [
  {
    name: "Deviant Member",
    price: "Free",
    tagline: "The Entry Protocol",
    description: "Basic access to the Sanctuary and the public social wire.",
    features: [
      "Access to The Circuit (Social Feed)",
      "View Public Galleries",
      "Standard Boutique Access",
      "Community Chat Permissions"
    ],
    buttonText: "Join the Collective",
    highlight: false
  },
  {
    name: "Architect Tier",
    price: "$20/mo",
    tagline: "The Inner Circle",
    description: "The highest clearance level. You don't just watch the Dollhouse; you help build it.",
    features: [
      "Full Vault Access (18+ Content)",
      "Exclusive Architect-Only Logs",
      "Early Access to Boutique Drops",
      "The Neon 'Architect' Profile Badge",
      "1-on-1 Sanctuary Support Chat",
      "Ad-Free Stealth Browsing"
    ],
    buttonText: "Claim Clearance",
    highlight: true
  }
];

export default function Support() {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-zinc-400 font-sans selection:bg-pink-500/30">
        
        {/* --- HERO SECTION --- */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-pink-600/10 rounded-2xl border border-pink-500/20">
              <ShieldCheck className="text-pink-500" size={40} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic mb-6">
            Support the <span className="text-pink-500">Sanctuary</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 leading-relaxed text-lg italic">
            "Every brick in this house is built by the community. Your support ensures the Dollhouse remains a safe, 
            unconventional haven for creators and deviants alike."
          </p>
        </section>

        {/* --- TIER GRID --- */}
        <section className="max-w-5xl mx-auto px-6 pb-32">
          <div className="grid md:grid-cols-2 gap-8">
            {tiers.map((tier) => (
              <div 
                key={tier.name}
                className={`relative p-10 rounded-[3rem] border transition-all duration-500 group ${
                  tier.highlight 
                    ? 'bg-zinc-900/40 border-pink-500/50 shadow-[0_0_40px_rgba(219,39,119,0.1)]' 
                    : 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-[0.2em] shadow-lg">
                    Recommended Clearance
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">{tier.name}</h3>
                  <p className="text-pink-500 font-mono text-[10px] uppercase tracking-widest mt-1">{tier.tagline}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                  <span className="text-zinc-600 text-xs ml-2 uppercase">/ Access</span>
                </div>

                <p className="text-sm text-zinc-400 mb-10 leading-relaxed">
                  {tier.description}
                </p>

                <ul className="space-y-4 mb-12">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-xs uppercase tracking-tight font-medium group-hover:text-zinc-200 transition-colors">
                      <Check size={14} className="text-pink-500 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-pink-600 hover:bg-white hover:text-black text-white shadow-[0_0_20px_rgba(219,39,119,0.3)]'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                }`}>
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* --- MISSION FOOTER --- */}
          <div className="mt-24 text-center border-t border-zinc-900 pt-16">
            <div className="flex items-center justify-center gap-4 text-zinc-700 mb-8">
              <Terminal size={16} />
              <span className="text-[10px] uppercase tracking-[0.5em]">System.Autonomy_Protocol // Enabled</span>
            </div>
            <p className="text-zinc-600 text-xs max-w-xl mx-auto leading-relaxed">
              Subscription funds are allocated directly to platform hosting, trans-rights advocacy through 
              <strong> The Trevor Project</strong>, and the production of exclusive sanctuary content. 
              All transactions are processed through high-risk secure gateways.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
