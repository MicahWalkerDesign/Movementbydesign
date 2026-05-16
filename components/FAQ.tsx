type FaqItem = { q: string; a: string };

export default function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map(({ q, a }) => (
        <li key={q} className="bg-white dark:bg-slate-800 border border-soft-border dark:border-slate-700 rounded-2xl">
          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h3 className="font-heading font-semibold text-deep-navy dark:text-slate-100 text-base md:text-lg pr-6">
                {q}
              </h3>
              <span
                aria-hidden
                className="flex-none w-8 h-8 rounded-full border border-soft-border dark:border-slate-600 grid place-items-center text-coastal-blue dark:text-sky-400 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-charcoal/85 dark:text-slate-300 leading-relaxed">{a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}
