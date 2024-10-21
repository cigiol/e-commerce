import CardList from "@pages/Modules/CardList/CardList";
import Main from "@pages/Layout/Main";
import FilterArea from "@pages/Modules/FilterArea/FilterArea";
import MobileFilter from "@pages/Modules/FilterArea/MobileFilter";

const Home = () => {
  return (
    <Main>
      <FilterArea className="hidden md:block" />
      <MobileFilter className="block md:hidden" />
      <CardList />
    </Main>
  );
};

export default Home;
