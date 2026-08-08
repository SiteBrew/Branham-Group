import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Quote } from 'lucide-react';
import { getCaseStudy } from '../data/caseStudies';

const SITE = 'https://www.branham-group.com';

/* ── Section renderers ─────────────────────────────────────── */

function SectionHeading({ children }) {
  return (
    <>
      <div className="w-10 h-1 bg-gold mb-4" />
      <h2 className="text-2xl md:text-3xl font-black text-charcoal mb-6 leading-tight">
        {children}
      </h2>
    </>
  );
}

function ProseSection({ s }) {
  return (
    <section className="mb-14">
      {s.heading && <SectionHeading>{s.heading}</SectionHeading>}
      {s.subheading && (
        <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
          {s.subheading}
        </h3>
      )}
      {s.body?.map((p, i) => (
        <p key={i} className="text-charcoal-muted leading-relaxed mb-5 last:mb-0">
          {p}
        </p>
      ))}
      {s.bullets && (
        <ul className="mt-5 space-y-3">
          {s.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-charcoal-muted leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {s.closing && (
        <p className="text-charcoal-muted leading-relaxed mt-6 pt-6 border-t border-gray-100">
          {s.closing}
        </p>
      )}
    </section>
  );
}

function ListSection({ s }) {
  return (
    <section className="mb-14">
      {s.heading && (
        <div className="flex items-baseline gap-4">
          {s.numbered && (
            <span className="text-5xl font-black text-gold/25 leading-none flex-shrink-0">
              {s.numbered}
            </span>
          )}
          <div className="flex-1">
            <SectionHeading>{s.heading}</SectionHeading>
          </div>
        </div>
      )}
      {s.intro && (
        <p className="text-charcoal-muted leading-relaxed mb-3">{s.intro}</p>
      )}
      {s.introLabel && (
        <p className="text-sm font-bold text-charcoal mt-6 mb-4">{s.introLabel}</p>
      )}
      <div className="space-y-5 mt-6">
        {s.items.map((item, i) => (
          <div
            key={i}
            className="border-l-2 border-gray-200 hover:border-gold pl-5 py-1 transition-colors duration-200"
          >
            <h3 className="font-bold text-charcoal mb-1.5">{item.title}</h3>
            <p className="text-charcoal-muted text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      {s.outro && (
        <p className="text-charcoal-muted leading-relaxed mt-8 pt-6 border-t border-gray-100">
          {s.outro}
        </p>
      )}
    </section>
  );
}

function ImageSection({ s }) {
  return (
    <figure className="mb-14 -mx-4 md:mx-0">
      <div className={`bg-gray-50 ${s.contain ? 'p-4 md:p-8 border border-gray-100' : ''}`}>
        <img
          src={s.src}
          alt={s.alt}
          loading="lazy"
          className={`w-full ${s.contain ? 'object-contain max-h-[520px] mx-auto' : 'object-cover'}`}
        />
      </div>
      {s.caption && (
        <figcaption className="text-xs text-charcoal-muted/80 mt-3 px-4 md:px-0 italic leading-relaxed">
          {s.caption}
        </figcaption>
      )}
    </figure>
  );
}

function EquivalenciesSection({ s }) {
  return (
    <section className="mb-14">
      <SectionHeading>{s.heading}</SectionHeading>
      {s.intro && <p className="text-charcoal-muted leading-relaxed mb-8">{s.intro}</p>}
      <div className="grid sm:grid-cols-3 gap-4">
        {s.items.map((item, i) => (
          <div key={i} className="bg-charcoal p-8 text-center">
            <div className="text-3xl font-black text-gold leading-none">{item.value}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-3 leading-relaxed">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PullQuoteSection({ s }) {
  return (
    <blockquote className="mb-14 border-l-4 border-gold bg-gray-50 p-8 md:p-10">
      <Quote size={28} className="text-gold/40 mb-4" />
      <p className="text-lg md:text-xl text-charcoal italic leading-relaxed font-medium">
        {s.quote}
      </p>
    </blockquote>
  );
}

function renderSection(s, i) {
  const map = {
    prose: ProseSection,
    list: ListSection,
    image: ImageSection,
    equivalencies: EquivalenciesSection,
    pullquote: PullQuoteSection,
  };
  const Component = map[s.type];
  return Component ? <Component key={i} s={s} /> : null;
}

/* ── Page ──────────────────────────────────────────────────── */

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!study) return <Navigate to="/news" replace />;

  const url = `${SITE}/news/${study.slug}`;
  const ogImage = `${SITE}${study.heroImg}`;
  const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <>
      <Helmet>
        {/* Short title for SERPs; the longer descriptive one is used for social cards. */}
        <title>{study.seoTitle}</title>
        <meta name="description" content={study.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${study.title} — ${study.subtitle}`} />
        <meta property="og:description" content={study.metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Branham Group" />
        <meta property="article:published_time" content={study.date} />
        <meta property="article:section" content={study.industry} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${study.title} — ${study.subtitle}`} />
        <meta name="twitter:description" content={study.metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${study.title} — ${study.subtitle}`,
            description: study.metaDescription,
            image: ogImage,
            datePublished: study.date,
            articleSection: study.industry,
            author: { '@type': 'Organization', name: 'Branham Group, Inc.' },
            publisher: {
              '@type': 'Organization',
              name: 'Branham Group, Inc.',
              logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <header className="relative bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${study.heroImg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" />

        <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={16} /> Back to News
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
              {study.kind}
            </span>
            <span className="text-gray-400 text-xs uppercase tracking-widest">
              {study.industry}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
            {study.title}
          </h1>
          <p className="text-lg md:text-xl text-gold mt-4 font-medium">{study.subtitle}</p>
          <p className="text-gray-300 mt-5 leading-relaxed max-w-2xl">{study.deck}</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 text-sm text-gray-400">
            <span>{study.byline}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>{study.date}</span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-8">
            {study.pdf && (
              <a
                href={study.pdf}
                download
                className="inline-flex items-center gap-2 bg-gold hover:brightness-110 text-white text-sm font-semibold px-5 py-3 uppercase tracking-wider transition-all"
              >
                <Download size={16} /> Download PDF
              </a>
            )}
            <a
              href={shareLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-gold text-gray-300 hover:text-gold text-sm font-semibold px-5 py-3 uppercase tracking-wider transition-all"
            >
              <Share2 size={16} /> Share on LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Stat band */}
      {study.stats?.length > 0 && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {study.stats.map((stat, i) => (
                <div key={i} className="py-8 px-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-charcoal leading-none">
                    {stat.value}
                  </div>
                  {stat.unit && (
                    <div className="text-xs text-gold font-semibold mt-1">{stat.unit}</div>
                  )}
                  <div className="text-[11px] text-charcoal-muted uppercase tracking-wider mt-2 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Body */}
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          {study.sections.map(renderSection)}

          {/* Testimonial */}
          {study.testimonial && (
            <section className="mb-14">
              <SectionHeading>Testimonial</SectionHeading>
              <blockquote className="bg-gray-50 border-l-4 border-gold p-8 md:p-10">
                <Quote size={28} className="text-gold/40 mb-5" />
                {study.testimonial.quote.split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    className="text-charcoal italic leading-relaxed mb-4 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
                <footer className="mt-6 pt-5 border-t border-gray-200">
                  <div className="font-bold text-charcoal text-sm">
                    {study.testimonial.author}
                  </div>
                  <div className="text-charcoal-muted text-xs mt-0.5">
                    {study.testimonial.role}
                  </div>
                </footer>
              </blockquote>
            </section>
          )}

          {/* Sources */}
          {study.sources?.length > 0 && (
            <section className="mb-14">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">
                Sources
              </h2>
              <ol className="space-y-3 list-decimal list-inside">
                {study.sources.map((src, i) => (
                  <li key={i} className="text-charcoal-muted text-sm leading-relaxed">
                    {src}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Contact card */}
          <section className="border-t border-gray-200 pt-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">
              Contact Information
            </h2>
            <div className="text-charcoal-muted text-sm leading-relaxed space-y-1">
              <p className="font-bold text-charcoal">Branham Group, Inc.</p>
              <p>11 E Wall Street, Mount Pleasant, SC 29464</p>
              <p>
                Phone:{' '}
                <a href="tel:8038236078" className="text-gold hover:underline">
                  803.823.6078
                </a>{' '}
                &nbsp;|&nbsp; Fax: 843.604.9098
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/branham-group-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  LinkedIn: Branham Group Inc.
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {study.pdf && (
                <a
                  href={study.pdf}
                  download
                  className="inline-flex items-center gap-2 bg-charcoal hover:bg-gold text-white text-sm font-semibold px-5 py-3 uppercase tracking-wider transition-all"
                >
                  <Download size={16} /> Download PDF
                </a>
              )}
              <Link
                to="/news"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-gold text-charcoal hover:text-gold text-sm font-semibold px-5 py-3 uppercase tracking-wider transition-all"
              >
                <ArrowLeft size={16} /> All News
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
              Start a Conversation
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Ready to Build Your Next Project?
            </h2>
          </div>
          <Link to="/#contact" className="btn-gold whitespace-nowrap flex-shrink-0">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
