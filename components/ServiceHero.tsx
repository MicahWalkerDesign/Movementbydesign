import Link from 'next/link';

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body?: string;
};

export default function ServiceHero({ eyebrow, title, subtitle, body }: Props) {
  return (
    <section className="hero-grad">
      <div className="container-prose pt-16 md:pt-24 pb-16 md:pb-20">
        <span className="eyebrow">{eyebrow}</span>
        <span className="accent-line mt-3 mb-5" aria-hidden />
        <h1 className="font-heading font-semibold text-4xl md:text-5xl text-deep-navy max-w-4xl leading-[1.1]">
          {title}
        </h1>
        <p className="mt-5 text-xl md:text-2xl text-deep-navy/85 font-heading max-w-3xl">
          {subtitle}
        </p>
        {body && <p className="mt-5 prose-body max-w-prose">{body}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-primary">
            Book a free intro call
          </Link>
          <Link href="/contact/" className="btn-secondary">
            Send an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
