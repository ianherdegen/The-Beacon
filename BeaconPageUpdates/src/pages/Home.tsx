import { GameCarousel } from "../components/GameCarousel";

export function Home() {
  const games = [
    {
      title: "BORDERLAND",
      status: "Live Now",
      image: "https://images.unsplash.com/photo-1571619243106-f5d5334abd9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5aW5nJTIwY2FyZHMlMjBteXN0ZXJ5fGVufDF8fHx8MTc2MDM4NjcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "https://borderland.thebeaconhq.com"
    },
    {
      title: "SQUID GAME",
      status: "LOCKED",
      image: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBsaWdodCUyMGdhbWV8ZW58MXx8fHwxNzYwMzg2NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "SURVIVOR",
      status: "LOCKED",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGJlYWNofGVufDF8fHx8MTc2MDM4NjcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "AMAZING RACE",
      status: "LOCKED",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcmFjZSUyMGNoZWNrcG9pbnR8ZW58MXx8fHwxNzYwMzg2NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];
  
  return (
    <main className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 sm:mb-16 md:mb-20">
        <div className="text-center space-y-6">
          <h2 className="arcade-title text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
            BEACON BLOCKBUSTERS
          </h2>
          <p className="arcade-font text-[0.6rem] sm:text-[0.7rem] text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            OFFICIAL BEACON HQ GAMES
          </p>
        </div>
      </section>

      {/* Game Carousel */}
      <section className="w-full overflow-hidden">
        <GameCarousel games={games} />
      </section>
    </main>
  );
}