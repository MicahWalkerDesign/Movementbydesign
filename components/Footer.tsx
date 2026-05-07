import Link from 'next/link';
import { MEDICAL_DISCLAIMER, SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep-navy text-warm-white/90 mt-24">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span aria-hidden className="block w-8 h-8 rounded-full bg-coastal-blue relative">
              <span className="absolute inset-1.5 rounded-full bg-deep-navy" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-terracotta" />
            </span>
            <span className="font-heading font-semibold text-warm-white text-lg">
              {SITE.name}
            </span>
          </div>
          <p className="text-sm text-warm-white/75 max-w-prose">
            Personal training and health coaching in Salou, Cambrils and Tarragona.
          </p>
          <p className="text-sm text-warm-white/75 mt-3">
            Languages: English (native), German (fluent), Spanish (learning)
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-warm-white mb-3">Service areas</h3>
          <ul className="space-y-1.5 text-sm text-warm-white/75">
            {SITE.serviceAreas.map((a) => (
              <li key={a}>{a}</li>
            ))}
            <li>Online coaching (international)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-warm-white mb-3">Explore</h3>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/personal-training-salou/" className="hover:text-warm-white">Personal Training</Link></li>
            <li><Link href="/functional-training/" className="hover:text-warm-white">Functional Training</Link></li>
            <li><Link href="/injury-prevention/" className="hover:text-warm-white">Injury Prevention</Link></li>
            <li><Link href="/special-populations-exercise/" className="hover:text-warm-white">Special Populations</Link></li>
            <li><Link href="/online-coaching/" className="hover:text-warm-white">Online Coaching</Link></li>
            <li><Link href="/nutrition-habits/" className="hover:text-warm-white">Nutrition Habits</Link></li>
            <li><Link href="/about/" className="hover:text-warm-white">About</Link></li>
            <li><Link href="/blog/" className="hover:text-warm-white">Blog</Link></li>
            <li><Link href="/contact/" className="hover:text-warm-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-warm-white mb-3">Contact</h3>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-warm-white">
                {SITE.email}
              </a>
            </li>
            {SITE.whatsapp && (
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-warm-white"
                >
                  WhatsApp
                </a>
              </li>
            )}
            <li>
              <a href={SITE.youtube} target="_blank" rel="noreferrer noopener" className="hover:text-warm-white">
                YouTube — Movement by Design
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-warm-white">
                LinkedIn — Micah Walker
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-warm-white/10">
        <div className="container-prose py-8 text-xs text-warm-white/60 space-y-3">
          <p className="leading-relaxed max-w-prose">{MEDICAL_DISCLAIMER}</p>
          <p>© {year} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
