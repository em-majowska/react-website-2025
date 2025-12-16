import DealListing from './DealListing';
import deals from '../data/deals.json';

const DealListings = ({ isHome = false }) => {
  const dealListings = isHome ? deals.slice(0, 3) : deals;

  return (
    <div>
      <h2 className="text-3xl font-bold text-white sm:text-orange-500 mb-10">
        {isHome ? 'Offres du moment' : 'Toutes les offres'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-x-5 items-stretch">
        {dealListings.map((deal) => (
          <DealListing key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default DealListings;
