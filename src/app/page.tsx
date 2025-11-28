"use client";

import { GameCarousel } from "@/components/GameCarousel";
import { Zap, Mail, Code2 } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  const games = [
    {
      title: "BORDERLAND",
      status: "Open",
      quarter: "Q4 2025",
      image: "/images/Borderland.png",
      link: "https://borderland.thebeaconhq.com"
    },
    {
      title: "SURVIVOR",
      status: "LOCKED",
      quarter: "Q2 2026",
      image: "/images/Survivor.png"
    },
    {
      title: "SQUID GAME",
      status: "LOCKED",
      quarter: "Q3 2026",
      image: "/images/SquidGame.png"
    },
    {
      title: "AMAZING RACE",
      status: "LOCKED",
      quarter: "Q4 2026",
      image: "/images/AmazingRace.png"
    }
  ];
  
  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      {/* Arcade Floor Pattern */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 61px),
                         repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 61px)`
      }} />
      
      {/* Minimal Header */}
      <header className="relative border-b-2 border-zinc-800 bg-black/80 backdrop-blur-sm flex-shrink-0">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="arcade-title text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              THE BEACON HQ
            </h1>
            <p className="arcade-font text-white text-xs sm:text-sm mt-1 opacity-80">
              Hyperlocal Live Gaming
            </p>
          </div>
        </div>
      </header>

      {/* Full Height Main Content */}
      <main className="flex-1 flex items-center justify-center overflow-hidden">
        <section className="w-full h-full flex items-center justify-center">
          <GameCarousel games={games} />
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="relative border-t-2 border-zinc-800 bg-black/80 backdrop-blur-sm flex-shrink-0">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" style={{ animationDelay: '0.3s' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shadow-lg shadow-secondary/50" style={{ animationDelay: '0.6s' }} />
              </div>
              <a 
                href="mailto:sidequesterpix@gmail.com?subject=Inquiry"
                className="arcade-font text-[0.4rem] sm:text-[0.5rem] text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                <Mail className="w-2.5 h-2.5" />
                INQUIRIES
              </a>
            </div>
            <p className="arcade-font text-[0.4rem] sm:text-[0.5rem] text-zinc-500">
              © {currentYear} THE BEACON HQ
            </p>
            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/ianherdegen/The-Beacon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="arcade-font text-[0.4rem] sm:text-[0.5rem] text-secondary hover:text-secondary/80 transition-colors flex items-center gap-1"
              >
                <Code2 className="w-2.5 h-2.5" />
                DEVELOPERS
              </a>
              <div className="hidden sm:flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shadow-lg shadow-secondary/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" style={{ animationDelay: '0.3s' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
