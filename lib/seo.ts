import type { Metadata } from 'next';
import { SITE } from './site';

type SeoArgs = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  /** ISO language code for OG locale (e.g. 'en_GB', 'es_ES'). Defaults to 'en_GB'. */
  locale?: 'en_GB' | 'es_ES';
  /** Path of the equivalent page in the other language, for hreflang. */
  alternatePath?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  locale = 'en_GB',
  alternatePath,
}: SeoArgs): Metadata {
  const url = `${SITE.url}${path}`;
  const image = ogImage || `${SITE.url}/og-default.svg`;

  const languages: Record<string, string> = {};
  if (alternatePath) {
    if (locale === 'en_GB') {
      languages['en'] = url;
      languages['es'] = `${SITE.url}${alternatePath}`;
    } else {
      languages['es'] = url;
      languages['en'] = `${SITE.url}${alternatePath}`;
    }
    languages['x-default'] = locale === 'en_GB' ? url : `${SITE.url}${alternatePath}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(Object.keys(languages).length ? { languages } : {}),
    },
    metadataBase: new URL(SITE.url),
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: '€€€',
    image: `${SITE.url}/og-default.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.googleMapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: (SITE.serviceAreas as unknown as string[]).map((name) => ({
      '@type': 'City',
      name,
    })),
    availableLanguage: SITE.languages as unknown as string[],
    founder: {
      '@type': 'Person',
      name: 'Micah Walker',
      jobTitle: 'Exercise Science Personal Trainer and Health Coach',
    },
    sameAs: [SITE.youtube, SITE.linkedin],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.phone,
      email: SITE.email,
      availableLanguage: SITE.languages as unknown as string[],
    },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Micah Walker',
    jobTitle: 'Exercise Science Personal Trainer and Health Coach',
    worksFor: { '@type': 'Organization', name: SITE.name },
    knowsLanguage: SITE.languages as unknown as string[],
    sameAs: [SITE.youtube, SITE.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: 'ES',
    },
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE.url}${path}`,
    areaServed: SITE.serviceAreas as unknown as string[],
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: args.title,
    description: args.description,
    mainEntityOfPage: `${SITE.url}${args.path}`,
    datePublished: args.datePublished,
    author: { '@type': 'Person', name: 'Micah Walker' },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/og-default.svg` },
    },
  };
}
