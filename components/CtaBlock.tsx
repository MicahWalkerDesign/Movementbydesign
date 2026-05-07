import Link from 'next/link';

export default function CtaBlock({
  title = 'Ready to start?',
  body = 'Tell me about your goals, location and what kind of support you are looking for. I’ll let you know if I can help and what the best next step would be.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <div className="bg-deep-navy text-warm-white rounded-3xl p-10 md:p-14 grid md:grid-cols-5 gap-8 items-center">
      <div className="md:col-span-3">
        <span className="text-xs font-semibold tracking-label uppercase text-terracotta">
          Get started
        </span>
        <h2 className="mt-3 font-heading font-semibold text-2xl md:text-3xl">{title}</h2>
        <p className="mt-4 text-warm-white/80 max-w-prose">{body}</p>
      </div>
      <div className="md:col-span-2 flex flex-wrap gap-3 md:justify-end">
        <Link href="/contact/" className="btn-primary">
          Book a free intro call
        </Link>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center bg-transparent text-warm-white border border-warm-white/40 font-medium rounded-2xl px-7 py-4 transition-colors hover:bg-warm-white/10"
        >
          Send an enquiry
        </Link>
      </div>
    </div>
  );
}
