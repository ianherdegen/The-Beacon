import { useState, useRef, useEffect, useCallback } from "react";
import { GameCard } from "./GameCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Game {
  title: string;
  status: string;
  image: string;
  link?: string;
}

interface GameCarouselProps {
  games: Game[];
}

export function GameCarousel({ games }: GameCarouselProps) {
  const [centerIndex, setCenterIndex] = useState(games.length); // Start at first item of middle set
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Create infinite scroll by tripling the games array
  const infiniteGames = [...games, ...games, ...games];

  const getActualIndex = (index: number) => {
    return index % games.length;
  };

  const updateCenterIndex = useCallback(() => {
    if (!scrollRef.current || isScrollingRef.current) return;
    
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
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
  }, [games.length]);

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

  useEffect(() => {
    // Initialize to first item of middle set after a short delay
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

  return (
    <div className="relative w-full">
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
      <div
        ref={scrollRef}
        onScroll={updateCenterIndex}
        className="flex gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollPaddingLeft: '50%',
          scrollPaddingRight: '50%',
        }}
      >
        {/* Left spacer for proper centering */}
        <div className="flex-shrink-0 w-[calc(50vw-42.5vw)] lg:w-[calc(50vw-250px)]" />
        
        {infiniteGames.map((game, index) => {
          const actualIndex = getActualIndex(index);
          return (
            <div
              key={`${game.title}-${index}`}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`flex-shrink-0 snap-center transition-all duration-500 ${
                centerIndex === index
                  ? 'w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[500px] scale-100 opacity-100'
                  : 'w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[500px] scale-75 opacity-40'
              }`}
            >
              <GameCard
                title={game.title}
                status={game.status}
                image={game.image}
                link={game.link}
                featured={centerIndex === index}
              />
            </div>
          );
        })}
        
        {/* Right spacer for proper centering */}
        <div className="flex-shrink-0 w-[calc(50vw-42.5vw)] lg:w-[calc(50vw-250px)]" />
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
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
      `}</style>
    </div>
  );
}
