import { Link } from 'react-router-dom';
import { CalendarHeart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';

export default function MobileCTABar() {
  const location = useLocation();
  if (location.pathname === siteConfig.ctaPath) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 lg:hidden">
      <div className="bg-cream-50/95 backdrop-blur-md px-5 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <Link
          to={siteConfig.ctaPath}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-sage-600 px-6 py-3.5 text-base font-semibold text-cream-50 transition-colors hover:bg-sage-700"
        >
          <CalendarHeart size={20} strokeWidth={1.8} />
          {siteConfig.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
