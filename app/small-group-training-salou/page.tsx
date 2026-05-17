import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';
import {
  buildMetadata,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const PATH = '/small-group-training-salou/';

export const metadata: Metadata = buildMetadata({
  title: 'Small Group Training Salou | Movement by Design',
  description:
    'Functional small group training in Salou and Cambrils — 3 to 6 people, exercise-science led, English and German-speaking coach. €15–30 per person per hour.',
  path: PATH,
  locale: 'en_GB',
  alternatePath: '/es/entrenamiento-grupo-reducido-salou/',
});

export default function SmallGroupTrainingSalouPage() {
  const benefits = [
    {
      title: 'Genuinely small groups',
      text: 'Three to six people per session. Everyone gets eyes on their technique and a programme adjusted to their level — not a crowded class.',
    },
    {
      title: 'Functional, transferable training',
      text: 'Strength, mobility, core and conditioning built around real-life movement — carrying, lifting, climbing, walking and playing.',
    },
    {
      title: 'Exercise-science led',
      text: 'Sessions follow the same principles as 1:1 coaching: structured progression, technique first, sensible load management, honest reviews.',
    },
    {
      title: 'Lower per-person cost',
      text: 'Premium coaching at €15–30 per person, per hour — depending on group size — without losing personal attention.',
    },
  ];

  const formats = [
    {
      title: 'Bring your own group',
      text: 'Assemble a group of friends, family members or colleagues (3–6 people) and we run a closed block built around the group’s goals and level.',
    },
    {
      title: 'Join a waiting list',
      text: 'Solo? Let me know your goals, training history and availability and I will match you into a forming group when the fit is right.',
    },
    {
      title: 'Indoor or outdoor formats',
      text: 'Sessions run outdoors on the Salou and Cambrils seafront in good weather, and in a suitable training space when conditions or programming call for it.',
    },
    {
      title: 'Functional, varied sessions',
      text: 'Expect a mix of strength, carries, mobility, conditioning intervals and movement skill work — not a stripped-down bootcamp.',
    },
  ];

  const ideal = [
    'Friends, couples or families who want to train together with a real coach',
    'Small workplaces or teams in Salou and Cambrils looking for group training',
    'Active adults who prefer a small group atmosphere over solo sessions',
    'Expats and residents who want English or German-speaking group coaching',
    'People who find 1:1 training pricing a stretch but still want quality coaching',
    'Existing 1:1 clients who want to add a weekly group session',
  ];

  const faqs = [
    {
      q: 'How much is small group training in Salou?',
      a: 'Small group training is €15–30 per person per hour. The exact per-person rate depends on group size — bigger groups (up to 6) are at the lower end of the range.',
    },
    {
      q: 'How big are the groups?',
      a: 'Groups run with 3 to 6 people. That keeps the coaching meaningful — everyone gets technique cues and modifications, rather than a one-size class.',
    },
    {
      q: 'Can I join without a group?',
      a: 'Yes. Tell me your goals, training history and availability on the free intro call and I will add you to a waiting list for a forming group that fits.',
    },
    {
      q: 'Where do small group sessions take place?',
      a: 'Most sessions run outdoors along the Salou and Cambrils seafront, with indoor options at a suitable training space when conditions or programming require it.',
    },
    {
      q: 'Do you offer corporate small group training?',
      a: 'Yes. Small businesses, hotels and teams in Salou, Cambrils and the wider Costa Daurada can arrange closed sessions for their staff — please get in touch with size and goals.',
    },
    {
      q: 'Is small group training right for me if I have an injury history?',
      a: 'Often, yes. Programming is exercise-science based and adapted to each participant. For more complex rehabilitation, 1:1 personal training is usually a better starting point.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Service · Small Group"
        title="Small Group Training in Salou"
        subtitle="Functional, exercise-science group training for 3-6 people in Salou & Cambrils."
        body="Premium small group coaching for 3 to 6 people across Salou, Cambrils and the wider Costa Daurada. €15–30 per person per hour — bring your own group, or join a waiting list for a forming one."
        photoSrc="/images/training-corrective.jpg"
        photoAlt="Small group training session in Salou — coached functional training on the Costa Daurada"
        photoLabel="Salou small group session"
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">What you get</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Real coaching, smaller bill
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Small group training in Salou and Cambrils that keeps the standards of 1:1
              coaching — technique, programming, progression — and shares the cost across
              a small group.
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
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Groups that want a real plan
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Small group training is built for people who want coached, structured sessions —
              not a high-volume class — with a few like-minded training partners.
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
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">How groups run</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Formats and options
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Whether you bring your own group or want to be matched into one, the structure
              stays the same — proper warm-ups, coached working sets, conditioning and a
              cool-down with mobility.
            </p>
          </div>
          <div className="md:col-span-3 grid gap-5">
            {formats.map((f) => (
              <article key={f.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">{f.title}</h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <span className="eyebrow">Pricing</span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              €15–30 per person, per hour
            </h2>
            <p>
              Small group training is priced per person, per hour. The per-person rate scales
              with group size — at 3 people you’ll sit nearer the top of the range, and at 6
              people nearer the bottom.
            </p>
            <ul className="space-y-3 mt-2">
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">3 people</strong> — closer to €30 per person, per hour
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">4 people</strong> — around the middle of the range
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">5–6 people</strong> — closer to €15 per person, per hour
              </li>
            </ul>
            <p className="text-sm text-muted-grey dark:text-slate-400">
              Pre-paid blocks and standing weekly slots can be arranged once the group is
              confirmed. Travel beyond Salou and Cambrils may be quoted separately.
            </p>
          </div>

          <aside className="md:col-span-2 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-soft-border dark:border-slate-700">
            <h3 className="font-heading font-semibold text-deep-navy dark:text-slate-100">Languages</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              Sessions are coached in English or German. Simple Spanish cues are available
              while my Spanish continues to improve.
            </p>
            <h3 className="mt-7 font-heading font-semibold text-deep-navy dark:text-slate-100">Service area</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              Salou, Cambrils, La Pineda, Vila-seca, Tarragona and Reus.
            </p>
            <Link href="/contact/" className="btn-primary mt-7 w-full">
              Ask about small groups
            </Link>
          </aside>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
            Small Group Training FAQs
          </h2>
        </div>
        <FAQ items={faqs} />
      </Section>

      <Section background="sand">
        <RelatedServices excludeHref={PATH} />
      </Section>

      <Section background="warm-white">
        <p className="text-sm text-muted-grey dark:text-slate-400 leading-relaxed max-w-prose mb-10">
          {MEDICAL_DISCLAIMER}
        </p>
        <CtaBlock />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Small Group Training Salou',
          'Functional small group personal training in Salou and Cambrils, 3–6 people, exercise-science based.',
          PATH,
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Small Group Training Salou', path: PATH },
        ])}
      />
    </>
  );
}
