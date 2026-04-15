import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { useAccess } from '../context/AccessibilityContext';
import { Radio, Image as ImageIcon, Send, ShieldCheck, EyeOff, Eye } from 'lucide-react';

export default function Circuit() {
  const { user, isAdmin } = useAuth();
  const { isLiteMode } = useAccess();
  const [isStaticFilterActive, setIsStaticFilterActive] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [altText, setAltText] = useState('');

  // Mock Feed Data
  const [posts, setPosts] = useState([
    { id: 1, author: "Sonja", content: "Welcome to the first transmission on The Circuit. This is our space.", image: "https://picsum.photos/seed/circuit/800/600?blur=2", alt: "A vibrant neon sign that says 'Open' in a dark alley.", timestamp: "2h ago" },
    { id: 2, author: "Deviant_01", content: "Feeling safe here. Thank you for building this, Architect.", image: null, alt: "", timestamp: "5h ago" }
  ]);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postContent || (postContent && !altText && !isLiteMode)) return;
    const newPost = { id: Date.now(), author: user?.displayName || "Anonymous Deviant", content: postContent, image: null, alt: altText, timestamp: "Just now" };
    setPosts([newPost, ...posts]);
    setPostContent('');
    setAltText('');
  };

  return (
    <Layout>
      <div className="max-w-4xl w-full mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-black uppercase text-[#FF5F1F] drop-shadow-[0_0_15px_rgba(255,95,31,0.3)] tracking-tighter">
              The Circuit
            </h1>
            <p className="text-zinc-500 font-mono text-xs tracking-[0.4em] mt-2 uppercase">Community Live Wire</p>
          </div>
          <button onClick={() => setIsStaticFilterActive(!isStaticFilterActive)} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-[10px] font-black uppercase tracking-widest ${ isStaticFilterActive ? 'bg-[#FF5F1F] border-[#FF5F1F] text-black' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white' }`} >
            {isStaticFilterActive ? <EyeOff size={14} /> : <Eye size={14} />}
            {isStaticFilterActive ? 'Static Filter: ON' : 'Static Filter: OFF'}
          </button>
        </header>

        {/* POSTING BOX */}
        {user ? (
          <div className="mb-12 p-6 bg-zinc-900/40 border border-zinc-800 rounded-3xl">
            <form onSubmit={handlePost} className="space-y-4">
              <textarea placeholder="Broadcast to the sanctuary..." value={postContent} onChange={(e) => setPostContent(e.target.value)} className="w-full bg-black/50 border border-zinc-800 p-4 rounded-2xl text-white outline-none focus:border-[#FF5F1F] transition-all resize-none" />
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-grow w-full">
                  <input type="text" placeholder="Image Alt-Text (Required for accessibility)..." value={altText} onChange={(e) => setAltText(e.target.value)} className="w-full bg-black/50 border border-zinc-800 p-3 rounded-xl text-xs text-zinc-400 outline-none focus:border-cyan-500 transition-all" />
                </div>
                <button type="submit" disabled={!postContent || (!altText && !isLiteMode)} className="w-full md:w-auto bg-[#FF5F1F] disabled:opacity-30 text-black px-8 py-3 rounded-xl font-black uppercase tracking-tighter hover:bg-orange-400 transition-all flex items-center justify-center gap-2" >
                  <Send size={18} /> Transmit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="mb-12 p-6 bg-zinc-900/20 border border-dashed border-zinc-800 rounded-3xl text-center">
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em]">Login as a Deviant to join the transmission</p>
          </div>
        )}

        {/* FEED */}
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-black text-[#FF5F1F]">
                  {post.author[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">{post.author}</h4>
                  <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">{post.timestamp}</p>
                </div>
                {post.author === "Sonja" && <ShieldCheck size={14} className="text-cyan-400" />}
              </div>
              <div className={`p-6 bg-zinc-900/20 border border-zinc-800 rounded-3xl transition-all ${!isLiteMode && 'group-hover:bg-zinc-900/40 group-hover:border-zinc-700'}`}>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  {post.content}
                </p>
                {post.image && !isLiteMode && (
                  <div className={`relative rounded-2xl overflow-hidden border border-zinc-800 transition-all duration-700 ${isStaticFilterActive ? 'blur-2xl grayscale' : 'blur-0'}`}>
                    <img src={post.image} alt={post.alt} className="w-full h-auto" />
                    {isStaticFilterActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-black/80 text-white text-[10px] font-black px-4 py-2 rounded-full border border-white/10 uppercase tracking-[0.2em]">
                          Static Active
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {post.alt && (
                  <div className="mt-4 flex items-center gap-2 opacity-30">
                    <ImageIcon size={12} className="text-zinc-500" />
                    <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest">Alt: {post.alt}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
