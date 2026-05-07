import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const PATH = '/nutrition-habits/';

export const metadata: Metadata = buildMetadata({
  title: 'Nutrition Habits & Wellness Coaching | Movement by Design',
  description:
    'Practical nutrition education and behaviour-change support for energy, training, body composition and consistency. Habit-focused, not medical nutrition therapy.',
  path: PATH,
});

export default function NutritionHabitsPage() {
  const focus = [
    {
      title: 'Energy & training',
      text: 'Eat in a way that supports your sessions, recovery and daily energy — not just a number on the scale.',
    },
    {
      title: 'Body composition',
      text: 'Realistic, slow, sustainable approaches to fat loss or muscle gain — built on habits you can keep.',
    },
    {
      title: 'Consistency',
      text: 'Strategies for travel, busy weeks, social meals and family life so your habits don’t collapse.',
    },
    {
      title: 'Education',
      text: 'Learn how protein, carbs, fats, fibre, hydration and meal structure actually affect how you feel and perform.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Service · Nutrition Habits"
        title="Nutrition Habits & Wellness Coaching"
        subtitle="Practical nutrition education and behaviour-change support for energy, training, body composition and consistency."
        body="This service is nutrition education and habit coaching — not medical nutrition therapy. The focus is on practical food habits that support training, energy, mood and long-term health."
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">What we focus on</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Food habits that fit real life
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {focus.map((f) => (
            <article key={f.title} className="card">
              <h3 className="font-heading font-semibold text-lg text-deep-navy">{f.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{f.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Approach</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Behaviour change, not crash diets
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Most diets work, in the short term. Most diets also fail, in the long term —
              because they’re built around willpower, not behaviour. We focus on habits that
              compound: simple meal structure, protein anchors, sensible portions and
              strategies you can run on a hard week.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              'Practical Mediterranean-friendly meal structure',
              'Protein and fibre as habit anchors',
              'Hydration and caffeine awareness',
              'Eating around training and travel',
              'Strategies for restaurants, family meals and social events',
              'Sleep and recovery support',
            ].map((s) => (
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
            Scope note
          </h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            This service provides nutrition education and habit coaching only. It is not
            dietetic treatment, medical nutrition therapy or a clinical intervention. For
            medical conditions such as diabetes, eating disorders, kidney disease, IBS or
            pregnancy-specific nutrition, I recommend working with a registered dietitian or
            doctor — habit coaching can sit alongside that work where appropriate.
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
          'Nutrition Habits & Wellness Coaching',
          'Nutrition education and habit-focused behaviour change coaching for energy, training, body composition and consistency.',
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Nutrition Habits', path: PATH },
        ])}
      />
    </>
  );
}
