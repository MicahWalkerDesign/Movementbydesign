export const SITE = {
  name: 'Movement by Design',
  // Project-pages URL. Update to a custom domain (e.g. https://movementbydesign.es)
  // and unset BASE_PATH in next.config.mjs once the domain is connected.
  url: 'https://micahwalkerdesign.github.io/Movementbydesign',
  email: 'micah.walker@gmail.com',
  youtube: 'https://www.youtube.com/@MovementConsultant',
  linkedin: 'https://www.linkedin.com/in/micah-walker-246745101/',
  // WhatsApp: replace with full international number (no +, no spaces) when available.
  // Example: '34600000000' for +34 600 000 000. Leave empty to hide WhatsApp links.
  whatsapp: '',
  locality: 'Salou',
  region: 'Tarragona',
  country: 'Spain',
  serviceAreas: [
    'Salou',
    'Cambrils',
    'Tarragona',
    'La Pineda',
    'Vila-seca',
    'Reus',
    'Costa Daurada',
  ],
  languages: ['English', 'German', 'Spanish'],
  description:
    'Premium personal training, exercise science coaching, functional fitness and health coaching in Salou, Cambrils and Tarragona.',
} as const;

export const NAV_LINKS = [
  { href: '/personal-training-salou/', label: 'Services' },
  { href: '/special-populations-exercise/', label: 'Special Populations' },
  { href: '/online-coaching/', label: 'Online Coaching' },
  { href: '/about/', label: 'About' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const MEDICAL_DISCLAIMER =
  'Movement by Design provides exercise science-based coaching, personal training, health education and rehabilitation-informed exercise support. It does not replace medical diagnosis, physiotherapy, dietetic treatment or specialist healthcare. For medical conditions, pregnancy, cancer, diabetes, neurological conditions or post-surgical recovery, coaching may be adapted alongside medical or allied-health guidance where appropriate.';
