"use client";

import { useState } from 'react'
import Image from 'next/image'
import { Upload, Lock, X } from 'lucide-react'

export default function BrowseGames() {
  const [activeTab, setActiveTab] = useState<'blockbusters' | 'community'>('community')
  const [showSubmitModal, setShowSubmitModal] = useState(false)

  const blockbusterGames = [
    {
      title: "BORDERLAND",
      status: "LOCKED",
      image: "/images/Borderland.png"
    },
    {
      title: "SURVIVOR",
      status: "LOCKED",
      image: "/images/Survivor.png"
    },
    {
      title: "SQUID GAME",
      status: "LOCKED",
      image: "/images/SquidGame.png"
    },
    {
      title: "AMAZING RACE",
      status: "LOCKED",
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {blockbusterGames.map((game, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border-4 border-zinc-700 hover:border-primary transition-all duration-300 overflow-hidden relative group cursor-pointer"
                >
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none z-10" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
                  }} />
                  
                  <div className="relative">
                    {/* Game Image */}
                    <div className="aspect-[3/4] bg-black overflow-hidden relative">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover grayscale opacity-70 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                    </div>
                    
                    {/* Game Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-zinc-900/95 via-zinc-900/80 to-transparent">
                      <h3 className="arcade-title text-[0.5rem] sm:text-[0.6rem] text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                        {game.title}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="arcade-font text-[0.4rem] sm:text-[0.45rem]">LOCKED</span>
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
                    } bg-zinc-900 border-4 border-dashed border-zinc-700 opacity-50 overflow-hidden relative`}
                  >
                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none z-10" style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
                    }} />
                    
                    <div className="relative">
                      {/* Empty Image Placeholder */}
                      <div className="aspect-[3/4] bg-zinc-900 flex items-center justify-center">
                        <div className="w-12 h-12 border-2 border-dashed border-zinc-700 rounded opacity-50" />
                      </div>
                      
                      {/* Empty Info Placeholder */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-zinc-900/95 via-zinc-900/80 to-transparent">
                        <div className="h-3 bg-zinc-700 rounded w-3/4 mb-2 opacity-50" />
                        <div className="h-2 bg-zinc-700 rounded w-1/3 opacity-50" />
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
              <button
                onClick={() => setShowSubmitModal(true)}
                className="arcade-font text-[0.6rem] sm:text-[0.7rem] px-6 py-4 bg-gradient-to-r from-accent to-secondary text-black border-4 border-white/20 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/50 hover:shadow-secondary/50 flex items-center gap-3"
              >
                <Upload className="w-4 h-4" />
                SUBMIT YOUR GAME
              </button>
            </div>

            {/* Submit Confirmation Modal */}
            {showSubmitModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <div className="bg-zinc-900 border-4 border-zinc-700 p-8 max-w-md w-full relative">
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
                  }} />
                  
                  <div className="relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setShowSubmitModal(false)}
                      className="absolute top-0 right-0 text-zinc-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <h3 className="arcade-title text-[0.9rem] sm:text-[1rem] text-accent mb-6">
                      BEFORE YOU SUBMIT
                    </h3>
                    
                    <div className="space-y-3 mb-8 text-sm text-zinc-300">
                      <p className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>Your game rules are clearly defined</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>You&apos;ve successfully playtested your game</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>You agree to provide support to players and hosts</span>
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setShowSubmitModal(false)}
                        className="flex-1 px-4 py-2 border-2 border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors text-sm"
                      >
                        Cancel
                      </button>
                      <a
                        href="mailto:sidequesterpix@gmail.com?subject=Game Submission"
                        onClick={() => setShowSubmitModal(false)}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-accent to-secondary text-black border-2 border-transparent hover:scale-105 transition-all duration-300 text-sm font-medium text-center"
                      >
                        Submit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
