import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

/*
 * Click-to-play video player, shared by the homepage featured band and the
 * case study pages.
 *
 * The <video> element is deliberately not mounted until the poster is
 * clicked. A mounted <video> — even with preload="none" — invites browsers to
 * make a metadata request, and the ReWa film is 35 MB on a site that was cut
 * from 12.5 MB to 3.1 MB in September. Until someone chooses to watch, the
 * only cost is the poster image.
 *
 * Encoded with +faststart, so playback begins on the first chunk rather than
 * after the whole file arrives.
 */
export default function VideoPlayer({
  src,
  posterJpg,
  posterWebp,
  alt,
  duration,
  eyebrow = 'Project film',
  title,
  captions,
  className = '',
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const start = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play?.());
  };

  return (
    <div className={`relative bg-black overflow-hidden aspect-video ${className}`}>
      {playing ? (
        <video
          ref={videoRef}
          className="w-full h-full"
          controls
          playsInline
          preload="auto"
          poster={posterJpg}
        >
          <source src={src} type="video/mp4" />
          {/*
            captions is a path to a WebVTT file. The ReWa film is narrated and
            currently has none, which fails WCAG 1.2.2 for prerecorded audio —
            and in practice loses the narration entirely for the majority who
            scroll with sound off. Supply a VTT and pass it here.
          */}
          {captions && (
            <track kind="captions" srcLang="en" label="English" src={captions} default />
          )}
          Your browser cannot play this video.{' '}
          <a href={src}>Download it instead</a>.
        </video>
      ) : (
        <button
          type="button"
          onClick={start}
          className="group block w-full h-full relative cursor-pointer"
          aria-label={`Play the project film${title ? ` — ${title}` : ''}${duration ? `, ${duration}` : ''}`}
        >
          <picture>
            {posterWebp && <source srcSet={posterWebp} type="image/webp" />}
            <img
              src={posterJpg}
              alt={alt}
              className="w-full h-full object-cover"
              width="1440"
              height="810"
              loading="lazy"
            />
          </picture>

          <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25 transition-opacity group-hover:opacity-90" />

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/95 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play size={30} className="text-charcoal ml-1" fill="currentColor" aria-hidden="true" />
            </span>
          </span>

          <span className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
            <span className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-widest text-gold">
                {eyebrow}
              </span>
              {title && (
                <span className="block text-base md:text-lg font-bold text-white mt-1">
                  {title}
                </span>
              )}
            </span>
            {duration && (
              <span className="text-xs font-semibold text-white/80 bg-black/55 px-2.5 py-1 shrink-0">
                {duration}
              </span>
            )}
          </span>
        </button>
      )}
    </div>
  );
}
