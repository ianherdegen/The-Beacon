"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { GameCard } from "./GameCard";
import { ChevronLeft, ChevronRight, X, Radio, Play, Trophy } from "lucide-react";

interface Game {
  title: string;
  status: string;
  image: string;
  link?: string;
  quarter?: string;
}

interface GameCarouselProps {
  games: Game[];
}

export function GameCarousel({ games }: GameCarouselProps) {
  const [centerIndex, setCenterIndex] = useState(games.length); // Start at Borderland (first item) of middle set
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Create infinite scroll by tripling the games array
  const infiniteGames = [...games, ...games, ...games];

  const getActualIndex = (index: number) => {
    return index % games.length;
  };

  const handleInfiniteLoop = (currentIndex: number) => {
    if (!scrollRef.current) return;

    // If in first set (indices 0 to games.length-1), jump to middle set
    if (currentIndex < games.length) {
      const targetIndex = currentIndex + games.length;
      scrollToIndex(targetIndex, false);
      setCenterIndex(targetIndex);
    }
    // If in last set (indices 2*games.length to 3*games.length-1), jump to middle set
    else if (currentIndex >= games.length * 2) {
      const targetIndex = currentIndex - games.length;
      scrollToIndex(targetIndex, false);
      setCenterIndex(targetIndex);
    }
  };

  const updateCenterIndex = useCallback(() => {
    if (!scrollRef.current || isScrollingRef.current) return;
    
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    // Update scroll indicators
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const isAtStart = scrollLeft < 50;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 50;
    
    setShowLeftArrow(!isAtStart);
    setShowRightArrow(!isAtEnd);
    
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    
    setCenterIndex(closestIndex);

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // After scrolling stops, check if we need to loop
    scrollTimeoutRef.current = setTimeout(() => {
      handleInfiniteLoop(closestIndex);
    }, 150);
  }, [games.length, handleInfiniteLoop]);

  const scrollToIndex = useCallback((index: number, smooth = true) => {
    if (!scrollRef.current || !itemRefs.current[index]) return;
    
    const container = scrollRef.current;
    const item = itemRefs.current[index];
    
    if (!item) return;
    
    isScrollingRef.current = true;
    
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const containerCenter = container.clientWidth / 2;
    const scrollTo = itemCenter - containerCenter;
    
    container.scrollTo({
      left: scrollTo,
      behavior: smooth ? 'smooth' : 'auto'
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, smooth ? 500 : 0);
  }, []);

  const handlePrevious = () => {
    const newIndex = centerIndex - 1;
    setCenterIndex(newIndex);
    scrollToIndex(newIndex, true);
  };

  const handleNext = () => {
    const newIndex = centerIndex + 1;
    setCenterIndex(newIndex);
    scrollToIndex(newIndex, true);
  };

  const handleDotClick = (dotIndex: number) => {
    // Calculate target index in middle set
    const targetIndex = dotIndex + games.length;
    setCenterIndex(targetIndex);
    scrollToIndex(targetIndex, true);
  };

  // Check for mobile landscape
  useEffect(() => {
    const checkMobileLandscape = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLandscape = width > height;
      const isMobile = width < 768;
      setIsMobileLandscape(isMobile && isLandscape);
    };

    checkMobileLandscape();
    window.addEventListener('resize', checkMobileLandscape);
    window.addEventListener('orientationchange', checkMobileLandscape);

    return () => {
      window.removeEventListener('resize', checkMobileLandscape);
      window.removeEventListener('orientationchange', checkMobileLandscape);
    };
  }, []);

  // Initialize scroll indicators on mount
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const isAtStart = scrollLeft < 50;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 50;
      
      setShowLeftArrow(!isAtStart);
      setShowRightArrow(!isAtEnd);
    }
  }, [games.length]);

  useEffect(() => {
    // Initialize to Borderland (first item) of middle set after a short delay
    const timer = setTimeout(() => {
      scrollToIndex(games.length, false);
      setCenterIndex(games.length);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [games.length, scrollToIndex]);

  // Mobile landscape grid format
  if (isMobileLandscape) {
    return (
      <div className="w-full h-full flex flex-col justify-center px-4">
        <div className="grid grid-cols-2 gap-3">
          {games.map((game, index) => (
            <div key={index} className="flex flex-col items-center p-3 bg-zinc-900/50 border border-zinc-700 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mb-2">
                <img 
                  src={game.image}
                  alt={game.title}
                  className={`w-full h-full object-cover ${
                    game.status === "LOCKED" 
                      ? 'grayscale opacity-70' 
                      : ''
                  }`}
                />
              </div>
              <div className="text-center">
                <h3 className="arcade-font text-[0.5rem] text-white truncate mb-1">
                  {game.title}
                </h3>
                <p className="arcade-font text-[0.4rem] text-zinc-400 mb-2">
                  {game.status === "Sign Up" ? "Scheduled" : game.status}
                </p>
                <div className="flex items-center justify-center gap-1">
                  {game.status === "LOCKED" ? (
                    <div className="arcade-font text-[0.4rem] px-2 py-1 bg-zinc-600 text-zinc-300 rounded border border-zinc-500">
                      LOCKED
                    </div>
                  ) : game.status === "Concluded" ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const mailtoLink = document.createElement('a');
                          mailtoLink.href = 'mailto:sidequesterpix@gmail.com?subject=Host a Game';
                          mailtoLink.click();
                        }}
                        className="arcade-font text-[0.4rem] flex items-center gap-1 px-2 py-1 bg-zinc-800 border border-zinc-700 text-white rounded hover:bg-zinc-700 transition-colors"
                      >
                        <Radio className="w-2.5 h-2.5" />
                        <span>HOST</span>
                      </button>
                      {game.link ? (
                        <a 
                          href={game.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="arcade-font text-[0.4rem] px-2 py-1 bg-white text-black rounded border border-white hover:bg-zinc-100 transition-colors"
                        >
                          RESULTS
                        </a>
                      ) : (
                        <div className="arcade-font text-[0.4rem] px-2 py-1 bg-white text-black rounded border border-white">
                          RESULTS
                        </div>
                      )}
                    </>
                  ) : game.status === "Sign Up" ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const mailtoLink = document.createElement('a');
                          mailtoLink.href = 'mailto:sidequesterpix@gmail.com?subject=Host a Game';
                          mailtoLink.click();
                        }}
                        className="arcade-font text-[0.4rem] flex items-center gap-1 px-2 py-1 bg-zinc-800 border border-zinc-700 text-white rounded hover:bg-zinc-700 transition-colors"
                      >
                        <Radio className="w-2.5 h-2.5" />
                        <span>HOST</span>
                      </button>
                      {game.link ? (
                        <a 
                          href={game.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="arcade-font text-[0.4rem] px-2 py-1 bg-emerald-500 text-emerald-950 rounded border border-emerald-400 hover:bg-emerald-400 transition-colors"
                        >
                          SIGN UP
                        </a>
                      ) : (
                        <div className="arcade-font text-[0.4rem] px-2 py-1 bg-emerald-500 text-emerald-950 rounded border border-emerald-400">
                          SIGN UP
                        </div>
                      )}
                    </>
                  ) : game.link ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const mailtoLink = document.createElement('a');
                          mailtoLink.href = 'mailto:sidequesterpix@gmail.com?subject=Host a Game';
                          mailtoLink.click();
                        }}
                        className="arcade-font text-[0.4rem] flex items-center gap-1 px-2 py-1 bg-zinc-800 border border-zinc-700 text-white rounded hover:bg-zinc-700 transition-colors"
                      >
                        <Radio className="w-2.5 h-2.5" />
                        <span>HOST</span>
                      </button>
                      {game.title.trim().toUpperCase() === "BORDERLAND" ? (
                        <button
                          onClick={() => setOpenModalIndex(index)}
                          className="arcade-font text-[0.4rem] px-2 py-1 bg-primary text-white rounded border border-primary hover:bg-primary/80 transition-colors"
                        >
                          PLAY
                        </button>
                      ) : (
                        <a 
                          href={game.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="arcade-font text-[0.4rem] px-2 py-1 bg-primary text-white rounded border border-primary hover:bg-primary/80 transition-colors"
                        >
                          PLAY
                        </a>
                      )}
                    </>
                  ) : (
                    <div className="arcade-font text-[0.4rem] px-2 py-1 bg-zinc-600 text-zinc-300 rounded border border-zinc-500">
                      LOCKED
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Borderland Activations Modal */}
        {openModalIndex !== null && games[openModalIndex]?.title.trim().toUpperCase() === "BORDERLAND" && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setOpenModalIndex(null)}>
            <div 
              className="relative bg-black border-4 border-red-500/50 p-6 max-w-md mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setOpenModalIndex(null)}
                className="absolute top-2 right-2 text-white hover:text-zinc-400 transition-colors"
                aria-label="Close modal">
                <X className="w-5 h-5" />
              </button>
              <h3 className="arcade-font text-white text-xs mb-4 text-center">BORDERLAND ACTIVATIONS</h3>
              <div className="mb-4 pb-4 border-b-2 border-red-500/50">
                <p className="arcade-font text-white/90 text-[0.5rem] text-center flex items-center justify-center gap-1">
                  <span className="text-red-400 font-bold">Featured:</span> 
                  <a 
                    href="https://forms.gle/Z5hLqvVyqFHWGZu29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Pier 70
                  </a>
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full arcade-font text-[0.5rem]">
                  <thead>
                    <tr className="border-b-2 border-red-500/50">
                      <th className="text-center text-white/90 py-2 px-2">Activation</th>
                      <th className="text-center text-white/90 py-2 px-2">Status</th>
                      <th className="text-center text-white/90 py-2 px-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Pier 70", status: "Scheduled", link: "https://forms.gle/Z5hLqvVyqFHWGZu29" },
                      { name: "Alice In Russell-Land", status: "Concluded", link: "https://borderland.thebeaconhq.com" }
                    ].map((activation, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-red-500/20 transition-colors hover:bg-red-500/20 ${
                          activation.link ? 'cursor-pointer' : ''
                        }`}
                        onClick={(e) => {
                          if (activation.link) {
                            window.open(activation.link, '_blank', 'noopener,noreferrer');
                          }
                        }}
                      >
                        <td className="text-white/90 py-3 px-3">{activation.name}</td>
                        <td className="text-white/90 py-3 px-3">
                          <span className={`${
                            activation.status === "Scheduled" ? "text-blue-400" :
                            activation.status === "Concluded" ? "text-amber-400" :
                            activation.status === "Open" ? "text-green-400" :
                            "text-white/70"
                          }`}>
                            {activation.status}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          {activation.link && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(activation.link, '_blank', 'noopener,noreferrer');
                              }}
                              className={`arcade-font text-[0.5rem] flex items-center justify-center px-3 py-1 border-2 shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer w-[90px] ${
                                activation.status === "Scheduled"
                                  ? "bg-green-500 text-green-950 border-green-400 shadow-green-500/60"
                                  : activation.status === "Concluded"
                                  ? "bg-zinc-800 text-zinc-400 border-zinc-700"
                                  : "bg-primary text-white border-primary shadow-primary/60"
                              }`}
                              style={{
                                boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
                              }}
                            >
                              {activation.status === "Scheduled" ? "PLAY" : activation.status === "Concluded" ? "RESULTS" : "PLAY"}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const mailtoLink = document.createElement('a');
                    mailtoLink.href = 'mailto:sidequesterpix@gmail.com?subject=Host a Game';
                    mailtoLink.click();
                  }}
                  className="arcade-font text-[0.5rem] flex items-center gap-1 px-4 py-2 bg-zinc-800 border-2 border-zinc-700 text-white shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{
                    boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
                  }}>
                  <Radio className="w-3 h-3" />
                  <span>HOST</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop carousel format
  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Navigation Buttons - Desktop Only */}
      <button
        onClick={handlePrevious}
        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-primary border-4 border-white/20 hover:scale-110 transition-transform shadow-lg shadow-primary/30"
        aria-label="Previous game"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={handleNext}
        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-primary border-4 border-white/20 hover:scale-110 transition-transform shadow-lg shadow-primary/30"
        aria-label="Next game"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Scrollable Game Container */}
      <div className="relative flex-1 flex items-center">
        {/* Left Scroll Indicator */}
        {showLeftArrow && (
          <button
            onClick={handlePrevious}
            className="absolute left-0 sm:left-2 z-20 md:hidden p-2 hover:scale-110 transition-transform cursor-pointer"
            aria-label="Scroll left"
          >
            <div className="relative">
              <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg" style={{
                animation: 'bounce-horizontal 1.5s ease-in-out infinite',
                filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))'
              }} />
              <ChevronLeft className="w-8 h-8 text-white absolute inset-0 opacity-40 blur-md" style={{
                animation: 'bounce-horizontal 1.5s ease-in-out infinite 0.2s'
              }} />
            </div>
          </button>
        )}
        
        {/* Right Scroll Indicator */}
        {showRightArrow && (
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 z-20 md:hidden p-2 hover:scale-110 transition-transform cursor-pointer"
            aria-label="Scroll right"
          >
            <div className="relative">
              <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" style={{
                animation: 'bounce-horizontal 1.5s ease-in-out infinite',
                filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))'
              }} />
              <ChevronRight className="w-8 h-8 text-white absolute inset-0 opacity-40 blur-md" style={{
                animation: 'bounce-horizontal 1.5s ease-in-out infinite 0.2s'
              }} />
            </div>
          </button>
        )}
        
        <div
          ref={scrollRef}
          onScroll={updateCenterIndex}
          className="flex-1 flex gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide items-center"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollPaddingLeft: '50%',
            scrollPaddingRight: '50%',
          }}
        >
        {/* Left spacer for proper centering */}
        <div className="flex-shrink-0 w-[calc(50vw-37.5vw)] lg:w-[calc(50vw-200px)]" />
        
        {infiniteGames.map((game, index) => {
          const actualIndex = getActualIndex(index);
          return (
            <div
              key={`${game.title}-${index}`}
              ref={(el) => { itemRefs.current[index] = el; }}
                  className={`flex-shrink-0 snap-center transition-all duration-500 ${
                    centerIndex === index
                      ? 'w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[400px] scale-100 opacity-100'
                      : 'w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[400px] scale-75 opacity-40'
                  }`}
            >
              <GameCard
                title={game.title}
                status={game.status}
                image={game.image}
                link={game.link}
                quarter={game.quarter}
                featured={centerIndex === index}
              />
            </div>
          );
        })}
        
        {/* Right spacer for proper centering */}
        <div className="flex-shrink-0 w-[calc(50vw-37.5vw)] lg:w-[calc(50vw-200px)]" />
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 py-4 flex-shrink-0">
        {games.map((_, index) => {
          const isActive = getActualIndex(centerIndex) === index;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                isActive
                  ? 'w-8 h-3 bg-primary shadow-lg shadow-primary/50'
                  : 'w-3 h-3 bg-zinc-700 hover:bg-zinc-600'
              }`}
              aria-label={`Go to game ${index + 1}`}
            />
          );
        })}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }
      `}</style>
    </div>
  );
}
