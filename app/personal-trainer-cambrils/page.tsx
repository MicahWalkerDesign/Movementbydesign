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

const PATH = '/personal-trainer-cambrils/';

export const metadata: Metadata = buildMetadata({
  title: 'Personal Trainer Cambrils | Movement by Design',
  description:
    'English-speaking personal trainer in Cambrils. Exercise science-based 1:1 coaching for strength, movement quality and long-term health across Cambrils, Salou and the Costa Daurada.',
  path: PATH,
  locale: 'en_GB',
  alternatePath: '/es/entrenador-personal-cambrils/',
});

export default function PersonalTrainerCambrilsPage() {
  const benefits = [
    {
      title: 'Coaching grounded in exercise science',
      text: 'Programming draws on published exercise science, rehabilitation principles and a decade of coaching practice — not fashionable templates.',
    },
    {
      title: 'Built around Cambrils life',
      text: 'Sessions are scheduled around family routines, marina mornings and the rhythm of a coastal town — early, late or in between.',
    },
    {
      title: 'Movement quality first',
      text: 'We earn the load. Technique, control and joint health come before chasing weights or numbers.',
    },
    {
      title: 'Honest progress tracking',
      text: 'Clear benchmarks, regular reviews and adjustments so you always know what is working and what to change next.',
    },
  ];

  const ideal = [
    'English-speaking residents and expats in Cambrils, Vilafortuny and Miami Platja',
    'German-speaking visitors and long-stay guests on the Costa Daurada',
    'Busy professionals and parents who want efficient, well-designed sessions',
    'People returning to training after a break, surgery or pregnancy',
    'Active adults who want to stay strong without breakdowns or flare-ups',
    'Existing Salou clients who would prefer to train closer to Cambrils',
  ];

  const localDetails = [
    {
      title: 'Cambrils marina and seafront',
      text: 'The promenade between Cambrils marina and Salou is one of the best outdoor training corridors on the Costa Daurada — flat, well-lit and quiet outside peak summer hours.',
    },
    {
      title: 'Beach and running routes',
      text: 'Soft-sand sessions on Platja del Cavet or Platja de la Llosa, plus structured running progressions along the seafront cycle path between Cambrils and Salou.',
    },
    {
      title: 'Five minutes from Salou',
      text: 'Cambrils sits a short drive from Salou. Existing Salou clients can keep their cadence; new Cambrils clients can train without the trip into Salou.',
    },
    {
      title: 'Tarragona and Reus too',
      text: 'I work with clients across Tarragona, Reus, La Pineda and Vila-seca. Travel further along the Costa Daurada can be quoted on request.',
    },
  ];

  const faqs = [
    {
      q: 'How much does a personal trainer in Cambrils cost?',
      a: '1:1 personal training is €90 per hour. Small-group training is €15–30 per person per hour depending on group size. Pre-paid blocks and packages can be arranged on your free intro call.',
    },
    {
      q: 'Where do sessions take place in Cambrils?',
      a: 'Sessions can be delivered outdoors along the Cambrils marina, on the seafront or beach, at home if the space and equipment make sense, or at a suitable local training space — chosen around your goals.',
    },
    {
      q: 'Do you speak English in sessions?',
      a: 'Yes. English is my native language and I speak German fluently. Spanish is in progress — I can coach simple cues in Spanish and switch to English or German for detail.',
    },
    {
      q: 'Do you travel between Cambrils and Salou?',
      a: 'Yes. Cambrils and Salou are around five minutes apart, and I work across both. La Pineda, Vila-seca, Tarragona and Reus are also part of the regular service area.',
    },
    {
      q: 'Can you help if I have an old injury or pain history?',
      a: 'Often, yes. Coaching is rehabilitation-informed and adapted to your history, capacity and confidence. It does not replace medical diagnosis or physiotherapy where those are needed.',
    },
    {
      q: 'Do you offer outdoor training year-round in Cambrils?',
      a: 'The Costa Daurada climate makes outdoor training viable most of the year. In poor weather we move to a covered space or shift the session indoors.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Service · Cambrils"
        title="Personal Trainer in Cambrils"
        subtitle="English-speaking, exercise-science coaching for Cambrils, Salou & Costa Daurada."
        body="1:1 personal training in Cambrils for strength, health, movement quality and confidence. Outdoor sessions along the marina and seafront, at home or in suitable training spaces — built around your goals and your week."
        photoSrc="/images/training-corrective.jpg"
        photoAlt="Personal trainer in Cambrils coaching a strength session on the Costa Daurada"
        photoLabel="Cambrils coaching session"
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">What you get</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              A premium 1:1 experience in Cambrils
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Personal training in Cambrils built around exercise science, your medical
              history and the goals that actually matter to you — not a generic gym plan.
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
              Cambrils clients who want a real plan
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              If you’re looking for a thoughtful personal trainer in Cambrils — someone who
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
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
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
                A structured assessment covering training history, injury history, lifestyle
                and what success would look like for you.
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">3. Personalised plan.</strong>{' '}
                A coaching plan built around your body and your week — not a template.
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">4. Sessions and progression.</strong>{' '}
                1:1 coaching in Cambrils with clear technique work, structured progression
                and ongoing adjustments.
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
              English-speaking personal trainer in Cambrils. German-speaking personal trainer
              in Cambrils. Spanish in progress — happy to coach simple cues in Spanish and
              switch to English or German for detailed explanations.
            </p>
            <h3 className="mt-7 font-heading font-semibold text-deep-navy dark:text-slate-100">Service area</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              Cambrils, Salou, La Pineda, Vila-seca, Tarragona, Reus and the wider Costa
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
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Training built for Cambrils
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Cambrils has the marina, the long seafront and quieter beaches that make
              outdoor strength, conditioning and running work especially well. We use what
              the town gives us.
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
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
            Personal Trainer Cambrils FAQs
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
          'Personal Trainer Cambrils',
          'Premium 1:1 personal training in Cambrils and the Costa Daurada with an exercise science foundation.',
          PATH,
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Personal Trainer Cambrils', path: PATH },
        ])}
      />
    </>
  );
}
