import { MapPin } from 'lucide-react';

const states = [
  {
    state: 'South Carolina',
    abbr: 'SC',
    tagline: 'Our Home Base',
    cities: ['Charleston', 'Columbia', 'Greenville', 'Mount Pleasant', 'Spartanburg', 'Myrtle Beach'],
    desc: 'Headquartered in Mount Pleasant, SC, Branham Group has served the Palmetto State for over 45 years — delivering solar, infrastructure, and EPC projects from the Lowcountry to the Upstate.',
    accent: 'bg-gold',
  },
  {
    state: 'North Carolina',
    abbr: 'NC',
    tagline: 'Active & Expanding',
    cities: ['Charlotte', 'Raleigh', 'Durham', 'Wilmington', 'Asheville', 'Fayetteville'],
    desc: 'North Carolina\'s booming clean energy economy and major industrial corridor make it one of our most active markets for commercial solar, EPC construction, and infrastructure development.',
    accent: 'bg-charcoal',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
    tagline: 'Growing Presence',
    cities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Macon', 'Brunswick'],
    desc: 'From Atlanta\'s commercial core to Savannah\'s industrial port region, Branham Group delivers full EPC services and renewable energy solutions throughout the Peach State.',
    accent: 'bg-charcoal',
  },
  {
    state: 'Florida',
    abbr: 'FL',
    tagline: 'Sun Belt Leader',
    cities: ['Jacksonville', 'Orlando', 'Tampa', 'Miami', 'Tallahassee', 'Pensacola'],
    desc: 'Florida\'s solar potential and rapid infrastructure growth present ideal opportunities for our EPC capabilities — from utility interconnection projects to large-format commercial solar installations.',
    accent: 'bg-charcoal',
  },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-24 bg-gray-50" aria-label="Service Area">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Where We Work</p>
          <h2 className="section-title">Serving the Southeast</h2>
          <p className="text-charcoal-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            Based in Mount Pleasant, South Carolina, Branham Group actively delivers
            EPC services, solar installations, and infrastructure projects across four
            Southeast states — with the local knowledge and regional reach to get any
            project done right.
          </p>
        </div>

        {/* State cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {states.map((s) => (
            <div key={s.state} className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
              {/* State header */}
              <div className={`${s.accent === 'bg-gold' ? 'bg-gold' : 'bg-charcoal'} p-6`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-5xl font-black text-white/20 leading-none select-none">{s.abbr}</span>
                  <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 ${s.accent === 'bg-gold' ? 'bg-white/20 text-white' : 'bg-gold/20 text-gold'}`}>
                    {s.tagline}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white">{s.state}</h3>
              </div>

              {/* Cities */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-charcoal-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-widest text-charcoal mb-3">Key Markets</p>
                  <div className="flex flex-wrap gap-2">
                    {s.cities.map((city) => (
                      <span
                        key={city}
                        className="inline-flex items-center gap-1 text-xs text-charcoal-muted bg-gray-50 border border-gray-200 px-2 py-1"
                      >
                        <MapPin size={9} className="text-gold flex-shrink-0" aria-hidden="true" />
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout strip */}
        <div className="bg-charcoal px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
            <span className="text-white font-semibold">Don't see your city?</span>{' '}
            Our project teams travel throughout the Southeast and beyond. If you have a project
            in mind, reach out — chances are we can help.
          </p>
          <a href="#contact" className="btn-gold whitespace-nowrap flex-shrink-0">
            Discuss Your Location
          </a>
        </div>
      </div>
    </section>
  );
}
