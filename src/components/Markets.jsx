const markets = [
  {
    title: 'Commercial',
    desc: 'Office buildings, retail centers, and institutional facilities built for durability and long-term efficiency.',
  },
  {
    title: 'Industrial',
    desc: 'Manufacturing plants, warehouses, and production facilities engineered for high-performance operations.',
  },
  {
    title: 'Healthcare',
    desc: 'Medical campuses and clinical facilities requiring precision, compliance, and energy resilience.',
  },
  {
    title: 'Utility',
    desc: 'Power generation, distribution systems, and grid infrastructure for reliable energy delivery.',
  },
  {
    title: 'Agriculture',
    desc: 'Sustainable agricultural infrastructure integrating renewable energy for net-zero farm operations.',
  },
  {
    title: 'Mining',
    desc: 'Foundation work, electrical systems, and switchyard installations for complex extraction operations.',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((m) => (
            <div
              key={m.title}
              className="border-l-4 border-gold pl-5 py-1"
            >
              <h3 className="font-bold text-charcoal text-lg">{m.title}</h3>
              <p className="text-charcoal-muted text-sm leading-relaxed mt-1.5">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
