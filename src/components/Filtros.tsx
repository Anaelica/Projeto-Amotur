'use client';

import { PointsType, Localidade } from './Points';

type Props = {
  localidade: string;
  setLocalidade: (value: Localidade | 'todas') => void;
  categoria: string;
  setCategoria: (value: PointsType | 'todas') => void;
};

export default function Filtros({ localidade, setLocalidade, categoria, setCategoria }: Props) {
  return (
    <div className="flex gap-4 mb-4 px-4">
      <select
        value={localidade}
        onChange={(e) => setLocalidade(e.target.value as Localidade | 'todas')}
        className="p-2 text-sm rounded-xl shadow-xl w-[200px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="todas">Todas as localidades</option>
        <option value="icaraí">Icaraí de Amontada</option>
        <option value="moitas">Moitas</option>
        <option value="caetanos">Caetanos</option>
      </select>

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value as PointsType | 'todas')}
        className="p-2 text-sm rounded-xl shadow-xl w-[200px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="todas">Todas as categorias</option>
        <option value="restaurant">Restaurantes</option>
        <option value="pousadas">Pousadas</option>
        <option value="hotel">Hotéis</option>
        <option value="casas">Casas</option>
        <option value="villas">Villas</option>
      </select>
    </div>
  );
}