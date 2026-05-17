import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CtaBlock from '@/components/CtaBlock';
import RelatedServices from '@/components/RelatedServices';
import JsonLd from '@/components/JsonLd';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import { MEDICAL_DISCLAIMER } from '@/lib/site';

const POST = {
  slug: 'exercise-with-diabetes',
  title: 'Exercise with Type 2 Diabetes | Personal Trainer Salou – Movement by Design',
  description:
    'How to exercise safely and effectively with Type 2 diabetes. Evidence-based guidance on insulin sensitivity, blood glucose management and training in Salou.',
  date: '2026-05-05',
  readingTime: '10 min read',
  category: 'Special Populations',
};

export const metadata: Metadata = buildMetadata({
  title: POST.title,
  description: POST.description,
  path: `/blog/${POST.slug}/`,
  locale: 'en_GB',
  alternatePath: '/es/blog/ejercicio-con-diabetes/',
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function ExerciseWithDiabetesPage() {
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
            Exercise with Type 2 Diabetes: The Most Powerful Tool You Are Probably Under-Using
          </h1>
          <p className="mt-6 text-lg md:text-xl text-deep-navy/85 max-w-prose">
            Exercise is not a lifestyle add-on for people with Type 2 diabetes. It is a
            pharmacologically significant intervention — one that improves insulin sensitivity,
            reduces HbA1c, supports weight management and lowers cardiovascular risk with an
            effectiveness comparable to medication in many cases.
          </p>
        </div>
      </section>

      <Section background="warm-white">
        <article className="max-w-prose mx-auto">

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Why Exercise Is So Effective for Type 2 Diabetes
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Type 2 diabetes is characterised by insulin resistance — cells fail to respond
              normally to insulin, leading to elevated blood glucose and the progressive
              deterioration of beta-cell function. Exercise addresses insulin resistance
              through several parallel mechanisms that no single medication can replicate.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              During aerobic exercise, muscle cells can take up glucose through an
              insulin-independent pathway (GLUT-4 translocation driven by AMPK activation).
              This means blood glucose can fall during and after cardio exercise even in the
              presence of insulin resistance — a clinically significant effect.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Resistance training builds skeletal muscle mass, which is the primary site of
              insulin-stimulated glucose disposal. More muscle mass means a larger metabolic
              sink for glucose — and better long-term blood sugar management, including in the
              resting state. The combination of aerobic and resistance training consistently
              produces better glycaemic outcomes than either modality alone.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Regular exercise has also been shown to reduce HbA1c (the three-month blood glucose
              average) by approximately 0.6–0.8% in meta-analyses — comparable to the effect of
              adding a second oral medication, with none of the side effects.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Safety Considerations: What You Need to Know Before Training
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Exercise with Type 2 diabetes is safe and strongly recommended. However, there
              are important practical considerations:
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Hypoglycaemia Risk
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              People on sulphonylureas or insulin are at risk of hypoglycaemia during exercise.
              Those on metformin alone, or lifestyle-managed only, have a much lower risk.
              Regardless, it is good practice to:
            </p>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Check blood glucose before exercise — aim for 5–13 mmol/L at the start.',
                'Have fast-acting carbohydrate available during and after sessions.',
                'Avoid training on an empty stomach if on hypoglycaemia-risk medications.',
                'Know the signs: shakiness, sweating, confusion, rapid heartbeat.',
              ].map((b) => (
                <li key={b} className="flex gap-3 text-charcoal/90">
                  <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-terracotta flex-none" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Cardiovascular Screening
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Type 2 diabetes significantly increases cardiovascular risk. Prior to beginning
              a structured exercise programme — especially moderate-to-high intensity — GP
              clearance is appropriate. Resting ECG, blood pressure and cardiovascular history
              should be reviewed. An exercise physiologist or rehabilitation-informed trainer
              will always ask for this before prescribing higher-intensity work.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Peripheral Neuropathy and Foot Care
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Diabetic peripheral neuropathy reduces sensation in the feet. Appropriate footwear
              during exercise, post-session foot inspection, and avoiding high-impact activities
              that could cause blisters or pressure injuries are important considerations. This
              does not limit the training options available — it simply means attention to detail
              in exercise selection and footwear.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Exercise Programming for Type 2 Diabetes: The Evidence-Based Approach
            </h2>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Aerobic Exercise
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              The ADA (American Diabetes Association) and ACSM recommend at least 150 minutes
              of moderate-intensity aerobic activity per week, spread across most days. No more
              than two consecutive days without exercise, as the glucose-lowering effect of a
              single session lasts approximately 24–72 hours.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Good choices in Salou and the Costa Daurada: walking the promenade (low-impact,
              accessible, highly practical), swimming, cycling — whether road cycling inland
              toward Tarragona or on a stationary bike — and group fitness classes at a
              moderate intensity.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              Resistance Training
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Two to three sessions per week, targeting major muscle groups. Progressive
              overload applies here as in all strength training — systematic increases in
              load over weeks and months. Compound movements are most effective: squats,
              deadlifts, rows, presses. These recruit large muscle masses and produce
              the greatest metabolic response.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Building and maintaining lean muscle mass is arguably the most important
              long-term strategy for Type 2 diabetes management through exercise. Muscle
              is where blood sugar goes — investing in it is an investment in glycaemic control.
            </p>

            <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2 mt-6">
              High-Intensity Interval Training (HIIT)
            </h3>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              HIIT produces comparable or superior glycaemic improvements to moderate-intensity
              continuous exercise in less time. It is appropriate for people with Type 2 diabetes
              who have been cleared medically and have a solid aerobic base. Note that intense
              anaerobic efforts can cause temporary blood glucose elevation (adrenaline-driven
              hepatic glucose release) before the subsequent drop — this is normal and not a
              reason to avoid HIIT.
            </p>
          </div>

          <div className="mb-9">
            <h2 className="font-heading font-semibold text-2xl text-deep-navy mb-4">
              Practical Strategies for Day-to-Day Exercise
            </h2>
            <ul className="space-y-2 mt-2 mb-4">
              {[
                'Break up sitting time: even brief bouts of movement every 30 minutes improve postprandial glucose in people with Type 2 diabetes. A ten-minute walk after meals is one of the most effective single interventions available.',
                'Morning training: fasted or early-morning exercise can improve blood glucose management for the whole day.',
                'Consistency over intensity: three moderate sessions per week consistently beats one heroic session followed by five days of inactivity for glycaemic outcomes.',
                'Monitor post-exercise glucose: learn your individual response. Blood glucose monitoring before and two hours after exercise helps you understand how your body responds to different types of training.',
                'Work with your healthcare team: medication doses, particularly insulin, may need adjusting as fitness improves and insulin sensitivity increases.',
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
              Exercise Science Coaching for Diabetes in Salou and Tarragona
            </h2>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Movement by Design offers exercise science-based coaching for people with Type 2
              diabetes in Salou, Cambrils, Tarragona and across the Costa Daurada. Sessions are
              structured to work alongside your medical management, include appropriate safety
              protocols and are built around your individual response to exercise.
            </p>
            <p className="text-charcoal/90 leading-relaxed mb-4">
              Whether you are newly diagnosed and wanting to understand what exercise can do for
              your condition, or a longer-term type 2 diabetic wanting a more structured
              programme, the approach is always evidence-informed, practically delivered and
              coordinated with your GP or endocrinologist where appropriate.
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
          title="Managing Type 2 diabetes with exercise in Salou?"
          body="Structured, evidence-based exercise coaching built around your diagnosis, medications and goals. In-person on the Costa Daurada or online."
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
          { name: 'Exercise with Type 2 Diabetes', path: `/blog/${POST.slug}/` },
        ])}
      />
    </>
  );
}
