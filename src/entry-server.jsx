/**
 * Server entry, used only by scripts/prerender.mjs at build time.
 *
 * WHY
 * The prerender step already wrote each route's <head>, which fixed social
 * cards. But <body> still shipped as an empty <div id="root">: nothing painted
 * until ~380 KB of JavaScript downloaded, parsed and executed. That is the
 * root cause of the mobile LCP score, and it means any crawler that does not
 * run JS — most AI crawlers, link previewers, and Google's first pass — sees a
 * blank page.
 *
 * This renders the real React tree to HTML so the markup ships with the
 * document. The client then hydrates over it (see main.jsx) rather than
 * building it from scratch, so behaviour for real users is unchanged.
 *
 * StaticRouter (from react-router core — v7 dropped the react-router-dom/server
 * subpath) rather than BrowserRouter, because there is no history API here.
 * HelmetProvider is present only to satisfy the components that call useHelmet;
 * its head output is discarded, since headFor() in prerender.mjs already owns
 * the <head> and two sources would produce duplicate tags.
 */

import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

export function render(url) {
  return renderToString(
    <StrictMode>
      <HelmetProvider context={{}}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
}
