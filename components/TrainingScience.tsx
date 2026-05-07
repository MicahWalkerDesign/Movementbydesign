/**
 * Training science block.
 *
 * Two custom SVG visuals — no chart library, ~zero JS overhead — that
 * communicate two ideas:
 *   1. Strength and conditioning capacity tends to peak in the late 20s
 *      to early 30s, and consistent training preserves it for decades.
 *   2. Two to three structured sessions per week is the threshold where
 *      most adults move from maintenance into real progress.
 *
 * Wording is kept inside the brief's scope rules: general principles, no
 * medical claims, no "treat / cure / prevent disease" language.
 */
export default function TrainingScience() {
  return (
    <section className="section bg-warm-white">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="eyebrow">Training science</span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-deep-navy">
            Why most adults need 2–3 sessions per week
          </h2>
          <p className="mt-5 prose-body max-w-prose">
            Strength and conditioning capacity tends to peak in the late 20s to early 30s.
            From there, training is what protects it — and the threshold where most adults
            move from maintenance into real progress sits around two to three structured
            sessions a week.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1 — capacity over the lifespan */}
          <article className="card flex flex-col">
            <span className="text-xs uppercase tracking-label text-coastal-blue">
              Capacity across the lifespan
            </span>
            <h3 className="mt-2 font-heading font-semibold text-xl text-deep-navy">
              Peak in your late 20s. Held by training.
            </h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed text-[0.95rem]">
              Strength, power and conditioning capacity tend to peak around age 30. Without
              regular training, capacity declines steadily from there. With consistent,
              well-designed training, much of it can be preserved decades longer.
            </p>

            <div className="mt-6 rounded-2xl bg-warm-white border border-soft-border p-4">
              <LifespanChart />
            </div>

            <p className="mt-4 text-xs text-muted-grey">
              General pattern. Individual response varies with genetics, training history,
              health context and life stage.
            </p>
          </article>

          {/* Card 2 — frequency vs adaptation */}
          <article className="card flex flex-col">
            <span className="text-xs uppercase tracking-label text-coastal-blue">
              Weekly training frequency
            </span>
            <h3 className="mt-2 font-heading font-semibold text-xl text-deep-navy">
              Two to three sessions is the threshold.
            </h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed text-[0.95rem]">
              One session a week tends to maintain. Two to three is where most adults make
              real progress and offset the wear of a sedentary day. Beyond that, adaptation
              is limited more by recovery than by effort.
            </p>

            <div className="mt-6 rounded-2xl bg-warm-white border border-soft-border p-4">
              <FrequencyChart />
            </div>

            <p className="mt-4 text-xs text-muted-grey">
              Frequency, intensity and recovery are tuned together. Your plan adapts to
              your body, not the other way around.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Lifespan chart ---------- */

function LifespanChart() {
  return (
    <svg
      viewBox="0 0 500 280"
      role="img"
      aria-label="Strength and conditioning capacity across the lifespan, peaking around age 30"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="trainedFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F5361" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1F5361" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Baseline + peak guide */}
      <line x1="60" y1="220" x2="460" y2="220" stroke="#E5D9C2" strokeWidth="1" />
      <line
        x1="140"
        y1="50"
        x2="140"
        y2="220"
        stroke="#E5D9C2"
        strokeWidth="1"
        strokeDasharray="3 5"
      />

      {/* Trained area fill (under trained curve, down to baseline) */}
      <path
        d="M 60 88 Q 100 60 140 55 Q 180 60 220 68 Q 260 78 300 88 Q 340 100 380 112 Q 420 126 460 140 L 460 220 L 60 220 Z"
        fill="url(#trainedFill)"
      />

      {/* Untrained capacity curve (typical decline) */}
      <path
        d="M 60 90 Q 100 60 140 55 Q 180 65 220 82 Q 260 102 300 124 Q 340 148 380 168 Q 420 188 460 200"
        fill="none"
        stroke="#C77652"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Trained capacity curve (capacity preserved) */}
      <path
        d="M 60 88 Q 100 60 140 55 Q 180 60 220 68 Q 260 78 300 88 Q 340 100 380 112 Q 420 126 460 140"
        fill="none"
        stroke="#1F5361"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="0"
      />

      {/* Peak marker */}
      <circle cx="140" cy="55" r="9" fill="#1F5361" fillOpacity="0.15" />
      <circle cx="140" cy="55" r="4.5" fill="#1F5361" />

      {/* Peak label */}
      <text
        x="140"
        y="38"
        fontFamily="Inter Tight, Inter, system-ui"
        fontSize="11"
        fontWeight="600"
        fill="#13292F"
        textAnchor="middle"
      >
        Peak ≈ age 30
      </text>

      {/* Y label */}
      <text
        x="60"
        y="44"
        fontFamily="Inter, system-ui"
        fontSize="10"
        fill="#667A82"
      >
        Relative capacity
      </text>

      {/* X axis ticks */}
      <g
        fontFamily="Inter, system-ui"
        fontSize="10.5"
        fill="#667A82"
        textAnchor="middle"
      >
        {[
          { age: 20, x: 60 },
          { age: 30, x: 140 },
          { age: 40, x: 220 },
          { age: 50, x: 300 },
          { age: 60, x: 380 },
          { age: 70, x: 460 },
        ].map((t) => (
          <text key={t.age} x={t.x} y={238}>
            {t.age}
          </text>
        ))}
        <text x={260} y={258} fill="#13292F">
          Age
        </text>
      </g>

      {/* Legend */}
      <g fontFamily="Inter, system-ui" fontSize="10.5" fill="#13292F">
        <line x1="60" y1="200" x2="80" y2="200" stroke="#1F5361" strokeWidth="2.5" />
        <text x="86" y="203.5">Trained</text>
        <line x1="170" y1="200" x2="190" y2="200" stroke="#C77652" strokeWidth="2.5" />
        <text x="196" y="203.5">Untrained</text>
      </g>
    </svg>
  );
}

