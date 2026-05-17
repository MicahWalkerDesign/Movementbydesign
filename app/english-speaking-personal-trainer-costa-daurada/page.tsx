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

const PATH = '/english-speaking-personal-trainer-costa-daurada/';

export const metadata: Metadata = buildMetadata({
  title: 'English-Speaking Personal Trainer Costa Daurada | Movement by Design',
  description:
    'English-speaking personal trainer in Salou, Cambrils and the Costa Daurada. Exercise-science coaching for expats, long-stay visitors and residents who want coaching in their own language. German also spoken.',
  path: PATH,
  locale: 'en_GB',
});

export default function EnglishSpeakingTrainerPage() {
  const reasons = [
    {
      title: 'Native English coaching cues',
      text: 'Coaching nuance — breath, bracing, "feel" cues, pacing — happens in your first language. Important when the work is technical or you are managing pain.',
    },
    {
      title: 'Built for expats and long-stay visitors',
      text: 'Flexible scheduling for residents, second-home owners and long-stay guests. Programmes that travel with you when you go home and continue online if needed.',
    },
    {
      title: 'Exercise science, not gym slang',
      text: 'Bachelor of Exercise & Sports Science, clinical exercise research and sports medicine experience. Programming you can actually ask questions about.',
    },
    {
      title: 'Rehabilitation-informed',
      text: 'If you are managing an old injury, post-surgery rehab, pregnancy or a chronic condition, sessions are adapted around your history — not in spite of it.',
    },
  ];

  const idealFor = [
    'English-speaking residents and expats living year-round on the Costa Daurada',
    'Second-home owners and long-stay visitors spending months in Salou, Cambrils, La Pineda or Vila-seca',
    'German speakers who prefer coaching in English or German rather than Spanish',
    'Holidaymakers who want a focused training block during their stay',
    'Returning travellers managing post-surgery recovery, postpartum return or a chronic condition',
    'Active retirees building strength, balance and long-term independence',
  ];

  const whatYouGet = [
    {
      title: 'Native-English intro call',
      text: 'A relaxed conversation about your training history, current goals, any injuries or health considerations, and what success looks like for you — no jargon, no language friction.',
    },
    {
      title: 'Structured assessment',
      text: 'Movement screen, training-history review, lifestyle context. Outputs are written up in English so you can refer back to them.',
    },
    {
      title: 'Programme in your language',
      text: 'Written programmes, technique cues, video reviews and progress notes — all in clear English (or German if preferred). No guessing what your trainer meant.',
    },
    {
      title: 'Continuity when you travel',
      text: 'When you leave the Costa Daurada, your programme travels with you. Online coaching keeps the work consistent between visits.',
    },
  ];

  const languages = [
    {
      flag: '🇬🇧',
      label: 'English',
      detail: 'Native speaker. Australian/British-trained exercise scientist.',
    },
    {
      flag: '🇩🇪',
      label: 'German',
      detail: 'Fluent. Comfortable coaching German-speaking visitors and residents.',
    },
    {
      flag: '🇪🇸',
      label: 'Spanish',
      detail: 'Learning. Simple cues in Spanish; technical explanations in English or German.',
    },
  ];

  const faqs = [
    {
      q: 'Do you offer personal training entirely in English?',
      a: 'Yes. English is my native language. Intro calls, sessions, written programmes, video reviews, technique cues and progress notes are all delivered in English. German is available on request.',
    },
    {
      q: 'I am visiting the Costa Daurada for a few weeks — can I still train with you?',
      a: 'Yes. Short-block coaching for visitors is a common request. We can design a focused 1, 2 or 4-week training plan to fit your stay, then transition to online coaching when you return home if you would like continuity.',
    },
    {
      q: 'Where exactly do you cover?',
      a: 'In-person coaching in Salou, Cambrils, La Pineda, Vila-seca, Tarragona and Reus. The wider Costa Daurada is available on request. Online coaching is available internationally.',
    },
    {
      q: 'Can I train at my apartment or holiday rental?',
      a: 'In many cases, yes — depending on space, equipment and what your programme needs. We will choose the right location together: home, outdoor (marina, seafront, beach) or a suitable local training space.',
    },
    {
      q: 'I have a medical history — pregnancy, post-surgery, a chronic condition. Is that okay?',
      a: 'Often, yes. My background is in exercise science, rehabilitation-informed training and special populations. Coaching does not replace medical care but works alongside your medical or allied-health team. We will discuss this in detail on the intro call.',
    },
    {
      q: 'Do you coach German speakers too?',
      a: 'Yes. German is fluent, and a meaningful proportion of clients on the Costa Daurada prefer coaching in German over Spanish. Sessions, programmes and explanations are available in either language.',
    },
    {
      q: 'How much does it cost?',
      a: '1:1 personal training is €90 per hour. Small-group training is €15–30 per person per hour. Online coaching from €120 per month. Pre-paid blocks and packages are available on request.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Service · Expats & long-stay visitors"
        title="English-speaking personal trainer on the Costa Daurada"
        subtitle="Exercise-science coaching in your own language — Salou, Cambrils, Tarragona &amp; online."
        body="Native English coaching for residents, expats and long-stay visitors. Built for people who want training that is precise, technical and explained clearly — without a language barrier sitting between you and the work."
        photoSrc="/images/training-corrective.jpg"
        photoAlt="English-speaking personal trainer coaching a strength session on the Costa Daurada"
        photoLabel="Coaching in English"
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Why language matters</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Better coaching happens in your first language
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Personal training is technical work — breathing patterns, bracing,
              load progression, how a movement should feel. The details get lost
              when there is a language gap between you and the coach. On the
              Costa Daurada that gap is a real problem for English-speaking
              residents and visitors.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            {reasons.map((b) => (
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
              English-speaking residents, expats and long-stay visitors
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              The Costa Daurada has a large international community —
              British, Irish, Northern European, North American and Australian
              residents and second-home owners. The service is built for them.
            </p>
          </div>
          <ul className="grid gap-3">
            {idealFor.map((i) => (
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
            <span className="eyebrow">What you get</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Coaching, written down, in English
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Sessions are only one part of the work. Most of the value sits
              in the programme that travels with you — and that programme is
              written in clear English you can refer back to.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            {whatYouGet.map((b) => (
              <article key={b.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">{b.title}</h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Languages</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Three languages, one coach
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              You don’t have to switch trainers to switch languages. Whatever
              language is most natural for the technical work, we use that one.
            </p>
            <Link href="/contact/" className="btn-primary mt-7">
              Book a free intro call
            </Link>
          </div>
          <div className="md:col-span-3 grid gap-4">
            {languages.map((l) => (
              <article
                key={l.label}
                className="bg-white dark:bg-slate-800 border border-soft-border dark:border-slate-700 rounded-2xl p-5 flex gap-4 items-start"
              >
                <span aria-hidden className="text-3xl flex-none">{l.flag}</span>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">{l.label}</h3>
                  <p className="mt-1.5 text-charcoal/85 dark:text-slate-300 leading-relaxed">{l.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Pricing
        background="warm-white"
        eyebrow="Rates"
        heading="Session rates"
        intro="Clear pricing in euros. Pre-paid blocks and packages can be arranged on your free intro call once we know what cadence suits your stay or schedule."
      />

      <Section background="sand">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
            English-speaking personal trainer FAQs
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
          'English-Speaking Personal Trainer Costa Daurada',
          'Native English personal training for residents, expats and long-stay visitors on the Costa Daurada. Exercise-science led, rehabilitation-informed coaching in Salou, Cambrils, Tarragona and online.',
          PATH,
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'English-Speaking Personal Trainer Costa Daurada', path: PATH },
        ])}
      />
    </>
  );
}
