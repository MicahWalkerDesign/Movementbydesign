import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#102A43',
        'coastal-blue': '#2F6F8F',
        'coastal-blue-dark': '#235772',
        sand: '#F4EBDD',
        'warm-white': '#FAF8F4',
        olive: '#7C8A5B',
        terracotta: '#C96F4A',
        charcoal: '#1F2933',
        'muted-grey': '#667085',
        'soft-border': '#E7DFD3',
        'success-green': '#6F8F72',
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'Montserrat', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
