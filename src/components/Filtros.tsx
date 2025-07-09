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
        <option value="icaraí">Icaraí</option>
        <option value="moitas">Moitas</option>
        <option value="caetanos">Caetanos</option>
      </select>

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value as PointsType | 'todas')}
        className="p-2 text-sm rounded-xl shadow-xl w-[200px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-black "
      >
        <option value="todas">Todas as categorias</option>
        <option value="restaurantes">Restaurantes</option>
        <option value="pousadas">Pousadas</option>
        <option value="hotel">Hotéis</option>
        <option value="casas">Casas</option>
        <option value="villas">Villas</option>
        <option value="agencia-de-turismo">Agência de Turismo</option>
        <option value="bar">Bar</option>
        <option value="pizzaria">Pizzaria</option>
        <option value="sorveteria">Sorveteria</option>
        <option value="acai">Açaí</option>
        <option value="sanduiches">Sanduiches</option>
        <option value="comercios">Comércios</option>
        <option value="lojas">Lojas</option>
        <option value="kitesurf">Kitesurf</option>
        <option value="windsurf">Windsuf</option>
        <option value="rio">Rio</option>
        <option value="praia">Praia</option>
        <option value="lagoa">Lagoa</option>
        <option value="servicos">Servicos</option>
        <option value="correspondencia-bancaria">Correspondência Bancaria</option>
        <option value="mecanico">Mecânico</option>
        <option value="farmacia">Farmácia</option>
        <option value="igreja">Igreja</option>
        <option value="escola">Escola</option>
        <option value="clube">Clube</option>
        <option value="museu">Museu</option>
        <option value="trilha">Trilha</option>
        <option value="barraca">Barraca</option>
        <option value="riacho">Riacho</option>
        <option value="camping">Camping</option>
        <option value="centroCultural">Centro Cultural</option>
        <option value="atracaoNatural">Atração Natural</option>

      </select>
    </div>
  );
}