import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { useAccess } from '../context/AccessibilityContext';
import { Radio, Image as ImageIcon, Send, ShieldCheck, EyeOff, Eye, AlertTriangle, Brain, Heart } from 'lucide-react';
import { Nameplate } from '../components/Nameplate';
import { FounderSignature } from '../components/FounderSignature';

export default function Circuit() {
  const { user } = useAuth();
  const { isSimplifiedMode } = useAccess();
  const [postContent, setPostContent] = useState('');
  const [altText, setAltText] = useState('');

  // The Feed with your new Developer Log
  const [posts, setPosts] = useState([
    {
      id: "arch-001",
      author: "The Architect",
      role: "architect",
      isStaff: true,
      timestamp: "Entry: 04.18.2026",
      content: `The heavy doors of the Dollhouse are finally open. \n\nThis sanctuary was built out of a necessity for autonomy. In a world that seeks to commodify, judge, or restrict the unconventional, we have created a digital black-site where the rules are written by us. \n\nWhether you are here for the art in the Gallery, the raw energy of the Boutique, or the guarded secrets within the Vault—know that you are in a space defined by absolute consent and unwavering security. \n\nWe don't just host content; we protect the creators and the community that makes this possible. Welcome to the new standard. \n\nStay deviant.`,
      tags: ["Manifesto", "SanctuaryProtocol", "ArchitectLog"],
      isPinned: true,
      image: null,
      alt: "",
      hasSignature: true
    },
    {
      id: "arch-002",
      author: "The Architect",
      role: "architect",
      isStaff: true,
      timestamp: "Entry: 04.18.2026",
      content: `The tools of the trade are now live in THE BOUTIQUE. \n\nI've uploaded the "Architect Noir" Preset—the exact high-contrast logic I used to grade the visuals for the first Sanctuary drops. You'll also find the Sanctuary Stream Kit and a selection of industrial audio archives for your own private spaces.\n\nThis isn't just a shop; it's a resource sharing protocol. If you're building your own corner of the unconventional, these are the blueprints.\n\nProcure what you need. Stay deviant.\n— Sonja`,
      tags: ["BoutiqueAccess", "AssetDeployment", "ArchitectResources"],
      isPinned: false,
      image: null,
      alt: ""
    },
    { 
      id: 3, 
      author: "Sonja (Founder)", 
      role: "architect",
      isStaff: true,
      content: "Architect Log // Update 01: The sanctuary just got a little clearer. We've officially transitioned 'Lite Mode' to 'Simplified View' to better support our screen-reader family. I've also wired in a Sensory Advisory for The Circuit—safety first, always. 🏳️⚧️✨", 
      image: null, 
      alt: "", 
      timestamp: "Just now" 
    },
    { 
      id: 1, 
      author: "Sonja (Founder)", 
      role: "architect",
      isStaff: true,
      content: "Welcome to the first transmission on The Circuit. This is our space.", 
      image: "https://picsum.photos/seed/circuit/800/600?blur=2", 
      alt: "A vibrant neon sign that says 'Open' in a dark alley.", 
      timestamp: "2h ago" 
    },
    { 
      id: 2, 
      author: "Deviant_01", 
      role: "member",
      isStaff: false,
      content: "Feeling safe here. Thank you for building this, Founder.", 
      image: null, 
      alt: "", 
      timestamp: "5h ago" 
    }
  ]);

  const handleTransmit = async () => {
    if (!postContent.trim()) return;

    // TODO: Wire up to Firebase collection('posts') once db is connected
    const newPost = {
      id: Date.now().toString(),
      content: postContent,
      author: user?.displayName || user?.email?.split('@')[0] || "Sonja",
      // @ts-ignore
      role: user?.role || "architect", // mock preserving role
      uid: user?.uid || "mock-uid",
      timestamp: "Just now",
      tags: [], 
      isStaff: true,
      image: null,
      alt: ""
    };
    
    setPosts([newPost, ...posts]);
    setPostContent('');
  };

  return (
    <Layout>
      <div className="max-w-4xl w-full mx-auto pb-20 pt-10 px-4">
        
        {/* Sensory Advisory */}
        {!isSimplifiedMode && (
          <div className="mb-12 p-6 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center gap-6 animate-in fade-in slide-in-from-top-4 duration-700 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent pointer-events-none" />
            <div className="w-12 h-12 rounded-full bg-zinc-950 border border-pink-500/30 flex items-center justify-center text-pink-500 shadow-lg shadow-pink-500/20 relative z-10 flex-shrink-0">
              <Brain size={20} />
            </div>
            <div className="relative z-10">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1 flex items-center gap-2">
                Sensory Support <Heart size={10} className="text-pink-500" />
              </h4>
              <p className="text-zinc-400 text-sm">
                This feed contains raw media. You can enable <span className="text-pink-400 font-bold">Simplified View</span> in the corner to clear visual density.
              </p>
            </div>
          </div>
        )}

        <header className="mb-12 flex items-center gap-4">
          <Radio className="text-[#FF5F1F]" size={32} />
          <h1 className="text-5xl font-black uppercase text-white tracking-tighter">The Circuit</h1>
        </header>

        {/* --- ADMIN QUICK LINKS --- */}
        {user?.email === "musclehed03@gmail.com" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
            <h3 className="text-pink-500 text-[10px] uppercase tracking-widest font-black mb-4">
              System Administration
            </h3>
            <div className="flex flex-wrap gap-4">
              {/* NEW COMPLIANCE QUICK LINK */}
              <a 
                href="/compliance" 
                className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3 rounded-xl transition-all border border-zinc-700 group"
              >
                <div className="p-2 bg-pink-600/10 rounded-lg group-hover:bg-pink-600/20">
                  <ShieldCheck size={18} className="text-pink-500" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-tight">Legal Audit</p>
                  <p className="text-[9px] text-zinc-500">View 2257 & Safety Records</p>
                </div>
              </a>

              {/* OTHER ADMIN ACTIONS... */}
              <button className="bg-zinc-800 px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Manage Vault Items
              </button>
            </div>
          </div>
        )}

        {/* Post Composer */}
        <div className="mb-12 bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-6 shadow-2xl">
          <textarea 
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Transmit a thought to the sanctuary..."
            className="w-full bg-transparent border-none text-white placeholder-zinc-700 resize-none focus:ring-0 text-lg mb-4"
            rows={3}
          />
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
            <button className="text-zinc-500 hover:text-cyan-400 transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
              <ImageIcon size={18} />
              Add Image
            </button>
            <button onClick={handleTransmit} className="bg-[#FF5F1F] text-white px-8 py-3 rounded-xl font-black uppercase tracking-tighter flex items-center gap-2 hover:bg-white hover:text-black transition-all">
              Transmit
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* The Feed */}
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className={`bg-zinc-900/20 border ${post.isPinned ? 'border-pink-500/50 shadow-[0_0_30px_rgba(255,105,180,0.1)]' : 'border-zinc-800/50'} rounded-3xl p-8 transition-all hover:border-zinc-700 relative group cursor-pointer`}>
              {post.isPinned && (
                <div className="absolute -top-3 -right-3 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg border border-pink-400">
                  Pinned Transmission
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6 relative">
                {/* NEW AVATAR SYSTEM: From generic letter to personal portrait */}
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden text-zinc-700 shadow-xl group-hover:border-pink-500/50 transition-all duration-700">
                  {post.author.toLowerCase().includes('sonja') || post.author.toLowerCase().includes('architect') ? (
                    <img 
                      src="/gallery/sonja-portrait-noir.jpg" 
                      alt="The Architect" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  ) : (
                    <span className="font-black text-pink-500 italic">{post.author.charAt(0)}</span>
                  )}
                  {/* Discrete, slow scan line over the portrait */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent h-1 w-full animate-scan-slow pointer-events-none" />
                </div>

                <div className="text-left flex-1">
                  <Nameplate 
                    name={post.author} 
                    role={post.role} 
                    className="text-lg" 
                  />
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono mt-0.5">
                    {post.timestamp}
                  </p>
                </div>
              </div>
              
              <div className="text-zinc-300 text-lg leading-relaxed mb-6 font-light whitespace-pre-wrap">
                {post.content}
              </div>

              {(post as any).hasSignature && (
                <div className="mb-8 pl-4 border-l border-zinc-800">
                  <FounderSignature />
                </div>
              )}

              {post.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest bg-zinc-800/50 text-zinc-400 px-3 py-1 rounded-full border border-zinc-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              
              {post.image && (
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 group">
                  <img 
                    src={post.image} 
                    alt={post.alt} 
                    className={`w-full h-auto transition-all duration-700 ${isSimplifiedMode ? 'blur-3xl opacity-20' : 'group-hover:scale-105'}`} 
                  />
                  {isSimplifiedMode && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-black/40">
                      <EyeOff size={32} className="text-zinc-500 mb-4" />
                      <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest leading-loose max-w-xs">
                        [Image Blurred for Simplified View] <br /> {post.alt}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
