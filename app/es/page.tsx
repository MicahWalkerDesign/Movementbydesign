import Link from 'next/link';
import type { Metadata } from 'next';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';
import YouTubeCard from '@/components/YouTubeCard';
import JsonLd from '@/components/JsonLd';

import Proof from '@/components/Proof';
import Testimonials from '@/components/Testimonials';
import PhotoSlot from '@/components/PhotoSlot';
import { buildMetadata, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title:
    'Entrenador Personal Salou | Coaching de Ciencias del Ejercicio para Fuerza, Salud y Longevidad | Movement by Design',
  description:
    'Entrenamiento personal para personas que necesitan algo más que una rutina de gym. Coaching basado en ciencias del ejercicio para fuerza, prevención de lesiones, confianza y salud a largo plazo en Salou, Cambrils, Tarragona y online.',
  path: '/es/',
  locale: 'es_ES',
  alternatePath: '/',
});

const FOR_YOU = [
  'Quieres ganar fuerza sin agravar lesiones antiguas',
  'Te sientes perdido tras fisioterapia, una operación o tiempo sin entrenar',
  'Buscas rendimiento sin acabar roto',
  'Necesitas un coaching adaptado a tu cuerpo, energía y confianza',
  'Estás embarazada, en posparto, en edad mayor o gestionando consideraciones de salud',
  'Quieres estructura, responsabilidad y educación, no entrenamientos al azar',
];

const SERVICES = [
  {
    title: 'Entrenamiento Personal 1:1',
    text: 'Fuerza, calidad de movimiento, confianza, forma física y progresión consciente con las lesiones — diseñado en torno a ti.',
    price: '€90',
    unit: 'por hora',
    href: '/es/entrenador-personal-salou/',
    cta: 'Entrenamiento personal en Salou',
  },
  {
    title: 'Entrenamiento en Grupo Reducido',
    text: 'Entrenamiento funcional en grupo reducido de 3–6 personas. Forma tu propio grupo con amigos, familia o compañeros — o únete a la lista de espera para la próxima plaza disponible.',
    price: '€15–30',
    unit: 'por persona, por hora',
    href: '/es/contacto/',
    cta: 'Pregunta por el grupo reducido',
  },
  {
    title: 'Terapia Manual',
    text: 'Trabajo de tejidos blandos para gestión del dolor y movilidad — disponible junto al coaching o de forma independiente.',
    price: '€50',
    unit: 'por 30 minutos',
    href: '/es/contacto/',
    cta: 'Pregunta por una sesión',
  },
];

const FAQS = [
  {
    q: '¿Ofreces entrenamiento personal en español?',
    a: 'Sí. Estoy aprendiendo español y puedo dar coaching en español básico. Para conversaciones detalladas sobre objetivos, dolor o historial médico, prefiero inglés (mi lengua materna) o alemán (fluido).',
  },
  {
    q: '¿Dónde se realizan las sesiones?',
    a: 'Las sesiones pueden tener lugar en Salou, Cambrils, Tarragona, La Pineda, Vila-seca y zonas cercanas, según la ubicación y necesidades. El coaching online está disponible internacionalmente.',
  },
  {
    q: '¿Necesito estar en forma ya?',
    a: 'No. El coaching se adapta a tu nivel actual, objetivos, historial de lesiones y confianza.',
  },
  {
    q: '¿Es adecuado si tengo una lesión antigua o consideraciones de salud?',
    a: 'En muchos casos, sí. Trabajo con un enfoque orientado a la rehabilitación y adapto el entrenamiento a tu historial y capacidad. Para diagnósticos o condiciones médicas activas, recomiendo trabajar junto a tu médico o profesional sanitario; el coaching puede acompañar ese trabajo cuando es apropiado.',
  },
  {
    q: '¿Qué incluye el coaching?',
    a: 'Sesiones, programación por escrito, indicaciones técnicas, modificaciones de movimiento, seguimientos y educación continua. Los detalles dependen del paquete: definimos el alcance exacto en la llamada inicial gratuita.',
  },
];

