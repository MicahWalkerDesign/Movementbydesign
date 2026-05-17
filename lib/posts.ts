export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  /** Topical category shown in listings and post headers (e.g. "Injury Prevention"). */
  category?: string;
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
  {
    slug: 'five-tissues-injury-prevention',
    title: 'The 5 Tissues That Get Injured Most in Recreational Athletes — and How to Train Them Resilient',
    description:
      'Tendon, muscle, bone, joint and fascia: the five tissue categories behind most recreational injuries, and how to load each one to build genuine resilience.',
    date: '2026-05-17',
    readingTime: '9 min read',
    alternatePath: '/es/blog/cinco-tejidos-prevencion-lesiones/',
    intro:
      'If you ride, run, lift or play padel often enough, you will eventually meet one of five tissues complaining about its workload. Almost every recreational injury — patellar tendon, hamstring, shin, hip, plantar fascia — is a story about a specific tissue that was loaded faster than it could adapt. Knowing which tissue is failing matters, because each one has a different time course and a different loading strategy. Treating a tendon like a muscle, or a bone like a tendon, is one of the most common reasons rehab stalls.',
    body: [
      {
        heading: 'Why think in tissues at all',
        paragraphs: [
          'Diagnostic labels — "runner\'s knee", "tennis elbow", "shin splints" — describe a location, not a mechanism. The mechanism is at the tissue level. Tendons remodel in response to mechanical strain. Muscle adapts quickly to eccentric overload. Bone responds to repetitive bending and compression, but on a far slower clock. Cartilage needs cyclical loading just to stay nourished. Fascia and peripheral nerves have their own behaviours again.',
          'Once you can identify which of the five categories is symptomatic, the training plan more or less writes itself: pick the load type that drives adaptation in that tissue, dose it inside the tissue\'s recovery window, and progress on the timeline the tissue actually obeys.',
        ],
      },
      {
        heading: '1. Tendon',
        paragraphs: [
          'Tendons live or die by mechanotransduction — the conversion of mechanical strain into cellular signalling that drives collagen turnover (Khan & Scott, BJSM 2009). Without strain, tendons get weaker. With too much strain too quickly, they become reactive: swollen, painful, sensitive in the morning. Cook and Purdam\'s continuum model (BJSM 2009) describes the progression from reactive tendinopathy to dysrepair to degenerative change, and the practical point is that most recreational tendon problems are reactive — and reactive tendons respond very well to graded loading.',
          'The loading ladder is well established: heavy isometrics for pain modulation in the acute phase, heavy slow resistance for structural adaptation through the middle phase, and energy-storage work — jumping, bounding, change of direction — only once the tendon tolerates slow loading without next-day flare. Patellar tendons in jumping athletes, Achilles tendons in runners, and the common extensor origin at the lateral elbow in padel players all follow the same logic.',
          'Padel elbow is endemic at the Cambrils and Salou clubs because volume creeps up faster than the wrist extensor tendons can adapt. Two months of three-times-a-week sessions is a sharp load step for any tendon, and the symptoms usually arrive about six weeks in.',
        ],
      },
      {
        heading: '2. Muscle and its connective sheaths',
        paragraphs: [
          'Muscle is the most adaptable of the five tissues. It rebuilds after damaging exercise within days, and the repeated-bout effect means a second exposure produces a fraction of the soreness of the first. The clinically relevant distinction is between DOMS, which is normal post-eccentric soreness, and a strain, which is a structural disruption of fibres at the muscle–tendon junction.',
          'Hamstring strains in sprinters and footballers are the textbook example. The evidence for Nordic hamstring curls as a preventive measure is among the strongest in the field — multiple controlled trials show roughly halved injury rates in athletes who perform them consistently. The mechanism is straightforward: eccentric strength at long muscle lengths is the specific quality that protects against the late-swing-phase tear.',
          'For the recreational athlete the lesson generalises: muscles that are exposed to controlled eccentric load at end range tolerate the uncontrolled eccentric load of sport with much higher reliability.',
        ],
      },
      {
        heading: '3. Bone',
        paragraphs: [
          'Wolff\'s law, modernised, says that bone remodels in response to the strains it experiences — but on a timescale of months, not weeks. A muscle can be visibly stronger in eight weeks. A tibia adapts on a roughly three-to-six month curve. That mismatch is why stress reactions and stress fractures occur predominantly in people who increased their running volume sharply.',
          'The progression goes stress reaction (bone marrow oedema, often invisible on x-ray) to stress fracture (a visible line) to complete fracture. Calcaneal and tibial stress fractures are the most common in recreational runners. The Salou seafront promenade is forgiving terrain, but volume on any surface follows the same rules — the bone needs time.',
          'Female athletes deserve a specific note. Relative Energy Deficiency in Sport (RED-S) — under-fuelling relative to training load — suppresses oestrogen, impairs bone formation and substantially raises stress fracture risk. If menstrual cycles have become irregular or absent, that is a clinical issue, not a training issue, and it belongs with a doctor before any further volume is added.',
        ],
      },
      {
        heading: '4. Joint structures: cartilage, capsule, labrum',
        paragraphs: [
          'Articular cartilage has no blood supply. It is nourished by synovial fluid that is pumped through it by cyclical compression — which is to say, by walking, squatting and loading the joint. The persistent myth that load wears out joints has the physiology backwards: appropriate cyclical load is what keeps cartilage healthy (Buckwalter and colleagues have written extensively on this).',
          'Osteoarthritis is correlated more strongly with disuse, obesity and prior joint injury than with athletic loading. Knee meniscal degeneration in middle-aged adults is now considered a normal age-related finding on MRI in many cases, and exercise therapy is at least as effective as arthroscopy for degenerative tears.',
          'Hip labral irritation and femoroacetabular impingement show up in cyclists and padel players who spend long periods in deep hip flexion. Capsule and labrum respond to the same general principle — graded exposure, with a particular emphasis on building strength in the ranges that the sport actually demands.',
        ],
      },
      {
        heading: '5. Fascia and peripheral nerve',
        paragraphs: [
          'Plantar fasciitis is mostly a misnomer. Histological studies show degenerative change rather than inflammation, so "plantar fasciopathy" is the more accurate term. It behaves like a tendon problem and responds to the same loading logic: progressive calf and intrinsic foot strengthening, not stretching alone.',
          'Peripheral nerves need mobility through their surrounding tissues. Sciatic nerve irritation in runners and lifters is rarely a structural pinch — more often it is reduced nerve excursion through the posterior hip and hamstring. Nerve gliding work has a role, but the larger answer is usually building hip and posterior chain strength so the nerve sits in a less reactive environment.',
          'Stretching a fascia or a nerve more aggressively when it is already sensitised is one of the more common mistakes recreational athletes make. The remedy is almost always load-tolerance, not length.',
        ],
      },
      {
        heading: 'The principle underneath all five',
        paragraphs: [
          'Progressive load with adequate recovery beats intensity-by-feel in every tissue category. The old "10% per week" rule is a useful slogan but a clumsy tool — it ignores baseline fitness, prior load, sleep and life stress. A more honest approach is weekly load monitoring: track sessions, perceived effort and how the next morning felt, and let the trend make decisions about progression.',
          'Most flare-ups are the result of a single sharp jump — a tournament weekend, a holiday catch-up week, a return after illness — landing on a tissue that had not been prepared for it.',
        ],
      },
      {
        heading: 'How Movement by Design programmes for tissue resilience',
        paragraphs: [
          'Assessment starts with history rather than tests. Which tissues have been problematic before? What is the current weekly load across sport and training? What does the next three months look like? From there, the programme runs in phases: an early capacity-building phase that loads the historically vulnerable tissues specifically, a development phase that adds sport-relevant power or endurance qualities, and deload weeks every fourth or fifth week to let slower-adapting tissues catch up to faster ones.',
          'For padel players that often means dedicated tendon work for the elbow and patellar tendon, single-leg strength for the knee and hip, and rotational power as a separate quality. For runners it means calf and foot loading, gradual mileage progression, and bone-aware deloads.',
        ],
      },
      {
        heading: 'When to see a coach and when to see a physio',
        paragraphs: [
          'A rehabilitation-informed coach can manage most niggles, capacity gaps and returns from old injuries. A physiotherapist or doctor is the right call when pain is unexplained, worsening despite sensible loading, associated with neurological symptoms, linked to trauma, or accompanied by night pain or systemic features.',
          'The best outcomes usually involve both — a clinician to clarify diagnosis and a coach to turn the advice into a weekly training habit. Plenty of rehab fails not because the diagnosis was wrong but because nobody owned the eight months of progressive loading that came after it.',
        ],
      },
      {
        heading: 'Putting it together',
        paragraphs: [
          'If you train recreationally on the Costa Daurada — running the seafront, lifting at home, or playing padel in Salou and Cambrils — most injury prevention reduces to identifying your historically vulnerable tissues and giving them slightly more attention than the rest. Personal training in Salou that takes a rehabilitation-informed approach should be able to explain, in plain terms, which tissue it is training in any given exercise and on what timeline it expects adaptation. If a coach cannot do that, the programme is guessing.',
        ],
      },
    ],
  },
  {
    slug: 'strength-training-for-padel-players',
    title: 'Strength Training for Padel Players: The 4 Capacities That Beat Time on Court',
    description:
      'Rotational power, deceleration, single-leg strength and shoulder stability — the four physical capacities that move padel players forward faster than more court hours.',
    date: '2026-05-17',
    readingTime: '10 min read',
    alternatePath: '/es/blog/entrenamiento-de-fuerza-padel/',
    intro:
      'Padel is the fastest-growing sport in Spain, and the Costa Daurada has clubs at almost every turn. The common story among intermediate players is the same: stuck at a level, adding more court hours, no real progress, and a slow accumulation of niggles in the elbow, knee and shoulder. In most of these cases the bottleneck is not technique. It is physical capacity. Four qualities, trained properly, will do more for a recreational player in six months than another two hours per week on court.',
    body: [
      {
        heading: 'Capacity 1: Rotational power',
        paragraphs: [
          'The smash, the víbora, the bandeja and the recovery off the back wall all initiate at the hip–trunk interface. Power is generated by the legs and pelvis, transferred through a stiff trunk, and delivered by the arm. Players who try to hit harder by swinging the arm harder usually lose accuracy and develop elbow problems within a few months.',
          'The training is straightforward but rarely done: medicine-ball rotational throws against a wall, cable wood-chops in both directions, half-kneeling Pallof presses for anti-rotation, and heavy hip-hinge strength as the foundation underneath. Rate of force development matters here — Suchomel and colleagues (Sports Medicine, 2016) summarised the evidence that strength provides the ceiling, but explosive intent at moderate loads is what converts that strength into usable power.',
        ],
        bullets: [
          'Medicine-ball rotational throw — 4 sets of 5 each side, explosive intent',
          'Cable wood-chop, high to low and low to high — 3 sets of 8 each side',
          'Half-kneeling Pallof press — 3 sets of 10 each side, slow',
          'Trap-bar deadlift or hip thrust — 3 sets of 5, heavy',
        ],
      },
      {
        heading: 'Capacity 2: Deceleration and change-of-direction strength',
        paragraphs: [
          'Padel is built on short accelerations and sharper decelerations. The point ends when someone fails to brake, not when someone fails to sprint. Eccentric quadriceps and gluteal strength is the quality that protects the knee and the hamstring during these stops. Bourne and colleagues (Sports Medicine, 2018) showed eccentric hamstring strength to be among the most consistent predictors of hamstring injury risk in field-sport athletes — the same logic applies to padel.',
          'The work looks like backwards-running drills, depth landings into a stable hold, lateral bounds with a controlled stick, and slow eccentric tempo on split-squats. The goal is not to be impressive in the air; it is to be quiet and controlled on landing.',
        ],
        bullets: [
          'Box step-down with 3-second eccentric — 3 sets of 6 each leg',
          'Lateral bound with stick landing — 3 sets of 4 each side',
          'Nordic hamstring curl — 3 sets of 5, progressing slowly',
          'Backwards-running and shuffle drills as part of warm-up',
        ],
      },
      {
        heading: 'Capacity 3: Single-leg and ankle strength',
        paragraphs: [
          'Most lower-limb injuries in padel happen on one leg — a lunge to the side wall, a stretch for a low ball, a slide that the ankle did not expect. Bilateral squats are not a bad exercise, but they will not prepare a player for these moments. Single-leg work has to be in the programme.',
          'Bulgarian split squats, single-leg Romanian deadlifts, step-ups loaded to a meaningful weight, and calf raises with a deliberate eccentric phase are the staples. The calf and tibialis anterior take a particular beating in padel because of the constant push-off and braking — calf raise endurance and tibialis raises are simple, effective, and almost universally neglected.',
        ],
        bullets: [
          'Bulgarian split squat — 3 sets of 6–8 each leg',
          'Single-leg Romanian deadlift — 3 sets of 8 each leg',
          'Calf raise with 3-second eccentric — 3 sets of 10',
          'Tibialis raise against wall — 3 sets of 15',
        ],
      },
      {
        heading: 'Capacity 4: Shoulder external rotators and scapular stability',
        paragraphs: [
          'The bandeja position — overhead, slightly behind the body, decelerating — is hard on the rotator cuff and posterior shoulder. Padel elbow often originates higher up the chain, in a shoulder that lacks the external rotation strength and scapular control to keep the elbow in a good position. Cools and colleagues (BJSM 2014) outlined a sensible framework for overhead athletes that maps neatly onto padel: build scapular stability first, then external rotation strength, then dynamic control at sport-specific positions.',
          'The exercises are not exciting and that is the point. They have to be done consistently.',
        ],
        bullets: [
          'Prone Y-T-W raises — 2 sets of 8 of each',
          'Side-lying external rotation with dumbbell — 3 sets of 12',
          'Serratus push-up — 3 sets of 10',
          'Face pull with external rotation — 3 sets of 12',
        ],
      },
      {
        heading: 'A two-day-a-week template',
        paragraphs: [
          'Two sessions a week is enough for almost any recreational player, provided the sessions are well-organised. The template below is the one most of my padel clients run during the competitive months.',
        ],
        bullets: [
          'Day A — Lower emphasis: trap-bar deadlift 4×5, Bulgarian split squat 3×8, lateral bound 3×4, calf raise 3×10, Pallof press 3×10',
          'Day B — Upper and rotational: med-ball rotational throw 4×5, cable wood-chop 3×8, single-leg RDL 3×8, Y-T-W 2×8, side-lying external rotation 3×12',
          'Warm-up both days: 5 minutes of light movement, then mobility and activation specific to that day\'s session',
          'Deload week every fourth or fifth week — sets drop, intensity stays moderate',
        ],
      },
      {
        heading: 'What about cardio',
        paragraphs: [
          'Padel is a repeat-sprint sport on a small court. The aerobic base should be there — a couple of weekly zone-2 walks or easy cycling sessions of 30–45 minutes — because it determines how quickly you recover between points and between matches. On top of that, short repeat-sprint intervals once a week (6–8 efforts of 10–15 seconds with full recovery) prepare the system for the highest-intensity exchanges. Long, hard interval sessions are not necessary and tend to interfere with strength work.',
        ],
      },
      {
        heading: 'Recovery between matches',
        paragraphs: [
          'Sleep is the variable that moves performance most predictably. Seven to nine hours, consistently, beats every supplement on the market. Protein at roughly 1.6 grams per kilogram of bodyweight per day supports recovery and tissue maintenance. For tournament weekends, treat the days either side as deload — light movement, mobility, and a deliberate reduction in training load. Players who try to maintain their normal training week during a tournament block are the ones who carry injuries into the second half of the season.',
        ],
      },
      {
        heading: 'Common mistakes',
        paragraphs: [
          'A small number of mistakes account for most of the wasted effort I see in recreational padel players in the gym.',
        ],
        bullets: [
          'Training like a bodybuilder — high-volume isolation work that fatigues without building power',
          'Skipping single-leg work because bilateral squats feel productive',
          'Never lifting heavy enough — strength is the ceiling for power, and three sets of fifteen will not build it',
          'Treating rotator cuff work as a warm-up afterthought instead of programmed strength work',
          'Adding court hours when stuck, instead of adding the physical capacity the court hours require',
        ],
      },
      {
        heading: 'Putting it on the calendar',
        paragraphs: [
          'For players at the Cambrils and Salou clubs, the practical version of all this is two strength sessions a week, scheduled on the days you do not play. If you play three times a week, lift on the two days you do not play. If you play four times, lift on two of the off-days and accept that one of those lifts will be moderate. The gains arrive in the third and fourth months — not the first — and they show up first as fewer niggles, then as a noticeably harder smash and a faster recovery between points.',
          'Strength training for padel is not glamorous and not complicated. Done consistently for a season, it does more for level than any other intervention available to a recreational player.',
        ],
      },
    ],
  },
  {
    slug: 'active-recovery-vs-rest',
    title: 'Why "Resting It" Often Makes Injuries Worse: An Exercise Physiologist\'s Guide to Active Recovery',
    description:
      'Why the default advice to rest a sore tendon, joint or back for two weeks usually backfires, and what the evidence actually says about active recovery and progressive load.',
    date: '2026-05-17',
    readingTime: '8 min read',
    category: 'Injury Prevention',
    alternatePath: '/es/blog/recuperacion-activa-vs-reposo/',
    intro:
      'The most common advice given for a sore knee, an irritable Achilles or a grumbling lower back is to rest it for a week or two and see how it feels. For genuinely acute, high-grade injuries that advice has a narrow window of utility. For the niggles, recurrences and chronic complaints that make up the bulk of musculoskeletal presentations in adults, it is the wrong default. Tissues do not heal in a vacuum. They remodel in response to load.',
    body: [
      {
        heading: 'What disuse actually does',
        paragraphs: [
          'The physiology of unloading is well described. Wall and colleagues (Acta Physiologica, 2014) showed that five days of single-leg immobilisation in healthy young men reduced quadriceps cross-sectional area by around 3.5% and isometric strength by roughly 9%. Fourteen days produced losses closer to 8% in muscle size and 23% in strength. Older adults lose more, faster.',
          'Aerobic capacity drops faster than strength. A two-week layoff can knock several percent off VO2max in trained individuals. Tendon stiffness declines as well: collagen turnover slows, the tendon becomes less able to tolerate the same load it handled before, and re-introducing activity at the previous volume produces a flare. The "rest until it feels better" loop then repeats.',
          'This is the mechanism behind the familiar pattern: pain settles with two weeks off, the person returns to the activity that hurt, and within a fortnight the symptoms are back. The tissue was not being healed by the rest. It was being deconditioned.',
        ],
      },
      {
        heading: 'Relative rest, not absolute rest',
        paragraphs: [
          'The concept worth borrowing from sports medicine is relative rest: remove the specific loading vector that is currently aggravating the tissue, and keep the rest of the system working. A runner with reactive patellar tendinopathy does not need to stop training. They need to stop the spikes — hill repeats, deep squats, plyometrics — while continuing cycling, upper-body strength work and isometric quadriceps loading.',
          'A client with lateral elbow pain from pickleball can train legs, hinge, press overhead within tolerance, and load the wrist extensors isometrically. Sitting on the couch for two weeks gives the elbow nothing useful and removes everything else.',
        ],
      },
      {
        heading: 'The genuine 48 to 72 hour exception',
        paragraphs: [
          'There is a narrow category where short-term protection is appropriate: acute soft-tissue injuries with a clear mechanism and significant tissue disruption — a Grade II hamstring strain after a sprint, a moderate ankle sprain, a sudden calf tear. For these, the current consensus framework is PEACE and LOVE (Dubois and Esculier, British Journal of Sports Medicine, 2020).',
        ],
        bullets: [
          'Protection — unload for the first one to three days, only as long as needed',
          'Elevation — to assist venous return',
          'Avoid anti-inflammatories in the early phase — they may impair tissue repair',
          'Compression — to limit swelling',
          'Education — set realistic expectations and avoid unnecessary imaging',
          'Load — reintroduce mechanical stress as symptoms permit',
          'Optimism — psychological factors meaningfully predict outcome',
          'Vascularisation — pain-free aerobic activity from early on',
          'Exercise — restore mobility, strength and proprioception progressively',
        ],
      },
      {
        heading: 'Subacute and chronic complaints — where most people live',
        paragraphs: [
          'The majority of musculoskeletal problems that walk through a coaching door are not in the acute window. They are tendinopathies that have grumbled for months, low backs that flare every few weeks, knees that ache on stairs, shoulders that catch overhead. For these, load is the medicine.',
          'In tendinopathy, the Cook and Purdam continuum (BJSM, 2009) and subsequent loading work has reframed the problem: tendons respond to progressive mechanical stress through isometric holds, then heavy slow resistance, then energy-storage loading. Rest reduces both pain and capacity in the short term, and capacity does not return on its own.',
          'In low back pain, graded exposure and progressive loading outperform avoidance in every modern guideline. In knee osteoarthritis, the GLA:D programme (Skou and Roos, BMC Musculoskeletal Disorders, 2017) — eight weeks of supervised neuromuscular exercise and education — produces clinically meaningful improvements in pain and function across thousands of participants, often comparable to surgical alternatives for appropriate candidates. In shoulder impingement, progressive rotator cuff and scapular loading consistently beats passive treatment.',
        ],
      },
      {
        heading: 'A practical decision tree',
        paragraphs: [
          'Most adults do not need a flowchart, but the following four questions cover the great majority of presentations.',
        ],
        bullets: [
          'Is the pain above 7/10, sharp, electric, or accompanied by significant swelling, locking or neurological symptoms? See a clinician before training.',
          'Did this happen in the last 72 hours with a clear mechanism? Protect briefly, then follow PEACE and LOVE.',
          'Has it been grumbling, niggling or recurring for weeks or months? The answer is progressive load, not rest.',
          'Does it hurt during the activity but feel fine after, and not flare the next morning? That is a green light to continue training within that envelope.',
        ],
      },
      {
        heading: 'The pain monitoring rule',
        paragraphs: [
          'The most useful clinical tool for guiding load through symptomatic tissue is the traffic-light system originally described in Silbernagel\'s Achilles tendinopathy work (American Journal of Sports Medicine, 2007). Pain on a 0 to 10 scale during loading is acceptable up to roughly 3 to 5 out of 10, provided two conditions are met: pain returns to baseline within 24 hours, and symptoms do not progressively worsen week to week.',
          'This rule lets people train through symptomatic tendons and joints without the guesswork. It also disarms the most common psychological trap — the assumption that any pain during exercise means damage.',
        ],
      },
      {
        heading: 'What active recovery actually looks like',
        paragraphs: [
          'Active recovery is not foam rolling and a smoothie. In a structured programme it means specific work that loads the affected tissue at an intensity it can currently tolerate, alongside everything else the person can still do safely.',
        ],
        bullets: [
          'Low-load aerobic work — walking, cycling, swimming — to maintain cardiovascular conditioning and assist tissue perfusion',
          'Isometric loading of the symptomatic tissue at sub-symptomatic intensities for pain modulation',
          'Heavy slow resistance work for the surrounding musculature that is not aggravated',
          'Mobility work where it actually changes symptoms, not as a reflex',
          'Sleep, protein intake and total weekly load monitored as carefully as the exercises themselves',
        ],
      },
      {
        heading: 'A few myths worth retiring',
        paragraphs: [
          'Inflammation is not the enemy. It is the early phase of the repair process. Routinely suppressing it with NSAIDs in the first 48 hours is associated with impaired tendon and muscle healing in animal models and in some human work — hence its placement in the "avoid" column of PEACE and LOVE.',
          'Stretching does not prevent injury in any meaningful way for most populations. Multiple systematic reviews have failed to find a protective effect for static stretching prior to activity. It can feel good, and it can help in specific stiffness presentations, but it should not be sold as injury prevention.',
          'The plan to "start training again when it stops hurting" frequently produces years of inactivity. For chronic tendinopathy and recurrent back pain, the symptom often does not fully resolve until load capacity has been rebuilt. The order of operations is the reverse of what most people assume.',
        ],
      },
      {
        heading: 'Coach or clinician',
        paragraphs: [
          'See a physiotherapist or doctor first when there are red flags — severe pain, neurological signs, significant trauma, suspected fracture, or symptoms that are getting worse rather than better. See a coach with rehabilitation experience when you have a diagnosis or a stable chronic complaint and need someone to build progressive load around it. The two roles complement each other; they are not interchangeable.',
        ],
      },
      {
        heading: 'Putting it to work',
        paragraphs: [
          'If you are in Salou or Cambrils and you have been sitting on a niggling shoulder, knee or Achilles for months, the most likely missing ingredient is structured, progressive loading — not more rest. Personal training in Salou with a rehabilitation-informed approach means we build the plan around what the tissue can currently tolerate, monitor symptoms with the traffic-light rule, and progress load on a timeline that matches biology rather than impatience. Injury prevention and return-to-activity work share the same principles: load, recover, repeat, measure. If you would like to talk through a specific complaint, the contact page is the place to start.',
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
