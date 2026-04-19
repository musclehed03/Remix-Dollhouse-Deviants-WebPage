import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { useAccess } from '../context/AccessibilityContext';
import { Radio, Image as ImageIcon, Send, ShieldCheck, EyeOff, Eye, AlertTriangle } from 'lucide-react';

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
      role: "Founder",
      isStaff: true,
      timestamp: "Entry: 04.18.2026",
      content: `The heavy doors of the Dollhouse are finally open. \n\nThis sanctuary was built out of a necessity for autonomy. In a world that seeks to commodify, judge, or restrict the unconventional, we have created a digital black-site where the rules are written by us. \n\nWhether you are here for the art in the Gallery, the raw energy of the Boutique, or the guarded secrets within the Vault—know that you are in a space defined by absolute consent and unwavering security. \n\nWe don't just host content; we protect the creators and the community that makes this possible. Welcome to the new standard. \n\nStay deviant.\n— Sonja`,
      tags: ["Manifesto", "SanctuaryProtocol", "ArchitectLog"],
      isPinned: true,
      image: null,
      alt: ""
    },
    { 
      id: 3, 
      author: "Sonja (Architect)", 
      isStaff: true,
      content: "Architect Log // Update 01: The sanctuary just got a little clearer. We've officially transitioned 'Lite Mode' to 'Simplified View' to better support our screen-reader family. I've also wired in a Sensory Advisory for The Circuit—safety first, always. 🏳️⚧️✨", 
      image: null, 
      alt: "", 
      timestamp: "Just now" 
    },
    { 
      id: 1, 
      author: "Sonja", 
      isStaff: true,
      content: "Welcome to the first transmission on The Circuit. This is our space.", 
      image: "https://picsum.photos/seed/circuit/800/600?blur=2", 
      alt: "A vibrant neon sign that says 'Open' in a dark alley.", 
      timestamp: "2h ago" 
    },
    { 
      id: 2, 
      author: "Deviant_01", 
      isStaff: false,
      content: "Feeling safe here. Thank you for building this, Architect.", 
      image: null, 
      alt: "", 
      timestamp: "5h ago" 
    }
  ]);

  return (
    <Layout>
      <div className="max-w-4xl w-full mx-auto pb-20 pt-10 px-4">
        
        {/* Sensory Advisory */}
        {!isSimplifiedMode && (
          <div className="mb-12 p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center gap-6 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="p-3 bg-orange-500/20 rounded-full text-orange-400">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">Sensory Advisory</h4>
              <p className="text-zinc-400 text-sm">This feed contains raw media. Enable <span className="text-orange-400 font-bold">Simplified View</span> to minimize visual density.</p>
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
            <button className="bg-[#FF5F1F] text-white px-8 py-3 rounded-xl font-black uppercase tracking-tighter flex items-center gap-2 hover:bg-white hover:text-black transition-all">
              Transmit
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* The Feed */}
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className={`bg-zinc-900/20 border ${post.isPinned ? 'border-pink-500/50 shadow-[0_0_30px_rgba(255,105,180,0.1)]' : 'border-zinc-800/50'} rounded-3xl p-8 transition-all hover:border-zinc-700 relative`}>
              {post.isPinned && (
                <div className="absolute -top-3 -right-3 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg border border-pink-400">
                  Pinned Transmission
                </div>
              )}
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className={`font-black uppercase tracking-tighter ${post.isPinned ? 'text-pink-500' : 'text-white'}`}>{post.author}</span>
                    {post.isStaff && <ShieldCheck size={16} className="text-cyan-400" />}
                  </div>
                  {post.role && <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mt-1">{post.role}</span>}
                </div>
                <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">{post.timestamp}</span>
              </div>
              
              <div className="text-zinc-300 text-lg leading-relaxed mb-6 font-light whitespace-pre-wrap">
                {post.content}
              </div>

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
