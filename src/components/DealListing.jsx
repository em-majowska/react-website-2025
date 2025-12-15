import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const DealListing = ({ deal, bg = 'bg-orange-50' }) => {
  const [likeDeal, setLikeDeal] = useState(false);

  return (
    <div
      class={`${bg} relative p-4 grid grid-cols-(--grid-cols-40-60) justify-between rounded-l-xl rounded-b-xl shadow-md border-2 border-orange-50 sm:border-orange-200 max-w-md m-auto h-full`}>
      <div
        className={`absolute -top-7 -right-0.5 ${bg} rounded-full border-2 border-orange-50 sm:border-orange-200 text-orange-500 text-lg font-bold p-1 size-14 place-content-center text-center leading-none`}>
        {deal.likes}
        <FaHeart className="inline relative -top-2 ml-0.5 text-[9px]" />
      </div>
      <img src={deal.imageSrc} className="object-cover rounded-md min-h-full" />
      <div className="w-full flex flex-col justify-between">
        <div>
          <p className="text-xs text-gray-600">{deal.type}</p>
          <h3 className="text-xl font-bold">{deal.title}</h3>
        </div>

        <p className="font-bold text-xl text-orange-600 mb-2">{deal.price}</p>

        <div className="mb-2 text-sm">
          <p>{deal.location}</p>
          <p className="text-black font-bold uppercase">{deal.shop}</p>
        </div>

        <div className="flex justify-between align-center gap-3">
          <a
            href={`/deal/${deal.id}`}
            title="Voir les détails de l'offre"
            className="inline-block border-2 h-9 text-sm text-nowrap min-w-min border-orange-300 hover:text-white rounded-lg px-4 py-2 hover:bg-lime-600 hover:border-lime-600 transition-colors">
            Voir l'offre
          </a>
          <button
            onClick={() => setLikeDeal((prevState) => !prevState)}
            title="Liker cet offre"
            className={`flex items-center justify-center min-w-9 size-9 border-2 ${
              likeDeal
                ? 'border-orange-500 bg-orange-500'
                : 'border-orange-300 bg-transparent'
            }
   hover:border-orange-500 transition-colors rounded-lg group hover:cursor-pointer`}>
            <FaHeart
              className={`text-xl transition-all ${
                likeDeal
                  ? 'text-white group-hover:text-white'
                  : 'text-orange-400 group-hover:text-orange-500'
              } group-hover:text-2xl group-hover:animate-wiggle`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealListing;
