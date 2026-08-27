import Button from './Button';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt || title}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/40 to-charcoal-900/20" />
      </div>
      <div className="container-page relative pb-16 pt-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3 !text-sage-200">{eyebrow}</p>
          <h1 className="text-4xl font-serif font-medium leading-[1.15] text-cream-50 sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-200/85">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
