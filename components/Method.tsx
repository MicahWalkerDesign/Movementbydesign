import type { Locale } from '@/lib/routes';

const STEPS = {
  en: {
    eyebrow: 'The method',
    heading: 'The Movement by Design method',
    intro:
      'A clear, four-stage system built on exercise science and rehab-informed principles — designed to make progress feel structured, not random.',
    steps: [
      { n: '01', title: 'Assess', text: 'Goals, history, movement, capacity, lifestyle. We map where you actually are — not where a generic plan assumes you are.' },
      { n: '02', title: 'Design', text: 'A plan built around your body and your real week — strength, mobility, conditioning and recovery balanced for you.' },
      { n: '03', title: 'Coach', text: 'Technique, confidence, progression and education in every session — so you understand why each piece is there.' },
      { n: '04', title: 'Adapt', text: 'Track what works, adjust what doesn’t, and build long-term consistency around the inevitable changes in life.' },
    ],
  },
  es: {
    eyebrow: 'El método',
    heading: 'El método Movement by Design',
    intro:
      'Un sistema claro de cuatro fases basado en ciencias del ejercicio y principios orientados a la rehabilitación, diseñado para que el progreso sea estructurado, no aleatorio.',
    steps: [
      { n: '01', title: 'Valorar', text: 'Objetivos, historial, movimiento, capacidad y estilo de vida. Identificamos dónde estás realmente, no dónde un plan genérico asume que estás.' },
      { n: '02', title: 'Diseñar', text: 'Un plan adaptado a tu cuerpo y a tu semana real: fuerza, movilidad, acondicionamiento y recuperación equilibrados para ti.' },
      { n: '03', title: 'Entrenar', text: 'Técnica, confianza, progresión y educación en cada sesión, para que entiendas por qué hacemos lo que hacemos.' },
      { n: '04', title: 'Adaptar', text: 'Medir lo que funciona, ajustar lo que no, y construir una constancia que aguante los cambios reales de la vida.' },
    ],
  },
} as const;

export default function Method({ lang = 'en' }: { lang?: Locale }) {
  const m = STEPS[lang];
  return (
    <section className="section bg-warm-white">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="eyebrow">{m.eyebrow}</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            {m.heading}
          </h2>
          <p className="mt-5 prose-body max-w-prose">{m.intro}</p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-4">
          {m.steps.map((s, i) => (
            <li
              key={s.title}
              className="relative bg-white border border-soft-border rounded-2xl p-6 md:p-7 shadow-soft"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-heading text-3xl font-semibold text-coastal-blue">
                  {s.n}
                </span>
                {i < m.steps.length - 1 && (
                  <span aria-hidden className="hidden md:block text-terracotta text-xl">→</span>
                )}
              </div>
              <h3 className="mt-4 font-heading font-semibold text-xl text-deep-navy">{s.title}</h3>
              <p className="mt-2 text-charcoal/85 leading-relaxed text-[0.95rem]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
