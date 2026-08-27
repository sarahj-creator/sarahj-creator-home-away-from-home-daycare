import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote?: string;
  author?: string;
  relationship?: string;
  isPlaceholder?: boolean;
}

export default function TestimonialCard({
  quote,
  author,
  relationship,
  isPlaceholder = true,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl bg-white/70 p-8 ring-1 ring-cream-200">
      <Quote
        size={32}
        className="mb-4 text-sage-300"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      {isPlaceholder ? (
        <p className="text-lg font-serif italic leading-relaxed text-charcoal-700/40">
          Parent testimonial will appear here.
        </p>
      ) : (
        <>
          <p className="text-lg font-serif italic leading-relaxed text-charcoal-800">
            "{quote}"
          </p>
          <div className="mt-6">
            <p className="font-semibold text-charcoal-800">{author}</p>
            {relationship && (
              <p className="text-sm text-charcoal-700/60">{relationship}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
