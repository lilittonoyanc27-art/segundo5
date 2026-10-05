export interface TextTypeTheory {
  id: number;
  nameEs: string;
  nameAm: string;
  definitionEs: string;
  definitionAm: string;
  badgeColor: string;
  frequentWordsLabel?: string;
  frequentWords?: string[];
  frequentWordsAm?: string;
}

export const TEXT_TYPES: TextTypeTheory[] = [
  {
    id: 1,
    nameEs: "Narrativo",
    nameAm: "Պատմողական տեքստ",
    definitionEs: "Cuenta hechos o acontecimientos. Normalmente aparecen personajes, lugar, tiempo y acciones.",
    definitionAm: "Պատմում է դեպքերի կամ իրադարձությունների մասին։ Սովորաբար կան հերոսներ, վայր, ժամանակ և գործողություններ։",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800",
    frequentWordsLabel: "Palabras frecuentes — Հաճախ հանդիպող բառեր",
    frequentWords: ["ayer", "después", "de repente", "entonces", "al final…"],
    frequentWordsAm: "երեկ, հետո, հանկարծ, այն ժամանակ/այդժամ, վերջում…"
  },
  {
    id: 2,
    nameEs: "Descriptivo",
    nameAm: "Նկարագրական տեքստ",
    definitionEs: "Explica cómo es una persona, un lugar, un objeto o un animal.",
    definitionAm: "Նկարագրում է, թե ինչպիսին է մարդը, վայրը, առարկան կամ կենդանին։",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800",
    frequentWordsLabel: "Palabras frecuentes",
    frequentWords: ["alto", "pequeño", "bonito", "tranquilo", "oscuro", "simpático…"],
    frequentWordsAm: "բարձրահասակ/բարձր, փոքր, գեղեցիկ, հանգիստ, մութ, համակրելի…"
  },
  {
    id: 3,
    nameEs: "Expositivo",
    nameAm: "Բացատրական / տեղեկատվական տեքստ",
    definitionEs: "Explica un tema y da información de forma clara y objetiva.",
    definitionAm: "Բացատրում է որևէ թեմա և տալիս է հստակ, օբյեկտիվ տեղեկություն։",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800"
  },
  {
    id: 4,
    nameEs: "Argumentativo",
    nameAm: "Փաստարկային տեքստ",
    definitionEs: "Presenta una opinión e intenta convencer usando razones o argumentos.",
    definitionAm: "Ներկայացնում է կարծիք և փորձում է համոզել՝ պատճառներ ու փաստարկներ բերելով։",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800",
    frequentWordsLabel: "Expresiones frecuentes",
    frequentWords: ["Creo que…", "En mi opinión…", "porque…", "por eso…", "considero que…"],
    frequentWordsAm: "Կարծում եմ, որ…, Իմ կարծիքով…, որովհետև…, այդ պատճառով…, համարում եմ, որ…"
  },
  {
    id: 5,
    nameEs: "Instructivo",
    nameAm: "Հրահանգային տեքստ",
    definitionEs: "Explica los pasos para hacer algo.",
    definitionAm: "Բացատրում է, թե ինչ քայլերով պետք է ինչ-որ բան անել։",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-800",
    frequentWordsLabel: "Palabras frecuentes",
    frequentWords: ["primero", "después", "a continuación", "finalmente…"],
    frequentWordsAm: "սկզբում/առաջինը, հետո, այնուհետև, վերջում…"
  },
  {
    id: 6,
    nameEs: "Dialogado",
    nameAm: "Երկխոսական տեքստ",
    definitionEs: "Presenta una conversación entre dos o más personas.",
    definitionAm: "Ներկայացնում է երկու կամ ավելի մարդկանց զրույցը։",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800"
  }
];

export interface Ejercicio1Item {
  id: number;
  textEs: string;
  textAm: string;
  questionEs: string;
  questionAm: string;
  answerTypeEs: string;
  answerTypeAm: string;
  whyQuestionEs?: string;
  whyQuestionAm?: string;
  explanationEs: string;
  explanationAm: string;
  options: string[];
}

