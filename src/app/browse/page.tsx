"use client";

import { useState } from 'react'
import { Upload, Lock } from 'lucide-react'

export default function BrowseGames() {
  const [activeTab, setActiveTab] = useState<'blockbusters' | 'community'>('community')

  const blockbusterGames = [
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
  ]

  return (
    <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-16">
          <h2 className="arcade-title text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
            BROWSE GAMES
          </h2>
          <p className="arcade-font text-[0.6rem] sm:text-[0.7rem] text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            EXPLORE ALL BEACON GAMES
          </p>
        </div>

        {/* Tab Selection Panel */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex border-2 border-zinc-700 bg-zinc-900 p-1 gap-2">
            <button
              onClick={() => setActiveTab('community')}
              className={`arcade-font text-[0.5rem] sm:text-[0.6rem] px-6 py-3 transition-all duration-300 border-2 ${
                activeTab === 'community'
                  ? 'border-red-500 text-red-500 bg-black shadow-lg shadow-red-500/50'
                  : 'border-zinc-700 text-zinc-500 hover:border-zinc-600 hover:text-zinc-400'
              }`}
            >
              COMMUNITY GAMES
            </button>
            <button
              onClick={() => setActiveTab('blockbusters')}
              className={`arcade-font text-[0.5rem] sm:text-[0.6rem] px-6 py-3 transition-all duration-300 border-2 ${
                activeTab === 'blockbusters'
                  ? 'border-red-500 text-red-500 bg-black shadow-lg shadow-red-500/50'
                  : 'border-zinc-700 text-zinc-500 hover:border-zinc-600 hover:text-zinc-400'
              }`}
            >
              BEACON BLOCKBUSTERS
            </button>
          </div>
        </div>

        {/* Beacon Blockbusters Content */}
        {activeTab === 'blockbusters' && (() => {
          const totalGames = blockbusterGames.length;
          
          // Calculate skeletons needed for each breakpoint
          const mobileCols = 2;
          const tabletCols = 3;
          const desktopCols = 4;
          
          const mobileSkeletons = totalGames % mobileCols === 0 ? 0 : mobileCols - (totalGames % mobileCols);
          const tabletSkeletons = totalGames % tabletCols === 0 ? 0 : tabletCols - (totalGames % tabletCols);
          const desktopSkeletons = totalGames % desktopCols === 0 ? 0 : desktopCols - (totalGames % desktopCols);
          
          // Create skeleton tiles that show/hide based on breakpoint needs
          const maxSkeletons = Math.max(mobileSkeletons, tabletSkeletons, desktopSkeletons);
          
          return (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {blockbusterGames.map((game, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border-2 border-zinc-700 hover:border-zinc-600 transition-all duration-300 overflow-hidden relative"
                >
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
                  }} />
                  
                  <div className="relative">
                    {/* Game Image */}
                    <div className="aspect-[3/4] bg-black overflow-hidden">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover grayscale opacity-70"
                      />
                    </div>
                    
                    {/* Game Info */}
                    <div className="p-2 space-y-1.5">
                      <h3 className="arcade-title text-[0.45rem] sm:text-[0.5rem] text-white leading-tight">
                        {game.title}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="arcade-font text-[0.35rem] sm:text-[0.4rem] text-zinc-400">
                          {game.quarter}
                        </span>
                        <div className="flex items-center gap-0.5 text-zinc-500">
                          <Lock className="w-2 h-2" />
                          <span className="arcade-font text-[0.35rem] sm:text-[0.4rem]">LOCKED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Skeleton Tiles - Show/hide based on breakpoint needs */}
              {Array.from({ length: maxSkeletons }).map((_, index) => {
                // Determine visibility for each skeleton based on breakpoint needs
                const showOnMobile = index < mobileSkeletons;
                const showOnTablet = index < tabletSkeletons;
                const showOnDesktop = index < desktopSkeletons;
                
                return (
                  <div
                    key={`skeleton-${index}`}
                    className={`${
                      showOnMobile ? 'block' : 'hidden'
                    } ${
                      showOnTablet ? 'sm:block' : 'sm:hidden'
                    } ${
                      showOnDesktop ? 'lg:block' : 'lg:hidden'
                    } bg-zinc-900/70 border-2 border-zinc-700 border-dashed overflow-hidden relative opacity-60`}
                  >
                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
                    }} />
                    
                    <div className="relative">
                      {/* Empty Image Placeholder */}
                      <div className="aspect-[3/4] bg-zinc-900 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-zinc-700 rounded" />
                      </div>
                      
                      {/* Empty Info Placeholder */}
                      <div className="p-2 space-y-1.5">
                        <div className="h-3 bg-zinc-700 rounded w-3/4" />
                        <div className="flex items-center justify-between">
                          <div className="h-2 bg-zinc-700 rounded w-1/3" />
                          <div className="h-2 bg-zinc-700 rounded w-1/4" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Community Games Content */}
        {activeTab === 'community' && (
          <div className="max-w-2xl mx-auto">
            {/* Submit Game Button */}
            <div className="flex justify-center mb-12">
              <a
                href="mailto:sidequesterpix@gmail.com?subject=Game Submission"
                className="arcade-font text-[0.6rem] sm:text-[0.7rem] px-6 py-4 bg-gradient-to-r from-accent to-secondary text-black border-4 border-white/20 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/50 hover:shadow-secondary/50 flex items-center gap-3"
              >
                <Upload className="w-4 h-4" />
                SUBMIT YOUR GAME
              </a>
            </div>

            {/* Empty State - Your Game Could Be Here */}
            <div className="bg-zinc-900 border-4 border-dashed border-zinc-700 p-12 sm:p-16 text-center relative">
              {/* Scan Line Effect */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
              }} />
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="flex justify-center gap-2 mb-6">
                  <div className="w-4 h-4 bg-primary animate-pulse" />
                  <div className="w-4 h-4 bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-4 h-4 bg-secondary animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>

                {/* Message */}
                <h3 className="arcade-title text-[0.9rem] sm:text-[1.1rem] text-accent mb-4">
                  YOUR GAME COULD BE HERE
                </h3>
                
                <p className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-400 leading-relaxed max-w-md mx-auto">
                  SUBMIT A COMMUNITY GAME AND SEE IT FEATURED ON THE BEACON HQ
                </p>

                {/* Decorative pixels */}
                <div className="flex justify-center gap-2 mt-8">
                  <div className="w-3 h-3 border-2 border-primary" />
                  <div className="w-3 h-3 border-2 border-accent" />
                  <div className="w-3 h-3 border-2 border-secondary" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
