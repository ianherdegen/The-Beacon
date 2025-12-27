import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";

export function BlogPost() {
  const { postId } = useParams();

  // Mock blog posts data with full content
  const blogPosts = {
    "1": {
      id: 1,
      title: "INTRODUCING BEACON BLOCKBUSTERS",
      date: "December 15, 2024",
      author: "Beacon Team",
      excerpt: "We're excited to announce Beacon Blockbusters - our new platform for community engagement games. Join the arcade revolution!",
      content: (
        <>
          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            WELCOME TO THE ARCADE
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Welcome to Beacon Blockbusters, where classic arcade nostalgia meets modern community engagement! 
            We're thrilled to introduce our revolutionary platform that brings people together through interactive gaming experiences.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            OUR MISSION
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Our mission is simple: create unforgettable moments of connection and competition within communities. 
            Whether you're organizing events for your church, campus, workplace, or neighborhood, Beacon Blockbusters 
            provides the tools and games to make it happen.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            WHAT TO EXPECT
          </h2>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Officially designed Beacon games like Borderland</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Community-created game concepts and submissions</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Classic arcade entertainment with modern engagement tools</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Simple to understand, exciting to play, impossible to forget</span>
            </li>
          </ul>

          <p className="mb-4 text-base text-zinc-300">
            Stay tuned as we roll out new games, features, and community tools. The arcade revolution starts now!
          </p>
        </>
      )
    },
    "2": {
      id: 2,
      title: "BORDERLAND IS NOW LIVE",
      date: "December 20, 2024",
      author: "Beacon Team",
      excerpt: "Our first official Beacon Blockbuster game is now live! Borderland brings mystery and strategy to your community.",
      content: (
        <>
          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            THE GAME IS LIVE
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            We're thrilled to announce that Borderland, our flagship Beacon Blockbuster game, is now officially 
            live at <a href="https://borderland.thebeaconhq.com" className="text-accent hover:text-primary transition-colors">borderland.thebeaconhq.com</a>!
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            WHAT IS BORDERLAND?
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Borderland is a community-wide game of strategy, deception, and alliance-building. Players must navigate 
            a world where trust is currency and every decision matters. The game is designed for groups of 20-100 
            participants and runs over several days or weeks.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            KEY FEATURES
          </h2>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Real-time gameplay with mobile-friendly interface</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Strategic alliances and betrayals</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Live scoreboard tracking</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Franchisee dashboard for game management</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Customizable rules and settings</span>
            </li>
          </ul>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            GET STARTED
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Franchisees can now host Borderland games for their communities. Visit our platform to learn more about 
            bringing this exciting experience to your group.
          </p>
          <p className="mb-4 text-base text-zinc-300">
            Get ready to test your strategy skills - Borderland awaits!
          </p>
        </>
      )
    },
    "3": {
      id: 3,
      title: "COMING SOON: SQUID GAME",
      date: "December 22, 2024",
      author: "Beacon Team",
      excerpt: "Get ready for our next big release! Squid Game will challenge your community like never before.",
      content: (
        <>
          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            THE NEXT BLOCKBUSTER
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            The next Beacon Blockbuster is in development, and it's going to be intense! Inspired by high-stakes 
            competition formats, our upcoming Squid Game experience will push players to their limits.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            WHAT WE CAN SHARE
          </h2>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Multiple rounds of elimination-style challenges</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Team and individual competition modes</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Interactive mobile gameplay</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Dramatic reveals and plot twists</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Spectator mode for eliminated players</span>
            </li>
          </ul>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            FEATURES & CUSTOMIZATION
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Squid Game will be our most ambitious project yet, combining physical challenges with digital tracking 
            and scoring. Franchisees will have complete control over challenge types and difficulty levels to match 
            their community.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            TIMELINE
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            <span className="text-accent">Expected release:</span> Early 2025
          </p>
          <p className="mb-4 text-base text-zinc-300">
            Stay tuned for beta testing opportunities!
          </p>
        </>
      )
    },
    "4": {
      id: 4,
      title: "HOW TO CREATE YOUR OWN GAME",
      date: "December 25, 2024",
      author: "Community Team",
      excerpt: "Want to create your own community game? Here's a step-by-step guide to getting started with the Beacon platform.",
      content: (
        <>
          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            BECOME A GAME CREATOR
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Have an idea for an amazing community game? The Beacon platform makes it possible to bring your vision to life! 
            Here's how to get started:
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            STEP 1: CONCEPTUALIZE YOUR GAME
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Think about what makes your game unique. Consider these questions:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>What's the core mechanic that drives gameplay?</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>How many players can participate?</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>How long does a typical game session last?</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>What are the rules and objectives?</span>
            </li>
          </ul>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            STEP 2: SUBMIT YOUR IDEA
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Visit our Browse Games page and click "Submit Your Game" to access our community submission form. 
            You'll need to share:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Game concept and unique selling points</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Target player count and demographics</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Estimated game duration</span>
            </li>
          </ul>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            STEP 3: COMMUNITY REVIEW
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Our team reviews submissions and works with creators to refine mechanics and ensure games work 
            within the Beacon platform framework. This collaborative process helps strengthen your concept.
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            STEP 4: DEVELOPMENT & TESTING
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Selected games move into development with support from our tech team. You'll work with us to:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Build out the digital components</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Test with focus groups</span>
            </li>
            <li className="flex gap-3 text-base text-zinc-300">
              <span className="text-accent">•</span>
              <span>Iterate based on feedback</span>
            </li>
          </ul>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            STEP 5: LAUNCH!
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Once tested and refined, your game joins the Beacon Blockbusters library for franchisees to host 
            with their communities. You'll see your creation come to life!
          </p>

          <h2 className="arcade-title text-[0.8rem] sm:text-[0.9rem] text-primary mb-4 mt-6">
            READY TO START?
          </h2>
          <p className="mb-4 text-base text-zinc-300">
            Submit your idea today and join the arcade revolution! Together, we're building the future of 
            community engagement games.
          </p>
        </>
      )
    },
  };

  const post = blogPosts[postId as keyof typeof blogPosts];

  if (!post) {
    return (
      <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="arcade-font text-[0.7rem] text-zinc-500">POST NOT FOUND</p>
          <Link
            to="/blog"
            className="arcade-font text-[0.5rem] text-accent hover:text-primary mt-4 inline-block"
          >
            ← BACK TO BLOG
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/blog"
          className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500 hover:text-accent transition-colors flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO BLOG
        </Link>

        {/* Blog Post */}
        <article className="bg-zinc-900 border-4 border-zinc-700 p-6 sm:p-8 lg:p-12">
          {/* Scan Line Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
          }} />
          
          <div className="relative space-y-6">
            {/* Title */}
            <h1 className="arcade-title text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] text-accent">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pb-6 border-b-2 border-zinc-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <span className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500">
                  {post.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-zinc-500" />
                <span className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500">
                  {post.author}
                </span>
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
  );
}