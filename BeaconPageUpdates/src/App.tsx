import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BrowseGames } from "./pages/BrowseGames";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Scoreboard } from "./pages/Scoreboard";
import { PlayerProfile } from "./pages/PlayerProfile";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        {/* Arcade Floor Pattern */}
        <div className="fixed inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 61px),
                           repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 61px)`
        }} />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseGames />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/player/:playerId" element={<PlayerProfile />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}