import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, breadcrumbSchema, personSchema } from '@/lib/seo';

const PATH = '/about/';

export const metadata: Metadata = buildMetadata({
  title: 'About Movement by Design | Exercise Science Personal Trainer in Salou',
  description:
    'Movement by Design is led by Micah Walker — an exercise science professional, health coach and rehabilitation-informed personal trainer based between Spain and Australia.',
  path: PATH,
  locale: 'en_GB',
  alternatePath: '/es/sobre-mi/',
});

const credentials = [
  'Bachelor of Exercise & Sports Science',
  'Certificate III & IV in Fitness',
  'Rehabilitation Trainer for Orthopedic Diseases',
  'Functional Fitness for Preventative & Rehabilitative Training',
  'Strength & Conditioning experience in rugby',
  'Clinical exercise research experience',
  'Sports medicine experience',
  'English native, German fluent, Spanish learning',
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-8 md:pb-10">
          <span className="eyebrow">About</span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-deep-navy max-w-4xl leading-[1.1]">
            About Movement by Design
          </h1>
          <p className="mt-5 text-xl md:text-2xl text-deep-navy/85 font-heading max-w-3xl">
            Better health starts with better systems.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">The story</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Hi, I’m Micah.
            </h2>
            <span className="accent-line mt-5" aria-hidden />
          </div>
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <p>
              Movement by Design was created around one simple idea: better health starts with
              better systems.
            </p>
            <p>
              My work has always been goal-driven: helping people prevent injuries, recover
              from setbacks, improve performance and build healthier habits. I focus on the
              intersection of movement, behaviour change and practical education.
            </p>
            <p>
              I originally came from an exercise science, coaching and performance background,
              where results depended on more than “good advice.” Real outcomes depended on
              adherence, motivation, confidence, education, habit formation and designing
              systems around real life.
            </p>
            <p>
              Over time, I applied that same thinking across personal training, group
              coaching, clinical exercise research, workplace health, sports medicine, digital
              health tools and movement education.
            </p>
            <p>
              Today, I help people in Salou, Cambrils, Tarragona and online train smarter,
              move better and build habits they can actually maintain.
            </p>
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Background</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Credentials &amp; experience
            </h2>
          </div>
          <ul className="md:col-span-3 grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <li
                key={c}
                className="bg-white border border-soft-border rounded-2xl p-5 flex gap-3"
              >
                <span aria-hidden className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                <span className="text-charcoal/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Philosophy</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Move better. Get stronger. Build healthier habits.
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Train safely. Move confidently. Build a body that supports your life. The work
              isn’t about chasing punishing workouts — it’s about designing training around
              the person, so the work is sustainable, intelligent and genuinely useful.
            </p>
            <Link href="/contact/" className="btn-primary mt-7">
              Book a free intro call
            </Link>
          </div>
          <div className="bg-sand border border-soft-border rounded-3xl p-8 md:p-10">
            <h3 className="font-heading font-semibold text-deep-navy text-xl">
              Languages &amp; locations
            </h3>
            <p className="mt-4 text-charcoal/85 leading-relaxed">
              English (native) · German (fluent) · Spanish (learning).
            </p>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              Based in Salou, Tarragona. Serving Salou, Cambrils, Tarragona, La Pineda,
              Vila-seca, Reus and the wider Costa Daurada — with online coaching available
              internationally.
            </p>
          </div>
        </div>
      </Section>

      <Section background="sand">
        <CtaBlock />
      </Section>

      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: PATH },
        ])}
      />
    </>
  );
}
