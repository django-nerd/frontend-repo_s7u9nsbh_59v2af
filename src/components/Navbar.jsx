import { Menu } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg shadow-blue-500/30" />
          <div className="text-white">
            <p className="text-sm uppercase tracking-widest text-blue-300/80">Introducing</p>
            <h1 className="text-lg font-semibold">iPhone 28 Pro Max</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-blue-100/90">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#ai" className="hover:text-white transition-colors">AI</a>
          <a href="#design" className="hover:text-white transition-colors">Design</a>
          <a href="#buy" className="hover:text-white transition-colors">Buy</a>
        </nav>
        <button className="md:hidden p-2 text-white/80 hover:text-white">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
