import { useState } from 'react';
import { X, MapPin, Tag, ChevronRight, ChevronLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    client: 'City Roots',
    title: 'City Roots',
    category: 'Agriculture & Renewable Energy',
    tag: 'Agriculture',
    tagColor: 'bg-green-100 text-green-800',
    location: 'Columbia, SC',
    img: '/cityroots-aerial.jpg',
    heroImg: '/cityroots-sunset.jpg',
    gallery: ['/cityroots-aerial.jpg', '/cityroots-sunset.jpg', '/cityroots-greenhouse.jpg', '/cityroots-commissioning.jpg', '/cityroots-new-1.jpg', '/cityroots-new-2.jpg', '/cityroots-new-3.jpg', '/cityroots-new-4.jpg'],
    summary:
      'By integrating solar power and geothermal energy, the microgreens farm achieved net-zero energy usage, demonstrating that renewable energy adoption is both feasible and beneficial for small-scale agricultural operations.',
    overview:
      'City Roots Organic Farm in Columbia, SC initially relied on grid electricity and fossil fuels. Rising energy costs and a commitment to sustainable practices led management to partner with Branham Group on a comprehensive renewable energy transformation: a 480kW ground-mount solar array paired with an 80-ton geothermal system, delivering 780,175 kWh of annual solar production and 2.5 million BTU of annual geothermal output — achieving complete net-zero energy status.',
    scope: [
      '480kW ground-mount solar PV design and installation',
      '80-ton geothermal heat exchange system',
      'Electrical distribution and ABB inverter integration',
      'Greenhouse environmental control automation',
      'Grid interconnection and net-metering setup',
    ],
    industry: 'Agriculture',
    application: 'Net-Zero Energy System',
    outcomes: [
      { label: 'Solar Size', value: '480kW' },
      { label: 'Annual Solar', value: '780,175 kWh' },
      { label: 'Annual Savings', value: '$175,450' },
      { label: 'Energy Status', value: 'Net-Zero' },
    ],
    quote:
      'Branham Group and their project team were integral in developing our conceptual design and then our project delivery. Their knowledge, experience, and service were invaluable to our new operation. — Eric McClam, Managing Partner, City Roots',
  },
  {
    id: 2,
    client: 'Nucor Steel',
    title: 'Nucor Canopy',
    category: 'Industrial Solar',
    tag: 'Industrial',
    tagColor: 'bg-blue-100 text-blue-800',
    location: 'South Carolina',
    img: '/nucor-exterior.png',
    heroImg: '/nucor-interior.jpg',
    gallery: ['/nucor-exterior.png', '/nucor-interior.jpg', '/nucor-commissioning.jpg', '/nucor-new-1.jpg', '/nucor-new-2.jpg', '/nucor-new-3.jpg', '/nucor-new-4.png'],
    summary:
      'The solar canopy generates renewable energy and additionally provides functional company and community outdoor space. From daily employee gatherings to corporate events, the canopy space contributes to a positive corporate culture. The solar canopy and the renewable energy it generates support Nucor\'s commitment to sourcing diverse, clean energy for its circular steelmaking operations.',
    overview:
      'Nucor Steel engaged Branham Group to design and build a dual-purpose solar installation: a large-format canopy structure generating meaningful clean energy for plant operations while providing attractive outdoor gathering space. The 81kW DC system delivers 175,392 kWh of annual production and is projected to offset 2,537 metric tons of CO₂ over its lifetime — the equivalent of 4,631,638 car miles not driven, or 30,556 trees planted.',
    scope: [
      'Structural engineering and solar canopy design',
      'High-capacity 81kW DC solar PV installation',
      'Electrical integration with plant power systems',
      'Outdoor amenity and hardscape construction',
      'Safety systems and code compliance',
    ],
    industry: 'Industrial',
    application: 'Solar Canopy Installation',
    outcomes: [
      { label: 'System Size', value: '81kW DC' },
      { label: 'Annual Output', value: '175,392 kWh' },
      { label: 'CO₂ Offset (Life)', value: '2,537 tons' },
      { label: 'Car Miles Saved', value: '4.6M+' },
    ],
    quote:
      'The solar canopy generates renewable energy for steelmaking operations while providing functional company and community outdoor space.',
  },
  {
    id: 3,
    client: 'Lumenant',
    title: 'Lumenant',
    category: 'Healthcare Solar Portfolio',
    tag: 'Commercial',
    tagColor: 'bg-yellow-100 text-yellow-800',
    location: 'Southeast United States',
    img: '/lumenant-array-layout.jpg',
    heroImg: '/lumenant-array-layout.jpg',
    gallery: ['/lumenant-array-layout.jpg', '/lumenant-new-1.jpg'],
    summary:
      'The portfolio of on-site renewable energy projects was created to reduce carbon footprint, lower utility costs, improve energy security, and enhance resilience, ultimately contributing to a cleaner and healthier environment.',
    overview:
      'Lumenant engaged Branham Group to design and deliver a large-scale on-site solar energy portfolio across 8 healthcare facilities in the Southeast. Each 185kW DC ground-mount array was custom-engineered to the site\'s layout and electrical constraints. Combined, the 8-site portfolio delivers 1,480kW DC of capacity, generates 2,420,000 kWh of clean electricity annually, and is projected to offset 37,920 tons of CO₂ over its lifetime — the equivalent of 86 million car miles not driven.',
    scope: [
      '8-site solar array design and engineering (185kW DC each)',
      'Ground-mount structural installation per site',
      'Electrical integration and utility interconnection',
      'Site permitting and environmental compliance',
      'Portfolio-wide commissioning and performance monitoring',
    ],
    industry: 'Commercial',
    application: 'Multi-Site Solar Portfolio',
    outcomes: [
      { label: 'Total Capacity', value: '1,480kW DC' },
      { label: 'Annual Output', value: '2.42M kWh' },
      { label: 'CO₂ Offset (Life)', value: '37,920 tons' },
      { label: 'Sites Deployed', value: '8 Locations' },
    ],
    quote:
      'On-site renewable energy systems offer substantial long-term savings while significantly reducing greenhouse gas emissions and improving resilience for healthcare operations.',
  },
  {
    id: 4,
    client: 'OceanaGold',
    title: 'OceanaGold Haile Gold Mine',
    category: 'Industrial Infrastructure',
    tag: 'Mining',
    tagColor: 'bg-orange-100 text-orange-800',
    location: 'Haile Gold Mine, SC',
    img: '/oceana-ro-1.jpg',
    heroImg: '/oceana-ro-1.jpg',
    gallery: ['/oceana-ro-1.jpg', '/oceana-ro-2.jpg', '/oceana-ro-3.jpg', '/oceana-ro-4.jpg'],
    summary:
      'Reverse osmosis (R.O.) plants are crucial in industrial operations for providing purified water with low levels of contaminants, which helps reduce equipment wear and extend the lifespan of critical infrastructure. The scope of work includes concrete foundations, rebar fabrication, excavation, and ensuring sustainability through efficient construction and wastewater recycling.',
    overview:
      'OceanaGold\'s Haile Gold Mine required high-capacity water purification systems to meet both operational and environmental compliance requirements. Branham Group managed the full construction scope — from engineered concrete foundations to the mechanical installation of RO treatment units and closed-loop wastewater recycling systems.',
    scope: [
      'Engineered concrete foundations for treatment units',
      'Reverse osmosis system mechanical installation',
      'Process piping and instrumentation',
      'Wastewater collection and recycling infrastructure',
      'Environmental compliance and containment systems',
    ],
    industry: 'Mining',
    application: 'Industrial Water Treatment',
    outcomes: [
      { label: 'System Type', value: 'Reverse Osmosis' },
      { label: 'Application', value: 'Gold Mining' },
      { label: 'Feature', value: 'Wastewater Recycling' },
      { label: 'Compliance', value: 'Environmental' },
    ],
    quote:
      'Reverse osmosis plants are crucial in industrial operations for providing purified water with low levels of contaminants.',
  },
  {
    id: 5,
    client: 'Healthcare System',
    title: 'Large-Scale Solar — Healthcare Sustainability Goals',
    category: 'Healthcare & Renewable Energy',
    tag: 'Healthcare',
    tagColor: 'bg-pink-100 text-pink-800',
    location: 'Southeast United States',
    img: '/brownfield-solar-2.jpg',
    heroImg: '/brownfield-solar-1.jpg',
    gallery: ['/brownfield-solar-2.jpg', '/brownfield-solar-1.jpg', '/solar-sunset-racking.jpg'],
    summary:
      'A Southeast healthcare system targeting 50% Scope 1 & 2 emissions reduction by 2030 partnered with Branham Group for an on-site solar installation generating 692,000+ kWh annually — delivering $2.5M in projected lifetime savings and offsetting 490 metric tons of CO₂ per year.',
    overview:
      'A Southeast healthcare organization with a published net-zero-by-2050 commitment engaged Branham Group to design and build a large-scale on-site solar PV system. Engineered as a zero-export installation, the system generates over 692,000 kWh annually — all consumed on-site — supporting the health system\'s target of 50% Scope 1 and Scope 2 emissions reduction by 2030. Projected lifetime utility savings total $2.5 million with a 5–7 year ROI.',
    scope: [
      'Full EPC: engineering, procurement, and construction',
      'Zero-export solar PV system design',
      'On-site electrical integration and metering',
      'Utility interconnection and permitting',
      'Commissioning and performance monitoring setup',
    ],
    industry: 'Healthcare',
    application: 'On-Site Solar Installation',
    outcomes: [
      { label: 'Annual Output', value: '692,000+ kWh' },
      { label: 'Lifetime Savings', value: '$2.5M' },
      { label: 'CO₂ Offset/Year', value: '490 mt' },
      { label: 'ROI Timeline', value: '5–7 Years' },
    ],
    quote:
      'This project directly advances our commitment to 50% Scope 1 and Scope 2 emissions reduction by 2030 — and puts us firmly on the path to net-zero by 2050.',
  },
  {
    id: 6,
    client: 'HGM',
    title: 'HGM Switchyard',
    category: 'Electrical Infrastructure',
    tag: 'Utility',
    tagColor: 'bg-purple-100 text-purple-800',
    location: 'South Carolina',
    img: '/hgm-1.jpg',
    heroImg: '/hgm-1.jpg',
    gallery: ['/hgm-1.jpg', '/hgm-2.jpg', '/hgm-3.jpg', '/hgm-4.jpg'],
    summary:
      'A new switchyard engineered to enhance the client\'s electrical distribution network — increasing reliability, expanding capacity, and futureproofing the facility\'s power infrastructure.',
    overview:
      'HGM required a purpose-built medium-voltage switchyard to handle increased electrical loads and improve the resilience of their distribution network. Branham Group provided full EPC services: from civil site preparation and structural installation through high-voltage electrical integration and commissioning, delivering a system built for long-term reliability.',
    scope: [
      'Civil site preparation and grading',
      'Structural steel and equipment foundations',
      'Switchgear and disconnect installation',
      'Medium-voltage cable and bus duct installation',
      'Protective relay programming and commissioning',
    ],
    industry: 'Utility',
    application: 'Electrical Switchyard',
    outcomes: [
      { label: 'Voltage', value: '24.9kV' },
      { label: 'System Type', value: 'Switchyard' },
      { label: 'Goal', value: 'Grid Reliability' },
      { label: 'Delivery', value: 'Full EPC' },
    ],
    quote:
      'The new switchyard enhances the client\'s electrical distribution network\'s reliability and capacity.',
  },
];

