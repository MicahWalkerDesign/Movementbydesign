import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  background?: 'warm-white' | 'sand' | 'clay' | 'navy';
  id?: string;
};

const bg = {
  'warm-white': 'bg-warm-white',
  sand: 'bg-sand',
  clay: 'bg-clay',
  navy: 'bg-deep-navy text-warm-white',
};

export default function Section({ children, className = '', background = 'warm-white', id }: Props) {
  return (
    <section id={id} className={`section ${bg[background]} ${className}`}>
      <div className="container-prose">{children}</div>
    </section>
  );
}
