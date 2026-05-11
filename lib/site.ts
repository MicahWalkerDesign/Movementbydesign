export const SITE = {
  name: 'Movement by Design',
  url: 'https://www.movementbydesign.es',
  email: 'micah.walker@gmail.com',
  phone: '+34 665 518 632',
  youtube: 'https://www.youtube.com/@MovementConsultant',
  linkedin: 'https://www.linkedin.com/in/micah-walker-246745101/',
  // WhatsApp Business number — full international format, no + or spaces.
  whatsapp: '34665518632',
  // Formspree form ID — sign up free at formspree.io, create a form pointed at
  // micah.walker@gmail.com, then paste the 8-char ID from the endpoint URL here.
  // Example: if your endpoint is https://formspree.io/f/xabc1234, set 'xabc1234'.
  // Leave empty to fall back to the mailto link.
  formspreeId: '',
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
