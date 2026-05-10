import Link from 'next/link';
import type { Metadata } from 'next';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';
import YouTubeCard from '@/components/YouTubeCard';
import JsonLd from '@/components/JsonLd';

import Proof from '@/components/Proof';
import Testimonials from '@/components/Testimonials';
import PhotoSlot from '@/components/PhotoSlot';
import { buildMetadata, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER, SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title:
    'Personal Trainer Salou | Exercise Science Coaching for Strength, Health & Longevity | Movement by Design',
  description:
    'Personal training for people who need more than a workout. Exercise-science led coaching for strength, injury prevention, confidence and long-term health in Salou, Cambrils, Tarragona and online.',
  path: '/',
  locale: 'en_GB',
  alternatePath: '/es/',
});

/* ---------- Section content ---------- */

const FOR_YOU = [
  'You want to get stronger without aggravating old injuries',
  'You feel lost after physio, surgery or time away from training',
  'You want performance without breaking down',
  'You need coaching adapted to your body, energy and confidence',
  'You are pregnant, postpartum, older, or managing health considerations',
  'You want structure, accountability and education — not random workouts',
];

const SERVICES = [
  {
    title: '1:1 Personal Training',
    text: 'Strength, movement quality, confidence, fitness and injury-conscious progression — designed around you.',
    price: '€90',
    unit: 'per hour',
    href: '/personal-training-salou/',
    cta: 'Personal training in Salou',
  },
  {
    title: 'Small Group Training',
    text: 'Functional training in a small group of 3–6. Assemble your own group with friends, family or colleagues — or join the waiting list for the next available spot.',
    price: '€15–30',
    unit: 'per person, per hour',
    href: '/contact/',
    cta: 'Ask about a small group',
  },
  {
    title: 'Manual Therapy',
    text: 'Soft tissue work for pain management and mobility — available alongside coaching or on its own.',
    price: '€50',
    unit: 'per 30 minutes',
    href: '/contact/',
    cta: 'Ask about a session',
  },
];

const FAQS = [
  {
    q: 'Do you offer personal training in English?',
    a: 'Yes. English is my native language. I also speak German fluently and I am currently learning Spanish.',
  },
  {
    q: 'Where do sessions take place?',
    a: 'Sessions can take place in Salou, Cambrils, Tarragona, La Pineda, Vila-seca and nearby areas, depending on location and training needs. Online coaching is also available.',
  },
  {
    q: 'Do I need to be fit already?',
    a: 'No. Coaching is adapted to your current level, goals, injury history and confidence.',
  },
  {
    q: 'Is this suitable if I have an old injury or health considerations?',
    a: 'In many cases, yes. I use a rehab-informed approach and adapt training around your history and capacity. For diagnosis or active medical conditions I recommend working alongside your doctor or healthcare provider — coaching can sit alongside that work where appropriate.',
  },
  {
    q: 'What is included in coaching?',
    a: 'Sessions, written programming, technique cues, movement modifications, check-ins and ongoing education. Specifics depend on the package — we’ll define the exact scope on your free intro call.',
  },
];

/* ---------- Page ---------- */

