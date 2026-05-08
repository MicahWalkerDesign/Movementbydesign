import type { Locale } from '@/lib/routes';

const COPY = {
  en: {
    eyebrow: 'Client stories',
    heading: 'What clients say',
    intro:
      'Translated from German-language Google reviews of my previous training business in Frankfurt — Aussie Ausdauer. The coach and the approach are the same; the brand has evolved into Movement by Design here on the Costa Daurada.',
    items: [
      { outcome: 'Coaching around old back problems', quote: '“Micah designed targeted exercises for my back problems, and over time the pain genuinely improved. His open, warm manner is refreshing — it’s simply fun to train with him.”', attribution: 'Google review · Frankfurt · translated from German' },
      { outcome: 'A real step-by-step return to fitness', quote: '“You’re getting me fit again, step by step, with so much patience and motivation. Every session is well planned and genuinely varied — training has never felt this engaging.”', attribution: 'Google review · Frankfurt · translated from German' },
      { outcome: 'A trainer who actually listens', quote: '“A sympathetic, professional sports scientist who really tunes the work to what each person needs. The sessions are different every time, and you can feel he cares about getting it right.”', attribution: 'Google review · Frankfurt · translated from German' },
    ],
    footnote:
      'Reviews originally posted in German on Google for Aussie Ausdauer (Frankfurt). Translated and lightly adapted for clarity. Original German wording available on request.',
  },
  es: {
    eyebrow: 'Historias de clientes',
    heading: 'Lo que dicen los clientes',
    intro:
      'Traducido de reseñas en alemán de Google sobre mi negocio anterior de entrenamiento en Frankfurt — Aussie Ausdauer. El entrenador y el enfoque son los mismos; la marca ha evolucionado hacia Movement by Design aquí, en la Costa Daurada.',
    items: [
      { outcome: 'Entrenamiento adaptado a problemas de espalda', quote: '«Micah diseñó ejercicios específicos para mis problemas de espalda, y con el tiempo el dolor mejoró de verdad. Su trato abierto y cercano es muy refrescante: entrenar con él es sencillamente divertido.»', attribution: 'Reseña de Google · Frankfurt · traducida del alemán' },
      { outcome: 'Una vuelta progresiva a la forma física', quote: '«Me está poniendo en forma paso a paso, con mucha paciencia y motivación. Cada sesión está bien planificada y es realmente variada: nunca había sentido el entrenamiento tan implicado.»', attribution: 'Reseña de Google · Frankfurt · traducida del alemán' },
      { outcome: 'Un entrenador que de verdad escucha', quote: '«Un científico del deporte cercano y profesional que adapta el trabajo a lo que cada persona necesita. Las sesiones son distintas cada vez y se nota que le importa hacerlo bien.»', attribution: 'Reseña de Google · Frankfurt · traducida del alemán' },
    ],
    footnote:
      'Reseñas publicadas originalmente en alemán en Google para Aussie Ausdauer (Frankfurt). Traducidas y ligeramente adaptadas para mayor claridad. Texto original en alemán disponible bajo petición.',
  },
} as const;

export default function Testimonials({ lang = 'en' }: { lang?: Locale }) {
  const c = COPY[lang];
  return (
    <section className="section bg-warm-white">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            {c.heading}
          </h2>
          <p className="mt-5 prose-body max-w-prose">{c.intro}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.items.map((t) => (
            <figure key={t.outcome} className="card flex flex-col">
              <span
                aria-hidden
                className="font-heading text-5xl leading-none text-coastal-blue/30 select-none -mb-2"
              >
                &ldquo;
              </span>
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

        <p className="mt-6 text-xs text-muted-grey max-w-prose">{c.footnote}</p>
      </div>
    </section>
  );
}
