import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const PATH = '/special-populations-exercise/';

export const metadata: Metadata = buildMetadata({
  title: 'Special Populations Exercise Coaching | Movement by Design',
  description:
    'Personalised exercise coaching for pregnancy, postpartum, cancer recovery, diabetes, older adults, orthopaedic and neurological limitations, and special needs children — adapted around your body and medical context.',
  path: PATH,
  locale: 'en_GB',
  alternatePath: '/es/poblaciones-especiales/',
});

const populations = [
  {
    title: 'Pregnancy & postpartum',
    text: 'Safe, progressive exercise during pregnancy and a structured return to training postpartum — adapted around how you feel, your medical guidance and your goals.',
  },
  {
    title: 'Cancer recovery',
    text: 'Supportive exercise coaching during and after cancer treatment to rebuild strength, energy and confidence. Coordinated with your medical team where appropriate.',
  },
  {
    title: 'Diabetes & metabolic health',
    text: 'Exercise coaching that supports metabolic health goals, energy and consistency — alongside guidance from your doctor or specialist.',
  },
  {
    title: 'Older adults',
    text: 'Strength, balance and mobility coaching to keep you confident, independent and capable for the long run.',
  },
  {
    title: 'Orthopaedic limitations',
    text: 'Training adapted around hip, knee, back, shoulder or other orthopaedic histories — building capacity progressively and intelligently.',
  },
  {
    title: 'Neurological limitations',
    text: 'Adapted exercise coaching for people managing neurological symptoms or movement limitations, with a focus on safety, confidence and capability.',
  },
  {
    title: 'Special needs children & young people',
    text: 'Movement coaching focused on confidence, enjoyment, safety and building a positive relationship with their body — within scope and alongside their support team.',
  },
  {
    title: 'Chronic fatigue & deconditioning',
    text: 'Carefully paced training that respects energy budgets, builds tolerance gradually and avoids boom-and-bust cycles.',
  },
  {
    title: 'Return to training',
    text: 'Structured re-entry after long inactivity, illness, surgery (cleared by your medical team) or burnout.',
  },
];

export default function SpecialPopulationsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Service · Special Populations"
        title="Special Populations Exercise Coaching"
        subtitle="Personalised exercise coaching for people with more complex health considerations, adapted around your body, goals and medical context."
        body="Every person is different. Every history is different. The job of a coach in this space is to listen carefully, respect medical context, and design training that meets you exactly where you are — then progress from there."
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Who this is for</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Coaching adapted to complex contexts
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            “Special populations” simply means people whose training needs require more
            consideration than a generic plan can offer — often for excellent reasons.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {populations.map((p) => (
            <article key={p.title} className="card">
              <h3 className="font-heading font-semibold text-lg text-deep-navy">{p.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">My approach</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Safe, supportive, structured
            </h2>
          </div>
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <p>
              I take time to understand your medical history, current capacity and the
              guidance you’ve received from medical or allied-health professionals. Where
              useful, I’m happy to coordinate with your doctor, physiotherapist, oncologist or
              specialist team.
            </p>
            <p>
              From there, training is built around what your body can handle today — with
              clear progression, careful load management and ongoing communication. The goal
              is to make exercise feel safe, doable and genuinely useful.
            </p>
          </div>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="bg-sand border border-soft-border rounded-3xl p-8 md:p-10 max-w-3xl">
          <h2 className="font-heading font-semibold text-xl md:text-2xl text-deep-navy">
            Important scope note
          </h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Movement by Design provides exercise science-based coaching, personal training,
            health education and rehabilitation-informed exercise support. It does not provide
            medical diagnosis, treatment, physiotherapy, dietetics or specialist clinical
            care. For pregnancy, cancer, diabetes, neurological conditions, post-surgical
            recovery or any active medical condition, exercise coaching is delivered alongside
            medical or allied-health guidance where appropriate.
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
        <CtaBlock title="Ask if special populations coaching is right for you" />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Special Populations Exercise Coaching',
          'Personalised exercise coaching for pregnancy, postpartum, cancer recovery, diabetes, older adults, orthopaedic and neurological limitations, and special needs young people.',
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Special Populations Exercise', path: PATH },
        ])}
      />
    </>
  );
}
