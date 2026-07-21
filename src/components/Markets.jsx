const markets = [
  {
    title: 'Commercial',
    desc: 'Office buildings, retail centers, and institutional facilities built for durability and long-term efficiency.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Industrial',
    desc: 'Manufacturing plants, warehouses, and production facilities engineered for high-performance operations.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Healthcare',
    desc: 'Medical campuses and clinical facilities requiring precision, compliance, and energy resilience.',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Utility',
    desc: 'Power generation, distribution systems, and grid infrastructure for reliable energy delivery.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Agriculture',
    desc: 'Sustainable agricultural infrastructure integrating renewable energy for net-zero farm operations.',
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Mining',
    desc: 'Foundation work, electrical systems, and switchyard installations for complex extraction operations.',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
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
              className="relative overflow-hidden group cursor-pointer h-64"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${m.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="w-8 h-1 bg-gold mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
