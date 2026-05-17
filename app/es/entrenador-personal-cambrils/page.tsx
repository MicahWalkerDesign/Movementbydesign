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

const PATH = '/es/entrenador-personal-cambrils/';

export const metadata: Metadata = buildMetadata({
  title: 'Entrenador Personal Cambrils | Movement by Design',
  description:
    'Entrenador personal en Cambrils con enfoque rehabilitador y base en ciencias del ejercicio. Coaching 1:1 para fuerza, salud y calidad de movimiento en Cambrils, Salou y la Costa Daurada.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/personal-trainer-cambrils/',
});

export default function EntrenadorPersonalCambrilsPage() {
  const benefits = [
    {
      title: 'Coaching basado en ciencias del ejercicio',
      text: 'La programación se apoya en literatura de ciencias del ejercicio, principios de rehabilitación y una década de práctica — no en plantillas de moda.',
    },
    {
      title: 'Adaptado a la vida en Cambrils',
      text: 'Las sesiones se organizan en torno a la familia, las mañanas en el puerto y el ritmo real de un pueblo costero — temprano, tarde o cuando encaje.',
    },
    {
      title: 'Calidad de movimiento primero',
      text: 'La carga se gana. Técnica, control y salud articular van antes que perseguir kilos o cifras.',
    },
    {
      title: 'Seguimiento honesto',
      text: 'Hitos claros, revisiones regulares y ajustes para que siempre sepas qué está funcionando y cuál es el siguiente paso.',
    },
  ];

  const ideal = [
    'Residentes y expats angloparlantes en Cambrils, Vilafortuny y Miami Platja',
    'Visitantes y residentes germanoparlantes en la Costa Daurada',
    'Profesionales y padres ocupados que necesitan sesiones eficientes',
    'Personas que vuelven a entrenar tras un parón, cirugía o embarazo',
    'Adultos activos que quieren mantenerse fuertes sin recaídas',
    'Clientes actuales de Salou que prefieren entrenar cerca de Cambrils',
  ];

  const localDetails = [
    {
      title: 'Puerto y paseo marítimo de Cambrils',
      text: 'El paseo entre el puerto de Cambrils y Salou es uno de los mejores corredores al aire libre de la Costa Daurada — llano, bien iluminado y tranquilo fuera de la temporada alta.',
    },
    {
      title: 'Playa y rutas de carrera',
      text: 'Sesiones en arena blanda en la Platja del Cavet o la Platja de la Llosa, además de progresiones de carrera estructuradas por el carril bici de la costa entre Cambrils y Salou.',
    },
    {
      title: 'A cinco minutos de Salou',
      text: 'Cambrils está a un trayecto corto en coche de Salou. Quienes ya entrenan en Salou pueden mantener su cadencia; quienes viven en Cambrils pueden entrenar sin desplazarse.',
    },
    {
      title: 'También Tarragona y Reus',
      text: 'Trabajo con clientes en Tarragona, Reus, La Pineda y Vila-seca. Desplazamientos más allá de la Costa Daurada pueden presupuestarse aparte.',
    },
  ];

  const faqs = [
    {
      q: '¿Cuánto cuesta un entrenador personal en Cambrils?',
      a: 'El entrenamiento personal 1:1 cuesta €90 por hora. El entrenamiento en grupo reducido cuesta €15–30 por persona y hora según el tamaño del grupo. Los bonos prepagados y paquetes se concretan en la llamada inicial gratuita.',
    },
    {
      q: '¿Dónde se realizan las sesiones en Cambrils?',
      a: 'Las sesiones pueden hacerse al aire libre en el puerto de Cambrils, en el paseo marítimo o la playa, a domicilio cuando el espacio y el material lo permiten, o en un espacio de entrenamiento adecuado — siempre elegido en función de tus objetivos.',
    },
    {
      q: '¿Puedo entrenar en inglés o alemán?',
      a: 'Sí. El inglés es mi lengua materna y hablo alemán con fluidez. Mi español está en aprendizaje — uso pautas simples en español y cambio al inglés o al alemán para explicaciones detalladas.',
    },
    {
      q: '¿Trabajas entre Cambrils y Salou?',
      a: 'Sí. Cambrils y Salou están a unos cinco minutos y trabajo en ambas. La Pineda, Vila-seca, Tarragona y Reus también forman parte de la zona de servicio habitual.',
    },
    {
      q: '¿Puedes ayudarme si tengo una lesión antigua o dolor?',
      a: 'En muchos casos, sí. El coaching tiene un enfoque orientado a la rehabilitación y se adapta a tu historial, capacidad y confianza. No sustituye diagnóstico médico ni fisioterapia cuando hacen falta.',
    },
    {
      q: '¿Se puede entrenar al aire libre todo el año en Cambrils?',
      a: 'El clima de la Costa Daurada permite entrenar al aire libre la mayor parte del año. En caso de mal tiempo movemos la sesión a un espacio cubierto o pasamos a interior.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Cambrils"
        title="Entrenador personal en Cambrils"
        subtitle="Coaching basado en ciencias del ejercicio para Cambrils, Salou y la Costa Daurada."
        body="Entrenamiento personal 1:1 en Cambrils para fuerza, salud, calidad de movimiento y confianza. Sesiones al aire libre en el puerto y el paseo, a domicilio o en espacios de entrenamiento adecuados — diseñadas en torno a tus objetivos y tu semana."
        photoSrc="/images/training-corrective.jpg"
        photoAlt="Entrenador personal en Cambrils dirigiendo una sesión de fuerza en la Costa Daurada"
        photoLabel="Sesión en Cambrils"
        contactHref="/es/contacto/"
        primaryCta="Reserva una llamada gratuita"
        secondaryCta="Envía una consulta"
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Lo que recibes</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Una experiencia 1:1 premium en Cambrils
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Entrenamiento personal en Cambrils construido sobre ciencias del ejercicio, tu
              historial médico y los objetivos que de verdad importan — no una rutina genérica.
            </p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <article key={b.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">{b.title}</h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Para quién es</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Clientes de Cambrils que quieren un plan real
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Si buscas un entrenador personal en Cambrils que trate tu entrenamiento como un
              proyecto a largo plazo y no como un truco rápido, este servicio está hecho para ti.
            </p>
          </div>
          <ul className="grid gap-3">
            {ideal.map((i) => (
              <li key={i} className="bg-white dark:bg-slate-800 border border-soft-border dark:border-slate-700 rounded-2xl p-5 text-charcoal/90 dark:text-slate-300">
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
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              De la primera llamada al progreso continuo
            </h2>
            <ol className="space-y-5 mt-4">
              <li><strong className="font-heading text-deep-navy dark:text-slate-100">1. Llamada inicial gratuita.</strong> Una conversación corta sobre objetivos, historial y limitaciones — y si soy el encaje adecuado.</li>
              <li><strong className="font-heading text-deep-navy dark:text-slate-100">2. Valoración de movimiento y objetivos.</strong> Una evaluación estructurada que cubre historial de entrenamiento, lesiones, estilo de vida y qué significa éxito para ti.</li>
              <li><strong className="font-heading text-deep-navy dark:text-slate-100">3. Plan personalizado.</strong> Un plan diseñado en torno a tu cuerpo y tu semana — no una plantilla.</li>
              <li><strong className="font-heading text-deep-navy dark:text-slate-100">4. Sesiones y progresión.</strong> Coaching 1:1 en Cambrils con trabajo técnico claro, progresión estructurada y ajustes continuos.</li>
              <li><strong className="font-heading text-deep-navy dark:text-slate-100">5. Revisiones y hábitos.</strong> Revisiones regulares más apoyo práctico de hábitos y educación fuera del gym.</li>
            </ol>
          </div>
          <aside className="md:col-span-2 bg-sand dark:bg-slate-800 rounded-3xl p-8 border border-soft-border dark:border-slate-700">
            <h3 className="font-heading font-semibold text-deep-navy dark:text-slate-100">Idiomas</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              Entrenador personal angloparlante en Cambrils. Entrenador germanoparlante en
              Cambrils. Español en aprendizaje — encantado de dar pautas simples en español y
              cambiar al inglés o al alemán para explicaciones detalladas.
            </p>
            <h3 className="mt-7 font-heading font-semibold text-deep-navy dark:text-slate-100">Zona de servicio</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              Cambrils, Salou, La Pineda, Vila-seca, Tarragona, Reus y la Costa Daurada.
              Coaching online disponible en todo el mundo.
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
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Entrenamiento pensado para Cambrils
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Cambrils tiene el puerto, un paseo marítimo largo y playas tranquilas que hacen
              que el trabajo de fuerza, acondicionamiento y carrera al aire libre funcione
              especialmente bien. Aprovechamos lo que el pueblo nos da.
            </p>
          </div>
          <div className="md:col-span-3 grid gap-5">
            {localDetails.map((item) => (
              <article key={item.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Preguntas</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
            Preguntas sobre entrenador personal en Cambrils
          </h2>
        </div>
        <FAQ items={faqs} />
      </Section>

      <Section background="warm-white">
        <RelatedServices excludeHref={PATH} lang="es" />
      </Section>

      <Section background="sand">
        <p className="text-sm text-muted-grey dark:text-slate-400 leading-relaxed max-w-prose mb-10">{MEDICAL_DISCLAIMER_ES}</p>
        <CtaBlock lang="es" />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Entrenador Personal Cambrils',
          'Entrenamiento personal 1:1 premium en Cambrils y la Costa Daurada con base en ciencias del ejercicio.',
          PATH,
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/es/' },
          { name: 'Entrenador Personal Cambrils', path: PATH },
        ])}
      />
    </>
  );
}