export const EJERCICIO_1_ITEMS: Ejercicio1Item[] = [
  {
    id: 1,
    textEs: "Ayer Carlos salió de casa muy temprano. Caminó hasta la estación, pero de repente empezó a llover. Corrió hasta una cafetería y esperó allí.",
    textAm: "Երեկ Կառլոսը շատ շուտ դուրս եկավ տնից։ Նա քայլեց մինչև կայարան, բայց հանկարծ սկսեց անձրև գալ։ Նա վազեց սրճարան և այնտեղ սպասեց։",
    questionEs: "¿Qué tipo de texto es?",
    questionAm: "Ի՞նչ տեսակի տեքստ է։",
    answerTypeEs: "Narrativo",
    answerTypeAm: "Պատմողական",
    whyQuestionEs: "¿Por qué?",
    whyQuestionAm: "Ինչո՞ւ։",
    explanationEs: "Porque cuenta varios acontecimientos que sucedieron.",
    explanationAm: "Որովհետև պատմում է տեղի ունեցած մի քանի իրադարձությունների մասին։",
    options: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo", "Instructivo", "Dialogado"]
  },
  {
    id: 2,
    textEs: "Mi perro es pequeño y muy juguetón. Tiene el pelo blanco y marrón, las orejas largas y los ojos oscuros.",
    textAm: "Իմ շունը փոքր է և շատ խաղասեր։ Նրա մազերը սպիտակ և շագանակագույն են, ականջները՝ երկար, իսկ աչքերը՝ մուգ։",
    questionEs: "¿Qué tipo de texto es?",
    questionAm: "Ի՞նչ տեսակի տեքստ է։",
    answerTypeEs: "Descriptivo",
    answerTypeAm: "Նկարագրական",
    explanationEs: "Describe cómo es el perro.",
    explanationAm: "Նկարագրում է, թե ինչպիսին է շունը։",
    options: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo", "Instructivo", "Dialogado"]
  },
  {
    id: 3,
    textEs: "La Tierra está formada por varias capas. La corteza es la capa exterior, mientras que el núcleo se encuentra en la parte más interna.",
    textAm: "Երկիրը կազմված է մի քանի շերտերից։ Երկրակեղևը արտաքին շերտն է, իսկ միջուկը գտնվում է ամենաներքին հատվածում։",
    questionEs: "¿Qué tipo de texto es?",
    questionAm: "Ի՞նչ տեսակի տեքստ է։",
    answerTypeEs: "Expositivo",
    answerTypeAm: "Բացատրական / տեղեկատվական",
    explanationEs: "Da información objetiva sobre la Tierra.",
    explanationAm: "Տալիս է օբյեկտիվ տեղեկություն Երկրի մասին։",
    options: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo", "Instructivo", "Dialogado"]
  },
  {
    id: 4,
    textEs: "Creo que los estudiantes deberían hacer más deporte porque mejora la salud y ayuda a reducir el estrés.",
    textAm: "Կարծում եմ՝ աշակերտները պետք է ավելի շատ սպորտով զբաղվեն, որովհետև դա բարելավում է առողջությունը և օգնում է նվազեցնել սթրեսը։",
    questionEs: "¿Qué tipo de texto es?",
    questionAm: "Ի՞նչ տեսակի տեքստ է։",
    answerTypeEs: "Argumentativo",
    answerTypeAm: "Փաստարկային",
    explanationEs: "Hay una opinión y una razón.",
    explanationAm: "Կա կարծիք և այն հիմնավորող պատճառ։",
    options: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo", "Instructivo", "Dialogado"]
  },
  {
    id: 5,
    textEs: "Primero corta los tomates. Después añade aceite y sal. Finalmente mezcla todos los ingredientes.",
    textAm: "Սկզբում կտրատիր լոլիկները։ Հետո ավելացրու ձեթ և աղ։ Վերջում խառնիր բոլոր բաղադրիչները։",
    questionEs: "¿Qué tipo de texto es?",
    questionAm: "Ի՞նչ տեսակի տեքստ է։",
    answerTypeEs: "Instructivo",
    answerTypeAm: "Հրահանգային",
    explanationEs: "Explica los pasos para hacer algo.",
    explanationAm: "Բացատրում է գործողությունների հերթականությունը։",
    options: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo", "Instructivo", "Dialogado"]
  },
  {
    id: 6,
    textEs: "—¿Vienes al cine esta tarde?\n—Sí, pero primero tengo que terminar los deberes.\n—Perfecto. Te espero a las seis.",
    textAm: "— Այսօր կեսօրից հետո կինո՞ ես գալիս։\n— Այո, բայց սկզբում պետք է ավարտեմ տնային աշխատանքը։\n— Լավ։ Ժամը վեցին կսպասեմ քեզ։",
    questionEs: "¿Qué tipo de texto es?",
    questionAm: "Ի՞նչ տեսակի տեքստ է։",
    answerTypeEs: "Dialogado",
    answerTypeAm: "Երկխոսական",
    explanationEs: "Dos personas están hablando.",
    explanationAm: "Երկու մարդ զրուցում են։",
    options: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo", "Instructivo", "Dialogado"]
  }
];

export interface Ejercicio2Item {
  id: number;
  questionEs: string;
  questionAm: string;
  choices: {
    key: string;
    textEs: string;
    textAm: string;
  }[];
  correctKey: string;
  answerEs: string;
  answerAm: string;
}

