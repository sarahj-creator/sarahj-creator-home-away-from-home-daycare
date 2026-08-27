import { ArrowRight, Info } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import { heroImages } from '@/config/site';
import { fullDaySchedule } from '@/config/content';

const stepColors = [
  'bg-sage-600',
  'bg-clay-500',
  'bg-sunshine-400',
  'bg-sage-400',
  'bg-clay-400',
  'bg-sage-500',
  'bg-clay-600',
];

export default function OurDay() {
  return (
    <>
      <PageHero
        eyebrow="Our Day"
        title="Every day is an opportunity to discover something new."
        subtitle="Our daily routine balances learning, play, rest, and exploration — all designed to support each child's age and individual needs."
        image={heroImages.ourDayHero}
        imageAlt="Children enjoying playtime in a bright kindergarten classroom"
      />

      {/* Schedule Timeline */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Daily Rhythm"
              title="A day at Home Away from Home"
              subtitle="Our flexible daily schedule provides structure while leaving room for spontaneity, curiosity, and the natural rhythm of each child."
            />
          </Reveal>

          <div className="mx-auto mt-16 max-w-3xl">
            {fullDaySchedule.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {i < fullDaySchedule.length - 1 && (
                    <div className="absolute left-[27px] top-14 h-full w-0.5 bg-cream-200" />
                  )}
                  {/* Step number */}
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-cream-50 font-serif text-lg font-medium ${stepColors[i]}`}
                  >
                    {i + 1}
                  </div>
                  {/* Content */}
                  <div className="flex-1 rounded-2xl bg-white/70 p-6 ring-1 ring-cream-200 sm:p-8">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-serif font-medium text-charcoal-800">
                        {item.title}
                      </h3>
                      <span className="text-sm font-semibold uppercase tracking-wider text-sage-600">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-charcoal-700/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Note */}
          <Reveal>
            <div className="mx-auto mt-12 flex max-w-2xl items-start gap-4 rounded-2xl bg-sunshine-50 p-6 ring-1 ring-sunshine-200/50">
              <Info
                size={24}
                className="mt-0.5 shrink-0 text-sunshine-600"
                strokeWidth={1.5}
              />
              <p className="text-base leading-relaxed text-charcoal-700/80">
                <strong className="font-semibold">
                  Every child is different.
                </strong>{' '}
                Our daily routine is designed to support their age and
                individual needs. Times and activities are flexible and may
                vary depending on the children in our care.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage-50 py-24 text-center">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl font-serif font-medium text-charcoal-800 sm:text-4xl">
              Want to see it for yourself?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-charcoal-700/70">
              Book a visit and experience the warmth of Home Away from Home in
              person.
            </p>
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
