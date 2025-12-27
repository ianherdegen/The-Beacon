export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative border-t-2 border-zinc-800 mt-12 sm:mt-16 md:mt-20 lg:mt-28">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-lg shadow-secondary/50" style={{ animationDelay: '0.6s' }} />
          </div>
          <p className="arcade-font text-[0.5rem] sm:text-[0.6rem] text-zinc-500">
            © {currentYear} THE BEACON HQ
          </p>
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-lg shadow-secondary/50" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}

