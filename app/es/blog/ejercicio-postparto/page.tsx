import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import RelatedServices from '@/components/RelatedServices';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const POST = {
  slug: 'ejercicio-postparto',
  title: 'Ejercicio Posparto y Vuelta al Entrenamiento | Entrenador Personal Salou – Movement by Design',
  description:
    'Guía científica para volver al ejercicio después del parto. Suelo pélvico, diástasis y recuperación progresiva con entrenador personal en Salou, Costa Daurada.',
  date: '2026-05-02',
  readingTime: '10 min de lectura',
  category: 'Poblaciones Especiales',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/es/blog/${POST.slug}/`,
  locale: 'es_ES',
  alternatePath: '/blog/postpartum-exercise/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function EjercicioPostpartoPage() {
  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-14 md:pt-20 pb-10 md:pb-14 max-w-3xl">
          <Link href="/es/blog/" className="text-sm text-coastal-blue hover:text-deep-navy">
            ← Todos los artículos
          </Link>
          <span className="mt-6 block text-xs uppercase tracking-label text-coastal-blue">
            {formatDate(POST.date)} · {POST.readingTime} · {POST.category}
          </span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-3xl md:text-5xl text-deep-navy leading-[1.1]">
            Ejercicio posparto: guía científica para la vuelta al entrenamiento después del parto
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            El alta médica a las seis semanas es un punto de partida, no una luz verde para
            retomar el entrenamiento anterior. La vuelta al ejercicio después del parto debe
            ser progresiva, liderada por el suelo pélvico y construida sobre tu recuperación real.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Por qué la revisión de las seis semanas es solo el principio
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La revisión posparto estándar a las seis semanas autoriza la actividad general.
              No evalúa la función del suelo pélvico, la integridad de la pared abdominal, la
              tolerancia a la carga, la estabilidad de cadera ni la preparación para el impacto.
              Para la mayoría de las mujeres esto crea una brecha enorme entre el alta médica y
              la preparación real para retomar el entrenamiento que les gusta.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las influyentes guías de retorno a la carrera de 2019 de las fisioterapeutas
              Groom, Donnelly y Brockwell recomiendan esperar un mínimo de doce semanas posparto
              antes de retomar la carrera u otras actividades de impacto, y solo entonces con
              una progresión graduada. El fundamento es sencillo: el suelo pélvico ha sufrido
              un estrés significativo durante el embarazo y el parto, y la remodelación tisular
              requiere tiempo.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Contar con un entrenador personal orientado a la rehabilitación en Salou — que
              comprenda la fisiología del suelo pélvico y la carga progresiva — significa que
              tu vuelta al entrenamiento es realmente segura, no solo socialmente aprobada.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Entender el cuerpo posparto
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La recuperación del parto — ya sea vaginal o por cesárea — implica múltiples
              procesos simultáneos. La relaxina se mantiene elevada durante la lactancia,
              manteniendo las articulaciones más laxas que antes del embarazo. El suelo
              pélvico se recupera del estiramiento directo (parto vaginal) o de los efectos
              de nueve meses de carga aumentada (cesárea). La función muscular abdominal,
              especialmente la del transverso abdominal profundo, se ve frecuentemente
              alterada. Y la privación de sueño, los cambios hormonales y las demandas de
              la lactancia afectan a la capacidad de recuperación.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La diástasis abdominal — separación de los rectos del abdomen a lo largo de la
              línea alba — afecta hasta al 100% de las mujeres al final del embarazo y persiste
              en el 39% a los seis meses posparto. No requiere necesariamente intervención
              quirúrgica, pero sí debe comprenderse antes de cargar la pared abdominal anterior.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Semanas 0–6: descanso, restauración y caminar
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El periodo posparto inmediato es para el descanso y la cicatrización, no para
              el entrenamiento. No es tiempo perdido en términos de condición física. Es
              recuperación necesaria. Las actividades clave son:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Respiración diafragmática: simple, poderosa, comienza a reconstruir la conexión entre el diafragma, el suelo pélvico y el core profundo.',
                'Conciencia del suelo pélvico: activación y relajación suaves — no aprietes agresivos tipo Kegel. El suelo pélvico a menudo necesita aprender a relajarse tras el parto tanto como a fortalecerse.',
                'Caminar: empieza con paseos cortos y en terreno llano y aumenta gradualmente. Los paseos de Salou y Cambrils son ideales — planos, con sombra a primera hora y accesibles para la mayoría de residentes.',
                'Descansa cuando la fatiga sea significativa: la privación de sueño deteriora todos los procesos de cicatrización y debe respetarse, no ignorarse.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              En la recuperación por cesárea, no se realiza ninguna carga abdominal hasta que
              la cicatriz haya cicatrizado y el core pueda activarse sin molestias. Esto suele
              implicar dos a cuatro semanas adicionales de actividad reducida respecto al parto vaginal.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Semanas 6–12: fase de base
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Con el alta médica y en ausencia de síntomas (pérdidas de orina, sensación de
              pesadez pélvica, dolor significativo), el ejercicio puede ampliarse gradualmente.
              El énfasis sigue siendo en reconstruir la base, no en volver a las cargas anteriores.
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Rehabilitación del suelo pélvico: progresa desde la conciencia básica hasta la activación funcional bajo carga — sentadillas, puentes, ejercicios en bipedestación.',
                'Evaluación de la diástasis: valora la integridad de la línea media antes de cualquier carga troncal. Un entrenador adecuadamente formado puede realizar una valoración básica y derivar a un fisioterapeuta de suelo pélvico cuando sea necesario.',
                'Tren inferior con peso corporal: sentadillas, puentes de glúteo, bisagras de cadera, subidas a escalón con conciencia del suelo pélvico.',
                'Tren superior: empujes y jalones con peso corporal o resistencia ligera — prioriza la postura dado las demandas de dar el pecho y cargar al bebé.',
                'Continúa con los paseos diarios: aumenta la duración y añade pequeñas cuestas si estás sin síntomas.',
                'Sin actividades de impacto, carrera, levantamiento de cargas pesadas ni trabajo intenso de core durante esta fase.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Semanas 12 en adelante: vuelta al entrenamiento con carga
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A partir de las doce semanas, si los fundamentos son sólidos y los síntomas están
              ausentes o bien controlados, puede comenzar la carga progresiva. Aquí el entrenamiento
              empieza a parecerse más a la fuerza y el acondicionamiento convencionales — pero
              construidos sobre una base adecuada.
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Entrenamiento de fuerza progresivo: peso muerto, sentadillas, presses, remos con aumentos sistemáticos de carga — los mismos principios de sobrecarga progresiva que aplican en toda programación de calidad.',
                'Protocolo de vuelta a la carrera: comienza con una progresión de caminar-correr (estilo "Couch to 5K") solo cuando la valoración del suelo pélvico sea satisfactoria. Sin pérdidas, pesadez ni dolor durante la actividad.',
                'HIIT e impacto: introduce solo cuando el entrenamiento con carga se tolera bien y la función del suelo pélvico es robusta.',
                'Monitoriza las señales de alerta a lo largo de todo el proceso: cualquier retorno de síntomas del suelo pélvico indica reducir la carga y reevaluar.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Síntomas de alarma: cuándo pausar y derivar
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Un entrenador orientado a la rehabilitación debe vigilar siempre los síntomas
              que indican que el ritmo de recuperación es demasiado rápido:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Pérdidas de orina o heces con el ejercicio, el impacto o la tos',
                'Sensación de pesadez pélvica o prolapso',
                'Dolor pélvico o de cadera durante el ejercicio',
                'Protrucción o "coning" en la línea media durante ejercicios de core',
                'Fatiga significativa o recuperación lenta entre sesiones',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Cualquiera de estos síntomas es una indicación clara de reducir la progresión y
              derivar a un fisioterapeuta especializado en suelo pélvico. En la provincia de
              Tarragona hay profesionales cualificados disponibles; la fisioterapia online es
              también muy efectiva para las preocupaciones de suelo pélvico.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Coaching posparto en Salou y la Costa Daurada
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Movement by Design ofrece coaching de ejercicio posparto para mujeres en Salou,
              Cambrils y toda la Costa Daurada. Las sesiones pueden ser presenciales o en línea,
              se construyen en torno a tu cronología de recuperación específica y siempre integran
              la conciencia del suelo pélvico y los principios de carga progresiva desde el inicio.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Tanto si estás a seis semanas del parto como a seis meses, la prioridad es siempre
              construir desde tu base real — no desde el cuerpo que tenías antes del embarazo, ni
              desde el programa que viste en Instagram. Solo ciencias del ejercicio sólidas,
              graduales y basadas en la evidencia.
            </p>
          </div>

          <p className="mt-10 text-xs text-muted-grey leading-relaxed border-t border-soft-border pt-6">
            {MEDICAL_DISCLAIMER_ES}
          </p>
        </article>
      </Section>

      <Section background="warm-white">
        <RelatedServices excludeHref="" lang="es" />
      </Section>

      <Section background="sand">
        <CtaBlock
          lang="es"
          title="¿Lista para volver al entrenamiento de forma adecuada?"
          body="Coaching posparto adaptado a tu cronología de recuperación, función del suelo pélvico y objetivos. Presencial en Salou y Cambrils, o en línea en toda la Costa Daurada."
        />
      </Section>

      <JsonLd
        data={articleSchema({
          title: POST.title,
          description: POST.description,
          path: `/es/blog/${POST.slug}/`,
          datePublished: POST.date,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/es/' },
          { name: 'Blog', path: '/es/blog/' },
          { name: 'Ejercicio posparto', path: `/es/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
