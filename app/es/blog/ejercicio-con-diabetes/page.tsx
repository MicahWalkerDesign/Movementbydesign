import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const POST = {
  slug: 'ejercicio-con-diabetes',
  title: 'Ejercicio con Diabetes Tipo 2 | Entrenador Personal Salou – Movement by Design',
  description:
    'Cómo hacer ejercicio de forma segura y eficaz con diabetes tipo 2. Guía basada en evidencia sobre sensibilidad a la insulina y entrenamiento en Salou, Costa Daurada.',
  date: '2026-05-05',
  readingTime: '10 min de lectura',
  category: 'Poblaciones Especiales',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/es/blog/${POST.slug}/`,
  locale: 'es_ES',
  alternatePath: '/blog/exercise-with-diabetes/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function EjercicioConDiabetesPage() {
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
            Ejercicio con diabetes tipo 2: la herramienta más poderosa que probablemente estás infrautilizando
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            El ejercicio no es un complemento de estilo de vida para las personas con diabetes
            tipo 2. Es una intervención con un efecto farmacológicamente significativo — que
            mejora la sensibilidad a la insulina, reduce la HbA1c, favorece el control del peso
            y disminuye el riesgo cardiovascular con una eficacia comparable a la medicación
            en muchos casos.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Por qué el ejercicio es tan eficaz para la diabetes tipo 2
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La diabetes tipo 2 se caracteriza por la resistencia a la insulina — las células
              no responden con normalidad a la insulina, lo que lleva a una glucemia elevada
              y al deterioro progresivo de la función de las células beta. El ejercicio aborda
              la resistencia a la insulina a través de varios mecanismos paralelos que ningún
              medicamento individual puede replicar.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Durante el ejercicio aeróbico, las células musculares pueden captar glucosa
              mediante una vía independiente de la insulina (translocación de GLUT-4 mediada
              por la activación de AMPK). Esto significa que la glucemia puede descender durante
              y después del cardio incluso en presencia de resistencia a la insulina — un efecto
              de relevancia clínica significativa.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El entrenamiento de fuerza construye masa muscular esquelética, que es el principal
              lugar de eliminación de glucosa estimulada por insulina. Más masa muscular significa
              un mayor sumidero metabólico para la glucosa — y una mejor gestión de la glucemia
              a largo plazo, incluso en reposo. La combinación de entrenamiento aeróbico y de
              resistencia produce sistemáticamente mejores resultados glucémicos que cualquiera
              de las dos modalidades por separado.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El ejercicio regular también ha demostrado reducir la HbA1c (el promedio de glucemia
              de tres meses) en aproximadamente un 0,6–0,8% en los metaanálisis — comparable al
              efecto de añadir un segundo medicamento oral, sin ninguno de sus efectos secundarios.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Consideraciones de seguridad: lo que debes saber antes de entrenar
            </h2>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Riesgo de hipoglucemia
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las personas tratadas con sulfonilureas o insulina tienen riesgo de hipoglucemia
              durante el ejercicio. Las que toman solo metformina, o con manejo exclusivamente
              por dieta y ejercicio, tienen un riesgo mucho menor. Sea cual sea el caso, es
              buena práctica:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Medir la glucemia antes del ejercicio — lo ideal es comenzar entre 5 y 13 mmol/L.',
                'Llevar hidratos de carbono de absorción rápida durante y después de las sesiones.',
                'Evitar el entrenamiento en ayunas si se toman medicamentos que aumentan el riesgo de hipoglucemia.',
                'Conocer los signos: temblores, sudoración, confusión, taquicardia.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Cribado cardiovascular
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La diabetes tipo 2 aumenta significativamente el riesgo cardiovascular. Antes de
              iniciar un programa de ejercicio estructurado — especialmente de intensidad moderada
              a alta — es apropiado obtener el visto bueno del médico de cabecera. Deben revisarse
              el ECG en reposo, la tensión arterial y el historial cardiovascular. Un entrenador
              personal orientado a la rehabilitación siempre solicitará esto antes de prescribir
              trabajo de mayor intensidad.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Neuropatía periférica y cuidado de los pies
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La neuropatía periférica diabética reduce la sensación en los pies. El calzado
              adecuado durante el ejercicio, la inspección de los pies tras cada sesión y evitar
              actividades de alto impacto que puedan causar ampollas o lesiones por presión son
              consideraciones importantes. Esto no limita las opciones de entrenamiento disponibles
              — simplemente requiere atención al detalle en la selección del ejercicio y el calzado.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Programación del ejercicio para la diabetes tipo 2: el enfoque basado en evidencia
            </h2>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Ejercicio aeróbico
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La ADA (Asociación Americana de Diabetes) y el ACSM recomiendan al menos 150
              minutos semanales de actividad aeróbica de intensidad moderada, distribuidos en
              la mayoría de los días. No más de dos días consecutivos sin ejercicio, ya que el
              efecto hipoglucemiante de una sola sesión dura aproximadamente 24–72 horas.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Buenas opciones en Salou y la Costa Daurada: caminar por el paseo marítimo
              (bajo impacto, accesible, muy práctico), nadar, ciclismo — ya sea en carretera
              hacia el interior de Tarragona o en bicicleta estática — y clases de fitness
              grupal a intensidad moderada.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Entrenamiento de fuerza
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Dos o tres sesiones semanales, trabajando los principales grupos musculares.
              La sobrecarga progresiva se aplica aquí como en todo entrenamiento de fuerza —
              aumentos sistemáticos de carga a lo largo de semanas y meses. Los movimientos
              compuestos son los más eficaces: sentadillas, peso muerto, remos, presses.
              Reclutan grandes masas musculares y producen la mayor respuesta metabólica.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Construir y mantener masa muscular magra es posiblemente la estrategia más
              importante a largo plazo para el manejo de la diabetes tipo 2 a través del
              ejercicio. El músculo es el destino de la glucemia elevada — invertir en él
              es invertir en el control glucémico.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Entrenamiento interválico de alta intensidad (HIIT)
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El HIIT produce mejoras glucémicas comparables o superiores al ejercicio continuo
              de intensidad moderada en menos tiempo. Es apropiado para personas con diabetes
              tipo 2 que han recibido el alta médica y tienen una base aeróbica sólida. Hay que
              tener en cuenta que los esfuerzos anaeróbicos intensos pueden causar una elevación
              transitoria de la glucemia (por liberación hepática de glucosa mediada por
              adrenalina) antes del posterior descenso — esto es normal y no es una razón para
              evitar el HIIT.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Estrategias prácticas para el ejercicio cotidiano
            </h2>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Rompe el tiempo sedentario: incluso breves períodos de movimiento cada 30 minutos mejoran la glucemia posprandial en personas con diabetes tipo 2. Un paseo de diez minutos después de las comidas es una de las intervenciones individuales más eficaces disponibles.',
                'Entrenamiento matutino: el ejercicio en ayunas o a primera hora de la mañana puede mejorar el control de la glucemia durante todo el día.',
                'Consistencia sobre intensidad: tres sesiones moderadas a la semana de forma consistente superan en resultados glucémicos a una sesión heroica seguida de cinco días de inactividad.',
                'Monitoriza la glucemia posterior al ejercicio: aprende tu respuesta individual. El seguimiento de la glucemia antes y dos horas después del ejercicio te ayuda a entender cómo responde tu cuerpo a los distintos tipos de entrenamiento.',
                'Trabaja con tu equipo médico: las dosis de medicación, especialmente la insulina, pueden necesitar ajuste a medida que mejora la forma física y aumenta la sensibilidad a la insulina.',
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
              Coaching de ejercicio para la diabetes en Salou y Tarragona
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Movement by Design ofrece coaching de ejercicio basado en ciencias del ejercicio
              para personas con diabetes tipo 2 en Salou, Cambrils, Tarragona y toda la Costa
              Daurada. Las sesiones se estructuran para complementar tu tratamiento médico,
              incluyen los protocolos de seguridad apropiados y se construyen en torno a tu
              respuesta individual al ejercicio.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Tanto si acabas de ser diagnosticado y quieres entender lo que el ejercicio puede
              hacer por tu condición, como si llevas tiempo con diabetes tipo 2 y deseas un
              programa más estructurado, el enfoque es siempre basado en la evidencia,
              aplicado de forma práctica y coordinado con tu médico o endocrinólogo cuando
              corresponde.
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
          title="¿Gestionando la diabetes tipo 2 con ejercicio en Salou?"
          body="Coaching de ejercicio estructurado y basado en evidencia, adaptado a tu diagnóstico, medicación y objetivos. Presencial en la Costa Daurada o en línea."
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
          { name: 'Ejercicio con diabetes tipo 2', path: `/es/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
