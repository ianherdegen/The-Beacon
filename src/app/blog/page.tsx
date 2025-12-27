import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Beacon | Hyperlocal Live Gaming | Blog',
  description: 'Updates and stories from The Beacon - Hyperlocal Live Gaming platform.',
}

export default function Blog() {
  // Blog posts data
  const blogPosts = [
    {
      id: 3,
      title: "HELP US BUILD BORDERLAND | SUMMER 2026",
      date: "December 24, 2025",
      author: "Pixasso",
      excerpt: "We're building Borderland as a tightly curated 4-hour live game, and we need game designers, partners, volunteers, vendors, and game creators to help make it epic.",
    },
    {
      id: 2,
      title: "WE RAN A REAL WORLD ALICE IN BORDERLAND GAME",
      date: "December 18, 2025",
      author: "Pixasso",
      excerpt: "A month-long survival tournament in Detroit. Players competed in live challenges, but what emerged was stories, strategy, and genuine human connections.",
    },
    {
      id: 1,
      title: "FINDING COMMUNITY IN THE REAL WORLD",
      date: "December 9, 2025",
      author: "Pixasso",
      excerpt: "When joining a group has more friction than paying for OnlyFans, something's broken. The Beacon: hyperlocal live games that let strangers become equals through play.",
    },
  ]

  return (
    <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-16">
          <h2 className="arcade-title text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            BEACON BLOG
          </h2>
          <p className="arcade-font text-[0.6rem] sm:text-[0.7rem] text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            UPDATES • STORIES
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8 sm:space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-zinc-900 border-4 border-zinc-700 hover:border-primary p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative"
            >
              {/* Scan Line Effect */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
              }} />
              
              <div className="relative space-y-4">
                {/* Title */}
                <Link href={`/blog/${post.id}`}>
                  <h3 className="arcade-title text-[0.8rem] sm:text-[1rem] text-accent hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                </Link>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    <span className="arcade-font text-[0.5rem] text-zinc-500">
                      {post.date}
                    </span>
                  </div>
                  <div className="arcade-font text-[0.5rem] text-zinc-500">
                    by <a href="https://www.linkedin.com/in/pixasso" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Pixasso</a>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-base text-zinc-300 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <Link 
                  href={`/blog/${post.id}`}
                  className="arcade-font text-[0.5rem] px-4 py-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 inline-block"
                >
                  READ MORE
                </Link>

                {/* Decorative pixels */}
                <div className="flex gap-1 pt-2">
                  <div className="w-2 h-2 bg-primary animate-pulse" />
                  <div className="w-2 h-2 bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-secondary animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="arcade-font text-[0.7rem] text-zinc-600">
              NO POSTS YET
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

