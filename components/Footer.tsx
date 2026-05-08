'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MEDICAL_DISCLAIMER, SITE } from '@/lib/site';
import { localeFromPath, localised } from '@/lib/routes';
import { UI, MEDICAL_DISCLAIMER_ES } from '@/lib/strings';

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname() || '/';
  const lang = localeFromPath(pathname);
  const t = UI[lang];
  const disclaimer = lang === 'es' ? MEDICAL_DISCLAIMER_ES : MEDICAL_DISCLAIMER;

  const exploreLinks: { href: string; label: string }[] = [
    { href: localised('/personal-training-salou/', lang), label: t.explore.personalTraining },
    { href: localised('/functional-training/', lang), label: t.explore.functionalTraining },
    { href: localised('/injury-prevention/', lang), label: t.explore.injuryPrevention },
    { href: localised('/special-populations-exercise/', lang), label: t.explore.specialPopulations },
    { href: localised('/online-coaching/', lang), label: t.explore.onlineCoaching },
    { href: localised('/nutrition-habits/', lang), label: t.explore.nutritionHabits },
    { href: localised('/about/', lang), label: t.explore.about },
    { href: localised('/blog/', lang), label: t.explore.blog },
    { href: localised('/contact/', lang), label: t.explore.contact },
  ];

  return (
    <footer className="bg-deep-navy text-warm-white/90 mt-24">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span aria-hidden className="block w-8 h-8 rounded-full bg-coastal-blue relative">
              <span className="absolute inset-1.5 rounded-full bg-deep-navy" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-terracotta" />
            </span>
            <span className="font-heading font-semibold text-warm-white text-lg">
              {SITE.name}
            </span>
          </div>
          <p className="text-sm text-warm-white/75 max-w-prose">{t.footer.tagline}</p>
          <p className="text-sm text-warm-white/75 mt-3">{t.footer.languages}</p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-warm-white mb-3">
            {t.footer.serviceAreas}
          </h3>
          <ul className="space-y-1.5 text-sm text-warm-white/75">
            {SITE.serviceAreas.map((a) => (
              <li key={a}>{a}</li>
            ))}
            <li>
              {lang === 'es'
                ? 'Coaching online (internacional)'
                : 'Online coaching (international)'}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-warm-white mb-3">
            {t.footer.explore}
          </h3>
          <ul className="space-y-1.5 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-warm-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-warm-white mb-3">
            {t.footer.contact}
          </h3>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-warm-white">
                {SITE.email}
              </a>
            </li>
            {SITE.whatsapp && (
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-warm-white"
                >
                  WhatsApp
                </a>
              </li>
            )}
            <li>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-warm-white"
              >
                YouTube — Movement by Design
              </a>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-warm-white"
              >
                LinkedIn — Micah Walker
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-warm-white/10">
        <div className="container-prose py-8 text-xs text-warm-white/60 space-y-3">
          <p className="leading-relaxed max-w-prose">{disclaimer}</p>
          <p>
            © {year} {SITE.name}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
