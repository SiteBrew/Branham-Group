const markets = [
  {
    title: 'Commercial',
    desc: 'Office buildings, retail centers, and institutional facilities built for durability and long-term efficiency.',
    icon: '🏢',
  },
  {
    title: 'Industrial',
    desc: 'Manufacturing plants, warehouses, and production facilities engineered for high-performance operations.',
    icon: '🏭',
  },
  {
    title: 'Healthcare',
    desc: 'Medical campuses and clinical facilities requiring precision, compliance, and energy resilience.',
    icon: '🏥',
  },
  {
    title: 'Utility',
    desc: 'Power generation, distribution systems, and grid infrastructure for reliable energy delivery.',
    icon: '⚡',
  },
  {
    title: 'Agriculture',
    desc: 'Sustainable agricultural infrastructure integrating renewable energy for net-zero farm operations.',
    icon: '🌾',
  },
  {
    title: 'Mining',
    desc: 'Foundation work, electrical systems, and switchyard installations for complex extraction operations.',
    icon: '⛏️',
  },
];

export default function Markets() {
  return (
    <section id="markets" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Industries We Serve</p>
          <h2 className="section-title">Markets</h2>
          <p className="text-charcoal-muted max-w-xl mx-auto mt-4 leading-relaxed">
            Our experience spans six core industries, each demanding unique expertise
            and technical rigor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((m) => (
            <div
              key={m.title}
              className="border border-gray-200 p-8 hover:border-gold hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-8 h-1 bg-gold mb-5" />
              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-200">
                {m.title}
              </h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
