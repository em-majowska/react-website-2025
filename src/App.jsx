import NavBar from './components/NavBar';
import Hero from './components/Hero';
import DealListings from './components/DealListings';
import ViewAllDeals from './components/ViewAllDeals';
import SearchDeals from './components/SearchDeals';

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
