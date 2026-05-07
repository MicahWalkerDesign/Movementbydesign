const ITEMS = [
  {
    title: 'Exercise & Sports Science background',
    text: 'University-trained in how the body actually adapts to load — anatomy, physiology, biomechanics and behaviour change.',
  },
  {
    title: 'Clinical exercise research experience',
    text: 'Time spent inside structured research environments designing and measuring exercise interventions for real outcomes.',
  },
  {
    title: 'Sports medicine & medtech experience',
    text: 'Worked alongside clinicians and digital health teams — comfortable with medical context, terminology and scope.',
  },
  {
    title: 'Coaching since 2014',
    text: 'Long-term experience across personal training, group coaching, sports performance and workplace health.',
  },
  {
    title: 'Multilingual',
    text: 'English (native), German (fluent), Spanish (learning) — coaching that works for international clients on the Costa Daurada.',
  },
  {
    title: 'Built for complex goals',
    text: 'Comfortable with injury history, health considerations and busy lives — the variables most generic plans ignore.',
  },
];

export default function Proof() {
  return (
    <section className="section bg-sand">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="eyebrow">Why trust this approach</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            A coach with the background to back it up
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            Premium coaching is more than presence in the room. It’s the depth of education,
            experience and judgement behind every decision in your plan.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <li
              key={it.title}
              className="bg-white border border-soft-border rounded-2xl p-6 shadow-soft"
            >
              <h3 className="font-heading font-semibold text-deep-navy">{it.title}</h3>
              <p className="mt-2 text-charcoal/85 leading-relaxed text-[0.95rem]">
                {it.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
