import Link from 'next/link';
import type { Metadata } from 'next';
import HeroVisual from '@/components/HeroVisual';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';
import YouTubeCard from '@/components/YouTubeCard';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER, SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Personal Trainer Salou | Premium Exercise Science & Health Coaching',
  description:
    'Premium personal training and exercise science-based health coaching in Salou, Cambrils and Tarragona. Functional training, injury prevention, rehabilitation-informed exercise, nutrition habits and online coaching in English and German.',
  path: '/',
});

const services = [
  {
    title: 'Premium Personal Training',
    text: '1:1 coaching for people who want structured support, safe progression and expert exercise guidance.',
    bullets: [
      'strength and fitness',
      'movement quality',
      'confidence in the gym',
      'busy professionals and parents',
      'long-term health habits',
      'injury-conscious training',
    ],
    cta: 'Personal training in Salou',
    href: '/personal-training-salou/',
  },
  {
    title: 'Rehabilitation-Informed Training',
    text: 'Exercise science-based training for people returning from injury, surgery, illness or long periods of inactivity.',
    bullets: [
      'orthopaedic injury history',
      'back, knee, shoulder or hip limitations',
      'return to activity',
      'post-rehab strength',
      'safe progression',
      'movement confidence',
    ],
    cta: 'Explore rehab-informed coaching',
    href: '/injury-prevention/',
  },
  {
    title: 'Special Populations Exercise Coaching',
    text: 'Supportive exercise coaching for people with more complex health considerations.',
    bullets: [
      'pregnancy and postpartum return to training',
      'cancer recovery or treatment-related deconditioning',
      'diabetes or metabolic health goals',
      'neurological or movement limitations',
      'special needs children or young people',
      'older adults wanting strength, balance and independence',
    ],
    cta: 'Special populations coaching',
    href: '/special-populations-exercise/',
  },
  {
    title: 'Online Health & Performance Coaching',
    text: 'Remote coaching for people who need structure, accountability and expert support from home.',
    bullets: [
      'training plan',
      'movement modifications',
      'habit coaching',
      'nutrition education',
      'progress check-ins',
      'support around barriers and adherence',
    ],
    cta: 'Online coaching',
    href: '/online-coaching/',
  },
];

const whoIHelp = [
  'People returning to training after injury, illness or surgery',
  'Pregnant or postpartum women wanting safe, progressive exercise',
  'Cancer patients or survivors rebuilding strength and confidence',
  'People managing diabetes, fatigue or metabolic health concerns',
  'Clients with orthopaedic or neurological limitations',
  'Children or young people with special needs who need movement confidence',
  'Older adults wanting strength, balance and independence',
  'High-performing professionals who want structured health support',
  'Athletes or active adults who want performance without breaking down',
];

const whyMe = [
  {
    title: 'Exercise Science background',
    text: 'Training is based on anatomy, physiology, movement, adaptation and behaviour change — not random workouts.',
  },
  {
    title: 'Special populations experience',
    text: 'Experience across clinical exercise research, cancer exercise protocols, rehabilitation-informed fitness, sports medicine, group training and health coaching.',
  },
  {
    title: 'Rehabilitation-informed approach',
    text: 'Training is adapted around injury history, physical limitations, confidence, fatigue, medical context and safe progression.',
  },
  {
    title: 'Behaviour change focus',
    text: 'The goal is not just a good session. The goal is consistency, confidence and habits that last.',
  },
  {
    title: 'International communication',
    text: 'Available in English, German and developing Spanish — ideal for international residents, expats and families in Salou, Cambrils and Tarragona.',
  },
];

const localLinks = [
  { label: 'Personal Trainer Salou', href: '/personal-training-salou/' },
  { label: 'Personal Trainer Cambrils', href: '/blog/personal-trainer-cambrils/' },
  { label: 'Functional Training Salou', href: '/functional-training/' },
  { label: 'Online Coaching Spain', href: '/online-coaching/' },
  { label: 'Injury Prevention Training Tarragona', href: '/injury-prevention/' },
  { label: 'Exercise Science Personal Trainer Costa Daurada', href: '/about/' },
];

