import { ClipboardList, HardHat, Layers, PenTool } from 'lucide-react';

const services = [
  {
    icon: ClipboardList,
    title: 'Preconstruction Services',
    desc: 'We lay the groundwork before a shovel hits the dirt. Our preconstruction team delivers detailed cost estimating, site analysis, scheduling, value engineering, and constructability reviews — setting every project up for on-time, on-budget execution.',
    img: '/preconstruction-array-layout.jpg',
  },
  {
    icon: HardHat,
    title: 'Construction Management',
    desc: 'From mobilization through final commissioning, our construction managers coordinate every trade, schedule, and resource on site. We maintain strict quality control and safety standards to deliver projects that perform exactly as designed.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Layers,
    title: 'Engineering, Procurement & Construction',
    desc: 'Our full EPC capability means a single point of accountability from concept to completion. We manage engineering, sourcing, and field construction under one contract — eliminating gaps, reducing risk, and delivering integrated results.',
    img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: PenTool,
    title: 'Design-Build',
    desc: 'Speed and efficiency without sacrificing quality. Our design-build approach integrates architecture, engineering, and construction into a single, streamlined process — reducing project timelines and giving owners greater cost certainty from day one.',
    img: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">What We Do</p>
          <h2 className="section-title mx-auto">
            Full-Spectrum Project Delivery
          </h2>
          <p className="text-charcoal-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            From the first planning conversation to the final walkthrough, Branham Group
            manages every phase of your project with precision, accountability, and a
            relentless focus on long-term performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 overflow-hidden"
                  style={{ backgroundImage: `url('${svc.img}')` }}
                  role="img"
                  aria-label={`${svc.title} service`}
                />
                <div className="p-6">
                  <div className="w-10 h-10 bg-gold/10 rounded flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{svc.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold">Discuss Your Project</a>
        </div>
      </div>
    </section>
  );
}
