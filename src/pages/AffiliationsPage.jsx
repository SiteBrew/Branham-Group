import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const affiliations = [
  {
    name: 'Lowcountry Land Trust',
    role: '2025 Corporate Partner',
    desc: 'Branham Group is proud to be a 2025 Corporate Partner of the Lowcountry Land Trust — an organization dedicated to conserving the natural lands and waters of coastal South Carolina. Our partnership reflects our deep commitment to the region we call home and the ecosystems that define it.',
    href: 'https://lowcountrylandtrust.org/',
    logo: 'https://lowcountrylandtrust.org/wp-content/uploads/2021/12/LLT-Green-Logo-Transparent-Background.png',
    logoBg: 'bg-white',
    tag: 'Conservation',
    tagBg: 'bg-green-100 text-green-800',
  },
  {
    name: 'Nature At Work SC',
    role: 'Founding Member',
    desc: 'Branham Group is a proud Founding Member of Nature At Work SC — a statewide initiative connecting South Carolina businesses to the natural world through conservation, stewardship, and a commitment to protecting the landscapes that sustain our communities and economy.',
    href: 'https://natureatworksc.org/',
    logo: '/nature-at-work-badge.png',
    logoBg: 'bg-white',
    tag: 'Conservation',
    tagBg: 'bg-green-100 text-green-800',
  },
  {
    name: 'Sustain SC',
    role: 'Member Network',
    desc: 'As a proud member of the Sustain SC network, Branham Group is part of a statewide movement advancing sustainability across South Carolina\'s businesses, communities, and ecosystems. Sustain SC connects leaders who are committed to building a more resilient and environmentally responsible state.',
    href: 'https://www.sustainsouthcarolina.org/',
    logo: 'https://images.squarespace-cdn.com/content/v1/5fd7c514819561099a4b75e0/1607976343863-1ZQH659TVJ5ORHCW6TO2/sustain-sc_primary_less-pad.png',
    logoBg: 'bg-white',
    tag: 'Sustainability',
    tagBg: 'bg-yellow-100 text-yellow-800',
  },
  {
    name: 'South Carolina Chamber of Commerce',
    role: 'Member',
    desc: 'Branham Group is an active member of the South Carolina Chamber of Commerce — the state\'s leading business advocacy organization. Our membership connects us with fellow South Carolina businesses and helps drive a stronger, more prosperous economy across the Palmetto State.',
    href: 'https://scsbc.org/',
    logo: '/sc-chamber-logo.png',
    logoBg: 'bg-white',
    tag: 'Business',
    tagBg: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'Global Charleston',
    role: 'Member',
    desc: 'Branham Group participates in Global Charleston — an organization that connects the Charleston community to international business, culture, and collaboration. Our involvement reflects our belief that strong local roots and a global outlook are not mutually exclusive.',
    href: 'https://globalcharleston3.wpcomstaging.com/',
    logo: 'https://globalcharleston3.wpcomstaging.com/wp-content/uploads/2024/01/Skype_Picture_2024_01_27T15_21_39_405Z-1024x355.jpeg',
    logoBg: 'bg-white',
    tag: 'Community',
    tagBg: 'bg-purple-100 text-purple-800',
  },
  {
    name: 'South Carolina Solar Council',
    role: 'Member',
    desc: 'As a member of the South Carolina Solar Council, Branham Group works alongside industry peers to advance solar energy policy, education, and adoption throughout South Carolina. We are committed to the Council\'s mission of making the Palmetto State a national leader in clean energy.',
    href: 'https://www.scsolarcouncil.org/',
    logo: 'https://www.scsolarcouncil.org/resources/Pictures/scsc_web_on%20white.jpg',
    logoBg: 'bg-white',
    tag: 'Clean Energy',
    tagBg: 'bg-amber-100 text-amber-700',
  },
];

export default function AffiliationsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Industry Affiliations &amp; Partners | Branham Group — EPC Contractor SC</title>
        <meta name="description" content="Branham Group is a Founding Member of Nature At Work SC, a 2025 Corporate Partner of the Lowcountry Land Trust, and a member of Sustain SC, the SC Chamber of Commerce, SC Solar Council, and Global Charleston." />
        <meta name="keywords" content="Branham Group affiliations, Nature At Work SC Founding Member, Lowcountry Land Trust Corporate Partner, Sustain SC member, SC Solar Council, SC Chamber of Commerce, sustainable EPC contractor South Carolina" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.branhamgroup.com/affiliations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.branhamgroup.com/affiliations" />
        <meta property="og:title" content="Industry Affiliations &amp; Partners | Branham Group" />
        <meta property="og:description" content="Nature At Work SC Founding Member. Lowcountry Land Trust 2025 Corporate Partner. Member of Sustain SC, SC Solar Council, SC Chamber of Commerce, and Global Charleston." />
        <meta property="og:image" content="https://www.branhamgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industry Affiliations &amp; Partners | Branham Group" />
        <meta name="twitter:description" content="Nature At Work SC Founding Member. Lowcountry Land Trust Corporate Partner. Member of Sustain SC, SC Solar Council &amp; more." />
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
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Partners &amp; Memberships</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Industry Affiliations
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Branham Group is honored to partner with and belong to organizations that share
            our commitment to clean energy, environmental stewardship, and the growth of
            South Carolina's business community.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {affiliations.map((aff) => (
              <a
                key={aff.name}
                href={aff.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Logo display area — the hero of the card */}
                <div className="flex items-center justify-center p-10 bg-white border-b border-gray-100 h-48">
                  <img
                    src={aff.logo}
                    alt={`${aff.name} logo`}
                    className="max-h-28 max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.classList.add('logo-fallback');
                    }}
                  />
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${aff.tagBg}`}>
                      {aff.tag}
                    </span>
                    <ExternalLink size={14} className="text-gray-300 group-hover:text-gold transition-colors flex-shrink-0 mt-0.5" />
                  </div>

                  <h2 className="text-base font-black text-charcoal mb-1 leading-snug group-hover:text-gold transition-colors duration-200">
                    {aff.name}
                  </h2>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">{aff.role}</p>
                  <p className="text-charcoal-muted text-sm leading-relaxed flex-1">{aff.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-14 bg-charcoal p-8 md:p-10 text-center">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Our Commitment</p>
            <p className="text-white font-black text-2xl md:text-3xl mb-4 leading-tight">
              Building Better. Together.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              These partnerships represent more than logos on a page — they reflect the values
              we bring to every project: environmental responsibility, community investment,
              and a long-term view of what it means to build well in the Southeast.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
