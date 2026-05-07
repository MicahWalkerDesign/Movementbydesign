/**
 * SVG hero placeholder — premium coastal/Mediterranean feel.
 * No external image dependency, ships zero kilobytes of JS.
 * Replace with a real WebP/AVIF photograph later via <picture>.
 */
export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden border border-soft-border shadow-lift">
      <svg
        viewBox="0 0 500 600"
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label="Calm coastal Mediterranean training scene"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E9DCC4" />
            <stop offset="55%" stopColor="#F4EBDD" />
            <stop offset="100%" stopColor="#FAF8F4" />
          </linearGradient>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2F6F8F" />
            <stop offset="100%" stopColor="#102A43" />
          </linearGradient>
          <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E9DCC4" />
            <stop offset="100%" stopColor="#D9C7A6" />
          </linearGradient>
          <radialGradient id="sun" cx="78%" cy="22%" r="20%">
            <stop offset="0%" stopColor="#F6D9B6" />
            <stop offset="100%" stopColor="#F4EBDD" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="500" height="600" fill="url(#sky)" />
        <circle cx="390" cy="130" r="110" fill="url(#sun)" />

        {/* horizon hills */}
        <path d="M0 320 C 80 295, 160 310, 240 300 S 400 295, 500 310 L500 360 L0 360 Z" fill="#8FA0AB" opacity="0.45" />
        {/* sea */}
        <rect x="0" y="345" width="500" height="115" fill="url(#sea)" />
        {/* light reflections */}
        <path d="M0 380 L500 380" stroke="#F4EBDD" strokeOpacity="0.18" strokeWidth="2" />
        <path d="M0 405 L500 405" stroke="#F4EBDD" strokeOpacity="0.10" strokeWidth="1.5" />
        <path d="M0 425 L500 425" stroke="#F4EBDD" strokeOpacity="0.08" strokeWidth="1.5" />

        {/* sand */}
        <path d="M0 440 C 120 430, 250 470, 370 450 S 500 460, 500 460 L500 600 L0 600 Z" fill="url(#sand)" />

        {/* abstract figure performing controlled mobility — calm, confident, no bodybuilder cliche */}
        <g stroke="#102A43" strokeWidth="6" strokeLinecap="round" fill="none">
          {/* head */}
          <circle cx="225" cy="305" r="14" fill="#102A43" stroke="none" />
          {/* spine */}
          <path d="M225 320 C 222 360, 230 400, 240 430" />
          {/* arms — reaching forward in a hinge */}
          <path d="M232 345 C 260 350, 290 355, 315 360" />
          <path d="M218 345 C 200 350, 188 360, 178 372" />
          {/* legs — split squat / hinge stance */}
          <path d="M240 432 C 260 450, 290 470, 320 478" />
          <path d="M238 432 C 220 460, 200 480, 175 486" />
        </g>

        {/* terracotta accent shape — small kettlebell silhouette */}
        <g transform="translate(305 470)">
          <path d="M0 8 C 0 -4, 22 -4, 22 8 L24 10 C 30 12, 30 30, 11 30 C -8 30, -8 12, -2 10 Z" fill="#C96F4A" />
        </g>

        {/* horizon strip overlay for premium feel */}
        <rect x="0" y="345" width="500" height="2" fill="#F4EBDD" opacity="0.65" />
      </svg>
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-deep-navy/70">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta" />
        Costa Daurada — Salou
      </div>
    </div>
  );
}
