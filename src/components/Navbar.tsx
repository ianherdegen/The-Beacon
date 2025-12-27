'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/browse', label: 'BROWSE' },
    { path: '/scoreboard', label: 'SCOREBOARD' },
    { path: '/blog', label: 'BLOG' },
  ]
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }
  
  return (
    <header className="relative border-b-2 border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="arcade-title text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              THE BEACON HQ
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`arcade-font text-[0.5rem] lg:text-[0.6rem] px-3 py-2 transition-all duration-300 border-2 ${
                  isActive(item.path)
                    ? 'border-red-500 text-red-500 shadow-lg shadow-red-500/50'
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
            className="md:hidden p-2 border-2 border-zinc-700 text-zinc-500 hover:border-accent hover:text-accent transition-all duration-300 relative"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4 pt-4 border-t-2 border-zinc-800' : 'max-h-0 opacity-0 mt-0 pt-0 border-t-0'
        }`}>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`arcade-font text-[0.5rem] px-3 py-2 transition-all duration-300 border-2 text-center ${
                  isActive(item.path)
                    ? 'border-red-500 text-red-500 shadow-lg shadow-red-500/50'
                    : 'border-zinc-700 text-zinc-500 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

