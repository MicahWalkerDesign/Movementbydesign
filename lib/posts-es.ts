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
];

export function getPostEs(slug: string) {
  return POSTS_ES.find((p) => p.slug === slug);
}
