interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow mb-3 ${light ? '!text-sage-200' : ''}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-[1.15] text-balance ${
          light ? 'text-cream-50' : 'text-charcoal-800'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-cream-200' : 'text-charcoal-700/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