export const EJERCICIO_2_ITEMS: Ejercicio2Item[] = [
  {
    id: 1,
    questionEs: "Un texto que cuenta una aventura es normalmente…",
    questionAm: "Արկած պատմող տեքստը սովորաբար…",
    choices: [
      { key: "A", textEs: "descriptivo", textAm: "նկարագրական է" },
      { key: "B", textEs: "narrativo", textAm: "պատմողական է" },
      { key: "C", textEs: "instructivo", textAm: "հրահանգային է" },
      { key: "D", textEs: "argumentativo", textAm: "փաստարկային է" }
    ],
    correctKey: "B",
    answerEs: "B. Narrativo",
    answerAm: "Պատմողական"
  },
  {
    id: 2,
    questionEs: "¿Qué texto utiliza muchos adjetivos para explicar cómo es algo?",
    questionAm: "Ո՞ր տեքստն է շատ ածականներ օգտագործում ինչ-որ բան նկարագրելու համար։",
    choices: [
      { key: "A", textEs: "descriptivo", textAm: "նկարագրական" },
      { key: "B", textEs: "dialogado", textAm: "երկխոսական" },
      { key: "C", textEs: "instructivo", textAm: "հրահանգային" },
      { key: "D", textEs: "narrativo", textAm: "պատմողական" }
    ],
    correctKey: "A",
    answerEs: "A. Descriptivo",
    answerAm: "Նկարագրական"
  },
  {
    id: 3,
    questionEs: "¿Qué tipo de texto encontramos normalmente en una receta?",
    questionAm: "Ո՞ր տեսակի տեքստն ենք սովորաբար տեսնում բաղադրատոմսում։",
    choices: [
      { key: "A", textEs: "argumentativo", textAm: "փաստարկային" },
      { key: "B", textEs: "narrativo", textAm: "պատմողական" },
      { key: "C", textEs: "instructivo", textAm: "հրահանգային" },
      { key: "D", textEs: "dialogado", textAm: "երկխոսական" }
    ],
    correctKey: "C",
    answerEs: "C. Instructivo",
    answerAm: "Հրահանգային"
  },
  {
    id: 4,
    questionEs: "Si un autor escribe «En mi opinión…», probablemente el texto es…",
    questionAm: "Եթե հեղինակը գրում է «Իմ կարծիքով…», հավանաբար տեքստը…",
    choices: [
      { key: "A", textEs: "expositivo", textAm: "բացատրական" },
      { key: "B", textEs: "argumentativo", textAm: "փաստարկային" },
      { key: "C", textEs: "descriptivo", textAm: "նկարագրական" },
      { key: "D", textEs: "dialogado", textAm: "երկխոսական" }
    ],
    correctKey: "B",
    answerEs: "B. Argumentativo",
    answerAm: "Փաստարկային"
  },
  {
    id: 5,
    questionEs: "¿Qué tipo de texto aparece en una conversación de WhatsApp?",
    questionAm: "Ո՞ր տեսակի տեքստն է հանդիպում WhatsApp-ի զրույցում։",
    choices: [
      { key: "A", textEs: "dialogado", textAm: "երկխոսական" },
      { key: "B", textEs: "descriptivo", textAm: "նկարագրական" },
      { key: "C", textEs: "expositivo", textAm: "բացատրական" },
      { key: "D", textEs: "instructivo", textAm: "հրահանգային" }
    ],
    correctKey: "A",
    answerEs: "A. Dialogado",
    answerAm: "Երկխոսական"
  },
  {
    id: 6,
    questionEs: "Un texto de Ciencias que explica qué es la atmósfera es…",
    questionAm: "Բնագիտության տեքստը, որը բացատրում է, թե ինչ է մթնոլորտը…",
    choices: [
      { key: "A", textEs: "narrativo", textAm: "պատմողական" },
      { key: "B", textEs: "instructivo", textAm: "հրահանգային" },
      { key: "C", textEs: "expositivo", textAm: "բացատրական" },
      { key: "D", textEs: "argumentativo", textAm: "փաստարկային" }
    ],
    correctKey: "C",
    answerEs: "C. Expositivo",
    answerAm: "Բացատրական"
  }
];

export interface Ejercicio3Item {
  id: number;
  textEs: string;
  textAm: string;
  questionEs: string;
  questionAm: string;
  answerEs: string;
  answerAm?: string;
  breakdown?: {
    labelEs: string;
    labelAm: string;
    contentEs: string;
    contentAm: string;
  }[];
}

