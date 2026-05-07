import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const PATH = '/online-coaching/';

export const metadata: Metadata = buildMetadata({
  title: 'Online Health & Performance Coaching | Movement by Design',
  description:
    'Remote personal training and health coaching for training plans, nutrition habits, injury prevention and long-term wellbeing. Online coaching in English and German for clients in Spain and worldwide.',
  path: PATH,
});

const includes = [
  {
    title: 'Personalised training plan',
    text: 'Programming built around your goals, schedule, equipment and history — not a recycled template.',
  },
  {
    title: 'Movement modifications',
    text: 'Smart adjustments around old injuries, joint sensitivity, fatigue and changing capacity.',
  },
  {
    title: 'Habit coaching',
    text: 'Behaviour-focused support so training, sleep, recovery and nutrition habits actually stick.',
  },
  {
    title: 'Nutrition education',
    text: 'Practical food habits to support training, energy and consistency. Education, not medical nutrition therapy.',
  },
  {
    title: 'Progress check-ins',
    text: 'Regular structured reviews — what’s working, what’s blocking you, what to adjust next.',
  },
  {
    title: 'Support around barriers',
    text: 'Real-life coaching for travel, busy weeks, parenting, illness, motivation dips and adherence challenges.',
  },
];

export default function OnlineCoachingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Service · Online"
        title="Online Health & Performance Coaching"
        subtitle="Structured remote coaching for training, nutrition habits, injury prevention and long-term wellbeing."
        body="Online coaching for people who want expert support from home — whether you’re a busy professional, an expat in Spain, a parent juggling a full life, or returning to training after a setback."
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">What’s included</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            A complete online coaching system
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {includes.map((i) => (
            <article key={i.title} className="card">
              <h3 className="font-heading font-semibold text-lg text-deep-navy">{i.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{i.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              A clear process, no guesswork
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Online coaching shouldn’t feel like a PDF you download and forget about. Every
              client gets a structured onboarding, a personalised plan and ongoing review.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              'Free intro call to understand goals, history and constraints',
              'Detailed onboarding questionnaire and movement screen',
              'Personalised training plan, habit focus and check-in cadence',
              'Ongoing communication for questions, modifications and progress',
              'Regular reviews to update the plan as you change',
            ].map((step, idx) => (
              <li
                key={step}
                className="bg-white border border-soft-border rounded-2xl p-5 flex gap-4"
              >
                <span className="font-heading text-coastal-blue font-semibold w-6 flex-none">
                  {idx + 1}.
                </span>
                <span className="text-charcoal/90">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Who it suits</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Built for self-directed clients
            </h2>
          </div>
          <ul className="md:col-span-3 grid sm:grid-cols-2 gap-3">
            {[
              'Expats and professionals who travel often',
              'Parents who train at home or in local gyms',
              'People returning to training after injury or illness',
              'Active adults who want a smarter plan',
              'Clients who want structured nutrition habit support',
              'Anyone outside the Costa Daurada who wants to work with me',
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

      <Section background="sand">
        <RelatedServices excludeHref={PATH} />
      </Section>

      <Section background="warm-white">
        <p className="text-sm text-muted-grey leading-relaxed max-w-prose mb-10">
          {MEDICAL_DISCLAIMER}
        </p>
        <CtaBlock title="Ask about online coaching" />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Online Health & Performance Coaching',
          'Remote personal training and health coaching including training plans, nutrition habits, injury prevention and behaviour change.',
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Online Coaching', path: PATH },
        ])}
      />
    </>
  );
}
