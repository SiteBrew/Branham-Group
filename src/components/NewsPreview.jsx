import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';

export default function NewsPreview() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label">Latest Updates</p>
            <h2 className="section-title">News &amp; Case Studies</h2>
            <p className="text-charcoal-muted max-w-xl mt-4 leading-relaxed">
              Stay current with Branham Group's latest projects, industry recognition,
              and clean energy developments across the Southeast.
            </p>
          </div>
          <Link
            to="/news"
            className="btn-gold flex items-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            View All Articles <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group">
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
                <Link
                  to="/news"
                  className="inline-block mt-4 text-gold text-sm font-semibold uppercase tracking-wider hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
