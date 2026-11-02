import { useRef, useState } from 'react';
import { Play, MapPin, CalendarCheck, ArrowRight } from 'lucide-react';
import { projects } from './Projects';

/*
 * Featured project — the ReWa post-Helene repair, with the client's own
 * narrated drone film.
 *
 * WHY CLICK-TO-PLAY RATHER THAN AUTOPLAY
 * The film is 35 MB. September's work cut this site from 12.5 MB to 3.1 MB on
 * the homepage and the mobile LCP problem is still not fully solved, so an
 * autoplaying or preloaded video would undo that for every visitor whether
 * they watch it or not.
 *
 * Nothing but the poster (~210 KB, lazy) loads until someone presses play. The
 * <video> element is not mounted at all before then, so there is no metadata
 * request either. The file is encoded with +faststart, so playback begins as
 * soon as the first chunk arrives rather than after the whole file downloads.
 *
 * All project facts are read from the shared `projects` array rather than
 * retyped here, so this section cannot drift out of step with the Featured
 * Projects grid below it.
 */

const REWA_ID = 7;

export default function FeaturedProject() {
  const project = projects.find((p) => p.id === REWA_ID);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  if (!project) return null;

  const start = () => {
    setPlaying(true);
    /* Mounting and playing in the same tick needs the ref to exist first. */
    requestAnimationFrame(() => videoRef.current?.play?.());
  };

  const completed = `${['January','February','March','April','May','June','July','August','September','October','November','December'][project.completion.month - 1]} ${project.completion.year}`;

  return (
    <section id="featured-project" className="bg-charcoal text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="section-label text-gold">Featured Project</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mt-3">
              Back online after Helene
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CalendarCheck size={15} className="text-gold" aria-hidden="true" />
              Completed {completed}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-gold" aria-hidden="true" />
              {project.location}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Player */}
          <div>
            <div className="relative bg-black overflow-hidden aspect-video">
              {playing ? (
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  controls
                  playsInline
                  preload="auto"
                  poster="/video/rewa-poster.jpg"
                  /*
                   * No <track> yet. The narration is uncaptioned, which is a
                   * WCAG 1.2.2 failure for prerecorded audio. Drop a VTT at
                   * /video/rewa-project.en.vtt and add a <track> here the
                   * moment the client supplies a transcript.
                   */
                >
                  <source src="/video/rewa-project.mp4" type="video/mp4" />
                  Your browser cannot play this video.{' '}
                  <a href="/video/rewa-project.mp4">Download it instead</a>.
                </video>
              ) : (
                <button
                  type="button"
                  onClick={start}
                  className="group block w-full h-full relative cursor-pointer"
                  aria-label={`Play the project film — ${project.title}, 1 minute 58 seconds`}
                >
                  <picture>
                    <source srcSet="/video/rewa-poster.webp" type="image/webp" />
                    <img
                      src="/video/rewa-poster.jpg"
                      alt="Aerial view of the restored solar array at ReWa's Greenville campus"
                      className="w-full h-full object-cover"
                      width="1440"
                      height="810"
                      loading="lazy"
                    />
                  </picture>

                  <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25 transition-opacity group-hover:opacity-90" />

                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/95 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <Play
                        size={30}
                        className="text-charcoal ml-1"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    </span>
                  </span>

                  <span className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
                    <span className="text-left">
                      <span className="block text-xs font-semibold uppercase tracking-widest text-gold">
                        Project film
                      </span>
                      <span className="block text-base md:text-lg font-bold text-white mt-1">
                        Narrated site walkthrough
                      </span>
                    </span>
                    <span className="text-xs font-semibold text-white/80 bg-black/55 px-2.5 py-1 shrink-0">
                      1:58
                    </span>
                  </span>
                </button>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Drone footage and narration courtesy of Branham Group.
            </p>
          </div>

          {/* Detail */}
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.categories.map((c) => (
                <span
                  key={c}
                  className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 border border-white/15 text-gray-300"
                >
                  {c}
                </span>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold leading-snug">
              {project.client}
            </h3>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mt-1.5">
              {project.category}
            </p>

            <p className="text-gray-300 leading-relaxed mt-5">{project.summary}</p>

            <dl className="grid grid-cols-2 gap-px bg-white/10 mt-8 border border-white/10">
              {project.outcomes.map((o) => (
                <div key={o.label} className="bg-charcoal px-4 py-5">
                  <dd className="text-xl md:text-2xl font-black text-white leading-none">
                    {o.value}
                  </dd>
                  <dt className="text-[0.68rem] uppercase tracking-wider text-gray-500 mt-2">
                    {o.label}
                  </dt>
                </div>
              ))}
            </dl>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 mt-8 font-semibold text-white hover:text-gold transition-colors"
            >
              See all projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
