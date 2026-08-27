import { ArrowRight, Heart } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import PageHero from '@/components/PageHero';
import { heroImages } from '@/config/site';
import { team } from '@/config/content';

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title="The people behind the care."
        subtitle="Home Away from Home is a family-built daycare, created and run by a mother and daughter who share a genuine passion for caring for children."
        image={heroImages.aboutPhilosophy}
        imageAlt="A teacher in a classroom setting"
      />

      <section className="py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Family"
              title="Meet the people who make it home"
              subtitle="Every child at Home Away from Home is cared for by people who are passionate about what they do — and who take the time to truly know each child."
            />
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  portrait={member.portrait}
                  alt={`${member.name} — ${member.role}`}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mx-auto mt-16 flex max-w-2xl items-center gap-4 rounded-3xl bg-sage-50 p-8 text-center">
              <Heart
                size={32}
                className="shrink-0 text-sage-500"
                strokeWidth={1.5}
              />
              <p className="text-xl font-serif font-medium text-charcoal-800">
                A family-built daycare, created with care.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-clay-50 py-24 text-center">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl font-serif font-medium text-charcoal-800 sm:text-4xl">
              Come and meet us.
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
