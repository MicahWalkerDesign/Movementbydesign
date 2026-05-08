/**
 * Client testimonials.
 *
 * Translated and adapted from German-language Google reviews of
 * Aussie Ausdauer — Micah's previous personal training business in
 * Frankfurt, Germany. The coach and the coaching approach are the same;
 * the brand has evolved into Movement by Design on the Costa Daurada.
 *
 * If you'd like word-for-word verbatim translations, paste the original
 * German review text and replace these strings.
 */
const ITEMS: { quote: string; outcome: string; attribution: string }[] = [
  {
    outcome: 'Coaching around old back problems',
    quote:
      '“Micah designed targeted exercises for my back problems, and over time the pain genuinely improved. His open, warm manner is refreshing — it’s simply fun to train with him.”',
    attribution: 'Google review · Frankfurt · translated from German',
  },
  {
    outcome: 'A real step-by-step return to fitness',
    quote:
      '“You’re getting me fit again, step by step, with so much patience and motivation. Every session is well planned and genuinely varied — training has never felt this engaging.”',
    attribution: 'Google review · Frankfurt · translated from German',
  },
  {
    outcome: 'A trainer who actually listens',
    quote:
      '“A sympathetic, professional sports scientist who really tunes the work to what each person needs. The sessions are different every time, and you can feel he cares about getting it right.”',
    attribution: 'Google review · Frankfurt · translated from German',
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-sand">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="eyebrow">Client stories</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            What clients say
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            Translated from German-language Google reviews of my previous training business
            in Frankfurt — <span className="text-deep-navy">Aussie Ausdauer</span>. The
            coach and the approach are the same; the brand has evolved into Movement by
            Design here on the Costa Daurada.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <figure key={t.outcome} className="card flex flex-col">
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

        <p className="mt-6 text-xs text-muted-grey max-w-prose">
          Reviews originally posted in German on Google for Aussie Ausdauer (Frankfurt).
          Translated and lightly adapted for clarity. Original German wording available on
          request.
        </p>
      </div>
    </section>
  );
}
