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
});

export default function ContactPage() {
  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-12 md:pb-16">
          <span className="eyebrow">Contact</span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-deep-navy max-w-4xl leading-[1.1]">
            Book a free intro call
          </h1>
          <div className="mt-5 prose-body max-w-prose space-y-4">
            <p>
              Tell me a little about your goals, location and what kind of support you are
              looking for.
            </p>
            <p>
              Whether you want personal training in Salou, outdoor functional training in
              Cambrils, online coaching, injury-prevention support, special populations
              exercise coaching or help building healthier habits, I’ll let you know if I can
              help and what the best next step would be.
            </p>
          </div>
        </div>
      </section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <form
              action={`mailto:${SITE.email}`}
              method="post"
              encType="text/plain"
              className="bg-white border border-soft-border rounded-3xl p-6 md:p-8 space-y-5"
              aria-label="Enquiry form"
            >
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
                  placeholder="Tell me a bit more about what you’re looking for"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="btn-primary">
                  Send enquiry
                </button>
                <a href={`mailto:${SITE.email}`} className="btn-secondary">
                  Or email directly
                </a>
              </div>
              <p className="text-xs text-muted-grey">
                This static form opens your email client. A managed form service can be wired
                in later if you’d like submissions to arrive in an inbox automatically.
              </p>
            </form>
          </div>

          <aside className="md:col-span-2 space-y-6">
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
              <h2 className="font-heading font-semibold text-deep-navy text-xl">
                Or book directly
              </h2>
              <p className="mt-3 text-sm text-charcoal/85 leading-relaxed">
                Drop a Calendly / TidyCal embed in the marked slot below to give visitors
                instant scheduling. Until then, the buttons below are the fastest path.
              </p>

              {/* Calendar embed slot — paste your provider's embed snippet here */}
              <div
                aria-hidden
                className="mt-4 h-24 grid place-items-center rounded-2xl border border-dashed border-coastal-blue/40 text-xs uppercase tracking-label text-coastal-blue bg-warm-white/60"
              >
                Calendar embed slot
              </div>

              <ul className="mt-5 space-y-2 text-charcoal/90 text-sm">
                <li>
                  Email:{' '}
                  <a
                    className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline"
                    href={`mailto:${SITE.email}`}
                  >
                    {SITE.email}
                  </a>
                </li>
                {SITE.whatsapp && (
                  <li>
                    WhatsApp:{' '}
                    <a
                      className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline"
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Send a message
                    </a>
                  </li>
                )}
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
