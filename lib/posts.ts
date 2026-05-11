export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  alternatePath?: string;
  intro: string;
  body: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: 'in-home-personal-training-salou',
    title: 'In-Home Personal Training in Salou: When Training Comes to You',
    description:
      'How in-home personal training in Salou works, who it suits, what equipment you need and how to build strength safely without a traditional gym.',
    date: '2026-05-11',
    readingTime: '6 min read',
    alternatePath: '/es/blog/entrenador-personal-a-domicilio-salou/',
    intro:
      'For some people, the barrier to training is not motivation. It is logistics. Work, family, travel, confidence, pain history and the simple friction of getting to a gym can all get in the way. In-home personal training in Salou can be a practical solution when it is structured properly.',
    body: [
      {
        heading: 'Home training is not second-best',
        paragraphs: [
          'A good home session is not a watered-down gym session. It is a different format with different constraints. The goal is to use the space, equipment and schedule you actually have, then build a plan that progresses over weeks rather than improvising workouts one session at a time.',
          'For many clients, training at home removes the biggest obstacle: showing up. That matters. Consistency is the foundation of every strength, fat loss, mobility and health outcome.',
        ],
      },
      {
        heading: 'Who it suits best',
        paragraphs: [
          'In-home coaching works especially well for busy professionals, parents, older adults, people returning after injury, and clients who feel uncomfortable in a crowded gym.',
          'It can also suit visitors and seasonal residents in Salou who want structured training while they are here, without signing up to a local gym for a short stay.',
        ],
      },
      {
        heading: 'What equipment do you need?',
        paragraphs: [
          'You do not need a full gym. A pair of adjustable dumbbells, a few bands, a mat and a stable bench or box can cover a surprising amount. For some clients, bodyweight, tempo, pauses and range-of-motion progressions are enough to start.',
          'The important question is not “how much equipment do I own?” It is “can we progress the work safely over time?” A coach should be honest if your goals require more load or a different setting.',
        ],
      },
      {
        heading: 'What a well-designed home session includes',
        paragraphs: [],
        bullets: [
          'A short readiness check: sleep, pain, energy and stress',
          'Movement preparation that matches your body, not a generic warm-up',
          'Two to four focused strength movements',
          'Mobility or corrective work where it genuinely helps',
          'A clear progression note for the next session',
        ],
      },
      {
        heading: 'When a gym or outdoor space is better',
        paragraphs: [
          'Home training is not always the best answer. If your goals require heavy lower-body strength, power work, loaded carries or conditioning with more space, an outdoor or gym-based session may be more effective.',
          'The best personal training format in Salou is usually the one you can repeat consistently while still progressing. Sometimes that is home. Sometimes it is the promenade, a park, a training space or a blended approach.',
        ],
      },
    ],
  },
  {
    slug: 'training-with-injuries-salou',
    title: 'Personal Training with Injuries in Salou: How to Train Around Pain Safely',
    description:
      'A practical guide to training with old injuries, pain history or health considerations with a rehabilitation-informed personal trainer in Salou.',
    date: '2026-05-10',
    readingTime: '7 min read',
    alternatePath: '/es/blog/entrenador-personal-lesiones-salou/',
    intro:
      'Many adults are not looking for the hardest workout in Salou. They are looking for a way to train without flaring up their back, knee, shoulder or hip again. That is a different coaching problem — and it needs a different standard of care.',
    body: [
      {
        heading: 'Pain changes the job',
        paragraphs: [
          'When someone has an injury history, the first task is not to prove toughness. It is to understand the context: what happened, what has been diagnosed, what makes symptoms worse, what has helped before, and what the person is afraid of doing.',
          'A rehabilitation-informed personal trainer does not diagnose injuries. The job is to build capacity inside appropriate boundaries, communicate clearly, and work alongside medical or physiotherapy guidance where needed.',
        ],
      },
      {
        heading: 'The goal is capacity, not avoidance',
        paragraphs: [
          'Avoidance feels safe in the short term, but it often shrinks your world. Good training restores options. That might mean learning to hinge again after back pain, rebuilding single-leg strength after knee trouble, or restoring shoulder confidence after months of guarding.',
          'The work is usually slower, more technical and more individual than standard fitness programming. That is not a weakness. It is the point.',
        ],
      },
      {
        heading: 'Useful questions before you start',
        paragraphs: [],
        bullets: [
          'Has the injury been diagnosed, and by whom?',
          'Are there red flags that need medical attention first?',
          'Which movements currently feel threatening or painful?',
          'What activities do you want back in your life?',
          'How will we measure progress beyond pain levels?',
        ],
      },
      {
        heading: 'What training often looks like',
        paragraphs: [
          'The first phase is usually about finding tolerable entry points: ranges, loads, tempos and positions that let you move with control. From there, the plan gradually expands exposure.',
          'Strength training is central. Stronger tissues usually tolerate life better. The key is dose: enough stimulus to adapt, not so much that the next week becomes damage control.',
        ],
      },
      {
        heading: 'When to involve a physiotherapist or doctor',
        paragraphs: [
          'If pain is unexplained, worsening, associated with neurological symptoms, linked to trauma, or not behaving as expected, it belongs with a qualified healthcare professional. A good coach should say that without ego.',
          'The best results often come from a simple team: the clinician clarifies diagnosis and boundaries; the coach helps build the week-to-week training habit that turns advice into capacity.',
        ],
      },
    ],
  },
  {
    slug: 'physical-preparation-salou',
    title: 'Physical Preparation in Salou: Strength and Conditioning for Real Life',
    description:
      'What a physical preparation coach in Salou actually does: strength, mobility, conditioning and durable performance for sport, work and everyday life.',
    date: '2026-05-09',
    readingTime: '6 min read',
    alternatePath: '/es/blog/preparador-fisico-salou/',
    intro:
      '“Physical preparation” sounds like something reserved for athletes. In reality, it describes a useful idea for almost everyone: prepare the body for the demands you actually place on it.',
    body: [
      {
        heading: 'Prepared for what?',
        paragraphs: [
          'A runner needs different preparation from a parent carrying children, a golfer, a hotel worker on their feet all day, or an older adult who wants confident stairs and travel. The first step is defining the demands.',
          'A good coach in Salou should ask about your real life before prescribing exercises. Training is only useful if it transfers.',
        ],
      },
      {
        heading: 'The four pillars',
        paragraphs: [
          'Most physical preparation comes down to four qualities: strength, mobility, conditioning and movement skill. The proportions change depending on the person.',
          'Strength gives you capacity. Mobility gives you access to positions. Conditioning gives you the engine to repeat effort. Movement skill lets you express those qualities efficiently.',
        ],
      },
      {
        heading: 'Why the Costa Daurada is useful',
        paragraphs: [
          'Salou and the surrounding Costa Daurada are excellent places to train outside: flat promenades, beach sand, parks, steps, hills nearby and mild weather for much of the year.',
          'That environment can support loaded carries, walking intervals, mobility work, balance, bodyweight strength and conditioning without making every session feel like a gym appointment.',
        ],
      },
      {
        heading: 'What it is not',
        paragraphs: [],
        bullets: [
          'Random circuits until you are exhausted',
          'Athlete-style drills with no reason behind them',
          'Mobility work that never turns into strength',
          'Strength work that ignores movement quality',
          'Conditioning that leaves you too tired to recover',
        ],
      },
      {
        heading: 'A useful weekly structure',
        paragraphs: [
          'For many adults, two focused strength sessions, one conditioning session and short daily mobility work is enough to make meaningful progress. Athletes or active clients may need more specificity, but more is not automatically better.',
          'The best physical preparation plan is the one that improves your life outside the session.',
        ],
      },
    ],
  },
  {
    slug: 'personal-trainer-salou',
    title: 'Personal Trainer in Salou: How to Choose the Right Coach',
    description:
      'A practical guide to choosing a personal trainer in Salou — what to look for, what questions to ask, and how to know if a coach is genuinely a good fit.',
    date: '2026-04-12',
    readingTime: '6 min read',
    intro:
      'If you are looking for a personal trainer in Salou, the choice can feel surprisingly difficult. Big-box gyms, online coaches, sports clubs and independent trainers all promise results — but the right fit depends much more on your goals, history and personal needs than on a flashy package.',
    body: [
      {
        heading: 'Start with your real goals',
        paragraphs: [
          'Before you compare trainers, write down what you actually want to change in the next six to twelve months. Is it stronger knees? More energy? Confidence in the gym again after an injury? A body that handles weekends with the kids?',
          'A good personal trainer should be able to translate those goals into a clear plan and explain how each week is moving you in that direction.',
        ],
      },
      {
        heading: 'Look for an exercise science foundation',
        paragraphs: [
          'A premium personal trainer should be able to talk about training principles — progressive overload, recovery, movement quality, behaviour change — without resorting to gym clichés.',
          'You don’t need a research scientist. You do need someone whose programming is grounded in how the body actually adapts.',
        ],
      },
      {
        heading: 'Ask about injury history and special populations',
        paragraphs: [
          'A coach who shrugs at your back history, your pregnancy, your diabetes or your previous surgery is probably not the right coach.',
          'You want someone who is curious, careful, and clear about scope: comfortable adapting training around your context, and equally comfortable saying when something belongs with a physiotherapist or doctor.',
        ],
      },
      {
        heading: 'Make sure the communication fits',
        paragraphs: [
          'In Salou and the wider Costa Daurada, you’ll find English-speaking, German-speaking and Spanish-speaking trainers. Pick someone you can communicate with naturally — coaching is a relationship, not a transaction.',
        ],
      },
      {
        heading: 'A short checklist',
        paragraphs: [],
        bullets: [
          'Can they explain their approach without using buzzwords?',
          'Do they take a clear history before training you?',
          'Do they progress you in writing, not just in the moment?',
          'Are they honest about scope — what they do and don’t do?',
          'Do you actually feel comfortable around them?',
        ],
      },
    ],
  },
  {
    slug: 'functional-training-salou',
    title: 'Functional Training in Salou: Strength, Mobility and Real-Life Fitness',
    description:
      'What functional training really means, why it matters in Salou and the Costa Daurada, and how to build a body that handles real life.',
    date: '2026-04-05',
    readingTime: '5 min read',
    intro:
      'Functional training has become one of the most over-used words in fitness. Stripped back, it just means training that prepares you for the things you actually do — in life, in sport, in old age, on holiday, with your kids.',
    body: [
      {
        heading: 'The qualities that transfer',
        paragraphs: [
          'Functional training, done well, builds four qualities at once: strength, mobility, conditioning and movement skill. These are the qualities that show up everywhere — from carrying suitcases through Reus airport to climbing stairs in your sixties.',
        ],
      },
      {
        heading: 'Why Salou is a great place to train this way',
        paragraphs: [
          'The Costa Daurada is unusually well-suited to functional training: long flat promenades, beaches, parks, hills nearby, mild weather most of the year, and a culture that already values being outside.',
          'A good coach uses the environment. Sand for stability work, the promenade for sled or carry variations, parks for bodyweight strength, and quiet outdoor spaces for technical lifts where appropriate.',
        ],
      },
      {
        heading: 'What it should not be',
        paragraphs: [
          'Functional training is not a random circuit of unstable surfaces. It is not throwing medicine balls until you’re tired. The structure should look like good strength and conditioning — just better connected to real life.',
        ],
      },
      {
        heading: 'A simple weekly shape',
        paragraphs: [],
        bullets: [
          'Two strength-focused sessions',
          'One conditioning-focused session',
          'Daily mobility — short and consistent',
          'A weekly outdoor session, where possible',
        ],
      },
    ],
  },
  {
    slug: 'personal-trainer-cambrils',
    title: 'Personal Trainer Cambrils: In-Person and Online Coaching Near the Costa Daurada',
    description:
      'A guide to finding a personal trainer in Cambrils — including in-person training, outdoor sessions and online coaching options for residents and expats.',
    date: '2026-03-22',
    readingTime: '5 min read',
    alternatePath: '/es/blog/entrenador-personal-cambrils/',
    intro:
      'Cambrils is a beautiful place to train. It is also a relatively small market, which means choosing a personal trainer is partly about availability and partly about finding someone whose approach fits you long-term.',
    body: [
      {
        heading: 'In-person, outdoor or online?',
        paragraphs: [
          'For many residents in Cambrils, the best option is a blend: in-person sessions when the schedule allows, outdoor functional training when the weather is good, and online coaching as the consistent backbone.',
          'A coach based in nearby Salou can usually cover Cambrils for in-person work, and online coaching removes location as a constraint entirely.',
        ],
      },
      {
        heading: 'What to ask a Cambrils trainer',
        paragraphs: [],
        bullets: [
          'Do you work with international residents and expats?',
          'Can you adapt around old injuries and health conditions?',
          'Can the same plan run online when I travel?',
          'How do you measure progress over six and twelve months?',
        ],
      },
      {
        heading: 'For expats and international residents',
        paragraphs: [
          'Many residents in Cambrils are English- or German-speaking. Coaching in your strongest language matters more than people expect — particularly when you are discussing pain, history, energy or emotion.',
        ],
      },
    ],
  },
  {
    slug: 'english-speaking-personal-trainer-salou',
    title: 'English-Speaking Personal Trainer in Salou and Cambrils',
    description:
      'Why working with an English-speaking personal trainer in Salou and Cambrils matters — particularly for expats, professionals and people with complex health histories.',
    date: '2026-03-08',
    readingTime: '4 min read',
    alternatePath: '/es/blog/entrenador-personal-ingles-salou/',
    intro:
      'Salou, Cambrils and the wider Costa Daurada are home to a growing community of English-speaking expats, international families, professionals and long-term visitors. For many of them, a key part of finding the right personal trainer is finding one they can communicate with naturally.',
    body: [
      {
        heading: 'Why language really matters in coaching',
        paragraphs: [
          'Coaching is a constant conversation: about goals, pain, energy, fatigue, anxiety, motivation, progress and setbacks. Doing that conversation in a second or third language is harder than people admit.',
          'Working with an English-speaking personal trainer in Salou gives you space to describe what you’re actually feeling, not just the words you can find.',
        ],
      },
      {
        heading: 'Where it especially matters',
        paragraphs: [],
        bullets: [
          'Discussing injury history',
          'Talking about pregnancy, postpartum or family planning',
          'Discussing chronic conditions or treatment side effects',
          'Coaching children with special needs',
          'Handling motivation, stress and life balance',
        ],
      },
      {
        heading: 'German speakers and international families',
        paragraphs: [
          'German-speaking residents on the Costa Daurada often face the same challenge in reverse. A coach who is comfortable in English and German can move between languages, which makes coaching couples and families much easier.',
        ],
      },
    ],
  },
  {
    slug: 'injury-prevention-training',
    title: 'Injury Prevention Training: How to Get Stronger Without Breaking Down',
    description:
      'How to train for performance and health without spending your year nursing flare-ups. A practical look at injury prevention and rehabilitation-informed training.',
    date: '2026-02-18',
    readingTime: '6 min read',
    intro:
      'Most adults who train regularly have the same quiet question: how do I keep getting stronger without breaking down? Injury prevention training is not about avoiding effort. It is about distributing effort intelligently.',
    body: [
      {
        heading: 'Capacity is the real protector',
        paragraphs: [
          'Strong, well-conditioned tissues tolerate load. The single biggest predictor of injury risk is usually a sudden change in load — too much, too soon, after too long off.',
          'Building capacity gradually, across all the major patterns, is the foundation of injury prevention.',
        ],
      },
      {
        heading: 'Train the unsexy qualities',
        paragraphs: [],
        bullets: [
          'Slow, controlled strength through full ranges',
          'Position-specific mobility — not just generic stretching',
          'Aerobic base work',
          'Single-leg, single-arm, asymmetric work',
          'Breathing and pacing skills',
        ],
      },
      {
        heading: 'Manage load like a coach, not a fan',
        paragraphs: [
          'Volume and intensity should rise and fall in deliberate cycles. If every week is a hero week, every month becomes a recovery month — usually involuntarily.',
        ],
      },
      {
        heading: 'Know where your scope ends',
        paragraphs: [
          'A rehabilitation-informed coach is comfortable adapting your training around old injuries — and equally comfortable referring you to a physiotherapist, doctor or specialist when something needs proper diagnosis. That balance is what makes the work safe.',
        ],
      },
    ],
  },
  {
    slug: 'exercise-during-pregnancy',
    title: 'Exercise During Pregnancy: A Trimester-by-Trimester Guide',
    description:
      'Safe, evidence-based exercise during pregnancy — trimester adaptations, pelvic floor foundations, and what to modify from a personal trainer in Salou.',
    date: '2026-05-01',
    readingTime: '9 min read',
    intro:
      'Pregnancy does not require you to stop moving. In fact, the evidence strongly supports staying active throughout — with appropriate adaptations and a coach who understands the physiology.',
    body: [
      {
        heading: 'Why exercise matters more than ever during pregnancy',
        paragraphs: [
          'Current guidelines from ACOG, the CSEP Pregnancy Guidelines and NICE all advocate for regular moderate-intensity exercise throughout an uncomplicated pregnancy. The benefits are well-documented: reduced risk of gestational diabetes, better weight management, lower rates of pre-eclampsia, shorter active labour and significantly improved mood and sleep quality.',
        ],
      },
      {
        heading: 'General principles',
        paragraphs: [
          'Aim for moderate intensity — the talk test is a reliable guide. Target 150 minutes of moderate aerobic activity per week. Movement quality over load becomes more important than the kilos on the bar.',
        ],
        bullets: [
          'Avoid supine work from the second trimester',
          'Avoid contact sports and activities with fall risk',
          'Introduce pelvic floor education from the first trimester',
          'Learn to manage intra-abdominal pressure throughout',
        ],
      },
    ],
  },
  {
    slug: 'postpartum-exercise',
    title: 'Postpartum Exercise: A Science-Based Guide to Returning to Training After Birth',
    description:
      'Evidence-based guide to returning to exercise after birth — pelvic floor, diastasis recti and progressive return to training with a personal trainer in Salou.',
    date: '2026-05-02',
    readingTime: '10 min read',
    intro:
      'The six-week clearance from your doctor is a starting point — not a green light to jump back into your previous training. Return to exercise after birth needs to be progressive, pelvic-floor-led and built around your actual recovery.',
    body: [
      {
        heading: 'Why the six-week check is just the beginning',
        paragraphs: [
          'The standard postnatal check clears a woman for general activity. It does not assess pelvic floor function, abdominal wall integrity, load tolerance or readiness for impact. The 2019 return-to-running guidelines recommend waiting a minimum of twelve weeks before returning to running or high-impact activity.',
        ],
      },
      {
        heading: 'Red flag symptoms',
        paragraphs: [
          'A rehabilitation-informed trainer monitors for symptoms indicating the pace of return is too fast.',
        ],
        bullets: [
          'Urinary or faecal leakage with exercise or impact',
          'Pelvic heaviness or prolapse sensation',
          'Coning or doming of the midline during trunk exercises',
          'Pelvic or hip pain during exercise',
        ],
      },
    ],
  },
  {
    slug: 'exercise-with-meniscus-injury',
    title: 'Exercise with Meniscus Injury: How to Keep Training Without Making It Worse',
    description:
      'How to exercise safely with meniscal knee damage. Evidence-based guidance from a rehabilitation-informed personal trainer in Salou on the Costa Daurada.',
    date: '2026-05-03',
    readingTime: '9 min read',
    intro:
      'A meniscal tear does not have to end your training life. With a properly adapted programme and a rehabilitation-informed approach, most people with meniscal knee damage can continue exercising, build meaningful strength and maintain long-term joint health.',
    body: [
      {
        heading: 'What the meniscus does',
        paragraphs: [
          'The menisci act as shock absorbers, distribute compressive load and contribute to proprioception. Meniscal damage reduces proprioceptive signalling from the knee, which in turn increases injury risk for surrounding structures. Research is clear: exercise therapy is at least as effective as arthroscopic surgery for most degenerative meniscal tears.',
        ],
      },
      {
        heading: 'Exercise priorities',
        paragraphs: ['A rehabilitation-informed personal trainer structures lower limb work around four key priorities.'],
        bullets: [
          'Quadriceps strength — the primary load-absorbers for the knee',
          'Hamstring and hip strength — co-stabilisers often underestimated',
          'Proprioception and neuromuscular control',
          'Gradual load progression with pain-free ranges',
        ],
      },
    ],
  },
  {
    slug: 'exercise-with-herniated-disc',
    title: 'Exercise with a Herniated Disc: Building Spinal Capacity Without Fear',
    description:
      'Safe, evidence-based exercise with a herniated disc. Rehabilitation-informed personal training in Salou — build spinal capacity, reduce pain and return to activity.',
    date: '2026-05-04',
    readingTime: '10 min read',
    intro:
      'A herniated disc diagnosis can feel like a sentence. It is not. With the right understanding of spinal mechanics, appropriate exercise selection and progressive loading, most people with a herniated disc can return to meaningful activity.',
    body: [
      {
        heading: 'The evidence for exercise over rest',
        paragraphs: [
          'Bed rest was the standard recommendation for decades. The evidence has reversed this comprehensively. Exercise reduces pain, restores proprioceptive input to the spine and builds the muscular support structures around the lumbar vertebrae.',
        ],
      },
      {
        heading: 'Exercise priorities',
        paragraphs: [],
        bullets: [
          'Walking — promotes disc nutrition through movement',
          'Hip hinge patterns with neutral spine',
          'Glute and hip strengthening',
          'Core stability: dead bugs, pallof press, bird-dogs',
        ],
      },
    ],
  },
  {
    slug: 'exercise-with-diabetes',
    title: 'Exercise with Type 2 Diabetes: The Most Powerful Tool You Are Probably Under-Using',
    description:
      'How to exercise safely and effectively with Type 2 diabetes. Evidence-based guidance on insulin sensitivity, blood glucose management and training in Salou.',
    date: '2026-05-05',
    readingTime: '10 min read',
    intro:
      'Exercise is not a lifestyle add-on for people with Type 2 diabetes. It is a pharmacologically significant intervention — one that improves insulin sensitivity, reduces HbA1c and lowers cardiovascular risk with an effectiveness comparable to medication in many cases.',
    body: [
      {
        heading: 'Why exercise is so effective',
        paragraphs: [
          'During aerobic exercise, muscle cells can take up glucose through an insulin-independent pathway. Resistance training builds skeletal muscle mass — the primary site of insulin-stimulated glucose disposal. The combination of aerobic and resistance training consistently produces better glycaemic outcomes than either modality alone.',
        ],
      },
      {
        heading: 'Practical strategies',
        paragraphs: [],
        bullets: [
          'Break up sitting time — a ten-minute walk after meals is highly effective',
          'No more than two consecutive days without exercise',
          'Two to three resistance training sessions per week',
          'Consistency over intensity for glycaemic outcomes',
        ],
      },
    ],
  },
  {
    slug: 'exercise-autism-children',
    title: 'Exercise for Children with Autism: Sensory-Friendly Movement That Builds Confidence',
    description:
      'Sensory-friendly movement and exercise for children with autism in Salou. Evidence-based, structured physical activity from a special populations coach on the Costa Daurada.',
    date: '2026-05-06',
    readingTime: '10 min read',
    intro:
      'Children with autism benefit enormously from structured physical activity — but the standard gym or sports setting is often poorly designed for their sensory and social needs. With the right environment and approach, movement can be transformative.',
    body: [
      {
        heading: 'Understanding sensory processing in ASD',
        paragraphs: [
          'Sensory processing differences are a defining feature of ASD. A sensory-informed coach uses input strategically — deep pressure and proprioceptive loading at the start of a session can regulate the nervous system and improve focus for the work that follows.',
        ],
      },
      {
        heading: 'Principles of effective coaching',
        paragraphs: [],
        bullets: [
          'Predictability and routine — consistent session structure',
          'Clear, concrete instruction — show rather than tell',
          'Task analysis and chaining — break movements into small steps',
          'Positive reinforcement — specific, immediate feedback',
          'Managing dysregulation with sensory strategies',
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
