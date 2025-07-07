
export type Localidade = 'icaraí' | 'moitas' | 'caetanos';

export type PointsType =
  | 'pousadas'
  | 'hotel'
  | 'casas'
  | 'villas';
//   | 'agencia-de-turismo'
//   | 'bar'
//   | 'restaurantes'
//   | 'pizzaria'
//   | 'sorveteria'
//   | 'acai'
//   | 'sanduiches'
//   | 'comercios'
//   | 'lojas'
//   | 'kitesurf'
//   | 'windsurf'
//   | 'standup-paddle'
//   | 'cursos'
//   | 'trips'
//   | 'services'
//   | 'correspondencia-bancaria'
//   | 'mecanico'
//   | 'farmacia'
//   | 'igreja'
//   | 'escola';


export type Point = {
  id: number;
  name: string;
  position: [number, number];
  image: string;
  description: string;
  type: PointsType;
  localidade: Localidade;
};

export const points: Point[] = [
  {
    id: 1,
    name: 'Aloha Village Hotel',
    position: [-3.02556, -39.65393],
    image: '/aloha-vilage.png',
    description: 'R Benedito Goncalves de Sousa, Icaraí de Amontada',
    type: 'pousadas',
    localidade: 'icaraí',
  },
  {
    id: 2,
    name: 'Casa Florzinha em Icaraizinho',
    position: [-3.0244689052658833, -39.65325473309589],
    image: '/Casa florzinha.png',
    description: 'Rua da Praia, s.n - Icaraí, Amontada - CE.',
    type: 'casas',
    localidade: 'icaraí',
  },
];
