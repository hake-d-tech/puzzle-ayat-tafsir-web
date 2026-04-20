import { Outlet } from "react-router";
import { Link } from "react-router";
import { BookOpen } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] text-gray-800 font-sans flex flex-col">
      <header className="sticky top-0 z-50 bg-[#1B8A6B] text-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-wide">
            <BookOpen className="w-6 h-6 text-[#D4A843]" />
            <span>Puzzle Ayat Tafsir</span>
          </Link>
          <nav>
            <Link to="/" className="text-white/90 hover:text-[#D4A843] transition-colors text-sm font-medium mr-4">Home</Link>
            <Link to="/privacy-policy" className="text-white/90 hover:text-[#D4A843] transition-colors text-sm font-medium">Privacy</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-[#1B8A6B] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <BookOpen className="w-5 h-5 text-[#D4A843]" />
            <span>Puzzle Ayat Tafsir</span>
          </div>
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Puzzle Ayat Tafsir. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-white/90">
            <a href="mailto:hakedtech.contact@gmail.com" className="hover:text-[#D4A843] transition-colors">Contact</a>
            <Link to="/privacy-policy" className="hover:text-[#D4A843] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
