const STEPS = [
  {
    n: '01',
    title: 'Assess',
    text: 'Goals, history, movement, capacity, lifestyle. We map where you actually are — not where a generic plan assumes you are.',
  },
  {
    n: '02',
    title: 'Design',
    text: 'A plan built around your body and your real week — strength, mobility, conditioning and recovery balanced for you.',
  },
  {
    n: '03',
    title: 'Coach',
    text: 'Technique, confidence, progression and education in every session — so you understand why each piece is there.',
  },
  {
    n: '04',
    title: 'Adapt',
    text: 'Track what works, adjust what doesn’t, and build long-term consistency around the inevitable changes in life.',
  },
];

export default function Method() {
  return (
    <section className="section bg-warm-white">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="eyebrow">The method</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            The Movement by Design method
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            A clear, four-stage system built on exercise science and rehab-informed
            principles — designed to make progress feel structured, not random.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="relative bg-white border border-soft-border rounded-2xl p-6 md:p-7 shadow-soft"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-heading text-3xl font-semibold text-coastal-blue">
                  {s.n}
                </span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden className="hidden md:block text-terracotta text-xl">
                    →
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-heading font-semibold text-xl text-deep-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-charcoal/85 leading-relaxed text-[0.95rem]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
