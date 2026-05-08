import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const POST = {
  slug: 'postpartum-exercise',
  title: 'Postpartum Exercise & Return to Training | Personal Trainer Salou – Movement by Design',
  description:
    'Evidence-based guide to returning to exercise after birth. Pelvic floor, diastasis recti and progressive return to training with a personal trainer in Salou.',
  date: '2026-05-02',
  readingTime: '10 min read',
  category: 'Special Populations',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/blog/${POST.slug}/`,
  locale: 'en_GB',
  alternatePath: '/es/blog/ejercicio-postparto/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function PostpartumExercisePage() {
  return (
    <>
      <section className="hero-grad">
        <div className="container-prose pt-14 md:pt-20 pb-10 md:pb-14 max-w-3xl">
          <Link href="/blog/" className="text-sm text-coastal-blue hover:text-deep-navy">
            ← All articles
          </Link>
          <span className="mt-6 block text-xs uppercase tracking-label text-coastal-blue">
            {formatDate(POST.date)} · {POST.readingTime} · {POST.category}
          </span>
          <span className="accent-line mt-3 mb-5" aria-hidden />
          <h1 className="font-heading font-semibold text-3xl md:text-5xl text-deep-navy leading-[1.1]">
            Postpartum Exercise: A Science-Based Guide to Returning to Training After Birth
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            The six-week clearance from your doctor is a starting point — not a green light to
            jump back into your previous training. Return to exercise after birth needs to be
            progressive, pelvic-floor-led and built around your actual recovery.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Why the Six-Week Check Is Just the Beginning
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The standard six-week postnatal check typically clears a woman for general activity.
              It does not assess pelvic floor function, abdominal wall integrity, load tolerance,
              hip stability or readiness for impact. For most women, this creates an enormous gap
              between medical clearance and genuine readiness to return to the training they love.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The groundbreaking 2019 return-to-running guidelines from physiotherapists Groom,
              Donnelly and Brockwell recommend waiting a minimum of twelve weeks postpartum before
              returning to running or high-impact activity — and only then following a graduated
              progression. The reasoning is straightforward: the pelvic floor has sustained
              significant stress during pregnancy and childbirth, and tissue remodelling takes time.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Working with a rehabilitation-informed personal trainer in Salou — one who understands
              pelvic floor physiology and progressive loading — means your return to training is
              actually safe, not just socially approved.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Understanding the Postpartum Body
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Recovery from birth — whether vaginal or caesarean — involves multiple concurrent
              processes. Relaxin remains elevated during breastfeeding, keeping joints more lax
              than pre-pregnancy. The pelvic floor is recovering from either direct stretching
              (vaginal delivery) or the effects of nine months of increased load (caesarean).
              Abdominal muscle function, particularly the deep transverse abdominis, is frequently
              disrupted. And sleep deprivation, hormonal changes and breastfeeding demands all
              affect recovery capacity.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Diastasis recti — a separation of the rectus abdominis along the linea alba — affects
              up to 100% of women at term and persists in 39% at six months postpartum. It does
              not necessarily need surgical intervention, but it does need to be understood before
              loading the anterior trunk.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Weeks 0–6: Rest, Restoration and Walking
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The immediate postpartum period is for rest and healing — not training. This is not
              lost fitness. This is necessary recovery. The key activities are:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Diaphragmatic breathing: simple, powerful, begins rebuilding the connection between diaphragm, pelvic floor and deep core.',
                'Pelvic floor awareness: gentle engagement and relaxation — not aggressive Kegel squeezing. The pelvic floor often needs to learn to relax after birth as much as it needs strengthening.',
                'Walking: start with short, flat walks and build gradually. The promenades of Salou and Cambrils are ideal — flat, shaded early morning, and close for most residents.',
                'Rest when fatigue is significant: sleep deprivation impairs all tissue healing processes and should be respected, not pushed through.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              For caesarean recovery, no abdominal loading is appropriate until the scar has
              healed and the core can activate without discomfort. This often means an additional
              two to four weeks of reduced activity compared to vaginal delivery.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Weeks 6–12: Foundation Phase
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              With medical clearance and in the absence of symptoms (urinary leakage, pelvic
              heaviness, significant pain), exercise can gradually expand. The emphasis remains
              on rebuilding the foundation rather than returning to full training loads.
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Pelvic floor rehabilitation: progress from basic awareness to functional engagement under load — squats, bridges, standing exercises.',
                'Diastasis recti screening: assess for midline integrity before any trunk loading. A suitably qualified trainer can screen for basic function and refer to a pelvic health physio where needed.',
                'Bodyweight lower body: squats, bridges, hip hinges, step-ups with controlled loading and pelvic floor awareness.',
                'Upper body: pushing and pulling with bodyweight or light resistance — prioritise posture given the demands of feeding and carrying.',
                'Continue daily walking: build duration and add gentle hills if symptom-free.',
                'No high-impact activity, running, heavy lifting or intense core work during this phase.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Weeks 12+: Returning to Loaded Training
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              From twelve weeks, assuming the foundations are solid and symptoms are absent or
              well-managed, progressive loading can begin. This is when training starts to look
              more like conventional strength and conditioning — but built on a proper base.
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Progressive strength training: deadlifts, squats, presses, rows with systematic load increases — the same progressive overload principles that apply to all quality strength programming.',
                'Return to running protocol: start with a walk-run progression (typically Couch-to-5K style) only when the pelvic floor assessment is satisfactory. No leakage, heaviness or pain during activity.',
                'HIIT and impact: introduce only when loaded training is well-tolerated and pelvic floor function is robust.',
                'Monitor for warning signs throughout: any return of pelvic floor symptoms means reducing load and reassessing.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Red Flag Symptoms: When to Pause and Refer
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A rehabilitation-informed trainer should always monitor for symptoms that indicate
              the pace of return is too fast. These include:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Urinary or faecal leakage with exercise, impact or coughing',
                'Pelvic heaviness or prolapse sensation',
                'Pelvic or hip pain during exercise',
                'Coning or doming of the midline during trunk exercises',
                'Significant fatigue or slow recovery between sessions',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Any of these symptoms is a clear indication to slow the progression and refer to
              a pelvic health physiotherapist. In the Tarragona area there are qualified
              professionals available; online physiotherapy consultation is also highly effective
              for pelvic floor concerns.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Postpartum Coaching in Salou and the Costa Daurada
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Movement by Design offers postpartum exercise coaching for women in Salou, Cambrils
              and across the Costa Daurada. Sessions can be in-person or online, are built around
              your specific recovery timeline, and always integrate pelvic floor awareness and
              progressive loading principles from the start.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Whether you are six weeks postpartum or six months, the priority is always to build
              from your actual foundation — not the body you had before pregnancy, and not the
              programme you saw on Instagram. Just sound, gradual, evidence-based exercise science.
            </p>
          </div>

          <p className="mt-10 text-xs text-muted-grey leading-relaxed border-t border-soft-border pt-6">
            {MEDICAL_DISCLAIMER}
          </p>
        </article>
      </Section>

      <Section background="sand">
        <CtaBlock
          title="Ready to return to training the right way?"
          body="Postpartum coaching tailored to your recovery timeline, pelvic floor function and goals. In-person in Salou and Cambrils, or online across the Costa Daurada."
        />
      </Section>

      <JsonLd
        data={articleSchema({
          title: POST.title,
          description: POST.description,
          path: `/blog/${POST.slug}/`,
          datePublished: POST.date,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
          { name: 'Postpartum Exercise', path: `/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
