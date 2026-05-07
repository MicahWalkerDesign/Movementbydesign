/**
 * Outcome-based testimonial placeholders.
 *
 * These are illustrative templates — drop in real attributed quotes once
 * clients have given consent. Each one models the tone you want: outcome
 * over hyperbole, calm over loud.
 */
const ITEMS: { quote: string; outcome: string; attribution: string }[] = [
  {
    outcome: 'Returning to strength after a knee setback',
    quote:
      '“I came in nervous about loading my knee again. Within a few months I was lifting heavier than before the injury, and the joint felt better, not worse.”',
    attribution: 'Active adult · Salou',
  },
  {
    outcome: 'Confidence between sessions',
    quote:
      '“The thing that changed for me was understanding what I was doing and why. I stopped guessing on the days I trained alone.”',
    attribution: 'Professional · Cambrils',
  },
  {
    outcome: 'A back that holds up',
    quote:
      '“My back used to dictate my week. After working through the plan, it stopped being the thing I worried about every morning.”',
    attribution: 'Parent · Tarragona',
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-warm-white">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="eyebrow">Outcomes &amp; stories</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            What progress actually looks like
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            Outcome-based stories from people who needed more than a workout. Real
            attributions and names will replace these as clients give consent.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <figure
              key={t.outcome}
              className="card flex flex-col"
            >
              <span className="text-xs uppercase tracking-label text-coastal-blue">
                {t.outcome}
              </span>
              <blockquote className="mt-4 text-deep-navy font-heading text-lg leading-snug">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-6 text-sm text-muted-grey">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-grey">
          Illustrative client stories. Real, attributed testimonials will replace these
          once consent is in place.
        </p>
      </div>
    </section>
  );
}
