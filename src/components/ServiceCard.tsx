import { type ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl bg-gradient-to-b from-white to-cream-100 p-8 ring-1 ring-cream-200 transition-all duration-500 hover:shadow-xl hover:shadow-sage-900/5 hover:-translate-y-1">
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-clay-100 text-clay-600 transition-colors duration-500 group-hover:bg-clay-500 group-hover:text-cream-50">
        {icon}
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
