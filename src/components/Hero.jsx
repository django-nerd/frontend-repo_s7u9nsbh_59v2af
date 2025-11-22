import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <p className="text-blue-300/90 font-medium tracking-widest uppercase mb-4">Beyond smart. It’s intuitive.</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
            iPhone 28 Pro Max
          </h2>
          <p className="mt-6 text-lg text-blue-100/90 max-w-xl">
            Experience the future with an AI-first phone that learns you. Powered by a neural engine that adapts in real-time, a cinematic 3D display, and a camera that sees in the dark.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#buy" className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">Pre-order</a>
            <a href="#features" className="px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors">Explore features</a>
          </div>
          <p className="mt-4 text-sm text-blue-200/70">Ships with iOS 22. AI Studio included.</p>
        </div>

        <div className="h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
          {/* Replace with your own Spline scene URL for a 3D phone model */}
          <Spline scene="https://prod.spline.design/tw7S6R6b5gA9E7e3/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}

export default Hero
