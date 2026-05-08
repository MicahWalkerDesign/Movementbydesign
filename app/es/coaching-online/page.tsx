import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const PATH = '/es/coaching-online/';

export const metadata: Metadata = buildMetadata({
  title: 'Coaching Online de Salud y Rendimiento | Movement by Design',
  description:
    'Entrenamiento personal y coaching de salud a distancia: planes de entrenamiento, hábitos de nutrición, prevención de lesiones y bienestar a largo plazo. Coaching online en inglés y alemán para clientes en España y el resto del mundo.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/online-coaching/',
});

const includes = [
  { title: 'Plan de entrenamiento personalizado', text: 'Programación construida en torno a tus objetivos, agenda, equipamiento e historial — no una plantilla reciclada.' },
  { title: 'Modificaciones de movimiento', text: 'Ajustes inteligentes alrededor de lesiones antiguas, sensibilidad articular, fatiga y capacidad cambiante.' },
  { title: 'Coaching de hábitos', text: 'Apoyo centrado en el comportamiento para que entrenamiento, sueño, recuperación y nutrición de verdad se mantengan.' },
  { title: 'Educación nutricional', text: 'Hábitos prácticos de alimentación que apoyen el entrenamiento, la energía y la constancia. Educación, no terapia médica nutricional.' },
  { title: 'Seguimientos de progreso', text: 'Revisiones estructuradas regulares: qué funciona, qué te bloquea y qué ajustar a continuación.' },
  { title: 'Apoyo ante obstáculos', text: 'Coaching real para viajes, semanas ocupadas, paternidad, enfermedad, bajadas de motivación y problemas de adherencia.' },
];

export default function CoachingOnlinePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Online"
        title="Coaching Online de Salud y Rendimiento"
        subtitle="Coaching remoto estructurado para entrenamiento, hábitos de nutrición, prevención de lesiones y bienestar a largo plazo."
        body="Coaching online para personas que quieren apoyo experto desde casa: profesionales ocupados, expats en España, padres con vida llena o quienes vuelven a entrenar tras un parón."
        contactHref="/es/contacto/"
        primaryCta="Reserva una llamada gratuita"
        secondaryCta="Envía una consulta"
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Qué incluye</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Un sistema completo de coaching online
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {includes.map((i) => (
            <article key={i.title} className="card">
              <h3 className="font-heading font-semibold text-lg text-deep-navy">{i.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{i.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Cómo funciona</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Un proceso claro, sin adivinanzas
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              El coaching online no debería ser un PDF que descargas y olvidas. Cada cliente recibe un onboarding estructurado, un plan personalizado y revisiones continuas.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              'Llamada inicial gratuita para entender objetivos, historial y limitaciones',
              'Cuestionario de onboarding detallado y revisión de movimiento',
              'Plan de entrenamiento personalizado, foco de hábitos y cadencia de seguimientos',
              'Comunicación continua para preguntas, modificaciones y progreso',
              'Revisiones regulares para actualizar el plan a medida que cambias',
            ].map((step, idx) => (
              <li key={step} className="bg-white border border-soft-border rounded-2xl p-5 flex gap-4">
                <span className="font-heading text-coastal-blue font-semibold w-6 flex-none">{idx + 1}.</span>
                <span className="text-charcoal/90">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section background="sand">
        <RelatedServices excludeHref={PATH} lang="es" />
      </Section>

      <Section background="warm-white">
        <p className="text-sm text-muted-grey leading-relaxed max-w-prose mb-10">{MEDICAL_DISCLAIMER_ES}</p>
        <CtaBlock title="Pregunta por el coaching online" lang="es" />
      </Section>

      <JsonLd data={serviceSchema('Coaching Online de Salud y Rendimiento', 'Entrenamiento personal y coaching de salud a distancia: planes, modificaciones de movimiento, hábitos de nutrición y prevención de lesiones.', PATH)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Inicio', path: '/es/' },
        { name: 'Coaching Online', path: PATH },
      ])} />
    </>
  );
}
