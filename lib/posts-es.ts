export type PostEs = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  category?: string;
  alternatePath?: string;
  intro?: string;
  body?: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
};

export const POSTS_ES: PostEs[] = [
  {
    slug: 'entrenador-personal-a-domicilio-salou',
    title: 'Entrenador personal a domicilio en Salou: cómo funciona',
    description:
      'Guía práctica sobre entrenamiento personal a domicilio en Salou: para quién sirve, qué material necesitas y cómo progresar sin un gimnasio tradicional.',
    date: '2026-05-11',
    readingTime: '6 min de lectura',
    category: 'Entrenamiento Personal',
    alternatePath: '/blog/in-home-personal-training-salou/',
    intro:
      'Para muchas personas, el problema no es la motivación. Es la logística. Trabajo, familia, horarios, confianza, dolor antiguo y la fricción de ir al gimnasio pueden bloquear el hábito. Un entrenador personal a domicilio en Salou puede ser una solución muy práctica cuando el programa está bien diseñado.',
    body: [
      {
        heading: 'Entrenar en casa no es una versión menor',
        paragraphs: [
          'Una buena sesión a domicilio no intenta copiar un gimnasio completo. Usa el espacio, el material y el horario reales de la persona para construir un plan que pueda progresar semana a semana.',
          'La gran ventaja es la adherencia. Si entrenar en casa elimina la barrera de desplazarte, vestirte para el gimnasio o sentirte observado, ya has ganado una parte importante del proceso.',
        ],
      },
      {
        heading: 'Para quién tiene sentido',
        paragraphs: [
          'El entrenamiento personal a domicilio funciona bien para profesionales ocupados, padres y madres, adultos mayores, personas que vuelven tras una lesión y clientes que no se sienten cómodos en un gimnasio lleno.',
          'También puede encajar para residentes temporales o visitantes frecuentes de Salou que quieren mantener estructura sin contratar una membresía larga.',
        ],
      },
      {
        heading: 'Qué material necesitas',
        paragraphs: [
          'No hace falta montar un gimnasio en casa. Unas mancuernas ajustables, bandas, una esterilla y una superficie estable permiten muchísimo trabajo. Al principio, incluso el peso corporal, el tempo, las pausas y el rango de movimiento pueden crear estímulo suficiente.',
          'La pregunta importante no es cuánto material tienes, sino si podemos progresar de forma segura con lo que hay. Si tus objetivos requieren más carga, el entrenador debe decírtelo con claridad.',
        ],
      },
      {
        heading: 'Cómo debería ser una sesión',
        paragraphs: [],
        bullets: [
          'Revisión breve de energía, sueño, dolor y estrés',
          'Preparación de movimiento adaptada a tu cuerpo',
          'Dos a cuatro ejercicios principales de fuerza',
          'Trabajo de movilidad o control cuando aporta valor real',
          'Una nota clara de progresión para la siguiente sesión',
        ],
      },
      {
        heading: 'Cuándo es mejor otro entorno',
        paragraphs: [
          'El domicilio no siempre es la mejor respuesta. Si quieres desarrollar mucha fuerza de tren inferior, potencia, cargas pesadas o acondicionamiento con más espacio, puede convenir una sesión al aire libre o en un espacio de entrenamiento adecuado.',
          'El mejor formato es el que puedes repetir con constancia y que todavía permite progresar.',
        ],
      },
    ],
  },
  {
    slug: 'entrenador-personal-lesiones-salou',
    title: 'Entrenador personal para lesiones en Salou: entrenar sin miedo',
    description:
      'Cómo entrenar con lesiones antiguas, dolor o historial médico con un entrenador personal orientado a la rehabilitación en Salou.',
    date: '2026-05-10',
    readingTime: '7 min de lectura',
    category: 'Lesión y Rehabilitación',
    alternatePath: '/blog/training-with-injuries-salou/',
    intro:
      'Muchas personas no buscan el entrenamiento más duro de Salou. Buscan una forma de entrenar sin reactivar el dolor de espalda, rodilla, hombro o cadera. Ese es un problema de coaching diferente y necesita más cuidado.',
    body: [
      {
        heading: 'El dolor cambia el trabajo',
        paragraphs: [
          'Cuando alguien tiene historial de lesión, la primera tarea no es demostrar dureza. Es entender el contexto: qué pasó, qué diagnóstico existe, qué empeora los síntomas, qué ayudó antes y qué movimientos generan miedo.',
          'Un entrenador personal orientado a la rehabilitación no diagnostica. Su función es construir capacidad dentro de límites adecuados, comunicarse bien y trabajar junto a fisioterapia o medicina cuando haga falta.',
        ],
      },
      {
        heading: 'El objetivo es capacidad, no evitación',
        paragraphs: [
          'Evitar todo lo que molesta puede parecer seguro a corto plazo, pero muchas veces reduce tu mundo. Un buen entrenamiento devuelve opciones: agacharte, cargar, caminar más, subir escaleras o volver al deporte.',
          'El proceso suele ser más lento, técnico e individual que una rutina estándar. Eso no es una debilidad. Es precisamente lo que lo hace útil.',
        ],
      },
      {
        heading: 'Preguntas importantes antes de empezar',
        paragraphs: [],
        bullets: [
          '¿Existe diagnóstico? ¿Quién lo hizo?',
          '¿Hay señales de alarma que necesitan atención médica primero?',
          '¿Qué movimientos duelen o dan miedo ahora?',
          '¿Qué actividades quieres recuperar?',
          '¿Cómo mediremos progreso además del dolor?',
        ],
      },
      {
        heading: 'Cómo suele empezar el entrenamiento',
        paragraphs: [
          'Primero se buscan puntos de entrada tolerables: rangos, cargas, tempos y posiciones que permiten moverte con control. Después se amplía la exposición poco a poco.',
          'La fuerza es central. Tejidos más fuertes suelen tolerar mejor la vida. La clave es la dosis: suficiente estímulo para adaptarte, no tanto que la semana siguiente sea apagar incendios.',
        ],
      },
      {
        heading: 'Cuándo derivar',
        paragraphs: [
          'Si el dolor no tiene explicación, empeora, aparece con síntomas neurológicos, viene de un trauma o no se comporta como esperamos, debe verlo un profesional sanitario. Un buen entrenador debe decirlo sin ego.',
          'El mejor modelo suele ser simple: el clínico marca diagnóstico y límites; el entrenador ayuda a construir el hábito y la capacidad semana a semana.',
        ],
      },
    ],
  },
  {
    slug: 'entrenador-personal-ingles-salou',
    title: 'Entrenador personal en inglés en Salou: por qué el idioma importa',
    description:
      'Por qué trabajar con un entrenador personal en inglés en Salou puede marcar la diferencia para expats, familias internacionales y clientes con historial complejo.',
    date: '2026-05-09',
    readingTime: '5 min de lectura',
    category: 'Expats y Costa Daurada',
    alternatePath: '/blog/english-speaking-personal-trainer-salou/',
    intro:
      'Salou, Cambrils y la Costa Daurada tienen una comunidad internacional real: residentes, familias, profesionales, visitantes de larga estancia y personas que dividen su vida entre países. Para muchos, entrenar en inglés no es un lujo. Es una cuestión de claridad.',
    body: [
      {
        heading: 'El coaching es una conversación continua',
        paragraphs: [
          'Una sesión de entrenamiento no es solo contar repeticiones. Hablas de dolor, confianza, cansancio, sueño, estrés, objetivos, frustración y progreso. Explicar esas cosas en un idioma débil puede cambiar completamente la calidad del trabajo.',
          'Cuando puedes hablar en inglés con naturalidad, es más fácil describir lo que sientes y tomar decisiones buenas sobre el entrenamiento.',
        ],
      },
      {
        heading: 'Dónde importa más',
        paragraphs: [],
        bullets: [
          'Historial de lesiones o dolor persistente',
          'Embarazo, posparto o cambios importantes de salud',
          'Niños o familias con necesidades especiales',
          'Clientes mayores que necesitan instrucciones claras',
          'Personas con ansiedad o poca confianza en el gimnasio',
        ],
      },
      {
        heading: 'Inglés, alemán y español práctico',
        paragraphs: [
          'Un entrenador que trabaja en inglés y alemán puede ser especialmente útil para familias internacionales en Salou y Cambrils. También permite explicar detalles técnicos sin perder precisión.',
          'El español sigue siendo importante para integrarse localmente, pero en temas de salud, dolor y objetivos personales conviene tener un idioma donde puedas matizar.',
        ],
      },
      {
        heading: 'Qué buscar',
        paragraphs: [
          'Busca un entrenador que no solo “hable inglés”, sino que pueda explicar programación, técnica, adaptaciones y expectativas con calma. El idioma debe hacerte sentir más seguro, no más confundido.',
          'Si tienes un historial complejo, la comunicación clara puede ser tan importante como el ejercicio elegido.',
        ],
      },
    ],
  },
  {
    slug: 'preparador-fisico-salou',
    title: 'Preparador físico en Salou: fuerza, movilidad y rendimiento real',
    description:
      'Qué hace un preparador físico en Salou: fuerza, movilidad, acondicionamiento y rendimiento duradero para deporte, trabajo y vida diaria.',
    date: '2026-05-08',
    readingTime: '6 min de lectura',
    category: 'Preparación Física',
    alternatePath: '/blog/physical-preparation-salou/',
    intro:
      'La preparación física no es solo para atletas. Es una idea muy útil para cualquier persona: preparar el cuerpo para las demandas reales que tendrá que soportar en deporte, trabajo, familia, viajes y envejecimiento.',
    body: [
      {
        heading: 'Prepararte para qué',
        paragraphs: [
          'Un corredor, un jugador de pádel, una madre con niños pequeños, una persona que trabaja muchas horas de pie y un adulto mayor que quiere subir escaleras con confianza no necesitan exactamente lo mismo.',
          'Por eso un buen preparador físico empieza con preguntas: qué haces, qué quieres recuperar, qué te duele, qué quieres mejorar y qué demandas tiene tu vida real.',
        ],
      },
      {
        heading: 'Las cuatro cualidades principales',
        paragraphs: [
          'La mayoría de programas se apoyan en cuatro pilares: fuerza, movilidad, acondicionamiento y habilidad de movimiento. La proporción cambia según la persona.',
          'La fuerza da capacidad. La movilidad abre posiciones. El acondicionamiento te permite repetir esfuerzos. La habilidad de movimiento hace que todo sea más eficiente y seguro.',
        ],
      },
      {
        heading: 'Por qué Salou es buen lugar para entrenar',
        paragraphs: [
          'Salou y la Costa Daurada ofrecen un entorno muy útil: paseos llanos, playa, parques, escaleras, colinas cercanas y buen clima gran parte del año.',
          'Ese entorno permite trabajo de resistencia, fuerza con autocargas, movilidad, equilibrio, caminatas cargadas y sesiones al aire libre que no se sienten como una rutina de gimnasio más.',
        ],
      },
      {
        heading: 'Lo que no debería ser',
        paragraphs: [],
        bullets: [
          'Circuitos aleatorios hasta acabar agotado',
          'Ejercicios de atleta sin motivo',
          'Movilidad que nunca se convierte en fuerza',
          'Fuerza que ignora la calidad del movimiento',
          'Cardio que te deja sin recuperación',
        ],
      },
      {
        heading: 'Una estructura semanal útil',
        paragraphs: [
          'Para muchos adultos, dos sesiones de fuerza, una sesión de acondicionamiento y movilidad breve diaria pueden ser suficientes para cambiar mucho.',
          'La preparación física debe mejorar tu vida fuera de la sesión. Si no transfiere, no está cumpliendo su trabajo.',
        ],
      },
    ],
  },
  {
    slug: 'entrenador-personal-cambrils',
    title: 'Entrenador personal en Cambrils: presencial, exterior y online',
    description:
      'Cómo elegir entrenador personal en Cambrils: sesiones presenciales, entrenamiento al aire libre, coaching online y opciones para residentes internacionales.',
    date: '2026-05-07',
    readingTime: '5 min de lectura',
    category: 'Costa Daurada',
    alternatePath: '/blog/personal-trainer-cambrils/',
    intro:
      'Cambrils es un sitio excelente para entrenar: paseo marítimo, playa, calma fuera de temporada y cercanía a Salou, Tarragona y Reus. Pero elegir entrenador personal en Cambrils no va solo de encontrar a alguien cerca.',
    body: [
      {
        heading: 'Presencial, exterior u online',
        paragraphs: [
          'Para muchos clientes, el mejor formato es una mezcla. Sesiones presenciales cuando el horario lo permite, entrenamiento exterior cuando el clima acompaña y coaching online para mantener continuidad cuando viajas.',
          'Un entrenador basado cerca de Salou puede cubrir Cambrils en persona, y el coaching online permite que el plan no se rompa cuando cambian los horarios.',
        ],
      },
      {
        heading: 'Qué preguntar antes de empezar',
        paragraphs: [],
        bullets: [
          '¿Trabajas con residentes internacionales y expats?',
          '¿Puedes adaptar el plan si tengo lesiones antiguas?',
          '¿Cómo medimos progreso a tres y seis meses?',
          '¿Puedo mantener el mismo plan online si viajo?',
          '¿Qué material necesito para empezar?',
        ],
      },
      {
        heading: 'El valor del entorno',
        paragraphs: [
          'Cambrils ofrece un entorno muy cómodo para caminar, hacer acondicionamiento suave, movilidad y trabajo técnico. Para clientes que se sienten saturados por el gimnasio, esto puede facilitar muchísimo la constancia.',
          'El entrenamiento al aire libre no tiene que ser improvisado. Puede estar igual de programado que una sesión de fuerza en sala.',
        ],
      },
      {
        heading: 'Para expats y familias internacionales',
        paragraphs: [
          'Muchas personas en Cambrils hablan inglés, alemán u otros idiomas además del español. Poder entrenar en un idioma cómodo importa especialmente cuando hay dolor, miedo, objetivos complejos o poca experiencia entrenando.',
          'La comunicación clara reduce incertidumbre y hace que el proceso sea más sostenible.',
        ],
      },
    ],
  },
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
  {
    slug: 'cinco-tejidos-prevencion-lesiones',
    title: 'Los 5 tejidos que más se lesionan en deportistas recreativos — y cómo entrenarlos para ser resistentes',
    description:
      'Tendón, músculo, hueso, articulación y fascia: las cinco categorías de tejido detrás de la mayoría de lesiones recreativas, y cómo cargar cada una para construir resistencia real.',
    date: '2026-05-17',
    readingTime: '9 min de lectura',
    category: 'Prevención de Lesiones',
    alternatePath: '/blog/five-tissues-injury-prevention/',
    intro:
      'Si corres, levantas pesas o juegas al pádel con cierta frecuencia, antes o después uno de cinco tejidos acabará protestando. Casi todas las lesiones recreativas — tendón rotuliano, isquiotibiales, tibia, cadera, fascia plantar — son la historia de un tejido concreto cargado más rápido de lo que podía adaptarse. Identificar de qué tejido se trata importa, porque cada uno tiene un ritmo distinto y una estrategia de carga distinta. Tratar un tendón como si fuera músculo, o un hueso como si fuera tendón, es uno de los motivos más habituales por los que una rehabilitación se estanca.',
    body: [
      {
        heading: 'Por qué pensar en tejidos',
        paragraphs: [
          'Las etiquetas diagnósticas — “rodilla del corredor”, “codo de tenista”, “periostitis tibial” — describen una zona, no un mecanismo. El mecanismo está en el tejido. El tendón remodela en respuesta a la deformación mecánica. El músculo se adapta rápido al trabajo excéntrico. El hueso responde a flexiones y compresiones repetidas, pero en un reloj mucho más lento. El cartílago necesita carga cíclica solo para nutrirse. La fascia y el nervio periférico tienen comportamientos propios.',
          'Cuando puedes identificar cuál de las cinco categorías está sintomática, el plan se escribe casi solo: elige el tipo de carga que impulsa la adaptación de ese tejido, dosifícala dentro de su ventana de recuperación y progresa según el calendario que ese tejido realmente respeta.',
        ],
      },
      {
        heading: '1. Tendón',
        paragraphs: [
          'El tendón vive de la mecanotransducción — la conversión de la deformación mecánica en señales celulares que regulan el recambio de colágeno (Khan y Scott, BJSM 2009). Sin carga, el tendón se debilita. Con demasiada carga demasiado rápido, se vuelve reactivo: hinchado, doloroso, sensible por la mañana. El modelo de continuum de Cook y Purdam (BJSM 2009) describe la progresión de tendinopatía reactiva a desorganización y degeneración. La idea práctica es que la mayoría de problemas tendinosos recreativos son reactivos, y responden muy bien a una carga progresiva.',
          'La escalera de carga es conocida: isometrías pesadas para modular el dolor en la fase aguda, resistencia pesada y lenta para la adaptación estructural, y trabajo de almacenamiento de energía — saltos, rebotes, cambios de dirección — solo cuando el tendón tolera la carga lenta sin reagudización al día siguiente. Tendón rotuliano en saltadores, Aquiles en corredores y origen extensor del codo lateral en jugadores de pádel siguen la misma lógica.',
          'El codo de pádel es endémico en los clubes de Cambrils y Salou porque el volumen sube más rápido de lo que los extensores de la muñeca pueden adaptarse. Dos meses de tres sesiones semanales es un salto importante para cualquier tendón, y los síntomas suelen llegar hacia la sexta semana.',
        ],
      },
      {
        heading: '2. Músculo y sus envolturas conectivas',
        paragraphs: [
          'El músculo es el más adaptable de los cinco tejidos. Se reconstruye en pocos días tras un trabajo excéntrico exigente, y el efecto de sesión repetida (repeated-bout effect) hace que la segunda exposición produzca una fracción del dolor de la primera. La distinción clínica relevante es entre las agujetas, que son la respuesta normal a la carga excéntrica, y la rotura fibrilar, que es una disrupción estructural en la unión miotendinosa.',
          'La lesión de isquiotibiales en velocistas y futbolistas es el ejemplo clásico. La evidencia sobre el ejercicio nórdico de isquiotibiales como medida preventiva es de las más sólidas en el campo: varios ensayos controlados muestran reducciones aproximadas del 50 % en deportistas que lo realizan de forma constante. El mecanismo es claro: la fuerza excéntrica en longitudes largas es la cualidad específica que protege ante la rotura típica de la fase final de la zancada.',
          'Para el deportista recreativo la lección se generaliza: los músculos expuestos a carga excéntrica controlada en rango final toleran mucho mejor la carga excéntrica incontrolada del deporte.',
        ],
      },
      {
        heading: '3. Hueso',
        paragraphs: [
          'La ley de Wolff, actualizada, dice que el hueso remodela en respuesta a las deformaciones que recibe — pero en una escala de meses, no de semanas. Un músculo puede estar visiblemente más fuerte en ocho semanas. Una tibia se adapta en una curva de tres a seis meses. Esa diferencia de tiempos es lo que provoca reacciones de estrés y fracturas por estrés en personas que aumentaron su volumen de carrera de forma brusca.',
          'La progresión va de reacción de estrés (edema medular, a menudo invisible en radiografía) a fractura de estrés (línea visible) y, en casos extremos, a fractura completa. Las localizaciones más habituales en corredores recreativos son calcáneo y tibia. El paseo marítimo de Salou es un terreno amable, pero el volumen en cualquier superficie sigue las mismas reglas: el hueso necesita su tiempo.',
          'Las deportistas femeninas merecen una nota específica. El déficit energético relativo en el deporte (RED-S) — comer menos de lo que la carga exige — suprime los estrógenos, deteriora la formación ósea y eleva mucho el riesgo de fractura por estrés. Si los ciclos menstruales se han vuelto irregulares o han desaparecido, es un asunto clínico, no de entrenamiento, y debe verlo un médico antes de añadir volumen.',
        ],
      },
      {
        heading: '4. Estructuras articulares: cartílago, cápsula, labrum',
        paragraphs: [
          'El cartílago articular no tiene irrigación sanguínea. Se nutre del líquido sinovial que se bombea a través de él por la compresión cíclica — es decir, caminar, sentarse y levantarse, cargar la articulación. El mito persistente de que la carga “gasta” las articulaciones tiene la fisiología al revés: la carga cíclica adecuada es lo que mantiene sano al cartílago (Buckwalter y otros han escrito ampliamente sobre esto).',
          'La artrosis se asocia más con el desuso, la obesidad y las lesiones previas que con la carga deportiva razonable. La degeneración meniscal en adultos de mediana edad se considera hoy un hallazgo de imagen normal en muchos casos, y el ejercicio terapéutico es al menos tan eficaz como la artroscopia para roturas degenerativas.',
          'El pinzamiento femoroacetabular y la irritación del labrum aparecen en ciclistas y jugadores de pádel que pasan mucho tiempo en flexión profunda de cadera. Cápsula y labrum responden al mismo principio: exposición progresiva, con un énfasis especial en la fuerza en los rangos que el deporte realmente exige.',
        ],
      },
      {
        heading: '5. Fascia y nervio periférico',
        paragraphs: [
          'La fascitis plantar es, en su mayoría, un nombre engañoso. Los estudios histológicos muestran cambios degenerativos más que inflamación, de modo que “fasciopatía plantar” es el término más correcto. Se comporta como un problema tendinoso y responde a la misma lógica: fortalecimiento progresivo del gemelo y de la musculatura intrínseca del pie, no estiramiento aislado.',
          'Los nervios periféricos necesitan movilidad a través de los tejidos que los rodean. La irritación del ciático en corredores y levantadores rara vez es un pinzamiento estructural — más bien una reducción del deslizamiento del nervio a través de la cadera posterior y los isquiotibiales. Las movilizaciones neurales tienen un papel, pero la respuesta más útil suele ser fortalecer la cadera y la cadena posterior para que el nervio viva en un entorno menos reactivo.',
          'Estirar con más intensidad una fascia o un nervio ya sensibilizado es uno de los errores más frecuentes. La respuesta casi siempre es tolerancia a la carga, no longitud.',
        ],
      },
      {
        heading: 'El principio común',
        paragraphs: [
          'Carga progresiva con recuperación suficiente gana siempre a la intensidad por sensación. La famosa regla del 10 % semanal es un eslogan útil pero un instrumento torpe — ignora la condición previa, la carga acumulada, el sueño y el estrés vital. Más honesto es monitorizar la carga semana a semana: registrar sesiones, esfuerzo percibido y cómo se sintió la mañana siguiente, y dejar que la tendencia decida la progresión.',
          'La mayoría de reagudizaciones son la consecuencia de un único salto brusco — un torneo, una semana de vacaciones, la vuelta tras una gripe — que cae sobre un tejido no preparado.',
        ],
      },
      {
        heading: 'Cómo programa Movement by Design la resistencia tisular',
        paragraphs: [
          'La valoración empieza por la historia más que por los tests. ¿Qué tejidos han dado problemas antes? ¿Cuál es la carga semanal actual entre deporte y entrenamiento? ¿Cómo son los próximos tres meses? A partir de ahí el programa avanza en fases: una fase inicial de construcción de capacidad que carga específicamente los tejidos históricamente vulnerables, una fase de desarrollo que añade cualidades específicas del deporte como potencia o resistencia, y semanas de descarga cada cuatro o cinco semanas para que los tejidos más lentos alcancen a los más rápidos.',
          'Para un jugador de pádel suele significar trabajo de tendón dedicado al codo y al rotuliano, fuerza unilateral para rodilla y cadera, y potencia rotacional como cualidad independiente. Para un corredor: carga de gemelo y pie, progresión gradual del kilometraje y descargas pensadas en el hueso.',
        ],
      },
      {
        heading: 'Cuándo acudir al entrenador y cuándo al fisio',
        paragraphs: [
          'Un entrenador con formación en rehabilitación puede manejar la mayoría de molestias, déficits de capacidad y retornos de lesiones antiguas. El fisioterapeuta o el médico son el siguiente paso cuando el dolor no tiene explicación, empeora con una carga sensata, se asocia a síntomas neurológicos, viene de un trauma o se acompaña de dolor nocturno u otros signos sistémicos.',
          'Los mejores resultados suelen venir de combinar los dos: el clínico aclara el diagnóstico y el entrenador convierte el consejo en hábito semanal. Muchas rehabilitaciones fallan no porque el diagnóstico fuera incorrecto, sino porque nadie se hizo cargo de los ocho meses de carga progresiva que tocaban después.',
        ],
      },
      {
        heading: 'Cómo encajarlo',
        paragraphs: [
          'Si entrenas de forma recreativa en la Costa Daurada — corriendo por el paseo marítimo, entrenando en casa o jugando al pádel en Salou y Cambrils — la prevención de lesiones se reduce a identificar tus tejidos históricamente vulnerables y dedicarles algo más de atención que al resto. Un entrenamiento personal en Salou orientado a la rehabilitación debería poder explicar, en términos sencillos, qué tejido entrena cada ejercicio y en qué calendario espera la adaptación. Si un entrenador no puede hacerlo, el programa está adivinando.',
        ],
      },
    ],
  },
  {
    slug: 'entrenamiento-de-fuerza-padel',
    title: 'Entrenamiento de Fuerza para Jugadores de Pádel: Las 4 capacidades que importan más que las horas en pista',
    description:
      'Potencia rotacional, desaceleración, fuerza unilateral y estabilidad de hombro: las cuatro capacidades físicas que hacen avanzar más rápido a un jugador de pádel que añadir más horas en pista.',
    date: '2026-05-17',
    readingTime: '10 min de lectura',
    category: 'Rendimiento',
    alternatePath: '/blog/strength-training-for-padel-players/',
    intro:
      'El pádel es el deporte que más crece en España, y la Costa Daurada tiene clubes en casi cada pueblo. La historia se repite entre los jugadores de nivel intermedio: estancados, sumando horas en pista, sin avance real y con una acumulación silenciosa de molestias en codo, rodilla y hombro. En la mayoría de estos casos el cuello de botella no es la técnica. Es la capacidad física. Cuatro cualidades bien entrenadas darán a un jugador recreativo más resultados en seis meses que añadir dos horas semanales en la pista.',
    body: [
      {
        heading: 'Capacidad 1: Potencia rotacional',
        paragraphs: [
          'El smash, la víbora, la bandeja y la salida de pared se inician en la interfaz cadera-tronco. La potencia se genera en las piernas y la pelvis, se transmite a través de un tronco rígido y se entrega con el brazo. Los jugadores que intentan pegar más fuerte agitando más el brazo suelen perder precisión y desarrollan molestias en el codo en pocos meses.',
          'El entrenamiento es sencillo pero poco frecuente: lanzamientos rotacionales con balón medicinal contra la pared, wood-chops con polea en ambas direcciones, Pallof press en rodilla para antirrotación, y fuerza de cadera (hip hinge) pesada como base. La tasa de desarrollo de fuerza importa aquí: Suchomel y colaboradores (Sports Medicine, 2016) resumieron que la fuerza marca el techo, pero la intención explosiva con cargas moderadas es lo que convierte esa fuerza en potencia útil.',
        ],
        bullets: [
          'Lanzamiento rotacional con balón medicinal — 4 series de 5 por lado, intención explosiva',
          'Wood-chop en polea, de alta a baja y de baja a alta — 3 series de 8 por lado',
          'Pallof press en media rodilla — 3 series de 10 por lado, lento',
          'Peso muerto con barra hexagonal o hip thrust — 3 series de 5, pesado',
        ],
      },
      {
        heading: 'Capacidad 2: Fuerza de desaceleración y cambio de dirección',
        paragraphs: [
          'El pádel se construye sobre aceleraciones cortas y desaceleraciones más bruscas. El punto se pierde cuando alguien no frena, no cuando alguien no esprinta. La fuerza excéntrica de cuádriceps y glúteo es la cualidad que protege rodilla e isquiotibial en esos frenazos. Bourne y colaboradores (Sports Medicine, 2018) mostraron que la fuerza excéntrica de isquiotibiales es uno de los predictores más consistentes del riesgo de rotura en deportes de campo — la misma lógica vale para el pádel.',
          'El trabajo consiste en carreras hacia atrás, aterrizajes desde cajón con sostén estable, saltos laterales con frenado controlado y tempo excéntrico lento en split-squats. El objetivo no es ser espectacular en el aire; es aterrizar en silencio y bajo control.',
        ],
        bullets: [
          'Bajada de cajón con 3 segundos excéntricos — 3 series de 6 por pierna',
          'Salto lateral con aterrizaje estable — 3 series de 4 por lado',
          'Curl nórdico de isquiotibiales — 3 series de 5, progresando despacio',
          'Carrera hacia atrás y desplazamientos laterales en el calentamiento',
        ],
      },
      {
        heading: 'Capacidad 3: Fuerza unilateral y de tobillo',
        paragraphs: [
          'La mayoría de lesiones de miembro inferior en pádel ocurren sobre una sola pierna — un lunge hacia la pared lateral, un estiramiento para una bola baja, un deslizamiento que el tobillo no esperaba. La sentadilla bilateral no es un mal ejercicio, pero no prepara al jugador para esos momentos. El trabajo unilateral debe estar en el programa.',
          'Sentadillas búlgaras, peso muerto rumano a una pierna, step-ups con carga real y elevaciones de gemelo con fase excéntrica deliberada son la base. El gemelo y el tibial anterior reciben un castigo especial por el constante impulso y frenado del pádel — la resistencia de gemelos y las elevaciones de tibial son ejercicios simples, eficaces y casi universalmente olvidados.',
        ],
        bullets: [
          'Sentadilla búlgara — 3 series de 6–8 por pierna',
          'Peso muerto rumano a una pierna — 3 series de 8 por pierna',
          'Elevación de gemelo con 3 segundos excéntricos — 3 series de 10',
          'Elevación de tibial contra pared — 3 series de 15',
        ],
      },
      {
        heading: 'Capacidad 4: Rotadores externos del hombro y estabilidad escapular',
        paragraphs: [
          'La posición de bandeja — brazo por encima de la cabeza, ligeramente atrás, desacelerando — exige mucho al manguito rotador y al hombro posterior. El codo de pádel suele tener su origen más arriba, en un hombro que carece de fuerza en rotación externa y de control escapular suficientes para mantener el codo en buena posición. Cools y colaboradores (BJSM 2014) propusieron un marco razonable para deportistas de gestos por encima de la cabeza que encaja bien con el pádel: primero estabilidad escapular, luego fuerza de rotación externa, después control dinámico en posiciones específicas.',
          'Los ejercicios no son llamativos y ese es el punto. Hay que hacerlos con constancia.',
        ],
        bullets: [
          'Elevaciones prono Y-T-W — 2 series de 8 de cada',
          'Rotación externa en decúbito lateral con mancuerna — 3 series de 12',
          'Push-up de serrato — 3 series de 10',
          'Face pull con rotación externa — 3 series de 12',
        ],
      },
      {
        heading: 'Plantilla de dos sesiones a la semana',
        paragraphs: [
          'Dos sesiones semanales son suficientes para casi cualquier jugador recreativo si están bien organizadas. La plantilla que sigue es la que utilizan la mayoría de mis clientes de pádel durante los meses competitivos.',
        ],
        bullets: [
          'Día A — Énfasis tren inferior: peso muerto con barra hexagonal 4×5, sentadilla búlgara 3×8, salto lateral 3×4, gemelo 3×10, Pallof press 3×10',
          'Día B — Tren superior y rotacional: lanzamiento rotacional 4×5, wood-chop 3×8, RDL unilateral 3×8, Y-T-W 2×8, rotación externa 3×12',
          'Calentamiento ambos días: 5 minutos de movimiento general, después movilidad y activación específicas',
          'Semana de descarga cada cuatro o cinco semanas — bajan las series, la intensidad se mantiene moderada',
        ],
      },
      {
        heading: 'Qué hacer con el cardio',
        paragraphs: [
          'El pádel es un deporte de esprints repetidos en una pista pequeña. La base aeróbica debe estar — un par de paseos a buen ritmo o sesiones suaves de bici de 30–45 minutos a la semana — porque determina la rapidez con la que recuperas entre puntos y entre partidos. Encima de eso, intervalos cortos de esprint repetido una vez por semana (6–8 esfuerzos de 10–15 segundos con recuperación completa) preparan el sistema para los intercambios más intensos. Las sesiones largas y duras de intervalo no son necesarias y suelen interferir con el trabajo de fuerza.',
        ],
      },
      {
        heading: 'Recuperación entre partidos',
        paragraphs: [
          'El sueño es la variable que más mueve el rendimiento. Siete a nueve horas, de forma constante, ganan a cualquier suplemento. Una ingesta de proteína de aproximadamente 1,6 gramos por kilo de peso al día apoya la recuperación y el mantenimiento del tejido. En fin de semana de torneo, trata los días previo y posterior como descarga — movimiento ligero, movilidad y una reducción deliberada de la carga. Los jugadores que mantienen su semana habitual de entrenamiento durante un torneo son los que arrastran lesiones en la segunda mitad de la temporada.',
        ],
      },
      {
        heading: 'Errores frecuentes',
        paragraphs: [
          'Un puñado de errores explica la mayor parte del esfuerzo desperdiciado en el gimnasio entre jugadores recreativos de pádel.',
        ],
        bullets: [
          'Entrenar como un culturista — mucho volumen de aislamiento que fatiga sin construir potencia',
          'Saltarse el trabajo unilateral porque la sentadilla bilateral parece productiva',
          'No levantar lo bastante pesado — la fuerza es el techo de la potencia, y tres series de quince no la construyen',
          'Tratar el manguito rotador como apéndice del calentamiento en lugar de fuerza programada',
          'Añadir horas en pista cuando uno está estancado, en vez de añadir la capacidad física que esas horas requieren',
        ],
      },
      {
        heading: 'Llevarlo al calendario',
        paragraphs: [
          'Para los jugadores de los clubes de Cambrils y Salou, la versión práctica de todo esto son dos sesiones de fuerza por semana, en los días en los que no se juega. Si juegas tres veces a la semana, entrena en los dos días libres. Si juegas cuatro, entrena en dos de los días libres y acepta que una de esas sesiones será moderada. Las mejoras llegan en el tercer y cuarto mes — no en el primero — y aparecen primero como menos molestias, después como un smash claramente más duro y una recuperación más rápida entre puntos.',
          'El entrenamiento de fuerza para pádel no es glamuroso ni complicado. Hecho con constancia durante una temporada hace por el nivel más que cualquier otra intervención disponible para un jugador recreativo.',
        ],
      },
    ],
  },
  {
    slug: 'recuperacion-activa-vs-reposo',
    title: 'Por qué "guardar reposo" suele empeorar las lesiones: guía de recuperación activa desde la fisiología del ejercicio',
    description:
      'Por qué el consejo habitual de descansar dos semanas un tendón irritado, una rodilla dolorosa o una lumbalgia suele ser contraproducente, y qué dice la evidencia sobre la recuperación activa y la carga progresiva.',
    date: '2026-05-17',
    readingTime: '8 min de lectura',
    category: 'Prevención de Lesiones',
    alternatePath: '/blog/active-recovery-vs-rest/',
    intro:
      'El consejo más frecuente ante una rodilla dolorida, un tendón de Aquiles irritable o una lumbalgia recurrente es descansar una o dos semanas y ver cómo evoluciona. Para lesiones agudas de alto grado ese consejo tiene una ventana de utilidad muy limitada. Para las molestias, recurrencias y cuadros crónicos que componen la mayoría de las consultas musculoesqueléticas en adultos, es la opción equivocada por defecto. Los tejidos no curan en el vacío: se remodelan en respuesta a la carga.',
    body: [
      {
        heading: 'Qué hace realmente el desuso',
        paragraphs: [
          'La fisiología del desentrenamiento está bien descrita. Wall y colaboradores (Acta Physiologica, 2014) demostraron que cinco días de inmovilización unilateral en hombres jóvenes sanos reducían el área de sección transversal del cuádriceps en torno a un 3,5% y la fuerza isométrica un 9% aproximadamente. A los catorce días, las pérdidas se acercaban al 8% de masa muscular y al 23% de fuerza. En adultos mayores las pérdidas son mayores y más rápidas.',
          'La capacidad aeróbica cae más rápido aún que la fuerza. Dos semanas de inactividad pueden restar varios puntos porcentuales al VO2máx en personas entrenadas. La rigidez tendinosa también disminuye: el recambio de colágeno se ralentiza, el tendón tolera menos carga de la que toleraba antes, y al volver al volumen previo aparece el rebrote sintomático.',
          'Ese es el mecanismo detrás del patrón clásico: el dolor cede con dos semanas de reposo, la persona retoma la actividad que dolía, y en quince días los síntomas vuelven. El tejido no se curaba con el reposo. Se estaba desacondicionando.',
        ],
      },
      {
        heading: 'Reposo relativo, no reposo absoluto',
        paragraphs: [
          'El concepto útil que aporta la medicina deportiva es el de reposo relativo: retirar el vector de carga concreto que está irritando el tejido, y mantener el resto del sistema trabajando. Un corredor con tendinopatía rotuliana reactiva no necesita parar de entrenar. Necesita retirar los picos — cuestas, sentadillas profundas, pliometría — y conservar la bicicleta, el trabajo de tren superior y la carga isométrica del cuádriceps.',
          'Una persona con epicondilalgia por pádel puede entrenar piernas, hacer un patrón de bisagra, presses por encima de la cabeza dentro de la tolerancia, y cargar isométricamente los extensores de muñeca. Quedarse dos semanas en el sofá no aporta nada útil al codo y elimina todo lo demás.',
        ],
      },
      {
        heading: 'La excepción real: las primeras 48 a 72 horas',
        paragraphs: [
          'Existe una categoría estrecha donde la protección a corto plazo sí está justificada: lesiones agudas de tejido blando con un mecanismo claro y disrupción tisular significativa — un grado II de isquiosurales tras un sprint, un esguince moderado de tobillo, una rotura súbita de gemelo. El marco actual de consenso es PEACE & LOVE (Dubois y Esculier, British Journal of Sports Medicine, 2020).',
        ],
        bullets: [
          'Protección — descargar entre uno y tres días, solo lo necesario',
          'Elevación — para facilitar el retorno venoso',
          'Evitar antiinflamatorios en la fase inicial — pueden interferir en la reparación tisular',
          'Compresión — para limitar el edema',
          'Educación — expectativas realistas y evitar pruebas de imagen innecesarias',
          'Carga — reintroducir estrés mecánico según lo permitan los síntomas',
          'Optimismo — los factores psicológicos predicen el pronóstico de forma relevante',
          'Vascularización — actividad aeróbica indolora desde fases tempranas',
          'Ejercicio — restaurar movilidad, fuerza y propiocepción de forma progresiva',
        ],
      },
      {
        heading: 'Cuadros subagudos y crónicos: donde está la mayoría',
        paragraphs: [
          'La mayor parte de los problemas musculoesqueléticos que entran por la puerta de un coach no están en la ventana aguda. Son tendinopatías que llevan meses, lumbalgias que recidivan cada pocas semanas, rodillas que duelen al bajar escaleras, hombros que enganchan por encima de la cabeza. En todos esos casos, la carga es la medicina.',
          'En tendinopatía, el continuum de Cook y Purdam (BJSM, 2009) y la literatura posterior sobre carga han reformulado el problema: el tendón responde al estrés mecánico progresivo — primero isometrías, después carga lenta y pesada, después almacenamiento de energía. El reposo reduce dolor y capacidad a corto plazo, y la capacidad no vuelve sola.',
          'En lumbalgia, la exposición gradual y la carga progresiva superan al evitamiento en todas las guías modernas. En artrosis de rodilla, el programa GLA:D (Skou y Roos, BMC Musculoskeletal Disorders, 2017) — ocho semanas de ejercicio neuromuscular supervisado y educación — produce mejoras clínicamente significativas en dolor y función en miles de participantes, a menudo comparables a alternativas quirúrgicas en candidatos adecuados. En el síndrome subacromial, la carga progresiva del manguito rotador y la cintura escapular supera de forma consistente al tratamiento pasivo.',
        ],
      },
      {
        heading: 'Un árbol de decisión práctico',
        paragraphs: [
          'La mayoría de las personas no necesita un diagrama, pero estas cuatro preguntas cubren la mayoría de los casos.',
        ],
        bullets: [
          '¿El dolor supera el 7/10, es agudo, eléctrico, o se acompaña de hinchazón importante, bloqueos o síntomas neurológicos? Consulta a un clínico antes de entrenar.',
          '¿Ocurrió en las últimas 72 horas con un mecanismo claro? Protege brevemente y aplica PEACE & LOVE.',
          '¿Lleva semanas o meses molestando o recidivando? La respuesta es carga progresiva, no reposo.',
          '¿Duele durante la actividad pero queda bien después y no se reactiva al día siguiente? Luz verde para seguir entrenando dentro de ese margen.',
        ],
      },
      {
        heading: 'La regla del semáforo del dolor',
        paragraphs: [
          'La herramienta clínica más útil para guiar la carga sobre un tejido sintomático es el sistema del semáforo descrito originalmente por Silbernagel en tendinopatía aquílea (American Journal of Sports Medicine, 2007). El dolor durante la carga, en una escala de 0 a 10, se considera aceptable hasta aproximadamente 3 a 5 sobre 10, siempre que se cumplan dos condiciones: que vuelva al valor basal en 24 horas y que no empeore progresivamente semana tras semana.',
          'Esta regla permite entrenar a través de tendones y articulaciones sintomáticas sin adivinar. También desactiva la trampa psicológica más habitual: asumir que cualquier dolor durante el ejercicio significa daño.',
        ],
      },
      {
        heading: 'Cómo es la recuperación activa en la práctica',
        paragraphs: [
          'La recuperación activa no es foam roller y batido de proteínas. En un programa estructurado significa trabajo específico que carga el tejido afectado a una intensidad que actualmente tolera, junto con todo lo demás que la persona puede seguir haciendo con seguridad.',
        ],
        bullets: [
          'Trabajo aeróbico de baja carga — caminar, bicicleta, nadar — para mantener el acondicionamiento cardiovascular y favorecer la perfusión tisular',
          'Carga isométrica del tejido sintomático a intensidades subumbral para modular el dolor',
          'Carga lenta y pesada de la musculatura adyacente que no se irrita',
          'Movilidad cuando cambia realmente los síntomas, no como reflejo automático',
          'Sueño, ingesta proteica y carga semanal total controladas con tanto cuidado como los ejercicios',
        ],
      },
      {
        heading: 'Algunos mitos que conviene jubilar',
        paragraphs: [
          'La inflamación no es el enemigo. Es la fase inicial del proceso de reparación. Suprimirla de forma rutinaria con AINE en las primeras 48 horas se asocia con una reparación tendinosa y muscular alterada en modelos animales y en parte de la literatura humana — por eso aparece en la columna "evitar" de PEACE & LOVE.',
          'Los estiramientos no previenen lesiones de forma significativa en la mayoría de poblaciones. Múltiples revisiones sistemáticas no encuentran un efecto protector del estiramiento estático previo a la actividad. Pueden sentar bien y ayudar en presentaciones concretas de rigidez, pero no deben venderse como prevención de lesiones.',
          'El plan de "vuelvo a entrenar cuando deje de doler" produce con frecuencia años de inactividad. En tendinopatías crónicas y lumbalgia recurrente, el síntoma a menudo no desaparece hasta que se ha reconstruido la capacidad de carga. El orden es el inverso al que la mayoría asume.',
        ],
      },
      {
        heading: 'Coach o fisioterapeuta',
        paragraphs: [
          'Acude primero a un fisioterapeuta o médico ante banderas rojas: dolor severo, signos neurológicos, traumatismo importante, sospecha de fractura o síntomas que empeoran en lugar de mejorar. Acude a un coach con experiencia en rehabilitación cuando tienes un diagnóstico o una molestia crónica estable y necesitas a alguien que construya la carga progresiva alrededor. Los dos roles se complementan; no son intercambiables.',
        ],
      },
      {
        heading: 'Llevarlo a la práctica',
        paragraphs: [
          'Si estás en Salou o Cambrils y llevas meses arrastrando un hombro molesto, una rodilla irritable o un Aquiles sensible, lo más probable es que el ingrediente que falta sea carga progresiva estructurada, no más reposo. El entrenamiento personal en Salou con un enfoque orientado a la rehabilitación construye el plan alrededor de lo que el tejido tolera ahora, monitoriza los síntomas con la regla del semáforo y progresa la carga en un calendario biológico, no impaciente. La prevención de lesiones y el retorno a la actividad comparten los mismos principios: cargar, recuperar, repetir, medir. Si quieres comentar un caso concreto, la página de contacto es el sitio para empezar.',
        ],
      },
    ],
  },
  {
    slug: 'protocolo-carga-tendinopatia',
    title: 'Tendinopatía aquílea, rotuliana y plantar: protocolo de carga en tres fases para corredores recreativos',
    description:
      'Protocolo práctico y basado en la evidencia para tendinopatía aquílea, rotuliana y fasciopatía plantar en corredores recreativos: isometrías, carga lenta y pesada, y almacenamiento de energía.',
    date: '2026-05-17',
    readingTime: '11 min de lectura',
    category: 'Prevención de Lesiones',
    alternatePath: '/blog/tendinopathy-loading-protocol/',
    intro:
      'La tendinopatía de miembro inferior es la causa más frecuente por la que un corredor recreativo abandona la carrera. La base de evidencia sobre cómo tratarla es de las más sólidas en patología musculoesquelética, y la mayor parte de las personas que la sufren nunca ha visto aplicado el protocolo correctamente. Este artículo expone el modelo, las tres fases de carga y cómo aplicarlas a los tres tendones que concentran la mayoría de los casos.',
    body: [
      {
        heading: 'Biología tendinosa en noventa segundos',
        paragraphs: [
          'Los tendones no son cuerdas inertes. Son tejidos conectivos metabólicamente activos que se adaptan a la carga mecánica mediante mecanotransducción: los tenocitos transforman la deformación en señales bioquímicas que regulan la síntesis de colágeno y la remodelación de la matriz (Khan y Scott, BJSM, 2009).',
          'La adaptación es lenta. Magnusson y colaboradores (Nature Reviews Rheumatology, 2010) resumieron los estudios con isótopos disponibles, que muestran que la porción central, portadora de carga, del tendón adulto se renueva en una escala de años, con cambios estructurales medibles tras al menos 12 semanas de carga sostenida. Este es el dato más importante para fijar expectativas con un corredor: la línea temporal de los síntomas y la línea temporal de la estructura no coinciden.',
        ],
      },
      {
        heading: 'El continuum de Cook y Purdam',
        paragraphs: [
          'Cook y Purdam (BJSM, 2009) propusieron un modelo en tres fases que sigue siendo el marco clínico más útil: tendinopatía reactiva, dysrepair (alteración de la reparación) y tendinopatía degenerativa. Las fases no son estrictamente discretas, pero identificar en cuál se encuentra un tendón cambia la prescripción de carga.',
          'La tendinopatía reactiva aparece tras una sobrecarga reciente: un pico súbito de volumen, un cambio de zapatillas, una sesión de cuestas. El tendón está agudamente irritable, a menudo caliente, hinchado y doloroso en reposo. La carga debe reducirse en volumen, pero no eliminarse.',
          'El dysrepair es la fase intermedia, frecuente a los meses. El tendón duele con la carga pero está menos reactivo. Aquí es donde encaja la mayor parte del trabajo de carga basado en evidencia.',
          'La tendinopatía degenerativa es estructural — tendones más envejecidos, presentaciones recurrentes, a menudo con hallazgos en imagen. El dolor puede ser intermitente y la tolerancia a la carga variable. Las porciones sanas del tendón responden a la carga; las degeneradas no, pero tampoco lo necesitan. El tejido sano compensa.',
        ],
      },
      {
        heading: 'Qué hace el reposo en un tendón',
        paragraphs: [
          'Versión breve del argumento desarrollado en el artículo sobre recuperación activa: la descarga reduce la rigidez tendinosa, baja la tolerancia a la carga y aumenta la sensibilización central. El dolor cede porque nada lo provoca, y vuelve en cuanto se reanuda la actividad porque el tejido es ahora menos capaz que antes del parón. Esa es la trampa en la que cae la mayoría de los corredores recreativos. La solución no es menos carga. Es la carga adecuada aplicada de forma progresiva.',
        ],
      },
      {
        heading: 'El protocolo en tres fases — visión general',
        paragraphs: [
          'El protocolo que sigue es una síntesis de la literatura sobre carga, basada principalmente en los trabajos de Cook, Purdam, Rio, Kongsgaard, Alfredson, Silbernagel y Rathleff. Las fases son secuenciales pero se solapan: el trabajo de la fase 1 continúa durante las fases 2 y 3 como calentamiento y modulador del dolor.',
        ],
        bullets: [
          'Fase 1 — Carga isométrica para modular el dolor y construir capacidad inicial. Rio et al. (BJSM, 2015) demostraron analgesia inmediata y reducción de la inhibición cortical con 5 series de 45 segundos a aproximadamente el 70% de la contracción voluntaria máxima, 2 a 3 minutos de descanso entre series, a diario o en días alternos.',
          'Fase 2 — Carga lenta y pesada (heavy slow resistance). Kongsgaard et al. (Scandinavian Journal of Medicine and Science in Sports, 2009) utilizaron 3 a 4 series de 6 a 15 repeticiones con un tempo de 3 segundos concéntrico y 3 segundos excéntrico, 2 a 3 sesiones por semana, progresando la carga durante 8 a 12 semanas. Los resultados fueron equivalentes a los protocolos solo excéntricos, con mejor adherencia.',
          'Fase 3 — Almacenamiento de energía y pliometría. Trabajo específico del deporte que restaura el comportamiento elástico del tendón: multisaltos, hops, drop jumps y volumen progresivo de carrera. Solo se introduce cuando la capacidad de la fase 2 está consolidada.',
        ],
      },
      {
        heading: 'Tendinopatía aquílea',
        paragraphs: [
          'La tendinopatía aquílea de porción media responde bien al protocolo anterior. La tendinopatía aquílea insercional es similar, pero evita la dorsiflexión profunda en fases iniciales: las elevaciones de talón se realizan desde el suelo y no desde un escalón.',
        ],
        bullets: [
          'Fase 1 — Isometría de elevación de talón a una pierna, en el suelo, 5 series de 45 segundos con la carga más alta que permita completar la duración, diaria',
          'Fase 2 — Elevación de talón a una pierna desde un escalón con énfasis en gastrocnemios (rodilla extendida) y una segunda variante con énfasis en sóleo (rodilla flexionada unos 60 grados), 3 a 4 series de 6 a 15 repeticiones, tempo 3-3, tres veces por semana',
          'Fase 2 alternativa — el protocolo excéntrico original de Alfredson (Alfredson et al., American Journal of Sports Medicine, 1998) — 3 series de 15 repeticiones excéntricas, con rodilla extendida y flexionada, dos veces al día durante 12 semanas — sigue siendo una opción válida, sobre todo para casos autogestionados',
          'Fase 3 — Pogo hops, hops a una pierna en el sitio, después adelante y lateralmente, después multisaltos y técnica de carrera, progresados a lo largo de varias semanas',
        ],
      },
      {
        heading: 'Tendinopatía rotuliana',
        paragraphs: [
          'La tendinopatía rotuliana — rodilla del saltador — es la más sensible al efecto isométrico de los tres tendones. La analgesia descrita por Rio suele ser muy marcada en esta población.',
        ],
        bullets: [
          'Fase 1 — Sentadilla española en isometría (con banda o apoyo en pared), o isometría en máquina de extensión de rodilla a unos 60 grados de flexión, 5 series de 45 segundos',
          'Fase 2 — Sentadilla en declive a una pierna sobre una cuña de 25 grados, 3 a 4 series de 6 a 8 repeticiones, tempo lento, con carga progresada mediante mancuernas o chaleco; complementada con prensa y zancadas',
          'Fase 3 — Saltos al cajón, drop jumps desde altura baja y progresivamente mayor, después trabajo de cambios de dirección y deceleración específicos del deporte',
        ],
      },
      {
        heading: 'Fasciopatía plantar',
        paragraphs: [
          'Fasciopatía plantar es el término preferido en la literatura actual: es un cuadro degenerativo, no inflamatorio. El protocolo de carga más útil es el de Rathleff y colaboradores (Scandinavian Journal of Medicine and Science in Sports, 2014), que demostró que el entrenamiento de fuerza con cargas altas supera al estiramiento específico de la fascia a los tres meses.',
        ],
        bullets: [
          'El ejercicio — elevación de talón a una pierna sobre un escalón, con una toalla enrollada bajo los dedos para forzar su dorsiflexión y activar el mecanismo del torno (windlass)',
          'Carga y dosis — 3 series hasta el fallo, comenzando con 12RM y progresando a 10RM, 8RM y así sucesivamente a lo largo de 12 semanas, cada dos días, tempo 3 segundos subida / 2 segundos pausa / 3 segundos bajada',
          'Este protocolo es inusualmente autocontenido: la mayoría puede ejecutarlo sin supervisión adicional una vez fijada la técnica',
        ],
      },
      {
        heading: 'Monitorización del dolor',
        paragraphs: [
          'La regla del semáforo de Silbernagel se aplica a los tres tendones. Dolor de hasta 5 sobre 10 durante la carga es aceptable. Un dolor que no vuelve al basal en 24 horas, o que aumenta semana tras semana, indica que la carga es excesiva. Un dolor que desaparece por completo durante una sesión de isometría de fase 1 es el efecto analgésico, no una señal de que la tendinopatía esté resuelta.',
        ],
      },
      {
        heading: 'Vuelta a la carrera',
        paragraphs: [
          'Volver a correr no es una decisión única. Es una progresión que se solapa con las fases 2 y 3. La secuencia habitual es intervalos caminar-correr en terreno llano (por ejemplo, 1 minuto corriendo / 2 caminando durante 20 minutos, tres veces la primera semana), progresando a carrera continua suave en varias semanas, después reintroducir cuestas, después trabajo de ritmo, y dejar para el final las bajadas.',
          'Las bajadas se dejan para el final por un motivo: imponen la mayor demanda excéntrica al complejo gemelar-aquíleo y al cuádriceps-rotuliano. Muchas recurrencias aparecen cuando un corredor termina la fase de llano y se enfrenta a un recorrido con desnivel en la tercera o cuarta semana del retorno.',
        ],
      },
      {
        heading: 'Errores frecuentes',
        paragraphs: [
          'Una lista breve de los errores que aparecen una y otra vez en la práctica.',
        ],
        bullets: [
          'Estirar agresivamente el tendón afectado — en tendinopatías compresivas (aquílea insercional, isquiosural proximal) puede empeorar los síntomas, y en cualquier caso el estiramiento apenas modifica la estructura del tendón',
          'Detener el programa al ceder los síntomas — los síntomas se resuelven antes de que se haya reconstruido la capacidad estructural, y la tasa de recurrencia es alta en quienes paran pronto',
          'Saltarse la fase isométrica — la fase 1 es a menudo la diferencia entre un programa al que el corredor se adhiere y uno al que no, por su efecto analgésico',
          'Comparar plazos con un amigo que se recuperó en cuatro semanas — la mayoría no lo hace, y los que creen haberlo hecho partían de una presentación más leve',
          'Añadir volumen de carrera más rápido de lo que se reconstruye la tolerancia de fuerza',
        ],
      },
      {
        heading: 'Plazos esperables',
        paragraphs: [
          'La resolución de los síntomas suele requerir entre 6 y 12 semanas en tendinopatías reactivas y en fase de dysrepair, y más tiempo en presentaciones degenerativas. El cambio estructural medible en el tendón exige al menos 16 a 24 semanas de carga consistente. Volver al volumen previo de carrera lleva habitualmente de 12 a 16 semanas desde el inicio de la carga estructurada, y más en quienes pasaron mucho tiempo sin entrenar antes de empezar.',
          'El mejor predictor del resultado es la adherencia a la carga — no la elección del protocolo, ni el uso de adyuvantes, ni los hallazgos de imagen. El tendón responde a lo que haces casi todos los días durante varios meses.',
        ],
      },
      {
        heading: 'Una nota para corredores en Salou y Cambrils',
        paragraphs: [
          'El terreno de la Costa Daurada es generoso para el trabajo de retorno a la carrera. La Vía Verde de la Costa Daurada ofrece superficies largas, llanas y predecibles que se ajustan bien a las primeras fases del retorno. El paseo marítimo de Salou y Cambrils es similar. Las cuestas pueden añadirse de forma gradual desde las rutas interiores. Si arrastras un problema persistente en el Aquiles, el tendón rotuliano o la fascia plantar y quieres tener el programa de carga construido y supervisado, el entrenamiento personal en Salou con enfoque rehabilitador es el formato que encaja con este tipo de trabajo. La página de contacto es el sitio para empezar.',
        ],
      },
    ],
  },
];

export function getPostEs(slug: string) {
  return POSTS_ES.find((p) => p.slug === slug);
}
