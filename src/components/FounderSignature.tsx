import React from 'react';

export const FounderSignature = () => {
  return (
    <div className="mt-12 opacity-80 hover:opacity-100 transition-opacity duration-700 select-none pointer-events-none">
      <svg
        width="240"
        height="80"
        viewBox="0 0 240 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_12px_rgba(219,39,119,0.6)]"
      >
        {/* Stylized 'S' and cursive flow for Sonja Kelley*/}
        <path
          d="M30 55C30 55 10 45 10 30C10 15 30 5 50 5C70 5 90 20 90 35C90 50 70 65 50 65C30 65 20 55 20 55L60 35M60 35C60 35 80 30 100 35C120 40 140 55 160 50M165 35L175 60M185 35L195 60M210 45C210 45 220 40 230 45C240 50 240 60 230 60C220 60 210 50 210 50"
          stroke="#DB2777"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-signature-draw"
        />
        <style>{`
          .animate-signature-draw {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
            animation: signature-draw 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          @keyframes signature-draw {
            to { stroke-dashoffset: 0; }
          }
        `}</style>
      </svg>
      <div className="text-[9px] uppercase tracking-[0.6em] text-pink-500/40 mt-3 font-mono italic">
        Digital Authentication // The Architect
      </div>
    </div>
  );
};
