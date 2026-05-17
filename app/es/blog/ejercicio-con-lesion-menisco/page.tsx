import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import RelatedServices from '@/components/RelatedServices';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

const POST = {
  slug: 'ejercicio-con-lesion-menisco',
  title: 'Ejercicio con Lesión de Menisco | Entrenador Personal Salou – Movement by Design',
  description:
    'Cómo entrenar con seguridad con daño meniscal en la rodilla. Guía basada en evidencia de un entrenador personal orientado a la rehabilitación en Salou, Costa Daurada.',
  date: '2026-05-03',
  readingTime: '9 min de lectura',
  category: 'Lesión y Rehabilitación',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/es/blog/${POST.slug}/`,
  locale: 'es_ES',
  alternatePath: '/blog/exercise-with-meniscus-injury/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function EjercicioLesionMeniscoPage() {
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
            Ejercicio con lesión de menisco: cómo seguir entrenando sin empeorar la rodilla
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            Una rotura de menisco no tiene por qué poner fin a tu vida deportiva. Con un
            programa bien adaptado y un enfoque orientado a la rehabilitación, la mayoría de las
            personas con daño meniscal pueden continuar haciendo ejercicio, ganar fuerza
            significativa y mantener la salud articular a largo plazo.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Qué hace el menisco — y por qué importa para el ejercicio
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Los meniscos son dos cuñas de fibrocartílago con forma de C situadas entre el
              fémur y la tibia. Actúan como amortiguadores, distribuyen la carga compresiva,
              mejoran la congruencia articular y contribuyen a la propiocepción — la capacidad
              del cuerpo para detectar su propia posición. Esta última función suele pasarse por
              alto pero es crítica: el daño meniscal reduce la señalización propioceptiva de la
              rodilla, lo que aumenta el riesgo de lesión en las estructuras circundantes.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Las lesiones de menisco van desde cambios degenerativos menores (muy frecuentes
              por encima de los 40 años y a menudo asintomáticos) hasta roturas traumáticas agudas
              que requieren intervención quirúrgica. La mayoría de los problemas de menisco en una
              población activa se sitúan entre estos dos extremos: una rotura que da síntomas pero
              es manejable, con frecuencia mediante rehabilitación conservadora en lugar de cirugía.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La investigación es cada vez más clara: el ejercicio terapéutico es al menos tan
              eficaz como la cirugía artroscópica para la mayoría de las roturas degenerativas
              de menisco. La rodilla no necesita reposo — necesita cargarse correctamente.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Tipos de lesión de menisco y sus implicaciones para el entrenamiento
            </h2>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Roturas degenerativas (horizontales): las más frecuentes en adultos mayores de 40 años, a menudo asociadas con artrosis. Responden muy bien al ejercicio — el entrenamiento de fuerza progresivo con carga es el tratamiento de elección.',
                'Roturas periféricas (zona roja): ocurren en el borde externo donde existe aporte sanguíneo. Pueden cicatrizar con una gestión conservadora adecuada y responden bien a la carga progresiva.',
                'Roturas centrales (zona blanca): el limitado aporte sanguíneo reduce la capacidad de cicatrización. Las roturas centrales grandes o desplazadas pueden necesitar valoración quirúrgica, aunque muchas se manejan con ejercicio modificado.',
                'Roturas en asa de cubo: si provocan bloqueo articular o síntomas mecánicos significativos, la derivación quirúrgica es apropiada. Solo la modificación del ejercicio no es suficiente.',
                'Menisco posquirúrgico: tras meniscectomía o reparación, la carga debe aumentarse con mucha precaución y en coordinación con el cirujano y el fisioterapeuta.',
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
              Qué evitar y qué modificar
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El menisco se estresa principalmente en flexión máxima de rodilla bajo carga
              (sentadilla profunda, zancada completa) y durante movimientos de cizalla (pivotes,
              cambios de dirección). Los siguientes ajustes son generalmente apropiados:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Limita la flexión profunda de rodilla (más de 90°) bajo carga hasta que el rango sin dolor mejore.',
                'Evita los movimientos rotacionales de alto impacto: cortes laterales, saltos con giro, deportes de contacto.',
                'Reduce el impacto en el cardio: sustituye la carrera por caminar, ciclismo, natación o remo en la fase inicial.',
                'Evita girar sobre un pie fijo — sé consciente tanto en actividades cotidianas como en el entrenamiento.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Lo que no se evita — y que la investigación apoya sistemáticamente — es el
              fortalecimiento progresivo del miembro inferior. La debilidad de cuádriceps está
              fuertemente asociada tanto al riesgo de lesión de menisco como a los malos
              resultados tras el daño meniscal. Construir fuerza de cuádriceps es una prioridad,
              no un riesgo.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Prioridades del ejercicio: construir una rodilla resistente
            </h2>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              1. Fuerza de cuádriceps
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La extensión terminal de rodilla, la prensa de pierna, la extensión de pierna en
              sedestación y las sentadillas en rango parcial son buenas opciones iniciales.
              Progresa hacia sentadillas completas y subidas a escalón según la tolerancia.
              Los cuádriceps son los principales amortiguadores de la rodilla y su debilidad
              contribuye directamente al estrés articular.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              2. Fuerza de isquiotibiales y cadera
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La extensión de cadera, el peso muerto rumano, las Nordic curls (progresadas con
              cuidado) y el trabajo de abducción de cadera reducen la carga distribuida a través
              de la rodilla. Los glúteos e isquiotibiales son coestabilizadores de la rodilla —
              su papel se subestima con frecuencia en la rehabilitación del menisco.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              3. Propiocepción y control neuromuscular
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              El daño meniscal reduce la aferencia propioceptiva de la rodilla. El equilibrio
              unilateral, el entrenamiento en superficie inestable (tabla de equilibrio, Bosu)
              y los ejercicios funcionales en apoyo monopodal ayudan a restaurar esta función
              perdida. No es opcional — es un componente crítico de la reducción del riesgo
              de relesión. Esto se conoce en fisioterapia del ejercicio como reentrenamiento
              neuromuscular.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              4. Progresión gradual de la carga
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              La sobrecarga progresiva se aplica aquí como en cualquier otro entrenamiento.
              Empieza con rangos y cargas sin dolor, luego añade sistemáticamente carga,
              profundidad y complejidad a lo largo de semanas. El dolor durante el ejercicio
              es una señal para modificar, no para ignorar — aunque una ligera agujetas en las
              24 horas siguientes que se resuelve rápidamente es generalmente aceptable.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Tren superior y acondicionamiento: lo que sigue disponible
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Una lesión de menisco no significa tres meses de reposo total. Los ejercicios de
              empuje, tracción y remo del tren superior generalmente no se ven afectados. El
              acondicionamiento cardiovascular puede mantenerse mediante ergómetros de tren
              superior, natación y ciclismo con el sillín alto (reduciendo el rango de flexión
              de rodilla). La condición aeróbica no tiene por qué deteriorarse durante una fase
              de rehabilitación de rodilla.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Para los clientes de Salou y toda la Costa Daurada, la actividad acuática es una
              ventaja significativa durante las fases de rehabilitación — la natación y la
              hidroterapia aportan carga a través de la flotabilidad, reducen las fuerzas
              compresivas en la articulación y mantienen el acondicionamiento cardiovascular de
              forma excelente.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Entrenador personal en Salou: coordinando tu rehabilitación de rodilla
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Un entrenador personal orientado a la rehabilitación en Salou o Tarragona trabaja
              junto a — y no en lugar de — tu fisioterapeuta o equipo de traumatología. Si tienes
              un diagnóstico de menisco, el fisioterapeuta establece los parámetros; el entrenador
              aplica un ejercicio estructurado y progresivo dentro de ellos.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Muchos clientes de Tarragona y la Costa Daurada se benefician de este modelo:
              evaluación fisioterapéutica ocasional combinada con fuerza y acondicionamiento bien
              programados que respetan la articulación mientras construyen capacidad real a su
              alrededor. El objetivo es siempre ampliar lo que la rodilla puede hacer — no
              simplemente protegerla de todo.
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
          title="¿Entrenando con una lesión de rodilla en Salou o en línea?"
          body="Obtén un programa adaptado a tu diagnóstico de menisco — basado en evidencia, progresivo y construido en torno a lo que tu rodilla puede hacer ahora mismo."
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
          { name: 'Ejercicio con lesión de menisco', path: `/es/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
