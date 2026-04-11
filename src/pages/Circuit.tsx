import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { SafeImage } from '../components/SafeImage';
import { Send, Image as ImageIcon, Smile, X, Bot, ThumbsUp } from 'lucide-react';

const ComicBubble = ({ text }: { text: string }) => {
  return (
    <div className="p-6 bg-zinc-800 border-2 border-dashed border-zinc-700 rounded-3xl relative shadow-2xl">
       {/* comic bubble tail */}
       <div className="absolute bottom-[-10px] right-[20px] w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-zinc-800 border-r-[10px] border-r-transparent"></div>
       <p className="text-zinc-300 text-sm font-black tracking-tight leading-relaxed uppercase">
         {text}
       </p>
    </div>
  );
};

const AccessibilityNook = ({ isVisible, isEntered }: { isVisible: boolean; isEntered: boolean }) => {
  const meowAudio = useRef<HTMLAudioElement>(null);
  const purrAudio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isVisible && !isEntered) {
      if (meowAudio.current) {
        meowAudio.current.play().catch(() => {}); // Catch auto-play restrictions
      }
    }
  }, [isVisible, isEntered]);

  useEffect(() => {
    if (isVisible && isEntered) {
      if (purrAudio.current) {
        purrAudio.current.play().catch(() => {});
      }
    }
  }, [isVisible, isEntered]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute top-10 right-[-340px] z-30 pointer-events-none transition-all duration-300 hidden xl:block">
       {/* Sound placeholders - Sonja will need to add these files to her project's assets */}
       <audio ref={meowAudio} src="/sounds/meow.mp3"></audio> 
       <audio ref={purrAudio} src="/sounds/purr.mp3"></audio>

       <div className="relative">
           {!isEntered ? (
             <div className="relative flex flex-col items-center w-[300px]">
                {/* PLACEHOLDER KITTY SILHOUETTE
                   Sonja will need to replace this with her pink kitty silhouette SVG
                */}
                <Bot className="absolute top-[-50px] right-[-20px] text-pink-500 w-24 h-24 drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]" size={96} strokeWidth={1.5}/>
                
                <ComicBubble text="friendly reminder about not leaving our amazing assistive technologies deviants out." />
             </div>
           ) : (
             <div className="relative flex flex-col items-center w-[300px]">
                {/* PLACEHOLDER KITTY GESTURING
                   Sonja will need to replace this with her happily gesturing silhouette
                */}
                <ThumbsUp className="absolute top-[-50px] right-[-20px] text-magenta-500 w-24 h-24 drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]" size={96} strokeWidth={1.5}/>
                
                <div className="p-6 bg-magenta-500/10 border-2 border-dashed border-magenta-500/50 rounded-3xl w-full shadow-2xl backdrop-blur-sm">
                   <p className="text-sm text-magenta-100 font-black tracking-tight leading-relaxed uppercase drop-shadow-md">
                       Thank you for being deviantly inclusive! The echoes resonate better now.
                   </p>
                </div>
             </div>
           )}
       </div>
    </div>
  );
};

