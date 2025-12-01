import React from 'react';
import logo from '../assets/images/logo.svg';

const ViewAllDeals = () => {
  return (
    <section class="w-full py-10 px-4 bg-orange-400 sm:bg-transparent">
      <a
        href="/deals"
        class=" block m-auto w-fit text-orange-600 font-bold text-center py-4 px-6 rounded-xl shadow-md border-2 border-orange-200 bg-white sm:text-white sm:bg-orange-400 bg-top hover:text-white hover:bg-orange-600 transition-all group">
        Voir toutes les offres
        <img
          src={logo}
          alt=""
          className="size-6 ml-3 inline-block group-hover:animate-wiggle"
        />
      </a>
    </section>
  );
};

export default ViewAllDeals;
