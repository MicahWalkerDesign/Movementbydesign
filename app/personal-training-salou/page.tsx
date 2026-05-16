import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import Pricing from '@/components/Pricing';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';
import {
  buildMetadata,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const PATH = '/personal-training-salou/';

export const metadata: Metadata = buildMetadata({
  title: 'Personal Trainer Salou | Premium 1:1 Exercise Science Coaching | Movement by Design',
  description:
    'Personal Trainer Salou for premium 1:1 coaching in strength, health, movement quality and confidence. English-speaking and German-speaking exercise science coach.',
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

  const localDetails = [
    {
      title: 'Training in Salou',
      text: 'Coaching is available around Salou for clients who want structured 1:1 personal training without a generic gym-plan approach.',
    },
    {
      title: 'Home, outdoor or suitable training spaces',
      text: 'Sessions can be organised outdoors, at home or in appropriate training spaces depending on your goals, equipment needs and location.',
    },
    {
      title: 'Costa Daurada service area',
      text: 'I work with clients across Salou, Cambrils, La Pineda, Vila-seca, Tarragona, Reus and nearby Costa Daurada locations.',
    },
  ];

  const faqs = [
    {
      q: 'How much does a personal trainer in Salou cost?',
      a: '1:1 personal training is €90 per hour. Small-group training is €15–30 per person per hour, depending on group size. Packages and training cadence are confirmed during the free intro call.',
    },
    {
      q: 'Do you offer personal training at home in Salou?',
      a: 'Yes, in-home personal training can be arranged in Salou when the space, equipment and training goals make sense. Outdoor sessions and suitable local training spaces are also possible.',
    },
    {
      q: 'Are sessions available in English or German?',
      a: 'Yes. English is my native language and I speak German fluently. I can also use simple Spanish coaching cues while I continue improving my Spanish.',
    },
    {
      q: 'Can you help if I have an old injury or pain history?',
      a: 'Often, yes. Coaching is rehabilitation-informed and adapted around your history, capacity and confidence. It does not replace medical diagnosis or physiotherapy when those are needed.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Service · Salou"
        title="Personal Trainer Salou"
        subtitle="Premium exercise science-based personal training for strength, health, movement quality and long-term confidence."
        body="1:1 personal trainer in Salou and the wider Costa Daurada — Cambrils, Tarragona, La Pineda, Vila-seca and Reus. Sessions can be delivered outdoors, at suitable training spaces or at home where appropriate."
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
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">{b.title}</h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{b.text}</p>
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
                className="bg-white dark:bg-slate-800 border border-soft-border dark:border-slate-700 rounded-2xl p-5 text-charcoal/90 dark:text-slate-300"
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
                <strong className="font-heading text-deep-navy dark:text-slate-100">1. Free intro call.</strong>{' '}
                A short conversation about your goals, history and constraints — and whether
                I’m the right fit.
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">2. Movement and goal review.</strong>{' '}
                A structured assessment covering training history, injury history, lifestyle,
                preferences and what success would look like.
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">3. Personalised plan.</strong>{' '}
                A coaching plan built around your body and your week — not a generic template.
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">4. Sessions and progression.</strong>{' '}
                1:1 coaching with clear technique work, structured progression and ongoing
                adjustments.
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">5. Reviews and habits.</strong>{' '}
                Regular reviews to keep the plan honest, plus practical habit and education
                support outside the gym.
              </li>
            </ol>
          </div>

          <aside className="md:col-span-2 bg-sand dark:bg-slate-800 rounded-3xl p-8 border border-soft-border dark:border-slate-700">
            <h3 className="font-heading font-semibold text-deep-navy dark:text-slate-100">Languages</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              English-speaking personal trainer in Salou. German-speaking personal trainer in
              Salou. Spanish learning — happy to coach simple cues in Spanish, with English or
              German for detailed explanations.
            </p>
            <h3 className="mt-7 font-heading font-semibold text-deep-navy dark:text-slate-100">Service area</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
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
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Local personal training</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Personal training built for Salou life
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              This page is for people searching for a personal trainer Salou residents,
              expats and frequent visitors can work with consistently — not a one-size-fits-all
              workout.
            </p>
          </div>
          <div className="md:col-span-3 grid gap-5">
            {localDetails.map((item) => (
              <article key={item.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Personal Trainer Salou FAQs
          </h2>
        </div>
        <FAQ items={faqs} />
      </Section>

      <Section background="warm-white">
        <RelatedServices excludeHref={PATH} />
      </Section>

      <Section background="sand">
        <p className="text-sm text-muted-grey dark:text-slate-400 leading-relaxed max-w-prose mb-10">
          {MEDICAL_DISCLAIMER}
        </p>
        <CtaBlock />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Personal Trainer Salou',
          'Premium 1:1 personal training in Salou and the Costa Daurada with an exercise science foundation.',
          PATH,
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Personal Training Salou', path: PATH },
        ])}
      />
    </>
  );
}