export const EJERCICIO_3_ITEMS: Ejercicio3Item[] = [
  {
    id: 1,
    textEs: "El castillo era enorme, oscuro y silencioso. Sus paredes eran grises y las ventanas eran muy pequeñas.",
    textAm: "Ամրոցը հսկայական էր, մութ և լուռ։ Նրա պատերը մոխրագույն էին, իսկ պատուհանները՝ շատ փոքր։",
    questionEs: "¿Qué palabras nos indican que es descriptivo?",
    questionAm: "Ո՞ր բառերն են ցույց տալիս, որ սա նկարագրական տեքստ է։",
    answerEs: "enorme, oscuro, silencioso, grises, pequeñas",
    answerAm: "հսկայական, մութ, լուռ, մոխրագույն, փոքր"
  },
  {
    id: 2,
    textEs: "Primero abre el libro. Después busca la página 25. A continuación lee el texto y finalmente responde a las preguntas.",
    textAm: "Սկզբում բացիր գիրքը։ Հետո գտիր 25-րդ էջը։ Այնուհետև կարդա տեքստը և վերջում պատասխանիր հարցերին։",
    questionEs: "¿Qué palabras indican orden?",
    questionAm: "Ո՞ր բառերն են ցույց տալիս հերթականությունը։",
    answerEs: "Primero / después / a continuación / finalmente",
    answerAm: "Սկզբում / հետո / այնուհետև / վերջում"
  },
  {
    id: 3,
    textEs: "Creo que tener clases de educación física es importante porque los alumnos necesitan moverse y cuidar su salud.",
    textAm: "Կարծում եմ՝ ֆիզկուլտուրայի դասեր ունենալը կարևոր է, որովհետև աշակերտներին անհրաժեշտ է շարժվել և հոգ տանել առողջության մասին։",
    questionEs: "Identifica la opinión y el argumento.",
    questionAm: "Գտի՛ր կարծիքը և փաստարկը։",
    answerEs: "Opinión: «Creo que tener clases de educación física es importante.»\nArgumento: «Porque los alumnos necesitan moverse y cuidar su salud.»",
    breakdown: [
      {
        labelEs: "Opinión",
        labelAm: "Կարծիք",
        contentEs: "Creo que tener clases de educación física es importante.",
        contentAm: "Կարծում եմ՝ ֆիզկուլտուրայի դասեր ունենալը կարևոր է։"
      },
      {
        labelEs: "Argumento",
        labelAm: "Փաստարկ",
        contentEs: "Porque los alumnos necesitan moverse y cuidar su salud.",
        contentAm: "Որովհետև աշակերտներին անհրաժեշտ է շարժվել և հոգ տանել առողջության մասին։"
      }
    ]
  }
];

export interface BinaryChoiceItem {
  id: number;
  textEs: string;
  textAm: string;
  correctEs: string;
  correctAm: string;
  options: { es: string; am: string }[];
}

export const EJERCICIO_4_ITEMS: BinaryChoiceItem[] = [
  {
    id: 1,
    textEs: "El jugador era alto, rápido y muy fuerte. Tenía el pelo corto y los ojos marrones.",
    textAm: "Ֆուտբոլիստը բարձրահասակ, արագ և շատ ուժեղ էր։ Նա ուներ կարճ մազեր և շագանակագույն աչքեր։",
    correctEs: "Descriptivo",
    correctAm: "Նկարագրական",
    options: [
      { es: "Narrativo", am: "Պատմողական" },
      { es: "Descriptivo", am: "Նկարագրական" }
    ]
  },
  {
    id: 2,
    textEs: "El delantero recibió el balón, corrió hacia la portería y marcó un gol.",
    textAm: "Հարձակվողը ստացավ գնդակը, վազեց դեպի դարպասը և գոլ խփեց։",
    correctEs: "Narrativo",
    correctAm: "Պատմողական",
    options: [
      { es: "Narrativo", am: "Պատմողական" },
      { es: "Descriptivo", am: "Նկարագրական" }
    ]
  },
  {
    id: 3,
    textEs: "El estadio era enorme y estaba lleno de aficionados. Las gradas eran azules y blancas.",
    textAm: "Մարզադաշտը հսկայական էր և լի էր երկրպագուներով։ Տրիբունաները կապույտ և սպիտակ էին։",
    correctEs: "Descriptivo",
    correctAm: "Նկարագրական",
    options: [
      { es: "Narrativo", am: "Պատմողական" },
      { es: "Descriptivo", am: "Նկարագրական" }
    ]
  },
  {
    id: 4,
    textEs: "De repente el árbitro pitó. El jugador lanzó el penalti y el portero paró el balón.",
    textAm: "Հանկարծ մրցավարը սուլեց։ Ֆուտբոլիստը իրացրեց 11-մետրանոցը, իսկ դարպասապահը կանգնեցրեց գնդակը։",
    correctEs: "Narrativo",
    correctAm: "Պատմողական",
    options: [
      { es: "Narrativo", am: "Պատմողական" },
      { es: "Descriptivo", am: "Նկարագրական" }
    ]
  }
];

