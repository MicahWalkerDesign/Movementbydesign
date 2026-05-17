import { ImageResponse } from 'next/og';

/**
 * Dynamic Open Graph image generator.
 *
 * URL: /api/og?title=Page+Title&subtitle=Optional+subtitle&eyebrow=Optional+eyebrow
 *
 * Returns a 1200×630 PNG matching the Movement by Design brand:
 * - Warm-white background with subtle radial gradient (mirrors hero-grad)
 * - Deep-navy heading typography
 * - Terracotta accent dot + coastal-blue accent line
 * - Brand lockup at bottom
 *
 * `buildMetadata()` in lib/seo.ts auto-populates this URL when no per-page
 * og image is supplied, so every page gets a branded social card for free.
 */
export const runtime = 'edge';

// Brand palette (must match tailwind.config.ts hex values)
const COLOR = {
  deepNavy: '#12313B',
  coastalBlue: '#1F5361',
  sand: '#F3E8D8',
  warmWhite: '#FBF7EF',
  terracotta: '#C77652',
  charcoal: '#13292F',
  mutedGrey: '#4F6168',
  softBorder: '#E5D9C2',
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const titleRaw = searchParams.get('title') || 'Movement by Design';
  const subtitleRaw = searchParams.get('subtitle') || '';
  const eyebrowRaw = searchParams.get('eyebrow') || 'Movement by Design';

  // Truncate to keep layout from breaking
  const title = titleRaw.length > 90 ? titleRaw.slice(0, 87).trimEnd() + '…' : titleRaw;
  const subtitle =
    subtitleRaw.length > 140 ? subtitleRaw.slice(0, 137).trimEnd() + '…' : subtitleRaw;
  const eyebrow = eyebrowRaw.length > 40 ? eyebrowRaw.slice(0, 37) + '…' : eyebrowRaw;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: COLOR.warmWhite,
          // Satori doesn't support radial-gradient — use a linear-gradient
          // tinted in the brand coastal-blue/terracotta corners instead.
          backgroundImage: `linear-gradient(135deg, rgba(31,83,97,0.06) 0%, rgba(251,247,239,0) 35%, rgba(251,247,239,0) 65%, rgba(199,118,82,0.07) 100%)`,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          color: COLOR.deepNavy,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: COLOR.coastalBlue,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: COLOR.terracotta,
              display: 'block',
            }}
          />
          {eyebrow}
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: COLOR.terracotta,
            borderRadius: 2,
            marginTop: 24,
            marginBottom: 32,
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? 60 : 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: COLOR.deepNavy,
            maxWidth: 1040,
            display: 'flex',
          }}
        >
          {title}
        </div>

        {/* Subtitle (optional) */}
        {subtitle ? (
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.35,
              color: COLOR.charcoal,
              opacity: 0.85,
              maxWidth: 1000,
              display: 'flex',
            }}
          >
            {subtitle}
          </div>
        ) : null}

        {/* Spacer pushes brand lockup to bottom */}
        <div style={{ flex: 1 }} />

        {/* Brand lockup */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid ${COLOR.softBorder}`,
            paddingTop: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Brand mark */}
            <div
              style={{
                position: 'relative',
                width: 44,
                height: 44,
                borderRadius: '50%',
                backgroundColor: COLOR.coastalBlue,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 6,
                  borderRadius: '50%',
                  backgroundColor: COLOR.warmWhite,
                }}
              />
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: COLOR.terracotta,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: COLOR.deepNavy,
              }}
            >
              Movement by Design
            </div>
          </div>
          <div
            style={{
              fontSize: 20,
              color: COLOR.mutedGrey,
              letterSpacing: '0.04em',
            }}
          >
            Salou · Cambrils · Tarragona
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
