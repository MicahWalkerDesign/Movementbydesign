import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import RelatedServices from '@/components/RelatedServices';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const POST = {
  slug: 'exercise-with-meniscus-injury',
  title: 'Exercise with Meniscus Injury | Personal Trainer Salou – Movement by Design',
  description:
    'How to exercise safely with meniscal knee damage. Evidence-based guidance from a rehabilitation-informed personal trainer in Salou on the Costa Daurada.',
  date: '2026-05-03',
  readingTime: '9 min read',
  category: 'Injury & Rehab',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/blog/${POST.slug}/`,
  locale: 'en_GB',
  alternatePath: '/es/blog/ejercicio-con-lesion-menisco/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function ExerciseWithMeniscusInjuryPage() {
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
            Exercise with Meniscus Injury: How to Keep Training Without Making It Worse
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            A meniscal tear does not have to end your training life. With a properly adapted
            programme and a rehabilitation-informed approach, most people with meniscal knee
            damage can continue exercising, build meaningful strength and maintain long-term
            joint health.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              What the Meniscus Does — and Why It Matters for Exercise
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The menisci are two C-shaped wedges of fibrocartilage sitting between the femur
              and tibia. They act as shock absorbers, distribute compressive load, improve joint
              congruency and contribute to proprioception — the body's ability to sense its own
              position. That last function is often overlooked but is critical: meniscal damage
              reduces proprioceptive signalling from the knee, which in turn increases injury
              risk for surrounding structures.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Meniscal injuries range from minor degenerative changes (very common over 40 and
              often asymptomatic) to acute traumatic tears requiring surgical intervention.
              The majority of meniscal issues encountered in a training population fall somewhere
              between these extremes — a tear that is symptomatic but manageable, often with
              conservative rehabilitation rather than surgery.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The research is increasingly clear: exercise therapy is at least as effective as
              arthroscopic surgery for most degenerative meniscal tears. The knee does not need
              to be rested — it needs to be loaded correctly.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Types of Meniscal Injury and Their Training Implications
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Understanding the type and location of your meniscal damage helps determine how
              exercise should be modified:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Degenerative (horizontal) tears: most common in adults over 40, often associated with osteoarthritis. Generally respond very well to exercise — loaded, progressive strength training is the treatment of choice.',
                'Peripheral (red zone) tears: occur at the outer edge where blood supply exists. These can heal with appropriate conservative management and respond well to progressive loading.',
                'Central (white zone) tears: limited blood supply means less healing capacity. Larger or displaced central tears may need surgical assessment, but many can still be managed with modified exercise.',
                'Bucket-handle tears: if these cause locking or significant mechanical symptoms, surgical referral is appropriate. Exercise modification alone is not sufficient.',
                'Post-surgical meniscus: after meniscectomy or repair, loading must be very gradual and coordinated with the treating surgeon and physiotherapist.',
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
              What to Avoid and What to Modify
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The meniscus is most stressed at end-range knee flexion under load (deep squat,
              full-range lunge) and during shear movements (pivoting, cutting). The following
              exercise adjustments are generally appropriate:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Limit deep knee flexion (past 90°) under load until pain-free range improves.',
                'Avoid high-impact rotational movements: lateral cutting, jumping with pivoting, contact sport activities.',
                'Reduce impact in cardio: swap running for walking, cycling, swimming or rowing in the early phase.',
                'Avoid twisting on a planted foot — be mindful in everyday activities as much as training.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              What is not avoided — and what research consistently supports — is progressive
              lower limb strengthening. Quadriceps weakness is strongly associated with both
              meniscal injury risk and poor outcomes after meniscal damage. Building quad
              strength is a priority, not a risk.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Exercise Priorities: Building a Resilient Knee
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A rehabilitation-informed personal trainer will structure lower limb work around
              four key priorities:
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              1. Quadriceps Strength
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Terminal knee extension, leg press, seated knee extension and partial-range squats
              are appropriate early choices. Progress to full-range squats and step-ups as
              tolerance allows. The quadriceps are the primary load-absorbers for the knee and
              their weakness contributes directly to joint stress.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              2. Hamstring and Hip Strength
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Hip extension, Romanian deadlifts, Nordic curls (progressed carefully), and
              hip abduction work reduce the load distributed through the knee joint. The
              glutes and hamstrings are co-stabilisers of the knee — their role is often
              underestimated in meniscal rehabilitation.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              3. Proprioception and Neuromuscular Control
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Meniscal damage reduces proprioceptive input from the knee. Single-leg balance,
              unstable surface training (wobble board, Bosu), and single-leg functional
              exercises help restore this lost function. This is not optional — it is a
              critical component of injury-risk reduction.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              4. Gradual Load Progression
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Progressive overload applies here as in all training. Start with pain-free
              ranges and loads, then systematically add load, depth and complexity over weeks.
              Pain during exercise is a signal to modify, not push through — but mild soreness
              after a session (within 24 hours) that resolves quickly is generally acceptable.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Upper Body and Conditioning: What Remains Available
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A meniscal injury does not mean three months of rest. Upper body pressing, pulling
              and rowing exercises are generally unaffected. Conditioning work can be maintained
              through upper-body ergometers, swimming, and cycling with a high saddle position
              (reducing knee flexion range). Your aerobic fitness does not have to decline during
              a knee rehabilitation phase.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              For clients in Salou and across the Costa Daurada, water-based activity is a
              significant advantage during rehabilitation phases — swimming and hydrotherapy
              provide load through buoyancy, reduce compressive forces on the joint and maintain
              cardiovascular conditioning beautifully.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Working with a Personal Trainer in Salou: Coordinating Your Knee Rehab
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A rehabilitation-informed personal trainer in Salou or Tarragona works alongside —
              not instead of — your physiotherapist or orthopaedic team. If you have had a
              meniscal diagnosis, the physiotherapist sets the parameters; the trainer delivers
              structured, progressive exercise within them.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Many clients across Tarragona and the Costa Daurada benefit from this model:
              occasional physiotherapy assessment combined with regular, well-programmed strength
              and conditioning that respects the joint while building genuine capacity around it.
              The goal is always to expand what the knee can do — not simply to protect it from
              everything.
            </p>
          </div>

          <p className="mt-10 text-xs text-muted-grey leading-relaxed border-t border-soft-border pt-6">
            {MEDICAL_DISCLAIMER}
          </p>
        </article>
      </Section>

      <Section background="warm-white">
        <RelatedServices excludeHref="" />
      </Section>

      <Section background="sand">
        <CtaBlock
          title="Training around a knee injury in Salou or online?"
          body="Get a programme adapted to your meniscal injury diagnosis — evidence-based, progressive and built around what your knee can actually do right now."
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
          { name: 'Exercise with Meniscus Injury', path: `/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
