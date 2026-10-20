/**
 * Build-time sitemap generator.
 *
 * WHY
 * sitemap.xml used to be hand-maintained, which meant every lastmod was
 * whatever date someone last remembered to type. In September all ten were
 * still reading 2026-08-08 despite three rounds of changes. A lastmod that
 * lies is worse than no lastmod: Google learns to ignore the field.
 *
 * HOW
 * Each route declares the source files it is rendered from. lastmod is the
 * commit date of the most recently changed of those files, so editing a case
 * study updates that page's date and nothing else. No manual step, and it
 * cannot drift.
 *
 * Routes marked noindex are deliberately excluded. Submitting a noindex URL in
 * a sitemap asks Google to crawl something you have told it not to index, and
 * Search Console reports it as an error.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const { routeMeta, SITE } = await import(path.join(ROOT, 'src/data/routeMeta.js'));
const { caseStudies } = await import(path.join(ROOT, 'src/data/caseStudies.js'));
const { SERVICES } = await import(path.join(ROOT, 'src/data/services.js'));

const COMPONENTS = 'src/components';

/** Last commit date (YYYY-MM-DD) touching any of these paths. */
function lastModified(paths) {
  const existing = paths.filter((p) => fs.existsSync(path.join(ROOT, p)));
  if (existing.length === 0) return null;
  try {
    const out = execFileSync(
      'git',
      ['log', '-1', '--format=%cs', '--', ...existing],
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    /* Shallow clone, no git, or a file with no history yet. */
    return null;
  }
}

const TODAY = new Date().toISOString().slice(0, 10);

const entries = [];

function add(route, sources, { changefreq, priority }) {
  entries.push({
    loc: route === '/' ? `${SITE}/` : `${SITE}${route}`,
    lastmod: lastModified(sources) || TODAY,
    changefreq,
    priority,
  });
}

add('/', [
  'src/pages/HomePage.jsx',
  `${COMPONENTS}/Hero.jsx`,
  `${COMPONENTS}/Services.jsx`,
  `${COMPONENTS}/Markets.jsx`,
  `${COMPONENTS}/Projects.jsx`,
  `${COMPONENTS}/About.jsx`,
  `${COMPONENTS}/ServiceArea.jsx`,
  `${COMPONENTS}/Contact.jsx`,
  'src/data/services.js',
], { changefreq: 'weekly', priority: '1.0' });

add('/news', ['src/pages/NewsPage.jsx', 'src/data/posts.js'], {
  changefreq: 'weekly',
  priority: '0.9',
});

for (const svc of SERVICES) {
  add(`/services/${svc.slug}`, ['src/data/services.js', 'src/pages/ServicePage.jsx'], {
    changefreq: 'monthly',
    priority: '0.9',
  });
}

for (const cs of caseStudies) {
  add(`/news/${cs.slug}`, ['src/data/caseStudies.js', 'src/pages/CaseStudyPage.jsx'], {
    changefreq: 'monthly',
    priority: '0.8',
  });
}

add('/affiliations', ['src/pages/AffiliationsPage.jsx'], {
  changefreq: 'monthly',
  priority: '0.7',
});

/* /privacy and /terms are routeMeta noindex — intentionally omitted. */
const omitted = Object.entries(routeMeta)
  .filter(([, m]) => (m.robots || '').includes('noindex'))
  .map(([r]) => r);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

for (const dir of ['public', 'dist']) {
  const target = path.join(ROOT, dir);
  if (fs.existsSync(target)) {
    fs.writeFileSync(path.join(target, 'sitemap.xml'), xml, 'utf8');
  }
}

console.log(
  `[sitemap] ${entries.length} URLs written; ${omitted.length} noindex route(s) omitted (${omitted.join(', ')}).`
);
