interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  portrait: string;
  alt: string;
}

export default function TeamCard({
  name,
  role,
  bio,
  portrait,
  alt,
}: TeamCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white/70 ring-1 ring-cream-200 transition-all duration-500 hover:shadow-xl hover:shadow-sage-900/5">
      <div className="overflow-hidden">
        <img
          src={portrait}
          alt={alt}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-serif font-medium text-charcoal-800">
          {name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-sage-600">
          {role}
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal-700/70">
          {bio}
        </p>
      </div>
    </article>
  );
}
