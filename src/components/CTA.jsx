import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden" aria-label="Call to Action">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/nucor-interior.jpg')`,
        }}
        role="img"
        aria-label="Solar panels generating clean energy"
      />
      <div className="absolute inset-0 bg-charcoal/88" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold uppercase tracking-[0.25em] text-sm font-semibold mb-4">
          Let's Build Together
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Your Next Project Deserves<br />a Best-in-Class EPC Partner
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're planning a utility-scale solar installation, a new commercial
          facility, or a critical infrastructure upgrade across South Carolina, North Carolina,
          Georgia, or Florida — Branham Group brings 45+ years of Southeast EPC expertise
          to engineer, procure, and construct solutions built to perform.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="btn-gold flex items-center gap-2">
            Start Your Project <ArrowRight size={16} />
          </a>
          <a href="#services" className="btn-outline">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
