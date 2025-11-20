"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "./ui/badge";
import { Circle, Play, RefreshCcw, Copy, Info, Radio, Trophy, X, UserPlus, Lock } from "lucide-react";

interface GameCardProps {
  title: string;
  status: string;
  image: string;
  link?: string;
  quarter?: string;
  primaryActivation?: string;
  featured?: boolean;
}

export function GameCard({ title, status, image, link, quarter, primaryActivation, featured = false }: GameCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const isComingSoon = status === "LOCKED";
  const isLive = status === "Live Now";
  const isConcluded = status === "Concluded";
  const isSignUp = status === "Sign Up";
  const isHailMaryProject = title.trim().toUpperCase() === "HAIL MARY PROJECT";
  const isBorderland = title.trim().toUpperCase() === "BORDERLAND";
  const cardBorderClass = isComingSoon
    ? "border-zinc-700"
    : isConcluded && isBorderland
      ? "border-red-500"
      : isConcluded
        ? "border-amber-500"
        : isSignUp && isHailMaryProject
          ? "border-orange-500"
          : isSignUp
            ? "border-blue-500"
            : "border-primary";
  const marqueeGradient = (() => {
    if (isComingSoon) {
      return "bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700";
    }
    if (isConcluded && isBorderland) {
      return "bg-gradient-to-r from-red-500/90 via-red-400/80 to-red-500/90";
    }
    if (isConcluded) {
      return "bg-gradient-to-r from-amber-500/90 via-amber-400/80 to-amber-500/90";
    }
    if (isSignUp && isHailMaryProject) {
      return "bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600";
    }
    return "bg-gradient-to-r from-primary via-accent to-secondary";
  })();

  const statusBadgeClasses = (() => {
    if (isLive) {
      return "bg-yellow-500 text-yellow-950 border-2 border-yellow-400 shadow-lg shadow-yellow-500/50 animate-pulse";
    }
    if (isSignUp) {
      return "bg-green-500 text-green-950 border-2 border-green-400 shadow-lg shadow-green-500/40 animate-pulse";
    }
    if (isConcluded || isComingSoon) {
      return "bg-zinc-800 text-zinc-400 border-2 border-zinc-700";
    }
    return "bg-zinc-800 text-zinc-400 border-2 border-zinc-700";
  })();

  const imageEffectClass = isComingSoon
    ? "grayscale opacity-70"
    : "";

  // Detect scrolling to prevent modal from closing during scroll
  useEffect(() => {
    if (!isModalOpen) return;

    const handleScroll = () => {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    // Listen to scroll events on the carousel container and window
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('wheel', handleScroll, { passive: true, capture: true });
    window.addEventListener('touchmove', handleScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('wheel', handleScroll, true);
      window.removeEventListener('touchmove', handleScroll, true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isModalOpen]);

  // Close modal when card is no longer featured (scrolled away)
  useEffect(() => {
    if (!featured && isModalOpen) {
      setIsModalOpen(false);
    }
  }, [featured, isModalOpen]);

  const handleBackdropClick = () => {
    // Don't close if we're currently scrolling
    if (isScrollingRef.current) return;
    setIsModalOpen(false);
  };

  const renderActionButton = () => {
    if (isComingSoon) {
      return (
        <div className="arcade-font text-[0.5rem] flex items-center gap-1 px-3 py-1 bg-zinc-800 border-2 border-zinc-700 shadow-lg opacity-50"
          style={{
            boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
          }}>
          <Lock className="w-3 h-3" />
          <span>LOCKED</span>
        </div>
      );
    }

    if (isConcluded) {
      return (
        <div className="arcade-font text-[0.5rem] flex items-center gap-1 px-3 py-1 bg-zinc-800 border-2 border-zinc-700 shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer"
          style={{
            boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
          }}>
          <Trophy className="w-3 h-3" />
          <span>RESULTS</span>
        </div>
      );
    }

    if (isSignUp) {
      return (
        <div className="arcade-font text-[0.5rem] flex items-center gap-1 px-3 py-1 bg-green-500 border-2 border-green-400 text-green-950 shadow-lg shadow-green-500/60 transition-all duration-200 hover:scale-110 cursor-pointer"
          style={{
            boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
          }}>
          <UserPlus className="w-3 h-3" />
          <span>SIGN UP</span>
        </div>
      );
    }

    if (link) {
      return (
        <div className="arcade-font text-[0.5rem] flex items-center gap-1 px-3 py-1 bg-green-500 border-2 border-green-400 text-green-950 shadow-lg shadow-green-500/60 transition-all duration-200 hover:scale-110 cursor-pointer"
          style={{
            boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
          }}>
          <Play className="w-3 h-3" />
          <span>START</span>
        </div>
      );
    }

    return (
      <div className="arcade-font text-[0.5rem] flex items-center gap-1 px-3 py-1 bg-zinc-800 border-2 border-zinc-700 shadow-lg opacity-50"
        style={{
          boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
        }}>
        <Lock className="w-3 h-3" />
        <span>LOCKED</span>
      </div>
    );
  };
  
  const cardContent = (
    <div className="group relative">
      {/* Arcade Cabinet Body */}
      <div className={`relative bg-black border-8 ${cardBorderClass} shadow-2xl transition-all duration-300 hover:scale-[1.02] ${isConcluded && isBorderland ? 'hover:border-red-500' : isConcluded ? 'hover:border-amber-500' : ''}`}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)',
      }}>
        
        {/* Side panels with texture */}
        <div className="absolute -left-4 top-12 bottom-12 w-4 bg-gradient-to-r from-zinc-900 to-zinc-800 
          shadow-inner transform -skew-y-2"
          style={{
            background: 'repeating-linear-gradient(90deg, #2a2a2a 0px, #1a1a1a 2px, #2a2a2a 4px)',
          }}
        />
        <div className="absolute -right-4 top-12 bottom-12 w-4 bg-gradient-to-l from-zinc-900 to-zinc-800 
          shadow-inner transform skew-y-2"
          style={{
            background: 'repeating-linear-gradient(90deg, #2a2a2a 0px, #1a1a1a 2px, #2a2a2a 4px)',
          }}
        />

        {/* Top Marquee */}
        <div className={`relative ${marqueeGradient} p-4 border-b-4 ${
          isComingSoon
            ? 'border-zinc-700'
            : isConcluded && isBorderland
              ? 'border-red-500'
              : isConcluded
                ? 'border-amber-500'
                : isSignUp && isHailMaryProject
                  ? 'border-orange-500'
                  : isSignUp
                    ? 'border-blue-500'
                    : 'border-primary'
        }`}>
          {/* Marquee lights */}
          <div className="absolute top-0 left-0 right-0 flex justify-around py-1">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full ${
                  isComingSoon ? 'bg-zinc-500' : 'bg-white'
                } shadow-lg`}
                style={{
                  animation: isComingSoon ? 'none' : `pulse 2s ease-in-out ${i * 0.25}s infinite`,
                }}
              />
            ))}
          </div>
          
          <h3 className={`arcade-title text-center ${
            isComingSoon ? 'text-zinc-500' : 'text-white'
          } text-xs sm:text-sm ${
            isComingSoon ? '' : 'drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'
          }`}>
            {title}
          </h3>


          {/* Bottom marquee lights */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around py-1">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full ${
                  isComingSoon ? 'bg-zinc-500' : 'bg-white'
                } shadow-lg`}
                style={{
                  animation: isComingSoon ? 'none' : `pulse 2s ease-in-out ${0.25 + i * 0.25}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Status Badge - Top Right */}
        <div className="absolute top-16 right-4 z-20 pointer-events-none">
          <Badge
            variant="outline"
            className={`arcade-font text-[0.5rem] ${statusBadgeClasses} cursor-default select-none`}>
            {isSignUp ? "Scheduled" : status}
          </Badge>
        </div>

        {quarter && (
          <div className="absolute top-16 left-4 z-20 max-w-[200px]">
            <div className="arcade-font text-[0.45rem] uppercase tracking-wide px-2 py-0.5 bg-black/70 border border-white/20 text-white/80 shadow-lg shadow-black/40 whitespace-nowrap">
              {quarter}
            </div>
          </div>
        )}

        {/* Screen Area */}
        <div className="p-6 bg-black">
          <div className="relative border-8 border-zinc-900 shadow-2xl shadow-black/50 overflow-hidden"
            style={{
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)',
            }}>
            {/* CRT Screen */}
            <div className="relative aspect-[4/3] bg-black">
              <img 
                src={image}
                alt={title}
                className={`w-full h-full object-cover ${imageEffectClass}`}
              />
              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none opacity-15"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 0, 0, 0.8) 3px, rgba(0, 0, 0, 0.8) 6px)',
                }}
              />
              {/* Screen glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
              
              {/* Locked Overlay */}
              {isComingSoon && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="arcade-font text-zinc-400 text-xs sm:text-sm text-center px-4">
                    LOCKED
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="relative bg-gradient-to-b from-zinc-800 to-black border-t-4 border-zinc-700 p-4">
          {/* Control Panel Angle */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/20 to-transparent pointer-events-none" />
          
          <div className="flex items-center justify-center gap-4 relative z-10">
            {/* Host Button - Icon on mobile, text on desktop */}
            <div className={`arcade-font text-[0.5rem] flex items-center gap-1 px-3 py-1 bg-zinc-800 border-2 border-zinc-700 shadow-lg hidden sm:flex ${
              isComingSoon ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer transition-all duration-200 hover:scale-110'
            }`}
              style={{
                boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
              }}>
              <Radio className="w-3 h-3" />
              <span>HOST</span>
            </div>
            <Radio className={`w-5 h-5 text-white sm:hidden ${
              isComingSoon ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer transition-all duration-200 hover:scale-110'
            }`} />
            
            {/* Arcade Buttons */}
            <div className="flex gap-2">
              <div className={`relative w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                isComingSoon ? 'bg-zinc-700' : 'bg-primary'
              } shadow-lg border-2 border-zinc-900 pointer-events-none`}
                style={{
                  boxShadow: isComingSoon 
                    ? 'inset 0 -4px 8px rgba(0,0,0,0.5)' 
                    : '0 0 20px rgba(255, 51, 51, 0.6), inset 0 -4px 8px rgba(0,0,0,0.5)',
                }}>
                {!isComingSoon && (
                  <div className="absolute inset-1.5 sm:inset-2 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                )}
              </div>
              <div className={`relative w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                isComingSoon ? 'bg-zinc-700' : 'bg-accent'
              } shadow-lg border-2 border-zinc-900`}
                style={{
                  boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.5)',
                }}>
                {!isComingSoon && (
                  <div className="absolute inset-1.5 sm:inset-2 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                )}
              </div>
              <div className={`relative w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                isComingSoon ? 'bg-zinc-700' : 'bg-secondary'
              } shadow-lg border-2 border-zinc-900`}
                style={{
                  boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.5)',
                }}>
                {!isComingSoon && (
                  <div className="absolute inset-1.5 sm:inset-2 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                )}
              </div>
            </div>
            
            {/* Start Button / Coin Slot */}
            {renderActionButton()}
          </div>

          {/* Coin Slot Detail */}
          <div className="mt-2 flex justify-center">
            <div className="w-12 h-3 bg-black border-2 border-zinc-700 rounded-sm shadow-inner" />
          </div>
        </div>

        {/* Base */}
        <div className="h-3 bg-gradient-to-b from-zinc-900 to-black border-t border-zinc-800" />
      </div>
    </div>
  );

  if (link) {
    return (
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="game-card-link block no-underline focus:outline-none focus:ring-0 hover:no-underline text-inherit [&>*]:text-inherit [&>*]:hover:text-inherit [&_*]:!text-inherit">
          {cardContent}
        </a>
        {/* Featured Activation Info - Below Game Console */}
        {primaryActivation && !isComingSoon && (
          <>
            <div className="flex items-center justify-center gap-1 mt-4">
              <div className="arcade-font text-[0.4rem] sm:text-[0.45rem] tracking-wide px-2 py-0.5 bg-black/70 border border-white/20 text-white/80 shadow-lg shadow-black/40 whitespace-nowrap flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label="Show featured activation info">
                  <Info className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                </button>
                <span>Featured Activation: {primaryActivation}</span>
              </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={handleBackdropClick}>
                <div 
                  className="relative bg-black border-4 border-white/50 p-6 max-w-md mx-4 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 text-white hover:text-zinc-400 transition-colors"
                    aria-label="Close modal">
                    <X className="w-5 h-5" />
                  </button>
                  <h3 className="arcade-font text-white text-xs mb-4">Featured Activation</h3>
                  <p className="arcade-font text-white/90 text-[0.5rem] leading-relaxed">
                    This is the featured activation of this game,{' '}
                    <a 
                      href="https://github.com/ianherdegen/The-Beacon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline transition-colors"
                      onClick={(e) => e.stopPropagation()}>
                      host a hyperlocal clone
                    </a>.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      {cardContent}
      {/* Featured Activation Info - Below Game Console */}
      {primaryActivation && !isComingSoon && (
        <>
          <div className="flex items-center justify-center gap-1 mt-4">
            <div className="arcade-font text-[0.4rem] sm:text-[0.45rem] tracking-wide px-2 py-0.5 bg-black/70 border border-white/20 text-white/80 shadow-lg shadow-black/40 whitespace-nowrap flex items-center gap-1">
              <button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Show featured activation info">
                <Info className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              </button>
              <span>Featured Activation: {primaryActivation}</span>
            </div>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={handleBackdropClick}>
              <div 
                className="relative bg-black border-4 border-white/50 p-6 max-w-md mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 text-white hover:text-zinc-400 transition-colors"
                  aria-label="Close modal">
                  <X className="w-5 h-5" />
                </button>
                <h3 className="arcade-font text-white text-xs mb-4">Featured Activation</h3>
                <p className="arcade-font text-white/90 text-[0.5rem] leading-relaxed">
                  This is the featured activation of this game,{' '}
                  <a 
                    href="https://github.com/ianherdegen/The-Beacon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline transition-colors"
                    onClick={(e) => e.stopPropagation()}>
                    host a hyperlocal clone
                  </a>.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
