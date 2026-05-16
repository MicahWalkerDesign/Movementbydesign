import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium coastal palette
        'deep-navy': '#12313B',          // Deep coastal blue
        'coastal-blue': '#1F5361',       // Grounded blue (primary CTA)
        'coastal-blue-dark': '#12313B',  // hover -> deep
        sand: '#F3E8D8',
        clay: '#A07B5A', // earthy brown — section accent (passes 5.4:1 vs deep-navy)
        'warm-white': '#FBF7EF',
        olive: '#7E8F7A',                // Sage (semantic alias kept)
        sage: '#7E8F7A',
        terracotta: '#C77652',
        charcoal: '#13292F',
        'muted-grey': '#4F6168',
        'soft-border': '#E5D9C2',
        'success-green': '#7E8F7A',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Inter Tight', 'Satoshi', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,42,67,0.04), 0 8px 24px rgba(16,42,67,0.06)',
        lift: '0 2px 4px rgba(16,42,67,0.05), 0 16px 36px rgba(16,42,67,0.10)',
      },
      maxWidth: {
        prose: '68ch',
      },
      letterSpacing: {
        label: '0.12em',
      },
    },
  },
  plugins: [],
};

export default config;
