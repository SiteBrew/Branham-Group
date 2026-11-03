/*
 * No-op react-helmet-async, aliased in ONLY for the SSR build.
 *
 * WHY
 * Under React 19, <Helmet>'s title/meta/link children are emitted inline by
 * renderToString instead of being hoisted, so they landed inside
 * <div id="root"> in the prerendered HTML. The first fix stripped them out of
 * the markup afterwards — which removed nodes the client tree still renders,
 * and that is what caused the hydration mismatch (React error #418) on every
 * page with a Helmet block.
 *
 * Deleting the output was treating the symptom. This stops it being produced:
 * the server renders no metadata at all, so the server body and the hydrated
 * client body agree. On the client, Helmet behaves normally and React hoists
 * the tags into <head>.
 *
 * The <head> of each prerendered page is owned by headFor() in
 * scripts/prerender.mjs and is unaffected — that is the authoritative source
 * for crawlers and social cards.
 */
export const Helmet = () => null;
export const HelmetProvider = ({ children }) => children;
export default Helmet;
