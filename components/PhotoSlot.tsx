/**
 * Premium photo slot.
 *
 * Pass `src` to render a real <img>, otherwise a designed coastal placeholder
 * appears with a small "Photo · {label}" tag so the layout reads as final
 * while photography is in production.
 *
 * Replacement is one prop: <PhotoSlot src="/images/hero.webp" alt="..." label="hero portrait" />
 */
type Variant = 'portrait' | 'landscape' | 'square';

type Props = {
  /** When set, renders a real image. Otherwise a styled placeholder. */
  src?: string;
  /** Required for accessibility when src is set. */
  alt?: string;
  /** Short description shown in the corner of the placeholder. */
  label: string;
  /** Aspect ratio variant. */
  variant?: Variant;
  /** Override the gradient mood. */
  tone?: 'sea' | 'sand' | 'sage';
  className?: string;
  priority?: boolean;
};

const ratio: Record<Variant, string> = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
};

export default function PhotoSlot({
  src,
  alt = '',
  label,
  variant = 'portrait',
  tone = 'sea',
  className = '',
  priority,
}: Props) {
  if (src) {
    return (
      <figure
        className={`relative w-full ${ratio[variant]} overflow-hidden rounded-3xl border border-soft-border shadow-lift ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </figure>
    );
  }

  // Placeholder palette by tone
  const palette: Record<NonNullable<Props['tone']>, { from: string; to: string; band: string }> = {
    sea: { from: '#1F5361', to: '#12313B', band: '#7E8F7A' },
    sand: { from: '#F3E8D8', to: '#FBF7EF', band: '#C77652' },
    sage: { from: '#7E8F7A', to: '#5C6E5C', band: '#F3E8D8' },
  };
  const p = palette[tone];

  return (
    <figure
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`relative w-full ${ratio[variant]} overflow-hidden rounded-3xl border border-soft-border shadow-lift ${className}`}
    >
      <svg
        viewBox="0 0 500 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id={`g-${tone}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.from} />
            <stop offset="100%" stopColor={p.to} />
          </linearGradient>
          <radialGradient id={`s-${tone}`} cx="78%" cy="22%" r="22%">
            <stop offset="0%" stopColor="#F1D6B5" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F3E8D8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="500" height="600" fill={`url(#g-${tone})`} />
        <circle cx="380" cy="135" r="120" fill={`url(#s-${tone})`} />
        <path
          d="M0 360 C 120 345, 250 380, 370 365 S 500 360, 500 360 L500 600 L0 600 Z"
          fill={p.band}
          opacity="0.35"
        />
        <path d="M0 350 L500 350" stroke="#FBF7EF" strokeOpacity="0.18" strokeWidth="1.5" />
        <path d="M0 380 L500 380" stroke="#FBF7EF" strokeOpacity="0.10" strokeWidth="1.5" />
      </svg>
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warm-white/85 backdrop-blur text-[11px] uppercase tracking-label text-deep-navy border border-soft-border">
        <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-terracotta" />
        Photo · {label}
      </div>
    </figure>
  );
}
