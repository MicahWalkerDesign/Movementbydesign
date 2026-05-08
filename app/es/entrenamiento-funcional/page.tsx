import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const PATH = '/es/entrenamiento-funcional/';

export const metadata: Metadata = buildMetadata({
  title: 'Entrenamiento Funcional en Salou | Fuerza, Movilidad y Fitness Real',
  description:
    'Entrenamiento funcional en Salou y la Costa Daurada. Fuerza, movilidad, acondicionamiento y coaching de movimiento para personas que quieren entrenar de forma más inteligente.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/functional-training/',
});

const pillars = [
  {
    title: 'Fuerza',
    text: 'Construye una base de fuerza utilizable: bisagra, sentadilla, empuje, tirón, carga — los patrones que la vida y el deporte exigen.',
  },
  {
    title: 'Movilidad',
    text: 'Rango activo y control articular para que puedas moverte libremente sin rigidez ni compensaciones.',
  },
  {
    title: 'Acondicionamiento',
    text: 'Trabajo aeróbico y de energía mixta que apoya la recuperación, la energía diaria y el rendimiento — sin destrozarte.',
  },
  {
    title: 'Habilidad de movimiento',
    text: 'Coordinación, equilibrio, agilidad y control. Entrena tu sistema nervioso, no solo tus músculos.',
  },
];

export default function EntrenamientoFuncionalPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Entrenamiento Funcional"
        title="Entrenamiento Funcional en Salou"
        subtitle="Fuerza, movilidad, acondicionamiento y coaching de movimiento para personas que quieren entrenar de forma más inteligente."
        body="Entrenamiento funcional al aire libre y en interiores en Salou, Cambrils y Tarragona — diseñado en torno a tu cuerpo, tus objetivos y las cosas que de verdad quieres hacer en la vida real."
        contactHref="/es/contacto/"
        primaryCta="Reserva una llamada gratuita"
        secondaryCta="Envía una consulta"
      />

      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">Cuatro pilares</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Entrena las cualidades que importan
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            El entrenamiento funcional no es una etiqueta de marketing. Es una forma de construir cualidades físicas que se transfieren: fuerza que puedes usar, movilidad que puedes mantener, acondicionamiento que apoya tu vida y habilidad de movimiento que protege tus articulaciones a lo largo del tiempo.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
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
            <span className="eyebrow">Dónde y cómo</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Sesiones al aire libre e interiores en la Costa Daurada
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              La Costa Daurada es uno de los mejores lugares de Europa para entrenar. Largas playas, paseos marítimos, parques y espacios exteriores tranquilos nos permiten entrenar de forma segura e inteligente durante todo el año. También podemos usar estudios privados o tu hogar, según tus objetivos.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              'Sesiones de fuerza y acondicionamiento al aire libre',
              'Acondicionamiento en playa y paseo marítimo',
              'Sesiones de movilidad y calidad de movimiento',
              'Entrenamiento funcional en grupo reducido',
              'Sesiones en estudio privado cuando corresponda',
              'Programación que puedes llevar a tu propio gimnasio',
            ].map((i) => (
              <li
                key={i}
                className="bg-white border border-soft-border rounded-2xl p-5 text-charcoal/90"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="warm-white">
        <RelatedServices excludeHref={PATH} lang="es" />
      </Section>

      <Section background="sand">
        <p className="text-sm text-muted-grey leading-relaxed max-w-prose mb-10">{MEDICAL_DISCLAIMER_ES}</p>
        <CtaBlock lang="es" />
      </Section>

      <JsonLd data={serviceSchema('Entrenamiento Funcional en Salou', 'Fuerza, movilidad, acondicionamiento y coaching de movimiento en Salou, Cambrils y Tarragona.', PATH)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Inicio', path: '/es/' },
        { name: 'Entrenamiento Funcional', path: PATH },
      ])} />
    </>
  );
}
