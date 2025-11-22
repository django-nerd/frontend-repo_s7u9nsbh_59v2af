import { Cpu, Brain, Camera, BatteryCharging, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'On‑device AI',
    desc: 'A next‑gen neural engine custom‑built to run large models privately and instantly.'
  },
  {
    icon: Cpu,
    title: 'A28 Fusion Pro',
    desc: 'Tri‑cluster architecture with ray‑trace GPU for fluid 3D and spatial rendering.'
  },
  {
    icon: Camera,
    title: 'Quantum Camera',
    desc: '1.2μm Quad Pixel sensor with nocturnal vision and adaptive bokeh.'
  },
  {
    icon: BatteryCharging,
    title: 'Week‑long battery',
    desc: 'Graphene‑cooling and silicon‑anode cells deliver ultra‑efficient endurance.'
  },
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="text-blue-300/90 font-medium tracking-widest uppercase mb-3">Features</p>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Built for an AI world</h3>
          <p className="mt-4 text-blue-100/80 max-w-2xl mx-auto">Everything from silicon to software is designed for on‑device intelligence, privacy, and speed.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-blue-400/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                <Icon size={26} />
              </div>
              <h4 className="mt-5 text-white text-lg font-semibold">{title}</h4>
              <p className="mt-2 text-blue-100/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
