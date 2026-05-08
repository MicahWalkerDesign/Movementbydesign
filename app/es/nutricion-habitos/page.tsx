import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const PATH = '/es/nutricion-habitos/';

export const metadata: Metadata = buildMetadata({
  title: 'Hábitos de Nutrición y Coaching de Bienestar | Movement by Design',
  description:
    'Educación nutricional práctica y apoyo al cambio de comportamiento para energía, entrenamiento, composición corporal y constancia. Enfoque en hábitos, no en terapia médica nutricional.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/nutrition-habits/',
});

const focus = [
  {
    title: 'Energía y entrenamiento',
    text: 'Come de una forma que apoye tus sesiones, tu recuperación y tu energía diaria — no solo un número en la báscula.',
  },
  {
    title: 'Composición corporal',
    text: 'Enfoques realistas, lentos y sostenibles para perder grasa o ganar músculo — basados en hábitos que puedes mantener.',
  },
  {
    title: 'Constancia',
    text: 'Estrategias para viajes, semanas ocupadas, comidas sociales y vida familiar para que tus hábitos no se derrumben.',
  },
  {
    title: 'Educación',
    text: 'Aprende cómo las proteínas, carbohidratos, grasas, fibra, hidratación y estructura de comidas afectan de verdad cómo te sientes y rindes.',
  },
];

export default function NutricionHabitosPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Hábitos de Nutrición"
        title="Hábitos de Nutrición y Coaching de Bienestar"
        subtitle="Educación nutricional práctica y apoyo al cambio de comportamiento para energía, entrenamiento, composición corporal y constancia."
        body="Este servicio es educación nutricional y coaching de hábitos — no terapia médica nutricional. El foco está en hábitos alimentarios prácticos que apoyen el entrenamiento, la energía, el estado de ánimo y la salud a largo plazo."
        contactHref="/es/contacto/"
        primaryCta="Reserva una llamada gratuita"
        secondaryCta="Envía una consulta"
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">En qué nos centramos</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Hábitos alimentarios que encajan en la vida real
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {focus.map((f) => (
            <article key={f.title} className="card">
              <h3 className="font-heading font-semibold text-lg text-deep-navy">{f.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{f.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Enfoque</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Cambio de comportamiento, no dietas de choque
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              La mayoría de las dietas funcionan a corto plazo. La mayoría de las dietas también fracasan a largo plazo — porque están construidas sobre fuerza de voluntad, no sobre comportamiento. Nos centramos en hábitos que se acumulan: estructura de comidas sencilla, anclajes de proteína, porciones razonables y estrategias que puedes sostener en una semana difícil.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              'Estructura de comidas mediterránea práctica',
              'Proteína y fibra como anclajes de hábito',
              'Consciencia sobre hidratación y cafeína',
              'Comer en torno al entrenamiento y los viajes',
              'Estrategias para restaurantes, comidas familiares y eventos sociales',
              'Apoyo al sueño y la recuperación',
            ].map((s) => (
              <li
                key={s}
                className="bg-white border border-soft-border rounded-2xl p-5 text-charcoal/90"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="bg-sand border border-soft-border rounded-3xl p-8 md:p-10 max-w-3xl">
          <h2 className="font-heading font-semibold text-xl md:text-2xl text-deep-navy">
            Nota sobre el alcance del servicio
          </h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Este servicio ofrece educación nutricional y coaching de hábitos únicamente. No es tratamiento dietético, terapia médica nutricional ni intervención clínica. Para condiciones médicas como diabetes, trastornos alimentarios, enfermedad renal, síndrome del intestino irritable o nutrición específica durante el embarazo, recomiendo trabajar con un dietista-nutricionista colegiado o médico — el coaching de hábitos puede complementar ese trabajo cuando corresponda.
          </p>
        </div>
      </Section>

      <Section background="sand">
        <RelatedServices excludeHref={PATH} lang="es" />
      </Section>

      <Section background="warm-white">
        <p className="text-sm text-muted-grey leading-relaxed max-w-prose mb-10">{MEDICAL_DISCLAIMER_ES}</p>
        <CtaBlock lang="es" />
      </Section>

      <JsonLd data={serviceSchema('Hábitos de Nutrición y Coaching de Bienestar', 'Educación nutricional y coaching de hábitos para energía, entrenamiento, composición corporal y constancia.', PATH)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Inicio', path: '/es/' },
        { name: 'Nutrición y Hábitos', path: PATH },
      ])} />
    </>
  );
}
