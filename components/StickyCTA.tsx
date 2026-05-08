'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/site';
import { localeFromPath, localised } from '@/lib/routes';
import { UI } from '@/lib/strings';

/**
 * Sticky bottom CTA bar — mobile only. Hidden on md+ via .sticky-cta CSS rule.
 * Renders a primary "Book" button + a secondary WhatsApp shortcut when a number
 * is configured.
 */
export default function StickyCTA() {
  const pathname = usePathname() || '/';
  const lang = localeFromPath(pathname);
  const t = UI[lang];

  const greeting =
    lang === 'es'
      ? 'Hola Micah — me gustaría preguntar sobre tu coaching.'
      : "Hi Micah — I'd like to ask about coaching.";

  const wa = SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(greeting)}`
    : null;

  return (
    <div className="sticky-cta">
      <div className="mx-3 mb-3 rounded-2xl border border-soft-border bg-warm-white/95 backdrop-blur shadow-lift p-2 flex items-center gap-2">
        <Link
          href={localised('/contact/', lang)}
          className="flex-1 inline-flex items-center justify-center bg-coastal-blue text-warm-white font-medium rounded-xl px-4 py-3 text-sm hover:bg-deep-navy transition-colors"
        >
          {t.cta.bookCall}
        </Link>
        {wa && (
          <a
            href={wa}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Message on WhatsApp"
            className="grid place-items-center w-12 h-12 rounded-xl border border-soft-border text-deep-navy bg-warm-white hover:bg-sand transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="currentColor">
              <path d="M20.5 3.5A11 11 0 0 0 3.7 17.6L2 22l4.5-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.7 1 .9-2.6-.2-.3a9 9 0 1 1 6.9 3.4Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1l-1 1c-.2.2-.4.3-.7.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.2 0-.3 0-.4l-.9-2.2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
