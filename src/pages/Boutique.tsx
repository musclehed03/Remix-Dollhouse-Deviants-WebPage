import React from 'react';
import Layout from '../components/Layout';
import { useAccess } from '../context/AccessibilityContext';
import { ShoppingCart, Download, ShieldCheck, Tag } from 'lucide-react';

const products = [
  { 
    id: 1, 
    name: 'Deviant Preset Pack V1', 
    price: '$25', 
    category: 'Digital Assets',
    desc: 'Signature neon & high-contrast Lightroom presets for unconventional creators.',
    tag: 'Best Seller'
  },
  { 
    id: 2, 
    name: 'The Media Kit Template', 
    price: '$15', 
    category: 'Creator Tools',
    desc: 'A professional, 5-page media kit designed specifically for trans & neurodivergent influencers.',
    tag: 'New'
  },
  { 
    id: 3, 
    name: 'Vault Access Pass (Monthly)', 
    price: '$10', 
    category: 'Sanctuary Access',
    desc: 'Unrestricted entry to the 18+ Vault and exclusive social tiers in The Circuit.',
    tag: 'Subscription'
  },
  { 
    id: 4, 
    name: 'Dollhouse Brand Assets', 
    price: '$40', 
    category: 'Digital Assets',
    desc: 'The official font pack and SFW logo variations for collaborator use.',
    tag: null
  }
];

export default function Boutique() {
  const { isLiteMode } = useAccess();

  return (
    <Layout>
      <div className="max-w-6xl w-full">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h1 className="text-6xl font-black uppercase text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.3)] tracking-tighter">
              The Boutique
            </h1>
            <p className="text-zinc-500 font-mono text-xs tracking-[0.4em] mt-2">SUPPORT THE SANCTUARY • DIGITAL GOODS</p>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
            <ShieldCheck size={16} className="text-green-400" />
            <span className="text-[10px] font-bold uppercase">Secure Digital Delivery</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`group bg-zinc-900/20 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 ${
                !isLiteMode && 'hover:border-green-400/30 hover:bg-zinc-900/40 hover:translate-y-[-4px]'
              }`}
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest">{product.category}</span>
                  {product.tag && (
                    <span className="bg-green-400/10 text-green-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                      {product.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-green-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>
                <div className="text-4xl font-black text-white tracking-tighter">
                  {product.price}
                </div>
              </div>

              <button className="w-full bg-zinc-900 border-t border-zinc-800 p-5 flex items-center justify-center gap-3 text-white font-black uppercase tracking-tighter hover:bg-green-500 hover:text-black transition-all">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <footer className="mt-20 p-10 bg-zinc-900/40 rounded-3xl border border-dashed border-zinc-800 text-center">
          <Tag className="mx-auto mb-4 text-zinc-700" size={32} />
          <h4 className="text-white font-black uppercase italic mb-2">Have a custom request?</h4>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">
            If you need custom brand assets or a specialized Sanctuary preset, reach out to the Studio directly.
          </p>
        </footer>
      </div>
    </Layout>
  );
}
