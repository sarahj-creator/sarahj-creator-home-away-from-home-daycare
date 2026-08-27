import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import { heroImages } from '@/config/site';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A little place with a big heart."
        subtitle="Home Away from Home Daycare was founded from a genuine love of caring for children — and a desire to create a more personal, nurturing childcare environment in Barbados."
        image={heroImages.aboutHero}
      />

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={heroImages.story}
                  alt="Children and a teacher playing with toys in a kindergarten setting"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <SectionHeading
                eyebrow="Our Story"
                title="Built from love, run with care."
                align="left"
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal-700/70">
                <p>
                  Home Away from Home began with a simple belief: that
                  childcare should feel personal. That children deserve more
                  than just supervision — they deserve to be genuinely known,
                  supported, and encouraged.
                </p>
                <p>
                  As a family-built daycare, we created a home-based,
                  child-friendly setting where learning happens naturally
                  through play, creativity, and exploration. Where
                  relationships between caregivers, children, and parents are
                  at the heart of everything.
                </p>
                <p>
                  We support children as individuals — helping them grow in
                  confidence, curiosity, and independence at their own pace,
                  in their own way.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Our Philosophy"
                title="Safe enough to explore. Supported enough to grow."
                align="left"
              />
              <p className="mt-6 text-lg leading-relaxed text-charcoal-700/70">
                Children should feel safe enough to explore, supported enough
                to try, and encouraged enough to grow. Everything we do is
                designed around that simple philosophy — creating an
                environment where children can be curious, creative, and
                confident.
              </p>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={heroImages.aboutPhilosophy}
                  alt="A smiling teacher in a classroom, holding a book"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Environment */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={heroImages.aboutEnvironment}
                  alt="Children playing with colourful clay at a preschool table"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <SectionHeading
                eyebrow="Our Environment"
                title="A home, not a classroom."
                align="left"
              />
              <p className="mt-6 text-lg leading-relaxed text-charcoal-700/70">
                Our environment is home-like and child-friendly, thoughtfully
                arranged around children's needs, creativity, and exploration.
                Natural light, warm spaces, and accessible materials invite
                children to play, discover, and make themselves at home.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-clay-50 py-24 lg:py-32">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Our Approach"
                title="Guidance, not just care."
                align="left"
              />
              <ul className="mt-6 space-y-3">
                {[
                  'Gentle guidance that builds confidence',
                  'Encouragement to explore and try new things',
                  'Creativity woven into everyday activities',
                  'Hands-on exploration and discovery',
                  "Support for each child's individual development",
                  'Positive relationships at the centre of everything',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-lg text-charcoal-700/80"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={heroImages.aboutApproach}
                  alt="Teacher and children engaged in educational activities together"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl font-serif font-medium text-charcoal-800 sm:text-4xl">
              Come and see what feels like home.
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
