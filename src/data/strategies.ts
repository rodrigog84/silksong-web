export interface BossStrategy {
  boss: string;
  location: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  tips: string[];
}

export const generalStrategy = [
  {
    title: 'Aprende antes de atacar',
    text: 'Dedica los primeros intentos a observar. Cada jefe tiene patrones legibles y señales previas a sus ataques.',
  },
  {
    title: 'Cúrate en ventanas seguras',
    text: 'El Bind tarda un instante y puedes ser interrumpido. Cúrate tras esquivar un ataque largo o cuando el jefe se aleje.',
  },
  {
    title: 'Ajusta tu cresta',
    text: 'Antes de un combate difícil, prueba otra cresta o cambia herramientas en el banco más cercano.',
  },
  {
    title: 'Lleva subarmas',
    text: 'Las herramientas rojas aportan daño seguro desde lejos. Revisa que estén repuestas antes de entrar.',
  },
  {
    title: 'Mejora tu aguja y tu salud',
    text: 'Si un jefe te bloquea mucho tiempo, explora para conseguir máscaras, carretes o mejorar la aguja y vuelve más fuerte.',
  },
];

export const bossStrategies: BossStrategy[] = [
  {
    boss: 'Moss Mother',
    location: 'Moss Grotto',
    difficulty: 1,
    tips: [
      'Es tu examen de introducción: practica el ataque descendente y la curación.',
      'Muévete en horizontal cuando se lance en picada y castiga al recuperarse.',
    ],
  },
  {
    boss: 'Bell Beast',
    location: 'The Marrow',
    difficulty: 2,
    tips: [
      'Mantén distancia ante sus embestidas y salta por encima en lugar de retroceder.',
      'Ataca tras cada carga, cuando queda expuesta.',
    ],
  },
  {
    boss: 'Lace',
    location: 'Deep Docks',
    difficulty: 3,
    tips: [
      'Es veloz y lee tus movimientos: no ataques a lo loco.',
      'Usa Swift Step para esquivar estocadas y golpea en sus pausas.',
      'Fíjate en las señales previas a sus contraataques y no los provoques.',
    ],
  },
  {
    boss: 'Fourth Chorus',
    location: 'Far Fields',
    difficulty: 2,
    tips: [
      'Un enemigo enorme: tus golpes son seguros si te mantienes lejos de sus barridos.',
      'Aprovecha la Drifter’s Cloak para reposicionarte en el aire.',
    ],
  },
  {
    boss: 'Moorwing',
    location: 'Greymoor',
    difficulty: 3,
    tips: [
      'Combate aéreo: las herramientas arrojadizas ayudan a dañar desde abajo.',
      'Si te bloquea, recuerda que este combate puede evitarse por otras rutas y retomarse luego.',
    ],
  },
  {
    boss: 'Sister Splinter',
    location: 'Shellwood',
    difficulty: 2,
    tips: [
      'No te quedes quieta: la movilidad es tu mejor defensa.',
      'Concentra daño en las pausas tras sus ataques más largos.',
    ],
  },
  {
    boss: 'Widow',
    location: 'Bellhart',
    difficulty: 3,
    tips: [
      'Observa la preparación de cada ataque: casi todos tienen una señal previa.',
      'Usa el espacio vertical y no te encierres en una esquina.',
    ],
  },
  {
    boss: 'Last Judge',
    location: 'Blasted Steps',
    difficulty: 4,
    tips: [
      'Muchos jugadores la consideran un gran salto de dificultad: prepárate.',
      'Aprende el camino de regreso desde el banco para perder menos tiempo.',
      'Mantente cerca para castigar, pero aléjate ante sus golpes amplios.',
    ],
  },
  {
    boss: 'Savage Beastfly',
    location: 'Hunter’s March',
    difficulty: 4,
    tips: [
      'Jefe opcional muy agresivo: no hay prisa, vuelve con más salud si hace falta.',
      'Las trampas y alfileres ayudan a dañar sin exponerte.',
    ],
  },
  {
    boss: 'Cogwork Dancers',
    location: 'Cogwork Core',
    difficulty: 3,
    tips: [
      'Combate rítmico: identifica el compás de sus movimientos.',
      'Busca posiciones que te permitan atacar a uno sin quedar expuesta al otro.',
    ],
  },
  {
    boss: 'Grand Mother Silk',
    location: 'The Cradle',
    difficulty: 4,
    tips: [
      'Llega con la salud y la Seda al máximo y tu mejor configuración de cresta.',
      'Ten paciencia: prioriza esquivar y aprovecha cada ventana para atacar o curarte.',
    ],
  },
];
