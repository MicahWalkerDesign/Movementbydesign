import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { POSTS } from '@/lib/posts';
import { POSTS_ES } from '@/lib/posts-es';

const STATIC_PATHS = [
  '/',
  '/personal-training-salou/',
  '/personal-trainer-cambrils/',
  '/small-group-training-salou/',
  '/online-coaching/',
  '/functional-training/',
  '/injury-prevention/',
  '/nutrition-habits/',
  '/special-populations-exercise/',
  '/about/',
  '/contact/',
  '/blog/',
];

const ES_STATIC_PATHS = [
  '/es/',
  '/es/entrenador-personal-salou/',
  '/es/entrenador-personal-cambrils/',
  '/es/entrenamiento-grupo-reducido-salou/',
  '/es/coaching-online/',
  '/es/entrenamiento-funcional/',
  '/es/prevencion-lesiones/',
  '/es/nutricion-habitos/',
  '/es/poblaciones-especiales/',
  '/es/sobre-mi/',
  '/es/contacto/',
  '/es/blog/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_PATHS.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p === '/' ? 1 : 0.8,
  }));

  const esStaticEntries = ES_STATIC_PATHS.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p === '/es/' ? 0.9 : 0.7,
  }));

  const blogEntries = POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const esBlogEntries = POSTS_ES.map((post) => ({
    url: `${SITE.url}/es/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...esStaticEntries, ...blogEntries, ...esBlogEntries];
}
