/**
 * Programmatic city landing-page data for "personal trainer [city]" queries.
 *
 * Each city has English and Spanish copy written natively. The shared
 * `<CityServicePage />` component reads from this file so all 12 routes stay
 * thin and consistent.
 */

export type CityCopy = {
  /** URL slug used for both the EN and ES route folders. */
  key: string;
  enPath: string;
  esPath: string;
  /** Display name used in titles, H1, schema. */
  displayName: string;
  displayNameEs: string;
  /** Approx distance / relationship to Salou (for body copy). */
  proximity: string;
  proximityEs: string;
  /** OG image / hero label */
  heroPhoto: string;
  heroPhotoAlt: { en: string; es: string };
  /** Short subtitle (under hero H1). */
  subtitle: { en: string; es: string };
  /** First-screen body paragraph. */
  intro: { en: string; es: string };
  /** Longer "training built for {city}" paragraph. */
  localIntro: { en: string; es: string };
  /** 4 cards on local character / training environment. */
  localDetails: {
    title: { en: string; es: string };
    text: { en: string; es: string };
  }[];
  /** 4 city-specific FAQ entries (a couple of generic ones are appended by the template). */
  faqs: {
    q: { en: string; es: string };
    a: { en: string; es: string };
  }[];
  /** Short SEO description for buildMetadata. */
  description: { en: string; es: string };
};

