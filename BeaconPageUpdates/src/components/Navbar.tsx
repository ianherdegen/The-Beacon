import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/browse", label: "BROWSE" },
    { path: "/blog", label: "BLOG" },
    { path: "/scoreboard", label: "SCOREBOARD" },
  ];
  
  return (
    <header className="relative border-b-2 border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="arcade-title text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              THE BEACON HQ
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`arcade-font text-[0.5rem] lg:text-[0.6rem] px-3 py-2 transition-all duration-300 border-2 ${
                  location.pathname === item.path
                    ? 'border-primary text-primary shadow-lg shadow-primary/50'
                    : 'border-zinc-700 text-zinc-500 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 border-2 border-zinc-700 text-zinc-500 hover:border-accent hover:text-accent transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t-2 border-zinc-800 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`arcade-font text-[0.5rem] px-3 py-2 transition-all duration-300 border-2 text-center ${
                  location.pathname === item.path
                    ? 'border-primary text-primary shadow-lg shadow-primary/50'
                    : 'border-zinc-700 text-zinc-500 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}