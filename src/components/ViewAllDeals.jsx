import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const ViewAllDeals = () => {
  return (
    <div className="mt-10">
      <Link
        to="/deals"
        class=" block m-auto w-fit text-orange-500 font-bold text-center px-4 py-2 rounded-lg shadow-md border border-white bg-white sm:text-white sm:bg-orange-400 hover:text-white hover:bg-orange-400 sm:hover:bg-orange-500 transition-all group">
        Voir toutes les offres
        <FaArrowAltCircleRight className="text-2xl inline ml-3 group-hover:animate-wiggle"></FaArrowAltCircleRight>
      </Link>
    </div>
  );
};

export default ViewAllDeals;
