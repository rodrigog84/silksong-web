export type CharacterKind = 'protagonista' | 'personaje' | 'jefe';

export interface Character {
  name: string;
  kind: CharacterKind;
  role: string;
  location?: string;
  act?: 'Acto 1' | 'Acto 2' | 'Acto 3';
  optional?: boolean;
  description: string;
}

export const characters: Character[] = [
  {
    name: 'Hornet',
    kind: 'protagonista',
    role: 'Protagonista · cazadora y princesa protectora',
    description:
      'La guardiana de Hallownest del primer Hollow Knight, ahora protagonista. Mitad Weaver (tejedora) y mitad Wyrm, un linaje que la convierte en objetivo de la Ciudadela. Capturada y llevada a Pharloom, escapa de su jaula y emprende el ascenso hacia la cima del reino. Pelea con su aguja, su seda y una gran movilidad.',
  },
  {
    name: 'Grand Mother Silk',
    kind: 'jefe',
    role: 'Ser superior · fuente primordial de la Seda',
    location: 'The Cradle',
    act: 'Acto 2',
    description:
      'Monarca de Pharloom y origen de la Seda. Las Weavers la adormecieron y la mantuvieron sellada mediante el canto y las oraciones de la Ciudadela. Su despertar provoca «la Posesión» (the Haunting), que enloquece a los insectos del reino. Es el jefe final del Acto 2.',
  },
  {
    name: 'Lace',
    kind: 'jefe',
    role: 'Rival recurrente · espadachina ágil',
    location: 'Deep Docks / The Cradle',
    act: 'Acto 1',
    description:
      'Una duelista veloz que se cruza con Hornet varias veces. El primer combate ocurre en Deep Docks tras obtener Swift Step; vuelve a aparecer más adelante en The Cradle.',
  },
  {
    name: 'Shakra',
    kind: 'personaje',
    role: 'Cartógrafa y guerrera',
    description:
      'Vende mapas de cada zona, la pluma (Quill), la brújula y marcadores. Se la encuentra siguiendo su canto. Completar su deseo «Trail’s End» otorga el Throwing Ring.',
  },
  {
    name: 'Forge Daughter',
    kind: 'personaje',
    role: 'Herrera · fabrica herramientas',
    location: 'Deep Docks',
    description:
      'Fabrica herramientas a cambio de Rosarios y, en algunos casos, Craftmetal. Entre ellas, Sting Shard y Magma Bell; también puede reparar el Silkshot.',
  },
  {
    name: 'Twelfth Architect',
    kind: 'personaje',
    role: 'Arquitecto de la Ciudadela',
    location: 'Underworks / The Cauldron',
    description:
      'Miembro de la casta de Arquitectos. En el Acto 2 vende herramientas mecánicas y la Cresta del Arquitecto (requiere poseer 25 herramientas).',
  },
  {
    name: 'Eva',
    kind: 'personaje',
    role: 'Habitante de Weavenest Atla',
    location: 'Weavenest Atla',
    description:
      'Se encuentra en Weavenest Atla. Mejora la Cresta del Cazador y entrega la Vesticrest amarilla, que añade un espacio extra para herramientas amarillas.',
  },
  {
    name: 'Seamstress',
    kind: 'personaje',
    role: 'Costurera',
    location: 'Far Fields',
    description: 'Entrega a Hornet la Drifter’s Cloak, que permite planear y aprovechar corrientes de aire.',
  },
  {
    name: 'Moss Druid',
    kind: 'personaje',
    role: 'Druida del musgo',
    location: 'The Marrow',
    description:
      'Ofrece el deseo de recolección de Mossberries. Su recompensa es la herramienta Druid’s Eye, mejorable a Druid’s Eyes al reunir todas las bayas.',
  },
  {
    name: 'Moss Mother',
    kind: 'jefe',
    role: 'Primer jefe',
    location: 'Moss Grotto (Ruined Chapel)',
    act: 'Acto 1',
    description:
      'Una criatura voladora del musgo que sirve de introducción al combate. Más adelante existe un enfrentamiento doble opcional en Weavenest Atla.',
  },
  {
    name: 'Bell Beast',
    kind: 'jefe',
    role: 'Bestia atrapada en seda',
    location: 'The Marrow',
    act: 'Acto 1',
    description:
      'Una enorme bestia que embiste y salta. Tras someterla, Hornet obtiene un Silk Heart y se habilita la red de transporte Bellways.',
  },
  {
    name: 'Fourth Chorus',
    kind: 'jefe',
    role: 'Coloso de Far Fields',
    location: 'Far Fields',
    act: 'Acto 1',
    description: 'Un enemigo gigantesco que se enfrenta después de obtener la Drifter’s Cloak.',
  },
  {
    name: 'Moorwing',
    kind: 'jefe',
    role: 'Criatura alada de Greymoor',
    location: 'Greymoor',
    act: 'Acto 1',
    optional: true,
    description:
      'Bloquea el camino habitual hacia Bellhart, pero puede evitarse por rutas alternativas. Si no se le derrota, reaparece en el Acto 2.',
  },
  {
    name: 'Sister Splinter',
    kind: 'jefe',
    role: 'Guardiana de Shellwood',
    location: 'Shellwood',
    act: 'Acto 1',
    description: 'Vencerla da acceso a la estatua Weaver con la habilidad Cling Grip (salto de pared).',
  },
  {
    name: 'Widow',
    kind: 'jefe',
    role: 'Jefa de Bellhart',
    location: 'Bellhart',
    act: 'Acto 1',
    description: 'Su derrota libera el pueblo de Bellhart y otorga a Hornet la Needolin.',
  },
  {
    name: 'Last Judge',
    kind: 'jefe',
    role: 'Guardiana del Gran Portón',
    location: 'Blasted Steps',
    act: 'Acto 1',
    description:
      'El último gran obstáculo antes de la Ciudadela. Puede sortearse entrando por Sinner’s Road y The Mist, pero la mayoría de jugadores la enfrenta.',
  },
  {
    name: 'Savage Beastfly',
    kind: 'jefe',
    role: 'Bestia voladora',
    location: 'Hunter’s March (Chapel of the Beast)',
    act: 'Acto 1',
    optional: true,
    description: 'Jefe opcional y exigente. Su recompensa es la Cresta de la Bestia.',
  },
  {
    name: 'Skull Tyrant',
    kind: 'jefe',
    role: 'Tirano de hueso',
    location: 'The Marrow / Bone Bottom',
    act: 'Acto 1',
    optional: true,
    description: 'Ligado al deseo «The Terrible Tyrant». Otorga un collar pesado de Rosarios.',
  },
  {
    name: 'Great Conchflies',
    kind: 'jefe',
    role: 'Dúo de caracolas voladoras',
    location: 'Blasted Steps',
    act: 'Acto 1',
    optional: true,
    description:
      'Opcionales al principio, pero bloquean el acceso a Sands of Karak, zona necesaria para el Acto 3.',
  },
  {
    name: 'Phantom',
    kind: 'jefe',
    role: 'Jefa secreta',
    location: 'Exhaust Organ',
    act: 'Acto 1',
    optional: true,
    description:
      'Se halla en la ruta alternativa por Sinner’s Road y The Mist. Otorga la habilidad de seda Cross Stitch.',
  },
  {
    name: 'Cogwork Dancers',
    kind: 'jefe',
    role: 'Autómatas danzantes',
    location: 'Cogwork Core',
    act: 'Acto 2',
    description: 'Jefe obligatorio de la Ciudadela; su derrota abre la misión principal de la Canción Triple.',
  },
  {
    name: 'Trobbio',
    kind: 'jefe',
    role: 'Artista del escenario',
    location: 'Whispering Vaults',
    act: 'Acto 2',
    optional: true,
    description: 'Showman de la Ciudadela. Al vencerlo se obtiene la herramienta Claw Mirror.',
  },
];
