import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import RelatedServices from '@/components/RelatedServices';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const POST = {
  slug: 'ejercicio-autismo-ninos',
  title: 'Ejercicio para Niños con Autismo | Entrenador Personal Salou – Movement by Design',
  description:
    'Movimiento sensorial y ejercicio para niños con autismo en Salou. Actividad física estructurada y basada en evidencia de un entrenador de poblaciones especiales en la Costa Daurada.',
  date: '2026-05-06',
  readingTime: '10 min de lectura',
  category: 'Poblaciones Especiales',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/es/blog/${POST.slug}/`,
  locale: 'es_ES',
  alternatePath: '/blog/exercise-autism-children/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function EjercicioAutismoNinosPage() {
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
            Ejercicio para niños con autismo: movimiento sensorial que construye confianza
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            Los niños con autismo se benefician enormemente de la actividad física estructurada
            — pero el gimnasio o entorno deportivo convencional suele estar mal diseñado para
            sus necesidades sensoriales y sociales. Con el entorno adecuado, el enfoque correcto
            y un entrenador que comprende la neurodivergencia, el movimiento puede ser transformador.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Por qué el ejercicio es importante para los niños con autismo
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La investigación sobre actividad física y trastorno del espectro autista (TEA) es
              sistemáticamente positiva. Se ha demostrado que el ejercicio estructurado regular
              reduce las conductas estereotipadas, mejora la atención y las funciones ejecutivas,
              disminuye la ansiedad, favorece el desarrollo de habilidades sociales y mejora
              significativamente la calidad del sueño — todas áreas en las que los niños con
              autismo frecuentemente presentan dificultades.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El desarrollo motor es también un área de dificultad frecuente en el TEA. Las
              dificultades con la planificación motora (dispraxia), la coordinación, la
              coordinación bilateral y el equilibrio son comunes y pueden limitar la participación
              en deportes y actividades sociales, lo que a su vez aumenta el aislamiento. Una
              programación de ejercicio que aborde directamente estas cualidades motoras puede
              tener efectos positivos en cascada sobre la calidad de vida.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Más allá de los resultados clínicos, hay algo más fundamental: los niños con autismo,
              como todos los niños, merecen acceso a un movimiento que se sienta bien, que
              construya confianza y que les dé un cuerpo en el que confíen. Este no es un objetivo
              clínico — es un objetivo humano básico.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Entender el procesamiento sensorial en el TEA
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las diferencias en el procesamiento sensorial son una característica definitoria del
              TEA. Muchos niños con autismo son hipersensibles o hiposensibles a los estímulos
              sensoriales — y con frecuencia ambos, en distintos canales sensoriales.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Los sistemas sensoriales relevantes para el ejercicio incluyen:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Táctil (tacto): algunos niños encuentran abrumadoras ciertas texturas, superficies de equipamiento o el contacto físico. Otros buscan la presión profunda (la carga propioceptiva les resulta reguladora y calmante).',
                'Auditivo: los gimnasios concurridos, la música alta, los espacios con eco y los sonidos imprevisibles pueden ser muy desreguladores. Los entornos tranquilos y predecibles funcionan mejor.',
                'Vestibular (equilibrio/movimiento): girar, columpiarse, rodar y los retos de equilibrio pueden calmar o abrumar — saber cuál aplica a cada niño en particular es fundamental.',
                'Propioceptivo: el ejercicio de resistencia, el "trabajo pesado" (transportar, empujar, trepar) y las actividades de compresión suelen ser profundamente reguladoras para los niños con autismo.',
                'Visual: la iluminación intensa, los entornos visualmente cargados y los estímulos visuales impredecibles pueden aumentar la activación y reducir la capacidad de concentrarse en las tareas de movimiento.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Un entrenador con sensibilidad sensorial no se limita a evitar los desencadenantes
              — utiliza los estímulos sensoriales de forma estratégica. La carga propioceptiva y
              de presión profunda al inicio de una sesión puede regular el sistema nervioso y
              mejorar la concentración para el trabajo que sigue.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Principios del coaching de ejercicio eficaz para niños con autismo
            </h2>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Predecibilidad y rutina
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Los niños con autismo suelen prosperar con la predecibilidad. Las sesiones deben
              seguir una estructura consistente: la misma secuencia de calentamiento, el mismo
              diseño espacial, las mismas señales. Los cambios deben introducirse gradualmente
              y explicarse con antelación. Los horarios visuales que muestran la estructura de
              la sesión son una herramienta sencilla y muy efectiva.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Instrucciones claras y concretas
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las señales de entrenamiento abstractas ("activa el core", "contrae los glúteos")
              no son eficaces. Funciona mejor la instrucción concreta y literal: "empuja los
              pies contra el suelo", "lleva esto al otro lado de la sala", "salta y aterriza
              sobre los dos pies". La demostración es poderosa — mostrar suele ser más eficaz
              que decir.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Análisis de tareas y encadenamiento
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las habilidades de movimiento complejas deben dividirse en pequeños pasos discretos
              y enseñarse de forma secuencial. Por ejemplo, una sentadilla se enseña primero como
              "pies a la anchura de los hombros", luego "mira hacia adelante", luego "siéntate
              hacia atrás y hacia abajo". Dominar cada paso antes de combinarlos respeta las
              diferencias de aprendizaje motor frecuentemente presentes en el TEA.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Refuerzo positivo
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El feedback positivo específico e inmediato — "ese aterrizaje fue muy controlado,
              muy bien" — es mucho más eficaz que el elogio vago. Entender qué motiva a cada
              niño individualmente (elogio verbal, pegatinas, una actividad específica que le
              gusta) y usarlo de forma consistente construye el compromiso y la disposición a
              intentar nuevos retos.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Gestión de la frustración y la regulación
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las nuevas habilidades motoras son genuinamente difíciles. Los niños con autismo
              pueden desregularse cuando no consiguen realizar una tarea. Un buen entrenador
              tiene estrategias: descomponer la tarea más, cambiar a una actividad conocida,
              utilizar la carga propioceptiva para regular antes de volver al reto. Saber cuándo
              exigir y cuándo dar un paso atrás es una habilidad fundamental del coaching.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Cómo es el ejercicio sensorial en la práctica
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las sesiones de ejercicio para niños con autismo en Salou o a lo largo de la
              Costa Daurada pueden incluir:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Movimiento al aire libre en espacios tranquilos: parques, playa en horas de poca afluencia, zonas abiertas y silenciosas — lejos de entornos ruidosos y concurridos.',
                'Circuitos de obstáculos: combinan habilidades motoras (gatear, saltar, equilibrarse, trepar) con retos propioceptivos en una secuencia predecible.',
                'Habilidades con balón y juegos de coordinación: juegos de diana, atrapar, rodar — actividades con causa y efecto claros que se adaptan a distintos niveles de habilidad.',
                '"Trabajo pesado": transportar balones medicinales, empujar resistencia, arrastrar — carga propioceptiva que muchos niños con autismo encuentran reguladora y agradable.',
                'Actividad acuática: la natación suele ser muy reguladora y proporciona una profunda estimulación propioceptiva y táctil en un entorno predecible.',
                'Juego de movimiento estructurado: para niños más pequeños o con mayor afectación, juego de movimiento estructurado utilizando camas elásticas, patinetes, barras de equilibrio y estructuras de escalada.',
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
              Trabajar con las familias y el equipo de apoyo más amplio
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El coaching de ejercicio para un niño con autismo no se produce de forma aislada.
              Los padres y cuidadores son socios en el proceso — conocen a su hijo mejor que
              cualquier entrenador, y sus conocimientos sobre las preferencias sensoriales,
              los desencadenantes, las estrategias de regulación y los patrones cotidianos son
              esenciales para una programación eficaz.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Cuando el niño también trabaja con un terapeuta ocupacional, logopeda o analista
              de conducta aplicada (ABA), la coordinación con ese equipo mejora los resultados.
              Un entrenador personal orientado a la rehabilitación en Salou que trabaje con niños
              con autismo debe comprender estas relaciones profesionales y comunicarse a través
              de ellas cuando sea adecuado.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Movement by Design trabaja con familias en Tarragona, Cambrils, Salou y la Costa
              Daurada en general, en inglés, alemán y español. Las sesiones pueden realizarse
              en un espacio exterior tranquilo, en un gimnasio en casa o en línea para el
              coaching de los padres en actividades de movimiento en casa.
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
          title="Coaching de ejercicio sensorial en Salou y la Costa Daurada"
          body="Sesiones de movimiento estructuradas para niños con autismo — adaptadas al perfil sensorial, estilo de comunicación y objetivos de tu hijo. Presencial o en línea."
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
          { name: 'Ejercicio para niños con autismo', path: `/es/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
