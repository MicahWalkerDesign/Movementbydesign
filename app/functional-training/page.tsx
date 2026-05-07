import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const PATH = '/functional-training/';

export const metadata: Metadata = buildMetadata({
  title: 'Functional Training in Salou | Strength, Mobility & Real-Life Fitness',
  description:
    'Functional training in Salou and the Costa Daurada. Strength, mobility, conditioning and real-life movement coaching for people who want to train smarter.',
  path: PATH,
});

export default function FunctionalTrainingPage() {
  const pillars = [
    {
      title: 'Strength',
      text: 'Build a foundation of usable strength: hinge, squat, push, pull, carry — the patterns life and sport demand.',
    },
    {
      title: 'Mobility',
      text: 'Active range and joint control so you can move freely without stiffness or compensation.',
    },
    {
      title: 'Conditioning',
      text: 'Aerobic and mixed-energy work that supports recovery, daily energy and performance — without grinding you down.',
    },
    {
      title: 'Movement skill',
      text: 'Coordination, balance, agility and control. Train your nervous system, not just your muscles.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Service · Functional Training"
        title="Functional Training in Salou"
        subtitle="Strength, mobility, conditioning and real-life movement coaching for people who want to train smarter."
        body="Outdoor and indoor functional training in Salou, Cambrils and Tarragona — designed around your body, your goals and the things you actually want to do in real life."
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Four pillars</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Train the qualities that matter
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            Functional training is not a marketing label. It’s a way of building physical
            qualities that transfer: strength you can use, mobility you can keep, conditioning
            that supports your life and movement skill that protects your joints over time.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
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
            <span className="eyebrow">Where & how</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Outdoor &amp; indoor sessions on the Costa Daurada
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              The Costa Daurada is one of the best places in Europe to train. Long beaches,
              promenades, parks and quiet outdoor spaces let us train safely and intelligently
              year-round. We can also use private studios or your home, depending on your
              goals.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              'Outdoor strength and conditioning sessions',
              'Beach and promenade conditioning',
              'Mobility and movement quality sessions',
              'Functional small-group training',
              'Private studio sessions where appropriate',
              'Programming you can take to your own gym',
            ].map((i) => (
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
          'Functional Training in Salou',
          'Strength, mobility, conditioning and real-life movement coaching across Salou, Cambrils and Tarragona.',
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Functional Training', path: PATH },
        ])}
      />
    </>
  );
}
