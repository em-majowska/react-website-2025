import React from 'react';
import Input from './Input.jsx';
import DealListing from './DealListing';
import deals from '.././deals.json';

const DealListings = () => {
  return (
    <section className="bg-background">
      <div className="px-4 pt-10 bg-orange-500 sm:bg-transparent rounded-4xl container m-auto">
        <div className="text-center mb-8 p-1 rounded-l-[25px] rounded-r-lg flex sm:bg-orange-500 place-items-center max-w-md m-auto gap-1">
          <i className="fa fa-search p-2 text-white text-2xl"></i>
          <Input placeholder="Rechercher un bon plan..." type="search" />
        </div>
        <div className="m-auto">
          <h2 className="text-3xl font-bold text-white sm:text-black mt-12 mb-10">
            Offres du moment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-start">
            {deals.map((deal) => (
              <DealListing key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealListings;
