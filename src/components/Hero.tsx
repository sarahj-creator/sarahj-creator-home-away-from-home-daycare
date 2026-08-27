import { ArrowRight, Home, Sparkles, Sprout } from 'lucide-react';
import Button from './Button';
import { heroImages } from '@/config/site';

const trustPoints = [
  { icon: Home, label: 'Small & Personal' },
  { icon: Sparkles, label: 'Learn Through Play' },
  { icon: Sprout, label: 'A Home-Like Environment' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImages.hero}
          alt="Children playing in a warm, natural childcare environment"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/70 to-cream-50/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50/60 via-transparent to-cream-50/20" />
      </div>

      <div className="container-page relative flex min-h-screen flex-col justify-center pt-28 pb-32 lg:pb-20">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 animate-fade-in">Barbados Childcare</p>
          <h1 className="text-4xl font-serif font-medium leading-[1.1] text-charcoal-800 sm:text-5xl lg:text-6xl text-balance animate-fade-up">
            A place to learn, play
            <br />
            and feel right at home.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-700/80 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Home Away from Home Daycare offers a warm, nurturing, and
            child-centred environment where little ones can explore, grow, and
            thrive.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button to="/enquire" size="lg">
              Book a Visit
            </Button>
            <Button to="/our-day" size="lg" variant="outline">
              Explore Our Daycare
            </Button>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {trustPoints.map((point) => (
            <div key={point.label} className="flex items-center gap-2.5">
              <point.icon size={20} strokeWidth={1.5} className="text-sage-600" />
              <span className="text-sm font-medium text-charcoal-700">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2 text-charcoal-700/40">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowRight size={18} className="rotate-90" />
        </div>
      </div>
    </section>
  );
}
