import { ArrowRight, Users, BookOpen, Sun, Moon, Compass, Home as HomeIcon } from 'lucide-react';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Reveal from '@/components/Reveal';
import { heroImages, homeGalleryImages } from '@/config/site';
import { whyChooseUs, dayPreview, services } from '@/config/content';

const featureIcons = ['home', 'heart', 'sparkles', 'sprout'] as const;

const dayIcons = [Sun, BookOpen, Compass, Moon, ArrowRight];

const serviceIcons = [
  <HomeIcon key="daycare" size={28} strokeWidth={1.5} />,
  <Users key="babysitting" size={28} strokeWidth={1.5} />,
  <Compass key="fieldtrips" size={28} strokeWidth={1.5} />,
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Introduction Section */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={heroImages.intro}
                    alt="Children and teachers playing together in a warm classroom"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl bg-sage-200 sm:block" />
              </div>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Welcome"
                title="More than childcare. A place to belong."
                align="left"
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal-700/70">
                <p>
                  At Home Away from Home, we believe childhood should be filled
                  with curiosity, creativity, laughter, and care.
                </p>
                <p>
                  Our home-like environment gives children space to play,
                  explore, and grow at their own pace while building confidence
                  and independence along the way.
                </p>
                <p>
                  Every child is an individual, and we believe in creating an
                  environment where they can feel comfortable, supported, and
                  encouraged to simply be themselves.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/about" variant="ghost" size="md">
                  Discover Our Story
                  <ArrowRight size={18} />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why Families Choose Us"
              title="What makes us feel like home"
              subtitle="We're not the biggest daycare in Barbados — and that's exactly the point. Our small, personal setting means every child is genuinely known and cared for."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <FeatureCard
                  icon={featureIcons[i]}
                  title={card.title}
                  description={card.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery Preview"
              title="Little moments. Big discoveries."
              subtitle="Every day is filled with creativity, exploration, and joy. Here's a glimpse of what life looks like at Home Away from Home."
            />
          </Reveal>
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {homeGalleryImages.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 80}>
                <div className="group overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/gallery" variant="outline" size="lg">
              View Our Gallery
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* A Day With Us Preview */}
      <section className="bg-clay-50 py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="A Day With Us"
              title="What does a day look like?"
              subtitle="Our daily rhythm balances learning, play, rest, and discovery — all tailored to each child's age and individual needs."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {dayPreview.map((item, i) => {
              const Icon = dayIcons[i];
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="group h-full rounded-2xl bg-white/70 p-6 ring-1 ring-cream-200 transition-all duration-500 hover:bg-white hover:shadow-lg hover:shadow-clay-900/5">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-clay-100 text-clay-600 transition-colors group-hover:bg-clay-500 group-hover:text-cream-50">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-charcoal-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-700/70">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button to="/our-day" variant="ghost" size="lg">
              Explore Our Day
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Note / Emotional Section */}
      <section className="relative overflow-hidden py-28 lg:py-40">
        <div className="absolute inset-0">
          <img
            src={heroImages.quote}
            alt="Children and teacher sharing a story together"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal-900/70" />
        </div>
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <blockquote className="text-3xl font-serif font-medium leading-[1.25] text-cream-50 sm:text-4xl lg:text-5xl text-balance">
              "Leaving your child in someone else's care is a big decision. We
              never take that trust lightly."
            </blockquote>
            <p className="mt-8 text-lg leading-relaxed text-cream-200/80">
              Our goal is to create an environment where children feel
              comfortable, supported, and happy — and where parents can feel
              confident knowing their little one is in caring hands.
            </p>
            <div className="mt-10">
              <Button to="/enquire" size="lg">
                Come and See for Yourself
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="How we can help your family"
              subtitle="From full-time daycare to flexible babysitting and educational field trips, we're here to support your family's needs."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <ServiceCard
                  icon={serviceIcons[i]}
                  title={service.title}
                  description={service.description}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/enquire" variant="outline" size="lg">
              Ask Us About Our Services
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-sage-50 py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Family Stories"
              title="What families say about us"
              subtitle="Real experiences from the families who are part of Home Away from Home."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 80}>
                <TestimonialCard isPlaceholder />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
