// Single source of truth for static-route SEO metadata.
//
// Consumed by scripts/prerender.mjs at build time so that crawlers which do NOT
// execute JavaScript (LinkedIn, Facebook, Slack, X) receive real meta tags in the
// raw HTML instead of an empty <div id="root">.
//
// Guidelines: title <= 60 chars, description 120-160 chars.

export const SITE = 'https://www.branham-group.com';
export const DEFAULT_OG_IMAGE = `${SITE}/og-image.jpg`;

export const routeMeta = {
  '/': {
    title: 'Branham Group | EPC Contractor — SC, NC, GA & FL',
    description:
      'Full-service EPC contractor since 1979. Solar, design-build, construction management, and resilient infrastructure across SC, NC, GA, and FL.',
    ogType: 'website',
  },
  '/news': {
    title: 'News & Case Studies | Branham Group',
    description:
      'In-depth case studies from completed solar and infrastructure projects, plus sustainability news and industry insights from across the Southeast.',
    ogType: 'website',
  },
  '/affiliations': {
    title: 'Industry Affiliations & Partners | Branham Group',
    description:
      'Nature at Work SC Founding Member and Lowcountry Land Trust Corporate Partner. Member of Sustain SC, SC Solar Council, and the SC Chamber of Commerce.',
    ogType: 'website',
  },
  '/privacy': {
    title: 'Privacy Policy | Branham Group, Inc.',
    description:
      'How Branham Group collects, uses, and protects your personal information when you visit our website or contact us about a project.',
    ogType: 'website',
    robots: 'noindex, follow',
  },
  '/terms': {
    title: 'Terms of Use | Branham Group, Inc.',
    description:
      'Terms governing access to and use of the Branham Group website, including intellectual property, disclaimers, and limitations of liability.',
    ogType: 'website',
    robots: 'noindex, follow',
  },
};
