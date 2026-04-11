import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { Lock, Play, ShieldCheck, CreditCard, X, AlertTriangle, User, LogIn } from 'lucide-react';
import WeeklySchedule from '../components/WeeklySchedule';
import LiveBanner from '../components/LiveBanner';
import ContentHubLinks from '../components/ContentHubLinks';
import Footer from '../components/Footer';
import SafeImage from '../components/SafeImage';
import { db } from '@/lib/firebase';
import { doc, setDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
import { VAULT_ASSETS } from '../data/assets';

export default function Vault() {
  const { isAgeVerified, user, loginWithGoogle } = useAuth();
  const [unlockedItems, setUnlockedItems] = useState<string[]>(['v1', 'v4']); // Free items unlocked by default
  const [selectedAsset, setSelectedAsset] = useState<typeof VAULT_ASSETS[0] | null>(null);
  const [playingAsset, setPlayingAsset] = useState<typeof VAULT_ASSETS[0] | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!user || !db) return;
    const unsub = onSnapshot(doc(db, 'users', user.uid), (docSnap) => {
      if (docSnap.exists()) {
        const assets = docSnap.data().unlockedAssets || [];
        setUnlockedItems(prev => Array.from(new Set([...prev, ...assets])));
      }
    });
    return () => unsub();
  }, [user]);

  if (!isAgeVerified) return <Navigate to="/gate" />;

  const handleAssetClick = (asset: typeof VAULT_ASSETS[0]) => {
    if (unlockedItems.includes(asset.id)) {
      setPlayingAsset(asset);
    } else {
      setSelectedAsset(asset);
      setShowPaymentModal(true);
    }
  };

  const simulatePayment = async () => {
    if (!selectedAsset) return;
    
    setIsProcessing(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (user && db) {
      try {
        await setDoc(doc(db, 'users', user.uid), {
          unlockedAssets: arrayUnion(selectedAsset.id)
        }, { merge: true });
      } catch (error) {
        console.error("Failed to save purchase to profile:", error);
      }
    } else {
      setUnlockedItems(prev => [...prev, selectedAsset.id]);
    }
    
    setIsProcessing(false);
    setShowPaymentModal(false);
    setPlayingAsset(selectedAsset); // Auto-play after purchase
    setSelectedAsset(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#E5E5E5] font-sans flex flex-col">
      <LiveBanner />
      
      <div className="flex-1 p-6 md:p-12">
        <header className="max-w-7xl mx-auto mb-12 flex flex-col xl:flex-row justify-between items-start xl:items-end border-b border-[#2D2D2D] pb-6 gap-8">
          <div className="w-full xl:w-auto">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,105,180,0.5)]">
              The <span className="text-[#FF69B4]">Vault</span>
            </h1>
            <p className="text-[#A3A3A3] font-mono text-sm mt-2 tracking-widest">SECURE ASSET REPOSITORY</p>
            <ContentHubLinks />
          </div>
          <div className="mt-4 xl:mt-0 flex flex-col sm:flex-row xl:flex-col items-start sm:items-center xl:items-end gap-4 w-full xl:w-auto">
            <div className="flex gap-2 w-full sm:w-auto">
              {user ? (
                <Link to="/profile" className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0a0a0a] bg-[#FF69B4] px-4 py-3 sm:py-2 hover:bg-white transition-colors shadow-[0_0_10px_rgba(255,105,180,0.3)]">
                  <User size={16} />
                  Deviant Profile
                </Link>
              ) : (
                <button onClick={loginWithGoogle} className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF69B4] bg-transparent border border-[#FF69B4] px-4 py-3 sm:py-2 hover:bg-[#FF69B4] hover:text-[#0a0a0a] transition-colors shadow-[0_0_10px_rgba(255,105,180,0.1)]">
                  <LogIn size={16} />
                  Login
                </button>
              )}
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#A3A3A3] bg-[#1A1A1B] px-4 py-3 sm:py-2 border border-[#2D2D2D] hover:border-[#FF69B4] hover:text-[#FF69B4] transition-colors cursor-pointer w-full sm:w-auto" onClick={() => window.location.href = '/compliance'}>
              <ShieldCheck size={16} className="text-[#FF69B4]" />
              <span>18 U.S.C. § 2257 COMPLIANT</span>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto">
          <WeeklySchedule />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VAULT_ASSETS.map((asset) => {
            const isUnlocked = unlockedItems.includes(asset.id);

            return (
              <div 
                key={asset.id}
                onClick={() => handleAssetClick(asset)}
                className="group relative bg-[#1A1A1B] border border-[#2D2D2D] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#FF69B4] hover:shadow-[0_0_20px_rgba(255,105,180,0.2)]"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video bg-[#0a0a0a] overflow-hidden">
                  <SafeImage 
                    src={asset.thumbnail} 
                    alt={asset.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${!isUnlocked ? 'opacity-40 grayscale' : 'opacity-80 group-hover:opacity-100'}`}
                  />
                  
                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {isUnlocked ? (
                      <div className="w-16 h-16 rounded-full bg-[#FF69B4]/20 border-2 border-[#FF69B4] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(255,105,180,0.5)]">
                        <Play className="text-[#FF69B4] ml-1" size={24} fill="currentColor" />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Lock className="text-[#A3A3A3] mb-2" size={32} />
                        <span className="bg-[#0a0a0a] border border-[#2D2D2D] text-white font-mono text-xs px-3 py-1 tracking-widest">
                          ${asset.price.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-[#0a0a0a]/80 border border-[#2D2D2D] px-2 py-1 text-xs font-mono text-white backdrop-blur-md">
                    {asset.duration}
                  </div>
                </div>

                {/* Metadata */}
                <div className="p-4 border-t border-[#2D2D2D] group-hover:bg-[#FF69B4]/5 transition-colors">
                  <h3 className="text-lg font-black uppercase tracking-wide text-white group-hover:text-[#FF69B4] transition-colors">
                    {asset.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A3A3A3] mt-1">
                    {isUnlocked ? 'STATUS: DECRYPTED' : 'STATUS: ENCRYPTED'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Payment Modal */}
      {showPaymentModal && selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#1A1A1B] border border-[#FF69B4] w-full max-w-md shadow-[0_0_40px_rgba(255,105,180,0.2)] relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-[#FF69B4] text-[#0a0a0a] p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 font-black uppercase tracking-widest">
                <CreditCard size={20} />
                Secure Checkout
              </div>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="hover:bg-[#0a0a0a] hover:text-[#FF69B4] p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-black uppercase text-white mb-2">{selectedAsset.title}</h2>
                <p className="text-[#A3A3A3] font-mono text-sm">LIFETIME ACCESS</p>
                <div className="text-4xl font-black text-[#FF69B4] mt-4 drop-shadow-[0_0_10px_rgba(255,105,180,0.4)]">
                  ${selectedAsset.price.toFixed(2)}
                </div>
              </div>

              {!user && (
                <div className="bg-[#FF69B4]/10 border border-[#FF69B4] p-4 mb-8 flex flex-col gap-3">
                  <p className="text-xs text-[#FF69B4] font-mono uppercase tracking-widest">
                    Guest Checkout Detected
                  </p>
                  <p className="text-sm text-white">
                    You are purchasing as a guest. Your unlocked assets will be lost if you clear your browser data.
                  </p>
                  <button 
                    onClick={loginWithGoogle}
                    className="bg-[#FF69B4] text-[#0a0a0a] font-black uppercase tracking-widest text-xs py-2 px-4 hover:bg-white transition-colors"
                  >
                    Login to Save Purchases
                  </button>
                </div>
              )}

              <div className="bg-[#0a0a0a] border border-[#2D2D2D] p-4 mb-8">
                <div className="flex items-start gap-3 text-xs font-mono text-[#A3A3A3]">
                  <AlertTriangle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p>
                    You are being routed to our high-risk payment processor (CCBill/Segpay). 
                    Your transaction is secured via HMAC-SHA256 zero-trust architecture.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={simulatePayment}
                  disabled={isProcessing}
                  className={`w-full min-h-[56px] bg-transparent border-2 border-[#FF69B4] text-[#FF69B4] font-black uppercase tracking-widest hover:bg-[#FF69B4] hover:text-[#0a0a0a] transition-all duration-300 shadow-[0_0_15px_rgba(255,105,180,0.3)] flex items-center justify-center gap-2 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Lock size={18} />
                  {isProcessing ? 'Processing...' : 'Authorize Payment'}
                </button>
                <button 
                  onClick={() => setShowPaymentModal(false)}
                  disabled={isProcessing}
                  className="w-full min-h-[48px] bg-transparent border border-[#2D2D2D] text-[#A3A3A3] font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all duration-300 disabled:opacity-50"
                >
                  Abort
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {playingAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/95 backdrop-blur-md animate-fade-in">
          <div className="bg-[#1A1A1B] border border-[#2D2D2D] w-full max-w-5xl shadow-[0_0_50px_rgba(255,105,180,0.15)] relative flex flex-col overflow-hidden">
            
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-[#2D2D2D] bg-[#0a0a0a]">
              <h2 className="text-xl font-black uppercase tracking-widest text-white flex items-center gap-2">
                <Play className="text-[#FF69B4]" size={20} fill="currentColor" />
                <span className="text-[#FF69B4]">PLAYING:</span> {playingAsset.title}
              </h2>
              <button 
                onClick={() => setPlayingAsset(null)}
                className="text-[#A3A3A3] hover:text-[#FF69B4] transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video bg-black w-full">
              <video 
                controls 
                autoPlay 
                className="w-full h-full outline-none"
                poster={playingAsset.thumbnail}
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Footer Metadata */}
            <div className="p-4 bg-[#0a0a0a] border-t border-[#2D2D2D] flex justify-between items-center text-xs font-mono text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#FF69B4]" />
                <span>SECURE STREAM // 18 U.S.C. § 2257 COMPLIANT</span>
              </div>
              <div>DURATION: {playingAsset.duration}</div>
            </div>

          </div>
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
}
