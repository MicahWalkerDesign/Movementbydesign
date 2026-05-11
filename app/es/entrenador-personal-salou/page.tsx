import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import Pricing from '@/components/Pricing';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const PATH = '/es/entrenador-personal-salou/';

export const metadata: Metadata = buildMetadata({
  title: 'Entrenador Personal Salou | Coaching Premium Basado en Ciencias del Ejercicio | Movement by Design',
  description:
    'Entrenador personal Salou para entrenamiento 1:1 premium de fuerza, salud, calidad de movimiento y confianza. Coaching basado en ciencias del ejercicio.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/personal-training-salou/',
});

export default function EntrenadorPersonalSalouPage() {
  const benefits = [
    { title: 'Programación personalizada', text: 'Cada plan se construye en torno a tu historial de entrenamiento, contexto médico, agenda real y los objetivos que de verdad te importan.' },
    { title: 'Calidad de movimiento primero', text: 'La técnica, el control y la alfabetización del movimiento van antes que la carga, para que el progreso sea sostenible y las articulaciones se mantengan sanas.' },
    { title: 'Fuerza que se traduce', text: 'Construye un cuerpo capaz en el gym, en el sendero, con tus hijos y de vacaciones — no solo frente al espejo.' },
    { title: 'Seguimiento honesto', text: 'Hitos claros, revisiones regulares y ajustes para que siempre sepas qué está funcionando y cuál es el siguiente paso.' },
  ];
  const ideal = [
    'Clientes en Salou, Cambrils y Tarragona que buscan apoyo premium',
    'Expats angloparlantes y residentes germanoparlantes en la Costa Daurada',
    'Profesionales y padres ocupados que necesitan sesiones eficientes y bien diseñadas',
    'Personas que vuelven a entrenar tras un parón',
    'Clientes con lesiones antiguas que quieren entrenar con seguridad y sin recaídas',
    'Adultos activos que buscan rendimiento sin romperse',
  ];

  const localDetails = [
    {
      title: 'Entrenamiento en Salou',
      text: 'Coaching 1:1 para personas que buscan un entrenador personal en Salou con estructura, progresión y atención real a su historial.',
    },
    {
      title: 'A domicilio, al aire libre o en espacios adecuados',
      text: 'Las sesiones pueden organizarse al aire libre, a domicilio o en espacios de entrenamiento adecuados según tus objetivos, material disponible y ubicación.',
    },
    {
      title: 'Zona Costa Daurada',
      text: 'Trabajo con clientes en Salou, Cambrils, La Pineda, Vila-seca, Tarragona, Reus y otras zonas cercanas de la Costa Daurada.',
    },
  ];

  const faqs = [
    {
      q: '¿Cuánto cuesta un entrenador personal en Salou?',
      a: 'El entrenamiento personal 1:1 cuesta €90 por hora. El entrenamiento en grupo reducido cuesta €15–30 por persona y hora, según el tamaño del grupo. La frecuencia y los paquetes se confirman en la llamada inicial gratuita.',
    },
    {
      q: '¿Ofreces entrenamiento personal a domicilio en Salou?',
      a: 'Sí, el entrenamiento a domicilio en Salou puede organizarse cuando el espacio, el material y los objetivos lo permiten. También son posibles sesiones al aire libre o en espacios de entrenamiento adecuados.',
    },
    {
      q: '¿Puedo entrenar en inglés o alemán?',
      a: 'Sí. El inglés es mi lengua materna y hablo alemán con fluidez. También puedo usar indicaciones simples en español mientras sigo mejorando mi español.',
    },
    {
      q: '¿Es adecuado si tengo una lesión antigua o dolor?',
      a: 'En muchos casos, sí. El coaching tiene un enfoque orientado a la rehabilitación y se adapta a tu historial, capacidad y confianza. No sustituye diagnóstico médico ni fisioterapia cuando hacen falta.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Salou"
        title="Entrenador Personal Salou"
        subtitle="Entrenador personal en Salou para fuerza, salud, calidad de movimiento y confianza a largo plazo."
        body="Coaching 1:1 en Salou y la Costa Daurada — Cambrils, Tarragona, La Pineda, Vila-seca y Reus. Las sesiones pueden hacerse al aire libre, en espacios de entrenamiento adecuados o a domicilio cuando es apropiado."
        photoSrc="/images/training-corrective.jpg"
        photoAlt="Entrenamiento personal en Salou — sesión de remo unilateral en la Costa Daurada"
        photoLabel="Sesión en Salou"
        contactHref="/es/contacto/"
        primaryCta="Reserva una llamada gratuita"
        secondaryCta="Envía una consulta"
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Lo que recibes</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Una experiencia 1:1 premium
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Entrenamiento personal en Salou y la Costa Daurada — construido sobre ciencias del ejercicio, tu historial médico y los objetivos que de verdad importan.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <article key={b.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy">{b.title}</h3>
                <p className="mt-3 text-charcoal/85 leading-relaxed">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Para quién es</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Ideal para clientes exigentes
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Si buscas un entrenador personal en Salou que trate tu entrenamiento como un proyecto a largo plazo y no como un truco rápido, este servicio está hecho para ti.
            </p>
          </div>
          <ul className="grid gap-3">
            {ideal.map((i) => (
              <li key={i} className="bg-white border border-soft-border rounded-2xl p-5 text-charcoal/90">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <span className="eyebrow">Cómo funciona</span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              De la primera llamada al progreso continuo
            </h2>
            <ol className="space-y-5 mt-4">
              <li><strong className="font-heading text-deep-navy">1. Llamada inicial gratuita.</strong> Una conversación corta sobre objetivos, historial y limitaciones — y si soy el encaje adecuado.</li>
              <li><strong className="font-heading text-deep-navy">2. Valoración de movimiento y objetivos.</strong> Una evaluación estructurada que cubre historial de entrenamiento, lesiones, estilo de vida, preferencias y qué significa éxito para ti.</li>
              <li><strong className="font-heading text-deep-navy">3. Plan personalizado.</strong> Un plan de coaching diseñado en torno a tu cuerpo y tu semana — no una plantilla genérica.</li>
              <li><strong className="font-heading text-deep-navy">4. Sesiones y progresión.</strong> Coaching 1:1 con trabajo técnico claro, progresión estructurada y ajustes continuos.</li>
              <li><strong className="font-heading text-deep-navy">5. Revisiones y hábitos.</strong> Revisiones regulares para mantener el plan honesto, más apoyo práctico de hábitos y educación fuera del gym.</li>
            </ol>
          </div>
          <aside className="md:col-span-2 bg-sand rounded-3xl p-8 border border-soft-border">
            <h3 className="font-heading font-semibold text-deep-navy">Idiomas</h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              Entrenador personal angloparlante en Salou. Entrenador germanoparlante en Salou. Español en aprendizaje — encantado de dar pautas simples en español, con inglés o alemán para explicaciones detalladas.
            </p>
            <h3 className="mt-7 font-heading font-semibold text-deep-navy">Zona de servicio</h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              Salou, Cambrils, Tarragona, La Pineda, Vila-seca, Reus y la Costa Daurada. Coaching online disponible en todo el mundo.
            </p>
            <Link href="/es/contacto/" className="btn-primary mt-7 w-full">
              Reserva una llamada gratuita
            </Link>
          </aside>
        </div>
      </Section>

      <Pricing
        background="sand"
        eyebrow="Tarifas"
        heading="Tarifas por sesión"
        intro="Precios claros y simples. Bonos prepagados y paquetes pueden organizarse en la llamada inicial cuando sepamos qué cadencia te conviene."
        lang="es"
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Entrenamiento local</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Entrenamiento personal pensado para Salou
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Esta página está pensada para quien busca entrenador personal Salou con un
              enfoque serio, medible y adaptado a la vida real — no una rutina genérica.
            </p>
          </div>
          <div className="md:col-span-3 grid gap-5">
            {localDetails.map((item) => (
              <article key={item.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-charcoal/85 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Preguntas</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Preguntas sobre entrenador personal en Salou
          </h2>
        </div>
        <FAQ items={faqs} />
      </Section>

      <Section background="warm-white">
        <RelatedServices excludeHref={PATH} lang="es" />
      </Section>

      <Section background="sand">
        <p className="text-sm text-muted-grey leading-relaxed max-w-prose mb-10">{MEDICAL_DISCLAIMER_ES}</p>
        <CtaBlock lang="es" />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Entrenador Personal Salou',
          'Entrenamiento personal 1:1 premium en Salou y la Costa Daurada con base en ciencias del ejercicio.',
          PATH,
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/es/' },
          { name: 'Entrenador Personal Salou', path: PATH },
        ])}
      />
    </>
  );
}
