import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, FileText } from 'lucide-react';
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

          {/* Full page CTA */}
          {post.caseStudy && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-charcoal-muted text-sm mb-4">
                {post.type === 'case-study'
                  ? 'This is a summary. Read the complete case study — full findings, data, project imagery, and downloadable PDF.'
                  : 'This is a summary. Read the complete release — full detail, quotes, and takeaways.'}
              </p>
              <Link
                to={`/news/${post.caseStudy}`}
                className="inline-flex items-center gap-2 bg-gold hover:brightness-110 text-white text-sm font-semibold px-6 py-3 uppercase tracking-wider transition-all"
              >
                <FileText size={16} />
                {post.type === 'case-study' ? 'Read Full Case Study' : 'Read Full Release'}
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

const FILTERS = ['All', 'Case Studies', 'News'];

// `type` is the content category (what it is).
// `caseStudy` is a slug meaning "has a full standalone page" — not all case
// studies have one, and a news item can (e.g. the GASFS press release).
const isCaseStudy = (p) => p.type === 'case-study';

// Case studies lead — completed project proof before industry commentary.
// Original array order is preserved within each group (newest first).
const sortedPosts = [...posts.filter(isCaseStudy), ...posts.filter((p) => !isCaseStudy(p))];

export default function NewsPage() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const filtered =
    activeFilter === 'Case Studies'
      ? sortedPosts.filter(isCaseStudy)
      : activeFilter === 'News'
      ? sortedPosts.filter((p) => !isCaseStudy(p))
      : sortedPosts;

  const caseStudyCount = posts.filter(isCaseStudy).length;
  const counts = {
    All: posts.length,
    'Case Studies': caseStudyCount,
    News: posts.length - caseStudyCount,
  };

  return (
    <>
      <Helmet>
        <title>News &amp; Case Studies | Branham Group — EPC Contractor Southeast US</title>
        <meta name="description" content="Stay current with Branham Group's latest news on sustainability, energy siting, and industry insights across South Carolina, North Carolina, Georgia, and Florida. Read about renewable energy policy, healthcare sustainability, and clean energy developments." />
        <meta name="keywords" content="Branham Group news, EPC contractor news South Carolina, solar installation news Southeast, clean energy projects SC NC GA FL, renewable energy contractor updates" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.branham-group.com/news" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.branham-group.com/news" />
        <meta property="og:title" content="News &amp; Case Studies | Branham Group — EPC Contractor Southeast US" />
        <meta property="og:description" content="Latest project news, sustainability recognition, and clean energy updates from Branham Group — serving SC, NC, GA &amp; FL since 1979." />
        <meta property="og:image" content="https://www.branham-group.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News &amp; Case Studies | Branham Group" />
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
            News &amp; Case Studies
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            In-depth case studies from completed projects, plus the latest on sustainability,
            industry insights, and clean energy developments across the Southeast.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-gold text-white'
                    : 'bg-white border border-gray-200 text-charcoal-muted hover:border-gold hover:text-gold'
                }`}
              >
                {f}
                <span className={activeFilter === f ? 'text-white/70 ml-1.5' : 'text-charcoal-muted/50 ml-1.5'}>
                  {counts[f]}
                </span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
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
                  <div className="flex items-center justify-between gap-3 mt-auto">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider group-hover:underline">
                      {isCaseStudy(post) ? 'Read Case Study →' : 'Read Full Article →'}
                    </span>
                    {post.caseStudy && (
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-charcoal-muted bg-gray-100 px-2 py-1 flex-shrink-0">
                        <FileText size={11} />
                        {isCaseStudy(post) ? 'Full Study' : 'Full Release'}
                      </span>
                    )}
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
