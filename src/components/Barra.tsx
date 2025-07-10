
'use client';

import { ChangeEvent } from 'react';
import { Point } from '@/components/Points';
import 'font-awesome/css/font-awesome.min.css';

type Props = {
  search: string;
  setSearch: (value: string) => void;
  suggestions: Point[];
  onSelect: (name: string) => void;
  onEnter: () => void;
};

export default function SearchBar({
  search,
  setSearch,
  suggestions,
  onSelect,
  onEnter,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onEnter();
  };

  return ( //        className="p-2 text-sm rounded-xl shadow-xl w-[200px] bg-white font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-black "

    <div className="font-semibold text-gray-700 bg-white rounded-xl shadow-xl w-[280px] px-3 py-2">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar lugar..."
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="flex-1 outline-none text-sm bg-transparent ml-2"
        />
        <i className="fa fa-search text-blue-600 ml-2" />
      </div>

      {search && suggestions.length > 0 && (
        <ul className="mt-2 h-[60px] overflow-y-auto text-sm">
          {suggestions.map((sug) => (
            <li
              key={sug.id}
              onClick={() => onSelect(sug.name)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {sug.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