export const EJERCICIO_5_ITEMS: BinaryChoiceItem[] = [
  {
    id: 1,
    textEs: "El fútbol se juega entre dos equipos de once jugadores. El objetivo es marcar más goles que el equipo contrario.",
    textAm: "Ֆուտբոլը խաղում են երկու թիմերով, որոնցից յուրաքանչյուրն ունի տասնմեկ խաղացող։ Նպատակն է ավելի շատ գոլ խփել, քան հակառակորդը։",
    correctEs: "Expositivo",
    correctAm: "Բացատրական",
    options: [
      { es: "Expositivo", am: "Բացատրական" },
      { es: "Argumentativo", am: "Փաստարկային" }
    ]
  },
  {
    id: 2,
    textEs: "En mi opinión, el fútbol es un deporte excelente para los jóvenes porque enseña a trabajar en equipo.",
    textAm: "Իմ կարծիքով՝ ֆուտբոլը հիանալի սպորտաձև է երիտասարդների համար, որովհետև սովորեցնում է աշխատել թիմով։",
    correctEs: "Argumentativo",
    correctAm: "Փաստարկային",
    options: [
      { es: "Expositivo", am: "Բացատրական" },
      { es: "Argumentativo", am: "Փաստարկային" }
    ]
  },
  {
    id: 3,
    textEs: "La atmósfera es la capa de gases que rodea la Tierra. Está formada principalmente por nitrógeno y oxígeno.",
    textAm: "Մթնոլորտը գազերի շերտն է, որը շրջապատում է Երկիրը։ Այն հիմնականում կազմված է ազոտից և թթվածնից։",
    correctEs: "Expositivo",
    correctAm: "Բացատրական",
    options: [
      { es: "Expositivo", am: "Բացատրական" },
      { es: "Argumentativo", am: "Փաստարկային" }
    ]
  },
  {
    id: 4,
    textEs: "Creo que deberíamos utilizar menos plástico porque contamina el medio ambiente.",
    textAm: "Կարծում եմ՝ պետք է ավելի քիչ պլաստիկ օգտագործենք, որովհետև այն աղտոտում է շրջակա միջավայրը։",
    correctEs: "Argumentativo",
    correctAm: "Փաստարկային",
    options: [
      { es: "Expositivo", am: "Բացատրական" },
      { es: "Argumentativo", am: "Փաստարկային" }
    ]
  }
];

export interface Ejercicio6Question {
  num: number;
  questionEs: string;
  questionAm: string;
  answerEs: string;
  answerAm: string;
}

export const EJERCICIO_6_STORY = {
  textEs: "El sábado pasado Pablo fue a jugar un partido de fútbol. Al principio su equipo perdía 0-1. En la segunda parte Pablo recibió un pase, corrió hacia la portería y marcó un gol. Cinco minutos después, su compañero marcó otro. Al final ganaron 2-1.",
  textAm: "Անցած շաբաթ օրը Պաբլոն գնաց ֆուտբոլային խաղ խաղալու։ Սկզբում նրա թիմը պարտվում էր 0։1 հաշվով։ Երկրորդ խաղակեսում Պաբլոն փոխանցում ստացավ, վազեց դեպի դարպասը և գոլ խփեց։ Հինգ րոպե անց նրա թիմակիցը ևս մեկ գոլ խփեց։ Վերջում նրանք հաղթեցին 2։1 հաշվով։",
  questions: [
    {
      num: 1,
      questionEs: "¿Qué tipo de texto es?",
      questionAm: "Ի՞նչ տեսակի տեքստ է։",
      answerEs: "Narrativo",
      answerAm: "Պատմողական"
    },
    {
      num: 2,
      questionEs: "¿Quién es el personaje principal?",
      questionAm: "Ո՞վ է գլխավոր հերոսը։",
      answerEs: "Pablo",
      answerAm: "Պաբլոն"
    },
    {
      num: 3,
      questionEs: "¿Cuándo ocurre la historia?",
      questionAm: "Ե՞րբ է տեղի ունենում պատմությունը։",
      answerEs: "El sábado pasado",
      answerAm: "Անցած շաբաթ օրը"
    },
    {
      num: 4,
      questionEs: "¿Qué pasó al final?",
      questionAm: "Ի՞նչ տեղի ունեցավ վերջում։",
      answerEs: "Ganaron 2-1.",
      answerAm: "Նրանք հաղթեցին 2։1 հաշվով։"
    },
    {
      num: 5,
      questionEs: "Busca tres acciones.",
      questionAm: "Գտի՛ր երեք գործողություն։",
      answerEs: "recibió / corrió / marcó",
      answerAm: "ստացավ / վազեց / խփեց"
    }
  ] as Ejercicio6Question[]
};

export const EJERCICIO_7_DATA = {
  originalTextEs: "Mi gato es pequeño, blanco y muy tranquilo. Tiene los ojos verdes.",
  originalTextAm: "Իմ կատուն փոքր է, սպիտակ և շատ հանգիստ։ Նրա աչքերը կանաչ են։",
  originalTypeEs: "Descriptivo",
  originalTypeAm: "Նկարագրական",
  taskEs: "Ahora conviértelo en narrativo.",
  taskAm: "Այժմ դարձրու այն պատմողական։",
  exampleEs: "Ayer mi gato salió al jardín, vio un pájaro y empezó a correr detrás de él. Después volvió a casa.",
  exampleAm: "Երեկ իմ կատուն դուրս եկավ այգի, տեսավ թռչուն և սկսեց վազել նրա հետևից։ Հետո վերադարձավ տուն։",
  resultTypeEs: "Narrativo",
  resultTypeAm: "Պատմողական"
};

export interface TrueFalseItem {
  id: number;
  statementEs: string;
  statementAm: string;
  isTrue: boolean;
  correctionEs?: string;
  correctionAm?: string;
}