const packages = [
  {
    title: 'Start Strong',
    subtitle: 'For people who want structure and a clear starting point.',
    bullets: [
      'initial consultation',
      'movement and goal review',
      'weekly training plan',
      'habit focus',
      'check-in support',
    ],
    cta: 'Ask about Start Strong',
  },
  {
    title: 'Move Better',
    subtitle: 'For people returning to training, managing old injuries or wanting better technique.',
    bullets: [
      '1:1 coaching',
      'movement quality focus',
      'strength and mobility work',
      'injury prevention principles',
      'progressive training plan',
    ],
    cta: 'Ask about Move Better',
  },
  {
    title: 'Performance & Health',
    subtitle: 'For people who want higher-level support across training, nutrition habits and performance.',
    bullets: [
      'personalised training',
      'nutrition education',
      'progress tracking',
      'accountability',
      'regular plan updates',
    ],
    cta: 'Ask about Performance & Health',
  },
];

const faqs = [
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
    q: 'Is this suitable if I have an old injury?',
    a: 'In many cases, yes. I use a rehabilitation-informed approach and adapt training around your history and capacity. For medical conditions, diagnosis or clinical rehabilitation, I recommend working alongside your doctor or healthcare provider.',
  },
  {
    q: 'Do you work with people with health conditions?',
    a: 'Yes, where appropriate and within my scope. I can adapt exercise coaching for people managing complex health considerations such as pregnancy, cancer recovery, diabetes, orthopaedic limitations, neurological conditions or reduced confidence, ideally alongside medical or allied-health guidance when needed.',
  },
  {
    q: 'Do you provide nutrition plans?',
    a: 'I provide nutrition education and habit coaching, not medical nutrition therapy. The focus is practical food habits that support training, energy and consistency.',
  },
  {
    q: 'Do you train small groups?',
    a: 'Yes. Small-group and outdoor functional training options are available depending on location, group size and goals.',
  },
  {
    q: 'Can you train children or young people with special needs?',
    a: 'Where appropriate, yes. Coaching can be adapted to the individual, with a focus on confidence, movement quality, safety and enjoyment. For complex medical or developmental needs, I recommend working alongside the child’s healthcare or support team.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="eyebrow">Salou · Cambrils · Tarragona · Online</span>
              <span className="accent-line mt-3 mb-5" aria-hidden />
              <h1 className="font-heading font-semibold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] text-deep-navy">
                Premium Personal Training &amp; Exercise Science Coaching in Salou
              </h1>
              <p className="mt-5 text-xl md:text-2xl text-deep-navy/85 font-heading">
                For people who need more than a generic workout.
              </p>
              <div className="mt-6 space-y-4 max-w-prose text-charcoal/85 leading-relaxed">
                <p>
                  Personalised in-person and online coaching for strength, functional fitness,
                  injury prevention, rehabilitation-informed training, chronic health
                  conditions, pregnancy, performance and long-term wellbeing.
                </p>
                <p>
                  Designed around your goals, medical history, physical capacity and real-life
                  constraints — with clear education, safe progression and practical support.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact/" className="btn-primary">
                  Book a free intro call
                </Link>
                <Link href="/personal-training-salou/" className="btn-secondary">
                  Explore coaching options
                </Link>
              </div>

              <p className="mt-7 text-sm text-deep-navy/75">
                Exercise Science background · Rehabilitation-informed training · Special
                populations · English native · German fluent · Spanish learning
              </p>
            </div>

            <div>
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / PROBLEM */}
      <Section background="warm-white">
        <div className="max-w-3xl">
          <span className="eyebrow">Approach</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Training for complex bodies, not generic programs
          </h2>
          <div className="mt-6 space-y-5 prose-body">
            <p>
              Most personal training is built for simple goals: lose weight, build muscle, get
              fitter.
            </p>
            <p>But many people need something more considered.</p>
            <p>
              You may be managing an old injury, pregnancy, diabetes, cancer recovery,
              neurological symptoms, orthopaedic limitations, chronic fatigue, low confidence,
              special needs, or a body that simply does not respond well to generic gym plans.
            </p>
            <p>
              Movement by Design is built for people who need training that is safe,
              personalised, progressive and realistic.
            </p>
          </div>
        </div>
      </Section>

      {/* SERVICE CARDS */}
      <Section background="sand">
        <div className="max-w-2xl">
          <span className="eyebrow">Coaching options</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Four ways to work with me
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card flex flex-col">
              <h3 className="font-heading font-semibold text-xl text-deep-navy">{s.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{s.text}</p>
              <p className="mt-5 text-xs uppercase tracking-label text-coastal-blue">Best for</p>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-charcoal/85">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span aria-hidden className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-soft-border">
                <Link href={s.href} className="btn-ghost">
                  {s.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* WHO I HELP */}
      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Who I work with</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Coaching for people who need more than a generic plan
          </h2>
          <p className="mt-5 text-charcoal/85 leading-relaxed">
            I work best with people who want expert support but do not feel fully served by
            generic fitness programs.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {whoIHelp.map((w) => (
            <li
              key={w}
              className="bg-white border border-soft-border rounded-2xl p-5 text-charcoal/90 leading-snug"
            >
              {w}
            </li>
          ))}
        </ul>
      </Section>

      {/* ABOUT PREVIEW */}
      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">About</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Hi, I’m Micah.
            </h2>
            <span className="accent-line mt-5" aria-hidden />
          </div>
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <p>
              I’m an Exercise and Sports Science professional, health coach and
              rehabilitation-informed personal trainer based between Spain and Australia.
            </p>
            <p>
              My work has always focused on helping people move better, prevent injuries,
              recover from setbacks and build healthier habits. I have worked across personal
              training, group fitness, sports performance, workplace wellness, clinical
              exercise research, sports medicine and digital health.
            </p>
            <p>
              A large part of my experience has been with people who need more than a generic
              fitness plan: clients with injury history, low confidence, chronic health
              challenges, complex goals or real-life barriers that make consistency difficult.
            </p>
            <p>
              My approach is structured, supportive and practical: understand the person,
              adapt the plan, progress safely and build habits that fit real life.
            </p>
            <Link href="/about/" className="btn-secondary mt-2">
              Read more about my background
            </Link>
          </div>
        </div>
      </Section>

      {/* WHY WORK WITH ME */}
      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Movement by Design</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Premium coaching with an exercise science foundation
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyMe.map((c, i) => (
            <article key={c.title} className="card">
              <span className="block text-xs font-semibold tracking-label uppercase text-terracotta">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-heading font-semibold text-lg text-deep-navy">
                {c.title}
              </h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{c.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* LOCAL SEO */}
      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Service area</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Personal training in Salou, Cambrils and Tarragona
            </h2>
          </div>
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <p>
              Movement by Design offers personal training, functional training and health
              coaching across Salou and nearby areas, including Cambrils, Tarragona, La Pineda,
              Vila-seca, Reus and the Costa Daurada.
            </p>
            <p>
              Sessions can be delivered outdoors, at suitable training spaces, at home where
              appropriate, or online depending on your goals and location.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2.5 pt-2">
              {localLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-coastal-blue hover:text-deep-navy transition-colors"
                  >
                    <span aria-hidden className="text-terracotta">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PACKAGES */}
      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Coaching packages</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Choose the level of support you need
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((p, idx) => (
            <article
              key={p.title}
              className={`card flex flex-col ${
                idx === 1 ? 'md:scale-[1.02] border-coastal-blue/40' : ''
              }`}
            >
              {idx === 1 && (
                <span className="self-start text-xs uppercase tracking-label text-terracotta mb-2">
                  Most popular
                </span>
              )}
              <h3 className="font-heading font-semibold text-xl text-deep-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-grey">{p.subtitle}</p>
              <ul className="mt-5 space-y-2 text-charcoal/85">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span aria-hidden className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coastal-blue flex-none" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-5 border-t border-soft-border">
                <Link href="/contact/" className="btn-ghost">
                  {p.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* YOUTUBE */}
      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Education</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Movement education you can use
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Through Movement by Design, I share practical movement, functional fitness and
              injury prevention education to help people understand their body, train smarter
              and build confidence.
            </p>
            <a href={SITE.youtube} target="_blank" rel="noreferrer noopener" className="btn-secondary mt-6">
              Watch Movement by Design on YouTube
            </a>
          </div>
          <YouTubeCard
            title="Movement by Design"
            channelHref={SITE.youtube}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-sm text-muted-grey leading-relaxed max-w-prose">
              {MEDICAL_DISCLAIMER}
            </p>
          </div>
          <div className="md:col-span-3">
            <FAQ items={faqs} />
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section background="navy">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <span className="text-xs font-semibold tracking-label uppercase text-terracotta">
              Get started
            </span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-warm-white">
              Ready to move better?
            </h2>
            <p className="mt-5 text-warm-white/80 max-w-prose">
              Tell me where you are starting from, what you want to improve, and what has not
              worked before.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-3 md:justify-end">
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

      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }])} />
    </>
  );
}
