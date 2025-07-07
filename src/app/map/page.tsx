'use client';

import { useState } from 'react';
import Map from '@/components/Map';
import SearchBar from '@/components/Barra';
import { points, Point } from '@/components/Points';

export default function MapPage() {
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');

  const filteredSuggestions = points.filter((p) =>
    p.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (name: string) => {
  setInputValue(''); // limpa o campo e esconde sugestões
  setSearch(name);   // envia para o mapa
};

const handleEnter = () => {
  setSearch(inputValue);
  setInputValue(''); // limpa o campo e esconde sugestões
};


  return (
    <div className="relative w-full min-h-screen p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4 px-4">
        <img src="/amotur.png" className="h-[80px] ml-17" alt="Logo AmoTur" />

        <SearchBar
          search={inputValue}
          setSearch={setInputValue}
          suggestions={filteredSuggestions}
          onSelect={handleSelect}
          onEnter={handleEnter}
        />
      </div>

      <Map search={search} setSearch={setSearch} />
    </div>
  );
}