export const EJERCICIO_8_ITEMS: TrueFalseItem[] = [
  {
    id: 1,
    statementEs: "Un texto narrativo cuenta acontecimientos.",
    statementAm: "Պատմողական տեքստը պատմում է իրադարձություններ։",
    isTrue: true
  },
  {
    id: 2,
    statementEs: "Un texto descriptivo explica pasos para hacer algo.",
    statementAm: "Նկարագրական տեքստը բացատրում է որևէ բան անելու քայլերը։",
    isTrue: false,
    correctionEs: "Eso es instructivo.",
    correctionAm: "Սա հրահանգային է (instructivo)։"
  },
  {
    id: 3,
    statementEs: "Un texto argumentativo contiene opiniones y argumentos.",
    statementAm: "Փաստարկային տեքստը պարունակում է կարծիքներ և փաստարկներ։",
    isTrue: true
  },
  {
    id: 4,
    statementEs: "Una receta normalmente es un texto narrativo.",
    statementAm: "Բաղադրատոմսը սովորաբար պատմողական տեքստ է։",
    isTrue: false,
    correctionEs: "Es instructivo.",
    correctionAm: "Սա հրահանգային է (instructivo)։"
  },
  {
    id: 5,
    statementEs: "Un diálogo contiene intervenciones de dos o más personas.",
    statementAm: "Երկխոսական տեքստում խոսում են երկու կամ ավելի մարդիկ։",
    isTrue: true
  },
  {
    id: 6,
    statementEs: "Un texto expositivo intenta siempre convencer al lector.",
    statementAm: "Բացատրական տեքստը միշտ փորձում է համոզել ընթերցողին։",
    isTrue: false,
    correctionEs: "Normalmente informa o explica.",
    correctionAm: "Սովորաբար տեղեկացնում կամ բացատրում է (informa o explica)։"
  }
];

export interface MiniExamItem {
  letter: string;
  textEs: string;
  textAm: string;
  typeEs: string;
  typeAm: string;
  characteristicEs: string;
  characteristicAm: string;
}

export const MINI_EXAM_ITEMS: MiniExamItem[] = [
  {
    letter: "A",
    textEs: "La jirafa es un animal muy alto. Tiene el cuello largo y unas patas fuertes.",
    textAm: "Ընձուղտը շատ բարձրահասակ կենդանի է։ Նա ունի երկար պարանոց և ուժեղ ոտքեր։",
    typeEs: "Descriptivo",
    typeAm: "Նկարագրական",
    characteristicEs: "Describe las características de un animal.",
    characteristicAm: "Նկարագրում է կենդանու հատկանիշները։"
  },
  {
    letter: "B",
    textEs: "Primero enciende el ordenador. Después abre el programa y escribe tu contraseña.",
    textAm: "Սկզբում միացրու համակարգիչը։ Հետո բացիր ծրագիրը և գրիր գաղտնաբառդ։",
    typeEs: "Instructivo",
    typeAm: "Հրահանգային",
    characteristicEs: "Da instrucciones en orden.",
    characteristicAm: "Տալիս է քայլեր որոշակի հերթականությամբ։"
  },
  {
    letter: "C",
    textEs: "Ayer fui al museo con mi clase. Vimos varios cuadros y después regresamos al colegio.",
    textAm: "Երեկ դասարանիս հետ գնացի թանգարան։ Տեսանք մի քանի նկարներ և հետո վերադարձանք դպրոց։",
    typeEs: "Narrativo",
    typeAm: "Պատմողական",
    characteristicEs: "Cuenta acontecimientos.",
    characteristicAm: "Պատմում է տեղի ունեցած իրադարձությունները։"
  },
  {
    letter: "D",
    textEs: "Creo que los colegios deberían tener más espacios verdes porque ayudan a los estudiantes a relajarse.",
    textAm: "Կարծում եմ՝ դպրոցները պետք է ունենան ավելի շատ կանաչ տարածքներ, որովհետև դրանք օգնում են աշակերտներին հանգստանալ։",
    typeEs: "Argumentativo",
    typeAm: "Փաստարկային",
    characteristicEs: "Presenta una opinión y un argumento.",
    characteristicAm: "Ներկայացնում է կարծիք և այն հիմնավորող փաստարկ։"
  },
  {
    letter: "E",
    textEs: "Los volcanes son aberturas de la corteza terrestre por las que pueden salir magma, gases y cenizas.",
    textAm: "Հրաբուխները երկրակեղևի բացվածքներ են, որոնց միջով կարող են դուրս գալ մագմա, գազեր և մոխիր։",
    typeEs: "Expositivo",
    typeAm: "Բացատրական / տեղեկատվական",
    characteristicEs: "Explica un tema de manera objetiva.",
    characteristicAm: "Օբյեկտիվ ձևով բացատրում է թեման։"
  },
  {
    letter: "F",
    textEs: "—¿Has terminado los deberes?\n—Todavía no.\n—Entonces termínalos antes de salir.",
    textAm: "— Ավարտե՞լ ես տնայինները։\n— Դեռ ոչ։\n— Այդ դեպքում ավարտիր դրանք դուրս գալուց առաջ։",
    typeEs: "Dialogado",
    typeAm: "Երկխոսական",
    characteristicEs: "Hay una conversación entre personas.",
    characteristicAm: "Մարդկանց միջև զրույց կա։"
  }
];

