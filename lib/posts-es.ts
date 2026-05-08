export type PostEs = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
};

export const POSTS_ES: PostEs[] = [
  {
    slug: 'ejercicio-durante-el-embarazo',
    title: 'Ejercicio durante el embarazo: guía trimestral',
    description:
      'Guía trimestral del ejercicio durante el embarazo con un entrenador personal en Salou. Evidencia científica, suelo pélvico y adaptaciones seguras en la Costa Daurada.',
    date: '2026-05-01',
    readingTime: '9 min de lectura',
  },
  {
    slug: 'ejercicio-postparto',
    title: 'Ejercicio posparto: vuelta al entrenamiento después del parto',
    description:
      'Guía científica para volver al ejercicio después del parto. Suelo pélvico, diástasis y recuperación progresiva con entrenador personal en Salou, Costa Daurada.',
    date: '2026-05-02',
    readingTime: '10 min de lectura',
  },
  {
    slug: 'ejercicio-con-lesion-menisco',
    title: 'Ejercicio con lesión de menisco: cómo seguir entrenando',
    description:
      'Cómo entrenar con seguridad con daño meniscal en la rodilla. Guía basada en evidencia de un entrenador personal orientado a la rehabilitación en Salou, Costa Daurada.',
    date: '2026-05-03',
    readingTime: '9 min de lectura',
  },
  {
    slug: 'ejercicio-con-hernia-discal',
    title: 'Ejercicio con hernia discal: construir capacidad espinal sin miedo',
    description:
      'Ejercicio seguro y eficaz con hernia discal lumbar. Entrenamiento orientado a la rehabilitación en Salou — construye capacidad espinal y recupera la actividad.',
    date: '2026-05-04',
    readingTime: '10 min de lectura',
  },
  {
    slug: 'ejercicio-con-diabetes',
    title: 'Ejercicio con diabetes tipo 2: la herramienta más poderosa',
    description:
      'Cómo hacer ejercicio de forma segura y eficaz con diabetes tipo 2. Guía basada en evidencia sobre sensibilidad a la insulina y entrenamiento en Salou, Costa Daurada.',
    date: '2026-05-05',
    readingTime: '10 min de lectura',
  },
  {
    slug: 'ejercicio-autismo-ninos',
    title: 'Ejercicio para niños con autismo: movimiento sensorial',
    description:
      'Movimiento sensorial y ejercicio para niños con autismo en Salou. Actividad física estructurada y basada en evidencia de un entrenador de poblaciones especiales en la Costa Daurada.',
    date: '2026-05-06',
    readingTime: '10 min de lectura',
  },
];
