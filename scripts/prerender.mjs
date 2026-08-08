/**
 * Post-build prerender step.
 *
 * WHY THIS EXISTS
 * This is a client-rendered Vite SPA. react-helmet-async sets <title> and og:*
 * tags at runtime, which works for users and for Google (it executes JS), but
 * NOT for social crawlers. LinkedIn, Facebook, Slack, and X fetch raw HTML and
 * never run JavaScript — so they saw an empty <div id="root"> with no meta tags,
 * producing bare, imageless link previews.
 *
 * WHAT IT DOES
 * For every route, writes dist/<route>/index.html — a copy of the built SPA
 * shell with that route's real title, description, canonical, Open Graph,
 * Twitter Card, and (for case studies) Article + BreadcrumbList JSON-LD baked
 * into the raw HTML.
 *
 * Vercel checks the filesystem before applying the SPA rewrite in vercel.json,
 * so these files are served directly. React then hydrates over them normally,
 * so behaviour for real users is unchanged.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const { routeMeta, SITE, DEFAULT_OG_IMAGE } = await import(
  path.join(ROOT, 'src/data/routeMeta.js')
);
const { caseStudies } = await import(path.join(ROOT, 'src/data/caseStudies.js'));

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Build the <head> block for one route.
 *
 * `title` is the short SERP title (Google truncates around 60 chars).
 * `socialTitle` is the longer descriptive headline — social cards allow far
 * more room, so we don't want to waste it on the truncated version.
 */
function headFor({ url, title, socialTitle, description, image, ogType, robots, jsonLd }) {
  const social = socialTitle || title;
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="robots" content="${esc(robots || 'index, follow')}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,

    `<meta property="og:type" content="${esc(ogType || 'website')}" />`,
    `<meta property="og:site_name" content="Branham Group" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(social)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(social)}" />`,

    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(social)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ];

  if (jsonLd) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    );
  }
  return tags.map((t) => `    ${t}`).join('\n');
}

/** Collect every route we want prerendered. */
function collectRoutes() {
  const routes = [];

  for (const [route, meta] of Object.entries(routeMeta)) {
    routes.push({
      route,
      url: route === '/' ? `${SITE}/` : `${SITE}${route}`,
      title: meta.title,
      description: meta.description,
      image: meta.image ? `${SITE}${meta.image}` : DEFAULT_OG_IMAGE,
      ogType: meta.ogType,
      robots: meta.robots,
    });
  }

  for (const cs of caseStudies) {
    const route = `/news/${cs.slug}`;
    const url = `${SITE}${route}`;
    const title = cs.seoTitle;
    const socialTitle = `${cs.title} — ${cs.subtitle}`;
    const image = `${SITE}${cs.heroImg}`;

    routes.push({
      route,
      url,
      title,
      socialTitle,
      description: cs.metaDescription,
      image,
      ogType: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            headline: `${cs.title} — ${cs.subtitle}`,
            description: cs.metaDescription,
            image,
            datePublished: cs.date,
            articleSection: cs.industry,
            author: { '@type': 'Organization', name: 'Branham Group, Inc.' },
            publisher: {
              '@type': 'Organization',
              name: 'Branham Group, Inc.',
              logo: {
                '@type': 'ImageObject',
                url: `${SITE}/logo.png`,
              },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'News & Case Studies',
                item: `${SITE}/news`,
              },
              { '@type': 'ListItem', position: 3, name: cs.title, item: url },
            ],
          },
        ],
      },
    });
  }

  return routes;
}

/* ── Run ──────────────────────────────────────────────────── */

const templatePath = path.join(DIST, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('[prerender] dist/index.html not found — run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Markers in index.html: MARKER is where per-route tags are spliced in, and the
// FALLBACK block is the generic set used only when a route isn't prerendered.
// The fallback MUST be stripped on prerendered routes, otherwise the page ships
// two <title> tags and two canonicals — worse than having none.
const MARKER = '<!--PRERENDER_HEAD-->';
const FALLBACK_RE = /[ \t]*<!--FALLBACK_START-->[\s\S]*?<!--FALLBACK_END-->\n?/;

if (!template.includes(MARKER)) {
  console.error(
    `[prerender] Marker ${MARKER} missing from index.html — cannot inject meta tags.`
  );
  process.exit(1);
}
if (!FALLBACK_RE.test(template)) {
  console.error(
    '[prerender] FALLBACK_START/END block missing from index.html — refusing to ' +
      'emit pages with duplicate meta tags.'
  );
  process.exit(1);
}

const routes = collectRoutes();
let written = 0;

for (const r of routes) {
  const html = template.replace(MARKER, headFor(r)).replace(FALLBACK_RE, '');

  const outDir =
    r.route === '/' ? DIST : path.join(DIST, ...r.route.split('/').filter(Boolean));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

  written++;
  console.log(`[prerender] ${r.route.padEnd(46)} -> ${path.relative(DIST, path.join(outDir, 'index.html'))}`);
}

console.log(`[prerender] ${written} routes prerendered with static meta tags.`);
