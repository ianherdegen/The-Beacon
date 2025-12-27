import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{
    postId: string
  }>
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { postId } = await params

  // Blog posts data with full content
  const blogPosts: Record<string, {
    id: number
    title: string
    date: string
    author: string
    excerpt: string
    headerImage: string
    content: React.ReactNode
  }> = {
    "3": {
      id: 3,
      title: "HELP US BUILD BORDERLAND | SUMMER 2026",
      date: "December 24, 2025",
      author: "Pixasso",
      excerpt: "We're building Borderland as a tightly curated 4-hour live game, and we need game designers, partners, volunteers, vendors, and game creators to help make it epic.",
      headerImage: "/images/blog/blog-3-header.jpg", // Recommended size: 1200x630px (16:9 aspect ratio)
      content: (
        <>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            We need your help for The Beacon&apos;s first <span className="font-semibold">&quot;Blockbuster&quot; Game</span>.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            <span className="font-semibold">Borderland | Summer 2026</span>
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            We are building Borderland as a tightly curated 4-hour live game. <a href="https://borderland.thebeaconhq.com" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Learn more about Borderland</a>.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            This one is being shaped with the community.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            3 ASKS
          </h2>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            1) GAME DESIGNERS & GAME DEVS
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            How do we make this game as epic as possible?
          </p>
          <ul className="mb-4 text-base text-zinc-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
            <li>You do <span className="font-semibold">NOT</span> need to know how to code</li>
            <li>Inspired by Alice in Borderland</li>
            <li>Physical, social, strategic, chaotic, cooperative games</li>
            <li>Crowd-sourced ideas &gt; closed design</li>
          </ul>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            <a href="https://borderland.thebeaconhq.com/deck" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Submit your ideas here</a>.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            2) PARTNERS, VOLUNTEERS, & VENDORS
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            We need people to help make the event actually happen.
          </p>
          <ul className="mb-4 text-base text-zinc-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
            <li>Game Designers</li>
            <li>Vendors (Food, Drink, Merch)</li>
            <li>Production Designers (Lighting, Sound, Decor…)</li>
            <li>Platform Developers</li>
            <li>Social Media Marketing</li>
          </ul>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            <a href="https://borderland.thebeaconhq.com/collaborate" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Collaborate here</a>.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            3) GAME CREATORS
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            We are running a competition for our next Beacon Blockbuster.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed font-semibold">
            YOUR GAME CONCEPT. BEACON-LEVEL PRODUCTION.
          </p>
          <ul className="mb-4 text-base text-zinc-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
            <li>Submit your live gaming concept</li>
            <li>Winner gets a massive event space</li>
            <li>Full Beacon team behind it</li>
            <li>Players. Production. Promotion.</li>
          </ul>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            <a href="https://borderland.thebeaconhq.com/creator-competition" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Enter the Creator Competition here</a>.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            JOIN US
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Our Borderland Playtest in Detroit proved this works.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Now we are building the version that sets the bar.
          </p>
        </>
      )
    },
    "2": {
      id: 2,
      title: "WE RAN A REAL WORLD ALICE IN BORDERLAND GAME",
      date: "December 18, 2025",
      author: "Pixasso",
      excerpt: "A month-long survival tournament in Detroit. Players competed in live challenges, but what emerged was stories, strategy, and genuine human connections.",
      headerImage: "/images/blog/blog-2-header.jpg", // Recommended size: 1200x630px (16:9 aspect ratio)
      content: (
        <>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            In October, we ran a month-long live play-test for The Beacon at the Russell Industrial Center in Detroit. The game was called Borderland, directly inspired by Netflix&apos;s AIB.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            THE BORDERLAND PLAYTEST
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Borderland was a hyperlocal, real-world survival tournament. Players competed in live challenges to extend their <span className="font-semibold">&quot;Visa ⏳&quot;</span>, their right to remain in the game. Every 3 days, players had to complete at least 1 game or they were automatically eliminated. Visa countdowns were visible publicly, and players received warnings before expiration.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            HOW THE GAME WORKED
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Each day, different Arenas activated, offering 3 types of games:
          </p>

          <h3 className="arcade-title text-[0.7rem] sm:text-[0.8rem] text-accent mb-3 mt-6">
            Game Types
          </h3>
          <ul className="mb-4 text-base text-zinc-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
            <li><span className="font-semibold">🕹️ Solo Games:</span> Individual missions or 1-on-1 challenges against a &quot;Borderland Citizen&quot;</li>
            <li><span className="font-semibold">⚔️ Versus Games:</span> Head-to-head competition where only some survived</li>
            <li><span className="font-semibold">🤝 Group Games:</span> Team-based trials where everyone lived or everyone was eliminated</li>
          </ul>

          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            As the month came to a close, a final arena activated. Remaining players entered a last-player-standing Versus Game. <span className="font-semibold">1 champion emerged.</span>
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            WHAT STOOD OUT
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            What stood out wasn&apos;t just the gameplay, but the stories. &quot;Near-death moments&quot;, psychological strategy, funny failures, and genuinely human connections between strangers. The game evolved as players learned how to play it together.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            That experiment led directly to The Beacon - a public platform for <span className="font-semibold">Hyperlocal Live Games</span>, real-world gaming experiences where cities, neighborhoods, and everyday spaces become the arena. Instead of screens separating people, Beacon connects players face-to-face through live challenges powered by simple digital systems.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            THE BEACON PLATFORM
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Hyperlocal Live Gaming means games that:
          </p>

          <h3 className="arcade-title text-[0.7rem] sm:text-[0.8rem] text-accent mb-3 mt-6">
            Hyperlocal Live Gaming
          </h3>
          <ul className="mb-4 text-base text-zinc-300 leading-relaxed list-disc list-inside space-y-2 ml-4">
            <li>Happen in real locations like parks, cafés, rooftops, and warehouses</li>
            <li>Sync players and events live in real time</li>
            <li>Are community-driven and locally hosted</li>
          </ul>

          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Think of it as the intersection of gaming, events, and urban exploration.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            The Beacon is being built as a public platform. If you have a live game or real-world experience you want to share, we want it on Beacon. One might compare it to <a href="https://itch.io" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">itch.io</a>, but for live gaming. The goal is to make publishing, hosting, and replicating IRL games as frictionless as possible for anyone.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            BLOCKBUSTER GAMES
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Alongside creator-built games, we&apos;re also planning to produce official Beacon &quot;<span className="font-semibold">Blockbuster</span>&quot; Games twice a year. These will set the standard and provide templates others can replicate in their own communities.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            BORDERLAND | SUMMER 2026
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            The first is already in planning. <span className="font-semibold">Borderland | Summer 2026</span>
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            For this edition, Borderland is being designed as a tightly curated 4-hour live experience, distilling the most powerful moments of the month-long playtest into a single, high-impact event.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            GET INVOLVED
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Currently looking for volunteers, game designers, sound and lighting designers, keepsake creators, food and drink vendors, and interns in social media marketing and game development.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Learn more about <a href="https://borderland.thebeaconhq.com" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Borderland</a> or reach out via the inquiries page at <a href="https://thebeaconhq.com" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">TheBeaconHQ.com</a>.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed font-semibold">
            We need more real-world play.
          </p>
          
          {/* YouTube Video Embed */}
          <div className="my-6 flex justify-center">
            <div className="w-full max-w-3xl aspect-video bg-black border-2 border-zinc-700 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/_M3BK5rLiTo"
                title="Borderland Playtest Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </>
      )
    },
    "1": {
      id: 1,
      title: "FINDING COMMUNITY IN THE REAL WORLD",
      date: "December 9, 2025",
      author: "Pixasso",
      excerpt: "When joining a group has more friction than paying for OnlyFans, something's broken. The Beacon: hyperlocal live games that let strangers become equals through play.",
      headerImage: "/images/blog/blog-header-1.jpg", // Recommended size: 1200x630px (16:9 aspect ratio)
      content: (
        <>
          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            THE PROBLEM WITH MODERN COMMUNITY
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            I&apos;ve been thinking a lot about how hard it&apos;s become to find community in the real world. Many social spaces feel unintentionally gate-kept - by money, skill level, or just knowing the &quot;right&quot; people. And when there is more friction in joining a group than paying $10/month for an OnlyFans model to acknowledge your existence… well, something in our society is off (no disrespect to the OF models out there - get the bag).
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            ONE SMALL IDEA
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            I don&apos;t know if I can fix the world, but I do think I can contribute one small idea.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            I&apos;ve been building something called <a href="https://thebeaconhq.com" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">The Beacon</a> - a platform for hyperlocal live games that anyone can host. Think: real-world games inspired by blockbusters like Alice in Borderland or Survivor, but safe, creative, and made by regular people using templates.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            HOW IT WORKS
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            When people join a Beacon activation, the usual social hierarchies - backgrounds, job titles, who-knows-who - sort of fall away. Strangers become equals, teammates, explorers. The game does the connecting.
          </p>

          <h3 className="arcade-title text-[0.7rem] sm:text-[0.8rem] text-accent mb-3 mt-6">
            Early Testing
          </h3>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            We tested a small 17-player version in Detroit, and what surprised me wasn&apos;t just that people enjoyed it - it was that several immediately wanted to host their own. <span className="font-semibold">That felt like a signal that this might matter.</span>
          </p>

          <h3 className="arcade-title text-[0.7rem] sm:text-[0.8rem] text-accent mb-3 mt-6">
            What Makes It Different
          </h3>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Despite major top-down investments in immersive gaming - even <a href="https://finance.yahoo.com/news/gaming-become-next-revenue-pillar-183400667.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAIBgHPh2eQdtarY5zCnOpMnB10Z0esCapd16lOpGgVe08x6vmCosBKQFuOa7M65nwX1ZJi9AoDz1-UqP5sTtP2AaOWJQaYlO8I2VHXHZT0sSLEE_R0KakbBI-jeUS0nGsWSLtDdOfUhC9vg2RFz3iZRCQRiOjG_TJaN6YXjnpEjp" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">billions from companies like Netflix</a> - <span className="font-semibold">player-generated, community-driven games are still rare.</span> That&apos;s what feels truly new.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            A HUMBLE ASK
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            I&apos;m humbled by how much I still don&apos;t know. I&apos;m here to learn, to grow this concept thoughtfully, and to contribute something positive. If this resonates - I&apos;d love to connect.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Thank you for reading this far. Truly.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            P.S. THE THIRD DOOR
          </h2>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Sometimes you have to find the &quot;third door&quot; to get noticed, so I set up a Banksy-style display at the YC office. I couldn&apos;t resist taking a page from Apoorva Mehta&apos;s playbook - after all, <a href="https://techcrunch.com/2012/08/18/how-instacart-hacked-yc/" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">he once delivered a case of beer to Garry Tan to showcase Instacart</a>.
          </p>
          <p className="mb-4 text-base text-zinc-300 leading-relaxed">
            Maybe don&apos;t try this at home, but do enjoy the video.
          </p>
          
          {/* YouTube Short Embed */}
          <div className="my-6 flex justify-center">
            <div className="w-full max-w-md aspect-[9/16] bg-black border-2 border-zinc-700 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/-E_jStITXn0"
                title="YouTube Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </>
      )
    },
  }

  const post = blogPosts[postId]

  if (!post) {
    return (
      <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="arcade-font text-[0.7rem] text-zinc-500">POST NOT FOUND</p>
          <Link
            href="/blog"
            className="arcade-font text-[0.5rem] text-accent hover:text-primary mt-4 inline-block"
          >
            ← BACK TO BLOG
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500 hover:text-accent transition-colors flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO BLOG
        </Link>

        {/* Blog Post */}
        <article className="bg-zinc-900 border-4 border-zinc-700 p-6 sm:p-8 lg:p-12 relative">
          {/* Scan Line Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
          }} />
          
          <div className="relative space-y-6">
            {/* Title */}
            <h1 className="arcade-title text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] text-accent">
              {post.title}
            </h1>

            {/* Header Image */}
            <div className="relative w-full aspect-video bg-zinc-800 border-2 border-zinc-700 overflow-hidden">
              <Image
                src={post.headerImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              {/* Scan Line Effect Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
              }} />
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pb-6 border-b-2 border-zinc-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <span className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500">
                  {post.date}
                </span>
              </div>
              <div className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500">
                by <a href="https://www.linkedin.com/in/pixasso" className="text-accent hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Pixasso</a>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-base text-zinc-300 leading-relaxed pb-6 border-b-2 border-zinc-800">
              {post.excerpt}
            </p>

            {/* Full Content */}
            <div className="pt-4">
              {post.content}
            </div>

            {/* Decorative pixels */}
            <div className="flex gap-2 pt-8">
              <div className="w-3 h-3 bg-primary animate-pulse" />
              <div className="w-3 h-3 bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-secondary animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

