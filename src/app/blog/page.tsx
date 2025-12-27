import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

export default function Blog() {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "INTRODUCING BEACON BLOCKBUSTERS",
      date: "December 15, 2024",
      author: "Beacon Team",
      excerpt: "We're excited to announce Beacon Blockbusters - our new platform for community engagement games. Join the arcade revolution!",
    },
    {
      id: 2,
      title: "BORDERLAND IS NOW LIVE",
      date: "December 20, 2024",
      author: "Beacon Team",
      excerpt: "Our first official Beacon Blockbuster game is now live! Borderland brings mystery and strategy to your community.",
    },
    {
      id: 3,
      title: "COMING SOON: SQUID GAME",
      date: "December 22, 2024",
      author: "Beacon Team",
      excerpt: "Get ready for our next big release! Squid Game will challenge your community like never before.",
    },
    {
      id: 4,
      title: "HOW TO CREATE YOUR OWN GAME",
      date: "December 25, 2024",
      author: "Community Team",
      excerpt: "Want to create your own community game? Here's a step-by-step guide to getting started with the Beacon platform.",
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
                <h3 className="arcade-title text-[0.8rem] sm:text-[1rem] text-accent">
                  {post.title}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    <span className="arcade-font text-[0.5rem] text-zinc-500">
                      {post.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 text-zinc-500" />
                    <span className="arcade-font text-[0.5rem] text-zinc-500">
                      {post.author}
                    </span>
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

