import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { posts } from '../data/posts';

function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) =>
    part.startsWith('http')
      ? <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-gold underline hover:brightness-110 break-all">{part}</a>
      : part
  );
}

function ArticleModal({ post, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-64 md:h-72 bg-gray-100">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${post.img}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close article"
            className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">{post.category}</span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1 leading-tight max-w-2xl">{post.title}</h2>
            <p className="text-gray-300 text-xs mt-2">{post.date}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          {post.body.split('\n\n').map((para, i) => (
            <p key={i} className="text-charcoal-muted leading-relaxed text-sm md:text-base mb-5 last:mb-0">
              {linkify(para)}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}

export default function NewsPage() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>News &amp; Insights | Branham Group — EPC Contractor Southeast US</title>
        <meta name="description" content="Stay current with Branham Group's latest news on sustainability, energy siting, and industry insights across South Carolina, North Carolina, Georgia, and Florida. Read about renewable energy policy, healthcare sustainability, and clean energy developments." />
        <meta name="keywords" content="Branham Group news, EPC contractor news South Carolina, solar installation news Southeast, clean energy projects SC NC GA FL, renewable energy contractor updates" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.branhamgroup.com/news" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.branhamgroup.com/news" />
        <meta property="og:title" content="News &amp; Insights | Branham Group — EPC Contractor Southeast US" />
        <meta property="og:description" content="Latest project news, sustainability recognition, and clean energy updates from Branham Group — serving SC, NC, GA &amp; FL since 1979." />
        <meta property="og:image" content="https://www.branhamgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News &amp; Insights | Branham Group" />
        <meta name="twitter:description" content="Latest project news and clean energy updates from Branham Group — EPC contractor serving SC, NC, GA &amp; FL." />
      </Helmet>

      {/* Page header */}
      <div className="bg-charcoal pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm font-semibold uppercase tracking-wider mb-8"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Latest Updates</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            News &amp; Insights
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Stay current with Branham Group's latest news on sustainability, industry insights,
            and clean energy developments across the Southeast.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
                onClick={() => setSelected(post)}
              >
                <div className="overflow-hidden bg-gray-100">
                  <div
                    className="aspect-square bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${post.img}')` }}
                    role="img"
                    aria-label={post.title}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-gray-300 text-xs">•</span>
                    <span className="text-charcoal-muted text-xs">{post.date}</span>
                  </div>
                  <h2 className="text-base font-bold text-charcoal mb-3 group-hover:text-gold transition-colors leading-snug flex-1">
                    {post.title}
                  </h2>
                  <p className="text-charcoal-muted text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="text-gold text-xs font-semibold uppercase tracking-wider group-hover:underline mt-auto">
                    Read Full Article →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <ArticleModal post={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
