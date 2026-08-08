// Full case study content transcribed from Branham Group white papers and project sheets.
// Each entry renders as a standalone page at /news/:slug — built for direct LinkedIn sharing.

export const caseStudies = [
  // ─────────────────────────────────────────────────────────────
  // 1. HEALTHCARE — "Looking to Lead" white paper (9 pages)
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'looking-to-lead-healthcare-sustainability',
    seoTitle: 'Healthcare Solar Case Study | Branham Group',
    kind: 'White Paper',
    industry: 'Healthcare',
    title: 'Looking to Lead',
    subtitle: 'A Case Study of Healthcare and Environmental Sustainability',
    deck: 'How a National Healthcare Organization is Using Renewable Energy to Reduce Costs and Emissions',
    date: 'February 2026',
    byline: 'By Branham Group, Inc.',
    heroImg: '/case-studies/hospital-solar-sunset.jpg',
    pdf: '/case-studies/BG_Case-Study-Healthcare.pdf',
    metaDescription:
      'How a national healthcare organization cut emissions and costs with on-site solar: 692,000+ kWh a year, 490 tons of CO₂ offset, $2.5M lifetime savings.',
    stats: [
      { value: '692,000+', unit: 'kWh', label: 'Annual Power Production' },
      { value: '$2.5M', unit: '', label: 'Lifetime Savings (25 yr)' },
      { value: '490', unit: 'metric tons', label: 'CO₂ Offset Annually' },
      { value: '5–7', unit: 'years', label: 'Projected Full ROI' },
    ],
    sections: [
      {
        type: 'prose',
        heading: 'Introduction',
        body: [
          'U.S. healthcare systems are among the nation\'s most energy-intensive organizations, accounting for approximately 9% of total domestic carbon emissions. Globally, the U.S. healthcare sector represents 27% of the total healthcare carbon footprint — ranking it as the 13th largest carbon emitter in the world if it were a country.',
          'To address these impacts, a leading energy infrastructure solutions provider partnered with a nationally recognized healthcare organization to deploy on-site solar photovoltaic (PV) generation. This project serves as a cornerstone for broader grid modernization, reducing Scope 1 and Scope 2 emissions while improving operational resiliency for critical medical services.',
        ],
      },
      {
        type: 'list',
        heading: 'Challenges',
        intro: 'The healthcare industry faces a "triple threat" regarding energy and environmental impact:',
        items: [
          {
            title: 'Emission Intensity',
            desc: 'Approximately 40% of global healthcare emissions stem from the generation and distribution of electricity, gas, heating, and cooling.',
          },
          {
            title: 'Grid Dependency',
            desc: 'Hospitals rely on centralized grids that are increasingly stressed by extreme weather and rising demand.',
          },
          {
            title: 'Financial Pressure',
            desc: 'Escalating energy costs and "peak demand" charges place additional financial pressure on healthcare providers.',
          },
        ],
      },
      {
        type: 'prose',
        heading: 'Background',
        body: [
          'The client approached Branham Group with aggressive sustainability targets: a 50% reduction in Scope 1 and Scope 2 emissions by 2030, carbon neutrality by 2030, and net-zero emissions by 2050.',
          'Hospitals operate 24/7 and require absolute energy reliability. Branham Group was engaged to design and install an on-site solar PV system at a major hospital campus to meet these decarbonization goals without compromising critical care operations.',
        ],
        bullets: [
          '50% reduction in Scope 1 and Scope 2 emissions by 2030',
          'Carbon neutrality by 2030',
          'Net-zero emissions by 2050',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/hospital-hardhat-field.jpg',
        alt: 'Branham Group hard hat on site at the hospital campus solar project',
        caption: 'The project site prior to construction — a former open field adjacent to the hospital campus.',
      },
      {
        type: 'list',
        heading: 'Solution',
        intro:
          'Branham Group implemented a facility-based solar energy system supported by modernized electrical infrastructure. The system utilizes a zero-export approach, ensuring 100% of the clean energy produced is consumed directly by the hospital facility to offset high-cost utility power.',
        introLabel: 'Key Technical & Economic Elements:',
        items: [
          {
            title: 'Capacity',
            desc: 'Over 692,000 kWh of annual power production.',
          },
          {
            title: 'Annual Savings',
            desc: 'Based on average commercial healthcare rates, this system is projected to save the facility approximately $85,000 to $110,000 in Year 1 energy costs.',
          },
          {
            title: 'Lifetime Value',
            desc: 'Over a 25-year system life, the project is estimated to provide over $2.5 million in cumulative savings, factoring in conservative utility price inflation.',
          },
          {
            title: 'Integration',
            desc: 'Seamless connection with existing infrastructure to ensure uninterrupted power for the facility\'s critical requirements.',
          },
          {
            title: 'Future-Proofing',
            desc: 'A modular design that allows for future expansion and improved grid modernization.',
          },
        ],
      },
      {
        type: 'image',
        src: '/case-studies/hospital-array-diagram.png',
        alt: 'Engineered array layout showing the solar field, point of interconnection, and site boundaries',
        caption: 'Array layout — the engineered site plan showing panel rows, point of interconnection, disconnects, and silt fence.',
        contain: true,
      },
      {
        type: 'list',
        heading: 'Advantages & Supporting Data',
        intro:
          'Industry research and project modeling demonstrate that on-site solar delivers measurable value across environmental, operational, and financial dimensions:',
        items: [
          {
            title: 'Emissions Reduction',
            desc: 'Offsets approximately 490 metric tons of CO₂ annually — equivalent to the carbon sequestered by 580 acres of U.S. forests in a single year.',
          },
          {
            title: 'Cost Stability',
            desc: 'Provides predictable, long-term energy expenditures that serve as a permanent hedge against volatile utility market spikes.',
          },
          {
            title: 'ROI & Incentives',
            desc: 'With federal incentives like the Investment Tax Credit (ITC), similar healthcare installations typically achieve full ROI within 5 to 7 years, providing nearly two decades of essentially free energy thereafter.',
          },
          {
            title: 'Operational Resiliency',
            desc: 'Enhanced reliability for mission-critical medical services during grid disruptions, ensuring patient safety remains uncompromised.',
          },
        ],
      },
      {
        type: 'list',
        heading: 'Advantages',
        intro: 'The proposed solution delivers measurable value across environmental, operational, and financial dimensions:',
        items: [
          { title: 'Emissions Reduction', desc: 'Lower Scope 1 and Scope 2 emissions aligned with climate goals.' },
          { title: 'Cost Savings', desc: 'Reduced long-term energy expenditures and hedge against utility price volatility.' },
          { title: 'Resiliency', desc: 'Enhanced reliability for mission-critical healthcare operations.' },
          { title: 'Sustainability Leadership', desc: 'Demonstrates commitment to environmental stewardship and public health.' },
        ],
        outro:
          'Compared to continued reliance on grid electricity, on-site solar offers a lower-carbon, more resilient, and increasingly cost-effective alternative.',
      },
      {
        type: 'image',
        src: '/case-studies/hospital-window-view.jpg',
        alt: 'View from inside the hospital looking out onto a landscaped stream and green space',
        caption: 'Healthier places and healthier people — the environment patients experience is part of the outcome.',
      },
      {
        type: 'prose',
        heading: 'Conclusion',
        body: [
          'Healthcare organizations play a critical role in addressing climate change. By investing in on-site renewable energy and grid modernization, providers can significantly reduce emissions while strengthening operational resiliency.',
        ],
        subheading: 'Branham Group recommends:',
        bullets: [
          'Expanding on-site renewable generation across facility portfolios where feasible',
          'Integrating energy planning into long-term capital strategies to stabilize operational budgets',
          'Leveraging clean energy projects to meet both aggressive sustainability targets and bottom-line financial objectives',
        ],
        closing:
          'These actions position healthcare organizations to lead in environmental sustainability while protecting both patient health and operational continuity.',
      },
    ],
    sources: [
      'Health Care Without Harm and Arup. "Health Care\'s Climate Footprint: How the Health Sector Contributes to the Global Climate Crisis and Opportunities for Action." September 2019.',
      'U.S. Environmental Protection Agency. "Greenhouse Gas Equivalencies Calculator." February 2026.',
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. CITY ROOTS — "Chasing Zero" white paper (12 pages)
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'chasing-zero-city-roots-farm',
    seoTitle: 'City Roots Net-Zero Case Study | Branham Group',
    kind: 'White Paper',
    industry: 'Agriculture',
    title: 'Chasing Zero',
    subtitle: 'A Case Study of City Roots Farm — Columbia, SC',
    deck: 'From Seed to Sustainability: Achieving Net-Zero Energy Usage for an Organic Leafy Greens Farm',
    date: 'July 2024',
    byline: 'By Jarrett Branham, Brandy Freeling, and Eric McClam',
    heroImg: '/case-studies/cityroots-aerial-farm.jpg',
    pdf: '/case-studies/BG_Case-Study-City-Roots.pdf',
    metaDescription:
      'How City Roots Farm in Columbia, SC reached net-zero energy with integrated solar PV, closed-loop geothermal, and automated greenhouse controls.',
    stats: [
      { value: 'Net-Zero', unit: '', label: 'Energy Status Achieved' },
      { value: '50%', unit: 'reduction', label: 'Lighting Energy Demand' },
      { value: '10X', unit: '', label: 'Emissions Growth Addressed' },
      { value: '0', unit: 'natural gas', label: 'Fossil Fuel Heating' },
    ],
    sections: [
      {
        type: 'prose',
        heading: 'Introduction',
        body: [
          'In recent years, there has been a growing emphasis on sustainability within the agriculture sector, driven by concerns over climate change and resource depletion. Small-scale farms, like microgreens farms, are increasingly seeking ways to reduce their environmental footprint while maintaining efficient operations.',
          'This case study examines the journey of a microgreens farm towards achieving net-zero energy usage through the implementation of solar power (PV) and geothermal energy solutions.',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/cityroots-microgreens.jpg',
        alt: 'Trays of microgreens growing inside the City Roots industrial greenhouse',
        caption: 'City Roots Farm — Columbia, South Carolina.',
      },
      {
        type: 'prose',
        heading: 'Background',
        body: [
          'Located in a rural area with ample sunlight and geothermal resources, the farm initially relied on conventional energy sources, drawing power from the grid and relying on fossil fuels, for its operations. However, rising energy costs and a desire to align with sustainable practices prompted the farm\'s management to explore alternative energy solutions.',
          'This bold vision paved the way for a strategic investment in solar power (PV) and geothermal energy systems, setting the stage for a transformative journey toward energy self-sufficiency and environmental harmony.',
        ],
      },
      {
        type: 'list',
        heading: 'Challenges',
        intro: 'The farm faced several challenges on its path to sustainability:',
        items: [
          {
            title: 'Exponential Growth',
            desc: 'The farm\'s new operations facility created a massive increase (by 10X) in its Scope 1 and Scope 2 emissions.',
          },
          {
            title: 'Increased Energy Costs',
            desc: 'Conventional energy sources were becoming increasingly expensive, putting pressure on the farm\'s operating budget.',
          },
          {
            title: 'Environmental Impact',
            desc: 'The farm\'s reliance on fossil fuels contributed to carbon emissions and environmental degradation.',
          },
          {
            title: 'Seasonal Fluctuations',
            desc: 'The farm experienced seasonal variations in energy demand, based on the need to maintain consistent growing conditions year-round.',
          },
          {
            title: 'Client Expectations',
            desc: 'National clients now expect City Roots to meet or exceed sustainability requirements and CO₂ emission reductions.',
          },
        ],
      },
      {
        type: 'prose',
        heading: 'Solution — Part 1',
        subheading: 'High-Efficiency Lighting & Controls',
        body: [
          'To address these challenges, the farm embarked on a comprehensive energy efficiency and renewable energy initiative.',
          'For the farm\'s electrical systems, high-efficiency lighting and controls were designed and installed within their industrial greenhouse and processing facility. The basis of the design, focused on lighting controls, reduced their energy demand by 50 percent of conventional high-efficiency lighting.',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/cityroots-greenhouse-lighting.jpg',
        alt: 'Interior of the City Roots greenhouse showing the high-efficiency lighting array',
        caption: 'High-efficiency lighting and controls throughout the industrial greenhouse.',
      },
      {
        type: 'prose',
        heading: 'Solution — Part 2',
        subheading: 'Solar Power (PV) Installation',
        bullets: [
          'The farm installed a grid-tied solar photovoltaic (PV) system over several acres to harness solar energy.',
          'The PV system was sized to meet the farm\'s energy demand, considering factors such as peak usage and seasonal variations.',
          'Through net metering agreements with the utility company, excess solar energy generated during sunny periods was exported to the grid, offsetting grid electricity usage during low-sunlight periods or high energy demand.',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/cityroots-solar-aerial.jpg',
        alt: 'Aerial view of the ground-mount solar array beside the City Roots greenhouse',
        caption: 'The grid-tied ground-mount PV array, sited directly adjacent to the greenhouse operation.',
      },
      {
        type: 'prose',
        heading: 'Solution — Part 3',
        subheading: 'Geothermal Systems',
        bullets: [
          'The geothermal system eliminated the farm\'s need for natural gas.',
          'Leveraging the farm\'s access to geothermal resources, a closed-loop geothermal system was installed which provides both heating and cooling for greenhouse operations.',
          'The system provides heat during winter months and dissipates excess heat during summer, providing a consistent and energy-efficient climate control solution. Previously, there was no ability to cool the greenhouse effectively through conventional fossil fuel-based systems.',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/cityroots-radiant-floor.jpg',
        alt: 'Radiant floor tubing installed across the greenhouse floor prior to pour',
        caption: 'Closed-loop geothermal radiant floor tubing during installation — heating and cooling delivered directly to the plant root zone.',
      },
      {
        type: 'prose',
        heading: 'Solution — Part 4',
        subheading: 'Greenhouse Controls System',
        bullets: [
          'The greenhouse utilizes a retractable roof, side walls, and shade curtains to efficiently ventilate excess heat and humidity. These systems removed the necessity to utilize exhaust fans and evaporative cooler pumps, further reducing energy consumption.',
          'The greenhouse utilizes a weather station to optimize internal temperatures in conjunction with the geothermal heating and cooling radiant floors, and high-efficiency lighting controls.',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/cityroots-greenhouse-crops.jpg',
        alt: 'Crops growing under the automated greenhouse control system at City Roots',
        caption: 'Retractable roof, shade curtains, and weather-station automation working as a single climate system.',
      },
      {
        type: 'list',
        heading: 'Results',
        intro: 'The implementation of solar power (PV) and geothermal energy solutions yielded significant benefits for the microgreens farm:',
        items: [
          {
            title: 'Reduced Energy Costs',
            desc: 'By generating clean, renewable energy onsite, the farm significantly reduced its reliance on grid electricity, resulting in substantial cost savings over time. The adoption of geothermal further contributed to energy cost reduction by minimizing the need for conventional heating and cooling systems.',
          },
          {
            title: 'Environmental Sustainability',
            desc: 'The transition to renewable energy sources and the reduction in fossil fuel usage led to a significant decrease in the farm\'s carbon footprint. The farm\'s commitment to renewable energy and sustainable practices enhanced its reputation as an environmentally responsible business within the region and among consumers.',
          },
          {
            title: 'Enhanced Resilience',
            desc: 'Integrating solar power and geothermal energy systems enhanced the farm\'s resilience to external energy disruptions, such as power outages or fluctuations in energy prices. The ability to generate and store energy onsite provided greater independence and security, ensuring continuous operation even during adverse conditions.',
          },
        ],
      },
      {
        type: 'image',
        src: '/case-studies/cityroots-solar-dusk.jpg',
        alt: 'The City Roots solar array at dusk with the greenhouse lit in the background',
        caption: 'Onsite generation at dusk — energy independence for a year-round growing operation.',
      },
      {
        type: 'prose',
        heading: 'Conclusion',
        body: [
          'Through strategic investments in solar power (PV) and geothermal energy solutions, the microgreens farm met and exceeded its goal of achieving net-zero energy usage. By integrating these renewable energy sources, the farm reduced its environmental footprint and enhanced its overall sustainability and resilience in the face of fluctuating energy costs and environmental challenges.',
          'This case study serves as a compelling model for other small-scale farms looking to embrace sustainable practices and reduce their environmental impact. By demonstrating the feasibility and benefits of renewable energy adoption in agriculture, it showcases a pathway towards greater energy independence, cost savings, and environmental stewardship within the farming community.',
          'Moreover, the success of this initiative underscores the potential for renewable energy technologies to drive positive change across various industries, empowering businesses to thrive while contributing to a greener, more sustainable future.',
        ],
      },
    ],
    testimonial: {
      quote:
        'The geothermal radiant system not only reduced our energy hard costs, but it has increased our production yield due to its effectiveness in appropriately heating and cooling the plant\'s root zone. The ROI on the PV (solar) is very quick compared to the capital expenditure. The onsite production of energy allows us to make smart business decisions without the mystery of the monthly costs of energy affecting our COGs.\n\nOur commitment to Net Zero energy on the farm has met and exceeded the national retail vendors\' requirements for ESG.\n\nBranham Group and their project team were integral in developing our conceptual design and then our project delivery. Their knowledge, experience, and service were invaluable to our new operation.',
      author: 'Eric McClam',
      role: 'Managing Partner, City Roots Farm',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 3. SC MANUFACTURER — Solar Canopy System project sheet
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'solar-canopy-sc-manufacturer',
    seoTitle: 'Solar Canopy Case Study | Branham Group',
    kind: 'Project Summary',
    industry: 'Industrial',
    title: 'Solar (Photovoltaic) Canopy System',
    subtitle: 'For an Industrial Manufacturer in South Carolina',
    deck: 'An 81kW DC solar canopy delivering renewable power, community gathering space, and measurable environmental return.',
    date: 'Project Summary',
    byline: 'Branham Group, Inc.',
    heroImg: '/case-studies/scmfg-solar-canopy.jpg',
    pdf: '/case-studies/BG_SC-Manufacturing-Solar-Summary.pdf',
    metaDescription:
      'An 81kW DC solar canopy for a South Carolina manufacturer — 175,392 kWh produced annually and 2,537 tons of CO₂ offset over its life cycle.',
    stats: [
      { value: '81kW DC', unit: '', label: 'System Size' },
      { value: '175,392', unit: 'kWh', label: 'Annual Solar Production' },
      { value: '2,537', unit: 'tons', label: 'Life Cycle CO₂ Offset' },
      { value: '30,556', unit: 'trees', label: 'Equivalent Planted' },
    ],
    sections: [
      {
        type: 'prose',
        heading: 'Overview',
        body: [
          'Focused on sustainability and with a corporate goal of achieving net-zero emissions by 2050, a prominent manufacturer in South Carolina has invested in an on-site renewable energy project.',
          'The solar canopy not only supplies a portion of their facility\'s renewable power needs but also aligns with their biodiversity standards, which encompass community outreach and ongoing conservation efforts.',
        ],
      },
      {
        type: 'image',
        src: '/case-studies/scmfg-solar-canopy.jpg',
        alt: 'The completed solar canopy structure providing covered outdoor space at the manufacturing facility',
        caption: 'The completed canopy — renewable generation overhead, functional gathering space below.',
      },
      {
        type: 'prose',
        heading: 'Outcome',
        body: [
          'The completed project generates renewable energy, and additionally provides functional company and community outdoor space. From daily employee gatherings to corporate events, the canopy space contributes to a positive corporate culture.',
          'Leveraging expertise in renewable energy solutions, Branham Group supported the client\'s dual vision of sustainability and employee enrichment, thereby setting a precedent for innovative, eco-conscious development within the industrial landscape of South Carolina.',
        ],
      },
      {
        type: 'equivalencies',
        heading: 'Life Cycle Environmental Benefits',
        intro: 'Projected over the operational life of the system:',
        items: [
          { value: '2,537', label: 'Tons CO₂ Offset' },
          { value: '4,631,638', label: 'Miles Driven by Car' },
          { value: '30,556', label: 'Trees Planted' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. HGM SWITCHYARD — Industrial project sheet
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'switchyard-power-distribution-upgrades',
    seoTitle: 'Switchyard Upgrades Case Study | Branham Group',
    kind: 'Project Summary',
    industry: 'Industrial',
    title: 'Switchyard & Power Distribution Upgrades',
    subtitle: 'Industrial Electrical Infrastructure',
    deck: 'Modernizing substation and switchyard infrastructure for reliability, capacity, and grid readiness.',
    date: 'Project Summary',
    byline: 'Branham Group, Inc.',
    heroImg: '/case-studies/hgm-switchyard-construction.png',
    pdf: '/case-studies/BG_Case-Study-HGMSY-Switchyard.pdf',
    metaDescription:
      'Switchyard and power distribution upgrades that improve reliability, increase substation capacity, and modernize industrial electrical infrastructure.',
    stats: [
      { value: '24.9kV', unit: '', label: 'Switchyard Voltage' },
      { value: 'Full EPC', unit: '', label: 'Delivery Method' },
      { value: 'Industrial', unit: '', label: 'Sector' },
      { value: 'Grid-Ready', unit: '', label: 'Design Standard' },
    ],
    sections: [
      {
        type: 'image',
        src: '/case-studies/hgm-switchyard-construction.png',
        alt: 'Structural steel being erected for the new switchyard during construction',
        caption: 'Structural steel erection during switchyard construction.',
      },
      {
        type: 'list',
        heading: 'Enhanced Reliability and Stability',
        numbered: 1,
        items: [
          {
            title: 'Preventing Failures',
            desc: 'Upgrades often involve replacing aging or outdated equipment with newer, more reliable components, reducing the risk of equipment failures and power outages.',
          },
          {
            title: 'Improved Fault Handling',
            desc: 'Modern switchyard equipment is designed to quickly isolate and clear faults, minimizing the impact of disturbances on the power grid and ensuring faster restoration of service.',
          },
          {
            title: 'Optimized Asset Management',
            desc: 'Preventative maintenance and condition monitoring systems can be implemented during upgrades to optimize equipment lifespan and reduce the risk of unexpected failures.',
          },
        ],
      },
      {
        type: 'list',
        heading: 'Increased Capacity and Efficiency',
        numbered: 2,
        items: [
          {
            title: 'Meeting Growing Demand',
            desc: 'Switchyard upgrades can increase the capacity of the substation to accommodate growing energy demand from new customers or industries.',
          },
          {
            title: 'Optimizing Power Flow',
            desc: 'Modern technologies, such as advanced control systems and smart grid components, can optimize power flow within the substation and the grid, reducing losses and improving efficiency.',
          },
          {
            title: 'Integrating Renewable Energy',
            desc: 'Upgrades can facilitate the integration of renewable energy sources, such as solar and wind power, by providing the necessary infrastructure and control systems.',
          },
        ],
      },
      {
        type: 'list',
        heading: 'Technological Advancement and Modernization',
        numbered: 3,
        items: [
          {
            title: 'Digital Transformation',
            desc: 'Upgrades often involve replacing analog equipment with digital systems, enabling real-time monitoring, control, and data analysis.',
          },
          {
            title: 'Improved Communication',
            desc: 'Fiber optic networks and other advanced communication technologies can enable faster and more reliable communication between substations and the control center.',
          },
          {
            title: 'Automation and Remote Control',
            desc: 'Upgrades can incorporate automation and remote control capabilities, allowing for more efficient operation and maintenance of the substation.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. GEORGIA SOLAR FARM SUMMIT — Press release
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'georgia-solar-farm-summit-2026',
    seoTitle: 'Branham Group at 2026 Georgia Solar Farm Summit',
    kind: 'Press Release',
    industry: 'Agrivoltaics',
    title: 'Branham Group Attends 2026 Georgia Solar Farm Summit',
    subtitle: 'Athens, GA — July 18, 2026',
    deck: 'Southeast EPC leader engages with nation\'s premier agrivoltaics conference, reinforcing commitment to responsible solar development and land stewardship.',
    date: 'July 18, 2026',
    byline: 'Branham Group, Inc.',
    heroImg: '/gasfs-2026-hero.png',
    pdf: null,
    metaDescription:
      'Branham Group at GASFS26 in Athens, GA — the nation\'s premier agrivoltaics conference on solar grazing, crop cultivation, and pollinator habitat.',
    stats: [
      { value: '$70B+', unit: '', label: 'GA Agriculture & Forestry' },
      { value: '25–40', unit: 'years', label: 'Typical Project Lifespan' },
      { value: '1979', unit: '', label: 'Branham Group Founded' },
      { value: '4', unit: 'states', label: 'SC · NC · GA · FL' },
    ],
    sections: [
      {
        type: 'prose',
        body: [
          'ATHENS, GA — July 18, 2026 — The Branham Group team attended the 2026 Georgia Solar Farm Summit (GASFS26), held July 15–16 at The Georgia Center on the University of Georgia campus in Athens, GA. The summit, organized by Solar Farm Summit LLC, convenes leading interdisciplinary practitioners across energy, agriculture, planning, and research to advance responsible solar development, land conservation, and farm viability.',
        ],
      },
      {
        type: 'list',
        heading: 'Summit Focus: Where Solar Meets the Land',
        intro:
          'This year\'s summit centered on agrivoltaics (AgPV) — the intentional co-location of agriculture and solar energy systems on the same parcel of land. Key topics included:',
        items: [
          {
            title: 'Solar Grazing',
            desc: 'Integrating livestock grazing with solar panel installations to manage vegetation while maintaining agricultural production.',
          },
          {
            title: 'Crop Cultivation',
            desc: 'Growing crops beneath and between solar panels in configurations designed for dual yields.',
          },
          {
            title: 'Pollinator Habitat & Conservation',
            desc: 'Establishing native vegetation and conservation habitats under solar arrays.',
          },
          {
            title: 'Ecovoltaics',
            desc: 'Pairing solar development with broader ecological stewardship, including soil health, water management, and forestry protection.',
          },
        ],
        outro:
          'Georgia\'s agricultural and forestry landscapes represent a $70 billion+ industry, ranking as the state\'s leading economic driver through poultry, peanuts, cotton, timber, and specialty crops. As utility-scale solar expands to meet growing electricity demand, the summit explored how agrivoltaics offers a framework for integrating renewable energy development with working lands — without sacrificing agricultural productivity or long-term land health.',
      },
      {
        type: 'list',
        heading: 'Featured Speakers and Thought Leadership',
        intro: 'The summit featured leading voices in agrivoltaics and land stewardship, including:',
        items: [
          {
            title: 'Will Harris — Owner, White Oak Pastures',
            desc: 'A nationally recognized advocate for regenerative agriculture and real-world dual-use solar and grazing case studies.',
          },
          {
            title: 'Jordan Macknick — Senior Analyst, NREL',
            desc: 'Lead researcher for the InSPIRE Project, a landmark study on solar and agriculture co-location.',
          },
          {
            title: 'Iain Ward — Founder, Solar Farm Summit',
            desc: 'Convening the interdisciplinary solar + agriculture community.',
          },
          {
            title: 'Additional Experts',
            desc: 'Practitioners from academia, utility companies, and conservation organizations.',
          },
        ],
      },
      {
        type: 'pullquote',
        quote:
          'The conversations at GASFS26 were among the most substantive we\'ve seen on responsible solar development in the Southeast. Agrivoltaics is moving from pilot to practice — and the practitioners in that room are the ones building it.',
      },
      {
        type: 'list',
        heading: 'Key Takeaways for the Solar Industry',
        items: [
          {
            title: '1. Agrivoltaics Is No Longer Experimental',
            desc: 'Sessions on solar grazing, crop production, and conservation habitat made clear that dual-use solar has crossed the threshold from research pilots to deployable, bankable projects. The InSPIRE Project and AgriSolar Clearinghouse have generated a growing body of data and technical resources supporting real-world implementation.',
          },
          {
            title: '2. Land Stewardship Begins at Siting',
            desc: 'Soil health, water management, and vegetation planning cannot be retrofit afterthoughts. Conservation best practices belong in the project planning and construction phases — not post-install revisions. The summit reinforced that siting decisions made today will influence how solar development interacts with working and natural landscapes for the 25–40 year lifespan of a typical project.',
          },
          {
            title: '3. Georgia Is a Crucial Market',
            desc: 'With the state\'s combination of abundant agricultural land, growing energy demand, and supportive regulatory environment, Georgia represents a pivotal opportunity — and a testing ground — for agrivoltaic deployment. Decisions made now about vegetation management, grazing agreements, and crop integration will shape the region\'s energy and agricultural landscape for decades.',
          },
          {
            title: '4. Collaboration Is Non-Negotiable',
            desc: 'The most productive sessions brought farmers, solar developers, utilities, researchers, and policymakers into the same conversation. No single stakeholder can drive agrivoltaics alone — it requires aligned incentives, shared best practices, and interdisciplinary problem-solving.',
          },
        ],
      },
      {
        type: 'prose',
        heading: 'Branham Group: Built for This Moment',
        body: [
          'Founded in 1979 as a traditional general contracting firm and focused on clean energy infrastructure for over 16 years, Branham Group brings nearly five decades of infrastructure expertise to the agrivoltaics conversation. The company serves clean energy developers, utilities, and asset owners across South Carolina, North Carolina, Georgia, and Florida — with deep experience in both agricultural infrastructure and distributed energy.',
          '"Our role is simple: translate the principles discussed at summits like GASFS26 into projects built to perform for decades," Jarrett Branham noted. "We bring the sound basis of design, engineering discipline, regional knowledge, and construction expertise that agrivoltaic and responsible-siting projects require."',
          'Branham Group\'s integrated EPC capabilities span site development, civil construction, electrical installation, and commissioning — with a track record of delivering complex, multi-stakeholder renewable energy projects on time and on budget.',
        ],
      },
      {
        type: 'prose',
        heading: 'Looking Ahead',
        body: [
          'The Branham Group team left GASFS26 more confident than ever that the Southeast is ready for a new generation of solar projects — ones that work with the land, not around it.',
          '"We\'re proud to be part of this conversation," the team said. "Responsible solar starts with smart siting and the right EPC partner. We\'re building both."',
        ],
      },
      {
        type: 'prose',
        heading: 'About Branham Group',
        body: [
          'Branham Group is a leading Southeast-focused Engineering, Procurement, and Construction (EPC) partner for solar energy, agricultural infrastructure, and resilient utility systems. Since 1979, the company has delivered complex infrastructure projects across the Southeast — combining deep regional expertise with a commitment to quality, safety, and sustainable land stewardship.',
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((cs) => cs.slug === slug);
