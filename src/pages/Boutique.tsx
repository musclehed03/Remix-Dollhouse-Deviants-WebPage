import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Gem } from 'lucide-react';
import PayPalButton from '../components/PayPalButton';
import Footer from '../components/Footer';
import SafeImage from '../components/SafeImage';

const BOUTIQUE_ITEMS = [
  { id: 1, name: 'Obsidian Choker', price: '$120', image: 'https://images.unsplash.com/photo-1599643478514-4a420804ce68?auto=format&fit=crop&q=80' },
  { id: 2, name: 'Silver Chain Link', price: '$85', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80' },
  { id: 3, name: 'Rose Gold Pendant', price: '$150', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80' },
  { id: 4, name: 'Diamond Studs', price: '$295', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80' },
  { id: 5, name: 'Pearl Drop Earrings', price: '$110', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80' },
  { id: 6, name: 'Gold Cuff Bracelet', price: '$175', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80' },
];

export default function Boutique() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A3A3A3] hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Hub
          </Link>
          <h1 className="text-2xl font-black uppercase tracking-widest flex items-center gap-2">
            The <span className="text-[#39FF14]">Boutique</span> <Gem size={20} className="text-[#39FF14]" />
          </h1>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#39FF14] hover:text-white transition-colors">
            <ShoppingBag size={16} />
            Cart (0)
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Exclusive Jewelry Collection</h2>
          <p className="text-[#A3A3A3] max-w-2xl mx-auto">
            Handcrafted pieces designed for the bold and the beautiful. 
            Elevate your aesthetic with our curated selection of high-end accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {BOUTIQUE_ITEMS.map((item) => (
            <div key={item.id} className="group flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-[#1A1A1B] border border-[#2D2D2D] mb-4">
                <SafeImage 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{item.name}</h3>
                  <p className="text-[#A3A3A3] text-xs font-mono">In Stock</p>
                </div>
                <span className="text-[#39FF14] font-mono">{item.price}</span>
              </div>
              <div className="mt-auto">
                <PayPalButton price={item.price} itemName={item.name} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
