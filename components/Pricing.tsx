import Link from 'next/link';

export type PriceTier = {
  title: string;
  price: string;
  unit: string;
  blurb: string;
  bullets: string[];
  cta: string;
  href: string;
  highlight?: boolean;
  footnote?: string;
};

export const PRICE_TIERS: PriceTier[] = [
  {
    title: '1:1 Personal Training',
    price: '€90',
    unit: 'per hour',
    blurb:
      'Personalised 1:1 coaching with full attention to technique, programming and progression.',
    bullets: [
      'Tailored to your goals and history',
      'Indoor, outdoor or in-home where appropriate',
      'Salou, Cambrils, Tarragona and the Costa Daurada',
    ],
    cta: 'Book a free intro call',
    href: '/contact/',
    highlight: true,
  },
  {
    title: 'Small Group Training',
    price: '€15–30',
    unit: 'per person, per hour',
    blurb:
      'Functional training in a small group of 3–6 — ideal for friends, families or small teams.',
    bullets: [
      '3–6 participants',
      'Functional training format',
      'Per-person rate scales with group size',
    ],
    cta: 'Ask about small groups',
    href: '/contact/',
  },
  {
    title: 'Online Coaching',
    price: 'From €120',
    unit: 'per month',
    blurb:
      'Remote programming, modifications, check-ins, education and accountability — built around your week.',
    bullets: [
      'Personalised programming',
      'Habit and education support',
      'Regular check-ins and adjustments',
    ],
    cta: 'Ask about online coaching',
    href: '/contact/',
    footnote: 'Final monthly rate depends on cadence — confirmed on your intro call.',
  },
];

/** Manual Therapy moved to a small add-on row beneath the main tiers. */
export const ADD_ONS = [
  {
    title: 'Movement support add-on',
    price: '€50',
    unit: 'per 30 minutes',
    blurb:
      'Soft tissue and mobility support to complement training. Available alongside coaching — not a replacement for medical care.',
  },
];

export default function Pricing({
  eyebrow = 'Session rates',
  heading = 'Transparent session rates',
  intro = 'Clear, simple pricing so you know what you’re working with from the start. Packages and pre-paid blocks are available — ask for current options on your intro call.',
  background = 'sand',
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  background?: 'sand' | 'warm-white';
}) {
  return (
    <section className={`section ${background === 'sand' ? 'bg-sand' : 'bg-warm-white'}`}>
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            {heading}
          </h2>
          {intro && <p className="mt-5 prose-body max-w-prose">{intro}</p>}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PRICE_TIERS.map((t) => (
            <article
              key={t.title}
              className={`card flex flex-col ${
                t.highlight ? 'md:scale-[1.02] border-coastal-blue/40' : ''
              }`}
            >
              {t.highlight && (
                <span className="self-start text-xs font-semibold uppercase tracking-label text-coastal-blue mb-2">
                  Most requested
                </span>
              )}
              <h3 className="font-heading font-semibold text-xl text-deep-navy">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-grey">{t.blurb}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-semibold text-deep-navy">
                  {t.price}
                </span>
                <span className="text-sm text-muted-grey">{t.unit}</span>
              </div>
              <ul className="mt-5 space-y-2 text-charcoal/85">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span aria-hidden className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coastal-blue flex-none" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-5 border-t border-soft-border">
                <Link href={t.href} className="btn-ghost">
                  {t.cta} →
                </Link>
              </div>
              {t.footnote && (
                <p className="mt-4 text-xs text-muted-grey">{t.footnote}</p>
              )}
            </article>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {ADD_ONS.map((a) => (
            <div
              key={a.title}
              className="bg-white border border-soft-border rounded-2xl p-6 flex flex-wrap items-baseline gap-4"
            >
              <div className="flex-1 min-w-[14rem]">
                <span className="text-xs uppercase tracking-label text-coastal-blue">
                  Add-on
                </span>
                <h3 className="mt-1 font-heading font-semibold text-deep-navy">{a.title}</h3>
                <p className="mt-1 text-sm text-charcoal/85">{a.blurb}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-2xl font-semibold text-deep-navy">
                  {a.price}
                </span>
                <span className="text-sm text-muted-grey">{a.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-grey max-w-prose">
          Prices in EUR and inclusive of applicable taxes where relevant. Travel beyond
          Salou and Cambrils, or sessions outside standard hours, may be quoted separately.
        </p>
      </div>
    </section>
  );
}
