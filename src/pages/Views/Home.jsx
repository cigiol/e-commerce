import CardList from "@pages/Modules/CardList/CardList";
import Main from "@pages/Layout/Main";
import FilterArea from "@pages/Modules/FilterArea/FilterArea";
import BasketArea from "@pages/Modules/BasketArea/BasketArea";

const Home = () => {
  return (
    <Main>
      <FilterArea />
      <CardList />
    </Main>
  );
};

export default Home;
