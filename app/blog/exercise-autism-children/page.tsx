import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const POST = {
  slug: 'exercise-autism-children',
  title: 'Exercise for Children with Autism | Personal Trainer Salou – Movement by Design',
  description:
    'Sensory-friendly movement and exercise for children with autism in Salou. Evidence-based, structured physical activity from a special populations coach on the Costa Daurada.',
  date: '2026-05-06',
  readingTime: '10 min read',
  category: 'Special Populations',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/blog/${POST.slug}/`,
  locale: 'en_GB',
  alternatePath: '/es/blog/ejercicio-autismo-ninos/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function ExerciseAutismChildrenPage() {
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
            Exercise for Children with Autism: Sensory-Friendly Movement That Builds Confidence
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            Children with autism benefit enormously from structured physical activity — but
            the standard gym or sports setting is often poorly designed for their sensory
            and social needs. With the right environment, the right approach and a coach
            who understands neurodivergence, movement can be transformative.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Why Exercise Matters for Children with Autism
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The research on physical activity and autism spectrum disorder (ASD) is consistently
              positive. Regular structured exercise has been shown to reduce stereotyped behaviours,
              improve attention and executive function, decrease anxiety, support social skill
              development and significantly improve sleep quality — all areas where children with
              autism frequently struggle.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Motor development is also frequently an area of challenge in ASD. Difficulties with
              motor planning (dyspraxia), coordination, bilateral coordination and balance are
              common and can limit participation in sports and social activities, which in turn
              increases isolation. Exercise programming that directly addresses these motor
              qualities can have cascading positive effects on quality of life.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Beyond the clinical outcomes, there is something more fundamental: children with
              autism, like all children, deserve access to movement that feels good, builds
              confidence and gives them a body that they trust. This is not a clinical goal —
              it is a basic human one.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Understanding Sensory Processing in ASD
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Sensory processing differences are a defining feature of ASD. Many children with
              autism are either hypersensitive or hyposensitive to sensory input — and often
              both, across different sensory channels.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Relevant sensory systems for exercise include:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Tactile (touch): some children find certain textures, equipment surfaces or physical contact overwhelming. Others seek deep pressure input (proprioceptive loading feels regulating and calming).',
                'Auditory: busy gyms, loud music, echoing spaces and unpredictable sounds can be highly dysregulating. Quiet, predictable environments work better.',
                'Vestibular (balance/movement): spinning, swinging, rolling and balance challenges either calm or overwhelm — knowing which applies to a particular child matters enormously.',
                'Proprioceptive: resistance exercise, heavy work (carrying, pushing, climbing) and compression activities are often deeply regulating for autistic children.',
                'Visual: bright lighting, busy visual environments and unpredictable visual stimuli can increase arousal and reduce the capacity to focus on movement tasks.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A sensory-informed coach does not simply avoid triggers — they use sensory input
              strategically. Deep pressure and proprioceptive loading at the start of a session
              can regulate the nervous system and improve focus for the work that follows.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Principles of Effective Exercise Coaching for Autistic Children
            </h2>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Predictability and Routine
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Autistic children typically thrive with predictability. Sessions should follow a
              consistent structure: the same warm-up sequence, the same spatial layout, the same
              cues. Changes should be introduced gradually and explained in advance. Visual
              schedules showing the session structure are a straightforward and highly effective
              tool.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Clear, Concrete Instruction
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Abstract coaching cues ("engage your core", "activate your glutes") are not
              effective. Concrete, literal instruction works better: "push your feet into the
              floor", "carry this across the room", "jump and land on two feet." Demonstration
              is powerful — showing is often more effective than telling.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Task Analysis and Chaining
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Complex movement skills should be broken into small, discrete steps and taught
              sequentially. For example, a squat is first "feet shoulder-width apart", then
              "look forward", then "sit back and down". Mastering each step before combining
              them respects the motor learning differences often present in ASD.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Positive Reinforcement
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Specific, immediate positive feedback — "that landing was very controlled, well
              done" — is far more effective than vague praise. Understanding what motivates
              each individual child (verbal praise, stickers, a specific activity they enjoy)
              and using it consistently builds engagement and willingness to try new challenges.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Managing Frustration and Regulation
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              New motor skills are genuinely hard. Autistic children may become dysregulated
              when they fail at a task. A good coach has strategies: breaking the task down
              further, switching to a familiar activity, using proprioceptive input to regulate
              before returning to the challenge. Knowing when to push and when to step back is
              a core coaching skill.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              What Sensory-Friendly Exercise Looks Like in Practice
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Exercise sessions for autistic children in Salou or along the Costa Daurada
              might include:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Outdoor movement in quiet spaces: parks, beach during off-peak hours, quiet open areas — away from crowded, noisy environments.',
                'Obstacle courses: combine motor skills (crawling, jumping, balancing, climbing) with proprioceptive challenges in a predictable sequence.',
                'Ball skills and coordination games: target practice, catching, rolling — activities with clear cause-and-effect that suit different skill levels.',
                '"Heavy work": carrying medicine balls, pushing resistance, dragging — proprioceptive loading that many autistic children find regulating and enjoyable.',
                'Water-based activity: swimming is often highly regulating and provides deep proprioceptive and tactile input in a predictable environment.',
                'Movement-based play: for younger or more significantly affected children, structured movement play using trampolines, scooter boards, balance beams and climbing frames.',
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
              Working with Families and the Wider Support Team
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Exercise coaching for an autistic child does not happen in isolation. Parents and
              carers are partners in the process — they know their child better than any coach,
              and their insights into sensory preferences, triggers, regulation strategies and
              daily patterns are essential for effective programming.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Where a child is also working with an occupational therapist, speech-language
              therapist or applied behaviour analyst, coordination with that team improves
              outcomes. A rehabilitation-informed personal trainer in Salou who works with
              autistic children should understand these professional relationships and communicate
              across them where appropriate.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Movement by Design coaches families across Tarragona, Cambrils, Salou and the
              broader Costa Daurada, in English, German and Spanish. Sessions can be at a quiet
              outdoor location, at a home gym setup, or online for parent coaching in home
              movement activities.
            </p>
          </div>

          <p className="mt-10 text-xs text-muted-grey leading-relaxed border-t border-soft-border pt-6">
            {MEDICAL_DISCLAIMER}
          </p>
        </article>
      </Section>

      <Section background="sand">
        <CtaBlock
          title="Sensory-friendly exercise coaching in Salou and the Costa Daurada"
          body="Structured movement sessions for children with autism — tailored to your child's sensory profile, communication style and goals. In-person or online."
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
          { name: 'Exercise for Children with Autism', path: `/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
