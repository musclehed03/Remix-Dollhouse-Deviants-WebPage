import React from 'react';

interface NameplateProps {
  name: string;
  role?: string;
  className?: string;
}

// Function to remove common role suffixes from an author's name
const sanitizeName = (name: string) => {
  // Finds and removes suffixes like "(Founder)", "(Architect)", case-insensitive
  return name.replace(/\s*\(\s*(Founder|Architect|Admin)\s*\)\s*$/i, '').trim();
};

export const Nameplate = ({ name, role, className = "" }: NameplateProps) => {
  const baseName = sanitizeName(name);
  const isArchitect = role === 'architect' || name.toLowerCase().includes('architect');

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-black uppercase tracking-tighter italic text-white">
        {baseName}
      </span>
      {isArchitect && (
        <span className="text-pink-500 font-black uppercase italic text-[10px] tracking-widest px-2 py-0.5 border border-pink-500/30 rounded-md bg-pink-500/5 shadow-[0_0_10px_rgba(219,39,119,0.2)]">
          (Founder)
        </span>
      )}
    </div>
  );
};
