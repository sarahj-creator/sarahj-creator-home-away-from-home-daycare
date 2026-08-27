import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-200">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-600 text-cream-50">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 21l-3.5-3C6 15 7 11 9.5 12c1.2.5 2.5 2 2.5 2s1.3-1.5 2.5-2c2.5-1 3.5 3 1 6L12 21z" />
                </svg>
              </span>
              <span className="font-serif text-lg text-cream-50">
                Home Away from Home
              </span>
            </div>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-cream-200/60">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-200/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base text-cream-200/80 transition-colors hover:text-sage-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={siteConfig.ctaPath}
                  className="text-base text-cream-200/80 transition-colors hover:text-sage-300"
                >
                  {siteConfig.ctaLabel}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-200/50">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-sage-400" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-base text-cream-200/80 transition-colors hover:text-sage-300"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-sage-400" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-base text-cream-200/80 transition-colors hover:text-sage-300"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sage-400" />
                <span className="text-base text-cream-200/80">
                  {siteConfig.location.address}
                  <br />
                  {siteConfig.location.region}, {siteConfig.location.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-200/10 pt-8 text-center">
          <p className="text-sm text-cream-200/50">
            &copy; 2026 Home Away from Home Daycare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
