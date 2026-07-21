import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'News', href: '/news', isPage: true },
  { label: 'Affiliations', href: '/affiliations', isPage: true },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const linkClass = "text-sm font-semibold text-charcoal-muted uppercase tracking-wider hover:text-gold transition-colors duration-200";
  const activeLinkClass = "text-sm font-semibold text-gold uppercase tracking-wider";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-28 md:h-36">
        {/* Logo */}
        <Link to="/" aria-label="Branham Group — Home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Branham Group"
            className="h-20 md:h-28 w-auto"
            width="220"
            height="112"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.label}
                to={link.href}
                className={location.pathname === link.href ? activeLinkClass : linkClass}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={linkClass}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-charcoal p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav id="mobile-menu" className="lg:hidden bg-white border-t border-gray-100 shadow-xl" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-sm font-semibold uppercase tracking-wider text-charcoal-muted hover:text-gold hover:bg-gray-50 border-b border-gray-100 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-sm font-semibold uppercase tracking-wider text-charcoal-muted hover:text-gold hover:bg-gray-50 border-b border-gray-100 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}
