// Two independent fields:
//
//   type       — what the content IS: 'case-study' | 'news'. Drives the
//                News page filter tabs and sort order (case studies first).
//
//   caseStudy  — slug of a full standalone page at /news/:slug, built for
//                direct LinkedIn sharing. Optional and independent of `type`:
//                a case study may not have a full page yet (Lumenant), and a
//                news item may have one (the GASFS press release).

export const posts = [
  {
    date: 'July 2026',
    category: 'Agrivoltaics & Industry Events',
    title: 'Branham Group Attends 2026 Georgia Solar Farm Summit',
    type: 'news',
    excerpt:
      'Branham Group joined GASFS26 in Athens, GA — engaging with the nation\'s premier agrivoltaics conference and reinforcing its commitment to responsible solar development and land stewardship across the Southeast.',
    img: '/gasfs-2026-hero.png',
    caseStudy: 'georgia-solar-farm-summit-2026',
    body: `The Branham Group team attended the 2026 Georgia Solar Farm Summit (GASFS26), held July 15–16 at The Georgia Center on the University of Georgia campus in Athens, GA. Organized by Solar Farm Summit LLC, the summit convenes leading interdisciplinary practitioners across energy, agriculture, planning, and research to advance responsible solar development, land conservation, and farm viability.

This year's summit centered on agrivoltaics (AgPV) — the intentional co-location of agriculture and solar energy systems on the same parcel of land. Sessions covered solar grazing, crop cultivation beneath and between panels, pollinator habitat and conservation, and ecovoltaics — pairing solar development with soil health, water management, and forestry protection.

Georgia's agricultural and forestry sectors represent a $70 billion-plus industry. As utility-scale solar expands to meet growing electricity demand, the summit explored how agrivoltaics offers a framework for integrating renewable energy with working lands without sacrificing productivity or long-term land health.

Founded in 1979 and focused on clean energy infrastructure for over 16 years, Branham Group brings nearly five decades of infrastructure expertise to the agrivoltaics conversation, serving clean energy developers, utilities, and asset owners across South Carolina, North Carolina, Georgia, and Florida.`,
  },
  {
    date: 'March 18, 2026',
    category: 'Sustainability',
    title: 'Land Trust Alliance Toolkit',
    type: 'news',
    excerpt:
      'This toolkit will help land trusts engage productively in the regulatory and legislative processes of siting new energy infrastructure in their areas.',
    img: '/land-trust-toolkit.png',
    body: [
      'This toolkit will help land trusts engage productively in the regulatory and legislative processes of siting new energy infrastructure in their areas.',
      '',
      'View the interactive toolkit here: https://landtrustalliance.org/resources/energy-siting-toolkit/',
      '',
      'The Land Trust Alliance has developed resources to help land trusts work with the relevant authorities to site transmission, wind turbines and solar arrays away from sensitive natural lands. These same resources are relevant to other rapidly emerging issues, such as where to locate energy-intensive data centers.',
      '',
      'This toolkit is based on resources the Alliance commissioned from the Great Plains Institute. It also draws on the valuable perspectives of conservation organizations around the U.S. that have participated in the development of sustainable siting policies and practices.',
      '',
      'Land trusts are already integrating climate resilience science into strategic planning, advancing natural climate solutions, and developing carbon offset projects. Renewable energy siting presents another opportunity for land trusts to engage communities in addressing climate change and safeguarding the land, water and air.',
    ].join('\n'),
  },
  {
    date: 'February 2026',
    category: 'Healthcare & Renewable Energy',
    title: 'Looking to Lead: Healthcare and Environmental Sustainability',
    type: 'case-study',
    excerpt:
      'Branham Group partnered with a nationally recognized healthcare organization to deploy on-site solar PV — generating over 692,000 kWh annually, offsetting 490 metric tons of CO₂, and projecting $2.5 million in cumulative savings over 25 years.',
    img: '/hospital-array-layout.png',
    caseStudy: 'looking-to-lead-healthcare-sustainability',
    body: `U.S. healthcare systems are among the nation's most energy-intensive organizations, accounting for approximately 9% of total domestic carbon emissions. Globally, the U.S. healthcare sector represents 27% of the total healthcare carbon footprint — ranking it as the 13th largest carbon emitter in the world if it were a country.

The client approached Branham Group with aggressive sustainability targets: a 50% reduction in Scope 1 and Scope 2 emissions by 2030, carbon neutrality by 2030, and net-zero emissions by 2050. Hospitals operate 24/7 and require absolute energy reliability.

Branham Group implemented a facility-based solar energy system supported by modernized electrical infrastructure, using a zero-export approach that ensures 100% of the clean energy produced is consumed directly by the hospital facility. The system delivers over 692,000 kWh of annual power production, an estimated $85,000–$110,000 in Year 1 savings, and over $2.5 million in cumulative savings across a 25-year system life.

The system offsets approximately 490 metric tons of CO₂ annually — equivalent to the carbon sequestered by 580 acres of U.S. forests in a single year.`,
  },
  {
    date: 'February 2026',
    category: 'Healthcare & Renewable Energy',
    title: 'Branham Group Delivers 8-Site, 1,480kW Solar Portfolio for Lumenant Healthcare',
    type: 'case-study',
    excerpt:
      'Branham Group executed an 8-location solar energy portfolio for Lumenant across Southeast healthcare facilities — deploying 1,480kW DC of capacity, generating 2,420,000 kWh annually, and offsetting 37,920 tons of CO₂ over the lifetime of the systems.',
    img: '/lumenant-array-layout.jpg',
    body: `Lumenant, a Southeast-based clean energy solutions provider serving the healthcare industry, engaged Branham Group to design and deploy a large-scale solar energy portfolio across 8 healthcare facilities. The result is one of the most significant on-site renewable energy commitments in the region's healthcare sector.

Each of the 8 sites received a custom-engineered 185kW DC ground-mount solar array, with Branham Group managing the complete EPC scope — site layout engineering, structural installation, electrical integration, utility interconnection, permitting, and commissioning — across all locations. The combined portfolio totals 1,480kW DC of installed capacity and is projected to generate 2,420,000 kilowatt-hours of clean electricity annually.

The environmental impact of the portfolio is substantial: over the systems' operational lifetime, the 8 installations are projected to offset 37,920 metric tons of CO₂ — equivalent to 86,200,400 car miles not driven, or 568,064 trees planted and grown to maturity.

Branham Group's ability to manage a complex, multi-site deployment across active healthcare campuses — where construction coordination, patient safety, and operational continuity are non-negotiable — reflects the depth of experience and project management discipline that defines every Branham Group engagement.`,
  },
  {
    date: 'December 23, 2025',
    category: 'Sustainability',
    title: 'Managing Consumer Costs Amidst Rapidly Advancing Technology',
    type: 'news',
    excerpt:
      '"As technology leaps forward, clear and fair regulations must keep pace to support advancement, help prevent price volatility, and promote competition, ultimately benefiting consumers by keeping electricity costs manageable."',
    img: '/atlas-rooftop-solar.jpg',
    body: [
      '"As technology leaps forward, clear and fair regulations must keep pace to support advancement, help prevent price volatility, and promote competition, ultimately benefiting consumers by keeping electricity costs manageable."',
      '',
      'FERC has directed the nation\'s largest grid operator to create new rules that embrace advancing technology while protecting consumer interests. The ruling represents a significant step toward modernizing the nation\'s electrical infrastructure to accommodate growing renewable energy capacity and emerging technologies.',
      '',
      'Continue reading the full FERC fact sheet:',
      'https://www.ferc.gov/news-events/news/fact-sheet-ferc-directs-nations-largest-grid-operator-create-new-rules-embrace?new=',
    ].join('\n'),
  },
  {
    date: 'October 31, 2025',
    category: 'Renewable Energy',
    title: 'Branham Group Selected to Lead Recovery of 1-Megawatt Solar Farm',
    type: 'news',
    excerpt:
      'Following devastating flood damage from Hurricane Helene in 2024, a regional water resource recovery utility selected Branham Group as the EPC contractor to restore and recover its 1-megawatt on-site solar project.',
    img: '/solar-farm-recovery.jpg',
    body: [
      'Branham Group, Inc. Selected to Lead Recovery of 1-Megawatt Solar Farm for Regional Water Resource Recovery Utility',
      '',
      'Following the devastating flood damage caused by Hurricane Helene in 2024, a regional water resource recovery utility has selected Branham Group, Inc. as the Engineering, Procurement, and Construction (EPC) contractor to restore and recover its 1-megawatt on-site renewable solar project.',
      '',
      'Originally designed to supply clean, sustainable energy back to the local power grid to offset energy costs, the solar farm experienced extensive damage during the storm\'s unprecedented flooding.',
      '',
      'Branham Group\'s scope includes the full recovery, redesign, and recommissioning of the system — with a focus on hardening the infrastructure for long-term resilience and reliability.',
      '',
      'The recovery effort will incorporate improved structural foundations, elevated equipment platforms, enhanced electrical protections, and upgraded drainage systems. These measures are intended not only to restore energy production but also to ensure the system can withstand future extreme climate events.',
      '',
      'This recovery project underscores Branham Group\'s commitment to helping clients build resilient, sustainable, and future-ready energy infrastructure, turning challenges into opportunities for stronger, more reliable systems.',
      '',
      'Read the full post on LinkedIn: https://www.linkedin.com/posts/branham-group-inc_sustainability-infrastructure-engineering-activity-7390050545312432128--g88',
    ].join('\n'),
  },
  {
    date: 'Project Summary',
    category: 'Industrial Infrastructure',
    title: 'Switchyard & Power Distribution Upgrades',
    type: 'case-study',
    excerpt:
      'Modernizing substation and switchyard infrastructure delivers enhanced reliability and stability, increased capacity and efficiency, and the digital systems required for real-time monitoring, automation, and renewable energy integration.',
    img: '/case-studies/hgm-switchyard-construction.png',
    caseStudy: 'switchyard-power-distribution-upgrades',
    body: `Switchyard and power distribution upgrades address three core objectives for industrial facilities: reliability, capacity, and modernization.

Enhanced Reliability and Stability — Upgrades often involve replacing aging or outdated equipment with newer, more reliable components, reducing the risk of equipment failures and power outages. Modern switchyard equipment is designed to quickly isolate and clear faults, minimizing the impact of disturbances on the power grid.

Increased Capacity and Efficiency — Upgrades can increase the capacity of the substation to accommodate growing energy demand, optimize power flow through advanced control systems and smart grid components, and facilitate the integration of renewable energy sources such as solar and wind.

Technological Advancement and Modernization — Replacing analog equipment with digital systems enables real-time monitoring, control, and data analysis. Fiber optic networks enable faster, more reliable communication between substations and the control center, while automation and remote control capabilities allow for more efficient operation and maintenance.`,
  },
  {
    date: 'July 2024',
    category: 'Agriculture & Renewable Energy',
    title: 'Chasing Zero: City Roots Farm Achieves Net-Zero Energy Usage',
    type: 'case-study',
    excerpt:
      'Through integrated solar PV, closed-loop geothermal, high-efficiency lighting controls, and automated greenhouse systems, City Roots Organic Farm in Columbia, SC met and exceeded its goal of achieving net-zero energy usage.',
    img: '/case-studies/cityroots-aerial-farm.jpg',
    caseStudy: 'chasing-zero-city-roots-farm',
    body: `City Roots Organic Farm in Columbia, South Carolina initially relied on conventional grid electricity and fossil fuels for its operations. A new operations facility increased Scope 1 and Scope 2 emissions tenfold, while rising energy costs and national client sustainability requirements prompted the farm to explore alternative energy solutions.

Branham Group delivered a comprehensive energy efficiency and renewable energy initiative across four fronts: high-efficiency lighting and controls that reduced lighting energy demand by 50 percent; a grid-tied solar photovoltaic system sized to the farm's demand with net metering; a closed-loop geothermal system that eliminated the need for natural gas entirely while providing both heating and cooling; and an automated greenhouse controls system using a retractable roof, shade curtains, and weather station integration.

The results were substantial reductions in energy costs, a significant decrease in carbon footprint, and enhanced resilience to power outages and energy price fluctuations.

"Branham Group and their project team were integral in developing our conceptual design and then our project delivery," said Eric McClam, Managing Partner of City Roots Farm. "Their knowledge, experience, and service were invaluable to our new operation."`,
  },
  {
    date: 'Project Summary',
    category: 'Industrial Solar',
    title: 'Solar Canopy System for an Industrial Manufacturer in SC',
    type: 'case-study',
    excerpt:
      'An 81kW DC solar canopy producing 175,392 kWh annually — supplying renewable power while creating functional company and community outdoor space, and offsetting 2,537 tons of CO₂ over its life cycle.',
    img: '/case-studies/scmfg-solar-canopy.jpg',
    caseStudy: 'solar-canopy-sc-manufacturer',
    body: `Focused on sustainability and with a corporate goal of achieving net-zero emissions by 2050, a prominent manufacturer in South Carolina has invested in an on-site renewable energy project. The solar canopy not only supplies a portion of their facility's renewable power needs but also aligns with their biodiversity standards, which encompass community outreach and ongoing conservation efforts.

The completed project generates renewable energy, and additionally provides functional company and community outdoor space. From daily employee gatherings to corporate events, the canopy space contributes to a positive corporate culture.

The 81kW DC system produces a projected 175,392 kWh of solar energy annually. Over its life cycle, the installation is projected to offset 2,537 tons of CO₂ — the equivalent of 4,631,638 miles driven by car, or 30,556 trees planted.

Leveraging expertise in renewable energy solutions, Branham Group supported the client's dual vision of sustainability and employee enrichment, thereby setting a precedent for innovative, eco-conscious development within the industrial landscape of South Carolina.`,
  },
];
