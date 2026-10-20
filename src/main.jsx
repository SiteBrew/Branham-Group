import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

const container = document.getElementById('root')

/*
 * Every route is prerendered to real HTML by scripts/prerender.mjs, so the
 * container normally already holds server-rendered markup and we hydrate over
 * it instead of throwing it away and rebuilding. createRoot is the fallback
 * for anything not prerendered (and for `vite dev`, which serves the bare
 * template).
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