export default function HomePage() {
  return (
    <>
      {/* Preload the LCP hero image — improves Largest Contentful Paint. */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-portrait.jpg"
        // @ts-expect-error fetchpriority is valid HTML5 even if React types lag
        fetchpriority="high"
      />

      {/* 1. HERO — calm, premium, photo-led */}
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6">
              <span className="eyebrow">Salou · Cambrils · Tarragona · Online</span>
              <span className="accent-line mt-3 mb-6" aria-hidden />
              <h1 className="font-heading font-semibold text-[2.5rem] md:text-[3.4rem] leading-[1.05] tracking-[-0.02em] text-deep-navy max-w-[18ch]">
                Personal training for people who need more than a workout.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-deep-navy/80 max-w-prose leading-relaxed">
                Exercise-science led coaching for strength, movement confidence, injury
                prevention and long-term health — in Salou, Cambrils, Tarragona and online.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact/" className="btn-primary">
                  Book a free intro call
                </Link>
                <Link href="#services" className="btn-secondary">
                  Explore coaching
                </Link>
              </div>

              <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-label text-deep-navy/70">
                {[
                  'Exercise Science',
                  'Rehab-informed',
                  'Performance',
                  'EN · DE · ES learning',
                ].map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 bg-warm-white border border-soft-border rounded-full px-3 py-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" aria-hidden />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6">
              <PhotoSlot
                src="/images/hero-portrait.jpg"
                alt="Micah Walker — exercise science coach, outdoors at golden hour"
                label="hero portrait"
                variant="portrait"
                tone="sea"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THIS IS FOR YOU IF… */}
      <Section background="sand">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">This is for you if…</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Coaching for real bodies, real histories and real lives.
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Most training fails when it ignores the person. The work I do is built around
              the variables that generic plans skip — and the things that actually move the
              needle long-term.
            </p>
          </div>
          <ul className="md:col-span-7 grid gap-3 sm:grid-cols-2">
            {FOR_YOU.map((line) => (
              <li
                key={line}
                className="bg-white border border-soft-border rounded-2xl p-5 text-charcoal/90 leading-snug"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 4. SERVICES — three pathways */}
      <section id="services" className="section bg-warm-white">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="eyebrow">Coaching options</span>
              <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
                Three ways to work with me
              </h2>
              <p className="mt-5 prose-body max-w-prose">
                A focused range of services with clear formats and clear rates — so it’s
                easy to know which one fits you.
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <Link href="/contact/" className="btn-secondary">
                Not sure which fits? Ask me
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className={`card flex flex-col ${
                  i === 0 ? 'md:scale-[1.015] border-coastal-blue/40' : ''
                }`}
              >
                <span className="font-heading text-sm font-semibold text-coastal-blue">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-xl text-deep-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-charcoal/85 leading-relaxed">{s.text}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-semibold text-deep-navy">
                    {s.price}
                  </span>
                  <span className="text-sm text-muted-grey">{s.unit}</span>
                </div>
                <div className="mt-6 pt-5 border-t border-soft-border">
                  <Link href={s.href} className="btn-ghost">
                    {s.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4b. TRAINING IN MOTION — photo mosaic */}
      <Section background="sand">
        <div className="max-w-2xl">
          <span className="eyebrow">In motion</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            What training actually looks like
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            Four qualities, trained in the right proportions for your body and life — the
            ingredients of capacity that holds up over decades.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: '/images/training-mobility.jpg',
              alt: 'Side plank and rotation mobility drill on outdoor mats',
              label: 'Mobility',
              caption:
                'Reduce daily pain or tightness and increase working capacity.',
            },
            {
              src: '/images/training-strength.jpg',
              alt: 'Outdoor pushups in plank position on training mats',
              label: 'Strength',
              caption:
                'Build a musculoskeletal system that withstands the years and keeps you healthy into retirement.',
            },
            {
              src: '/images/training-corrective.jpg',
              alt: 'Single-arm row using suspension straps with coach observing technique',
              label: 'Corrective Exercises',
              caption:
                'Restore balance and reprogram movement patterns that have shifted through the years.',
            },
            {
              src: '/images/training-conditioning.jpg',
              alt: 'Battle ropes conditioning session in a sunlit park',
              label: 'Cardiovascular Health',
              caption:
                'Targeted conditioning to support energy, recovery and long-term heart and lung capacity.',
            },
          ].map((tile) => (
            <figure key={tile.label} className="group">
              <PhotoSlot
                src={tile.src}
                alt={tile.alt}
                label={tile.label.toLowerCase()}
                variant="portrait"
                tone="sea"
              />
              <figcaption className="mt-3">
                <span className="text-xs uppercase tracking-label text-coastal-blue">
                  {tile.label}
                </span>
                <p className="mt-1 text-sm text-charcoal/85 leading-snug">{tile.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 5. PROOF / CREDIBILITY */}
      <Proof />

      {/* 6. ABOUT PREVIEW with photo */}
      <Section background="sand">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <PhotoSlot
              src="/images/about-coaching.jpg"
              alt="Micah leading an outdoor training session"
              label="outdoor training session"
              variant="square"
              tone="sage"
            />
          </div>
          <div className="md:col-span-7">
            <span className="eyebrow">About</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Hi, I’m Micah.
            </h2>
            <span className="accent-line mt-5" aria-hidden />
            <div className="mt-6 space-y-4 prose-body max-w-prose">
              <p>
                I’m an Exercise and Sports Science professional, health coach and
                rehab-informed personal trainer based between Spain and Australia.
              </p>
              <p>
                I work at the intersection of movement, behaviour change and practical
                education — with a long background across personal training, group coaching,
                clinical exercise research, sports medicine and digital health.
              </p>
              <p>
                The work I do best is for people who need more than a generic plan: clients
                with injury history, busy lives, complex goals and the kind of variables
                that off-the-shelf programming tends to ignore.
              </p>
              <Link href="/about/" className="btn-secondary mt-4">
                Read more about my background
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. TESTIMONIALS */}
      <Testimonials />

      {/* 10. EDUCATION / YOUTUBE */}
      <Section background="sand">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <span className="eyebrow">Education hub</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Movement education you can use
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Short, practical movement and training education on YouTube — for people who
              want to understand their body and train with intent between sessions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary"
              >
                YouTube
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <YouTubeCard title="Movement by Design" channelHref={SITE.youtube} />
          </div>
        </div>
      </Section>

      {/* 11. SERVICE AREAS — moved low, condensed */}
      <Section background="warm-white">
        <PhotoSlot
          src="/images/training-environment.jpg"
          alt="Outdoor training set-up — mats, kettlebells and sandbags ready in a coastal park"
          label="outdoor training set-up"
          variant="landscape"
          tone="sand"
          className="mb-12"
        />

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">Service area</span>
            <h2 className="mt-3 font-heading font-semibold text-2xl md:text-3xl text-deep-navy">
              In-person on the Costa Daurada. Online worldwide.
            </h2>
          </div>
          <div className="md:col-span-7 prose-body max-w-prose">
            <p>
              In-person personal training in Salou, Cambrils, Tarragona, La Pineda,
              Vila-seca and Reus. Online coaching available internationally.
            </p>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {[
                { label: 'Personal Trainer Salou', href: '/personal-training-salou/' },
                {
                  label: 'Personal Trainer Cambrils',
                  href: '/blog/personal-trainer-cambrils/',
                },
                { label: 'Functional Training', href: '/functional-training/' },
                { label: 'Injury Prevention', href: '/injury-prevention/' },
                { label: 'Online Coaching', href: '/online-coaching/' },
                { label: 'Nutrition Habits', href: '/nutrition-habits/' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-coastal-blue hover:text-deep-navy transition-colors"
                  >
                    <span aria-hidden className="text-terracotta">
                      ›
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 12. FAQ */}
      <Section background="sand">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-sm text-muted-grey leading-relaxed max-w-prose">
              {MEDICAL_DISCLAIMER}
            </p>
          </div>
          <div className="md:col-span-7">
            <FAQ items={FAQS} />
          </div>
        </div>
      </Section>

      {/* 13. FINAL CTA */}
      <Section background="navy">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="eyebrow-light">
              Get started
            </span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-warm-white">
              Ready to train with more confidence?
            </h2>
            <p className="mt-5 text-warm-white/80 max-w-prose">
              Tell me where you’re starting from, what you want to improve, and what hasn’t
              worked before. I’ll let you know if I can help and what the best next step
              would be.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact/" className="btn-primary">
              Book a free intro call
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center bg-transparent text-warm-white border border-warm-white/40 font-medium rounded-2xl px-7 py-4 transition-colors hover:bg-warm-white/10"
            >
              Send a message
            </Link>
          </div>
        </div>
      </Section>

      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }])} />
    </>
  );
}
