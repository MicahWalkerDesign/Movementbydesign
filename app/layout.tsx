import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema, personSchema } from '@/lib/seo';
import { SITE } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FBF7EF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Personal Trainer Salou | Premium Exercise Science & Health Coaching',
    template: '%s',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: 'Micah Walker' }],
  creator: 'Micah Walker',
  publisher: SITE.name,
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg`,
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_GB',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-deep-navy focus:text-warm-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={personSchema()} />
      </body>
    </html>
  );
}
