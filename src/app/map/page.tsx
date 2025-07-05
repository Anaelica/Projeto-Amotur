
'use client';
import { useState } from 'react';
import Map from '@/components/Map'; 
import SearchBar from '@/components/Barra'; 

export default function MapPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="relative w-full h-[100px] p-4 bg-gray-50">
      <div className="mb-4">
        {/* <h2 className="text-2xl font-bold mb-2">Mapa Turístico</h2> */}
        <img src="/amotur.png" className="h-[80px] ml-12" alt="Logo AmoTur"/>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <Map search={search} setSearch={setSearch} />
    </div>
  );
}