export const CITIES: CityCopy[] = [
  {
    key: 'la-pineda',
    enPath: '/personal-trainer-la-pineda/',
    esPath: '/es/entrenador-personal-la-pineda/',
    displayName: 'La Pineda',
    displayNameEs: 'La Pineda',
    proximity:
      'La Pineda sits between Salou and Vila-seca, around five minutes by car from Salou centre.',
    proximityEs:
      'La Pineda está entre Salou y Vila-seca, a unos cinco minutos en coche del centro de Salou.',
    heroPhoto: '/images/training-corrective.jpg',
    heroPhotoAlt: {
      en: 'Personal trainer in La Pineda coaching an outdoor strength session near the beach',
      es: 'Entrenador personal en La Pineda dirigiendo una sesión de fuerza al aire libre cerca de la playa',
    },
    subtitle: {
      en: 'English-speaking, exercise-science coaching for La Pineda, Salou & Vila-seca.',
      es: 'Coaching basado en ciencias del ejercicio para La Pineda, Salou y Vila-seca.',
    },
    intro: {
      en: '1:1 personal training in La Pineda for strength, movement quality and long-term health. Sessions on the long sandy beach, in Pi del Burgar park, at home or in a suitable local space — built around your goals and your week.',
      es: 'Entrenamiento personal 1:1 en La Pineda para fuerza, calidad de movimiento y salud a largo plazo. Sesiones en la playa de arena fina, en el parque del Pi del Burgar, a domicilio o en un espacio adecuado — diseñadas en torno a tus objetivos y tu semana.',
    },
    localIntro: {
      en: 'La Pineda is a family-resort strip wedged between Salou and Vila-seca, with the longest unbroken stretch of sand on this part of the coast. The flat seafront, the pine-shaded park around Pi del Burgar and the quieter shoulder seasons make it one of the easiest places on the Costa Daurada to train outdoors year-round.',
      es: 'La Pineda es una franja residencial y turística entre Salou y Vila-seca, con el tramo de arena más largo y continuo de esta parte de la costa. El paseo llano, la pinada del Pi del Burgar y las temporadas medias más tranquilas la convierten en uno de los lugares más cómodos de la Costa Daurada para entrenar al aire libre todo el año.',
    },
    localDetails: [
      {
        title: { en: 'Long sandy beach', es: 'Playa larga de arena fina' },
        text: {
          en: 'Several kilometres of flat, firm sand from Cap Salou towards the Port Aventura headland — ideal for soft-sand conditioning, sled-style sandbag work, sprint mechanics and beach-walk recovery sessions.',
          es: 'Varios kilómetros de arena llana y compacta desde Cap Salou hacia el cabo de PortAventura — ideal para acondicionamiento en arena blanda, trabajo de sandbag, mecánica de sprint y caminatas de recuperación.',
        },
      },
      {
        title: { en: 'Pi del Burgar and the pinada', es: 'Pi del Burgar y la pinada' },
        text: {
          en: 'The shaded park around the protected pine and the wider pinada give clean ground, fixed bars and shelter from the midday sun — useful for warm-ups, mobility flows and bodyweight strength circuits.',
          es: 'El parque alrededor del pino protegido y la pinada ofrecen suelo limpio, barras fijas y sombra al mediodía — útil para calentamientos, trabajo de movilidad y circuitos de fuerza con autocarga.',
        },
      },
      {
        title: { en: 'Resort & expat community', es: 'Comunidad residencial e internacional' },
        text: {
          en: 'La Pineda has a large second-home and long-stay community — Irish, British, Dutch, French and German residents who often want English- or German-speaking coaching that fits around variable schedules.',
          es: 'La Pineda concentra mucha segunda residencia y estancia larga — vecinos irlandeses, británicos, holandeses, franceses y alemanes que a menudo buscan un entrenador con inglés o alemán y horarios flexibles.',
        },
      },
      {
        title: { en: 'Five minutes from Salou', es: 'A cinco minutos de Salou' },
        text: {
          en: 'La Pineda, Salou and Vila-seca form one coastal urban cluster. Existing Salou clients keep their session times; La Pineda clients avoid the trip into Salou entirely.',
          es: 'La Pineda, Salou y Vila-seca forman un mismo continuo urbano costero. Los clientes que ya entrenan en Salou mantienen su horario; los de La Pineda evitan desplazarse hasta Salou.',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Where do sessions take place in La Pineda?',
          es: '¿Dónde se realizan las sesiones en La Pineda?',
        },
        a: {
          en: 'Outdoors on the seafront promenade, on the beach itself, in the pinada around Pi del Burgar, at home if the space and equipment fit, or in a suitable local space — chosen around your goals and the season.',
          es: 'Al aire libre en el paseo marítimo, en la playa, en la pinada del Pi del Burgar, a domicilio cuando el espacio y el material lo permiten, o en un espacio local adecuado — elegido en función de tus objetivos y la época.',
        },
      },
      {
        q: {
          en: 'Do you travel to La Pineda from Salou?',
          es: '¿Te desplazas a La Pineda desde Salou?',
        },
        a: {
          en: 'Yes. La Pineda is around five minutes from Salou and part of the regular service area, together with Vila-seca, Cambrils, Tarragona and Reus.',
          es: 'Sí. La Pineda está a unos cinco minutos de Salou y forma parte de la zona de servicio habitual, junto con Vila-seca, Cambrils, Tarragona y Reus.',
        },
      },
      {
        q: {
          en: 'Is outdoor training viable on La Pineda beach in winter?',
          es: '¿Se puede entrenar al aire libre en la playa de La Pineda en invierno?',
        },
        a: {
          en: 'Most of the year, yes. Winter mornings on this coast are usually mild and dry. In wind or rain we move to the pinada, to a covered space or to an indoor session.',
          es: 'La mayor parte del año, sí. Las mañanas de invierno en esta costa suelen ser suaves y secas. Con viento o lluvia movemos la sesión a la pinada, a un espacio cubierto o a interior.',
        },
      },
      {
        q: {
          en: 'I am only in La Pineda for a few weeks — is that worth it?',
          es: 'Solo estoy unas semanas en La Pineda — ¿merece la pena?',
        },
        a: {
          en: 'Often, yes. Short blocks work well for visitors and long-stay guests: an assessment, two to three sessions a week, and a plan you can take home afterwards.',
          es: 'En muchos casos, sí. Los bloques cortos funcionan bien para visitantes y estancias largas: una valoración, dos o tres sesiones por semana y un plan que te llevas a casa al terminar.',
        },
      },
    ],
    description: {
      en: 'English-speaking personal trainer in La Pineda. Exercise science-based 1:1 coaching on the seafront, in the pinada or at home — five minutes from Salou and Vila-seca.',
      es: 'Entrenador personal en La Pineda con base en ciencias del ejercicio. Coaching 1:1 en el paseo marítimo, en la pinada o a domicilio — a cinco minutos de Salou y Vila-seca.',
    },
  },

  {
    key: 'vila-seca',
    enPath: '/personal-trainer-vila-seca/',
    esPath: '/es/entrenador-personal-vila-seca/',
    displayName: 'Vila-seca',
    displayNameEs: 'Vila-seca',
    proximity:
      'Vila-seca is the parent municipality of both Salou and La Pineda, around ten minutes inland from the coast.',
    proximityEs:
      'Vila-seca es el municipio matriz de Salou y La Pineda, a unos diez minutos hacia el interior desde la costa.',
    heroPhoto: '/images/training-corrective.jpg',
    heroPhotoAlt: {
      en: 'Personal trainer in Vila-seca coaching a 1:1 strength session',
      es: 'Entrenador personal en Vila-seca dirigiendo una sesión de fuerza 1:1',
    },
    subtitle: {
      en: 'Exercise-science 1:1 coaching for Vila-seca, Salou, La Pineda & the inland Camp de Tarragona.',
      es: 'Coaching 1:1 basado en ciencias del ejercicio para Vila-seca, Salou, La Pineda y el Camp de Tarragona interior.',
    },
    intro: {
      en: 'Personal training in Vila-seca for strength, mobility and long-term health. Sessions at home, in the residential parks around the old town, near the Castell or at the Vila-seca sports facilities — built around your goals.',
      es: 'Entrenamiento personal en Vila-seca para fuerza, movilidad y salud a largo plazo. Sesiones a domicilio, en los parques residenciales del casco antiguo, cerca del Castell o en las instalaciones deportivas de Vila-seca — diseñadas en torno a tus objetivos.',
    },
    localIntro: {
      en: 'Vila-seca is the working backbone of this stretch of coast: the parent municipality of Salou and La Pineda, with the main rail hub, the agricultural belt and a quieter, more residential character than the seafront towns. That makes it well-suited to consistent year-round training without summer-tourist chaos.',
      es: 'Vila-seca es el eje vertebrador de esta zona: el municipio matriz de Salou y La Pineda, con el principal nudo ferroviario, el cinturón agrícola y un carácter más residencial y tranquilo que los pueblos de primera línea. Eso la hace ideal para entrenar todo el año con consistencia y sin el agobio del verano.',
    },
    localDetails: [
      {
        title: { en: 'Old town and Castell de Vila-seca', es: 'Casco antiguo y Castell de Vila-seca' },
        text: {
          en: 'The streets around the Castell and the Església de Sant Esteve give flat, quiet routes for warm-ups, mobility work and conditioning loops on cooler days.',
          es: 'Las calles alrededor del Castell y de la Església de Sant Esteve ofrecen rutas llanas y tranquilas para calentamientos, trabajo de movilidad y circuitos de acondicionamiento en días frescos.',
        },
      },
      {
        title: { en: 'Vila-seca rail hub', es: 'Estación de tren de Vila-seca' },
        text: {
          en: 'Easy rail access from Tarragona, Reus, Cambrils and beyond. Useful if you commute or if friends and family want to join an occasional small-group session.',
          es: 'Acceso fácil en tren desde Tarragona, Reus, Cambrils y más allá. Útil si te desplazas por trabajo o si quieres que un amigo o familiar se sume puntualmente a una sesión de grupo reducido.',
        },
      },
      {
        title: { en: 'Mixed residential & agricultural setting', es: 'Entorno residencial y agrícola' },
        text: {
          en: 'Vila-seca has hazelnut and olive farmland, residential streets and modern apartment blocks. Sessions can be set up at home in most building types, or outdoors in the parks just outside the historic centre.',
          es: 'Vila-seca combina campos de avellanos y olivos, calles residenciales y bloques modernos. Las sesiones pueden plantearse en casa en la mayoría de fincas, o al aire libre en los parques a las afueras del casco histórico.',
        },
      },
      {
        title: { en: 'One municipality, three centres', es: 'Un municipio, tres núcleos' },
        text: {
          en: 'Vila-seca, La Pineda and Salou are administratively interlinked but feel like three different places: agricultural, beach-resort, and tourist seafront. Programming can flex across all three depending on the time of year.',
          es: 'Vila-seca, La Pineda y Salou están vinculadas administrativamente pero se viven como tres lugares distintos: agrícola, residencial costero y turístico. La programación puede moverse entre los tres según la época del año.',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Do you cover Vila-seca, La Pineda and Salou as one service area?',
          es: '¿Cubres Vila-seca, La Pineda y Salou como una sola zona de servicio?',
        },
        a: {
          en: 'Yes. The three sit within the same municipality and we treat them as one operational area. You can keep the same session slot if you move between addresses inside it.',
          es: 'Sí. Las tres pertenecen al mismo municipio y las tratamos como una sola zona operativa. Puedes mantener el mismo horario aunque te muevas entre direcciones dentro de ella.',
        },
      },
      {
        q: {
          en: 'Where do sessions take place in Vila-seca?',
          es: '¿Dónde se realizan las sesiones en Vila-seca?',
        },
        a: {
          en: 'At home where the space works, outdoors in the parks around the Castell and the old town, or at a suitable nearby training space. The plan adapts to season and weather.',
          es: 'A domicilio cuando el espacio funciona, al aire libre en los parques del Castell y el casco antiguo, o en un espacio de entrenamiento cercano adecuado. El plan se adapta a la época y al clima.',
        },
      },
      {
        q: {
          en: 'Can you train me in English in Vila-seca?',
          es: '¿Puedes entrenarme en inglés en Vila-seca?',
        },
        a: {
          en: 'Yes. English is my native language and I also coach in German. Spanish is in progress — I can give simple cues in Spanish and switch to English or German for detailed explanations.',
          es: 'Sí. El inglés es mi lengua materna y también entreno en alemán. Mi español está en aprendizaje — uso pautas simples en español y cambio al inglés o al alemán para explicaciones detalladas.',
        },
      },
      {
        q: {
          en: 'Is Vila-seca better than Salou for year-round training?',
          es: '¿Vila-seca es mejor que Salou para entrenar todo el año?',
        },
        a: {
          en: 'It depends on what you want. Vila-seca is quieter, more residential and easier in summer; Salou seafront is better for beach and promenade work. Many clients use both depending on the month.',
          es: 'Depende de qué buscas. Vila-seca es más tranquila, residencial y más fácil en verano; el paseo de Salou es mejor para trabajo de playa y paseo marítimo. Muchos clientes usan ambas según el mes.',
        },
      },
    ],
    description: {
      en: 'English-speaking personal trainer in Vila-seca. 1:1 exercise-science coaching at home or in local parks — covering Vila-seca, Salou, La Pineda and the wider Camp de Tarragona.',
      es: 'Entrenador personal en Vila-seca con base en ciencias del ejercicio. Coaching 1:1 a domicilio o en parques locales — cubriendo Vila-seca, Salou, La Pineda y el Camp de Tarragona.',
    },
  },

  {
    key: 'reus',
    enPath: '/personal-trainer-reus/',
    esPath: '/es/entrenador-personal-reus/',
    displayName: 'Reus',
    displayNameEs: 'Reus',
    proximity:
      'Reus sits around fifteen kilometres inland from Salou and Cambrils, on the edge of the Camp de Tarragona.',
    proximityEs:
      'Reus está a unos quince kilómetros tierra adentro de Salou y Cambrils, en el borde del Camp de Tarragona.',
    heroPhoto: '/images/training-corrective.jpg',
    heroPhotoAlt: {
      en: 'Personal trainer in Reus coaching a strength and conditioning session',
      es: 'Entrenador personal en Reus dirigiendo una sesión de fuerza y acondicionamiento',
    },
    subtitle: {
      en: 'Exercise-science 1:1 coaching for Reus, the Camp de Tarragona & the wider Costa Daurada.',
      es: 'Coaching 1:1 basado en ciencias del ejercicio para Reus, el Camp de Tarragona y la Costa Daurada.',
    },
    intro: {
      en: '1:1 personal training in Reus for strength, mobility and long-term health. Sessions at home, in the parks around the modernista centre, or alongside your existing routine at Reus Deportiu or a private space — built around your goals and your medical history.',
      es: 'Entrenamiento personal 1:1 en Reus para fuerza, movilidad y salud a largo plazo. Sesiones a domicilio, en los parques del centro modernista, o complementando tu rutina en Reus Deportiu o un espacio privado — diseñadas en torno a tus objetivos y tu historial.',
    },
    localIntro: {
      en: 'Reus is the inland engine of this region: around 100,000 people, the birthplace of Gaudí, a strong modernista old town and a serious sporting tradition through clubs like Reus Deportiu. The climate is drier and a bit warmer than the coast, with cold-snap winters and hot summers — both worth programming around.',
      es: 'Reus es el motor interior de la zona: unos 100.000 habitantes, ciudad natal de Gaudí, un casco antiguo modernista potente y una tradición deportiva sólida con clubes como el Reus Deportiu. El clima es más seco y algo más cálido que la costa, con inviernos puntualmente fríos y veranos calurosos — vale la pena programar en consecuencia.',
    },
    localDetails: [
      {
        title: { en: 'Gaudí, modernisme and the old town', es: 'Gaudí, modernismo y casco antiguo' },
        text: {
          en: 'Reus is Gaudí’s birthplace and a modernista showcase, with walkable streets and squares around the Plaça del Mercadal — useful for warm-up walks, mobility loops and short-rest conditioning circuits between sessions.',
          es: 'Reus es la ciudad natal de Gaudí y un escaparate modernista, con calles y plazas caminables alrededor de la Plaça del Mercadal — útiles para caminatas de calentamiento, circuitos de movilidad y acondicionamiento entre sesiones.',
        },
      },
      {
        title: { en: 'Reus Deportiu and club fitness culture', es: 'Reus Deportiu y cultura deportiva' },
        text: {
          en: 'Reus has a serious club sport culture — hockey, padel, running and football. Coaching can complement what you already do at Reus Deportiu or a local club, with strength, prehab and conditioning built around your sport.',
          es: 'Reus tiene una cultura de club deportiva fuerte — hockey, pádel, running y fútbol. El coaching puede complementar lo que ya haces en el Reus Deportiu o un club local, con fuerza, prehabilitación y acondicionamiento adaptados a tu deporte.',
        },
      },
      {
        title: { en: 'Hospital de Sant Joan and the medical corridor', es: 'Hospital de Sant Joan y eje médico' },
        text: {
          en: 'Reus has a busy hospital and a strong allied-health network. Coaching is rehabilitation-informed and used to working alongside physiotherapy, post-surgery recovery and medical conditions — without trying to replace them.',
          es: 'Reus cuenta con un hospital potente y una red de profesionales de salud sólida. El coaching tiene enfoque rehabilitador y está acostumbrado a coordinarse con fisioterapia, recuperación posquirúrgica y condiciones médicas — sin pretender sustituirlos.',
        },
      },
      {
        title: { en: 'Inland climate and seasons', es: 'Clima interior y estacionalidad' },
        text: {
          en: 'Drier and warmer than the coast in summer, with sharper winter mornings. Programming shifts indoors or earlier in the day where it makes sense — and we take advantage of the cooler shoulder seasons for outdoor work.',
          es: 'Más seco y caluroso que la costa en verano, con mañanas de invierno más frías. La programación se mueve a interior o más temprano cuando conviene — y aprovechamos las temporadas medias más frescas para el trabajo al aire libre.',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Do you travel from Salou to Reus for sessions?',
          es: '¿Te desplazas desde Salou a Reus para las sesiones?',
        },
        a: {
          en: 'Yes. Reus is around 15 km from Salou — roughly a 20-minute drive. Block bookings and regular weekly slots work best so the travel makes sense at the rates quoted.',
          es: 'Sí. Reus está a unos 15 km de Salou — aproximadamente 20 minutos en coche. Las reservas en bloque y los horarios semanales fijos son lo que mejor encaja para que el desplazamiento sea sostenible al precio acordado.',
        },
      },
      {
        q: {
          en: 'Can you complement my padel, running or hockey training?',
          es: '¿Puedes complementar mi entrenamiento de pádel, running u hockey?',
        },
        a: {
          en: 'Yes. Strength, prehab and conditioning work alongside sport is one of the most common things I do — designed not to compete with your sport but to make you more durable inside it.',
          es: 'Sí. El trabajo de fuerza, prehabilitación y acondicionamiento junto a un deporte es uno de los encargos más habituales — diseñado para no competir con tu deporte, sino para hacerte más resistente dentro de él.',
        },
      },
      {
        q: {
          en: 'Is the trainer Spanish-speaking?',
          es: '¿El entrenador habla español?',
        },
        a: {
          en: 'Native English, fluent German, Spanish in progress. For most Reus clients the working language is Spanish for cues and English for detailed explanation — this works well in practice.',
          es: 'Inglés nativo, alemán fluido, español en aprendizaje. Para la mayoría de clientes de Reus la combinación es español para pautas y, cuando hace falta detalle, inglés — funciona muy bien en la práctica.',
        },
      },
      {
        q: {
          en: 'Can I train indoors in Reus in summer?',
          es: '¿Puedo entrenar en interior en Reus en verano?',
        },
        a: {
          en: 'Yes. Indoor at home or in a covered space is normal in July and August in Reus. We adjust intensity, hydration and timing for the inland summer heat.',
          es: 'Sí. Entrenar a domicilio o en un espacio cubierto es lo habitual en julio y agosto en Reus. Ajustamos intensidad, hidratación y horarios al calor del interior.',
        },
      },
    ],
    description: {
      en: 'English-speaking personal trainer in Reus. Exercise science-based 1:1 coaching that complements your sport or club training — at home, in a private space or alongside your Reus Deportiu routine.',
      es: 'Entrenador personal en Reus con base en ciencias del ejercicio. Coaching 1:1 que complementa tu deporte o tu rutina en club — a domicilio, en espacio privado o junto a tu actividad en Reus Deportiu.',
    },
  },

  {
    key: 'tarragona',
    enPath: '/personal-trainer-tarragona/',
    esPath: '/es/entrenador-personal-tarragona/',
    displayName: 'Tarragona',
    displayNameEs: 'Tarragona',
    proximity:
      'Tarragona is the regional capital, about 12 km north-east of Salou along the coast.',
    proximityEs:
      'Tarragona es la capital de la provincia, a unos 12 km al noreste de Salou por la costa.',
    heroPhoto: '/images/training-corrective.jpg',
    heroPhotoAlt: {
      en: 'Personal trainer in Tarragona coaching a 1:1 outdoor session near the Roman amphitheatre',
      es: 'Entrenador personal en Tarragona dirigiendo una sesión 1:1 al aire libre cerca del anfiteatro romano',
    },
    subtitle: {
      en: 'Exercise-science 1:1 coaching for Tarragona, the Roman quarter & the wider Costa Daurada.',
      es: 'Coaching 1:1 basado en ciencias del ejercicio para Tarragona, la parte alta romana y la Costa Daurada.',
    },
    intro: {
      en: '1:1 personal training in Tarragona for strength, mobility, joint health and confidence. Sessions on the Balcó del Mediterrani, around the Roman walls, on Platja del Miracle, at home or in a suitable private space — built around your goals and your medical history.',
      es: 'Entrenamiento personal 1:1 en Tarragona para fuerza, movilidad, salud articular y confianza. Sesiones en el Balcó del Mediterráneo, alrededor de la muralla romana, en la Platja del Miracle, a domicilio o en un espacio privado adecuado — diseñadas en torno a tus objetivos y tu historial.',
    },
    localIntro: {
      en: 'Tarragona is the regional capital — a working Mediterranean port, a university town and a UNESCO World Heritage site for its Roman remains. The fitness market here is more developed and a bit more demanding than the resort coast: clients tend to expect strong credentials, clear programming and a coaching style that respects their time.',
      es: 'Tarragona es la capital provincial — un puerto mediterráneo activo, ciudad universitaria y Patrimonio de la Humanidad por sus restos romanos. El mercado del fitness aquí es más desarrollado y exigente que en la costa turística: los clientes esperan credenciales sólidas, una programación clara y un estilo de coaching que respete su tiempo.',
    },
    localDetails: [
      {
        title: { en: 'Part Alta and the Roman quarter', es: 'Part Alta y barrio romano' },
        text: {
          en: 'The Roman amphitheatre, circus and walls give beautiful, varied training corridors — quiet stairs and inclines for conditioning, flat squares for technique work and a serious sense of place that suits long-term clients.',
          es: 'El anfiteatro, el circo y las murallas romanas ofrecen corredores de entrenamiento variados — escaleras y pendientes tranquilas para acondicionamiento, plazas llanas para trabajo técnico y un entorno con peso histórico que funciona muy bien para clientes a largo plazo.',
        },
      },
      {
        title: { en: 'Balcó del Mediterrani & seafront', es: 'Balcó del Mediterráneo y costa' },
        text: {
          en: 'The Balcó, the Rambla Nova and the seafront down to Platja del Miracle give a flat, predictable training corridor — useful for running progressions, walking lactate work and lower-impact strength sessions.',
          es: 'El Balcó, la Rambla Nova y el paseo hasta la Platja del Miracle forman un corredor llano y predecible — útil para progresiones de carrera, trabajo de caminata a umbral y sesiones de fuerza de bajo impacto.',
        },
      },
      {
        title: { en: 'University & professional client base', es: 'Universidad y perfil profesional' },
        text: {
          en: 'A lot of academic and professional clients — researchers, doctors, engineers — who respond well to explanation, evidence and structured progress. Coaching style is honest, science-based and not gimmicky.',
          es: 'Muchos clientes académicos y profesionales — investigación, sanidad, ingeniería — que responden bien a la explicación, la evidencia y la progresión estructurada. El estilo es honesto, basado en ciencia y sin trucos.',
        },
      },
      {
        title: { en: 'Twelve minutes from Salou, twenty from Cambrils', es: 'A doce minutos de Salou, veinte de Cambrils' },
        text: {
          en: 'Tarragona is close enough to Salou and Cambrils that clients can move between addresses, mix home and outdoor sessions, and combine personal training with weekend small-group work on the coast.',
          es: 'Tarragona está lo bastante cerca de Salou y Cambrils como para que los clientes puedan moverse entre direcciones, combinar sesiones a domicilio y al aire libre, y compaginar entrenamiento personal con grupos reducidos en la costa.',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Where do sessions take place in Tarragona?',
          es: '¿Dónde se realizan las sesiones en Tarragona?',
        },
        a: {
          en: 'Outdoors on the Balcó del Mediterrani, around the Roman quarter, on Platja del Miracle, at home if the space works, or in a suitable private training space — chosen around your goals and the season.',
          es: 'Al aire libre en el Balcó del Mediterráneo, en la Part Alta romana, en la Platja del Miracle, a domicilio cuando el espacio lo permite, o en un espacio privado adecuado — elegido en función de tus objetivos y la época.',
        },
      },
      {
        q: {
          en: 'How much does a personal trainer in Tarragona cost?',
          es: '¿Cuánto cuesta un entrenador personal en Tarragona?',
        },
        a: {
          en: '1:1 personal training is €90 per hour. Small-group training is €15–30 per person per hour depending on group size. Pre-paid blocks and packages can be arranged on the intro call.',
          es: 'El entrenamiento personal 1:1 cuesta €90 por hora. El entrenamiento en grupo reducido cuesta €15–30 por persona y hora según el tamaño del grupo. Los bonos prepagados y paquetes se concretan en la llamada inicial.',
        },
      },
      {
        q: {
          en: 'Can I train with you alongside a medical condition?',
          es: '¿Puedo entrenar contigo con una condición médica?',
        },
        a: {
          en: 'Often, yes — including post-surgical recovery, chronic pain, oncology recovery, cardiovascular conditions and pregnancy or postpartum. Coaching is rehabilitation-informed and does not replace medical care.',
          es: 'En muchos casos, sí — incluyendo recuperación postquirúrgica, dolor crónico, recuperación oncológica, condiciones cardiovasculares y embarazo o postparto. El coaching tiene enfoque rehabilitador y no sustituye la atención médica.',
        },
      },
      {
        q: {
          en: 'Do you coach in English at Tarragona university?',
          es: '¿Coaching en inglés en la universidad de Tarragona?',
        },
        a: {
          en: 'Yes. Many of my Tarragona clients are international researchers, students and staff. Sessions run in English by default if you prefer, and we mix in Spanish or German where it helps.',
          es: 'Sí. Muchos de mis clientes de Tarragona son personal e investigadores internacionales. Las sesiones pueden ir por defecto en inglés si lo prefieres, y mezclamos español o alemán cuando ayuda.',
        },
      },
    ],
    description: {
      en: 'English-speaking personal trainer in Tarragona. Exercise science-based 1:1 coaching across the Part Alta, seafront and home — twelve minutes from Salou, twenty from Cambrils.',
      es: 'Entrenador personal en Tarragona con base en ciencias del ejercicio. Coaching 1:1 en la Part Alta, el paseo marítimo y a domicilio — a doce minutos de Salou y veinte de Cambrils.',
    },
  },

  {
    key: 'miami-platja',
    enPath: '/personal-trainer-miami-platja/',
    esPath: '/es/entrenador-personal-miami-platja/',
    displayName: 'Miami Platja',
    displayNameEs: 'Miami Platja',
    proximity:
      'Miami Platja sits just south of Cambrils within the Mont-roig del Camp municipality — about fifteen minutes from Salou by car.',
    proximityEs:
      'Miami Platja está justo al sur de Cambrils dentro del municipio de Mont-roig del Camp — a unos quince minutos en coche de Salou.',
    heroPhoto: '/images/training-corrective.jpg',
    heroPhotoAlt: {
      en: 'Personal trainer in Miami Platja coaching an outdoor strength session by the beach',
      es: 'Entrenador personal en Miami Platja dirigiendo una sesión de fuerza al aire libre junto a la playa',
    },
    subtitle: {
      en: 'English-speaking, exercise-science coaching for Miami Platja, Cambrils & Mont-roig.',
      es: 'Coaching basado en ciencias del ejercicio para Miami Platja, Cambrils y Mont-roig.',
    },
    intro: {
      en: '1:1 personal training in Miami Platja for strength, mobility, healthy ageing and post-injury recovery. Sessions on Cala Crancs and the quieter coves, in the urbanizations, at home or in a suitable private space — built around your goals.',
      es: 'Entrenamiento personal 1:1 en Miami Platja para fuerza, movilidad, envejecimiento saludable y recuperación de lesiones. Sesiones en Cala Crancs y las calas más tranquilas, en las urbanizaciones, a domicilio o en un espacio privado adecuado — diseñadas en torno a tus objetivos.',
    },
    localIntro: {
      en: 'Miami Platja is the coastal heart of Mont-roig del Camp — a long, calm stretch of beach and rocky coves south of Cambrils, with a strong community of retirees, second-home owners and long-stay residents. The character is quieter than Salou or Cambrils, with an older client base and more emphasis on healthy ageing, joint health and confidence.',
      es: 'Miami Platja es el núcleo costero de Mont-roig del Camp — una franja larga y tranquila de playa y calas rocosas al sur de Cambrils, con una comunidad sólida de jubilados, segundas residencias y residentes de larga estancia. El carácter es más tranquilo que el de Salou o Cambrils, con un perfil de cliente algo mayor y más foco en envejecimiento saludable, salud articular y confianza.',
    },
    localDetails: [
      {
        title: { en: 'Cala Crancs and the rocky coves', es: 'Cala Crancs y las calas rocosas' },
        text: {
          en: 'A handful of quiet coves — Cala Crancs, Cala Cala-Mosca, Platja del Pixerota — give varied terrain for soft-sand work, walking progressions and outdoor strength on cooler mornings outside summer.',
          es: 'Varias calas tranquilas — Cala Crancs, Cala Cala-Mosca, Platja del Pixerota — ofrecen terreno variado para trabajo en arena blanda, progresiones de caminata y fuerza al aire libre en mañanas frescas fuera del verano.',
        },
      },
      {
        title: { en: 'Urbanizations & second-home community', es: 'Urbanizaciones y comunidad de segunda residencia' },
        text: {
          en: 'Most Miami Platja training happens at home in the urbanizations — terraces, garages and small home gyms are common. The work focuses on strength, balance, falls prevention and staying capable for the active retirement many clients want here.',
          es: 'La mayoría del entrenamiento en Miami Platja ocurre a domicilio en las urbanizaciones — terrazas, garajes y pequeños gimnasios de casa son frecuentes. El trabajo se centra en fuerza, equilibrio, prevención de caídas y mantener la capacidad para la jubilación activa que muchos clientes buscan aquí.',
        },
      },
      {
        title: { en: 'Healthy ageing and rehabilitation focus', es: 'Envejecimiento saludable y enfoque rehabilitador' },
        text: {
          en: 'A lot of clients here are over 55, post-surgery, working around hip or knee replacements, osteoporosis, cardiovascular conditions or chronic pain. Coaching is rehabilitation-informed and coordinated with physiotherapy and medical guidance where appropriate.',
          es: 'Muchos clientes aquí son mayores de 55, postquirúrgicos o conviven con prótesis de cadera o rodilla, osteoporosis, condiciones cardiovasculares o dolor crónico. El coaching tiene enfoque rehabilitador y se coordina con fisioterapia y guía médica cuando es adecuado.',
        },
      },
      {
        title: { en: 'Ten minutes south of Cambrils', es: 'A diez minutos al sur de Cambrils' },
        text: {
          en: 'Miami Platja sits on the southern edge of the regular service area — about ten minutes south of Cambrils. Regular weekly slots and pre-paid blocks are usually the best fit so the journey makes sense.',
          es: 'Miami Platja está en el extremo sur de la zona de servicio habitual — a unos diez minutos al sur de Cambrils. Los horarios semanales fijos y los bonos prepagados suelen ser la mejor opción para que el desplazamiento encaje.',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Do you work with older adults and retirees in Miami Platja?',
          es: '¿Trabajas con adultos mayores y jubilados en Miami Platja?',
        },
        a: {
          en: 'Yes — it is the majority of my Miami Platja work. Strength, balance, falls prevention, healthy joints and confidence for an active retirement, scaled to your medical history and current capacity.',
          es: 'Sí — es la mayor parte de mi trabajo en Miami Platja. Fuerza, equilibrio, prevención de caídas, salud articular y confianza para una jubilación activa, escalado a tu historial médico y a tu capacidad actual.',
        },
      },
      {
        q: {
          en: 'Can sessions be done at home in my urbanization?',
          es: '¿Las sesiones pueden hacerse en mi casa en la urbanización?',
        },
        a: {
          en: 'Yes. Most Miami Platja sessions happen on a terrace, in a garage or in a small home gym. I bring portable equipment and we design the plan around the space available.',
          es: 'Sí. La mayoría de sesiones en Miami Platja se hacen en una terraza, un garaje o un pequeño gimnasio doméstico. Llevo material portátil y diseñamos el plan en torno al espacio disponible.',
        },
      },
      {
        q: {
          en: 'I had a hip replacement / knee surgery — can you still help?',
          es: 'Tuve una prótesis de cadera o cirugía de rodilla — ¿aún puedes ayudarme?',
        },
        a: {
          en: 'Often, yes — once you are cleared by your surgeon or physio for progressive loading. Coaching is rehabilitation-informed and we coordinate with your medical team rather than working in isolation.',
          es: 'En muchos casos, sí — una vez tu cirujano o fisioterapeuta te dé el alta para carga progresiva. El coaching tiene enfoque rehabilitador y nos coordinamos con tu equipo médico en lugar de trabajar aislados.',
        },
      },
      {
        q: {
          en: 'Do you speak English with retired British clients in Miami Platja?',
          es: '¿Hablas inglés con los jubilados británicos en Miami Platja?',
        },
        a: {
          en: 'Yes. English is my native language. A large part of the Miami Platja client base is British, Irish, Dutch or French retired — sessions run in whichever language works best.',
          es: 'Sí. El inglés es mi lengua materna. Buena parte de los clientes de Miami Platja son jubilados británicos, irlandeses, holandeses o franceses — las sesiones funcionan en el idioma que mejor encaje.',
        },
      },
    ],
    description: {
      en: 'English-speaking personal trainer in Miami Platja. Exercise science-based 1:1 coaching for healthy ageing, joint health and post-injury recovery — ten minutes south of Cambrils.',
      es: 'Entrenador personal en Miami Platja con base en ciencias del ejercicio. Coaching 1:1 para envejecimiento saludable, salud articular y recuperación de lesiones — a diez minutos al sur de Cambrils.',
    },
  },

  {
    key: 'mont-roig',
    enPath: '/personal-trainer-mont-roig/',
    esPath: '/es/entrenador-personal-mont-roig/',
    displayName: 'Mont-roig del Camp',
    displayNameEs: 'Mont-roig del Camp',
    proximity:
      'Mont-roig del Camp is the inland village and surrounding municipality just behind Miami Platja, around twenty minutes from Salou.',
    proximityEs:
      'Mont-roig del Camp es el pueblo interior y el municipio que cubre Miami Platja, a unos veinte minutos de Salou.',
    heroPhoto: '/images/training-corrective.jpg',
    heroPhotoAlt: {
      en: 'Personal trainer in Mont-roig del Camp coaching a 1:1 strength and mobility session',
      es: 'Entrenador personal en Mont-roig del Camp dirigiendo una sesión 1:1 de fuerza y movilidad',
    },
    subtitle: {
      en: 'Exercise-science 1:1 coaching for Mont-roig village, Miami Platja & the inland Camp de Tarragona.',
      es: 'Coaching 1:1 basado en ciencias del ejercicio para el pueblo de Mont-roig, Miami Platja y el Camp de Tarragona interior.',
    },
    intro: {
      en: '1:1 personal training in Mont-roig del Camp for strength, mobility, hiking conditioning and long-term joint health. Sessions at home in the village or surrounding masies, in the agricultural lanes, on the trails towards the Serra de Llaberia, or down on the Miami Platja coast.',
      es: 'Entrenamiento personal 1:1 en Mont-roig del Camp para fuerza, movilidad, acondicionamiento para senderismo y salud articular a largo plazo. Sesiones a domicilio en el pueblo o en las masías, por los caminos agrícolas, en los senderos hacia la Serra de Llaberia, o en la costa de Miami Platja.',
    },
    localIntro: {
      en: 'Mont-roig del Camp is the inland half of a two-faced municipality: a stone village in the Camp de Tarragona, agricultural lanes through olive and carob, and the slow rise into the Serra de Llaberia behind it. It is the village where Joan Miró spent his summers and painted some of his most important early work — landscape, light and quiet matter here.',
      es: 'Mont-roig del Camp es la mitad interior de un municipio de dos caras: un pueblo de piedra en el Camp de Tarragona, caminos agrícolas entre olivos y algarrobos, y la subida pausada hacia la Serra de Llaberia. Es el pueblo donde Joan Miró pasaba sus veranos y pintó parte de su obra temprana más importante — el paisaje, la luz y el silencio importan aquí.',
    },
    localDetails: [
      {
        title: { en: 'Serra de Llaberia hiking access', es: 'Acceso a la Serra de Llaberia' },
        text: {
          en: 'Mont-roig is the natural launchpad for the Serra de Llaberia trails. A lot of coaching here is hiking-specific — leg strength, hip and ankle conditioning, lower-back robustness and recovery between long days on uneven ground.',
          es: 'Mont-roig es la puerta natural a los senderos de la Serra de Llaberia. Mucho del coaching aquí es específico para senderismo — fuerza de piernas, acondicionamiento de cadera y tobillo, robustez lumbar y recuperación entre jornadas largas en terreno irregular.',
        },
      },
      {
        title: { en: 'Miró, the village and the masies', es: 'Miró, el pueblo y las masías' },
        text: {
          en: 'The old village around the church and Mas Miró give quiet, walkable streets and a strong sense of place. Sessions at home in a village house or out at a mas often have more space than coastal apartments — useful for free-weight and mobility work.',
          es: 'El casco antiguo alrededor de la iglesia y el Mas Miró ofrecen calles tranquilas y un entorno con carácter. Las sesiones a domicilio en una casa del pueblo o en una masía suelen tener más espacio que los apartamentos costeros — útil para trabajo con pesas libres y movilidad.',
        },
      },
      {
        title: { en: 'Agricultural lanes for outdoor work', es: 'Caminos agrícolas para trabajo al aire libre' },
        text: {
          en: 'The lanes between the olive and carob groves are flat, quiet and well-shaded in summer afternoons — ideal for walking lactate work, mobility loops and low-impact conditioning at any age.',
          es: 'Los caminos entre los olivos y algarrobos son llanos, tranquilos y con sombra en las tardes de verano — ideales para caminata a umbral, trabajo de movilidad y acondicionamiento de bajo impacto a cualquier edad.',
        },
      },
      {
        title: { en: 'Two faces, one service area', es: 'Dos caras, una zona de servicio' },
        text: {
          en: 'The same municipality covers Mont-roig village and Miami Platja on the coast. Clients can switch between addresses across the year — quieter inland weeks in summer, coastal mornings in spring and autumn.',
          es: 'El mismo municipio abarca el pueblo de Mont-roig y Miami Platja en la costa. Los clientes pueden alternar direcciones a lo largo del año — semanas tranquilas en el interior en verano, mañanas de costa en primavera y otoño.',
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Do you train hikers preparing for the Serra de Llaberia?',
          es: '¿Entrenas senderistas que se preparan para la Serra de Llaberia?',
        },
        a: {
          en: 'Yes — hiking-specific strength, mobility and conditioning is one of the most common things I do for Mont-roig clients. We work on leg strength, ankle and hip robustness, lower-back endurance and recovery between long days.',
          es: 'Sí — la fuerza, movilidad y acondicionamiento específicos para senderismo son de los encargos más habituales con clientes de Mont-roig. Trabajamos fuerza de piernas, robustez de tobillo y cadera, resistencia lumbar y recuperación entre jornadas largas.',
        },
      },
      {
        q: {
          en: 'Do you travel up to Mont-roig village from the coast?',
          es: '¿Subes al pueblo de Mont-roig desde la costa?',
        },
        a: {
          en: 'Yes. The village is around fifteen to twenty minutes from Cambrils and Salou by car. Regular weekly slots or pre-paid blocks usually make the most sense for travel further inland.',
          es: 'Sí. El pueblo está a unos quince o veinte minutos en coche de Cambrils y Salou. Los horarios semanales fijos o los bonos prepagados suelen ser la mejor opción para los desplazamientos al interior.',
        },
      },
      {
        q: {
          en: 'Can sessions take place at a mas or country house?',
          es: '¿Las sesiones pueden ser en una masía o casa de campo?',
        },
        a: {
          en: 'Yes — and they often do. A patio, garage or covered terrace at a mas works very well, especially for clients who prefer privacy and have a bit of equipment already.',
          es: 'Sí — y de hecho ocurre a menudo. Un patio, un garaje o una terraza cubierta de una masía funcionan muy bien, sobre todo para clientes que valoran la privacidad y ya tienen algo de material.',
        },
      },
      {
        q: {
          en: 'Can I combine Mont-roig village and Miami Platja sessions?',
          es: '¿Puedo combinar sesiones en el pueblo de Mont-roig y en Miami Platja?',
        },
        a: {
          en: 'Yes. Many clients move between an inland home and a coastal one within the same municipality. We programme one plan and shift the venue across the year.',
          es: 'Sí. Muchos clientes alternan entre una casa interior y otra en la costa dentro del mismo municipio. Programamos un único plan y movemos la ubicación a lo largo del año.',
        },
      },
    ],
    description: {
      en: 'English-speaking personal trainer in Mont-roig del Camp. Exercise science-based 1:1 coaching for hikers, retirees and active adults — village, masies and the Miami Platja coast.',
      es: 'Entrenador personal en Mont-roig del Camp con base en ciencias del ejercicio. Coaching 1:1 para senderistas, jubilados y adultos activos — pueblo, masías y la costa de Miami Platja.',
    },
  },
];

/** Lookup helper. */
export function getCity(key: string): CityCopy {
  const c = CITIES.find((x) => x.key === key);
  if (!c) throw new Error(`Unknown city key: ${key}`);
  return c;
}
