import React from 'react';
import DealListing from './DealListing';
import deals from '../data/deals.json';

const DealListings = () => {
  const recentDeals = deals.slice(0, 3);

  return (
    <section className="px-4 pt-10 bg-orange-400 sm:bg-transparent container m-auto">
      <div className="m-auto">
        <h2 className="text-3xl font-bold text-white sm:text-orange-600 mb-10">
          Offres du moment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-start">
          {recentDeals.map((deal) => (
            <DealListing key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealListings;
