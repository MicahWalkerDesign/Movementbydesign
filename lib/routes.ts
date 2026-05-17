/**
 * Route map for the bilingual site. English lives at root paths; Spanish
 * lives under /es/ with localised slugs (better for ES SEO).
 *
 * Each entry pairs an English path with its Spanish counterpart so the
 * language switcher can move users between equivalents.
 */
export const ROUTES = [
  { en: '/', es: '/es/' },
  { en: '/personal-training-salou/', es: '/es/entrenador-personal-salou/' },
  { en: '/personal-trainer-cambrils/', es: '/es/entrenador-personal-cambrils/' },
  { en: '/personal-trainer-la-pineda/', es: '/es/entrenador-personal-la-pineda/' },
  { en: '/personal-trainer-vila-seca/', es: '/es/entrenador-personal-vila-seca/' },
  { en: '/personal-trainer-reus/', es: '/es/entrenador-personal-reus/' },
  { en: '/personal-trainer-tarragona/', es: '/es/entrenador-personal-tarragona/' },
  { en: '/personal-trainer-miami-platja/', es: '/es/entrenador-personal-miami-platja/' },
  { en: '/personal-trainer-mont-roig/', es: '/es/entrenador-personal-mont-roig/' },
  { en: '/small-group-training-salou/', es: '/es/entrenamiento-grupo-reducido-salou/' },
  { en: '/english-speaking-personal-trainer-costa-daurada/', es: '/es/' },
  { en: '/online-coaching/', es: '/es/coaching-online/' },
  { en: '/functional-training/', es: '/es/entrenamiento-funcional/' },
  { en: '/injury-prevention/', es: '/es/prevencion-lesiones/' },
  { en: '/nutrition-habits/', es: '/es/nutricion-habitos/' },
  { en: '/special-populations-exercise/', es: '/es/poblaciones-especiales/' },
  { en: '/about/', es: '/es/sobre-mi/' },
  { en: '/contact/', es: '/es/contacto/' },
  { en: '/blog/', es: '/es/blog/' },
] as const;

export type Locale = 'en' | 'es';

/** Detect language from a pathname (handles both basePath and unprefixed). */
export function localeFromPath(pathname: string): Locale {
  // Strip optional basePath like /Movementbydesign
  const stripped = pathname.replace(/^\/Movementbydesign/, '');
  return stripped.startsWith('/es/') || stripped === '/es' ? 'es' : 'en';
}

/** Find the equivalent path in the other language. */
export function alternatePath(pathname: string): string {
  const stripped = pathname.replace(/^\/Movementbydesign/, '') || '/';
  const lang = localeFromPath(stripped);
  // Try exact match in current language → return other-language path
  const exact = ROUTES.find((r) => r[lang] === stripped);
  if (exact) return exact[lang === 'en' ? 'es' : 'en'];
  // Fallback: language root
  return lang === 'en' ? '/es/' : '/';
}

/** Quick lookup to build localised internal links from an EN path. */
export function localised(enPath: string, lang: Locale): string {
  if (lang === 'en') return enPath;
  const r = ROUTES.find((x) => x.en === enPath);
  return r ? r.es : enPath;
}
