import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const PATH = '/es/prevencion-lesiones/';

export const metadata: Metadata = buildMetadata({
  title: 'Prevención de Lesiones y Entrenamiento Rehabilitador | Movement by Design',
  description:
    'Entrenamiento seguro, progresivo y basado en ciencias del ejercicio para personas que vuelven de una lesión, gestionan limitaciones antiguas o quieren moverse con más confianza.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/injury-prevention/',
});

const principles = [
  {
    title: 'Respetar el historial',
    text: 'Cada plan empieza con un análisis cuidadoso de tu historial de lesiones, operaciones, patrones de recaída y qué te hace sentir mejor o peor.',
  },
  {
    title: 'Construir capacidad',
    text: 'Los tejidos, las articulaciones y la confianza mejoran cuando los cargas de forma progresiva e inteligente — no cuando los evitas.',
  },
  {
    title: 'Gestionar la carga',
    text: 'Volumen, intensidad y frecuencia se gestionan deliberadamente para que no rebotes entre recaídas y pérdida de forma.',
  },
  {
    title: 'Entrenar el sistema',
    text: 'Fuerza, movilidad, control, respiración y ritmo importan — no solo la articulación sintomática.',
  },
];

const supports = [
  'Limitaciones antiguas de espalda, rodilla, hombro, cadera o tobillo',
  'Vuelta al entrenamiento tras cirugía (con autorización de tu equipo médico)',
  'Vuelta al entrenamiento tras enfermedad o inactividad prolongada',
  'Molestias recurrentes que no consigues quitarte de encima',
  'Adultos activos que quieren seguir entrenando sin romperse',
  'Deportistas que buscan trabajo de prevención estructurado junto a su deporte',
];

export default function PrevencionLesionesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Prevención de Lesiones"
        title="Prevención de Lesiones y Entrenamiento Rehabilitador"
        subtitle="Entrenamiento seguro y progresivo para personas que vuelven de una lesión, gestionan limitaciones antiguas o quieren moverse con más confianza."
        body="El coaching de ejercicio rehabilitador no es fisioterapia ni tratamiento médico. Es entrenamiento que respeta tu historial y construye capacidad — idealmente junto a tu equipo médico o de salud aliada cuando corresponde."
        contactHref="/es/contacto/"
        primaryCta="Reserva una llamada gratuita"
        secondaryCta="Envía una consulta"
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Principios</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Entrena con inteligencia. Hazte más fuerte. Mantente duradero.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <article key={p.title} className="card">
              <h3 className="font-heading font-semibold text-lg text-deep-navy">{p.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">A quién apoyo</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Diseñado para cuerpos reales
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              La mayoría de los planes de entrenamiento generales ignoran el historial de lesiones o lo tratan como una limitación permanente. Un enfoque rehabilitador no hace ninguna de las dos cosas: se adapta y progresa.
            </p>
          </div>
          <ul className="grid gap-3">
            {supports.map((s) => (
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
            Movement by Design ofrece entrenamiento basado en ciencias del ejercicio con enfoque rehabilitador. No sustituye a la fisioterapia, la atención médica ni la rehabilitación clínica. Para lesiones activas, fases posquirúrgicas o dolor sin diagnosticar, recomiendo trabajar junto a tu médico, fisioterapeuta o especialista — y estoy disponible para coordinar con ellos cuando sea útil.
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

      <JsonLd data={serviceSchema('Prevención de Lesiones y Entrenamiento Rehabilitador', 'Coaching de ejercicio seguro y progresivo para personas que vuelven de lesiones, gestionan limitaciones o quieren seguir entrenando sin romperse.', PATH)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Inicio', path: '/es/' },
        { name: 'Prevención de Lesiones', path: PATH },
      ])} />
    </>
  );
}
