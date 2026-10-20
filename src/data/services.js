/**
 * Service line definitions — one dedicated page each.
 *
 * SOURCING RULE
 * Every claim on these pages traces back to something already published on
 * this site: the homepage Services section, the Hero statistics, the About
 * copy, or a case study. Nothing about capacity, certifications, crew size,
 * licences or project counts has been invented to fill space. Where a page
 * reads thin, that is deliberate — the fix is a real detail from Branham, not
 * a plausible-sounding sentence. See SERVICE-PAGE-GAPS.md.
 *
 * The four entries mirror the four cards in src/components/Services.jsx. An
 * earlier audit proposed /services/solar and /services/resilient-infrastructure
 * instead; neither is a service line. Solar is a technology deployed across the
 * six market verticals in Markets.jsx, and "resilient infrastructure" is
 * positioning language from the meta description.
 */

export const SERVICES = [
  {
    slug: 'preconstruction',
    name: 'Preconstruction Services',
    navLabel: 'Preconstruction',
    /* <= 60 chars so Google does not truncate it */
    title: 'Preconstruction Services | Branham Group',
    metaDescription:
      'Cost estimating, site analysis, scheduling, value engineering, and constructability review for solar and infrastructure projects across SC, NC, GA, and FL.',
    h1: 'Preconstruction Services',
    tagline: 'The decisions that set a project’s cost are made before anyone breaks ground.',
    heroImg: '/preconstruction-array-layout.webp',
    /* The homepage card copy, verbatim — the page expands around it. */
    summary:
      'We lay the groundwork before a shovel hits the dirt. Our preconstruction team delivers detailed cost estimating, site analysis, scheduling, value engineering, and constructability reviews — setting every project up for on-time, on-budget execution.',
    capabilities: [
      {
        name: 'Cost estimating',
        body: 'A budget built from the actual scope rather than a square-foot average, so the number you approve is the number the project is held to.',
      },
      {
        name: 'Site analysis',
        body: 'What the site will support, what it will cost to make it support more, and which constraints are worth designing around instead of engineering out.',
      },
      {
        name: 'Scheduling',
        body: 'Sequencing set before mobilization, including the long-lead procurement that otherwise dictates the schedule by accident.',
      },
      {
        name: 'Value engineering',
        body: 'Identifying where cost can come out without taking performance with it — while the drawings are still cheap to change.',
      },
      {
        name: 'Constructability review',
        body: 'Reading the design the way the field crew will read it, and resolving the conflicts on paper rather than in the middle of installation.',
      },
    ],
    relatedCaseStudy: 'chasing-zero-city-roots-farm',
    relatedCaseStudyNote:
      'City Roots Farm reached net-zero energy because the modelling was done up front — the array was sized against measured demand rather than an assumption.',
  },
  {
    slug: 'construction-management',
    name: 'Construction Management',
    navLabel: 'Construction Management',
    title: 'Construction Management | Branham Group',
    metaDescription:
      'Construction management from mobilization through commissioning. Trade coordination, schedule control, quality control, and site safety across the Southeast.',
    h1: 'Construction Management',
    tagline: 'One party accountable for the schedule, the trades, and what gets handed over at the end.',
    heroImg: '/construction-management.webp',
    summary:
      'From mobilization through final commissioning, our construction managers coordinate every trade, schedule, and resource on site. We maintain strict quality control and safety standards to deliver projects that perform exactly as designed.',
    capabilities: [
      {
        name: 'Trade coordination',
        body: 'Every subcontractor working to one sequence, with the interfaces between them owned by someone rather than assumed.',
      },
      {
        name: 'Schedule control',
        body: 'Progress measured against the plan continuously, so slippage surfaces while there is still time to act on it.',
      },
      {
        name: 'Quality control',
        body: 'Inspection against the specification as work is installed, not as a punch list assembled after the fact.',
      },
      {
        name: 'Site safety',
        body: 'Safety standards enforced on site as a condition of working there — for our crews and for every trade under our coordination.',
      },
      {
        name: 'Commissioning',
        body: 'Systems tested and proven against design intent before handover, so the project performs the way it was sold.',
      },
    ],
    relatedCaseStudy: 'switchyard-power-distribution-upgrades',
    relatedCaseStudyNote:
      'Switchyard and power distribution upgrades carried out as industrial electrical infrastructure work, coordinated around an operating facility.',
  },
  {
    slug: 'epc',
    name: 'Engineering, Procurement & Construction',
    navLabel: 'EPC',
    title: 'EPC Contractor | Branham Group — SC, NC, GA & FL',
    metaDescription:
      'Full-service EPC contractor since 1979. Engineering, procurement, and construction under a single contract for solar and infrastructure across the Southeast.',
    h1: 'Engineering, Procurement & Construction',
    tagline: 'One contract, one point of accountability, no gaps between the parties to fall through.',
    heroImg: '/solar-sunset-racking.webp',
    summary:
      'Our full EPC capability means a single point of accountability from concept to completion. We manage engineering, sourcing, and field construction under one contract — eliminating gaps, reducing risk, and delivering integrated results.',
    capabilities: [
      {
        name: 'Engineering',
        body: 'System design carried out by the same organisation that will build it, so what gets drawn is what can actually be installed.',
      },
      {
        name: 'Procurement',
        body: 'Equipment sourced and expedited against the construction schedule rather than ordered once the schedule already depends on it.',
      },
      {
        name: 'Construction',
        body: 'Self-performed and subcontracted work delivered under the same contract as the design, so responsibility does not change hands mid-project.',
      },
      {
        name: 'Single point of accountability',
        body: 'When design and construction sit with separate firms, the space between them is where disputes live. Under one contract there is no such space.',
      },
    ],
    relatedCaseStudy: 'solar-canopy-sc-manufacturer',
    relatedCaseStudyNote:
      'A solar photovoltaic canopy system delivered for an industrial manufacturer in South Carolina.',
  },
  {
    slug: 'design-build',
    name: 'Design-Build',
    navLabel: 'Design-Build',
    title: 'Design-Build Contractor | Branham Group',
    metaDescription:
      'Design-build delivery integrating architecture, engineering, and construction into one process — shorter timelines and earlier cost certainty for owners.',
    h1: 'Design-Build',
    tagline: 'Design and construction as one process, which is where the time savings come from.',
    heroImg: '/design-build.webp',
    summary:
      'Speed and efficiency without sacrificing quality. Our design-build approach integrates architecture, engineering, and construction into a single, streamlined process — reducing project timelines and giving owners greater cost certainty from day one.',
    capabilities: [
      {
        name: 'Integrated delivery',
        body: 'Architecture, engineering and construction run as one workflow instead of three sequential handoffs, each with its own review cycle.',
      },
      {
        name: 'Overlapping phases',
        body: 'Construction on early packages can begin while later design continues — the main reason design-build finishes sooner than design-bid-build.',
      },
      {
        name: 'Earlier cost certainty',
        body: 'Pricing firms up early because the people estimating it are the people who will build it, working from their own design.',
      },
      {
        name: 'Fewer change orders',
        body: 'Most change orders trace to a gap between what was designed and what was buildable. Under one roof, those are caught internally.',
      },
    ],
    relatedCaseStudy: 'looking-to-lead-healthcare-sustainability',
    relatedCaseStudyNote:
      'A healthcare sustainability project delivered against the owner’s environmental goals as well as their schedule.',
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
