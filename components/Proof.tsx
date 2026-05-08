import type { Locale } from '@/lib/routes';

const COPY = {
  en: {
    eyebrow: 'Why trust this approach',
    heading: 'A coach with the background to back it up',
    intro:
      'Premium coaching is more than presence in the room. It’s the depth of education, experience and judgement behind every decision in your plan.',
    items: [
      { title: 'Exercise & Sports Science background', text: 'University-trained in how the body actually adapts to load — anatomy, physiology, biomechanics and behaviour change.' },
      { title: 'Clinical exercise research experience', text: 'Time spent inside structured research environments designing and measuring exercise interventions for real outcomes.' },
      { title: 'Sports medicine & medtech experience', text: 'Worked alongside clinicians and digital health teams — comfortable with medical context, terminology and scope.' },
      { title: 'Coaching since 2014', text: 'Long-term experience across personal training, group coaching, sports performance and workplace health.' },
      { title: 'Multilingual', text: 'English (native), German (fluent), Spanish (learning) — coaching that works for international clients on the Costa Daurada.' },
      { title: 'Built for complex goals', text: 'Comfortable with injury history, health considerations and busy lives — the variables most generic plans ignore.' },
    ],
  },
  es: {
    eyebrow: 'Por qué confiar en este enfoque',
    heading: 'Un entrenador con la formación que lo respalda',
    intro:
      'El coaching premium es mucho más que presencia en la sala: es la profundidad de formación, experiencia y criterio detrás de cada decisión de tu plan.',
    items: [
      { title: 'Formación en Ciencias del Ejercicio y el Deporte', text: 'Formación universitaria sobre cómo se adapta el cuerpo a la carga: anatomía, fisiología, biomecánica y cambio de comportamiento.' },
      { title: 'Experiencia en investigación clínica del ejercicio', text: 'Tiempo dentro de entornos de investigación estructurados diseñando y midiendo intervenciones con resultados reales.' },
      { title: 'Experiencia en medicina deportiva y medtech', text: 'Trabajo junto a profesionales clínicos y equipos de salud digital: cómodo con el contexto médico, la terminología y el alcance profesional.' },
      { title: 'Entrenando desde 2014', text: 'Experiencia continuada en entrenamiento personal, coaching en grupo, rendimiento deportivo y salud laboral.' },
      { title: 'Multilingüe', text: 'Inglés (nativo), alemán (fluido), español (en aprendizaje): un coaching que funciona para clientes internacionales en la Costa Daurada.' },
      { title: 'Construido para objetivos complejos', text: 'Cómodo con historial de lesiones, consideraciones de salud y vidas ocupadas: las variables que los planes genéricos suelen ignorar.' },
    ],
  },
} as const;

export default function Proof({ lang = 'en' }: { lang?: Locale }) {
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

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.items.map((it) => (
            <li key={it.title} className="bg-white border border-soft-border rounded-2xl p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-deep-navy">{it.title}</h3>
              <p className="mt-2 text-charcoal/85 leading-relaxed text-[0.95rem]">{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