export interface MemorizeItem {
  typeEs: string;
  questionEs: string;
  questionAm: string;
  badgeColor: string;
}

export const MEMORIZE_ITEMS: MemorizeItem[] = [
  {
    typeEs: "Narrativo",
    questionEs: "¿Qué pasó?",
    questionAm: "Ի՞նչ տեղի ունեցավ։",
    badgeColor: "bg-indigo-50 border-indigo-200 text-indigo-900 dark:bg-indigo-950/40 dark:border-indigo-800 dark:text-indigo-200"
  },
  {
    typeEs: "Descriptivo",
    questionEs: "¿Cómo es?",
    questionAm: "Ինչպիսի՞ն է։",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200"
  },
  {
    typeEs: "Expositivo",
    questionEs: "¿Qué es / cómo funciona?",
    questionAm: "Ի՞նչ է / ինչպե՞ս է գործում։",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-200"
  },
  {
    typeEs: "Argumentativo",
    questionEs: "¿Qué opinas y por qué?",
    questionAm: "Ի՞նչ ես կարծում և ինչո՞ւ։",
    badgeColor: "bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-200"
  },
  {
    typeEs: "Instructivo",
    questionEs: "¿Cómo se hace?",
    questionAm: "Ինչպե՞ս է արվում։",
    badgeColor: "bg-cyan-50 border-cyan-200 text-cyan-900 dark:bg-cyan-950/40 dark:border-cyan-800 dark:text-cyan-200"
  },
  {
    typeEs: "Dialogado",
    questionEs: "¿Quién habla con quién?",
    questionAm: "Ո՞վ ում հետ է խոսում։",
    badgeColor: "bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-950/40 dark:border-purple-800 dark:text-purple-200"
  }
];

export interface TextGeneralParagraph {
  pNum: number;
  type: string;
  typeAm: string;
  es: string;
  am: string;
}

