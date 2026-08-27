import { useState, useMemo, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryImages, galleryCategories } from '@/config/site';

type Category = (typeof galleryCategories)[number];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () =>
      activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
      ),
    [filteredImages.length]
  );
  const showNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null ? null : (prev + 1) % filteredImages.length
      ),
    [filteredImages.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <div>
      {/* Category filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-sage-600 text-cream-50'
                : 'bg-white/60 text-charcoal-700 ring-1 ring-cream-200 hover:bg-sage-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filteredImages.map((img, index) => (
          <button
            key={`${img.src}-${index}`}
            onClick={() => setLightboxIndex(index)}
            className="group relative block w-full overflow-hidden rounded-2xl"
            aria-label={`View image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal-900/0 transition-colors duration-300 group-hover:bg-charcoal-900/10" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal-900/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
            aria-label="Close image viewer"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
          <figure
            className="max-h-[85vh] max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[78vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream-200/70">
              {filteredImages[lightboxIndex].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
