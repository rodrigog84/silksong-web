export type ToolColor = 'rojo' | 'azul' | 'amarillo';

export interface Tool {
  name: string;
  color: ToolColor;
  effect: string;
  howTo?: string;
}

export const toolColorInfo: Record<ToolColor, { label: string; summary: string }> = {
  rojo: {
    label: 'Rojas · Armas',
    summary:
      'Subarmas con usos limitados (alfileres, trampas, artefactos). Se reponen al descansar en un banco gastando Fragmentos de Concha.',
  },
  azul: {
    label: 'Azules · Defensa',
    summary: 'Efectos pasivos de curación, Seda y protección. Solo hay que equiparlas.',
  },
  amarillo: {
    label: 'Amarillas · Exploración',
    summary: 'Ayudas pasivas para explorar, orientarse y reunir recursos.',
  },
};

export const tools: Tool[] = [
  { name: 'Straight Pin', color: 'rojo', effect: 'Alfiler arrojadizo ligero para ataques rápidos.', howTo: 'Sobre una mesa cerca de la celda de Grindle.' },
  { name: 'Threefold Pin', color: 'rojo', effect: 'Lanza tres alfileres en abanico.', howTo: 'En lo alto de la guarida de los Craws, en Greymoor.' },
  { name: 'Sting Shard', color: 'rojo', effect: 'Trampa de cuchillas que hiere a quien la toca.', howTo: 'Fabricada por la Forge Daughter en Deep Docks.' },
  { name: 'Tacks', color: 'rojo', effect: 'Púas que se esparcen por el suelo y dañan a los enemigos que las pisan.', howTo: 'Recompensa de un encargo de Roach Guts en Sinner’s Road.' },
  { name: 'Longpin', color: 'rojo', effect: 'Alfiler pesado que perfora caparazones duros.' },
  { name: 'Curveclaw', color: 'rojo', effect: 'Hueso curvo que describe un arco; ideal contra voladores. Mejora a Curvesickle.', howTo: 'Se compra al Mottled Skarr en Hunter’s March.' },
  { name: 'Throwing Ring', color: 'rojo', effect: 'Aro contundente que rebota entre enemigos y superficies.', howTo: 'Recompensa de Shakra (deseo Trail’s End).' },
  { name: 'Pimpillo', color: 'rojo', effect: 'Bolsa explosiva que estalla al impactar o al consumirse la mecha.', howTo: 'Cerca de la casa de Yarnaby, en Greymoor.' },
  { name: 'Conchcutter', color: 'rojo', effect: 'Espiral que rebota en ángulo y sorprende a los enemigos.' },
  { name: 'Silkshot', color: 'rojo', effect: 'Arma antigua de las Weavers que dispara usando Seda.', howTo: 'Repara el Ruined Tool con Craftmetal (varias versiones según quién la repare).' },
  { name: 'Delver’s Drill', color: 'rojo', effect: 'Taladro que impulsa a Hornet hacia abajo perforando lo que encuentra.', howTo: 'En Underworks.' },
  { name: 'Cogwork Wheel', color: 'rojo', effect: 'Disco dentado motorizado que avanza cortando enemigos.', howTo: 'Twelfth Architect.' },
  { name: 'Cogfly', color: 'rojo', effect: 'Pequeños compañeros mecánicos que buscan y atacan enemigos cercanos.', howTo: 'Acto 2, High Halls.' },
  { name: 'Rosary Cannon', color: 'rojo', effect: 'Cañón que dispara Rosarios como munición.', howTo: 'Tras una puerta ornamentada en High Halls (requiere Simple Key).' },
  { name: 'Flintslate', color: 'rojo', effect: 'Calienta temporalmente la aguja: cortes con fuego y más daño.', howTo: 'Deep Docks, tras obtener Swift Step.' },
  { name: 'Flea Brew', color: 'rojo', effect: 'Brebaje que acelera temporalmente movimiento y ataques.', howTo: 'Caravana de las pulgas, tras el deseo de las pulgas perdidas.' },
  { name: 'Plasmium Phial', color: 'rojo', effect: 'Permite ganar salud por encima del máximo natural.', howTo: 'Deseo «Alchemist’s Assistant».' },

  { name: 'Druid’s Eye', color: 'azul', effect: 'Al recibir daño genera un líquido que ayuda a recuperar Seda.', howTo: 'Deseo de Mossberries del Moss Druid (The Marrow).' },
  { name: 'Magma Bell', color: 'azul', effect: 'Reduce el daño recibido por lava.', howTo: 'Forge Daughter, Deep Docks.' },
  { name: 'Warding Bell', color: 'azul', effect: 'Una vez por encuentro, protege de daño mientras te curas.', howTo: 'Sala secreta en Far Fields.' },
  { name: 'Pollip Pouch', color: 'azul', effect: 'Añade veneno a tus herramientas.', howTo: 'Deseo «Rite of the Pollip».' },
  { name: 'Multibinder', color: 'azul', effect: 'La curación (Bind) restaura más máscaras, pero tarda más.', howTo: 'Tienda mejorada de Bellhart.' },
  { name: 'Weavelight', color: 'azul', effect: 'Regeneras Seda mucho más rápido.', howTo: 'Recompensa del dúo de Moss Mother en Weavenest Atla.' },
  { name: 'Injector Band', color: 'azul', effect: 'Acelera la curación (Bind).', howTo: 'Whiteward.' },
  { name: 'Reserve Bind', color: 'azul', effect: 'Curación de reserva si te quedas sin Seda; se recarga en bancos.' },
  { name: 'Claw Mirror', color: 'azul', effect: 'Al curarte emites un destello que daña a los enemigos cercanos.', howTo: 'Al derrotar a Trobbio.' },
  { name: 'Volt Filament', color: 'azul', effect: 'Añade daño eléctrico a las habilidades de Seda.', howTo: 'Acto 3, Sands of Karak.' },
  { name: 'Longclaw', color: 'azul', effect: 'Alarga el alcance de la aguja.' },
  { name: 'Egg of Flealia', color: 'azul', effect: 'Con salud completa, las habilidades de Seda cuestan menos.', howTo: 'Rescata a todas las pulgas perdidas.' },

  { name: 'Compass', color: 'amarillo', effect: 'Muestra la posición de Hornet en el mapa.', howTo: 'Se compra a Shakra.' },
  { name: 'Magnetite Brooch', color: 'amarillo', effect: 'Atrae los Rosarios caídos hacia ti.', howTo: 'Tienda de Bone Bottom.' },
  { name: 'Shard Pendant', color: 'amarillo', effect: 'Los enemigos sueltan más Fragmentos de Concha.', howTo: 'Hacia el final de The Marrow.' },
  { name: 'Weighted Belt', color: 'amarillo', effect: 'Reduce el retroceso al golpear y al recibir golpes.', howTo: 'Tienda de Pilgrim’s Rest (Far Fields).' },
  { name: 'Dead Bug’s Purse', color: 'amarillo', effect: 'Al morir no pierdes todos tus Rosarios.', howTo: 'Wormways.' },
  { name: 'Magnetite Dice', color: 'amarillo', effect: 'Pequeña probabilidad de anular una máscara de daño.', howTo: 'Blasted Steps (juego de dados).' },
  { name: 'Barbed Bracelet', color: 'amarillo', effect: 'Más daño con la aguja, pero también recibes más daño.', howTo: 'Sinner’s Road.' },
  { name: 'Thief’s Mark', color: 'amarillo', effect: 'Más Rosarios de los enemigos, pero pierdes algunos al ser golpeada.' },
  { name: 'Silkspeed Anklets', color: 'amarillo', effect: 'Corres más rápido a cambio de consumir Seda.' },
  { name: 'Ascendant’s Grip', color: 'amarillo', effect: 'Ya no resbalas al aferrarte a las paredes.' },
  { name: 'Spider Strings', color: 'amarillo', effect: 'Aumenta el alcance y efecto de la Needolin.' },
];

