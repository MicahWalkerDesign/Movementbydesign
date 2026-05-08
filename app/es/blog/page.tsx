import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { POSTS_ES } from '@/lib/posts-es';

const PATH = '/es/blog/';

export const metadata: Metadata = buildMetadata({
  title: 'Blog | Movement by Design',
  description:
    'Artículos prácticos sobre entrenamiento personal en Salou, entrenamiento funcional, prevención de lesiones, ciencias del ejercicio y coaching para expats en la Costa Daurada.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/blog/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BlogIndexEs() {
  const posts = [...POSTS_ES].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-8 md:pb-10">
          <span className="eyebrow">Diario</span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-deep-navy max-w-4xl leading-[1.1]">
            Notas sobre movimiento, entrenamiento y coaching
          </h1>
          <p className="mt-5 prose-body max-w-prose">
            Escritura práctica y sin prisas sobre entrenamiento personal en Salou, entrenamiento funcional, prevención de lesiones, coaching para poblaciones especiales y vida en la Costa Daurada.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/es/blog/${p.slug}/`}
                className="card flex flex-col h-full focus-visible:outline-coastal-blue"
              >
                <span className="text-xs uppercase tracking-label text-coastal-blue">
                  {formatDate(p.date)} · {p.readingTime}
                </span>
                <h2 className="mt-3 font-heading font-semibold text-xl md:text-2xl text-deep-navy leading-snug">
                  {p.title}
                </h2>
                <p className="mt-3 text-charcoal/85 leading-relaxed">{p.description}</p>
                <span className="mt-5 text-coastal-blue font-medium">Leer artículo →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/es/' },
          { name: 'Blog', path: PATH },
        ])}
      />
    </>
  );
}
