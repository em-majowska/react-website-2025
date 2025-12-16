import Hero from '../components/Hero';
import SearchDeals from '../components/SearchDeals';
import DealListings from '../components/DealListings';
import ViewAllDeals from '../components/ViewAllDeals';

const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchDeals />
      <section className="px-4 pt-10 pb-4 bg-orange-400 sm:bg-transparent container m-auto max-w-5xl">
        <DealListings isHome={true} />
        <ViewAllDeals />
      </section>
    </>
  );
};

export default HomePage;
