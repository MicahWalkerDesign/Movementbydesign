import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="hero-grad">
      <div className="container-prose pt-24 pb-32 text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-3 font-heading font-semibold text-4xl md:text-5xl text-deep-navy">
          Page not found
        </h1>
        <p className="mt-5 text-charcoal/85 max-w-prose mx-auto">
          The page you’re looking for doesn’t exist or has moved. Try heading back to the
          homepage or exploring the coaching services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/personal-training-salou/" className="btn-secondary">
            View coaching services
          </Link>
        </div>
      </div>
    </section>
  );
}
