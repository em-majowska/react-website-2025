import React from 'react';
import Input from './Input.jsx';

const SearchDeals = () => {
  return (
    <section className="px-4 pt-10 bg-orange-400 sm:bg-transparent rounded-t-4xl container m-auto">
      <div className="text-center p-1 rounded-l-[25px] rounded-r-lg flex sm:bg-orange-400 place-items-center max-w-md m-auto gap-1">
        <i className="fa fa-search p-2 text-white text-2xl"></i>
        <Input placeholder="Rechercher un bon plan..." type="search" />
      </div>
    </section>
  );
};

export default SearchDeals;
