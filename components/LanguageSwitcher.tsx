'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { alternatePath, localeFromPath } from '@/lib/routes';
import { UI } from '@/lib/strings';

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname() || '/';
  const lang = localeFromPath(pathname);
  const target = alternatePath(pathname);
  const labels = UI[lang].languageSwitcher;

  return (
    <Link
      href={target}
      hrefLang={lang === 'en' ? 'es' : 'en'}
      aria-label={labels.switchTo}
      className={`inline-flex items-center gap-1.5 rounded-full border border-soft-border px-3 py-1.5 text-xs font-semibold tracking-label uppercase text-deep-navy hover:bg-sand transition-colors ${
        compact ? '' : ''
      }`}
    >
      <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-coastal-blue" />
      {labels.label}
    </Link>
  );
}
