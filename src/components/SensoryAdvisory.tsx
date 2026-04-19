import React, { useState, useEffect } from 'react';
import { Brain, X, Heart } from 'lucide-react';
import { useAccess } from '../context/AccessibilityContext';

export default function SensoryAdvisory() {
  const [show, setShow] = useState(false);
  const { isSimplifiedMode, toggleSimplifiedMode } = useAccess();

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('dd_sensory_ack');
    if (!hasSeen) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-32 right-8 z-[2000] animate-in fade-in slide-in-from-right-8 duration-700 max-w-sm w-full">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent pointer-events-none" />
        
        {/* Dismiss Button */}
        <button 
          onClick={() => { setShow(false); sessionStorage.setItem('dd_sensory_ack', 'true'); }}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-4 relative z-10">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-950 border border-pink-500/30 flex items-center justify-center text-pink-500 shadow-lg shadow-pink-500/20">
            <Brain size={18} />
          </div>
          
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
              Sensory Support <Heart size={10} className="text-pink-500" />
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-4">
              We use rich visuals and dark themes. If you need a more grounded, simplified view for comfort, checking this option removes the density.
            </p>
            
            <button 
              onClick={() => {
                if (!isSimplifiedMode) toggleSimplifiedMode();
                setShow(false);
                sessionStorage.setItem('dd_sensory_ack', 'true');
              }}
              className="bg-pink-600 hover:bg-pink-500 text-white font-black uppercase tracking-widest text-[10px] px-4 py-2 rounded-xl transition-all"
            >
              Turn On Simplified View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
