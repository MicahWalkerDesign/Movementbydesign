type FaqItem = { q: string; a: string };

export default function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map(({ q, a }) => (
        <li key={q} className="bg-white border border-soft-border rounded-2xl">
          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h3 className="font-heading font-semibold text-deep-navy text-base md:text-lg pr-6">
                {q}
              </h3>
              <span
                aria-hidden
                className="flex-none w-8 h-8 rounded-full border border-soft-border grid place-items-center text-coastal-blue transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-charcoal/85 leading-relaxed">{a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}
