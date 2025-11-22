import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="py-10 border-t border-white/10 text-center text-blue-200/70">
        <p>© 2025 iPhone 28 Pro Max — Concept landing powered by AI</p>
      </footer>
    </div>
  )
}

export default App
