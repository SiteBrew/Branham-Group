import sizes from '../data/imageSizes.json';

/*
 * Intrinsic dimensions for an image in /public, generated at build time by
 * scripts/image-sizes.mjs.
 *
 * Spread onto an <img> so the browser can reserve the right box before the
 * file arrives:
 *
 *     <img src={src} alt={alt} {...imgSize(src)} />
 *
 * Returns {} for anything it does not know about — an <img> with no width or
 * height is the status quo, whereas guessed dimensions would reserve the wrong
 * space and make layout shift worse. The Navbar previously declared 220x112
 * for a 316x232 logo for exactly that reason.
 */
export function imgSize(src) {
  if (!src) return {};
  const key = src.split('?')[0];
  const dims = sizes[key];
  return dims ? { width: dims.width, height: dims.height } : {};
}
