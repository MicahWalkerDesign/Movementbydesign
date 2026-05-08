import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import Pricing from '@/components/Pricing';
import JsonLd from '@/components/JsonLd';
import {
  buildMetadata,
  serviceSchema,
  breadcrumbSchema,
} from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const PATH = '/personal-training-salou/';

export const metadata: Metadata = buildMetadata({
  title: 'Personal Trainer in Salou | Premium 1:1 Exercise Science Coaching | Movement by Design',
  description:
    'Premium personal training in Salou for strength, health, movement quality and confidence. English-speaking and German-speaking personal trainer with an exercise science background.',
  path: PATH,
  locale: 'en_GB',
  alternatePath: '/es/entrenador-personal-salou/',
});

export default function PersonalTrainingSalouPage() {
  const benefits = [
    {
      title: 'Personalised programming',
      text: 'Every plan is built around your training history, medical context, real-life schedule and the goals that actually matter to you.',
    },
    {
      title: 'Movement quality first',
      text: 'Technique, control and movement literacy come before load — so progress is sustainable and joints stay healthy.',
    },
    {
      title: 'Strength that translates',
      text: 'Build a body that feels capable in the gym, on the trail, with your kids and on holiday — not just in front of a mirror.',
    },
    {
      title: 'Honest progress tracking',
      text: 'Clear benchmarks, regular reviews and adjustments so you always know what is working and what to do next.',
    },
  ];

  const ideal = [
    'High-end clients in Salou, Cambrils and Tarragona who want premium support',
    'English-speaking expats and German-speaking residents on the Costa Daurada',
    'Busy professionals and parents who need efficient, well-designed sessions',
    'People returning to training after time away',
    'Clients with old injuries who want to train safely without flare-ups',
    'Active adults who want performance without breaking down',
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Service · Salou"
        title="Personal Trainer in Salou"
        subtitle="Premium exercise science-based personal training for strength, health, movement quality and long-term confidence."
        body="1:1 coaching in Salou and the wider Costa Daurada — Cambrils, Tarragona, La Pineda, Vila-seca and Reus. Sessions can be delivered outdoors, at suitable training spaces or at home where appropriate."
        photoSrc="/images/training-corrective.jpg"
        photoAlt="Personal training in Salou — single-arm row coaching session in the Costa Daurada"
        photoLabel="Salou coaching session"
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">What you get</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              A premium 1:1 experience
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Personal training in Salou and the Costa Daurada — built around exercise
              science, your medical history and the goals that actually matter to you.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <article key={b.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy">{b.title}</h3>
                <p className="mt-3 text-charcoal/85 leading-relaxed">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Who it’s for</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Ideal for considered clients
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              If you’re looking for a thoughtful entrenador personal in Salou — someone who
              treats your training as a long-term project, not a quick fix — this service is
              built for you.
            </p>
          </div>
          <ul className="grid gap-3">
            {ideal.map((i) => (
              <li
                key={i}
                className="bg-white border border-soft-border rounded-2xl p-5 text-charcoal/90"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <span className="eyebrow">How it works</span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              From first call to ongoing progress
            </h2>
            <ol className="space-y-5 mt-4">
              <li>
                <strong className="font-heading text-deep-navy">1. Free intro call.</strong>{' '}
                A short conversation about your goals, history and constraints — and whether
                I’m the right fit.
              </li>
              <li>
                <strong className="font-heading text-deep-navy">2. Movement and goal review.</strong>{' '}
                A structured assessment covering training history, injury history, lifestyle,
                preferences and what success would look like.
              </li>
              <li>
                <strong className="font-heading text-deep-navy">3. Personalised plan.</strong>{' '}
                A coaching plan built around your body and your week — not a generic template.
              </li>
              <li>
                <strong className="font-heading text-deep-navy">4. Sessions and progression.</strong>{' '}
                1:1 coaching with clear technique work, structured progression and ongoing
                adjustments.
              </li>
              <li>
                <strong className="font-heading text-deep-navy">5. Reviews and habits.</strong>{' '}
                Regular reviews to keep the plan honest, plus practical habit and education
                support outside the gym.
              </li>
            </ol>
          </div>

          <aside className="md:col-span-2 bg-sand rounded-3xl p-8 border border-soft-border">
            <h3 className="font-heading font-semibold text-deep-navy">Languages</h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              English-speaking personal trainer in Salou. German-speaking personal trainer in
              Salou. Spanish learning — happy to coach simple cues in Spanish, with English or
              German for detailed explanations.
            </p>
            <h3 className="mt-7 font-heading font-semibold text-deep-navy">Service area</h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              Salou, Cambrils, Tarragona, La Pineda, Vila-seca, Reus and surrounding Costa
              Daurada. Online coaching available worldwide.
            </p>
            <Link href="/contact/" className="btn-primary mt-7 w-full">
              Book a free intro call
            </Link>
          </aside>
        </div>
      </Section>

      <Pricing
        background="sand"
        eyebrow="Rates"
        heading="Session rates"
        intro="Clear, simple pricing. Pre-paid blocks and packages can be arranged on your intro call once we know what cadence suits you."
      />

      <Section background="warm-white">
        <RelatedServices excludeHref={PATH} />
      </Section>

      <Section background="sand">
        <p className="text-sm text-muted-grey leading-relaxed max-w-prose mb-10">
          {MEDICAL_DISCLAIMER}
        </p>
        <CtaBlock />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Personal Trainer in Salou',
          'Premium 1:1 personal training in Salou and the Costa Daurada with an exercise science foundation.',
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Personal Training Salou', path: PATH },
        ])}
      />
    </>
  );
}
