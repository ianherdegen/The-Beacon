import { ExternalLink, Upload, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function BrowseGames() {
  return (
    <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-16">
          <h2 className="arcade-title text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
            COMMUNITY GAMES
          </h2>
          <p className="arcade-font text-[0.6rem] sm:text-[0.7rem] text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            GAMES CREATED BY THE COMMUNITY
          </p>
        </div>

        {/* Link to Beacon Blockbusters */}
        <div className="flex justify-center mb-8">
          <Link
            to="/"
            className="arcade-font text-[0.6rem] sm:text-[0.7rem] px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white border-4 border-white/20 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/50 hover:shadow-secondary/50 flex items-center gap-3"
          >
            <Sparkles className="w-4 h-4" />
            VIEW BEACON BLOCKBUSTERS
          </Link>
        </div>

        {/* Submit Game Button */}
        <div className="flex justify-center mb-12">
          <a
            href="https://docs.google.com/forms"
            target="_blank"
            rel="noopener noreferrer"
            className="arcade-font text-[0.6rem] sm:text-[0.7rem] px-6 py-4 bg-gradient-to-r from-accent to-secondary text-black border-4 border-white/20 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/50 hover:shadow-secondary/50 flex items-center gap-3"
          >
            <Upload className="w-4 h-4" />
            SUBMIT YOUR GAME
          </a>
        </div>

        {/* Empty State - Your Game Could Be Here */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 border-4 border-dashed border-zinc-700 p-12 sm:p-16 text-center">
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
                BE THE FIRST TO SUBMIT A COMMUNITY GAME AND SEE IT FEATURED ON THE BEACON HQ
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
      </div>
    </main>
  );
}