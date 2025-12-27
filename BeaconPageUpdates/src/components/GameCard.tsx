import { Badge } from "./ui/badge";
import { Circle, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GameCardProps {
  title: string;
  status: string;
  image: string;
  link?: string;
  featured?: boolean;
}

export function GameCard({ title, status, image, link, featured = false }: GameCardProps) {
  const isComingSoon = status === "LOCKED";
  
  const cardContent = (
    <div className="group relative">
      {/* Arcade Cabinet Body */}
      <div className={`relative bg-black border-8 ${
        isComingSoon ? 'border-zinc-700' : 'border-primary'
      } shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
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
        <div className={`relative ${
          isComingSoon 
            ? 'bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700' 
            : 'bg-gradient-to-r from-primary via-accent to-secondary'
        } p-6 border-b-4 ${isComingSoon ? 'border-zinc-700' : 'border-primary'}`}>
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
          } text-sm sm:text-base ${
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

        {/* Status Badge */}
        <div className="absolute top-20 right-4 z-20">
          <Badge 
            variant={status === "Live Now" ? "default" : "secondary"} 
            className={`arcade-font text-[0.5rem] ${
              status === "Live Now" 
                ? 'bg-accent text-accent-foreground border-2 border-accent shadow-lg shadow-accent/50 animate-pulse' 
                : 'bg-zinc-800 text-zinc-400 border-2 border-zinc-700'
            }`}
          >
            {status}
          </Badge>
        </div>

        {/* Screen Area */}
        <div className="p-8 bg-black">
          <div className="relative border-8 border-zinc-900 shadow-2xl shadow-black/50 overflow-hidden"
            style={{
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)',
            }}>
            {/* CRT Screen */}
            <div className="relative aspect-[4/3] bg-black">
              <ImageWithFallback 
                src={image}
                alt={title}
                className={`w-full h-full object-cover ${
                  isComingSoon ? 'grayscale opacity-40' : ''
                }`}
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
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <div className="arcade-font text-zinc-500 text-xs sm:text-sm text-center px-4">
                    LOCKED
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="relative bg-gradient-to-b from-zinc-800 to-black border-t-4 border-zinc-700 p-6">
          {/* Control Panel Angle */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/20 to-transparent pointer-events-none" />
          
          <div className="flex items-center justify-center gap-6 relative z-10">
            {/* Arcade Buttons */}
            <div className="flex gap-3">
              <div className={`relative w-10 h-10 rounded-full ${
                isComingSoon ? 'bg-zinc-700' : 'bg-primary'
              } shadow-lg border-4 border-zinc-900 ${
                isComingSoon ? '' : 'transition-all duration-200 hover:scale-110'
              }`}
                style={{
                  boxShadow: isComingSoon 
                    ? 'inset 0 -4px 8px rgba(0,0,0,0.5)' 
                    : '0 0 20px rgba(255, 51, 51, 0.6), inset 0 -4px 8px rgba(0,0,0,0.5)',
                }}>
                {!isComingSoon && (
                  <div className="absolute inset-2 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                )}
              </div>
              <div className={`relative w-10 h-10 rounded-full ${
                isComingSoon ? 'bg-zinc-700' : 'bg-accent'
              } shadow-lg border-4 border-zinc-900`}
                style={{
                  boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.5)',
                }}>
                {!isComingSoon && (
                  <div className="absolute inset-2 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                )}
              </div>
              <div className={`relative w-10 h-10 rounded-full ${
                isComingSoon ? 'bg-zinc-700' : 'bg-secondary'
              } shadow-lg border-4 border-zinc-900`}
                style={{
                  boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.5)',
                }}>
                {!isComingSoon && (
                  <div className="absolute inset-2 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                )}
              </div>
            </div>
            
            {/* Start Button / Coin Slot */}
            {link ? (
              <div className="arcade-font text-[0.6rem] flex items-center gap-2 px-4 py-2 bg-primary border-2 border-primary shadow-lg transition-all duration-200 group-hover:scale-105"
                style={{
                  boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
                }}>
                <Play className="w-3 h-3" />
                <span>START</span>
              </div>
            ) : (
              <div className="arcade-font text-[0.6rem] flex items-center gap-2 px-4 py-2 bg-zinc-800 border-2 border-zinc-700 shadow-lg opacity-50"
                style={{
                  boxShadow: 'inset 0 -3px 5px rgba(0,0,0,0.4)',
                }}>
                <Circle className="w-3 h-3" />
                <span>LOCKED</span>
              </div>
            )}
          </div>

          {/* Coin Slot Detail */}
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-4 bg-black border-2 border-zinc-700 rounded-sm shadow-inner" />
          </div>
        </div>

        {/* Base */}
        <div className="h-3 bg-gradient-to-b from-zinc-900 to-black border-t border-zinc-800" />
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
