import Link from 'next/link';
import type { Locale } from '@/lib/routes';
import { localised } from '@/lib/routes';
import { UI } from '@/lib/strings';

const DEFAULTS = {
  en: {
    eyebrow: 'Get started',
    title: 'Ready to start?',
    body: 'Tell me about your goals, location and what kind of support you are looking for. I’ll let you know if I can help and what the best next step would be.',
  },
  es: {
    eyebrow: 'Empieza aquí',
    title: '¿Listo para empezar?',
    body: 'Cuéntame tus objetivos, dónde estás y qué tipo de apoyo buscas. Te diré si puedo ayudarte y cuál sería el mejor siguiente paso.',
  },
} as const;

export default function CtaBlock({
  title,
  body,
  lang = 'en',
}: {
  title?: string;
  body?: string;
  lang?: Locale;
}) {
  const d = DEFAULTS[lang];
  const t = UI[lang];
  const contact = localised('/contact/', lang);
  return (
    <div className="bg-deep-navy dark:bg-slate-950 text-warm-white rounded-3xl p-10 md:p-14 grid md:grid-cols-5 gap-8 items-center">
      <div className="md:col-span-3">
        <span className="eyebrow-light">
          {d.eyebrow}
        </span>
        <h2 className="mt-3 font-heading font-semibold text-2xl md:text-3xl">
          {title || d.title}
        </h2>
        <p className="mt-4 text-warm-white/80 max-w-prose">{body || d.body}</p>
      </div>
      <div className="md:col-span-2 flex flex-wrap gap-3 md:justify-end">
        <Link href={contact} className="btn-primary">
          {t.cta.bookCall}
        </Link>
        <Link
          href={contact}
          className="inline-flex items-center justify-center bg-transparent text-warm-white border border-warm-white/40 font-medium rounded-2xl px-7 py-4 transition-colors hover:bg-warm-white/10"
        >
          {t.cta.sendEnquiry}
        </Link>
      </div>
    </div>
  );
}
