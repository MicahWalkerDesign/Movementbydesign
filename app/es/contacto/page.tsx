import type { Metadata } from 'next';
import Section from '@/components/Section';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER_ES } from '@/lib/strings';
import { SITE } from '@/lib/site';

const PATH = '/es/contacto/';

export const metadata: Metadata = buildMetadata({
  title: 'Contacto Movement by Design | Entrenamiento Personal en Salou',
  description:
    'Reserva una llamada gratuita con Movement by Design. Entrenamiento personal, coaching online y ejercicio orientado a la rehabilitación en Salou, Cambrils y Tarragona.',
  path: PATH,
  locale: 'es_ES',
  alternatePath: '/contact/',
});

const waGreeting = encodeURIComponent('Hola Micah — me gustaría preguntar sobre tu coaching.');
const waHref = `https://wa.me/${SITE.whatsapp}?text=${waGreeting}`;
const formAction = SITE.formspreeId
  ? `https://formspree.io/f/${SITE.formspreeId}`
  : `mailto:${SITE.email}`;

function Field({ label, name, type = 'text', required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-deep-navy mb-1.5">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="w-full rounded-xl border border-soft-border bg-warm-white px-4 py-3 focus:border-coastal-blue focus:outline-none" />
    </div>
  );
}

export default function ContactoPage() {
  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-16 md:pt-24 pb-8 md:pb-10">
          <span className="eyebrow">Contacto</span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-deep-navy max-w-4xl leading-[1.1]">
            Escríbeme
          </h1>
          <div className="mt-5 prose-body max-w-prose space-y-4">
            <p>
              La forma más rápida de contactarme es por WhatsApp — envíame un mensaje
              cuando quieras y te respondo lo antes posible.
            </p>
            <p>
              O rellena el formulario de abajo y te respondo en menos de 24 horas.
            </p>
          </div>

          {/* WhatsApp primary CTA — hero placement */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary inline-flex items-center gap-2.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="currentColor">
                <path d="M20.5 3.5A11 11 0 0 0 3.7 17.6L2 22l4.5-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.7 1 .9-2.6-.2-.3a9 9 0 1 1 6.9 3.4Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1l-1 1c-.2.2-.4.3-.7.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.2 0-.3 0-.4l-.9-2.2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
              </svg>
              Escríbeme por WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`} className="btn-secondary">
              Email directo
            </a>
          </div>
        </div>
      </section>

      <Section background="warm-white">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-6">
              O envía un formulario de consulta
            </h2>
            <form
              action={formAction}
              method="POST"
              className="bg-white border border-soft-border rounded-3xl p-6 md:p-8 space-y-5"
              aria-label="Formulario de contacto"
            >
              <input type="hidden" name="_subject" value="Nueva consulta de coaching — Movement by Design" />
              <input type="hidden" name="_next" value={`${SITE.url}/es/contacto/`} />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="WhatsApp / teléfono" name="phone" />
                <Field label="Ubicación" name="location" placeholder="ej. Salou" />
              </div>
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-deep-navy mb-1.5">
                  Idioma preferido
                </label>
                <select id="language" name="language" className="w-full rounded-xl border border-soft-border bg-warm-white px-4 py-3 focus:border-coastal-blue focus:outline-none" defaultValue="Inglés">
                  <option>Inglés</option>
                  <option>Alemán</option>
                  <option>Español (básico)</option>
                </select>
              </div>
              <Field label="Objetivo" name="goal" placeholder="¿Qué quieres mejorar?" />
              <fieldset>
                <legend className="text-sm font-medium text-deep-navy mb-2">Preferencia de entrenamiento</legend>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    'entrenamiento personal 1:1',
                    'entrenamiento en grupo reducido',
                    'coaching online',
                    'coaching de salud y poblaciones especiales',
                    'apoyo de movimiento (terapia manual)',
                    'aún no estoy seguro',
                  ].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 bg-warm-white border border-soft-border rounded-xl px-4 py-2.5 cursor-pointer hover:border-coastal-blue/40">
                      <input type="radio" name="preference" value={opt} className="accent-coastal-blue" />
                      <span className="text-sm text-charcoal">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="medical" className="block text-sm font-medium text-deep-navy mb-1.5">
                  Consideraciones médicas / historial de lesiones
                </label>
                <textarea id="medical" name="medical" rows={3} className="w-full rounded-xl border border-soft-border bg-warm-white px-4 py-3 focus:border-coastal-blue focus:outline-none resize-y" placeholder="Cualquier cosa que deba saber: lesiones, operaciones, condiciones, embarazo, medicación, etc." />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-navy mb-1.5">
                  Mensaje
                </label>
                <textarea id="message" name="message" rows={5} className="w-full rounded-xl border border-soft-border bg-warm-white px-4 py-3 focus:border-coastal-blue focus:outline-none resize-y" placeholder="Cuéntame un poco más sobre lo que buscas" />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="btn-primary">Enviar consulta</button>
              </div>
            </form>
          </div>

          <aside className="md:col-span-2 space-y-6">
            {/* WhatsApp card */}
            <div className="bg-deep-navy rounded-3xl p-7 text-warm-white">
              <span className="eyebrow-light">Contacto preferido</span>
              <h2 className="mt-3 font-heading font-semibold text-xl">WhatsApp</h2>
              <p className="mt-3 text-warm-white/80 text-sm leading-relaxed">
                La forma más rápida de contactarme. Envíame un mensaje cuando quieras
                — te respondo lo antes posible.
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
                Abrir WhatsApp
              </a>
              <p className="mt-3 text-warm-white/60 text-xs text-center">
                +34 665 518 632
              </p>
            </div>

            <div className="bg-white border border-soft-border rounded-3xl p-7">
              <h2 className="font-heading font-semibold text-deep-navy text-xl">Tarifas por sesión</h2>
              <ul className="mt-4 divide-y divide-soft-border text-sm">
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">Entrenamiento Personal 1:1</span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">€90 / hora</span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">Grupo Reducido <span className="text-muted-grey">(3–6)</span></span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">€15–30 / hora pp</span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">Coaching Online</span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">Desde €120 / mes</span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">Apoyo de movimiento <span className="text-muted-grey">(add-on)</span></span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">€50 / 30 min</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted-grey">Bonos prepagados y paquetes disponibles bajo petición.</p>
            </div>

            <div className="bg-sand border border-soft-border rounded-3xl p-7">
              <h2 className="font-heading font-semibold text-deep-navy text-xl">Otros canales</h2>
              <ul className="mt-4 space-y-2 text-charcoal/90 text-sm">
                <li>Email: <a className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li>YouTube: <a className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline" href={SITE.youtube} target="_blank" rel="noreferrer noopener">@MovementConsultant</a></li>
                <li>LinkedIn: <a className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline" href={SITE.linkedin} target="_blank" rel="noreferrer noopener">Micah Walker</a></li>
              </ul>
            </div>

            <div className="bg-warm-white border border-soft-border rounded-3xl p-7">
              <h2 className="font-heading font-semibold text-deep-navy text-xl">Zona de servicio</h2>
              <p className="mt-3 text-charcoal/85 leading-relaxed text-sm">
                Salou · Cambrils · Tarragona · La Pineda · Vila-seca · Reus · Costa Daurada. Coaching online disponible internacionalmente.
              </p>
            </div>

            <p className="text-xs text-muted-grey leading-relaxed">{MEDICAL_DISCLAIMER_ES}</p>
          </aside>
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema([
        { name: 'Inicio', path: '/es/' },
        { name: 'Contacto', path: PATH },
      ])} />
    </>
  );
}
