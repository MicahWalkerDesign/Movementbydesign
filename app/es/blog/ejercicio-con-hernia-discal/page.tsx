import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const POST = {
  slug: 'ejercicio-con-hernia-discal',
  title: 'Ejercicio con Hernia Discal | Entrenador Personal Salou – Movement by Design',
  description:
    'Ejercicio seguro y eficaz con hernia discal lumbar. Entrenamiento orientado a la rehabilitación en Salou — construye capacidad espinal, reduce el dolor, recupera la actividad.',
  date: '2026-05-04',
  readingTime: '10 min de lectura',
  category: 'Lesión y Rehabilitación',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/es/blog/${POST.slug}/`,
  locale: 'es_ES',
  alternatePath: '/blog/exercise-with-herniated-disc/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function EjercicioHerniaDiscalPage() {
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
            Ejercicio con hernia discal: construir capacidad espinal sin miedo
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            Un diagnóstico de hernia discal puede sentirse como una condena. No lo es. Con la
            comprensión adecuada de la mecánica espinal, una selección correcta de ejercicios
            y una carga progresiva, la mayoría de las personas con hernia discal pueden volver
            a una actividad significativa — y a menudo terminan con una espalda más fuerte y
            resistente que antes.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Qué ocurre realmente con una hernia discal
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Los discos intervertebrales son estructuras fibrocartilaginosas que se sitúan entre
              las vértebras y actúan como amortiguadores de la columna. Cada disco tiene un
              anillo externo resistente (anulus fibrosus) y un núcleo interior gelatinoso
              (nucleus pulposus). Una hernia ocurre cuando el núcleo presiona a través de una
              sección debilitada del anillo.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las hernias se producen con mayor frecuencia en L4-L5 y L5-S1 en la columna
              lumbar, aunque las hernias cervicales (típicamente C5-C6 o C6-C7) también son
              comunes. El dolor asociado a una hernia proviene de dos fuentes principales: la
              compresión directa de la raíz nerviosa (que causa dolor irradiado, entumecimiento
              o debilidad en un miembro) y los mediadores inflamatorios liberados por el material
              discal.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Un dato crucial: las hernias discales se resuelven espontáneamente en una proporción
              significativa de casos. Los estudios con resonancia magnética demuestran que el
              material discal es reabsorbido a lo largo de meses en muchos pacientes. Esto no
              es una razón para ignorar los síntomas — pero sí es una razón para afrontar el
              diagnóstico con un optimismo basado en la evidencia, en lugar de miedo.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              La evidencia a favor del ejercicio frente al reposo
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El reposo en cama fue la recomendación estándar para la hernia discal durante
              décadas. La evidencia ha revertido esta postura de forma contundente. Mantenerse
              activo, conservar el movimiento y cargar la columna progresivamente produce mejores
              resultados — tanto en dolor como en función — que el reposo prolongado.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El ejercicio reduce el dolor a través de múltiples mecanismos: disminuye las
              citocinas inflamatorias alrededor del disco afectado, restaura la aferencia
              propioceptiva a la columna, construye las estructuras musculares de soporte de
              las vértebras lumbares y — quizás lo más importante — reduce el comportamiento
              de evitación por miedo que contribuye significativamente al dolor crónico en las
              condiciones espinales.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Un entrenador personal orientado a la rehabilitación en Salou o Tarragona puede
              estructurar un programa de carga progresiva que opere dentro de tu tolerancia
              al dolor actual mientras amplía sistemáticamente lo que tu columna puede hacer.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Entender la preferencia direccional
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Uno de los conceptos clínicos más útiles para el manejo de la hernia discal es la
              preferencia direccional — la observación de que muchas personas con hernia discal
              tienen una dirección de movimiento que reduce su dolor y centraliza los síntomas
              (mueve el dolor del miembro hacia la columna, lo que indica mejoría).
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Para la mayoría de las hernias lumbares, los movimientos en extensión (press en
              prono, caminar, estar de pie) reducen el dolor más que la flexión. Esta es la
              base del método McKenzie y está respaldada por evidencia clínica sustancial.
              Sin embargo, una minoría de pacientes prefiere la flexión — por lo que el
              principio es la valoración individual, no la prescripción universal.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Selección de ejercicios: qué ayuda y qué modificar
            </h2>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Generalmente apropiado (con buena técnica)
            </h3>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Caminar: uno de los mejores ejercicios disponibles. Favorece la nutrición discal a través del movimiento, aumenta la resistencia aeróbica y reduce la percepción del dolor.',
                'Patrones de bisagra de cadera: peso muerto rumano y variaciones de peso muerto con columna neutra — construye la fuerza de la cadena posterior, esencial para el soporte lumbar.',
                'Fortalecimiento de glúteos y cadera: puentes, hip thrust, clamshells — críticos para reducir la carga lumbar.',
                'Estabilidad de core (sin abdominales): dead bug, pallof press, bird-dog, variaciones de plancha — construye estabilidad espinal sin carga en flexión máxima.',
                'Natación: excelente en la fase aguda — el agua sostiene la columna permitiendo el movimiento.',
                'Bicicleta (upright o reclinada, según la preferencia direccional).',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Requiere modificación o precaución
            </h3>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Flexión espinal pesada bajo carga: abdominales, crunches, giros rusos — la carga en flexión espinal alta está contraindicada en la fase aguda.',
                'Flexión espinal cargada a primera hora de la mañana: los discos están más hidratados y vulnerables tras dormir; evita el levantamiento de cargas en la primera hora después de despertar.',
                'Actividades de alto impacto en la fase inicial: correr, saltar, deportes de raqueta.',
                'Carga axial elevada (sentadilla con barra pesada) hasta que la estabilidad espinal esté establecida.',
                'Apnea con cargas máximas hasta que la columna tolere bien la carga.',
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
              Síntomas neurológicos: cuándo derivar de inmediato
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La mayoría de las hernias discales se manejan de forma conservadora. Sin embargo,
              los siguientes síntomas requieren valoración médica urgente y son contraindicaciones
              absolutas al ejercicio:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Síndrome de cauda equina: disfunción vesical o intestinal, anestesia en silla de montar (entumecimiento alrededor del perineo). Es una urgencia médica.',
                'Déficit neurológico progresivo: debilidad en un miembro inferior que aumenta rápidamente.',
                'Debilidad o entumecimiento bilateral en las piernas.',
                'Cualquier pérdida de control de vejiga o intestino.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Un entrenador orientado a la rehabilitación siempre conoce este límite y nunca
              programa ejercicio para un cliente que presenta estos síntomas sin un alta médica
              explícita.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              El objetivo a largo plazo: una columna que dure
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La conclusión más importante de la evidencia sobre la hernia discal es esta:
              el objetivo de la rehabilitación no es solo salir del dolor. Es construir una
              espalda que tolere bien la carga durante el resto de tu vida.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Esto significa que la sobrecarga progresiva se aplica aquí como en cualquier
              otro entrenamiento. A lo largo de meses, los patrones de bisagra con carga, los
              porteos y los ejercicios compuestos del tren inferior deben ir aumentando en
              intensidad. Las personas que se recuperan de hernias discales y vuelven al
              entrenamiento de fuerza pesado a menudo refieren que su espalda es más robusta
              que antes de la lesión — porque por fin abordaron el déficit de capacidad que
              contribuyó al episodio original.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El coaching de fisioterapia del ejercicio en Salou o Tarragona — con un entrenador
              que entiende la mecánica espinal — te da la estructura para llegar ahí de forma
              segura y progresiva.
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
          title="¿Entrenando con una hernia discal en la Costa Daurada?"
          body="Obtén un programa orientado a la rehabilitación adaptado a tu diagnóstico, síntomas y objetivos. Presencial en Salou y Tarragona, o en línea desde cualquier lugar."
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
          { name: 'Ejercicio con hernia discal', path: `/es/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
