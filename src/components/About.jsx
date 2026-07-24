import { CheckCircle } from 'lucide-react';

const pillars = [
  {
    title: 'Client-First Mindset',
    desc: 'Every project starts with listening. We build solutions around your goals, not ours — delivering outcomes that exceed expectations and endure for generations.',
  },
  {
    title: 'Community Impact',
    desc: 'We invest in the communities where we work. Every project creates lasting positive change — from job creation and local partnerships to cleaner energy for all.',
  },
  {
    title: 'Environmental Responsibility',
    desc: 'Sustainability is at the core of every decision we make. Our work actively reduces ecological impact and accelerates the transition to a cleaner, more resilient future.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="rounded-lg overflow-hidden aspect-[4/3] bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url('/branham-office.jpg')`,
              }}
              role="img"
              aria-label="Branham Group office building"
            />
            {/* Gold accent badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 shadow-xl hidden md:block">
              <div className="text-4xl font-black">1979</div>
              <div className="text-xs uppercase tracking-widest font-semibold mt-1">Est.</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="section-label">About Us</p>
            <h2 className="section-title mb-6">
              A Legacy of Building<br />a Better Tomorrow
            </h2>
            <p className="text-charcoal-muted leading-relaxed mb-4">
              Founded in 1979 in South Carolina, Branham Group has grown from a
              regional construction firm into a second-generation EPC company operating across
              the Southeast — serving clients throughout South Carolina, North Carolina, Georgia,
              and Florida.
            </p>
            <p className="text-charcoal-muted leading-relaxed mb-8">
              In 2010, we made a strategic pivot toward renewable energy and sustainable building
              practices. Today, we manage complete project lifecycles — from engineering and design
              through procurement and construction — bringing proven technology, innovation
              and quality to every project we deliver.
            </p>

            <div className="space-y-5 mb-10">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <CheckCircle className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <div className="font-bold text-charcoal mb-1">{p.title}</div>
                    <div className="text-charcoal-muted text-sm leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold">Talk to Our Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
