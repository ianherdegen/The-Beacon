import Link from 'next/link'
import { ArrowLeft, Calendar, Trophy } from 'lucide-react'

interface PlayerProfilePageProps {
  params: Promise<{
    playerId: string
  }>
}

export default async function PlayerProfile({ params }: PlayerProfilePageProps) {
  const { playerId } = await params

  // Mock player data - in a real app, this would be fetched based on playerId
  const playerData: Record<string, {
    username: string
    gamesPlayed: number
    joinDate: string
  }> = {
    "1": { username: "PHOENIX_MASTER", gamesPlayed: 12, joinDate: "Nov 2024" },
    "2": { username: "SHADOW_HUNTER", gamesPlayed: 10, joinDate: "Nov 2024" },
    "3": { username: "NEON_WARRIOR", gamesPlayed: 9, joinDate: "Dec 2024" },
    "4": { username: "PIXEL_KING", gamesPlayed: 8, joinDate: "Nov 2024" },
    "5": { username: "CYBER_QUEEN", gamesPlayed: 7, joinDate: "Dec 2024" },
    "6": { username: "RETRO_GAMER", gamesPlayed: 6, joinDate: "Nov 2024" },
    "7": { username: "ARCADE_ACE", gamesPlayed: 5, joinDate: "Dec 2024" },
    "8": { username: "GAME_MASTER", gamesPlayed: 5, joinDate: "Dec 2024" },
    "9": { username: "COMBO_BREAKER", gamesPlayed: 4, joinDate: "Dec 2024" },
    "10": { username: "FLASH_FIRE", gamesPlayed: 4, joinDate: "Dec 2024" },
  }

  const player = playerData[playerId]

  // Mock game history
  const gameHistory = [
    { game: "BORDERLAND", date: "Dec 27, 2024", result: "Completed" },
    { game: "BORDERLAND", date: "Dec 25, 2024", result: "Completed" },
    { game: "BORDERLAND", date: "Dec 23, 2024", result: "Completed" },
    { game: "BORDERLAND", date: "Dec 20, 2024", result: "Completed" },
    { game: "BORDERLAND", date: "Dec 18, 2024", result: "Completed" },
  ]

  if (!player) {
    return (
      <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="arcade-font text-[0.7rem] text-zinc-500">PLAYER NOT FOUND</p>
          <Link
            href="/scoreboard"
            className="arcade-font text-[0.5rem] text-accent hover:text-primary mt-4 inline-block"
          >
            ← BACK TO SCOREBOARD
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
          href="/scoreboard"
          className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500 hover:text-accent transition-colors flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO SCOREBOARD
        </Link>

        {/* Player Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-16">
          <div className="inline-block bg-zinc-900 border-4 border-accent p-6 sm:p-8 relative">
            {/* Scan Line Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`
            }} />
            
            <div className="relative">
              <h1 className="arcade-title text-xl sm:text-2xl md:text-3xl text-accent">
                {player.username}
              </h1>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 border-4 border-zinc-700 p-6 text-center">
            <div className="flex justify-center mb-3">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <p className="arcade-font text-[0.5rem] text-zinc-500 mb-2">GAMES PLAYED</p>
            <p className="arcade-font text-[1.5rem] text-primary">{player.gamesPlayed}</p>
          </div>

          <div className="bg-zinc-900 border-4 border-zinc-700 p-6 text-center">
            <div className="flex justify-center mb-3">
              <Calendar className="w-6 h-6 text-accent" />
            </div>
            <p className="arcade-font text-[0.5rem] text-zinc-500 mb-2">JOINED</p>
            <p className="arcade-font text-[0.7rem] text-accent">{player.joinDate}</p>
          </div>
        </div>

        {/* Game History */}
        <div className="bg-zinc-900 border-4 border-zinc-700 overflow-hidden">
          {/* Section Header */}
          <div className="bg-zinc-800 border-b-4 border-zinc-700 p-4">
            <h2 className="arcade-font text-[0.7rem] text-secondary">GAME HISTORY</h2>
          </div>

          {/* History Entries */}
          <div className="divide-y-2 divide-zinc-800">
            {gameHistory.map((entry, index) => (
              <div
                key={index}
                className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-4 items-center hover:bg-zinc-800/50 transition-all duration-300"
              >
                {/* Game Name */}
                <div>
                  <p className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-300">
                    {entry.game}
                  </p>
                </div>

                {/* Date */}
                <div className="text-right sm:text-center">
                  <p className="arcade-font text-[0.45rem] sm:text-[0.5rem] text-zinc-500">
                    {entry.date}
                  </p>
                </div>

                {/* Result */}
                <div className="hidden sm:block text-right">
                  <p className="arcade-font text-[0.45rem] sm:text-[0.5rem] text-accent">
                    {entry.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative pixels */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 bg-primary animate-pulse" />
          <div className="w-3 h-3 bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-3 h-3 bg-secondary animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </main>
  )
}

