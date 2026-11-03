import { MapPin, CalendarCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from './Projects';
import VideoPlayer from './VideoPlayer';
import { REWA_FILM } from '../data/media';

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
const REWA_SLUG = 'rewa-post-helene-solar-repair';

export default function FeaturedProject() {
  const project = projects.find((p) => p.id === REWA_ID);
  if (!project) return null;

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
            <VideoPlayer {...REWA_FILM} />

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

            <Link
              to={`/news/${REWA_SLUG}`}
              className="inline-flex items-center gap-2 mt-8 font-semibold text-white hover:text-gold transition-colors"
            >
              Read the full case study
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
