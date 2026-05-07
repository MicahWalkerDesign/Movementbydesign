import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  background?: 'warm-white' | 'sand' | 'navy';
  id?: string;
};

const bg = {
  'warm-white': 'bg-warm-white',
  sand: 'bg-sand',
  navy: 'bg-deep-navy text-warm-white',
};

export default function Section({ children, className = '', background = 'warm-white', id }: Props) {
  return (
    <section id={id} className={`section ${bg[background]} ${className}`}>
      <div className="container-prose">{children}</div>
    </section>
  );
}
