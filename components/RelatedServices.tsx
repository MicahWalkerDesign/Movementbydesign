import Link from 'next/link';
import type { Locale } from '@/lib/routes';
import { localised } from '@/lib/routes';

const COPY = {
  en: {
    heading: 'Related coaching',
    learnMore: 'Learn more →',
    items: [
      { en: '/personal-training-salou/', label: 'Personal Training in Salou' },
      { en: '/personal-trainer-cambrils/', label: 'Personal Trainer in Cambrils' },
      { en: '/small-group-training-salou/', label: 'Small Group Training' },
      { en: '/online-coaching/', label: 'Online Coaching' },
      { en: '/functional-training/', label: 'Functional Training' },
      { en: '/injury-prevention/', label: 'Injury Prevention' },
      { en: '/special-populations-exercise/', label: 'Special Populations Exercise' },
      { en: '/nutrition-habits/', label: 'Nutrition Habits' },
    ],
  },
  es: {
    heading: 'Otros servicios de coaching',
    learnMore: 'Más información →',
    items: [
      { en: '/personal-training-salou/', label: 'Entrenador Personal en Salou' },
      { en: '/personal-trainer-cambrils/', label: 'Entrenador Personal en Cambrils' },
      { en: '/small-group-training-salou/', label: 'Entrenamiento en Grupo Reducido' },
      { en: '/online-coaching/', label: 'Coaching Online' },
      { en: '/functional-training/', label: 'Entrenamiento Funcional' },
      { en: '/injury-prevention/', label: 'Prevención de Lesiones' },
      { en: '/special-populations-exercise/', label: 'Ejercicio para Poblaciones Especiales' },
      { en: '/nutrition-habits/', label: 'Hábitos de Nutrición' },
    ],
  },
} as const;

export default function RelatedServices({
  excludeHref,
  lang = 'en',
}: {
  excludeHref: string;
  lang?: Locale;
}) {
  const c = COPY[lang];
  const items = c.items.filter((i) => localised(i.en, lang) !== excludeHref);
  return (
    <div>
      <h2 className="font-heading font-semibold text-2xl text-deep-navy dark:text-slate-100">{c.heading}</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => {
          const href = localised(i.en, lang);
          return (
            <li key={href}>
              <Link
                href={href}
                className="block bg-white dark:bg-slate-800 border border-soft-border dark:border-slate-700 rounded-2xl px-5 py-4 hover:border-coastal-blue/40 dark:hover:border-sky-400/40 transition-colors"
              >
                <span className="text-deep-navy dark:text-slate-100 font-medium">{i.label}</span>
                <span className="block text-xs text-coastal-blue dark:text-sky-400 mt-1">{c.learnMore}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
