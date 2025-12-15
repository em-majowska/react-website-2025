import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Input from './Input.jsx';

const SearchDeals = () => {
  return (
    <section className="px-4 pt-10 bg-orange-400 sm:bg-transparent rounded-t-4xl container m-auto">
      <div className="text-center p-1 rounded-l-[25px] rounded-r-lg flex sm:bg-orange-400 place-items-center max-w-md m-auto gap-2">
        <FaSearch className="p-2 size-10 text-white text-2xl" />
        <Input placeholder="Rechercher un bon plan..." type="search" />
      </div>
    </section>
  );
};

export default SearchDeals;
