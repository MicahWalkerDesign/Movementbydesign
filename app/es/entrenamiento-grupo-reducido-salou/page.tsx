import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const PATH = '/es/entrenamiento-grupo-reducido-salou/';

export const metadata: Metadata = buildMetadata({
  title: 'Entrenamiento en Grupo Reducido Salou | Movement by Design',
  description:
    'Entrenamiento funcional en grupo reducido en Salou y Cambrils — 3 a 6 personas, basado en ciencias del ejercicio. €15–30 por persona y hora.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/small-group-training-salou/',
});

export default function EntrenamientoGrupoReducidoSalouPage() {
  const benefits = [
    {
      title: 'Grupos realmente reducidos',
      text: 'De 3 a 6 personas por sesión. Todo el mundo recibe corrección técnica y un programa adaptado a su nivel — no una clase masificada.',
    },
    {
      title: 'Entrenamiento funcional y transferible',
      text: 'Fuerza, movilidad, core y acondicionamiento construidos en torno al movimiento real — cargar, levantar, trepar, caminar y jugar.',
    },
    {
      title: 'Basado en ciencias del ejercicio',
      text: 'Las sesiones siguen los mismos principios que el coaching 1:1: progresión estructurada, técnica primero, gestión sensata de la carga y revisiones honestas.',
    },
    {
      title: 'Coste por persona más bajo',
      text: 'Coaching premium a €15–30 por persona y hora — según el tamaño del grupo — sin perder atención personal.',
    },
  ];

  const formats = [
    {
      title: 'Trae tu propio grupo',
      text: 'Forma un grupo de amigos, familiares o compañeros (3–6 personas) y montamos un bloque cerrado en torno a los objetivos y el nivel del grupo.',
    },
    {
      title: 'Apúntate a la lista de espera',
      text: '¿Vas solo? Cuéntame tus objetivos, historial y disponibilidad y te emparejaré con un grupo en formación cuando el encaje sea adecuado.',
    },
    {
      title: 'Formatos interior y exterior',
      text: 'Las sesiones se realizan al aire libre en el paseo marítimo de Salou y Cambrils con buen tiempo, y en un espacio de entrenamiento adecuado cuando las condiciones o la programación lo piden.',
    },
    {
      title: 'Sesiones funcionales y variadas',
      text: 'Espera una mezcla de fuerza, transportes, movilidad, intervalos de acondicionamiento y trabajo de habilidad motora — no un bootcamp reducido.',
    },
  ];

  const ideal = [
    'Amigos, parejas o familias que quieren entrenar juntos con un coach real',
    'Pequeñas empresas o equipos en Salou y Cambrils que buscan entrenamiento de grupo',
    'Adultos activos que prefieren el ambiente de un grupo pequeño al entreno en solitario',
    'Expats y residentes que quieren coaching en inglés o alemán en grupo',
    'Quienes encuentran la tarifa 1:1 alta pero quieren coaching de calidad',
    'Clientes 1:1 actuales que quieren añadir una sesión grupal semanal',
  ];

  const faqs = [
    {
      q: '¿Cuánto cuesta el entrenamiento en grupo reducido en Salou?',
      a: 'El entrenamiento en grupo reducido cuesta €15–30 por persona y hora. La tarifa exacta por persona depende del tamaño del grupo — los grupos más grandes (hasta 6) están en la parte baja del rango.',
    },
    {
      q: '¿De qué tamaño son los grupos?',
      a: 'Los grupos funcionan con 3 a 6 personas. Eso mantiene un coaching real — todo el mundo recibe correcciones técnicas y modificaciones, en lugar de una clase única para todos.',
    },
    {
      q: '¿Puedo apuntarme sin grupo?',
      a: 'Sí. Cuéntame tus objetivos, historial de entrenamiento y disponibilidad en la llamada inicial gratuita y te añadiré a una lista de espera para un grupo en formación que encaje.',
    },
    {
      q: '¿Dónde se realizan las sesiones?',
      a: 'La mayoría de sesiones son al aire libre en el paseo marítimo de Salou y Cambrils, con opciones de interior en un espacio de entrenamiento adecuado cuando las condiciones o la programación lo requieren.',
    },
    {
      q: '¿Ofrecéis entrenamiento de grupo para empresas?',
      a: 'Sí. Pequeños negocios, hoteles y equipos en Salou, Cambrils y la Costa Daurada pueden organizar sesiones cerradas para su plantilla — escribe contando tamaño y objetivos.',
    },
    {
      q: '¿Es adecuado si tengo historial de lesiones?',
      a: 'En muchos casos, sí. La programación está basada en ciencias del ejercicio y se adapta a cada participante. Para rehabilitación más compleja, el 1:1 suele ser un mejor punto de partida.',
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Grupo Reducido"
        title="Entrenamiento en grupo reducido en Salou"
        subtitle="Entrenamiento funcional basado en ciencias del ejercicio para grupos de 3-6 en Salou y Cambrils."
        body="Coaching premium en grupo reducido de 3 a 6 personas en Salou, Cambrils y la Costa Daurada. €15–30 por persona y hora — trae tu propio grupo o apúntate a la lista de espera para uno en formación."
        photoSrc="/images/training-corrective.jpg"
        photoAlt="Sesión de entrenamiento en grupo reducido en Salou — entrenamiento funcional dirigido en la Costa Daurada"
        photoLabel="Sesión de grupo en Salou"
        contactHref="/es/contacto/"
        primaryCta="Pregunta por grupos reducidos"
        secondaryCta="Envía una consulta"
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Lo que recibes</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Coaching real, factura menor
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Entrenamiento en grupo reducido en Salou y Cambrils que mantiene los estándares
              del 1:1 — técnica, programación, progresión — y reparte el coste entre un grupo
              pequeño.
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
              Grupos que quieren un plan real
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              El grupo reducido está hecho para quien quiere sesiones dirigidas y
              estructuradas — no una clase de alto volumen — con unos cuantos compañeros
              de entrenamiento.
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
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">Cómo funcionan los grupos</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              Formatos y opciones
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Tanto si traes tu propio grupo como si te emparejamos con uno, la estructura es
              la misma — calentamiento serio, series de trabajo dirigidas, acondicionamiento
              y vuelta a la calma con movilidad.
            </p>
          </div>
          <div className="md:col-span-3 grid gap-5">
            {formats.map((f) => (
              <article key={f.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">{f.title}</h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <span className="eyebrow">Tarifas</span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              €15–30 por persona y hora
            </h2>
            <p>
              El entrenamiento en grupo reducido se cobra por persona y hora. La tarifa por
              persona se ajusta al tamaño del grupo — con 3 personas estarás cerca del techo
              del rango, y con 6 cerca del suelo.
            </p>
            <ul className="space-y-3 mt-2">
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">3 personas</strong> — cerca de €30 por persona y hora
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">4 personas</strong> — alrededor del medio del rango
              </li>
              <li>
                <strong className="font-heading text-deep-navy dark:text-slate-100">5–6 personas</strong> — cerca de €15 por persona y hora
              </li>
            </ul>
            <p className="text-sm text-muted-grey dark:text-slate-400">
              Los bonos prepagados y franjas semanales fijas pueden organizarse una vez
              confirmado el grupo. Desplazamientos fuera de Salou y Cambrils pueden
              presupuestarse aparte.
            </p>
          </div>

          <aside className="md:col-span-2 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-soft-border dark:border-slate-700">
            <h3 className="font-heading font-semibold text-deep-navy dark:text-slate-100">Idiomas</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              Las sesiones se dirigen en inglés o alemán. Hay pautas simples en español
              mientras mi español sigue mejorando.
            </p>
            <h3 className="mt-7 font-heading font-semibold text-deep-navy dark:text-slate-100">Zona de servicio</h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              Salou, Cambrils, La Pineda, Vila-seca, Tarragona y Reus.
            </p>
            <Link href="/es/contacto/" className="btn-primary mt-7 w-full">
              Pregunta por grupos reducidos
            </Link>
          </aside>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Preguntas</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
            Preguntas sobre grupo reducido
          </h2>
        </div>
        <FAQ items={faqs} />
      </Section>

      <Section background="sand">
        <RelatedServices excludeHref={PATH} lang="es" />
      </Section>

      <Section background="warm-white">
        <p className="text-sm text-muted-grey dark:text-slate-400 leading-relaxed max-w-prose mb-10">{MEDICAL_DISCLAIMER_ES}</p>
        <CtaBlock lang="es" />
      </Section>

      <JsonLd
        data={serviceSchema(
          'Entrenamiento en Grupo Reducido Salou',
          'Entrenamiento personal en grupo reducido funcional en Salou y Cambrils, 3–6 personas, base en ciencias del ejercicio.',
          PATH,
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/es/' },
          { name: 'Entrenamiento en Grupo Reducido Salou', path: PATH },
        ])}
      />
    </>
  );
}
