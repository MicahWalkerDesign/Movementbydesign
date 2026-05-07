import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const PATH = '/injury-prevention/';

export const metadata: Metadata = buildMetadata({
  title: 'Injury Prevention & Rehabilitation-Informed Training | Movement by Design',
  description:
    'Safe, progressive, exercise science-based training for people returning from injury, managing old limitations or wanting to move with more confidence.',
  path: PATH,
});

export default function InjuryPreventionPage() {
  const principles = [
    {
      title: 'Respect history',
      text: 'Every plan starts with a careful look at your injury history, surgeries, flare-up patterns and what genuinely makes you feel worse or better.',
    },
    {
      title: 'Build capacity',
      text: 'Tissues, joints and confidence improve when you load them progressively and intelligently — not when you avoid them.',
    },
    {
      title: 'Manage load',
      text: 'Volume, intensity and frequency are managed deliberately so you don’t bounce between flare-ups and fitness loss.',
    },
    {
      title: 'Train the system',
      text: 'Strength, mobility, control, breathing and pacing all matter — not just the symptomatic joint.',
    },
  ];

  const supports = [
    'Old back, knee, shoulder, hip or ankle limitations',
    'Returning to training after surgery (cleared by your medical team)',
    'Returning to training after illness or long inactivity',
    'Recurring niggles you can’t seem to shake',
    'Active adults wanting to keep training without breaking down',
    'Athletes wanting structured prevention work alongside their sport',
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Service · Injury Prevention"
        title="Injury Prevention & Rehabilitation-Informed Training"
        subtitle="Safe, progressive training for people returning from injury, managing old limitations or wanting to move with more confidence."
        body="Rehabilitation-informed exercise coaching is not physiotherapy or medical treatment. It’s training that respects your history and builds capacity — ideally alongside your medical or allied-health team where appropriate."
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Principles</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Train smart. Get stronger. Stay durable.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <article key={p.title} className="card">
              <h3 className="font-heading font-semibold text-lg text-deep-navy">{p.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Who I support</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Designed around real bodies
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Most general training plans either ignore injury history or treat it like a
              limitation forever. A rehabilitation-informed approach does neither: it adapts
              and progresses.
            </p>
          </div>
          <ul className="grid gap-3">
            {supports.map((s) => (
              <li
                key={s}
                className="bg-white border border-soft-border rounded-2xl p-5 text-charcoal/90"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="bg-sand border border-soft-border rounded-3xl p-8 md:p-10 max-w-3xl">
          <h2 className="font-heading font-semibold text-xl md:text-2xl text-deep-navy">
            A note on scope
          </h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Movement by Design provides exercise science-based, rehabilitation-informed
            training. It does not replace physiotherapy, medical care or clinical
            rehabilitation. For active injuries, post-surgical phases or undiagnosed pain, I
            recommend working alongside your doctor, physiotherapist or specialist — and I’m
            comfortable coordinating with them where useful.
          </p>
        </div>
      </Section>

      <Section background="sand">
        <RelatedServices excludeHref={PATH} />
      </Section>

      <Section background="warm-white">
        <p className="text-sm text-muted-grey leading-relaxed max-w-prose mb-10">
          {MEDICAL_DISCLAIMER}
        </p>
        <CtaBlock />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Injury Prevention & Rehabilitation-Informed Training',
          'Safe, progressive exercise coaching for people returning from injury, managing limitations or wanting to keep training without breaking down.',
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Injury Prevention', path: PATH },
        ])}
      />
    </>
  );
}
