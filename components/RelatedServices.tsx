import Link from 'next/link';

const ALL = [
  { href: '/personal-training-salou/', label: 'Personal Training in Salou' },
  { href: '/online-coaching/', label: 'Online Coaching' },
  { href: '/functional-training/', label: 'Functional Training' },
  { href: '/injury-prevention/', label: 'Injury Prevention' },
  { href: '/nutrition-habits/', label: 'Nutrition Habits' },
  { href: '/special-populations-exercise/', label: 'Special Populations Exercise' },
];

export default function RelatedServices({ excludeHref }: { excludeHref: string }) {
  const items = ALL.filter((i) => i.href !== excludeHref);
  return (
    <div>
      <h2 className="font-heading font-semibold text-2xl text-deep-navy">Related coaching</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="block bg-white border border-soft-border rounded-2xl px-5 py-4 hover:border-coastal-blue/40 transition-colors"
            >
              <span className="text-deep-navy font-medium">{i.label}</span>
              <span className="block text-xs text-coastal-blue mt-1">Learn more →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