/* ---------- Frequency chart ---------- */

function FrequencyChart() {
  // Each bar: { label, height (0-100%), tone, top label }
  const bars = [
    { label: '0×', topLabel: 'Decline', height: 14, tone: 'mute' as const },
    { label: '1×', topLabel: 'Maintain', height: 42, tone: 'sage' as const },
    { label: '2×', topLabel: 'Progress', height: 78, tone: 'blue' as const },
    { label: '3×', topLabel: 'Optimum', height: 100, tone: 'blue' as const, peak: true },
    { label: '4+×', topLabel: 'Recovery limited', height: 80, tone: 'sage' as const },
  ];

  const baseY = 220;
  const maxBarHeight = 160;
  const barWidth = 50;
  const startX = 70;
  const gap = 30;

  const colour = (tone: 'mute' | 'sage' | 'blue') =>
    tone === 'blue' ? '#1F5361' : tone === 'sage' ? '#7E8F7A' : '#C9BFB0';

  return (
    <svg
      viewBox="0 0 500 280"
      role="img"
      aria-label="How weekly training frequency relates to adaptation. Two to three sessions per week is the optimum range."
      className="w-full h-auto"
    >
      {/* Baseline */}
      <line x1="40" y1={baseY} x2="470" y2={baseY} stroke="#E5D9C2" strokeWidth="1" />

      {/* Y label */}
      <text
        x="40"
        y="44"
        fontFamily="Inter, system-ui"
        fontSize="10"
        fill="#667A82"
      >
        Adaptation
      </text>

      {bars.map((b, i) => {
        const h = (b.height / 100) * maxBarHeight;
        const x = startX + i * (barWidth + gap);
        const y = baseY - h;
        return (
          <g key={b.label}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={h}
              rx="6"
              fill={colour(b.tone)}
            />
            {b.peak && (
              <>
                <circle cx={x + barWidth / 2} cy={y - 14} r="4.5" fill="#C77652" />
              </>
            )}
            <text
              x={x + barWidth / 2}
              y={y - 8}
              fontFamily="Inter, system-ui"
              fontSize="10.5"
              fill={b.peak ? '#C77652' : b.tone === 'blue' ? '#1F5361' : '#667A82'}
              fontWeight={b.peak ? 700 : 600}
              textAnchor="middle"
            >
              {b.topLabel}
            </text>
            <text
              x={x + barWidth / 2}
              y={baseY + 18}
              fontFamily="Inter Tight, Inter, system-ui"
              fontSize="12"
              fontWeight="600"
              fill="#13292F"
              textAnchor="middle"
            >
              {b.label}
            </text>
          </g>
        );
      })}

      <text
        x="250"
        y="258"
        fontFamily="Inter, system-ui"
        fontSize="10.5"
        fill="#667A82"
        textAnchor="middle"
      >
        Sessions per week
      </text>
    </svg>
  );
}
