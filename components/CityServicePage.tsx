import Link from 'next/link';
import ServiceHero from '@/components/ServiceHero';
import Section from '@/components/Section';
import RelatedServices from '@/components/RelatedServices';
import CtaBlock from '@/components/CtaBlock';
import Pricing from '@/components/Pricing';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';
import type { CityCopy } from '@/lib/cities';

type Props = {
  city: CityCopy;
  lang: 'en' | 'es';
};

/**
 * Shared template for programmatic "personal trainer [city]" landing pages.
 * Renders hero, benefits, ideal client list, process, pricing, local detail
 * cards, FAQ, related services, CTA and full schema set.
 */
export default function CityServicePage({ city, lang }: Props) {
  const isEs = lang === 'es';
  const path = isEs ? city.esPath : city.enPath;
  const altPath = isEs ? city.enPath : city.esPath;
  const name = isEs ? city.displayNameEs : city.displayName;

  const t = isEs
    ? {
        eyebrow: `Servicio · ${name}`,
        title: `Entrenador personal en ${name}`,
        primaryCta: 'Reserva una llamada gratuita',
        secondaryCta: 'Envía una consulta',
        contactHref: '/es/contacto/',
        benefitsEyebrow: 'Lo que recibes',
        benefitsHeading: `Una experiencia 1:1 premium en ${name}`,
        benefitsIntro: `Entrenamiento personal en ${name} construido sobre ciencias del ejercicio, tu historial médico y los objetivos que de verdad importan — no una rutina genérica.`,
        idealEyebrow: 'Para quién es',
        idealHeading: `Clientes de ${name} que quieren un plan real`,
        idealIntro: `Si buscas un entrenador personal en ${name} que trate tu entrenamiento como un proyecto a largo plazo y no como un truco rápido, este servicio está hecho para ti.`,
        processEyebrow: 'Cómo funciona',
        processHeading: 'De la primera llamada al progreso continuo',
        languagesHeading: 'Idiomas',
        languagesText: `Entrenador personal angloparlante en ${name}. Entrenador germanoparlante en ${name}. Español en aprendizaje — encantado de dar pautas simples en español y cambiar al inglés o al alemán para explicaciones detalladas.`,
        serviceAreaHeading: 'Zona de servicio',
        serviceAreaText: `${name}, Salou, Cambrils, La Pineda, Vila-seca, Tarragona, Reus y la Costa Daurada. Coaching online disponible en todo el mundo.`,
        pricingHeading: 'Tarifas por sesión',
        pricingIntro:
          'Precios claros y simples. Bonos prepagados y paquetes pueden organizarse en la llamada inicial cuando sepamos qué cadencia te conviene.',
        pricingEyebrow: 'Tarifas',
        localEyebrow: 'Entrenamiento local',
        localHeading: `Entrenamiento pensado para ${name}`,
        faqEyebrow: 'Preguntas',
        faqHeading: `Preguntas sobre entrenador personal en ${name}`,
        crumbHome: { name: 'Inicio', path: '/es/' },
        crumbCurrent: `Entrenador Personal ${name}`,
        ideal: [
          `Residentes y expats angloparlantes en ${name} y alrededores`,
          'Visitantes y residentes germanoparlantes en la Costa Daurada',
          'Profesionales y padres ocupados que necesitan sesiones eficientes',
          'Personas que vuelven a entrenar tras un parón, cirugía o embarazo',
          'Adultos activos que quieren mantenerse fuertes sin recaídas',
          `Clientes de Salou o Cambrils que prefieren entrenar cerca de ${name}`,
        ],
        benefits: [
          {
            title: 'Coaching basado en ciencias del ejercicio',
            text: 'La programación se apoya en literatura de ciencias del ejercicio, principios de rehabilitación y una década de práctica — no en plantillas de moda.',
          },
          {
            title: `Adaptado a la vida en ${name}`,
            text: `Las sesiones se organizan en torno a la familia, el trabajo y el ritmo real de ${name} — temprano, tarde o cuando encaje.`,
          },
          {
            title: 'Calidad de movimiento primero',
            text: 'La carga se gana. Técnica, control y salud articular van antes que perseguir kilos o cifras.',
          },
          {
            title: 'Seguimiento honesto',
            text: 'Hitos claros, revisiones regulares y ajustes para que siempre sepas qué está funcionando y cuál es el siguiente paso.',
          },
        ],
        process: [
          ['1. Llamada inicial gratuita.', 'Una conversación corta sobre objetivos, historial y limitaciones — y si soy el encaje adecuado.'],
          ['2. Valoración de movimiento y objetivos.', 'Una evaluación estructurada que cubre historial de entrenamiento, lesiones, estilo de vida y qué significa éxito para ti.'],
          ['3. Plan personalizado.', 'Un plan diseñado en torno a tu cuerpo y tu semana — no una plantilla.'],
          ['4. Sesiones y progresión.', `Coaching 1:1 en ${name} con trabajo técnico claro, progresión estructurada y ajustes continuos.`],
          ['5. Revisiones y hábitos.', 'Revisiones regulares más apoyo práctico de hábitos y educación fuera del gym.'],
        ],
        proximity: city.proximityEs,
        intro: city.intro.es,
        subtitle: city.subtitle.es,
        localIntro: city.localIntro.es,
        photoLabel: `Sesión en ${name}`,
      }
    : {
        eyebrow: `Service · ${name}`,
        title: `Personal Trainer in ${name}`,
        primaryCta: 'Book a free intro call',
        secondaryCta: 'Send an enquiry',
        contactHref: '/contact/',
        benefitsEyebrow: 'What you get',
        benefitsHeading: `A premium 1:1 experience in ${name}`,
        benefitsIntro: `Personal training in ${name} built around exercise science, your medical history and the goals that actually matter to you — not a generic gym plan.`,
        idealEyebrow: "Who it’s for",
        idealHeading: `${name} clients who want a real plan`,
        idealIntro: `If you’re looking for a thoughtful personal trainer in ${name} — someone who treats your training as a long-term project, not a quick fix — this service is built for you.`,
        processEyebrow: 'How it works',
        processHeading: 'From first call to ongoing progress',
        languagesHeading: 'Languages',
        languagesText: `English-speaking personal trainer in ${name}. German-speaking personal trainer in ${name}. Spanish in progress — happy to coach simple cues in Spanish and switch to English or German for detailed explanations.`,
        serviceAreaHeading: 'Service area',
        serviceAreaText: `${name}, Salou, Cambrils, La Pineda, Vila-seca, Tarragona, Reus and the wider Costa Daurada. Online coaching available worldwide.`,
        pricingHeading: 'Session rates',
        pricingIntro:
          'Clear, simple pricing. Pre-paid blocks and packages can be arranged on your intro call once we know what cadence suits you.',
        pricingEyebrow: 'Rates',
        localEyebrow: 'Local personal training',
        localHeading: `Training built for ${name}`,
        faqEyebrow: 'Questions',
        faqHeading: `Personal Trainer ${name} FAQs`,
        crumbHome: { name: 'Home', path: '/' },
        crumbCurrent: `Personal Trainer ${name}`,
        ideal: [
          `English-speaking residents and expats in ${name} and the surrounding area`,
          'German-speaking visitors and long-stay guests on the Costa Daurada',
          'Busy professionals and parents who want efficient, well-designed sessions',
          'People returning to training after a break, surgery or pregnancy',
          'Active adults who want to stay strong without breakdowns or flare-ups',
          `Salou and Cambrils clients who would prefer to train closer to ${name}`,
        ],
        benefits: [
          {
            title: 'Coaching grounded in exercise science',
            text: 'Programming draws on published exercise science, rehabilitation principles and a decade of coaching practice — not fashionable templates.',
          },
          {
            title: `Built around life in ${name}`,
            text: `Sessions are scheduled around family, work and the real rhythm of ${name} — early, late or in between.`,
          },
          {
            title: 'Movement quality first',
            text: 'We earn the load. Technique, control and joint health come before chasing weights or numbers.',
          },
          {
            title: 'Honest progress tracking',
            text: 'Clear benchmarks, regular reviews and adjustments so you always know what is working and what to change next.',
          },
        ],
        process: [
          ['1. Free intro call.', 'A short conversation about your goals, history and constraints — and whether I’m the right fit.'],
          ['2. Movement and goal review.', 'A structured assessment covering training history, injury history, lifestyle and what success would look like for you.'],
          ['3. Personalised plan.', 'A coaching plan built around your body and your week — not a template.'],
          ['4. Sessions and progression.', `1:1 coaching in ${name} with clear technique work, structured progression and ongoing adjustments.`],
          ['5. Reviews and habits.', 'Regular reviews to keep the plan honest, plus practical habit and education support outside the gym.'],
        ],
        proximity: city.proximity,
        intro: city.intro.en,
        subtitle: city.subtitle.en,
        localIntro: city.localIntro.en,
        photoLabel: `${name} coaching session`,
      };

  // Build localized faqs + append a couple of shared ones to enrich coverage.
  const localFaqs = city.faqs.map((f) => ({
    q: isEs ? f.q.es : f.q.en,
    a: isEs ? f.a.es : f.a.en,
  }));
  const sharedFaqs = isEs
    ? [
        {
          q: '¿Puedes ayudarme si tengo una lesión antigua o dolor?',
          a: 'En muchos casos, sí. El coaching tiene un enfoque orientado a la rehabilitación y se adapta a tu historial, capacidad y confianza. No sustituye diagnóstico médico ni fisioterapia cuando hacen falta.',
        },
        {
          q: '¿Cuánto cuesta una sesión?',
          a: 'El entrenamiento personal 1:1 cuesta €90 por hora. El grupo reducido cuesta €15–30 por persona y hora según el tamaño del grupo. Los bonos prepagados se concretan en la llamada inicial.',
        },
      ]
    : [
        {
          q: 'Can you help if I have an old injury or pain history?',
          a: 'Often, yes. Coaching is rehabilitation-informed and adapted to your history, capacity and confidence. It does not replace medical diagnosis or physiotherapy where those are needed.',
        },
        {
          q: 'How much does a session cost?',
          a: '1:1 personal training is €90 per hour. Small-group training is €15–30 per person per hour depending on group size. Pre-paid blocks and packages can be arranged on your intro call.',
        },
      ];
  const faqs = [...localFaqs, ...sharedFaqs];

  const localDetails = city.localDetails.map((d) => ({
    title: isEs ? d.title.es : d.title.en,
    text: isEs ? d.text.es : d.text.en,
  }));

  return (
    <>
      <ServiceHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        body={t.intro}
        photoSrc={city.heroPhoto}
        photoAlt={isEs ? city.heroPhotoAlt.es : city.heroPhotoAlt.en}
        photoLabel={t.photoLabel}
        contactHref={t.contactHref}
        primaryCta={t.primaryCta}
        secondaryCta={t.secondaryCta}
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">{t.benefitsEyebrow}</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              {t.benefitsHeading}
            </h2>
            <p className="mt-5 prose-body max-w-prose">{t.benefitsIntro}</p>
            <p className="mt-4 prose-body max-w-prose">{t.proximity}</p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            {t.benefits.map((b) => (
              <article key={b.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">
                  {b.title}
                </h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">{t.idealEyebrow}</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              {t.idealHeading}
            </h2>
            <p className="mt-5 prose-body max-w-prose">{t.idealIntro}</p>
          </div>
          <ul className="grid gap-3">
            {t.ideal.map((i) => (
              <li
                key={i}
                className="bg-white dark:bg-slate-800 border border-soft-border dark:border-slate-700 rounded-2xl p-5 text-charcoal/90 dark:text-slate-300"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5 prose-body max-w-prose">
            <span className="eyebrow">{t.processEyebrow}</span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              {t.processHeading}
            </h2>
            <ol className="space-y-5 mt-4">
              {t.process.map(([title, body]) => (
                <li key={title}>
                  <strong className="font-heading text-deep-navy dark:text-slate-100">{title}</strong>{' '}
                  {body}
                </li>
              ))}
            </ol>
          </div>

          <aside className="md:col-span-2 bg-sand dark:bg-slate-800 rounded-3xl p-8 border border-soft-border dark:border-slate-700">
            <h3 className="font-heading font-semibold text-deep-navy dark:text-slate-100">
              {t.languagesHeading}
            </h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              {t.languagesText}
            </p>
            <h3 className="mt-7 font-heading font-semibold text-deep-navy dark:text-slate-100">
              {t.serviceAreaHeading}
            </h3>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
              {t.serviceAreaText}
            </p>
            <Link href={t.contactHref} className="btn-primary mt-7 w-full">
              {t.primaryCta}
            </Link>
          </aside>
        </div>
      </Section>

      <Pricing
        background="sand"
        eyebrow={t.pricingEyebrow}
        heading={t.pricingHeading}
        intro={t.pricingIntro}
        lang={isEs ? 'es' : 'en'}
      />

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <span className="eyebrow">{t.localEyebrow}</span>
            <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
              {t.localHeading}
            </h2>
            <p className="mt-5 prose-body max-w-prose">{t.localIntro}</p>
          </div>
          <div className="md:col-span-3 grid gap-5">
            {localDetails.map((item) => (
              <article key={item.title} className="card">
                <h3 className="font-heading font-semibold text-lg text-deep-navy dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="sand">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">{t.faqEyebrow}</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy dark:text-slate-100">
            {t.faqHeading}
          </h2>
        </div>
        <FAQ items={faqs} />
      </Section>

      <Section background="warm-white">
        <RelatedServices excludeHref={path} lang={isEs ? 'es' : 'en'} />
      </Section>

      <Section background="sand">
        <p className="text-sm text-muted-grey dark:text-slate-400 leading-relaxed max-w-prose mb-10">
          {isEs ? MEDICAL_DISCLAIMER_ES : MEDICAL_DISCLAIMER}
        </p>
        <CtaBlock lang={isEs ? 'es' : 'en'} />
      </Section>

      <JsonLd
        data={serviceSchema(
          isEs ? `Entrenador Personal ${name}` : `Personal Trainer ${name}`,
          isEs ? city.description.es : city.description.en,
          path,
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          t.crumbHome,
          { name: t.crumbCurrent, path },
        ])}
      />
    </>
  );
}