const Circuit = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Sonja_On-Fire",
      content: "Welcome to The Circuit. This is our live wire—stay connected, stay deviant.",
      media: null as any,
      timestamp: "2 mins ago"
    }
  ]);

  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<{url: string} | null>(null);
  const [altText, setAltText] = useState('');
  const [extendedDescription, setExtendedDescription] = useState('');
  const [isNookVisible, setIsNookVisible] = useState(false);
  const [isAltTextEntered, setIsAltTextEntered] = useState(false);

  const handleImageSelection = () => {
    // Simulate file selection
    setSelectedImage({ url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853" });
    setIsNookVisible(true);
    setIsAltTextEntered(false);
  };

  const handleAltTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAltText(val);
    if (val.trim() !== "") {
      setIsAltTextEntered(true);
    } else {
      setIsAltTextEntered(false);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setAltText('');
    setExtendedDescription('');
    setIsNookVisible(false);
    setIsAltTextEntered(false);
  };

  const isPulseDisabled = selectedImage && altText.trim() === '';

  const handlePulse = () => {
    if (isPulseDisabled || (content.trim() === '' && !selectedImage)) return;

    const newPost = {
      id: Date.now(),
      author: "Current_User", // In a real app, this would be the logged-in user
      content: content,
      media: selectedImage ? {
        type: "image",
        url: selectedImage.url,
        altText: altText,
        extendedDescription: extendedDescription
      } : null,
      timestamp: "Just now"
    };

    setPosts([newPost, ...posts]);
    setContent('');
    clearImage();
  };

  return (
    <Layout>
      <div className="max-w-2xl w-full space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black uppercase glow-orange text-[#FF5F1F]">The Circuit</h1>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.3em]">BE SOCIAL. CONNECT. SHARE.</p>
        </header>

        {/* Create Post Area */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-10 relative">
          <textarea 
            placeholder="What's the word, Deviant?"
            className="w-full bg-transparent border-none text-white placeholder-zinc-600 resize-none focus:ring-0 text-lg outline-none"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
          {selectedImage && (
            <div className="mt-4 p-4 bg-zinc-800/30 rounded-xl border border-dashed border-zinc-700 relative">
              <button 
                onClick={clearImage}
                className="absolute top-2 right-2 text-zinc-500 hover:text-[#FF5F1F] transition-colors z-10"
                aria-label="Remove image"
              >
                <X size={16} />
              </button>
              
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon className="text-[#FF5F1F]" size={20} />
                <span className="text-sm font-bold text-white">Image Selected</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-[#FF5F1F] uppercase tracking-wider block mb-1">
                    Required: Alt Text / Image Description
                  </label>
                  <input 
                    type="text" 
                    placeholder="Describe this image for those who cannot see it (Alt Text)..." 
                    className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-lg text-sm text-zinc-300 italic focus:border-[#FF5F1F] outline-none transition-all"
                    value={altText}
                    onChange={handleAltTextChange}
                    aria-label="Image alternative text"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                    Optional: Extended Description
                  </label>
                  <textarea 
                    placeholder="Add more details if needed..." 
                    className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-lg text-sm text-zinc-300 italic focus:border-[#FF5F1F] outline-none transition-all resize-none"
                    rows={2}
                    value={extendedDescription}
                    onChange={(e) => setExtendedDescription(e.target.value)}
                    aria-label="Extended image description"
                  />
                </div>
                <p className="text-[10px] text-zinc-500 font-mono">
                  * Alt text ensures our community remains accessible to everyone.
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800/50">
            <div className="flex gap-4">
              <button 
                className={`transition-colors ${selectedImage ? 'text-[#FF5F1F]' : 'text-zinc-500 hover:text-[#FF5F1F]'}`} 
                title="Upload Image"
                onClick={handleImageSelection}
              >
                <ImageIcon size={20} />
              </button>
              <button className="text-zinc-500 hover:text-[#FF5F1F] transition-colors">
                <Smile size={20} />
              </button>
            </div>

            <button 
              onClick={handlePulse}
              disabled={isPulseDisabled}
              className={`font-black px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                isPulseDisabled 
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                  : 'bg-[#FF5F1F] text-black hover:scale-105 active:scale-95'
              }`}
            >
              <Send size={16} /> PULSE
            </button>
          </div>

          {/* INTEGRATING THE ACCESSIBILITY NOOK */}
          <AccessibilityNook 
            isVisible={isNookVisible}
            isEntered={isAltTextEntered}
          />
        </div>

        {/* The Feed */}
        <div className="space-y-6">
          {posts.map(post => (
            <article key={post.id} className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF5F1F] to-magenta-500" />
                <div>
                  <h4 className="font-bold text-white text-sm">{post.author}</h4>
                  <span className="text-[10px] text-zinc-600 font-mono uppercase">{post.timestamp}</span>
                </div>
              </div>
              
              <p className="text-zinc-300 leading-relaxed mb-4">{post.content}</p>

              {post.media && (
                <div className="rounded-xl overflow-hidden border border-zinc-800">
                  <SafeImage 
                    src={post.media.url} 
                    alt={post.media.altText} 
                    description={post.media.extendedDescription}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Circuit;
