import type { Locale } from './routes';

/**
 * Shared UI strings used by Header, Footer, StickyCTA and small chrome.
 * Page-level body content lives in each app/es/.../page.tsx for clarity.
 */
export const UI = {
  en: {
    nav: {
      services: 'Services',
      specialPopulations: 'Special Populations',
      onlineCoaching: 'Online Coaching',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
    },
    cta: {
      bookCall: 'Book a free intro call',
      sendEnquiry: 'Send an enquiry',
      sendMessage: 'Send a message',
    },
    footer: {
      tagline: 'Personal training and health coaching in Salou, Cambrils and Tarragona.',
      languages: 'Languages: English (native), German (fluent), Spanish (learning)',
      serviceAreas: 'Service areas',
      explore: 'Explore',
      contact: 'Contact',
      copyright: 'All rights reserved.',
    },
    explore: {
      personalTraining: 'Personal Training',
      functionalTraining: 'Functional Training',
      injuryPrevention: 'Injury Prevention',
      specialPopulations: 'Special Populations',
      onlineCoaching: 'Online Coaching',
      nutritionHabits: 'Nutrition Habits',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
    },
    languageSwitcher: {
      switchTo: 'Switch to Spanish',
      label: 'ES',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      specialPopulations: 'Poblaciones Especiales',
      onlineCoaching: 'Coaching Online',
      about: 'Sobre mí',
      blog: 'Blog',
      contact: 'Contacto',
    },
    cta: {
      bookCall: 'Reserva una llamada gratuita',
      sendEnquiry: 'Envía una consulta',
      sendMessage: 'Envíame un mensaje',
    },
    footer: {
      tagline: 'Entrenamiento personal y coaching de salud en Salou, Cambrils y Tarragona.',
      languages: 'Idiomas: inglés (nativo), alemán (fluido), español (en aprendizaje)',
      serviceAreas: 'Zonas de servicio',
      explore: 'Explora',
      contact: 'Contacto',
      copyright: 'Todos los derechos reservados.',
    },
    explore: {
      personalTraining: 'Entrenamiento Personal',
      functionalTraining: 'Entrenamiento Funcional',
      injuryPrevention: 'Prevención de Lesiones',
      specialPopulations: 'Poblaciones Especiales',
      onlineCoaching: 'Coaching Online',
      nutritionHabits: 'Hábitos de Nutrición',
      about: 'Sobre mí',
      blog: 'Blog',
      contact: 'Contacto',
    },
    languageSwitcher: {
      switchTo: 'Cambiar a inglés',
      label: 'EN',
    },
  },
} as const;

export const MEDICAL_DISCLAIMER_ES =
  'Movement by Design ofrece coaching basado en ciencias del ejercicio, entrenamiento personal, educación en salud y apoyo de ejercicio orientado a la rehabilitación. No sustituye el diagnóstico médico, la fisioterapia, el tratamiento dietético ni la atención clínica especializada. Para condiciones médicas, embarazo, cáncer, diabetes, condiciones neurológicas o recuperación posquirúrgica, el coaching puede adaptarse junto con la orientación médica o sanitaria correspondiente.';

export function ui(lang: Locale) {
  return UI[lang];
}
