"use client";

import { GameCarousel } from "@/components/GameCarousel";

export default function Home() {
  const games = [
    {
      title: "BORDERLAND",
      status: "LOCKED",
      quarter: "Q4 2025",
      image: "/images/Borderland.png"
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
    <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-16">
          <h2 className="arcade-title text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            BEACON BLOCKBUSTERS
          </h2>
          <p className="arcade-font text-[0.6rem] sm:text-[0.7rem] text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            FEATURED BEACON HQ GAMES
          </p>
        </div>
        
        {/* Game Carousel */}
        <div className="flex items-center justify-center">
          <GameCarousel games={games} />
        </div>
      </div>
    </main>
  );
}
