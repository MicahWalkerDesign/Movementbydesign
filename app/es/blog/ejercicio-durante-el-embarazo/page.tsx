import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const POST = {
  slug: 'ejercicio-durante-el-embarazo',
  title: 'Ejercicio en el Embarazo | Entrenador Personal Salou – Movement by Design',
  description:
    'Guía trimestral del ejercicio durante el embarazo con un entrenador personal en Salou. Evidencia científica, suelo pélvico y adaptaciones seguras en la Costa Daurada.',
  date: '2026-05-01',
  readingTime: '9 min de lectura',
  category: 'Poblaciones Especiales',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/es/blog/${POST.slug}/`,
  locale: 'es_ES',
  alternatePath: '/blog/exercise-during-pregnancy/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function EjercicioDuranteEmbarazoPage() {
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
            Ejercicio durante el embarazo: guía trimestral con entrenador personal en Salou
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            El embarazo no exige que dejes de moverte. De hecho, la evidencia científica actual
            respalda claramente el ejercicio moderado durante toda la gestación — con las
            adaptaciones adecuadas y un entrenador que entiende la fisiología del embarazo.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Por qué el ejercicio es más importante que nunca durante el embarazo
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Durante décadas se recomendó a las mujeres embarazadas que redujeran su actividad
              y trataran su cuerpo como algo frágil. La ciencia ha dado un giro rotundo a esa
              postura. Las guías actuales del ACOG (Colegio Americano de Obstetras y Ginecólogos),
              las directrices CSEP de ejercicio en el embarazo y las recomendaciones NICE del
              Reino Unido abogan por el ejercicio aeróbico de intensidad moderada durante toda
              la gestación sin complicaciones.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Los beneficios están ampliamente documentados: menor riesgo de diabetes gestacional,
              mejor control del peso, menor incidencia de preeclampsia, parto activo más corto y
              una mejora significativa del estado de ánimo y la calidad del sueño. Contar con un
              entrenador personal orientado a la rehabilitación en Salou o en la Costa Daurada
              permite aplicar estas directrices de forma práctica y personalizada, no solo citarlas
              en un folleto.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El objetivo del ejercicio prenatal no es el rendimiento. Es mantener la capacidad
              funcional, gestionar las demandas físicas de un cuerpo en transformación y prepararse
              para el parto y el periodo posparto.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Principios generales del ejercicio prenatal seguro
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Antes de entrar en las adaptaciones por trimestre, conviene entender los principios
              que guían la programación del ejercicio durante el embarazo:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Intensidad moderada: deberías poder mantener una conversación durante el ejercicio cardiovascular. El "test del habla" es una guía fiable y práctica.',
                'Volumen: 150 minutos semanales de actividad aeróbica moderada siguen siendo el objetivo, distribuidos en la mayoría de los días.',
                'Calidad de movimiento sobre carga: la técnica y el control se vuelven más importantes que los kilos que se manejan.',
                'Escucha los síntomas: mareos, disnea, dolor pélvico, pérdida de fluidos, contracciones o reducción de los movimientos fetales son motivos para detener el ejercicio y consultar con la matrona o el médico.',
                'Evitar el decúbito supino desde el segundo trimestre: tumbarse boca arriba puede comprimir la vena cava inferior. Los ejercicios se adaptan a posiciones inclinadas o en decúbito lateral.',
                'Evitar deportes de contacto, actividades con riesgo de caída y ejercicios con apnea (maniobra de Valsalva).',
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
              Primer trimestre (semanas 1–13): base y conciencia corporal
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El primer trimestre suele ser el más sintomático: náuseas, fatiga y sensibilidad
              mamaria pueden hacer que entrenar parezca poco apetecible. Es completamente normal.
              Para la mayoría de las mujeres, el entrenamiento puede continuar prácticamente sin
              cambios durante las primeras semanas, con una excepción clave: este es el momento
              ideal para desarrollar la conciencia corporal y comenzar la educación del suelo pélvico.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El suelo pélvico sostiene el útero, la vejiga y el recto. A medida que la relaxina
              —hormona que aumenta la laxitud articular— se eleva desde el inicio del embarazo,
              el suelo pélvico debe adaptarse a nuevas demandas. Aprender a reclutarlo y relajarlo
              correctamente en esta etapa sienta las bases para una mejor función durante todo el
              embarazo y la recuperación posparto.
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Continúa con el ejercicio habitual a intensidad moderada — no es el momento de comenzar un programa de alta intensidad, pero mantener el que ya practicas es adecuado.',
                'Introduce la conciencia del suelo pélvico: respiración, relajación y señales de activación.',
                'Consolida la fuerza del tren inferior: sentadillas, peso muerto y zancadas con cargas moderadas y técnica controlada.',
                'El trabajo de core sigue siendo apropiado — evita ejercicios abdominales de muy alta intensidad o cualquier movimiento que produzca protrucción o "coning" en la línea media.',
                'Mecánica respiratoria: aprender a usar el diafragma y gestionar la presión intraabdominal es una habilidad fundamental para todo el embarazo.',
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
              Segundo trimestre (semanas 14–27): la ventana de entrenamiento
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Muchas mujeres se sienten mejor durante el segundo trimestre. Las náuseas suelen
              remitir, la energía regresa y el embarazo está avanzando sin restringir aún
              significativamente el movimiento. Con frecuencia es el periodo de entrenamiento más
              productivo del embarazo.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las adaptaciones clave comienzan a ser más relevantes a partir de la semana 16–18.
              El útero en crecimiento desplaza el centro de gravedad hacia adelante, lo que aumenta
              la carga lumbar y cambia la gestión del equilibrio. La relaxina continúa aumentando
              la laxitud articular, especialmente en las articulaciones sacroilíacas y la sínfisis
              del pubis — dato relevante al programar trabajo unilateral y movimientos laterales.
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Sustituye los ejercicios en decúbito supino por alternativas inclinadas o de pie a partir de la semana 16 aproximadamente.',
                'Adapta el cardio de impacto si resulta incómodo — la natación, caminar por el paseo de Salou o Cambrils y el ciclismo son excelentes alternativas.',
                'Continúa con la sobrecarga progresiva en el tren inferior — el cuerpo se adapta bien y mantener la fuerza de piernas tiene beneficios significativos en el posparto.',
                'Tren superior: ajusta las posiciones para acomodar el vientre; remos con cable, remos apoyados y press inclinado son opciones prácticas.',
                'Vigila signos de diástasis recti (protrucción en la línea media) durante cualquier ejercicio de carga troncal — modifica si aparecen.',
                'El trabajo de estabilidad de cadera se vuelve importante: ejercicios unilaterales, trabajo lateral con banda y ejercicios enfocados en glúteos.',
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
              Tercer trimestre (semanas 28–40+): comodidad, mantenimiento y preparación
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El tercer trimestre exige más creatividad en el entrenamiento que incremento de
              carga. El vientre restringe el movimiento, la disnea aumenta al comprimirse el
              diafragma y las molestias pueden ser significativas. El objetivo cambia: mantener
              lo conseguido, preparar el cuerpo para el parto y gestionar los síntomas típicos
              del embarazo avanzado.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La disfunción de la sínfisis del pubis (DSP) o el dolor de cintura pélvica (DCP)
              afectan a muchas mujeres en esta fase. El ejercicio debe adaptarse en consecuencia:
              los ejercicios unilaterales, las sentadillas con piernas muy separadas y las zancadas
              pueden sustituirse por trabajo bilateral, ejercicios sentados o apoyados y actividad
              en el agua.
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Reduce la carga y la intensidad si aumentan los síntomas — el objetivo es el mantenimiento y la comodidad, no el progreso.',
                'Continúa el fortalecimiento del tren inferior con modificaciones: sentadilla goblet, sentadilla en caja, prensa de piernas si está disponible.',
                'Caminar sigue siendo excelente — en terreno llano, por las mañanas en verano, aprovechando los paseos de la Costa Daurada.',
                'Suelo pélvico y respiración: continúa y progresa el trabajo de suelo pélvico, incluyendo estrategias de relajación para el parto.',
                'Movilidad suave: estiramientos de flexores de cadera, rotación torácica, trabajo de espalda alta.',
                'Respiración de preparación para el parto: respiración diafragmática y relajación pélvica practicada.',
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
              Contraindicaciones absolutas al ejercicio en el embarazo
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El ejercicio es apropiado para la gran mayoría de embarazos sin complicaciones.
              Sin embargo, ciertas condiciones requieren valoración médica previa o suponen la
              interrupción del entrenamiento:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Rotura de membranas o parto prematuro',
                'Placenta previa o sangrado vaginal inexplicado',
                'Preeclampsia o hipertensión gestacional',
                'Incompetencia cervical',
                'Gestación múltiple con factores de riesgo',
                'Diabetes tipo 1 descontrolada, enfermedad tiroidea u otras condiciones sistémicas',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Un entrenador personal orientado a la rehabilitación en Salou o Tarragona debe
              solicitar siempre el visto bueno del médico o la matrona antes de iniciar o
              continuar un programa cuando alguno de estos factores esté presente, y comunicarse
              de forma clara con el equipo sanitario responsable.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Coaching de ejercicio prenatal en Salou y la Costa Daurada
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Movement by Design ofrece coaching de ejercicio terapéutico prenatal para mujeres
              en Salou, Cambrils, Tarragona y toda la Costa Daurada — presencialmente o en línea.
              La programación se adapta trimestre a trimestre, con integración del suelo pélvico
              desde el inicio y coordinación con tu matrona o equipo obstétrico cuando es necesario.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Tanto si eres una deportista habitual que quiere entrenar con seguridad durante
              el embarazo, como si estás volviendo al movimiento por primera vez, el enfoque es
              siempre práctico, basado en la evidencia y adaptado a tu historial, síntomas y objetivos.
            </p>
          </div>

          <p className="mt-10 text-xs text-muted-grey leading-relaxed border-t border-soft-border pt-6">
            {MEDICAL_DISCLAIMER_ES}
          </p>
        </article>
      </Section>

      <Section background="sand">
        <CtaBlock
          lang="es"
          title="¿Lista para entrenar bien durante el embarazo?"
          body="Contacta para diseñar un programa adaptado a tu trimestre, síntomas y objetivos. Presencial en Salou y Cambrils, o en línea en toda la Costa Daurada."
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
          { name: 'Ejercicio durante el embarazo', path: `/es/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
