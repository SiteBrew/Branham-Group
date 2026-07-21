import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')`,
        }}
        role="img"
        aria-label="Aerial view of solar panels on a commercial rooftop"
      />
      {/* Base dark overlay for overall contrast */}
      <div className="absolute inset-0 bg-charcoal/70" />
      {/* Stronger gradient from left where text lives */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-16 w-full">
        <div className="max-w-2xl">
          <p className="text-gold font-semibold uppercase tracking-[0.25em] text-sm mb-4 drop-shadow">
            Engineering · Procurement · Construction
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 drop-shadow-lg">
            Clean Energy &amp;<br />
            <span className="text-gold">Resilient</span><br />
            Infrastructure
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl drop-shadow">
            The Southeast's trusted EPC partner since 1979. Serving South Carolina,
            North Carolina, Georgia, and Florida — we engineer, procure, and construct
            renewable energy systems and critical infrastructure built to perform for decades.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-gold flex items-center gap-2">
              Explore Our Services <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl">
          {[
            { value: '45+', label: 'Years of Excellence' },
            { value: '100+', label: 'Projects Delivered' },
            { value: '2nd Gen', label: 'Family-Owned Business' },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-gold pl-4">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