const filters = ['All', 'Agriculture', 'Industrial', 'Commercial', 'Mining', 'Healthcare', 'Utility'];

function ProjectModal({ project, onClose }) {
  const [heroIdx, setHeroIdx] = useState(0);
  const images = project.gallery || [project.heroImg];
  const activeImg = images[heroIdx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-64 md:h-80">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url('${activeImg}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Gallery nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setHeroIdx((heroIdx - 1 + images.length) % images.length); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setHeroIdx((heroIdx + 1) % images.length); }}
                className="absolute right-12 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight size={18} />
              </button>
              {/* Dot indicators */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setHeroIdx(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${i === heroIdx ? 'bg-gold scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block ${project.tagColor}`}>
              {project.tag}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
              {project.title}
            </h2>
            <div className="flex items-center gap-4 mt-2 text-gray-300 text-sm">
              <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
              <span className="flex items-center gap-1"><Tag size={12} /> {project.client}</span>
            </div>
          </div>
        </div>

        {/* Thumbnail strip for gallery projects */}
        {images.length > 1 && (
          <div className="flex gap-2 px-4 pt-4 overflow-x-auto">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setHeroIdx(i)}
                className={`flex-shrink-0 w-20 h-14 bg-cover bg-center border-2 transition-all ${i === heroIdx ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'}`}
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {project.outcomes.map((stat) => (
              <div key={stat.label} className="bg-gray-50 border border-gray-100 p-4 text-center">
                <div className="text-lg font-black text-charcoal">{stat.value}</div>
                <div className="text-xs text-charcoal-muted uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: overview + quote */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-3">Project Overview</h3>
              <p className="text-charcoal-muted leading-relaxed text-sm mb-6">{project.overview}</p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-charcoal text-sm leading-relaxed">
                "{project.quote}"
              </blockquote>
            </div>

            {/* Right: scope */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-3">Scope of Work</h3>
              <ul className="space-y-3">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-charcoal-muted">
                    <ChevronRight size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tag === activeFilter);

  return (
    <>
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <p className="section-label">Our Work</p>
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="text-charcoal-muted leading-relaxed">
              Six sectors. One standard of excellence. Every project below represents
              Branham Group's commitment to delivering clean energy and resilient
              infrastructure that performs for decades.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-gold text-white'
                    : 'bg-white border border-gray-200 text-charcoal-muted hover:border-gold hover:text-gold'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${proj.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${proj.tagColor}`}>
                      {proj.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gold text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">
                    {proj.category}
                  </p>
                  <h3 className="text-base font-bold text-charcoal mb-3 leading-snug group-hover:text-gold transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed flex-1">
                    {proj.summary}
                  </p>

                  {/* Consistent stat pills */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 pt-5 border-t border-gray-100">
                    {[
                      { label: 'Industry', value: proj.industry },
                      { label: 'Project Application', value: proj.application },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        <span className="text-xs text-charcoal-muted">
                          <span className="font-semibold text-charcoal">{stat.value}</span>
                          <span className="text-charcoal-muted/60"> · {stat.label}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-charcoal p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Start a Conversation</p>
              <h3 className="text-2xl md:text-3xl font-black text-white">Ready to Build Your Next Project?</h3>
            </div>
            <a href="#contact" className="btn-gold whitespace-nowrap flex-shrink-0">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
