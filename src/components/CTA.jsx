function CTA() {
  return (
    <section id="buy" className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-12">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <h3 className="text-4xl md:text-5xl font-bold text-white">Pre‑order iPhone 28 Pro Max</h3>
          <p className="mt-4 text-blue-100/80 max-w-2xl mx-auto">
            Be among the first to experience adaptive AI, spatial display, and all‑day performance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="px-8 py-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors" href="#">Choose color</a>
            <a className="px-8 py-4 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors" href="#">Compare models</a>
          </div>

          <p className="mt-6 text-sm text-blue-200/70">Free shipping • Easy returns • 2‑year warranty</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