export default function SpanishHome() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={`${basePath}/images/hero-portrait.jpg`}
        // @ts-expect-error fetchpriority is valid HTML5 even if React types lag
        fetchpriority="high"
      />

      {/* HERO */}
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6">
              <span className="eyebrow">Salou · Cambrils · Tarragona · Online</span>
              <span className="accent-line mt-3 mb-6" aria-hidden />
              <h1 className="font-heading font-semibold text-[2.5rem] md:text-[3.4rem] leading-[1.05] tracking-[-0.02em] text-deep-navy max-w-[18ch]">
                Entrenamiento personal para personas que necesitan algo más que una rutina de gym.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-deep-navy/80 max-w-prose leading-relaxed">
                Coaching basado en ciencias del ejercicio para fuerza, confianza en el movimiento, prevención de lesiones y salud a largo plazo — en Salou, Cambrils, Tarragona y online.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/es/contacto/" className="btn-primary">
                  Reserva una llamada gratuita
                </Link>
                <Link href="#services" className="btn-secondary">
                  Explora el coaching
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-label text-deep-navy/70">
                {[
                  'Ciencias del Ejercicio',
                  'Enfoque rehabilitador',
                  'Rendimiento',
                  'EN · DE · ES en aprendizaje',
                ].map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 bg-warm-white border border-soft-border rounded-full px-3 py-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" aria-hidden />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6">
              <PhotoSlot
                src="/images/hero-portrait.jpg"
                alt="Micah Walker — entrenador con formación en ciencias del ejercicio, al aire libre al atardecer"
                label="retrato hero"
                variant="portrait"
                tone="sea"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* THIS IS FOR YOU IF */}
      <Section background="sand">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">Esto es para ti si…</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Coaching para cuerpos reales, historiales reales y vidas reales.
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              La mayoría de planes de entrenamiento fallan cuando ignoran a la persona. Mi trabajo se construye en torno a las variables que los planes genéricos saltan — y a las cosas que de verdad mueven la aguja a largo plazo.
            </p>
          </div>
          <ul className="md:col-span-7 grid gap-3 sm:grid-cols-2">
            {FOR_YOU.map((line) => (
              <li
                key={line}
                className="bg-white border border-soft-border rounded-2xl p-5 text-charcoal/90 leading-snug"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* SERVICES */}
      <section id="services" className="section bg-sand">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="eyebrow">Opciones de coaching</span>
              <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
                Tres formas de trabajar conmigo
              </h2>
              <p className="mt-5 prose-body max-w-prose">
                Una gama enfocada de servicios con formatos claros y tarifas transparentes — para que sea fácil saber cuál te encaja.
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <Link href="/es/contacto/" className="btn-secondary">
                ¿No sabes cuál encaja? Pregúntame
              </Link>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className={`card flex flex-col ${
                  i === 0 ? 'md:scale-[1.015] border-coastal-blue/40' : ''
                }`}
              >
                <span className="font-heading text-sm font-semibold text-coastal-blue">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading font-semibold text-xl text-deep-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-charcoal/85 leading-relaxed">{s.text}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-semibold text-deep-navy">
                    {s.price}
                  </span>
                  <span className="text-sm text-muted-grey">{s.unit}</span>
                </div>
                <div className="mt-6 pt-5 border-t border-soft-border">
                  <Link href={s.href} className="btn-ghost">
                    {s.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING IN MOTION */}
      <Section background="warm-white">
        <div className="max-w-2xl">
          <span className="eyebrow">En movimiento</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Cómo es realmente entrenar
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            Cuatro cualidades, entrenadas en las proporciones adecuadas para tu cuerpo y tu vida — los ingredientes de una capacidad que aguanta décadas.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: '/images/training-mobility.jpg',
              alt: 'Plancha lateral con rotación sobre esterillas al aire libre',
              label: 'Movilidad',
              caption: 'Reduce el dolor o la rigidez diarios y aumenta la capacidad de trabajo.',
            },
            {
              src: '/images/training-strength.jpg',
              alt: 'Flexiones al aire libre en posición de plancha sobre esterillas',
              label: 'Fuerza',
              caption: 'Construye un sistema musculoesquelético que aguante los años y te mantenga sano hasta la jubilación.',
            },
            {
              src: '/images/training-corrective.jpg',
              alt: 'Remo unilateral con cintas de suspensión, con el entrenador observando la técnica',
              label: 'Ejercicio Correctivo',
              caption: 'Restaura el equilibrio y reprograma patrones de movimiento que han cambiado con los años.',
            },
            {
              src: '/images/training-conditioning.jpg',
              alt: 'Sesión de battle ropes en un parque soleado',
              label: 'Salud Cardiovascular',
              caption: 'Acondicionamiento dirigido para apoyar energía, recuperación y capacidad cardiopulmonar a largo plazo.',
            },
          ].map((tile) => (
            <figure key={tile.label}>
              <PhotoSlot
                src={tile.src}
                alt={tile.alt}
                label={tile.label.toLowerCase()}
                variant="portrait"
                tone="sea"
              />
              <figcaption className="mt-3">
                <span className="text-xs uppercase tracking-label text-coastal-blue">
                  {tile.label}
                </span>
                <p className="mt-1 text-sm text-charcoal/85 leading-snug">{tile.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Proof lang="es" />

      {/* ABOUT PREVIEW */}
      <Section background="warm-white">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <PhotoSlot
              src="/images/about-coaching.jpg"
              alt="Micah dirigiendo una sesión de entrenamiento al aire libre"
              label="sesión de entrenamiento"
              variant="square"
              tone="sage"
            />
          </div>
          <div className="md:col-span-7">
            <span className="eyebrow">Sobre mí</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Hola, soy Micah.
            </h2>
            <span className="accent-line mt-5" aria-hidden />
            <div className="mt-6 space-y-4 prose-body max-w-prose">
              <p>
                Soy profesional en Ciencias del Ejercicio y el Deporte, coach de salud y entrenador personal con enfoque rehabilitador, con base entre España y Australia.
              </p>
              <p>
                Trabajo en la intersección entre movimiento, cambio de comportamiento y educación práctica — con una larga trayectoria en entrenamiento personal, coaching en grupo, investigación clínica del ejercicio, medicina deportiva y salud digital.
              </p>
              <p>
                Mi mejor trabajo es para personas que necesitan algo más que un plan genérico: clientes con historial de lesiones, vidas ocupadas, objetivos complejos y el tipo de variables que los programas de catálogo tienden a ignorar.
              </p>
              <Link href="/es/sobre-mi/" className="btn-secondary mt-4">
                Conoce más sobre mi formación
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Testimonials lang="es" />

      {/* EDUCATION HUB */}
      <Section background="warm-white">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <span className="eyebrow">Centro educativo</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Educación de movimiento que puedes aplicar
            </h2>
            <p className="mt-5 prose-body max-w-prose">
              Educación corta y práctica de movimiento y entrenamiento en YouTube — para quienes quieren entender su cuerpo y entrenar con intención entre sesiones.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={SITE.youtube} target="_blank" rel="noreferrer noopener" className="btn-secondary">
                YouTube
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener" className="btn-secondary">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <YouTubeCard title="Movement by Design" channelHref={SITE.youtube} />
          </div>
        </div>
      </Section>

      {/* SERVICE AREAS */}
      <Section background="sand">
        <PhotoSlot
          src="/images/training-environment.jpg"
          alt="Set de entrenamiento al aire libre — esterillas, kettlebells y sandbags listos en un parque costero"
          label="entrenamiento al aire libre"
          variant="landscape"
          tone="sand"
          className="mb-12"
        />
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">Zona de servicio</span>
            <h2 className="mt-3 font-heading font-semibold text-2xl md:text-3xl text-deep-navy">
              Presencial en la Costa Daurada. Online en todo el mundo.
            </h2>
          </div>
          <div className="md:col-span-7 prose-body max-w-prose">
            <p>
              Entrenamiento personal presencial en Salou, Cambrils, Tarragona, La Pineda, Vila-seca y Reus. Coaching online disponible internacionalmente.
            </p>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {[
                { label: 'Entrenador Personal Salou', href: '/es/entrenador-personal-salou/' },
                { label: 'Entrenamiento Funcional', href: '/es/entrenamiento-funcional/' },
                { label: 'Prevención de Lesiones', href: '/es/prevencion-lesiones/' },
                { label: 'Coaching Online', href: '/es/coaching-online/' },
                { label: 'Hábitos de Nutrición', href: '/es/nutricion-habitos/' },
                { label: 'Poblaciones Especiales', href: '/es/poblaciones-especiales/' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-2 text-coastal-blue hover:text-deep-navy transition-colors">
                    <span aria-hidden className="text-terracotta">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="warm-white">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
              Preguntas habituales
            </h2>
            <p className="mt-5 text-sm text-muted-grey leading-relaxed max-w-prose">
              {MEDICAL_DISCLAIMER_ES}
            </p>
          </div>
          <div className="md:col-span-7">
            <FAQ items={FAQS} />
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section background="navy">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="eyebrow-light">
              Empieza aquí
            </span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-warm-white">
              ¿Listo para entrenar con más confianza?
            </h2>
            <p className="mt-5 text-warm-white/80 max-w-prose">
              Cuéntame de dónde partes, qué quieres mejorar y qué no te ha funcionado antes. Te diré si puedo ayudarte y cuál sería el mejor siguiente paso.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <Link href="/es/contacto/" className="btn-primary">
              Reserva una llamada gratuita
            </Link>
            <Link
              href="/es/contacto/"
              className="inline-flex items-center justify-center bg-transparent text-warm-white border border-warm-white/40 font-medium rounded-2xl px-7 py-4 transition-colors hover:bg-warm-white/10"
            >
              Envíame un mensaje
            </Link>
          </div>
        </div>
      </Section>

      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Inicio', path: '/es/' }])} />
    </>
  );
}
