import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SafeImage from '../components/SafeImage';

const WRITINGS = [
  {
    id: 1,
    title: "The Chrysalis",
    author: "Sonja Kelley",
    excerpt: "In the silence between breaths, the shift began. Not a breaking, but a blooming...",
    content: "Full poem content goes here...",
    type: "Poetry"
  },
  // Add more contributor writings here
];

const ARTWORK = [
  {
    id: 1,
    title: "Abstract Identity",
    artist: "Guest Artist",
    url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80",
    category: "Painting"
  }
];

export default function Creations() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16 border-b border-magenta-900/50 pb-6">
        <Link to="/" className="text-magenta-500 hover:text-magenta-400 uppercase tracking-tighter font-bold">
          ← Back to Hub
        </Link>
        <h1 className="text-3xl font-light tracking-[0.2em] uppercase text-center">The Gallery</h1>
        <div className="w-24"></div>
      </nav>

      {/* Hero / Call to Action */}
      <section className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-5xl font-bold mb-6 italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-magenta-500 to-blue-500">
          A SHARED SPACE
        </h2>
        <p className="text-zinc-400 uppercase tracking-widest text-sm mb-8">
          The Dollhouse Collective: Writings & Art by the Trans Community
        </p>
        <div className="bg-zinc-900/50 border border-magenta-500/30 p-6 rounded-lg">
          <h3 className="text-magenta-400 font-bold mb-2">CALL FOR CONTRIBUTORS</h3>
          <p className="text-sm text-zinc-300">
            Are you a trans creator (MtF or FtM)? We want to showcase your voice. 
            Whether it's poetry, long-form thoughts, or digital paintings, this space is yours.
          </p>
          <a 
            href="mailto:sonja@dollhousedeviants.com?subject=Dollhouse%20Deviants%20Contributor%20Submission"
            className="inline-block mt-4 px-6 py-2 bg-magenta-600 hover:bg-magenta-500 text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Submit Your Work
          </a>
        </div>
      </section>

      {/* The Written Word Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-bold italic mb-12 border-l-4 border-magenta-600 pl-4 uppercase">The Written Word</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {WRITINGS.map((writing) => (
            <div key={writing.id} className="border-b border-zinc-800 pb-8 hover:border-magenta-500/50 transition-colors">
              <span className="text-magenta-500 text-[10px] uppercase tracking-widest">{writing.type}</span>
              <h3 className="text-2xl font-bold my-2 italic">{writing.title}</h3>
              <p className="text-zinc-400 italic mb-4">By {writing.author}</p>
              <p className="text-zinc-300 leading-relaxed mb-6">{writing.excerpt}</p>
              <button className="text-xs uppercase tracking-widest text-magenta-400 hover:text-magenta-300 font-bold">
                Read Full Piece →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Arts Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold italic mb-12 border-l-4 border-blue-600 pl-4 uppercase">Visual Arts</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {ARTWORK.map((art) => (
            <div key={art.id} className="relative group overflow-hidden rounded-lg">
              <SafeImage 
                src={art.url} 
                alt={art.title} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-blue-400 text-xs uppercase font-bold">{art.category}</span>
                <h3 className="text-lg font-bold italic uppercase">{art.title}</h3>
                <p className="text-sm text-zinc-400">by {art.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
