import React, { useState } from 'react';
import Layout from '../components/Layout';
import ComicBubble from '../components/ComicBubble';
import { Send, Image as ImageIcon, Smile, Cat, Heart } from 'lucide-react';

const Circuit = () => {
  const [altText, setAltText] = useState("");
  const [isNookVisible, setIsNookVisible] = useState(false);
  const [isAltTextEntered, setIsAltTextEntered] = useState(false);

  const handleAltTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAltText(val);
    setIsAltTextEntered(val.trim().length > 5);
  };

  return (
    <Layout>
      <div className="max-w-2xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black uppercase text-[#FF5F1F] drop-shadow-[0_0_15px_rgba(255,95,31,0.5)]">The Circuit</h1>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] mt-2">BE SOCIAL. CONNECT. SHARE.</p>
        </header>

        {/* Create Post Area */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 relative">
          <textarea 
            placeholder="What's the word, Deviant?"
            className="w-full bg-transparent border-none text-white placeholder-zinc-700 resize-none focus:ring-0 text-lg"
            rows={3}
          />
          
          {/* Alt Text Input - Triggers the Nook */}
          <div className="mt-4 p-4 bg-zinc-800/30 rounded-xl border border-dashed border-zinc-700">
            <input 
              type="text" 
              value={altText}
              onFocus={() => setIsNookVisible(true)}
              onChange={handleAltTextChange}
              placeholder="Add Image Alt Text (Required for accessibility)..." 
              className="w-full bg-transparent border-none p-0 text-sm text-zinc-300 italic focus:ring-0"
            />
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-4 text-zinc-500">
              <ImageIcon size={20} className="hover:text-[#FF5F1F] cursor-pointer" />
              <Smile size={20} className="hover:text-[#FF5F1F] cursor-pointer" />
            </div>
            <button className="bg-[#FF5F1F] text-black font-black px-8 py-2 rounded-full hover:scale-105 transition-all">
              PULSE
            </button>
          </div>

          {/* THE ACCESSIBILITY NOOK */}
          {isNookVisible && (
            <div className="absolute -right-4 top-0 translate-x-full hidden lg:flex flex-col items-center w-64 animate-in fade-in slide-in-from-left-4">
              <div className="relative mb-2">
                <Cat className={`w-16 h-16 ${isAltTextEntered ? 'text-magenta-500' : 'text-pink-500'} transition-colors duration-500`} />
                {isAltTextEntered && <Heart className="absolute -top-2 -right-2 w-6 h-6 text-magenta-500 animate-ping" />}
              </div>
              <ComicBubble 
                text={isAltTextEntered 
                  ? "Purrr-fect! Thank you for being deviantly inclusive." 
                  : "Friendly reminder about not leaving our amazing assistive technologies deviants out!"
                } 
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Circuit;
