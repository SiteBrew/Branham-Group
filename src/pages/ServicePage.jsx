import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { getService, SERVICES } from '../data/services';
import { caseStudies } from '../data/caseStudies';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  const study = caseStudies.find((c) => c.slug === service.relatedCaseStudy);
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <link
          rel="canonical"
          href={`https://www.branham-group.com/services/${service.slug}`}
        />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 md:pt-36">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.heroImg}')` }}
          role="img"
          aria-label={service.name}
        />
        <div className="absolute inset-0 bg-charcoal/80" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} aria-hidden="true" /> All Services
          </Link>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            {service.h1}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gold max-w-2xl">
            {service.tagline}
          </p>
          <p className="mt-6 text-white/80 max-w-2xl leading-relaxed">
            {service.summary}
          </p>
          <a href="#contact" className="btn-gold inline-flex items-center gap-2 mt-9">
            Discuss Your Project <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">What&rsquo;s Included</p>
          <h2 className="section-title">Scope of {service.name}</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12">
            {service.capabilities.map((c) => (
              <div key={c.name} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-gold/10 rounded flex items-center justify-center mt-0.5">
                  <Check size={16} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">{c.name}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed mt-1.5">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — a real project, not a claim */}
      {study && (
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label">In Practice</p>
            <h2 className="section-title">{study.title}</h2>
            <p className="text-charcoal-muted max-w-2xl mt-4 leading-relaxed">
              {service.relatedCaseStudyNote}
            </p>
            <Link
              to={`/news/${study.slug}`}
              className="inline-flex items-center gap-2 mt-7 font-semibold text-charcoal hover:text-gold transition-colors"
            >
              Read the case study <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}

      {/* Sibling services — internal linking */}
      <section className="py-20 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Other Services</p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/services/${o.slug}`}
                className="group block p-6 border border-gray-200 hover:border-gold transition-colors"
              >
                <h3 className="font-bold text-charcoal group-hover:text-gold transition-colors">
                  {o.name}
                </h3>
                <p className="text-charcoal-muted text-sm mt-2 leading-relaxed">
                  {o.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
