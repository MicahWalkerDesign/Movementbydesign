'use client';

import { useState } from 'react';

type Props = {
  videoId?: string;
  title: string;
  channelHref: string;
};

/**
 * Click-to-load YouTube card. Avoids loading the heavy YouTube iframe on initial page load.
 * If videoId is provided, click loads the embed. Otherwise it links out to the channel.
 */
export default function YouTubeCard({ videoId, title, channelHref }: Props) {
  const [active, setActive] = useState(false);

  if (active && videoId) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-soft-border">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  const Inner = (
    <>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(800px 320px at 30% 30%, rgba(47,111,143,0.35), transparent 60%), linear-gradient(180deg, #102A43 0%, #1F2933 100%)',
        }}
      />
      <div className="relative h-full w-full grid place-items-center text-warm-white">
        <div className="flex flex-col items-center gap-3 text-center px-6">
          <span className="grid place-items-center w-16 h-16 rounded-full bg-warm-white/15 backdrop-blur border border-warm-white/30">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" fill="#FAF8F4" />
            </svg>
          </span>
          <span className="font-heading text-lg">{title}</span>
          <span className="text-xs uppercase tracking-label text-warm-white/70">
            Watch on YouTube
          </span>
        </div>
      </div>
    </>
  );

  if (videoId) {
    return (
      <button
        onClick={() => setActive(true)}
        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-soft-border focus-visible:outline-coastal-blue"
        aria-label={`Play video: ${title}`}
      >
        {Inner}
      </button>
    );
  }
  return (
    <a
      href={channelHref}
      target="_blank"
      rel="noreferrer noopener"
      className="relative block w-full aspect-video rounded-2xl overflow-hidden border border-soft-border"
    >
      {Inner}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
