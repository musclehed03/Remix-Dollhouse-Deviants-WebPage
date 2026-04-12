import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SafeImage from '../components/SafeImage';
import ShortFilmHero from '../components/ShortFilmHero';

const PHOTOS = [
  { id: 1, title: 'May Celebration', category: 'Editorial', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/04a21aed-6dc9-4f2e-ac00-2a806f6e2452.jpg' },
  { id: 2, title: 'Dancefloor Vibes', category: 'Neon', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/1775469453622.png' },
  { id: 3, title: 'The Vault Portal', category: 'Avant-Garde', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/1775469832925.png' },
  { id: 4, title: 'Studio Style', category: 'Noir', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/20260402_073533-IMG_STYLE.jpg' },
  { id: 5, title: 'Editorial Shadows', category: 'Fashion', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/2c74367d-d2e8-44ae-8d36-e16059d1a097.jpg' },
  { id: 6, title: 'Fashion Forward', category: 'Production', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/417c4750-f704-4148-8cd8-a715b7fedda4.jpg' },
  { id: 7, title: 'Urban Avant-Garde', category: 'Street', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/878f795a-9192-4f92-8c2b-347ffec00806.jpg' },
  { id: 8, title: 'Midnight City', category: 'Neon', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/9af31712-88c4-40ca-ab72-d7dbbd6907de.jpg' },
  { id: 9, title: 'Production Still', category: 'Studio', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/IMG_20251030_045207.jpg' },
  { id: 10, title: 'Modern Muse', category: 'Editorial', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/ae725722-e501-4d37-8a49-4f77866f376c.jpg' },
  { id: 11, title: 'Boutique Feature', category: 'Noir', url: 'https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/e4220239-34c7-46e6-b3de-8bdf22928c8c.jpg' }
];

export default function Studio() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Navigation Header */}
      <nav className="flex justify-between items-center mb-16 border-b border-zinc-800 pb-6">
        <Link to="/" className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
          ← Back to Hub
        </Link>
        <h1 className="text-4xl font-light tracking-[0.3em] uppercase">The Studio</h1>
        <div className="w-24"></div>
      </nav>

      {/* Featured Short Film */}
      <ShortFilmHero 
        title="Neon Genesis"
        director="Sonja Kelley"
        duration="04:20"
        narrative="An exploration of identity and transition through the lens of cyberpunk aesthetics and high-fashion editorial. A visual poem about reclaiming the body."
        videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" 
        posterUrl="https://raw.githubusercontent.com/musclehed03/dollhouse-media/main/Dollhouse-Media/1775469453622.png"
        ethicalNote="18 U.S.C. § 2257 Record-Keeping Requirements Compliance Statement Applies."
      />

      {/* Cinematic Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {PHOTOS.map((photo) => (
          <div key={photo.id} className="relative group overflow-hidden bg-zinc-900 border border-zinc-800">
            <SafeImage 
              src={photo.url} 
              alt={photo.title} 
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
              <span className="text-magenta-500 text-[10px] uppercase tracking-[0.4em] mb-2">{photo.category}</span>
              <h3 className="text-2xl font-bold italic uppercase tracking-tighter">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
