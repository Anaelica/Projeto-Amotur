// Coloque todos os imports no topo do arquivo
'use client';

import { useState } from 'react';
import SearchBar from '@/components/Barra';
import { points, Point, PointsType, Localidade } from '@/components/Points';
import Filtros from '@/components/Filtros';
import dynamic from 'next/dynamic';
import { Image } from 'primereact/image'; // aqui está o import correto

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function MapPage() {
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [localidade, setLocalidade] = useState<Localidade | 'todas'>('todas');
  const [categoria, setCategoria] = useState<PointsType | 'todas'>('todas');

  const pontosFiltrados = points.filter((p) => {
    const porLocalidade = localidade === 'todas' || p.localidade === localidade;
    const porCategoria = categoria === 'todas' || p.type === categoria;
    return porLocalidade && porCategoria;
  });

  const filteredSuggestions = pontosFiltrados.filter((p) =>
    p.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (name: string) => {
    setInputValue('');
    setSearch(name);
  };

  const handleEnter = () => {
    setSearch(inputValue);
    setInputValue('');
  };

  return (
    <div className="relative w-full min-h-screen p-4 bg-gray-50">
      <div className="flex gap-[200px] items-center mb-4 px-4">
        <div className="card flex justify-center items-center">
          <Image
            src="/amotur.png"
            zoomSrc="https://primefaces.org/cdn/primereact/images/galleria/galleria14"
            alt="Imagem do Mapa"
            width="80"
            height="60"
            preview
          />
        </div>

        <Filtros
          localidade={localidade}
          setLocalidade={setLocalidade}
          categoria={categoria}
          setCategoria={setCategoria}
        />
        <SearchBar
          search={inputValue}
          setSearch={setInputValue}
          suggestions={filteredSuggestions}
          onSelect={handleSelect}
          onEnter={handleEnter}
        />
      </div>

      <Map search={search} setSearch={setSearch} filteredPoints={pontosFiltrados}/>
    </div>
  );
}
