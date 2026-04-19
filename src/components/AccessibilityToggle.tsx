import React from 'react';
import { Eye, ZapOff } from 'lucide-react';
import { useAccess } from '../context/AccessibilityContext';

export const AccessibilityToggle = () => {
  const { isSimplifiedMode, toggleSimplifiedMode } = useAccess();

  return (
    <button
      onClick={() => toggleSimplifiedMode()}
      className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-500 group ${
        isSimplifiedMode 
          ? 'bg-pink-600 border-pink-500 text-white shadow-[0_0_15px_rgba(219,39,119,0.4)]' 
          : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700'
      }`}
    >
      {isSimplifiedMode ? <ZapOff size={14} /> : <Eye size={14} className="group-hover:text-zinc-400" />}
      <span className="text-[10px] uppercase font-black tracking-widest">
        {isSimplifiedMode ? 'Simplified View: ON' : 'Simplified View: OFF'}
      </span>
    </button>
  );
};
