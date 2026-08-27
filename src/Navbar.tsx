import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm shadow-sage-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-600 text-cream-50">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12 21l-3.5-3C6 15 7 11 9.5 12c1.2.5 2.5 2 2.5 2s1.3-1.5 2.5-2c2.5-1 3.5 3 1 6L12 21z" />
            </svg>
          </span>
          <span className="hidden font-serif text-lg font-medium text-charcoal-800 sm:block">
            Home Away from Home
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-sage-600'
                    : 'text-charcoal-700 hover:text-sage-600'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to={siteConfig.ctaPath} size="md">
            {siteConfig.ctaLabel}
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-800 lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal-900/40 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-cream-50 shadow-2xl transition-transform duration-400 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-serif text-lg text-charcoal-800">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-800"
            >
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-6 py-4">
            {siteConfig.navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-sage-100 text-sage-700'
                      : 'text-charcoal-700 hover:bg-cream-100'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pt-4">
            <Button to={siteConfig.ctaPath} size="lg" className="w-full">
              {siteConfig.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
