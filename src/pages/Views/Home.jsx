import { useEffect } from "react";
import { useGetProductsQuery } from "@store/features/app/appApi";
import { useDispatch, useSelector } from "react-redux";
import { appSelector, updateAppProducts } from "@store/features/app/appSlice";
import Button from "@components/Button";
import Input from "@components/Input";
import CardList from "@pages/Modules/CardList/CardList";
import Main from "@pages/Layout/Main";
import FilterArea from "@pages/Modules/FilterArea/FilterArea";
import Basket from "@pages/Modules/BasketArea/Basket";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  const app = useSelector(appSelector);

  console.log(app);

  useEffect(() => {
    if (isLoading) return;
    dispatch(updateAppProducts(products));
  }, [products, isLoading]);

  return (
    <Main>
      <FilterArea />
      {isLoading ? <div>LOADING...</div> : <CardList />}
      <Basket />
    </Main>
  );
};

export default Home;
