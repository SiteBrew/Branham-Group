const affiliations = [
  { name: 'Solar Energy Industries Association', abbr: 'SEIA' },
  { name: 'SC Chamber of Commerce', abbr: 'SC Chamber' },
  { name: 'Associated Builders & Contractors', abbr: 'ABC' },
  { name: 'US Green Building Council', abbr: 'USGBC' },
  { name: 'National Renewable Energy Laboratory', abbr: 'NREL' },
  { name: 'SC Environmental Trust', abbr: 'SCET' },
];

export default function Affiliations() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100" aria-label="Industry Affiliations">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-widest font-semibold text-charcoal-muted mb-10">
          Industry Affiliations &amp; Memberships
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {affiliations.map(({ name, abbr }) => (
            <div
              key={name}
              title={name}
              className="text-charcoal-muted text-sm font-semibold uppercase tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-200 text-center"
            >
              {abbr}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