export interface Crest {
  name: string;
  motto: string;
  slots: string;
  howTo: string;
}

export const crests: Crest[] = [
  {
    name: 'Cresta del Cazador (Hunter)',
    motto: 'Acecha a la presa y ataca con golpes letales.',
    slots: 'Equilibrada: rojas, azules, amarillas y 1 habilidad de Seda.',
    howTo: 'Cresta inicial. Puede evolucionar dos veces (con Eva en Weavenest Atla).',
  },
  {
    name: 'Cresta de la Segadora (Reaper)',
    motto: 'Tajos amplios y pesados que cosechan Seda extra.',
    slots: 'Rojas, azules, amarillas y 1 habilidad de Seda.',
    howTo: 'Chapel of the Reaper, al oeste de Greymoor.',
  },
  {
    name: 'Cresta del Errante (Wanderer)',
    motto: 'Cortes rápidos, cortos y precisos.',
    slots: 'Orientada a amarillas; 1 habilidad de Seda.',
    howTo: 'Chapel of the Wanderer, al oeste de Bone Bottom (requiere Cling Grip).',
  },
  {
    name: 'Cresta de la Bestia (Beast)',
    motto: 'Zarpazos salvajes; al curarte entras en furia y robas vida.',
    slots: 'Rojas, amarillas y 1 habilidad de Seda.',
    howTo: 'Chapel of the Beast en Hunter’s March, tras vencer a Savage Beastfly.',
  },
  {
    name: 'Cresta de la Bruja (Witch)',
    motto: 'Látigo con la aguja; drena vida con raíces retorcidas.',
    slots: 'Rojas, azules y 1 habilidad de Seda (sin amarillas).',
    howTo: 'Ligada a Bilewater, el Twisted Bud y a dos deseos ocultos.',
  },
  {
    name: 'Cresta del Arquitecto (Architect)',
    motto: 'La aguja gira como un taladro; gasta Seda para fabricar herramientas.',
    slots: 'Muchas rojas, azules y amarillas; sin habilidades de Seda.',
    howTo: 'Acto 2: Twelfth Architect, tras reunir 25 herramientas.',
  },
  {
    name: 'Cresta del Chamán (Shaman)',
    motto: 'Lanza la hoja hacia delante y potencia las habilidades de Seda con runas.',
    slots: 'Varias habilidades de Seda; sin herramientas rojas.',
    howTo: 'Acto 3: Ruined Chapel, requiere Silk Soar.',
  },
];

