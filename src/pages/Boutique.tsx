import React from 'react';
import Layout from '../components/Layout';
import { ShoppingBag, Mail, Zap, Monitor, Sliders } from 'lucide-react';

const boutiqueItems = [
  { 
    id: "bp-01", 
    name: "Architect Noir Preset", 
    price: "15.00", 
    icon: <Sliders size={24} />,
    category: "Editing", 
    desc: "The signature low-light, high-contrast look used across the Dollhouse Deviants visuals. Perfect for industrial or noir-style portraits." 
  },
  { 
    id: "bp-02", 
    name: "Sanctuary Stream Kit", 
    price: "35.00", 
    icon: <Monitor size={24} />,
    category: "Assets", 
    desc: "Complete OBS/Stream package including neon borders, 'Stealth Mode' overlays, and custom transitional graphics." 
  },
  { 
    id: "bp-03", 
    name: "Waverly Audio Archive", 
    price: "20.00", 
    icon: <Zap size={24} />,
    category: "Sound", 
    desc: "A collection of 10 ambient, industrial lo-fi tracks specifically composed for background use in private galleries." 
  }
];

export default function Boutique() {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-zinc-400 font-sans">
        <div className="max-w-7xl mx-auto px-6 py-32">
          
          <header className="mb-24 border-l-4 border-pink-600 pl-8">
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter italic mb-4">
              The <span className="text-pink-500">Boutique</span>
            </h1>
            <p className="text-zinc-500 max-w-xl italic text-lg leading-relaxed">
              Professional tools for unconventional creators. Procure the digital assets used to engineer the Sanctuary.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-12">
            {boutiqueItems.map((item) => (
              <div key={item.id} className="bg-zinc-900/20 border border-zinc-800 rounded-[3rem] p-12 flex flex-col hover:border-pink-500/50 transition-all duration-700 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-zinc-800 group-hover:text-pink-600/20 transition-colors">
                  <ShoppingBag size={80} strokeWidth={1} />
                </div>

                <div className="mb-8 w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-pink-500 shadow-xl group-hover:shadow-pink-500/10 transition-all">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-4">{item.name}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-10">{item.desc}</p>
                
                <div className="mt-auto pt-8 border-t border-zinc-800 flex items-center justify-between">
                  <div className="text-3xl font-black text-white italic tracking-tighter">${item.price}</div>
                  <a 
                    href={`mailto:sonja-on-fire@dollhousedeviants.com?subject=Boutique Procurement Request: ${item.name}`}
                    className="bg-pink-600 hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-lg shadow-pink-900/20"
                  >
                    Procure Asset
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
