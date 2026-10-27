import React from 'react';
import { MapPin, Send, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white px-4 overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        
        {/* Sarlavha va Ism */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Salom, men <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Muhammadqodir</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl">
          Frontend Dasturchi &amp; Interaktiv Veb-Ilova Yaratuvchisi
        </p>

        {/* Interaktiv Tugmalar Bo'limi */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          
          {/* 1. GitHub Profil Tugmasi */}
          <a
            href="https://github.com/rslvmuxa7-art"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 transition-all text-slate-200 hover:text-white backdrop-blur-md shadow-lg"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          {/* 2. Telegram Profil Tugmasi */}
          <a
            href="https://t.me/rasulv_l7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-500/40 bg-sky-950/40 hover:bg-sky-500/20 transition-all text-sky-400 hover:text-sky-300 backdrop-blur-md shadow-lg shadow-sky-950/50"
          >
            <Send className="w-4 h-4" />
            <span className="text-sm font-medium">Telegram</span>
          </a>

          {/* 3. Google Maps Lokatsiya Tugmasi (Bachqir MFY, Buvayda) */}
          <a
            href="https://www.google.com/maps/search/Bachqir+MFY,+Buvayda,+Fergana+Region,+Uzbekistan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/40 bg-slate-900/60 hover:bg-cyan-500/20 transition-all text-cyan-400 hover:text-cyan-300 backdrop-blur-md shadow-lg"
          >
            <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform animate-pulse" />
            <span className="text-sm font-medium">Farg&apos;ona, Buvayda</span>
          </a>

        </div>

      </div>
    </section>
  );
}