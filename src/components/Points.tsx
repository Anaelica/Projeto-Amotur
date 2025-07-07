export type PointsType = 'restaurant' | 'pousadas' | 'hotel' | 'casas' | 'villas';

export type Point = {
  id: number;
  name: string;
  position: [number, number];
  image: string;
  description: string;
  type: PointsType;
};

export const points: Point[] = [
  {
    id: 1,
    name: 'Aloha Village Hotel',
    position: [-3.02556, -39.65393],
    image: '/aloha-vilage.png',
    description: 'R Benedito Goncalves de Sousa, Icaraí de Amontada',
    type: 'pousadas',
  },
  {
    id: 2,
    name: 'Casa Florzinha em Icaraizinho',
    position: [-3.0244689052658833, -39.65325473309589],
    image: '/Casa florzinha.png',
    description: 'Rua da Praia, s.n - Icaraí, Amontada - CE.',
    type: 'casas',
  },
];