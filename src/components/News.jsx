const posts = [
  {
    date: 'April 2025',
    category: 'Renewable Energy',
    title: 'Branham Group Commissions 500kW Rooftop Solar Array for Regional Manufacturer',
    excerpt:
      'Our team successfully commissioned a 500-kilowatt rooftop solar installation for a regional manufacturing facility in South Carolina, offsetting over 60% of annual energy consumption and delivering strong ROI from day one.',
    img: 'https://images.unsplash.com/photo-1595437193398-9856fab3a579?auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'February 2025',
    category: 'Infrastructure',
    title: 'New Industrial Water Treatment Facility Opens in the Lowcountry',
    excerpt:
      'A multi-year infrastructure project reaches completion, delivering advanced water purification capabilities to a growing industrial park outside Charleston — built to the highest environmental compliance standards.',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'December 2024',
    category: 'Recognition',
    title: 'Branham Group Recognized for Decades of Sustainable Construction Leadership',
    excerpt:
      'Honored by regional business leaders for sustained commitment to environmental responsibility, Branham Group accepted an award recognizing its pioneering role in bringing renewable energy EPC services to South Carolina.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Latest Updates</p>
          <h2 className="section-title">News &amp; Insights</h2>
          <p className="text-charcoal-muted max-w-xl mx-auto mt-4 leading-relaxed">
            Stay current with Branham Group's latest projects, industry recognition,
            and clean energy developments across the Southeast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-5">
                <div
                  className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${post.img}')` }}
                  role="img"
                  aria-label={post.title}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-charcoal-muted text-xs">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-charcoal-muted text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 text-gold text-sm font-semibold uppercase tracking-wider group-hover:underline">
                  Read More →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
