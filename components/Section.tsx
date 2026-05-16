import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  background?: 'warm-white' | 'sand' | 'clay' | 'navy';
  id?: string;
};

const bg = {
  'warm-white': 'bg-warm-white dark:bg-slate-900',
  sand: 'bg-sand dark:bg-slate-800',
  clay: 'bg-clay dark:bg-slate-800',
  navy: 'bg-deep-navy dark:bg-slate-950 text-warm-white',
};

export default function Section({ children, className = '', background = 'warm-white', id }: Props) {
  return (
    <section id={id} className={`section ${bg[background]} ${className}`}>
      <div className="container-prose">{children}</div>
    </section>
  );
}
