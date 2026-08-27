import { type ReactNode } from 'react';
import { Home, Heart, Sparkles, Sprout } from 'lucide-react';

const iconMap = {
  home: Home,
  heart: Heart,
  sparkles: Sparkles,
  sprout: Sprout,
};

type IconKey = keyof typeof iconMap;

interface FeatureCardProps {
  icon: IconKey;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  const Icon = iconMap[icon];
  return (
    <div className="group rounded-3xl bg-white/70 p-8 ring-1 ring-cream-200 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-sage-900/5 hover:-translate-y-1">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-600 transition-colors duration-500 group-hover:bg-sage-600 group-hover:text-cream-50">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-serif font-medium text-charcoal-800">
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-charcoal-700/70">
        {description}
      </p>
    </div>
  );
}
