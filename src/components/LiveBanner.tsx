import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { Radio, AlertTriangle } from 'lucide-react';

export default function LiveBanner() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (!db) return;
    const unsub = onSnapshot(doc(db, 'config', 'liveStatus'), (docSnap) => {
      if (docSnap.exists()) {
        setIsLive(docSnap.data().isLive || false);
      }
    });
    return () => unsub();
  }, []);

  if (!isLive) return null;

  return (
    <div className="bg-[#FF69B4] text-[#0a0a0a] px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-black uppercase tracking-widest shadow-[0_0_20px_rgba(255,105,180,0.4)] relative z-50 overflow-hidden">
      {/* Animated background stripes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
      
      <div className="flex items-center gap-3 relative z-10">
        <Radio size={24} className="animate-pulse" />
        <span className="text-sm sm:text-base">Broadcast Override: Live Now</span>
      </div>
      
      <a 
        href="https://chaturbate.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative z-10 bg-[#0a0a0a] text-[#FF69B4] px-6 py-2 text-xs sm:text-sm hover:bg-white hover:text-[#0a0a0a] transition-colors border border-[#0a0a0a] hover:border-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center gap-2"
      >
        <AlertTriangle size={14} />
        Join Stream
      </a>
    </div>
  );
}