export const TEXTO_GENERAL = {
  titleEs: "Un partido especial",
  titleAm: "Հատուկ ֆուտբոլային խաղ",
  paragraphs: [
    {
      pNum: 1,
      type: "Narrativo",
      typeAm: "Պատմողական",
      es: "El sábado pasado, Pablo fue con sus amigos a jugar un partido de fútbol. Llegaron al campo por la mañana, dejaron sus cosas en un banco y empezaron a calentar. Al principio, el partido estaba muy igualado, pero de repente el equipo contrario marcó un gol. En la segunda parte, Pablo recibió un pase, corrió hacia la portería y consiguió empatar. Al final, su equipo ganó 2-1.",
      am: "Անցած շաբաթ օրը Պաբլոն իր ընկերների հետ գնաց ֆուտբոլ խաղալու։ Նրանք առավոտյան հասան խաղադաշտ, իրենց իրերը դրեցին նստարանի վրա և սկսեցին տաքանալ։ Սկզբում խաղը շատ հավասար էր, բայց հանկարծ հակառակորդ թիմը գոլ խփեց։ Երկրորդ խաղակեսում Պաբլոն փոխանցում ստացավ, վազեց դեպի դարպասը և կարողացավ հավասարեցնել հաշիվը։ Վերջում նրա թիմը հաղթեց 2։1 հաշվով։"
    },
    {
      pNum: 2,
      type: "Descriptivo",
      typeAm: "Նկարագրական",
      es: "El campo era grande y estaba rodeado de árboles. El césped estaba muy verde y las porterías eran blancas. Pablo llevaba una camiseta azul, pantalones negros y unas botas rojas. Era rápido, fuerte y muy atento durante el partido.",
      am: "Խաղադաշտը մեծ էր և շրջապատված էր ծառերով։ Խոտածածկը շատ կանաչ էր, իսկ դարպասները՝ սպիտակ։ Պաբլոն կրում էր կապույտ շապիկ, սև տաբատ և կարմիր խաղակոշիկներ։ Նա արագ, ուժեղ և շատ ուշադիր էր խաղի ընթացքում։"
    },
    {
      pNum: 3,
      type: "Expositivo",
      typeAm: "Բացատրական / տեղեկատվական",
      es: "El fútbol es un deporte que se juega entre dos equipos. El objetivo principal es marcar goles en la portería del equipo contrario. Los jugadores deben respetar unas reglas y trabajar juntos durante el partido.",
      am: "Ֆուտբոլը սպորտաձև է, որը խաղում են երկու թիմերով։ Հիմնական նպատակը հակառակորդի դարպասը գոլ խփելն է։ Խաղացողները պետք է պահպանեն որոշակի կանոններ և խաղի ընթացքում միասին աշխատեն։"
    },
    {
      pNum: 4,
      type: "Instructivo",
      typeAm: "Հրահանգային",
      es: "Antes de empezar a jugar, es importante preparar el cuerpo. Primero, hay que correr unos minutos. Después, se deben mover los brazos y las piernas. A continuación, se pueden practicar pases cortos y, finalmente, hacer algunos tiros a portería.",
      am: "Խաղալուց առաջ կարևոր է պատրաստել մարմինը։ Սկզբում պետք է մի քանի րոպե վազել։ Հետո պետք է շարժել ձեռքերը և ոտքերը։ Այնուհետև կարելի է կարճ փոխանցումներ կատարել, իսկ վերջում՝ մի քանի հարված անել դարպասին։"
    },
    {
      pNum: 5,
      type: "Dialogado",
      typeAm: "Երկխոսական",
      es: "—¿Estás cansado? —preguntó Carlos.\n—Un poco, pero quiero seguir jugando —respondió Pablo.\n—Entonces bebe un poco de agua y descansa cinco minutos.\n—Buena idea. Después vuelvo al campo.",
      am: "— Հոգնա՞ծ ես,— հարցրեց Կառլոսը։\n— Մի քիչ, բայց ուզում եմ շարունակել խաղալ,— պատասխանեց Պաբլոն։\n— Այդ դեպքում մի քիչ ջուր խմիր և հինգ րոպե հանգստացիր։\n— Լավ գաղափար է։ Հետո նորից կվերադառնամ խաղադաշտ։"
    },
    {
      pNum: 6,
      type: "Argumentativo",
      typeAm: "Փաստարկային",
      es: "En mi opinión, jugar al fútbol es una buena forma de pasar el tiempo libre. Además de hacer ejercicio, los jugadores aprenden a trabajar en equipo y a respetar a los demás. Por eso creo que practicar deporte regularmente es muy importante.",
      am: "Իմ կարծիքով՝ ֆուտբոլ խաղալը ազատ ժամանակն անցկացնելու լավ ձև է։ Բացի ֆիզիկական ակտիվությունից, խաղացողները սովորում են աշխատել թիմով և հարգել մյուսներին։ Այդ պատճառով կարծում եմ, որ կանոնավոր սպորտով զբաղվելը շատ կարևոր է։"
    }
  ] as TextGeneralParagraph[],
  exercises: [
    {
      num: 1,
      targetTypeEs: "Narrativo",
      targetTypeAm: "Պատմողական հատված",
      explanationRu: "первый абзац, где рассказывается, что произошло во время матча.",
      explanationAm: "առաջին պարբերությունը, որտեղ պատմվում են խաղի իրադարձությունները։",
      snippetEs: "El sábado pasado, Pablo fue con sus amigos a jugar un partido de fútbol..."
    },
    {
      num: 2,
      targetTypeEs: "Descriptivo",
      targetTypeAm: "Նկարագրական հատված",
      explanationRu: "второй абзац: «El campo era grande…, Pablo llevaba…»",
      explanationAm: "երկրորդ պարբերությունը՝ խաղադաշտի և Պաբլոյի նկարագրությունը։",
      snippetEs: "El campo era grande y estaba rodeado de árboles..."
    },
    {
      num: 3,
      targetTypeEs: "Expositivo",
      targetTypeAm: "Բացատրական / տեղեկատվական հատված",
      explanationRu: "третий абзац: «El fútbol es un deporte…»",
      explanationAm: "երրորդ պարբերությունը, որտեղ բացատրվում է, թե ինչ է ֆուտբոլը։",
      snippetEs: "El fútbol es un deporte que se juega entre dos equipos..."
    },
    {
      num: 4,
      targetTypeEs: "Instructivo",
      targetTypeAm: "Հրահանգային հատված",
      explanationRu: "четвертый абзац: «Primero…, después…, a continuación…, finalmente…»",
      explanationAm: "չորրորդ պարբերությունը՝ գործողությունների հերթականությամբ։",
      snippetEs: "Antes de empezar a jugar, es importante preparar el cuerpo. Primero..."
    },
    {
      num: 5,
      targetTypeEs: "Dialogado",
      targetTypeAm: "Երկխոսական հատված",
      explanationRu: "разговор Pablo y Carlos.",
      explanationAm: "Պաբլոյի և Կառլոսի զրույցը։",
      snippetEs: "—¿Estás cansado? —preguntó Carlos..."
    },
    {
      num: 6,
      targetTypeEs: "Argumentativo",
      targetTypeAm: "Փաստարկային հատված",
      explanationRu: "последний абзац: «En mi opinión…, por eso creo que…»",
      explanationAm: "վերջին պարբերությունը, որտեղ կա կարծիք և դրա հիմնավորում։",
      snippetEs: "En mi opinión, jugar al fútbol es una buena forma de pasar el tiempo libre..."
    }
  ]
};
