import Link from 'next/link';
import PhotoSlot from './PhotoSlot';

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body?: string;
  photoSrc?: string;
  photoAlt?: string;
  photoLabel?: string;
  contactHref?: string;
  primaryCta?: string;
  secondaryCta?: string;
};

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  body,
  photoSrc,
  photoAlt,
  photoLabel,
  contactHref = '/contact/',
  primaryCta = 'Book a free intro call',
  secondaryCta = 'Send an enquiry',
}: Props) {
  const hasPhoto = Boolean(photoSrc);
  return (
    <section className="hero-grad">
      <div className="container-prose pt-16 md:pt-24 pb-8 md:pb-10">
        <div
          className={
            hasPhoto
              ? 'grid md:grid-cols-12 gap-10 md:gap-14 items-center'
              : ''
          }
        >
          <div className={hasPhoto ? 'md:col-span-7' : ''}>
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
              <Link href={contactHref} className="btn-primary">
                {primaryCta}
              </Link>
              <Link href={contactHref} className="btn-secondary">
                {secondaryCta}
              </Link>
            </div>
          </div>
          {hasPhoto && (
            <div className="md:col-span-5">
              <PhotoSlot
                src={photoSrc!}
                alt={photoAlt || ''}
                label={photoLabel || 'service hero'}
                variant="portrait"
                tone="sea"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
