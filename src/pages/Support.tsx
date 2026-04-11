import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SafeImage from '../components/SafeImage';

export default function Support() {
  const paypalId = "AZVCASBGAJ8AL";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-magenta-500/30 flex flex-col">
      <nav className="p-8 flex justify-between items-center border-b border-zinc-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="text-magenta-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
          ← Back to Hub
        </Link>
        <h1 className="text-2xl font-light tracking-[0.4em] uppercase">Community</h1>
        <div className="w-20"></div>
      </nav>

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-16">
        {/* The Cover Image (Your Flow Image) */}
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_0_30px_rgba(255,105,180,0.15)] mb-16 relative group">
          <SafeImage 
            src="/thank-you.png" 
            alt="Thank You - You Make All This Possible" 
            className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              // Fallback if the image isn't uploaded yet
              e.currentTarget.src = "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-magenta-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="text-center space-y-8 mb-24">
          <h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter">
            Your Presence is <span className="text-magenta-500">Power.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light text-lg">
            Just by clicking on our website, perusing the galleries, and witnessing our stories, you are supporting trans, non-binary, and neurodivergent creators. You don't have to spend a dime to be a valued part of the Dollhouse Deviants community. 
            <br/><br/>
            <span className="text-white font-bold italic">We see you, and we appreciate you.</span>
          </p>
        </div>

        {/* The Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Financial Support */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-10 text-center rounded-xl hover:border-magenta-500/50 transition-colors flex flex-col h-full">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Financial Support</h3>
            <p className="text-xs text-zinc-500 mb-8 leading-relaxed flex-grow">
              If you have the means and wish to contribute financially, your support directly funds our creators and mental health advocacy. No pressure, ever.
            </p>
            <a 
              href={`https://www.paypal.com/donate/?hosted_button_id=${paypalId}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full bg-magenta-600 text-white px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
            >
              Donate via PayPal
            </a>
          </div>

          {/* Creative Support */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-10 text-center rounded-xl hover:border-blue-500/50 transition-colors flex flex-col h-full">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Creative Support</h3>
            <p className="text-xs text-zinc-500 mb-8 leading-relaxed flex-grow">
              Are you a creator? The best way to support the Dollhouse is to help us build it. We are always looking for new voices and visions to feature.
            </p>
            <a 
              href="mailto:sonja@dollhousedeviants.com?subject=Dollhouse%20Deviants%20Contributor%20Submission"
              className="inline-block w-full border border-zinc-600 text-zinc-300 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-white hover:text-white transition-colors"
            >
              Submit Your Work
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
