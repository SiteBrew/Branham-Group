import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = {
  Company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Our Projects', href: '/#projects' },
    { label: 'News', href: '/news', isPage: true },
    { label: 'Affiliations', href: '/affiliations', isPage: true },
    { label: 'Contact', href: '/#contact' },
  ],
  Services: [
    { label: 'Preconstruction', href: '/#services' },
    { label: 'Construction Management', href: '/#services' },
    { label: 'EPC', href: '/#services' },
    { label: 'Design-Build', href: '/#services' },
  ],
  Markets: [
    { label: 'Commercial', href: '/#markets' },
    { label: 'Industrial', href: '/#markets' },
    { label: 'Healthcare', href: '/#markets' },
    { label: 'Utility', href: '/#markets' },
    { label: 'Agriculture', href: '/#markets' },
    { label: 'Mining', href: '/#markets' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src="/logo-white.png" alt="Branham Group — EPC Services" className="h-28 w-auto" style={{ mixBlendMode: 'screen' }} />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Full-service Engineering, Procurement, and Construction company dedicated to
              clean energy and resilient infrastructure across the Southeast since 1979.
            </p>
            <address className="space-y-3 text-sm not-italic">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>11 E Wall Street, Mount Pleasant, SC 29464</span>
              </div>
                          </address>
            <div className="flex gap-3 mt-6">
              {[
                { label: 'in', href: 'https://www.linkedin.com/company/branham-group-inc/', title: 'LinkedIn' },
                { label: 'f', href: 'https://www.facebook.com/people/Branham-Group-Inc/100077987935652/?mibextid=LQQJ4d', title: 'Facebook' },
                { label: 'ig', href: 'https://www.instagram.com/branham.group/', title: 'Instagram' },
              ].map(({ label, href, title }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  title={title}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-200 text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <nav key={title} aria-label={`${title} links`}>
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.isPage ? (
                      <Link to={item.href} className="text-sm hover:text-gold transition-colors duration-200">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className="text-sm hover:text-gold transition-colors duration-200">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Branham Group, Inc. All rights reserved. Mount Pleasant, SC.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>

        {/* SiteBrew credit */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/20">
            Built and maintained by{' '}
            <a
              href="https://sitebrew.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline underline-offset-2"
            >
              SiteBrew
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
