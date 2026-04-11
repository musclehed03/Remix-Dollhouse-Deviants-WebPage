import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Compliance() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 p-8 md:p-24 selection:bg-magenta-500/30 flex flex-col">
      {/* Navigation */}
      <nav className="mb-16">
        <Link to="/" className="text-magenta-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
          ← Return to Hub
        </Link>
      </nav>
      <div className="max-w-3xl mx-auto border border-zinc-900 p-8 md:p-16 bg-zinc-950/50 flex-grow mb-16">
        <h1 className="text-white text-3xl font-bold italic tracking-tighter mb-8 border-b border-magenta-900/50 pb-4">
          18 U.S.C. § 2257 RECORD-KEEPING COMPLIANCE STATEMENT
        </h1>

        <div className="space-y-8 text-sm leading-relaxed tracking-wide">
          <section>
            <p>
              All models, actors, and individuals appearing in sexually explicit material on this website were over the age of 18 at the time the material was produced.
            </p>
          </section>

          <section>
            <p className="mb-4">
              In accordance with Federal Law (18 U.S.C. § 2257 and 2257A), records required to be maintained are located at the following address:
            </p>
            <div className="mt-4 p-6 border-l-2 border-magenta-500 bg-black/40 space-y-2">
              <p className="text-white font-bold">Custodian of Records: <span className="font-normal text-zinc-300">Sonja Kelley</span></p>
              <p className="text-white font-bold">Address: <span className="font-normal text-zinc-300">701 16th Street Southwest, Apt. 39<br />Waverly, IA 50677</span></p>
            </div>
          </section>

          <section>
            <p>
              For all content produced by Dollhouse Deviants, the primary records are maintained by the Custodian of Records. For content provided by third-party creators or community submissions, Dollhouse Deviants relies on the 2257 compliance statements provided by those respective producers.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-900">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Last Updated: April 2026
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
