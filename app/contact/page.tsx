import type { Metadata } from 'next';
import Section from '@/components/Section';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER, SITE } from '@/lib/site';

const PATH = '/contact/';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Movement by Design | Personal Training in Salou',
  description:
    'Book a free intro call with Movement by Design. Personal training, online coaching and rehabilitation-informed exercise coaching in Salou, Cambrils and Tarragona.',
  path: PATH,
  locale: 'en_GB',
  alternatePath: '/es/contacto/',
});

const waGreeting = encodeURIComponent("Hi Micah — I'd like to ask about coaching.");
const waHref = `https://wa.me/${SITE.whatsapp}?text=${waGreeting}`;
const formAction = SITE.formspreeId
  ? `https://formspree.io/f/${SITE.formspreeId}`
  : `mailto:${SITE.email}`;

export default function ContactPage() {
  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-8 md:pb-10">
          <span className="eyebrow">Contact</span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-deep-navy max-w-4xl leading-[1.1]">
            Get in touch
          </h1>
          <div className="mt-5 prose-body max-w-prose space-y-4">
            <p>
              The fastest way to reach me is WhatsApp — send a message any time and I'll
              reply as soon as I can.
            </p>
            <p>
              Or fill in the form below and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* WhatsApp primary CTA — hero placement */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary inline-flex items-center gap-2.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                <path d="M20.5 3.5A11 11 0 0 0 3.7 17.6L2 22l4.5-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.7 1 .9-2.6-.2-.3a9 9 0 1 1 6.9 3.4Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1l-1 1c-.2.2-.4.3-.7.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.2 0-.3 0-.4l-.9-2.2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
              </svg>
              WhatsApp (+34 665 518 632)
            </a>
            <a href={`mailto:${SITE.email}`} className="btn-secondary">
              Email ({SITE.email})
            </a>
          </div>
        </div>
      </section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-6">
              Or send an enquiry form
            </h2>
            <form
              action={formAction}
              method="POST"
              className="bg-white border border-soft-border rounded-3xl p-6 md:p-8 space-y-5"
              aria-label="Enquiry form"
            >
              {/* Formspree: set subject line and redirect after submit */}
              <input type="hidden" name="_subject" value="New coaching enquiry — Movement by Design" />
              <input type="hidden" name="_next" value={`${SITE.url}/contact/`} />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="WhatsApp / phone" name="phone" />
                <Field label="Location" name="location" placeholder="e.g. Salou" />
              </div>

              <div>
                <label
                  htmlFor="language"
                  className="block text-sm font-medium text-deep-navy mb-1.5"
                >
                  Preferred language
                </label>
                <select
                  id="language"
                  name="language"
                  className="w-full rounded-xl border border-soft-border bg-warm-white px-4 py-3 focus:border-coastal-blue focus:outline-none"
                  defaultValue="English"
                >
                  <option>English</option>
                  <option>German</option>
                  <option>Spanish (basic)</option>
                </select>
              </div>

              <Field label="Goal" name="goal" placeholder="What do you want to improve?" />

              <fieldset>
                <legend className="text-sm font-medium text-deep-navy mb-2">
                  Training preference
                </legend>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    '1:1 personal training',
                    'small group training',
                    'online coaching',
                    'health & special populations coaching',
                    'movement support add-on',
                    'not sure yet',
                  ].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 bg-warm-white border border-soft-border rounded-xl px-4 py-2.5 cursor-pointer hover:border-coastal-blue/40"
                    >
                      <input
                        type="radio"
                        name="preference"
                        value={opt}
                        className="accent-coastal-blue"
                      />
                      <span className="text-sm text-charcoal">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="medical"
                  className="block text-sm font-medium text-deep-navy mb-1.5"
                >
                  Medical considerations / injury history
                </label>
                <textarea
                  id="medical"
                  name="medical"
                  rows={3}
                  className="w-full rounded-xl border border-soft-border bg-warm-white px-4 py-3 focus:border-coastal-blue focus:outline-none resize-y"
                  placeholder="Anything I should know about — injuries, surgeries, conditions, pregnancy, medications, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-deep-navy mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-soft-border bg-warm-white px-4 py-3 focus:border-coastal-blue focus:outline-none resize-y"
                  placeholder="Tell me a bit more about what you're looking for"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="btn-primary">
                  Send enquiry
                </button>
              </div>
            </form>
          </div>

          <aside className="md:col-span-2 space-y-6">
            {/* WhatsApp card — top of sidebar */}
            <div className="bg-deep-navy rounded-3xl p-7 text-warm-white">
              <span className="eyebrow-light">Preferred contact</span>
              <h2 className="mt-3 font-heading font-semibold text-xl">WhatsApp</h2>
              <p className="mt-3 text-warm-white/80 text-sm leading-relaxed">
                The fastest way to reach me. Send a message any time — I'll reply
                as soon as I can.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2.5 bg-warm-white text-deep-navy font-medium rounded-2xl px-6 py-3 text-sm hover:bg-sand transition-colors w-full justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                  <path d="M20.5 3.5A11 11 0 0 0 3.7 17.6L2 22l4.5-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.7 1 .9-2.6-.2-.3a9 9 0 1 1 6.9 3.4Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1l-1 1c-.2.2-.4.3-.7.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.2 0-.3 0-.4l-.9-2.2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
                </svg>
                Open WhatsApp
              </a>
              <p className="mt-3 text-warm-white/60 text-xs text-center">
                +34 665 518 632
              </p>
            </div>

            <div className="bg-white border border-soft-border rounded-3xl p-7">
              <h2 className="font-heading font-semibold text-deep-navy text-xl">Session rates</h2>
              <ul className="mt-4 divide-y divide-soft-border text-sm">
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">1:1 Personal Training</span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">
                    €90 / hr
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">
                    Small Group <span className="text-muted-grey">(3–6)</span>
                  </span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">
                    €15–30 / hr pp
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">Online Coaching</span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">
                    From €120 / mo
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">
                    Movement support <span className="text-muted-grey">(add-on)</span>
                  </span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">
                    €50 / 30 min
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted-grey">
                Pre-paid blocks and packages available on request.
              </p>
            </div>

            <div className="bg-sand border border-soft-border rounded-3xl p-7">
              <h2 className="font-heading font-semibold text-deep-navy text-xl">Other ways to reach me</h2>
              <ul className="mt-4 space-y-2 text-charcoal/90 text-sm">
                <li>
                  Email:{' '}
                  <a
                    className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline"
                    href={`mailto:${SITE.email}`}
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  YouTube:{' '}
                  <a
                    className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline"
                    href={SITE.youtube}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    @MovementConsultant
                  </a>
                </li>
                <li>
                  LinkedIn:{' '}
                  <a
                    className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline"
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Micah Walker
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-warm-white border border-soft-border rounded-3xl p-7">
              <h2 className="font-heading font-semibold text-deep-navy text-xl">Service area</h2>
              <p className="mt-3 text-charcoal/85 leading-relaxed text-sm">
                Salou · Cambrils · Tarragona · La Pineda · Vila-seca · Reus · Costa Daurada.
                Online coaching available internationally.
              </p>
            </div>

            <p className="text-xs text-muted-grey leading-relaxed">{MEDICAL_DISCLAIMER}</p>
          </aside>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: PATH },
        ])}
      />
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-deep-navy mb-1.5">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-soft-border bg-warm-white px-4 py-3 focus:border-coastal-blue focus:outline-none"
      />
    </div>
  );
}
