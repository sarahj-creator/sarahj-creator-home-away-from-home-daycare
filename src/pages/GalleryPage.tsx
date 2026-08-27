import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';
import { heroImages } from '@/config/site';

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Little moments. Big discoveries."
        subtitle="A glimpse into everyday life at Home Away from Home — creativity, play, learning, and joy."
        image={heroImages.intro}
        imageAlt="Children and teachers playing together in a warm classroom"
      />

      <section className="py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Photo Gallery"
              title="Life at Home Away from Home"
              subtitle="Browse through moments of play, creativity, learning, and outdoor adventures. These images will be replaced with authentic photographs from our daycare."
            />
          </Reveal>
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>

      <section className="bg-sage-50 py-24 text-center">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl font-serif font-medium text-charcoal-800 sm:text-4xl">
              See it in person.
            </h2>
            <div className="mt-8">
              <Button to="/enquire" size="lg">
                Book a Visit
                <ArrowRight size={18} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
