import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const PATH = '/es/poblaciones-especiales/';

export const metadata: Metadata = buildMetadata({
  title: 'Ejercicio para Poblaciones Especiales | Movement by Design',
  description:
    'Coaching de ejercicio personalizado para embarazo, posparto, recuperación oncológica, diabetes, personas mayores, limitaciones ortopédicas y neurológicas, y niños con necesidades especiales — adaptado a tu cuerpo y contexto médico.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/special-populations-exercise/',
});

const populations = [
  {
    title: 'Embarazo y posparto',
    text: 'Ejercicio seguro y progresivo durante el embarazo y una vuelta estructurada al entrenamiento en el posparto — adaptado a cómo te sientes, tu guía médica y tus objetivos.',
  },
  {
    title: 'Recuperación oncológica',
    text: 'Coaching de ejercicio de apoyo durante y después del tratamiento oncológico para recuperar fuerza, energía y confianza. Coordinado con tu equipo médico cuando sea apropiado.',
  },
  {
    title: 'Diabetes y salud metabólica',
    text: 'Coaching de ejercicio que apoya los objetivos de salud metabólica, la energía y la constancia — junto a la orientación de tu médico o especialista.',
  },
  {
    title: 'Personas mayores',
    text: 'Coaching de fuerza, equilibrio y movilidad para mantenerte confiado, independiente y capaz a largo plazo.',
  },
  {
    title: 'Limitaciones ortopédicas',
    text: 'Entrenamiento adaptado a historiales de cadera, rodilla, espalda, hombro u otras patologías ortopédicas — construyendo capacidad de forma progresiva e inteligente.',
  },
  {
    title: 'Limitaciones neurológicas',
    text: 'Coaching de ejercicio adaptado para personas que gestionan síntomas neurológicos o limitaciones de movimiento, con foco en seguridad, confianza y capacidad.',
  },
  {
    title: 'Niños y jóvenes con necesidades especiales',
    text: 'Coaching de movimiento centrado en la confianza, el disfrute, la seguridad y la construcción de una relación positiva con el cuerpo — dentro del alcance del servicio y junto a su equipo de apoyo.',
  },
  {
    title: 'Fatiga crónica y desacondicionamiento',
    text: 'Entrenamiento cuidadosamente dosificado que respeta los presupuestos de energía, construye tolerancia de forma gradual y evita los ciclos de auge y caída.',
  },
  {
    title: 'Vuelta al entrenamiento',
    text: 'Reincorporación estructurada tras inactividad prolongada, enfermedad, cirugía (con autorización de tu equipo médico) o agotamiento.',
  },
];

export default function PoblacionesEspecialesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Poblaciones Especiales"
        title="Ejercicio para Poblaciones Especiales"
        subtitle="Coaching de ejercicio personalizado para personas con consideraciones de salud más complejas, adaptado a tu cuerpo, objetivos y contexto médico."
        body="Cada persona es diferente. Cada historial es diferente. El trabajo de un coach en este ámbito es escuchar con atención, respetar el contexto médico y diseñar el entrenamiento que te encuentre exactamente donde estás — y luego progresar desde ahí."
        contactHref="/es/contacto/"
        primaryCta="Reserva una llamada gratuita"
        secondaryCta="Envía una consulta"
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Para quién es</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Coaching adaptado a contextos complejos
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            "Poblaciones especiales" simplemente significa personas cuyas necesidades de entrenamiento requieren más consideración de lo que un plan genérico puede ofrecer — a menudo por razones excelentes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {populations.map((p) => (
            <article key={p.title} className="card">
              <h3 className="font-heading font-semibold text-lg text-deep-navy">{p.title}</h3>
              <p className="mt-3 text-charcoal/85 leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Mi enfoque</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Seguro, de apoyo, estructurado
            </h2>
          </div>
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <p>
              Me tomo el tiempo necesario para entender tu historial médico, tu capacidad actual y la orientación que has recibido de profesionales médicos o de salud aliada. Cuando es útil, estoy disponible para coordinar con tu médico, fisioterapeuta, oncólogo o equipo especialista.
            </p>
            <p>
              A partir de ahí, el entrenamiento se construye en torno a lo que tu cuerpo puede manejar hoy — con progresión clara, gestión cuidadosa de la carga y comunicación continua. El objetivo es que el ejercicio se sienta seguro, realizable y genuinamente útil.
            </p>
          </div>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="bg-sand border border-soft-border rounded-3xl p-8 md:p-10 max-w-3xl">
          <h2 className="font-heading font-semibold text-xl md:text-2xl text-deep-navy">
            Nota importante sobre el alcance del servicio
          </h2>
          <p className="mt-4 text-charcoal/85 leading-relaxed">
            Movement by Design ofrece coaching de ejercicio basado en ciencias del deporte, entrenamiento personal, educación en salud y apoyo de ejercicio con enfoque rehabilitador. No ofrece diagnóstico médico, tratamiento, fisioterapia, dietética ni atención clínica especializada. Para embarazo, oncología, diabetes, condiciones neurológicas, recuperación posquirúrgica o cualquier condición médica activa, el coaching de ejercicio se desarrolla junto a la orientación médica o de salud aliada cuando corresponde.
          </p>
        </div>
      </Section>

      <Section background="sand">
        <RelatedServices excludeHref={PATH} lang="es" />
      </Section>

      <Section background="warm-white">
        <p className="text-sm text-muted-grey leading-relaxed max-w-prose mb-10">{MEDICAL_DISCLAIMER_ES}</p>
        <CtaBlock title="Pregunta si el coaching para poblaciones especiales es adecuado para ti" lang="es" />
      </Section>

      <JsonLd data={serviceSchema('Ejercicio para Poblaciones Especiales', 'Coaching de ejercicio personalizado para embarazo, posparto, recuperación oncológica, diabetes, personas mayores, limitaciones ortopédicas y neurológicas.', PATH)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Inicio', path: '/es/' },
        { name: 'Poblaciones Especiales', path: PATH },
      ])} />
    </>
  );
}