export const silkSkills = [
  { name: 'Silkspear', effect: 'Lanza la aguja hacia delante.' },
  { name: 'Thread Storm', effect: 'Tormenta de Seda alrededor de Hornet.' },
  { name: 'Cross Stitch', effect: 'Desvía un ataque y contraataca al instante.' },
  { name: 'Sharpdart', effect: 'Embestida que atraviesa enemigos.' },
  { name: 'Rune Rage', effect: 'Runas de Seda ardiente sobre los enemigos.' },
  { name: 'Pale Nails', effect: 'Garras de hilo que buscan a los enemigos.' },
];

export const ancestralArts = [
  { name: 'Swift Step', effect: 'Esprint y dash a gran velocidad.' },
  { name: 'Drifter’s Cloak', effect: 'Planear y usar corrientes de aire.' },
  { name: 'Cling Grip', effect: 'Aferrarse a paredes y saltar entre ellas.' },
  { name: 'Needolin', effect: 'Tocar melodías antiguas con la aguja; abre puertas y afecta a ciertos seres.' },
  { name: 'Clawline', effect: 'Arpón con la aguja para impulsarse hacia un punto.' },
  { name: 'Faydown Cloak', effect: 'Doble salto.' },
  { name: 'Silk Soar', effect: 'Impulso vertical a grandes alturas.' },
];

export const items = [
  { name: 'Rosarios', effect: 'Moneda principal: tiendas, mapas, Bellways. Se pierden al morir hasta recuperar tu capullo.' },
  { name: 'Fragmentos de Concha', effect: 'Reparan y reponen herramientas rojas al descansar; también se usan en encargos.' },
  { name: 'Fragmentos de Máscara', effect: 'Cada 4 aumentan tu salud máxima en una máscara.' },
  { name: 'Fragmentos de Carrete', effect: 'Cada 2 amplían tu capacidad máxima de Seda.' },
  { name: 'Pale Oil', effect: 'Material para mejorar el daño de la aguja.' },
  { name: 'Memory Locket', effect: 'Desbloquea un espacio adicional en la cresta que elijas.' },
  { name: 'Craftmetal', effect: 'Metal necesario para fabricar ciertas herramientas.' },
  { name: 'Simple Key', effect: 'Abre ciertas puertas cerradas y atajos.' },
];
