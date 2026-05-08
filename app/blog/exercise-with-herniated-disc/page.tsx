import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const POST = {
  slug: 'exercise-with-herniated-disc',
  title: 'Exercise with Herniated Disc | Personal Trainer Salou – Movement by Design',
  description:
    'Safe, evidence-based exercise with a herniated disc. Rehabilitation-informed personal training in Salou — build spinal capacity, reduce pain, return to activity.',
  date: '2026-05-04',
  readingTime: '10 min read',
  category: 'Injury & Rehab',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/blog/${POST.slug}/`,
  locale: 'en_GB',
  alternatePath: '/es/blog/ejercicio-con-hernia-discal/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function ExerciseWithHerniatedDiscPage() {
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
            Exercise with a Herniated Disc: Building Spinal Capacity Without Fear
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            A herniated disc diagnosis can feel like a sentence. It is not. With the right
            understanding of spinal mechanics, appropriate exercise selection and progressive
            loading, most people with a herniated disc can return to meaningful activity —
            and often end up with a stronger, more resilient back than before.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              What Actually Happens with a Herniated Disc
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Intervertebral discs are fibrocartilaginous structures that sit between the
              vertebrae and act as shock absorbers for the spine. Each disc has a tough outer
              ring (annulus fibrosus) and a gel-like inner core (nucleus pulposus). A herniation
              occurs when the nucleus pushes through a weakened section of the annulus.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Herniations most commonly occur at L4-L5 and L5-S1 in the lumbar spine, though
              cervical herniations (typically C5-C6 or C6-C7) are also common. The pain
              associated with a herniation comes from two main sources: direct nerve root
              compression (causing radiating pain, numbness or weakness into a limb) and
              inflammatory mediators released from the disc material.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Critically: disc herniations resolve spontaneously in a significant proportion of
              cases. Studies using MRI demonstrate that disc material is reabsorbed over months
              in many patients. This is not a reason to ignore the symptoms — but it is a
              reason to approach the diagnosis with evidence-based optimism rather than fear.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              The Evidence for Exercise Over Rest
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Bed rest was the standard recommendation for disc herniation for decades. The
              evidence has reversed this position comprehensively. Staying active, maintaining
              movement and progressively loading the spine produces better outcomes — both for
              pain and function — than prolonged rest.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Exercise reduces pain through multiple mechanisms: it decreases inflammatory
              cytokines around the affected disc, restores proprioceptive input to the spine,
              builds the muscular support structures around the lumbar vertebrae, and — perhaps
              most importantly — reduces the fear-avoidance behaviour that contributes heavily
              to chronic pain in spinal conditions.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A rehabilitation-informed personal trainer in Salou or Tarragona can structure
              a progressive loading programme that operates within your current pain tolerance
              while systematically expanding what your spine can do.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Understanding Directional Preference
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              One of the most useful clinical concepts for herniated disc management is
              directional preference — the observation that many people with disc herniation
              have a direction of movement that reduces their pain and centralises symptoms
              (moves pain from the limb toward the spine, which indicates improvement).
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              For most lumbar herniations, extension-based movements (prone press-ups, walking,
              standing) reduce pain more than flexion. This is the foundation of the McKenzie
              method and is supported by substantial clinical evidence. However, a minority of
              patients are flexion-preferring — so the principle is individual assessment,
              not universal prescription.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              This is why a blanket "do these five exercises for disc herniation" approach
              is less useful than a properly assessed, individually adapted programme.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Exercise Selection: What Typically Helps and What to Modify
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              General guidelines for lumbar disc herniation exercise programming:
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Generally Appropriate (with good technique)
            </h3>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Walking: one of the best exercises available. Promotes disc nutrition through movement, builds endurance, reduces pain perception.',
                'Hip hinge patterns: Romanian deadlifts and deadlift variations with neutral spine — builds posterior chain strength which is essential for lumbar support.',
                'Glute and hip strengthening: bridges, hip thrusts, clamshells — critical for reducing lumbar load.',
                'Core stability (not sit-ups): dead bugs, pallof press, bird-dogs, plank variations — builds spinal stability without end-range flexion loading.',
                'Swimming: excellent for the acute phase — water supports the spine while enabling movement.',
                'Bike (upright or recumbent, depending on directional preference).',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Generally Requires Modification or Caution
            </h3>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Heavy spinal flexion under load: sit-ups, crunches, Russian twists — high spinal flexion loading is contraindicated in the acute phase.',
                'Loaded spinal flexion in early morning: discs are more hydrated and vulnerable after sleeping; avoid heavy lifting in the first hour after waking.',
                'High-impact activities in the early phase: running, jumping, court sports.',
                'Heavy axial loading (heavy barbell squat) until spinal stability is established.',
                'Valsalva breath-holding with maximal loads until the spine is tolerating load well.',
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
              Neurological Symptoms: When to Refer Immediately
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Most disc herniations are managed conservatively. However, the following symptoms
              require immediate medical assessment and are absolute contraindications to exercise:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Cauda equina syndrome: bladder or bowel dysfunction, saddle anaesthesia (numbness around the perineum). This is a medical emergency.',
                'Progressive neurological deficit: rapidly increasing weakness in a lower limb.',
                'Bilateral leg weakness or numbness.',
                'Any loss of bowel or bladder control.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A rehabilitation-informed trainer always knows this boundary and never programmes
              exercise for a client experiencing these symptoms without explicit medical clearance.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              The Long Game: Building a Spine That Lasts
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The most important insight from the disc herniation evidence base is this: the
              goal of rehabilitation is not just to get out of pain. It is to build a back
              that tolerates load well for the rest of your life.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              This means progressive overload applies here as everywhere else. Over months,
              loaded hinge patterns, carries and compound lower-body exercises should increase
              in intensity. People who have recovered from disc herniations and returned to
              heavy strength training often report their backs are more robust than before
              the injury — because they finally addressed the capacity deficit that contributed
              to the original episode.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Exercise science coaching in Salou or Tarragona — with a coach who understands
              spinal mechanics — gives you the structure to get there safely and progressively.
            </p>
          </div>

          <p className="mt-10 text-xs text-muted-grey leading-relaxed border-t border-soft-border pt-6">
            {MEDICAL_DISCLAIMER}
          </p>
        </article>
      </Section>

      <Section background="sand">
        <CtaBlock
          title="Training around a disc herniation on the Costa Daurada?"
          body="Get a rehabilitation-informed programme tailored to your diagnosis, symptoms and goals. In-person in Salou and Tarragona, or online anywhere."
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
          { name: 'Exercise with Herniated Disc', path: `/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
