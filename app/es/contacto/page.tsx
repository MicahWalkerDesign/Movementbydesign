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
            Reserva una llamada gratuita
          </h1>
          <div className="mt-5 prose-body max-w-prose space-y-4">
            <p>Cuéntame un poco sobre tus objetivos, ubicación y qué tipo de apoyo buscas.</p>
            <p>
              Tanto si quieres entrenamiento personal en Salou, entrenamiento funcional al aire libre en Cambrils, coaching online, prevención de lesiones, coaching para poblaciones especiales o ayuda con hábitos saludables, te diré si puedo ayudarte y cuál sería el mejor siguiente paso.
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
              aria-label="Formulario de contacto"
            >
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
                <a href={`mailto:${SITE.email}`} className="btn-secondary">O envíame un email directo</a>
              </div>
              <p className="text-xs text-muted-grey">
                Este formulario estático abre tu cliente de correo. Más adelante podemos integrar un servicio de formularios para que las consultas lleguen directamente a la bandeja de entrada.
              </p>
            </form>
          </div>

          <aside className="md:col-span-2 space-y-6">
            <div className="bg-white border border-soft-border rounded-3xl p-7">
              <h2 className="font-heading font-semibold text-deep-navy text-xl">Tarifas por sesión</h2>
              <ul className="mt-4 divide-y divide-soft-border text-sm">
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">Entrenamiento Personal 1:1</span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">€90 / hora</span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">
                    Grupo Reducido <span className="text-muted-grey">(3–6)</span>
                  </span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">€15–30 / hora pp</span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">Coaching Online</span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">Desde €120 / mes</span>
                </li>
                <li className="flex items-baseline justify-between py-2.5 gap-4">
                  <span className="text-charcoal/90">
                    Apoyo de movimiento <span className="text-muted-grey">(add-on)</span>
                  </span>
                  <span className="font-heading font-semibold text-deep-navy whitespace-nowrap">€50 / 30 min</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted-grey">Bonos prepagados y paquetes disponibles bajo petición.</p>
            </div>

            <div className="bg-sand border border-soft-border rounded-3xl p-7">
              <h2 className="font-heading font-semibold text-deep-navy text-xl">O reserva directamente</h2>
              <p className="mt-3 text-sm text-charcoal/85 leading-relaxed">
                Próximamente integraremos un calendario embebido (Calendly / TidyCal). Mientras tanto, los botones de abajo son la vía más rápida.
              </p>
              <div aria-hidden className="mt-4 h-24 grid place-items-center rounded-2xl border border-dashed border-coastal-blue/40 text-xs uppercase tracking-label text-coastal-blue bg-warm-white/60">
                Espacio para calendario
              </div>
              <ul className="mt-5 space-y-2 text-charcoal/90 text-sm">
                <li>Email: <a className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                {SITE.whatsapp && (
                  <li>WhatsApp: <a className="text-coastal-blue hover:text-deep-navy underline-offset-4 hover:underline" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer noopener">Envía un mensaje</a></li>
                )}
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
