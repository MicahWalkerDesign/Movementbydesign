'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/85 backdrop-blur border-b border-soft-border">
      <div className="container-prose flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group" aria-label={SITE.name}>
          <span aria-hidden className="block w-8 h-8 rounded-full bg-coastal-blue relative">
            <span className="absolute inset-1.5 rounded-full bg-warm-white" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-terracotta" />
          </span>
          <span className="font-heading font-semibold text-deep-navy text-lg md:text-xl">
            {SITE.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-deep-navy/85 hover:text-coastal-blue transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn-primary !px-5 !py-2.5 text-sm">
            Book a free intro call
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 rounded-lg border border-soft-border"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="#102A43" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#102A43" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-soft-border bg-warm-white">
          <nav aria-label="Mobile" className="container-prose py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-deep-navy hover:text-coastal-blue"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="btn-primary mt-2 text-sm"
              onClick={() => setOpen(false)}
            >
              Book a free intro call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
