'use client';
import { ChangeEvent } from 'react';
import 'font-awesome/css/font-awesome.min.css';

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="absolute z-50 top-8 right-7 text-black bg-white rounded-full shadow-xl flex items-center px-3 py-2 w-[280px]">
      <input
        type="text"
        placeholder="Buscar lugar..."
        value={search}
        onChange={handleChange}
        className="ml-4 outline-none text-sm bg-transparent"
      />
      <i className="fa fa-search text-blue-600 ml-9" />
    </div>
  );
}
