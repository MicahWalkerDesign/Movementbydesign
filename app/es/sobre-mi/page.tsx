import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, breadcrumbSchema, personSchema } from '@/lib/seo';

const PATH = '/es/sobre-mi/';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre Movement by Design | Entrenador Personal con Ciencias del Ejercicio en Salou',
  description:
    'Movement by Design está liderado por Micah Walker — profesional en ciencias del ejercicio, coach de salud y entrenador personal con enfoque rehabilitador, con base entre España y Australia.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/about/',
});

const credentials = [
  'Grado en Ciencias del Ejercicio y el Deporte',
  'Certificate III & IV in Fitness',
  'Entrenador de Rehabilitación para Enfermedades Ortopédicas',
  'Functional Fitness para Entrenamiento Preventivo y Rehabilitador',
  'Experiencia en preparación física en rugby',
  'Experiencia en investigación clínica del ejercicio',
  'Experiencia en medicina deportiva',
  'Inglés nativo, alemán fluido, español en aprendizaje',
];

export default function SobreMiPage() {
  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-16 md:pb-20">
          <span className="eyebrow">Sobre mí</span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-deep-navy max-w-4xl leading-[1.1]">
            Sobre Movement by Design
          </h1>
          <p className="mt-5 text-xl md:text-2xl text-deep-navy/85 font-heading max-w-3xl">
            Una mejor salud empieza con mejores sistemas.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">La historia</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Hola, soy Micah.
            </h2>
            <span className="accent-line mt-5" aria-hidden />
          </div>
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <p>Movement by Design nació de una idea simple: una mejor salud empieza con mejores sistemas.</p>
            <p>Mi trabajo siempre ha estado orientado a objetivos: ayudar a las personas a prevenir lesiones, recuperarse de contratiempos, mejorar el rendimiento y construir hábitos más saludables. Me centro en la intersección entre movimiento, cambio de comportamiento y educación práctica.</p>
            <p>Vengo originalmente del mundo de las ciencias del ejercicio, el coaching y el rendimiento, donde los resultados dependen de mucho más que “buenos consejos”: dependen de la adherencia, la motivación, la confianza, la educación, la formación de hábitos y el diseño de sistemas alrededor de la vida real.</p>
            <p>Con el tiempo apliqué ese mismo pensamiento al entrenamiento personal, el coaching en grupo, la investigación clínica del ejercicio, la salud laboral, la medicina deportiva, las herramientas de salud digital y la educación del movimiento.</p>
            <p>Hoy ayudo a personas en Salou, Cambrils, Tarragona y online a entrenar de forma más inteligente, moverse mejor y construir hábitos que de verdad pueden mantener.</p>
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Formación</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Credenciales y experiencia
            </h2>
          </div>
          <ul className="md:col-span-3 grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c} className="bg-white border border-soft-border rounded-2xl p-5 flex gap-3">
                <span aria-hidden className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                <span className="text-charcoal/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Filosofía</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Muévete mejor. Hazte más fuerte. Construye hábitos más sanos.
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Entrena con seguridad. Muévete con confianza. Construye un cuerpo que sostiene tu vida. El trabajo no consiste en perseguir entrenamientos castigadores: consiste en diseñar el entrenamiento alrededor de la persona, para que sea sostenible, inteligente y útil de verdad.
            </p>
            <Link href="/es/contacto/" className="btn-primary mt-7">
              Reserva una llamada gratuita
            </Link>
          </div>
          <div className="bg-sand border border-soft-border rounded-3xl p-8 md:p-10">
            <h3 className="font-heading font-semibold text-deep-navy text-xl">Idiomas y ubicaciones</h3>
            <p className="mt-4 text-charcoal/85 leading-relaxed">Inglés (nativo) · Alemán (fluido) · Español (en aprendizaje).</p>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              Con base en Salou, Tarragona. Atendemos Salou, Cambrils, Tarragona, La Pineda, Vila-seca, Reus y la Costa Daurada en general — con coaching online disponible internacionalmente.
            </p>
          </div>
        </div>
      </Section>

      <Section background="sand">
        <CtaBlock lang="es" />
      </Section>

      <JsonLd data={personSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Inicio', path: '/es/' },
        { name: 'Sobre mí', path: PATH },
      ])} />
    </>
  );
}
