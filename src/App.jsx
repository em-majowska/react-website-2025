import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SearchDeals from './components/SearchDeals';
import DealListings from './components/DealListings';
import ViewAllDeals from './components/ViewAllDeals';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <SearchDeals />
      <DealListings />
      <ViewAllDeals />
    </>
  );
};

export default App;
