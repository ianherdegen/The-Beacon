import Link from 'next/link'
import { User } from 'lucide-react'

export default function Scoreboard() {
  // Mock player data - simplified to just players and games played
  const players: { id: string; username: string; gamesPlayed: number }[] = []

  return (
    <main className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-16">
          <h2 className="arcade-title text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
            SCOREBOARD
          </h2>
          <p className="arcade-font text-[0.6rem] sm:text-[0.7rem] text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            BEACON BLOCKBUSTER PLAYERS
          </p>
        </div>

        {/* Empty State */}
        {players.length === 0 && (
          <div className="bg-zinc-900 border-4 border-zinc-700 p-12 sm:p-16 text-center">
            <div className="space-y-6">
              <User className="w-16 h-16 text-zinc-700 mx-auto" />
              <p className="text-base text-zinc-400 max-w-md mx-auto">
                Player stats and game history will appear here.
              </p>
            </div>
          </div>
        )}

        {/* Players List */}
        {players.length > 0 && (
          <>
            {/* Info Banner */}
            <div className="bg-zinc-900 border-4 border-primary p-4 sm:p-6 mb-8 sm:mb-12">
              <div className="space-y-2">
                <p className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-primary">
                  ⚡ CLICK PLAYER TO VIEW THEIR PROFILE
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 border-4 border-zinc-700 overflow-hidden">
              {/* Table Header */}
              <div className="bg-zinc-800 border-b-4 border-zinc-700 p-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="arcade-font text-[0.5rem] text-zinc-400">PLAYER</p>
                </div>
                <div className="text-right">
                  <p className="arcade-font text-[0.5rem] text-zinc-400">GAMES PLAYED</p>
                </div>
              </div>

              {/* Player Entries */}
              <div className="divide-y-2 divide-zinc-800">
                {players.map((player) => (
                  <Link
                    key={player.id}
                    href={`/player/${player.id}`}
                    className="p-4 grid grid-cols-2 gap-4 items-center transition-all duration-300 hover:bg-zinc-800/50 hover:border-l-4 hover:border-l-accent group block"
                  >
                    {/* Player Name */}
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-zinc-600 group-hover:text-accent transition-colors" />
                      <p className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-300 group-hover:text-accent transition-colors">
                        {player.username}
                      </p>
                    </div>

                    {/* Games Played */}
                    <div className="text-right">
                      <p className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-primary">
                        {player.gamesPlayed}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="arcade-font text-[0.45rem] text-zinc-600 leading-relaxed">
                DATA UPDATES WEEKLY
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

