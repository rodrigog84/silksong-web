export type TipCategory = 'basico' | 'economia' | 'exploracion' | 'combate' | 'secretos';

export interface Tip {
  title: string;
  category: TipCategory;
  text: string;
}

export const tipCategories: { value: TipCategory | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'basico', label: 'Básicos' },
  { value: 'economia', label: 'Economía' },
  { value: 'exploracion', label: 'Exploración' },
  { value: 'combate', label: 'Combate' },
  { value: 'secretos', label: 'Secretos' },
];

export const tips: Tip[] = [
  {
    title: 'La Seda es tu curación',
    category: 'basico',
    text: 'Golpear enemigos llena tu carrete de Seda; gástala para curarte (Bind) o para habilidades. Decide cuándo vale más sobrevivir que atacar.',
  },
  {
    title: 'Recupera tu capullo',
    category: 'basico',
    text: 'Al morir pierdes tus Rosarios. Vuelve al capullo que dejas en el lugar de tu muerte para recuperarlos antes de volver a caer.',
  },
  {
    title: 'Compra mapas a Shakra',
    category: 'exploracion',
    text: 'Los mapas se compran por zona. Escucha su canto para encontrarla y prioriza la brújula y la pluma.',
  },
  {
    title: 'Revisa el Wishwall',
    category: 'basico',
    text: 'Los deseos (misiones secundarias) dan herramientas, mejoras y Rosarios. Muchos objetos clave salen de ellos.',
  },
  {
    title: 'Guarda Fragmentos de Concha',
    category: 'economia',
    text: 'Aunque al principio parezcan inútiles, reponen tus herramientas rojas al descansar y se piden en algunos encargos.',
  },
  {
    title: 'Magnetite Brooch temprana',
    category: 'economia',
    text: 'Atrae los Rosarios hacia ti. Facilita muchísimo reunir dinero en las primeras horas.',
  },
  {
    title: 'Dead Bug’s Purse si mueres mucho',
    category: 'economia',
    text: 'Evita perder todos tus Rosarios al morir. Útil en zonas o jefes difíciles.',
  },
  {
    title: 'Máscaras y carretes',
    category: 'exploracion',
    text: '4 Fragmentos de Máscara = +1 de salud; 2 Fragmentos de Carrete = más Seda máxima. Explora rincones y paredes sospechosas.',
  },
  {
    title: 'Si una zona parece imposible…',
    category: 'exploracion',
    text: 'Probablemente te falta una habilidad de movimiento. Sigue la ruta principal y vuelve después con dash, planeo o salto de pared.',
  },
  {
    title: 'Usa los Bellways',
    category: 'exploracion',
    text: 'Tras liberar a la Bell Beast podrás viajar entre estaciones pagando Rosarios. Ahorra mucho tiempo de regreso.',
  },
  {
    title: 'El ataque descendente depende de la cresta',
    category: 'combate',
    text: 'Cada cresta cambia la dirección del ataque hacia abajo (diagonal o vertical). Practícalo antes de un jefe con plataformas.',
  },
  {
    title: 'Herramientas rojas = daño a distancia',
    category: 'combate',
    text: 'Los alfileres y trampas son perfectos para castigar a jefes sin arriesgarte. Recuerda que se reponen en el banco.',
  },
  {
    title: 'Memory Lockets con cabeza',
    category: 'combate',
    text: 'Desbloquean espacios en una cresta concreta. Úsalos en la cresta que más disfrutes.',
  },
  {
    title: 'Paredes falsas',
    category: 'secretos',
    text: 'Como en el primer juego, muchas paredes se pueden romper. Golpea muros con texturas distintas o pasillos que no llevan a nada.',
  },
  {
    title: 'Sala secreta en Far Fields',
    category: 'secretos',
    text: 'En la sala alta con ráfagas de viento, baja hasta el fondo y explora a la izquierda: un camino oculto guarda la Warding Bell.',
  },
  {
    title: 'Cristal en Mount Fay',
    category: 'secretos',
    text: 'Junto a uno de los bancos de Mount Fay hay una pared oculta; rompe el hielo para hallar el Memory Crystal.',
  },
  {
    title: 'Vesticrest de Eva',
    category: 'secretos',
    text: 'Habla con Eva en Weavenest Atla para recibir una Vesticrest: un espacio amarillo extra, independiente de tu cresta.',
  },
  {
    title: 'Rescata pulgas perdidas',
    category: 'secretos',
    text: 'Encontrar pulgas perdidas mueve la caravana, abre recompensas como la Flea Brew y, al completarlas todas, el Egg of Flealia.',
  },
  {
    title: 'Ruta alternativa a la Ciudadela',
    category: 'secretos',
    text: 'Sinner’s Road y The Mist permiten entrar a la Ciudadela sin vencer a Last Judge, y esconden a la jefa Phantom.',
  },
];
