import CardList from "@pages/Modules/CardList/CardList";
import Main from "@pages/Layout/Main";
import FilterArea from "@pages/Modules/FilterArea/FilterArea";
import Basket from "@pages/Modules/BasketArea/Basket";

const Home = () => {
  return (
    <Main>
      <FilterArea />
      <CardList />
      <Basket />
    </Main>
  );
};

export default Home;
