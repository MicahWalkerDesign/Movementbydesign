'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';
import { localeFromPath, localised } from '@/lib/routes';
import { UI } from '@/lib/strings';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const lang = localeFromPath(pathname);
  const t = UI[lang];

  // Sync the document language attribute when navigating between EN and ES.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'es' ? 'es-ES' : 'en';
    }
  }, [lang]);

  const navLinks = [
    { href: localised('/personal-training-salou/', lang), label: t.nav.services },
    { href: localised('/special-populations-exercise/', lang), label: t.nav.specialPopulations },
    { href: localised('/online-coaching/', lang), label: t.nav.onlineCoaching },
    { href: localised('/about/', lang), label: t.nav.about },
    { href: localised('/blog/', lang), label: t.nav.blog },
    { href: localised('/contact/', lang), label: t.nav.contact },
  ];

  const homeHref = lang === 'es' ? '/es/' : '/';
  const contactHref = localised('/contact/', lang);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/85 dark:bg-slate-900/90 backdrop-blur border-b border-soft-border dark:border-slate-700">
      <div className="container-prose flex items-center justify-between h-16 md:h-20">
        <Link href={homeHref} className="flex items-center gap-2 group" aria-label={SITE.name}>
          <span aria-hidden className="block w-8 h-8 rounded-full bg-coastal-blue relative">
            <span className="absolute inset-1.5 rounded-full bg-warm-white" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-terracotta" />
          </span>
          <span className="font-heading font-semibold text-deep-navy dark:text-slate-100 text-lg md:text-xl">
            {SITE.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-deep-navy/85 dark:text-slate-300 hover:text-coastal-blue dark:hover:text-sky-400 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href={contactHref} className="btn-primary !px-5 !py-2.5 text-sm">
            {t.cta.bookCall}
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher compact />
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded-lg border border-soft-border dark:border-slate-700 text-deep-navy dark:text-slate-300"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="text-deep-navy dark:text-slate-300">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-soft-border dark:border-slate-700 bg-warm-white dark:bg-slate-900">
          <nav aria-label="Mobile" className="container-prose py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-deep-navy dark:text-slate-300 hover:text-coastal-blue dark:hover:text-sky-400"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={contactHref}
              className="btn-primary mt-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {t.cta.bookCall}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
