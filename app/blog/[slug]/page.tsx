import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import {
  buildMetadata,
  articleSchema,
  breadcrumbSchema,
} from '@/lib/seo';
import { POSTS, getPost } from '@/lib/posts';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Params },
): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
  });
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-14 md:pt-20 pb-10 md:pb-14 max-w-3xl">
          <Link href="/blog/" className="text-sm text-coastal-blue hover:text-deep-navy">
            ← All articles
          </Link>
          <span className="mt-6 block text-xs uppercase tracking-label text-coastal-blue">
            {formatDate(post.date)} · {post.readingTime}
          </span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-3xl md:text-5xl text-deep-navy leading-[1.1]">
            {post.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">{post.intro}</p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">
          {post.body.map((block, i) => (
            <div key={i} className="mb-9">
              {block.heading && (
                <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
                  {block.heading}
                </h2>
              )}
              {block.paragraphs.map((p, idx) => (
                <p key={idx} className="text-charcoal/90 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {block.bullets && (
                <ul className="space-y-2 mt-2">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-charcoal/90">
                      <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="mt-10 text-xs text-muted-grey leading-relaxed border-t border-soft-border pt-6">
            {MEDICAL_DISCLAIMER}
          </p>
        </article>
      </Section>

      {others.length > 0 && (
        <Section background="sand">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-deep-navy">
            Keep reading
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="card h-full flex flex-col">
                  <span className="text-xs uppercase tracking-label text-coastal-blue">
                    {p.readingTime}
                  </span>
                  <h3 className="mt-3 font-heading font-semibold text-lg text-deep-navy">
                    {p.title}
                  </h3>
                  <span className="mt-auto pt-4 text-coastal-blue text-sm">Read →</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section background="warm-white">
        <CtaBlock />
      </Section>

      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}/`,
          datePublished: post.date,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />
    </>
  );
}
