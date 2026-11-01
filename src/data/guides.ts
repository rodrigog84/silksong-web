export interface AreaGuide {
  step: number;
  area: string;
  act: 'Acto 1' | 'Acto 2' | 'Acto 3';
  summary: string;
  goals: string[];
  optional?: boolean;
}

export const areaGuides: AreaGuide[] = [
  {
    step: 1,
    area: 'Moss Grotto',
    act: 'Acto 1',
    summary: 'Zona tutorial donde cae Hornet tras escapar de su jaula.',
    goals: [
      'Obtén Silkspear en la estatua Weaver.',
      'Aprende a curarte (Bind) gastando Seda.',
      'Derrota a Moss Mother en Ruined Chapel.',
    ],
  },
  {
    step: 2,
    area: 'Bone Bottom',
    act: 'Acto 1',
    summary: 'Primer asentamiento y centro de operaciones temprano.',
    goals: [
      'Descansa en el banco y habla con los habitantes.',
      'Revisa el Wishwall: allí aparecen los deseos (misiones).',
      'Considera comprar la Magnetite Brooch en la tienda.',
    ],
  },
  {
    step: 3,
    area: 'The Marrow',
    act: 'Acto 1',
    summary: 'Cavernas óseas donde encontrarás a Shakra y a la Bell Beast.',
    goals: [
      'Sigue el canto de Shakra para comprar mapas, la pluma y la brújula.',
      'Somete a la Bell Beast para abrir la red de Bellways.',
      'Haz sonar el Bellshrine de la zona.',
    ],
  },
  {
    step: 4,
    area: 'Deep Docks',
    act: 'Acto 1',
    summary: 'Muelles de lava y maquinaria.',
    goals: [
      'Consigue Swift Step (dash).',
      'Conoce a la Forge Daughter, que fabrica herramientas.',
      'Enfréntate a Lace y haz sonar el Bellshrine.',
    ],
  },
  {
    step: 5,
    area: 'Far Fields',
    act: 'Acto 1',
    summary: 'Campos abiertos con corrientes de viento.',
    goals: ['Obtén la Drifter’s Cloak de la Seamstress.', 'Derrota a Fourth Chorus.'],
  },
  {
    step: 6,
    area: 'Greymoor',
    act: 'Acto 1',
    summary: 'Páramo gris con caminos hacia el corazón del reino.',
    goals: [
      'Enfrenta (u evita) a Moorwing.',
      'Busca la Chapel of the Reaper (Cresta de la Segadora).',
      'Haz sonar el Bellshrine.',
    ],
  },
  {
    step: 7,
    area: 'Bellhart',
    act: 'Acto 1',
    summary: 'Pueblo de campanas sitiado.',
    goals: ['Derrota a Widow para obtener la Needolin.', 'Haz sonar el Bellshrine.'],
  },
  {
    step: 8,
    area: 'Shellwood',
    act: 'Acto 1',
    summary: 'Bosque de conchas conectado con Bellhart.',
    goals: [
      'Derrota a Sister Splinter.',
      'Consigue Cling Grip (salto de pared).',
      'Haz sonar el quinto Bellshrine.',
    ],
  },
  {
    step: 9,
    area: 'Blasted Steps',
    act: 'Acto 1',
    summary: 'El ascenso final hacia el Gran Portón de la Ciudadela.',
    goals: [
      'Con los cinco Bellshrines sonando, el portón se abre.',
      'Derrota a Last Judge para comenzar el Acto 2.',
    ],
  },
  {
    step: 10,
    area: 'Hunter’s March',
    act: 'Acto 1',
    optional: true,
    summary: 'Zona exigente de plataformas, más fácil con Drifter’s Cloak y Swift Step.',
    goals: ['Derrota a Savage Beastfly para conseguir la Cresta de la Bestia.'],
  },
  {
    step: 11,
    area: 'Sinner’s Road y The Mist',
    act: 'Acto 1',
    optional: true,
    summary: 'Ruta alternativa y más difícil hacia la Ciudadela.',
    goals: ['Derrota a Phantom en Exhaust Organ para obtener Cross Stitch.'],
  },
  {
    step: 12,
    area: 'La Ciudadela',
    act: 'Acto 2',
    summary:
      'La ciudad dorada en la cima de Pharloom: Choral Chambers, Cogwork Core, Grand Gate, High Halls, Memorium, Whispering Vaults y Whiteward.',
    goals: [
      'Consigue Clawline (gancho) para moverte por la ciudad.',
      'Obtén la Faydown Cloak (doble salto) en Mount Fay.',
      'Derrota a los Cogwork Dancers y continúa hacia The Cradle.',
    ],
  },
  {
    step: 13,
    area: 'Acto 3',
    act: 'Acto 3',
    summary:
      'Contenido posterior con nuevas zonas, deseos y desafíos. Requiere Silk Soar y pasa por lugares como Sands of Karak.',
    goals: [
      'Vuelve a zonas antiguas: muchas cambian.',
      'Busca la Cresta del Chamán en Ruined Chapel.',
    ],
  },
];

export const abilityGates = [
  { name: 'Silkspear', where: 'Moss Grotto', unlocks: 'Rompe las primeras barreras.' },
  { name: 'Swift Step', where: 'Deep Docks', unlocks: 'Dash para cruzar huecos.' },
  { name: 'Drifter’s Cloak', where: 'Far Fields', unlocks: 'Planear sobre corrientes.' },
  { name: 'Needolin', where: 'Bellhart', unlocks: 'Abre puertas Weaver y resuelve The Mist.' },
  { name: 'Cling Grip', where: 'Shellwood', unlocks: 'Salto de pared.' },
  { name: 'Clawline', where: 'Ciudadela (Acto 2)', unlocks: 'Gancho, necesario en la Ciudadela.' },
  { name: 'Faydown Cloak', where: 'Mount Fay', unlocks: 'Doble salto.' },
  { name: 'Silk Soar', where: 'Acto 3', unlocks: 'Impulso vertical.' },
];
