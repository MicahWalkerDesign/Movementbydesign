import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import RelatedServices from '@/components/RelatedServices';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const POST = {
  slug: 'exercise-during-pregnancy',
  title: 'Exercise During Pregnancy | Personal Trainer Salou – Movement by Design',
  description:
    'Safe, evidence-based exercise during pregnancy with a personal trainer in Salou. Guidelines, trimester-by-trimester advice and what to modify on the Costa Daurada.',
  date: '2026-05-01',
  readingTime: '9 min read',
  category: 'Special Populations',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/blog/${POST.slug}/`,
  locale: 'en_GB',
  alternatePath: '/es/blog/ejercicio-durante-el-embarazo/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function ExerciseDuringPregnancyPage() {
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
            Exercise During Pregnancy: A Trimester-by-Trimester Guide from a Personal Trainer in Salou
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            Pregnancy does not require you to stop moving. In fact, the evidence strongly supports
            staying active throughout — with appropriate adaptations and a coach who understands
            the physiology.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Why Exercise Matters More Than Ever During Pregnancy
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              For decades, pregnant women were advised to rest, reduce effort and treat their
              body as fragile. The science has moved decisively in the opposite direction.
              Current guidelines from ACOG (American College of Obstetricians and Gynaecologists),
              the CSEP Pregnancy Guidelines, and UK NICE recommendations all advocate for
              regular moderate-intensity exercise throughout an uncomplicated pregnancy.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The benefits are well-documented: reduced risk of gestational diabetes, better
              weight management, lower rates of pre-eclampsia, shorter active labour, and
              significantly improved mood and sleep quality. Working with a rehabilitation-informed
              personal trainer in Salou or across the Costa Daurada means these guidelines can be
              applied practically — not just cited on a leaflet.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The goal of prenatal exercise is not performance. It is maintaining capacity,
              managing the physical demands of a changing body, and preparing for the labour and
              postpartum period ahead.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              General Principles: What Safe Prenatal Exercise Looks Like
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Before trimester-specific adjustments, it helps to understand the broad principles
              that guide exercise programming during pregnancy:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Intensity: aim for moderate — you should be able to hold a conversation during cardio work. The "talk test" is a reliable and practical guide.',
                'Volume: 150 minutes of moderate aerobic activity per week remains the target, split across most days where possible.',
                'Movement quality over load: technique and control become more important than the kilos on the bar.',
                'Listen to symptoms: dizziness, shortness of breath, pelvic pain, any fluid leakage, contractions or decreased foetal movement are all reasons to stop and consult a midwife or doctor.',
                'Avoid supine work from the second trimester: lying flat on the back compresses the inferior vena cava. Exercises can be modified to inclined or side-lying positions.',
                'Avoid contact sports, activities with fall risk, and exercises that require breath-holding (Valsalva).',
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
              First Trimester (Weeks 1–13): Foundation and Awareness
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The first trimester is often the most symptomatic — nausea, fatigue, and breast
              tenderness can make training feel unappealing. This is normal. For most women,
              training can continue largely unchanged in the early weeks, with one key exception:
              this is the ideal time to build body awareness and introduce pelvic floor education.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The pelvic floor supports the uterus, bladder and bowel. As relaxin — a hormone that
              increases joint laxity — rises from early pregnancy, the pelvic floor must adapt to
              new demands. Learning to recruit and release it correctly at this stage sets up better
              function throughout pregnancy and postpartum recovery.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Exercise priorities in the first trimester:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Continue existing exercise at moderate intensity — this is not the time to start a new high-intensity programme, but maintaining one you are adapted to is appropriate.',
                'Introduce pelvic floor awareness: breathing, relaxation and engagement cues.',
                'Establish lower-body strength: squats, deadlifts, lunges at moderate loads with controlled technique.',
                'Core work is still appropriate — avoid very high-intensity abdominal exercises or anything that produces coning or doming along the midline.',
                'Breathing mechanics: learning to use the diaphragm and manage intra-abdominal pressure is a foundational skill for the whole pregnancy.',
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
              Second Trimester (Weeks 14–27): The Training Window
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Many women feel their best during the second trimester. Nausea typically eases,
              energy returns, and the bump is growing but not yet restricting movement significantly.
              This is often the most productive training period of the pregnancy.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Key adaptations begin to matter more from around week 16–18. The growing uterus
              shifts the centre of gravity forward, which increases lumbar load and changes how
              the body manages balance. Relaxin continues to increase joint laxity, particularly
              in the SI joints and pubic symphysis — this is relevant when programming single-leg
              work and lateral movements.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Programming adjustments in the second trimester:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Replace supine exercises with inclined or standing alternatives from around week 16.',
                'Modify high-impact cardio if impact becomes uncomfortable — swimming, walking on the Salou promenade and cycling are excellent alternatives.',
                'Continue progressive overload in lower-body strength — the body adapts well and maintaining leg strength has significant postpartum benefits.',
                'Upper body pressing and pulling: adjust positions to accommodate the bump; cable rows, supported rows and incline press are practical.',
                'Monitor for diastasis recti signs (coning or doming along the midline) during any trunk loading — modify if present.',
                'Hip stability work becomes important: single-leg exercises, lateral band work, and glute-focused loading.',
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
              Third Trimester (Weeks 28–40+): Comfort, Maintenance and Preparation
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The third trimester asks more of training creativity than loading. The bump restricts
              movement, breathlessness increases as the diaphragm is compressed, and discomfort
              can be significant. The goal shifts: maintain what has been built, prepare the body
              for labour and manage the symptoms that come with late pregnancy.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Symphysis pubis dysfunction (SPD) or pelvic girdle pain (PGP) affects many women
              in this phase. Exercise should be modified accordingly — single-leg loading, wide
              squats and lunges may need to be replaced with bilateral work, seated or supported
              exercises, and pool-based activity.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Third trimester priorities:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Reduce load and intensity if symptoms increase — the goal is maintenance and comfort, not progress.',
                'Continue lower-body strengthening with modifications: goblet squats, box squats, leg press if available.',
                'Walking remains excellent — on flat ground, in the early morning in summer, using the promenades along the Costa Daurada.',
                'Pelvic floor and breathing: continue and progress pelvic floor work, including relaxation strategies for labour.',
                'Gentle mobility: hip flexor stretches, thoracic rotation, upper back work.',
                'Birth preparation breathing: diaphragmatic breathing and practised pelvic floor relaxation.',
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
              Absolute Contraindications to Exercise in Pregnancy
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Exercise is appropriate for the majority of uncomplicated pregnancies. However, a
              number of conditions require medical clearance or mean training should stop:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Ruptured membranes or pre-term labour',
                'Placenta previa or unexplained vaginal bleeding',
                'Pre-eclampsia or pregnancy-induced hypertension',
                'Cervical incompetence',
                'Multiple pregnancy with risk factors',
                'Uncontrolled Type 1 diabetes, thyroid disease or other systemic conditions',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              A rehabilitation-informed personal trainer working in Salou or Tarragona should
              always ask for GP or midwife clearance before beginning or continuing a programme
              when any of these factors are present, and should communicate clearly with the
              wider healthcare team.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Exercise Science and Prenatal Coaching in Salou
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Movement by Design offers exercise science-based prenatal coaching for women in
              Salou, Cambrils, Tarragona and across the Costa Daurada — in person or online.
              Programming is adapted trimester by trimester, with pelvic floor integration from
              the start and full coordination with your midwife or obstetric team where needed.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Whether you are a regular exerciser who wants to train safely throughout pregnancy,
              or someone returning to movement for the first time, the approach is practical,
              evidence-informed and built around your specific history, symptoms and goals.
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
          title="Ready to train well through your pregnancy?"
          body="Get in touch to discuss a programme tailored to your trimester, symptoms and goals. In-person in Salou and Cambrils or online across the Costa Daurada."
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
          { name: 'Exercise During Pregnancy', path: `/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
